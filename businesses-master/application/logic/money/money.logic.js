const Money = require('../../../domain/money/money.model');
const MoneyDto = require('../../models/dtos/money/money.dto');

exports.getMonies = () => {
  console.log("Get Monies:");
  return Money.find().then(monies => {
    console.log('\t- Successfully got monies');
    const moniesDto = monies.map(money => {
      return new MoneyDto(money);
    });
    return moniesDto;
  });
}

exports.getMoney = (id) => {
  console.log('Get Money:');
  return Money.findById(id).then(money => {
    console.log('\t- Successfully got money');
    const moneyDto = new MoneyDto(money);
    return moneyDto;
  })
  .catch(err => console.log(err));
}

exports.addMoney = reqBody => {
  console.log("Adding Money: ")
  const money = new Money({
    name: reqBody.name,
    description: reqBody.description,
    businesses: reqBody.businesses
  });

  return money.save()
    .then(money => {
      console.log('\t- Successfully added money');
      const moneyDto = new MoneyDto(money);
      return {money: moneyDto, id: money.id};
    })
    .catch(err => console.log(err));
}

exports.updateMoney = (id, reqBody) => {
  console.log('Updating Money: ')
  return Money.findById(id)
    .then(money => {
      if (!money)
        return money;
      money.name = reqBody.name;
      money.description = reqBody.description;
      money.businesses = reqBody.businesses;
      return money.save();
    })
    .then(money => {
      console.log('\t- Successfully updated Money.');
      const moneyDto = new MoneyDto(money);
      return moneyDto;
    })
    .catch(err => console.log(err));
}

exports.deleteMoney = (id) => {
  console.log('Deleting Money: ');
  return Money.findByIdAndDelete(id)
    .then(deletedMoney => {
      console.log('\t- Successfully deleted Money');
      const moneyDto = null;
      if (deletedMoney)
        moneyDto = new MoneyDto(deletedMoney)
      
      return moneyDto;
    })
    .catch(err => console.log(err));
}