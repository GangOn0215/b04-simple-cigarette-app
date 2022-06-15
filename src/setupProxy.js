const { createProxyMiddleware } = require('http-proxy-middleware');

const apiUrl = 'http://localhost:3001/';
const apiContext = ['/api'];

module.exports = (app) => {
  app.use(
    createProxyMiddleware(apiContext, {
      target: apiUrl,
      changeOrigin: true,
    }),
  );
};
