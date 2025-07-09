// const path = require('path');
// const { config } = require('dotenv');

// /**
//  * @typedef {'development' | 'production' | 'test'} NodeEnvType
//  */

// /**
//  * @typedef {Object} EnvConfig
//  * @property {string} API_URL
//  * @property {NodeEnvType} NODE_ENV
//  * @property {number} API_TIMEOUT
//  */

// /** @type {EnvConfig} */
// const envConfig = {
//   API_URL: 'http://localhost:8000',
//   NODE_ENV: 'development',
//   API_TIMEOUT: 30000,
// };

// try {
//   const envPath = path.resolve(__dirname, '../.env');
//   const result = config({ path: envPath });

//   if (result.error) {
//     console.warn('⚠️ Fichier .env non trouvé, utilisation des variables par défaut');
//   } else {
//     if (process.env.API_URL) {
//       envConfig.API_URL = process.env.API_URL;
//     }

//     if (['development', 'production', 'test'].includes(process.env.NODE_ENV)) {
//       envConfig.NODE_ENV = /** @type {NodeEnvType} */ (process.env.NODE_ENV);
//     } else if (process.env.NODE_ENV) {
//       console.warn(`⚠️ NODE_ENV "${process.env.NODE_ENV}" non reconnu. Utilisation de 'development'`);
//     }

//     if (process.env.API_TIMEOUT) {
//       const timeout = parseInt(process.env.API_TIMEOUT, 10);
//       if (!isNaN(timeout)) {
//         envConfig.API_TIMEOUT = timeout;
//       }
//     }
//   }
// } catch (error) {
//   console.warn('⚠️ Erreur lors du chargement du fichier .env:', error.message);
// }

// if (!envConfig.API_URL) {
//   throw new Error('❌ La variable API_URL est requise');
// }

// module.exports = envConfig;
