// src/config/env.js

const envConfig = {
  // API Configuration
  API: {
    URL: process.env.REACT_APP_API_URL || 'http://localhost:8000',
    TIMEOUT: parseInt(process.env.REACT_APP_API_TIMEOUT || '30000', 10),
    ENDPOINTS: {
      AUTH: '/auth',
      PATIENTS: '/patients',
    },
  },

  // Blockchain Configuration
  BLOCKCHAIN: {
    NETWORK: process.env.REACT_APP_BLOCKCHAIN_NETWORK || 'sepolia',
    CONTRACT_ADDRESS: process.env.REACT_APP_CONTRACT_ADDRESS || '',
    INFURA_KEY: process.env.REACT_APP_INFURA_API_KEY || '',
  },

  // App Settings
  APP: {
    DEBUG: process.env.REACT_APP_DEBUG === 'true',
    ENV: process.env.NODE_ENV || 'development',
  },
};

// Validation for critical variables in development mode
if (envConfig.APP.ENV === 'development') {
  const requiredVars = ['REACT_APP_API_URL', 'REACT_APP_BLOCKCHAIN_NETWORK'];
  requiredVars.forEach((varName) => {
    if (!process.env[varName]) {
      console.warn(`⚠️ Environment variable ${varName} is not set. Using fallback value.`);
    }
  });
}

module.exports = envConfig;
