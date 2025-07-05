import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, Box, Alert, Select, MenuItem, InputLabel } from '@mui/material';
import { AttachMoney, Send, CheckCircle } from '@mui/icons-material';
import PaymentMethods from '@/components/paymentMethod/PaymentMethods.jsx';
import FileUploadField from '@/components/doctor/FileUploadField.js';
import FormSection from '@/components/doctor/FormSection.js';

const PaymentInfoForm = ({ formData, setFormData, errors, handleFileChange }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [cryptoNetwork, setCryptoNetwork] = useState('ethereum');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: ''
  });
  const [transactionSuccess, setTransactionSuccess] = useState(false);

  const handlePaymentMethodChange = (method) => {
    setFormData(prev => ({
      ...prev,
      payment_method: method
    }));
  };

  const handleSubmitPayment = () => {
    // Ici vous ajouteriez la logique de soumission réelle
    setTransactionSuccess(true);
  };

  const cryptoNetworks = [
    { value: 'ethereum', label: 'Ethereum (ETH)', address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e' },
    { value: 'bitcoin', label: 'Bitcoin (BTC)', address: '3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5' },
    { value: 'bnb', label: 'BNB Smart Chain (BNB)', address: 'bnb136ns6lfw4zs5hg4n85vdthaad7hq5m4gtkgf23' }
  ];

  const renderPaymentForm = () => {
    switch (formData.payment_method) {
      case 'mobile':
        return (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>Mobile Money Payment</Typography>
            <TextField
              fullWidth
              label="Phone Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter your mobile money number"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Amount"
              value="15000 FBU"
              disabled
              sx={{ mb: 2 }}
            />
            <Button 
              variant="contained" 
              color="primary"
              endIcon={<Send />}
              onClick={handleSubmitPayment}
            >
              Send Payment
            </Button>
          </Box>
        );
      case 'crypto':
        return (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>Cryptocurrency Payment</Typography>
            <InputLabel id="crypto-network-label">Select Network</InputLabel>
            <Select
              fullWidth
              labelId="crypto-network-label"
              value={cryptoNetwork}
              onChange={(e) => setCryptoNetwork(e.target.value)}
              sx={{ mb: 2 }}
            >
              {cryptoNetworks.map(network => (
                <MenuItem key={network.value} value={network.value}>
                  {network.label}
                </MenuItem>
              ))}
            </Select>
            <TextField
              fullWidth
              label="Wallet Address"
              value={cryptoNetworks.find(n => n.value === cryptoNetwork)?.address || ''}
              disabled
              sx={{ mb: 2 }}
            />
            <Typography variant="body2" color="error" gutterBottom>
              Warning: Send only {cryptoNetwork.toUpperCase()} to this address. Sending other assets may result in permanent loss.
            </Typography>
            <Button 
              variant="contained" 
              color="primary"
              endIcon={<Send />}
              onClick={handleSubmitPayment}
            >
              I've Sent the Payment
            </Button>
          </Box>
        );
      case 'card':
        return (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>Credit Card Payment (Visa)</Typography>
            <TextField
              fullWidth
              label="Card Number"
              value={cardDetails.number}
              onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
              placeholder="1234 5678 9012 3456"
              sx={{ mb: 2 }}
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Expiry Date"
                  value={cardDetails.expiry}
                  onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                  placeholder="MM/YY"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="CVV"
                  value={cardDetails.cvv}
                  onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                  placeholder="123"
                />
              </Grid>
            </Grid>
            <Button 
              variant="contained" 
              color="primary"
              sx={{ mt: 2 }}
              endIcon={<Send />}
              onClick={handleSubmitPayment}
            >
              Pay 15,000 FBU
            </Button>
          </Box>
        );
      case 'wallet':
        return (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>Medichain Wallet Payment</Typography>
            <Typography sx={{ mb: 2 }}>
              Please transfer 15,000 FBU to the following Medichain wallet address:
            </Typography>
            <TextField
              fullWidth
              label="Medichain Wallet Address"
              value="medichain_superuser_wallet"
              disabled
              sx={{ mb: 2 }}
            />
            <Typography variant="body2" sx={{ mb: 2 }}>
              Don't have a Medichain wallet? <Button color="primary">Create one now</Button>
            </Typography>
            <Button 
              variant="contained" 
              color="primary"
              endIcon={<Send />}
              onClick={handleSubmitPayment}
            >
              Confirm Payment
            </Button>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <FormSection title="Payment Information">
      <Grid item xs={12}>
        <PaymentMethods
          selectedMethod={formData.payment_method}
          onChange={handlePaymentMethodChange}
          error={errors.payment_method}
        />
      </Grid>

      {formData.payment_method && renderPaymentForm()}

      {transactionSuccess && (
        <Grid item xs={12} sx={{ mt: 3 }}>
          <Alert severity="success" icon={<CheckCircle fontSize="inherit" />}>
            Payment successful! Your registration is now complete.
          </Alert>
        </Grid>
      )}

      <Grid item xs={12} sx={{ mt: 3 }}>
        <FileUploadField
          label="Upload Payment Proof (Optional)"
          preview={formData.payment_proof ? URL.createObjectURL(formData.payment_proof) : null}
          onChange={(file) => handleFileChange('payment_proof', file)}
          error={errors.payment_proof}
          icon={<AttachMoney sx={{ color: '#114680' }} />}
        />
      </Grid>
    </FormSection>
  );
};

export default PaymentInfoForm;