import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '@/api/auth.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Vérifie l'état de l'authentification au montage
  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const token = localStorage.getItem('access_token');
        if (!token) throw new Error('No token found');

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        const response = await api.get('/api/users/me/');
        setUser(response.data);
        setIsAuthenticated(true);
      } catch (err) {
        console.error('Auth verification failed:', err.message || err);
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    verifyAuth();
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/api/auth/login/', { email, password });
      const { tokens, user } = response.data;

      localStorage.setItem('access_token', tokens.access);
      localStorage.setItem('refresh_token', tokens.refresh);
      api.defaults.headers.common['Authorization'] = `Bearer ${tokens.access}`;

      setUser(user);
      setIsAuthenticated(true);
      navigate('/consultation');
      return true;
    } catch (err) {
      const errorMessage = err.response?.data?.detail || err.message || 'Login failed';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const register = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/api/users/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (formData.get('is_doctor') === 'true') {
        try {
          await api.post('/api/doctors/create/', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
        } catch (doctorError) {
          console.error('Doctor registration error:', doctorError);
        }
      }

      const { tokens, user } = response.data;

      localStorage.setItem('access_token', tokens.access);
      localStorage.setItem('refresh_token', tokens.refresh);
      api.defaults.headers.common['Authorization'] = `Bearer ${tokens.access}`;

      setUser(user);
      setIsAuthenticated(true);
      navigate('/consultation');
      return response.data;
    } catch (err) {
      const errorData = err.response?.data;
      const errorMessage =
        typeof errorData === 'object'
          ? Object.entries(errorData)
              .map(([field, errors]) => `${field}: ${Array.isArray(errors) ? errors.join(' ') : errors}`)
              .join('\n')
          : errorData || err.message || 'Registration failed';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const refreshToken = async () => {
    try {
      const refresh = localStorage.getItem('refresh_token');
      if (!refresh) throw new Error('No refresh token');

      const response = await api.post('/api/auth/refresh/', { refresh });
      const newAccessToken = response.data.access;

      localStorage.setItem('access_token', newAccessToken);
      api.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;

      return newAccessToken;
    } catch (err) {
      console.error('Token refresh failed:', err.message || err);
      logout();
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    delete api.defaults.headers.common['Authorization'];
    setUser(null);
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        loading,
        isLoading,
        isAuthenticated,
        login,
        register,
        logout,
        refreshToken,
      }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
