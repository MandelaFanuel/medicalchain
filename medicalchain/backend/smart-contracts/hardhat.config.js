require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// Vérification des variables critiques
if (!process.env.DEPLOYER_PRIVATE_KEY) {
  throw new Error("DEPLOYER_PRIVATE_KEY manquant dans .env");
}
if (!process.env.INFURA_API_KEY) {
  throw new Error("INFURA_API_KEY manquant dans .env");
}

module.exports = {
  solidity: {
    version: "0.8.26",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL, // Utilisation directe de l'URL complète
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
      chainId: 11155111,
      gasPrice: "auto"
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};