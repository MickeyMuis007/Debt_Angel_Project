const insuranceSeed = require('./insurance/insurances.seed');
const businessSeed = require('./business/business.seed');
const businessTypeSeed = require('./business-type/business-type.seed');
const broadbandSeed = require('./broadband/broadband.seed');
const investmentSeed = require('./investment/investment.seed');
const moneySeed = require('./money/money.seed');

seed = () => {
  // Just Keep in mind of relations. Then order of seeding will matter
  return insuranceSeed()
    .then(() => businessSeed())
    .then(() =>  businessTypeSeed())
    .then(() => broadbandSeed())
    .then(() => investmentSeed())
    .then(() => moneySeed());
}

module.exports = seed;