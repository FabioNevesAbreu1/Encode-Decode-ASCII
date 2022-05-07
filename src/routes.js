module.exports = Routes = {
   POST: {
      "/encode": require('./controllers/encode'),
      "/decode": require('./controllers/decode'),
   },
};