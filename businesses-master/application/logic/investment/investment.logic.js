const Investment = require('../../../domain/investment/investment.model');
const InvestmentDto = require('../../models/dtos/investment/investment.dto');

exports.getInvestments = () => {
  console.log('Get Investments');
  return Investment.find()
    .then(investments => {
      console.log('\t- Successfully got investments');
      const investmentsDto = investments.map(investment => {
        return new InvestmentDto(investment);
      })
      return investmentsDto;
    });
}

exports.getInvestment = (id) => {
  console.log('Get Investment:');
  return Investment.findById(id)
    .then(investment => {
      console.log('\t- Succeffully got investment')
      let investmentDto = null;
      if (investment)
        investmentDto = new InvestmentDto(investment);

      return investmentDto;
    });
}

exports.addInvestment = reqBody => {
  console.log('Adding investment:');
  const investment = new Investment(reqBody);
  console.log(investment);
  return investment.save()
    .then(investment => {
      console.log('\t- Successfully add investment');
      const investmentDto = new InvestmentDto(investment);
      return investmentDto;
    });
}

exports.updateInvestment = (id, reqBody) => {
  console.log('Updating: ');
  return Investment.findById(id)
    .then(investment => {
      if (!investment)
        return investment;

      investment.name = reqBody.name;
      investment.description = reqBody.description;
      investment.businesses = reqBody.businesses;
      return investment.save();
    })
    .then(investment => {
      console.log('\t- Successfully updated Investment');
      let investmentDto = null;
      if (investment)
        investmentDto = new InvestmentDto(investment)

      return investmentDto;
    });
}

exports.deleteInvestment = (id) => {
  console.log('Deleting investment:');
  return Investment.findByIdAndDelete(id)
    .then(deletedInvestment => {
      console.log('\t- Successfully deleted investment');
      let investmentDto = null;
      if (deletedInvestment)
        investmentDto = new InvestmentDto(deletedInvestment);
      return investmentDto;
    })
}

