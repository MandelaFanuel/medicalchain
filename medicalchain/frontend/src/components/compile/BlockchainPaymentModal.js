import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  CircularProgress,
  Alert,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import { useWeb3 } from '@/context/Web3Context';
import { ethers } from 'ethers';


const BlockchainPaymentModal = ({ 
  open, 
  onClose, 
  onSuccess, 
  amount, 
  paymentCategory,
  appointmentId = null 
}) => {
  const { provider, address, isConnected, connectWallet } = useWeb3();
  const [network, setNetwork] = useState('goerli'); // Testnet par défaut
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const handlePayment = async () => {
    if (!isConnected) {
      await connectWallet();
      return;
    }

    setIsProcessing(true);
    setError('');

    try {
      // 1. Initier le paiement via votre API Django
      const response = await fetch('/api/payment/blockchain/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          payment_category: paymentCategory,
          appointment_id: appointmentId,
          wallet_address: address,
          network
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Payment failed');

      // 2. Envoyer la transaction
      const tx = await provider.getSigner().sendTransaction({
        to: data.recipient_address,
        value: ethers.utils.parseEther(amount.toString())
      });

      // 3. Attendre la confirmation
      await tx.wait();

      // 4. Vérifier avec le backend
      const verifyResponse = await fetch('/api/payment/verify/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          payment_id: data.payment_id,
          tx_hash: tx.hash
        })
      });

      const verifyData = await verifyResponse.json();
      if (!verifyResponse.ok) throw new Error(verifyData.error || 'Verification failed');

      onSuccess(); // Fermer le modal et actualiser l'UI
    } catch (err) {
      console.error('Payment error:', err);
      setError(err.message || 'Payment failed');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Paiement Crypto</DialogTitle>
      <DialogContent>
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Montant à payer : {amount} FBU (équivalent en crypto)
          </Typography>

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Réseau</InputLabel>
            <Select
              value={network}
              onChange={(e) => setNetwork(e.target.value)}
              label="Réseau"
            >
              <MenuItem value="goerli">Goerli (Testnet)</MenuItem>
              <MenuItem value="mumbai">Mumbai (Polygon Testnet)</MenuItem>
              <MenuItem value="mainnet">Ethereum Mainnet</MenuItem>
            </Select>
          </FormControl>

          {!isConnected ? (
            <Button
              variant="contained"
              onClick={connectWallet}
              fullWidth
              size="large"
            >
              Connecter Wallet
            </Button>
          ) : (
            <Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Wallet connecté : {address.substring(0, 6)}...{address.substring(38)}
              </Typography>
              {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error}
                </Alert>
              )}
            </Box>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={isProcessing}>
          Annuler
        </Button>
        <Button
          onClick={handlePayment}
          variant="contained"
          disabled={!isConnected || isProcessing}
          startIcon={isProcessing ? <CircularProgress size={20} /> : null}
        >
          {isProcessing ? 'En cours...' : 'Confirmer'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BlockchainPaymentModal;