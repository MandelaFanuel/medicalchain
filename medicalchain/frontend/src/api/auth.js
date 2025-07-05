import axios from 'axios';
import envConfig from '@/config/env.js';

const auth = axios.create({
  baseURL: envConfig.API.URL,
  timeout: envConfig.API.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Blockchain-Network': envConfig.BLOCKCHAIN.NETWORK,
  },
  withCredentials: true,
});

// Request interceptor
auth.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
auth.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.error('API Error:', error);
    const originalRequest = error.config;

    let errorMessage = 'An error occurred';

    if (error.code === 'ECONNABORTED') {
      errorMessage = 'Request timeout. Please try again.';
    } else if (!error.response) {
      errorMessage = 'Network error. Please check your internet connection.';
    } else {
      switch (error.response.status) {
        case 400:
          errorMessage = 'Invalid request data';
          break;
        case 401:
          if (!originalRequest._retry) {
            originalRequest._retry = true;
            try {
              const refresh = localStorage.getItem('refresh_token');
              if (!refresh) throw new Error('No refresh token');
              const response = await auth.post('/api/auth/refresh/', { refresh });
              const newAccessToken = response.data.access;
              localStorage.setItem('access_token', newAccessToken);
              auth.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
              originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
              return auth(originalRequest);
            } catch (refreshError) {
              console.error('Token refresh failed:', refreshError);
              localStorage.removeItem('access_token');
              localStorage.removeItem('refresh_token');
              if (!window.location.pathname.includes('/login')) {
                window.location.href = '/login';
              }
              errorMessage = 'Session expired. Please login again.';
            }
          }
          break;
        case 403:
          errorMessage = 'You are not authorized to perform this action';
          break;
        case 404:
          errorMessage = 'Resource not found';
          break;
        case 500:
          errorMessage = 'Server error. Please try again later.';
          break;
        default:
          errorMessage = 'An unexpected error occurred';
      }
    }

    if (error.response?.data) {
      const apiError = error.response.data;
      if (apiError.detail) {
        error.drfMessage = apiError.detail;
      } else if (apiError.non_field_errors) {
        error.drfMessage = apiError.non_field_errors.join(' ');
      } else if (typeof apiError === 'object') {
        error.drfMessage = Object.entries(apiError)
          .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(' ') : value}`)
          .join('\n');
      }
    }

    error.message = error.drfMessage || errorMessage;
    return Promise.reject(error);
  }
);

export default auth;