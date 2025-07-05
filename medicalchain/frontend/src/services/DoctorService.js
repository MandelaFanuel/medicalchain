import api from '@/api/auth.js';

const DoctorService = {
  getDoctors: async () => {
    try {
      const response = await api.get('/api/doctors/');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  createDoctorProfile: async (doctorData) => {
    try {
      const formData = new FormData();
      for (const key in doctorData) {
        if (doctorData[key] !== null && doctorData[key] !== undefined) {
          formData.append(key, doctorData[key]);
        }
      }
      
      const response = await api.post('/api/doctors/create/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};

export default DoctorService;