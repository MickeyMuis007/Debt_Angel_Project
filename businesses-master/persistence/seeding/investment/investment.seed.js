const Investment = require('../../../domain/investment/investment.model');

seed = () => {
  console.log('Seeding Investment');
  return Investment.findOne().then(investment => {
    if (!investment){
      return Investment.insertMany([
        { name: 'Financial Planning', description: 'Financial Planning companies'},
        { name: 'Retirement Planning', description: 'Retirement Planning companies'},
        { name: 'Share Trading', description: 'Share Trading companies'},
        { name: 'Unit Trust', description: 'Unit Trust'},
        { name: 'Forex Trading', description: 'Forex Trading'},
        { name: 'CFD Trading', description: 'CFD Trading'},
        { name: 'Invest in gold', description: 'Invest in gold companies'}
      ]);
    }
  })
  .then(result => {
    console.log('\t- Investment seed succeeded');
  })
  .catch(err => console.log('\t- Investment seed failed: ', err));
}

module.exports = seed;