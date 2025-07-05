import React, { useState, useContext } from 'react';
import { useWeb3 } from '@/context/Web3Context.js';
import axios from 'axios';
import { ethers } from 'ethers';
import contractABI from '../contracts/MedicalChain.json';

const BlockchainPayment = ({ amount, paymentCategory, appointmentId, onSuccess }) => {
  const { provider, signer, address, isConnected, connectWallet } = useWeb3();
  const [network, setNetwork] = useState('ethereum');
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
      // 1. Get payment details from backend
      const paymentResponse = await axios.post('/api/payment/blockchain/', {
        amount,
        payment_category: paymentCategory,
        appointment_id: appointmentId,
        wallet_address: address,
        network
      });

      const { 
        payment_id, 
        recipient_address, 
        contract_address, 
        abi 
      } = paymentResponse.data;

      // 2. Sign and send transaction
      const contract = new ethers.Contract(contract_address, abi, signer);
      
      const tx = await contract.makePayment(
        recipient_address,
        ethers.utils.parseEther(amount.toString()),
        {
          value: ethers.utils.parseEther(amount.toString())
        }
      );

      // 3. Verify transaction
      await tx.wait();
      
      await axios.post('/api/payment/verify/', {
        payment_id,
        tx_hash: tx.hash
      });

      onSuccess(payment_id);
    } catch (err) {
      console.error('Payment error:', err);
      setError(err.message || 'Payment failed');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="blockchain-payment">
      {!isConnected ? (
        <button onClick={connectWallet} className="btn btn-primary">
          Connect Wallet
        </button>
      ) : (
        <div>
          <div className="mb-3">
            <label>Network</label>
            <select 
              value={network} 
              onChange={(e) => setNetwork(e.target.value)}
              className="form-control"
            >
              <option value="ethereum">Ethereum</option>
              <option value="bnb">Binance Smart Chain</option>
              <option value="matic">Polygon</option>
            </select>
          </div>
          
          <div className="mb-3">
            <p>Connected Wallet: {address}</p>
            <p>Amount: {amount} FBU</p>
          </div>
          
          <button 
            onClick={handlePayment} 
            disabled={isProcessing}
            className="btn btn-primary"
          >
            {isProcessing ? 'Processing...' : 'Pay with Crypto'}
          </button>
          
          {error && <div className="alert alert-danger mt-3">{error}</div>}
        </div>
      )}
    </div>
  );
};

export default BlockchainPayment;