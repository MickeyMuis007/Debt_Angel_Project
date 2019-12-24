const BusinessType = require('../../../domain/business-type/business-type.model');

seed = () => {
  console.log('Seeding Business Type')
  return BusinessType.findOne()
    .then(businessType => {
      if (!businessType) {
        return BusinessType.insertMany([
          { name: 'Insurance', description: 'This is the Insurance Bounded Context' },
          { name: 'Money', description: 'This is the Money Bounded Context' },
          { name: 'Investment', description: 'This is the Investments Bounded Context' },
          { name: 'Broadband', description: 'This is the Broadband Bounded Context' }
        ])
      }
    })
    .then(() => console.log('\t- Business Type seed suceeded'))
    .catch(err => console.log('\t- Business Type seed failed:', err));

}

module.exports = seed;