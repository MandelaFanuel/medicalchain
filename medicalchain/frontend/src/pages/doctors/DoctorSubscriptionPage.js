import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext.jsx';
import WalletService from '@/services/WalletService.js';
import {
  Box, Typography, Card, CardContent,
  Button, Alert, CircularProgress, Grid,
  List, ListItem, ListItemIcon, ListItemText
} from '@mui/material';
import {
  MedicalServices, CheckCircle, Payment,
  AccountBalanceWallet, Warning
} from '@mui/icons-material';

const DoctorSubscriptionPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubscription = async () => {
    setLoading(true);
    setError(null);
    
    try {
      if (user?.is_verified_doctor) {
        throw new Error("You are already a verified doctor");
      }

      await WalletService.makePayment(
        15000,
        process.env.REACT_APP_MEDICHAIN_ACCOUNT_ID,
        'subscription'
      );

      setSuccess(true);
      setTimeout(() => navigate('/doctor/register'), 2000);
    } catch (err) {
      setError(err.message || 'Subscription failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        <MedicalServices sx={{ verticalAlign: 'middle', mr: 1 }} />
        Doctor Subscription
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Subscription successful! You can now complete your doctor profile.
        </Alert>
      )}

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Subscription Benefits
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Verified Doctor Badge" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Appointment Scheduling" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Patient Management Tools" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Subscription Fee: 15,000 FBU
              </Typography>
              
              <Typography variant="body1" paragraph>
                Pay the one-time subscription fee to activate your doctor account.
              </Typography>

              <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={loading ? <CircularProgress size={20} /> : <AccountBalanceWallet />}
                  onClick={handleSubscription}
                  disabled={loading || success}
                >
                  {loading ? 'Processing...' : 'Pay with Wallet'}
                </Button>

                <Alert severity="warning" icon={<Warning />}>
                  After payment, you'll need to complete your doctor profile.
                </Alert>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DoctorSubscriptionPage;