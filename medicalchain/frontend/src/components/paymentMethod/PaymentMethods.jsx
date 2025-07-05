import React from 'react';
import { Box, Typography, Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material/index.js';
import { AccountBalanceWallet, Smartphone, CreditCard, CurrencyBitcoin } from '@mui/icons-material/index.js';

const paymentOptions = [
  {
    value: 'mobile',
    label: 'Mobile Money',
    icon: <Smartphone />,
  },
  {
    value: 'crypto',
    label: 'Cryptocurrency',
    icon: <CurrencyBitcoin />,
  },
  {
    value: 'card',
    label: 'Credit Card (Visa only)',
    icon: <CreditCard />,
  },
  {
    value: 'wallet',
    label: 'Medichain Wallet',
    icon: <AccountBalanceWallet />,
  },
];

const PaymentMethods = ({ selectedMethod, onChange, error }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl component="fieldset" fullWidth>
      <FormLabel component="legend" sx={{ mb: 2, fontWeight: 'bold' }}>
        Select ONE Payment Method (15,000 FBU)
      </FormLabel>
      {error && (
        <Typography color="error" variant="body2" sx={{ mb: 1 }}>
          {error}
        </Typography>
      )}
      <RadioGroup value={selectedMethod || ''} onChange={handleChange}>
        <Grid container spacing={2}>
          {paymentOptions.map((option) => (
            <Grid item xs={12} sm={6} key={option.value}>
              <FormControlLabel
                value={option.value}
                control={<Radio color="primary" />}
                label={
                  <Box display="flex" alignItems="center">
                    {option.icon}
                    <Typography sx={{ ml: 1 }}>{option.label}</Typography>
                  </Box>
                }
              />
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};

export default PaymentMethods;