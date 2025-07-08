const CONFIG = {
  CONTRACT_ADDRESS: "0x377220624586d920f560f83222A032CA26e367F0",
  INFURA_URL: `https://sepolia.infura.io/v3/${process.env.REACT_APP_INFURA_KEY || ''}`,
  CHAIN_ID: 11155111,
  CONTRACT_ABI: require('../backend/smart-contracts/contracts/MedicalChain.json').abi
};

module.exports = CONFIG;