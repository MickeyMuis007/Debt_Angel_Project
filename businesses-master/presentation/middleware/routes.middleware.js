const moneyRouter = require('../api_routes/money/money.route');
const investmentRouter = require('../api_routes/investment/investment.route');


module.exports = function(app) {
  app.use(moneyRouter);
  app.use(investmentRouter);
}
