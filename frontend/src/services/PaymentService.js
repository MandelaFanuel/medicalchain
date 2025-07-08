import api from '@/api/auth';

const PaymentService = {
  createPayment: async (paymentData) => {
    try {
      // Utilise le endpoint de paiement du wallet si c'est un paiement par wallet
      if (paymentData.payment_method === 'wallet') {
        let paymentType = 'appointment';
        if (paymentData.payment_category === 'doctor_subscription') {
          paymentType = 'subscription';
        }
        
        const response = await api.post('/api/wallet/pay/', {
          amount: paymentData.amount,
          recipient_id: process.env.REACT_APP_MEDICHAIN_ACCOUNT_ID, // ID du compte Medichain
          payment_type: paymentType,
          ...(paymentData.appointment_id && { appointment_id: paymentData.appointment_id })
        });
        return response.data;
      } else {
        // Pour les autres méthodes de paiement
        const response = await api.post('/api/payments/create/', paymentData);
        return response.data;
      }
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getPayments: async () => {
    try {
      const response = await api.get('/api/payments/');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getPaymentDetails: async (paymentId) => {
    try {
      const response = await api.get(`/api/payments/${paymentId}/`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};

export default PaymentService;