import api from '@/api/auth';

const WalletService = {
  getBalance: async () => {
    try {
      const response = await api.get('/api/wallet/');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deposit: async (amount) => {
    try {
      const response = await api.post('/api/wallet/deposit/', { amount });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  makePayment: async (amount, recipientId, paymentType, appointmentId = null) => {
    try {
      const payload = {
        amount,
        recipient_id: recipientId,
        payment_type: paymentType
      };
      
      if (appointmentId) {
        payload.appointment_id = appointmentId;
      }
      
      const response = await api.post('/api/wallet/pay/', payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  checkBalance: async (amount) => {
    try {
      const response = await api.get('/api/wallet/check_balance/', {
        params: { amount }
      });
      return response.data.has_sufficient_balance;
    } catch (error) {
      throw error;
    }
  },

  getTransactionHistory: async () => {
    try {
      const response = await api.get('/api/wallet/transactions/');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default WalletService;