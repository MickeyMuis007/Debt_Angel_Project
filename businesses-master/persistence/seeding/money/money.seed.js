const Money = require('../../../domain/money/money.model');

seed = () => {
  console.log('Seeding Money');
  return Money.findOne().then(money => {
    if (!money) {
      return Money.insertMany([
        { name: 'Credit Loans', description: 'Credit Loans companies' },
        { name: 'Personal Loans', description: 'Personal Loans companies' },
        { name: 'Bank Account', description: 'Bank Account companies' },
        { name: 'Home Loan', description: 'Home Loan companies' },
        { name: 'Savings Account', description: 'Saving Account companies' },
        { name: 'Investment Account', description: 'Investment Account companies' },
        { name: 'Vechicle Finance', description: 'Vechicle Finance companies' },
        { name: 'Student Loans', description: 'Student Loans companies' },
        { name: 'Debt Rescue', description: 'Debt Rescue companies' }
      ])
    }
  })
  .then(result => {
    console.log('\t- Money seed succeeded');
  })
  .catch(err => console.log('\- Money seed failed: ', err));
}

module.exports = seed;
