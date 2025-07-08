// src/utils/custom-http-adapter.js
module.exports = function httpAdapter(config) {
    return require('axios/lib/adapters/xhr')(config);
  };