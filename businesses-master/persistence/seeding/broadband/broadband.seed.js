const Broadband = require('../../../domain/broadband/broadband.model');

seed = () => {
  console.log('Seeding Broadband')
  return Broadband.findOne()
    .then(broadband => {
      if (!broadband) {
        return Broadband.insertMany([
          { name: 'ADSL', description: 'ADSL Companies' },
          { name: 'Fibre', description: 'Fibre Companies' },
          { name: 'Mobile Data Plan', description: 'Mobile Data Plan' }
        ])
      }
    })
    .then(() => console.log('\t- Broadband seed suceeded'))
    .catch(err => console.log('\t- Broadband seed failed:', err));
}

module.exports = seed;
