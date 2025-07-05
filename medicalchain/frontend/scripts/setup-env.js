import { existsSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const envConfigs = {
  '.env': {
    required: true,
    template: `# LOCAL OVERRIDES (gitignoré)
REACT_APP_API_URL=
REACT_APP_DEBUG=true
REACT_APP_API_TIMEOUT=30000
REACT_APP_BLOCKCHAIN_NETWORK=sepolia`
  },
  '.env.development': {
    required: false,
    template: `# DÉVELOPPEMENT
REACT_APP_API_URL=http://localhost:8000
REACT_APP_DEBUG=true
REACT_APP_CONTRACT_ADDRESS=0x377220624586d920f560f83222A032CA26e367F0
REACT_APP_BLOCKCHAIN_NETWORK=sepolia
REACT_APP_INFURA_API_KEY=7dafda1f674d4ec49afb53fc6bfe8448
REACT_APP_ETHERSCAN_API_KEY=N1C827X4GWPEFQ4WT7PM11NV12J5PZ94JR`
  },
  '.env.production': {
    required: false,
    template: `# PRODUCTION
REACT_APP_API_URL=https://api.medicalchain.com
REACT_APP_DEBUG=false
REACT_APP_CONTRACT_ADDRESS=0x377220624586d920f560f83222A032CA26e367F0
REACT_APP_BLOCKCHAIN_NETWORK=mainnet
REACT_APP_INFURA_API_KEY=votre_cle_production`
  }
};

Object.entries(envConfigs).forEach(([fileName, { required, template }]) => {
  const filePath = resolve(__dirname, '..', fileName);
  
  if (!existsSync(filePath)) {
    if (required) {
      console.error(`❌ Fichier obligatoire manquant: ${fileName}`);
      console.info(`💡 Template recommandé :\n${template}`);
      process.exit(1);
    } else {
      writeFileSync(filePath, template);
      console.log(`✅ ${fileName} créé avec template par défaut`);
    }
  } else {
    console.log(`✓ ${fileName} présent`);
  }
});