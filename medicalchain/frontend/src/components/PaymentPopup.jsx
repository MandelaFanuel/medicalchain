import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, Typography, Box, CircularProgress, Alert
} from '@mui/material';
import { AttachMoney, CheckCircle, Error } from '@mui/icons-material';
import api from '@/api/auth';
import { useAuth } from '@/context/AuthContext';

const PaymentPopup = ({ open, onClose, amount = 15000, description = "Doctor Subscription Fee", paymentCategory = "doctor_subscription" }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('wallet');

  const handlePayment = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await api.post('/api/payments/', {
        amount: amount,
        payment_method: paymentMethod,
        payment_category: paymentCategory
      });
      
      if (response.data.payment_status === 'Paid') {
        setSuccess(true);
        setTimeout(() => {
          onClose(true);
        }, 2000);
      } else {
        setError('Payment processing failed. Please try another method.');
      }
    } catch (err) {
      setError(err.response?.data?.detail || err.message || 'Payment failed');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      onClose(success);
    }
  };

  // Format the amount safely
  const formattedAmount = (amount || 0).toLocaleString();

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {success ? 'Payment Successful' : 'Complete Payment'}
      </DialogTitle>
      <DialogContent>
        {success ? (
          <Box textAlign="center" py={4}>
            <CheckCircle color="success" sx={{ fontSize: 60, mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Payment of {formattedAmount} FBU completed successfully!
            </Typography>
            <Typography>
              Your doctor account will be activated shortly.
            </Typography>
          </Box>
        ) : (
          <>
            <Box mb={3}>
              <Typography variant="h6" gutterBottom>
                {description}
              </Typography>
              <Typography variant="h4" color="primary" gutterBottom>
                {formattedAmount} FBU
              </Typography>
              <Typography variant="body2" color="textSecondary">
                This is a one-time payment for doctor account verification.
              </Typography>
            </Box>

            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <Box mb={3}>
              <Typography variant="subtitle1" gutterBottom>
                Select Payment Method
              </Typography>
              <Box display="flex" flexDirection="column" gap={2}>
                <Button
                  variant={paymentMethod === 'wallet' ? 'contained' : 'outlined'}
                  onClick={() => setPaymentMethod('wallet')}
                  startIcon={<AttachMoney />}
                >
                  Medichain Wallet
                </Button>
                <Button
                  variant={paymentMethod === 'mobile' ? 'contained' : 'outlined'}
                  onClick={() => setPaymentMethod('mobile')}
                >
                  Mobile Money
                </Button>
              </Box>
            </Box>
          </>
        )}
      </DialogContent>
      <DialogActions>
        {!success && (
          <>
            <Button onClick={handleClose} disabled={loading}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handlePayment}
              disabled={loading}
              startIcon={loading ? <CircularProgress size={20} /> : <AttachMoney />}
            >
              {loading ? 'Processing...' : 'Pay Now'}
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default PaymentPopup;