import { createContext, useContext, useEffect, useState } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';

const Web3Context = createContext();

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: process.env.REACT_APP_INFURA_ID,
    }
  }
};

export const Web3Provider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [address, setAddress] = useState('');
  const [chainId, setChainId] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal({
        cacheProvider: true,
        providerOptions,
      });

      const instance = await web3Modal.connect();
      const newProvider = new ethers.providers.Web3Provider(instance);
      const newSigner = newProvider.getSigner();
      
      setProvider(newProvider);
      setSigner(newSigner);
      
      const address = await newSigner.getAddress();
      const network = await newProvider.getNetwork();
      
      setAddress(address);
      setChainId(network.chainId.toString());
      setIsConnected(true);
      
      instance.on('accountsChanged', (accounts) => {
        setAddress(accounts[0] || '');
      });

      instance.on('chainChanged', (chainId) => {
        setChainId(parseInt(chainId, 16).toString());
      });

    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  const disconnectWallet = async () => {
    if (provider?.provider?.disconnect) {
      await provider.provider.disconnect();
    }
    setProvider(null);
    setSigner(null);
    setAddress('');
    setChainId('');
    setIsConnected(false);
  };

  return (
    <Web3Context.Provider value={{
      provider,
      signer,
      address,
      chainId,
      isConnected,
      connectWallet,
      disconnectWallet
    }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);