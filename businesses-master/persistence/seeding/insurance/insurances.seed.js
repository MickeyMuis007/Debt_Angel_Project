const Insurance = require('../../../domain/insurance/insurance.model');

seed = () => {
  console.log('Seeding Insurance');
  return Insurance.findOne().then(insurance => {
    if (!insurance) {
      return Insurance.insertMany([
        { name: 'Car', description: 'Car Insurance companies' },
        { name: 'Home', description: 'Home Insurance companies' },
        { name: 'Business', description: 'Business Insurance companies' },
        { name: 'Life', description: 'Life Insurance companies' },
        { name: 'Funeral', description: 'Funeral Insurance companies' },
        { name: 'Hospital Plan', description: 'Hospital Plan Insurance companies' },
        { name: 'Medical Aid', description: 'Medical Aid Insurance companies' },
        { name: 'Motor Warranty', description: 'Motor Warranty Insurance companies' },
        { name: 'Travel', description: 'Travel Insurance companies' }
      ])
    }
  }).then(result => {
    console.log('\t- Insurance seed succeeded');
  })
  .catch(err => console.log('\t- Insurance seed failed: ', err));
  
}

module.exports = seed;