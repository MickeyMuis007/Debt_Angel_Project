
const moneyLogic = require('../../../application/logic/money/money.logic')

exports.getMonies = (req, res, next) => {
  moneyLogic.getMonies()
    .then(monies => {
      // TODO: Map models
      res.send(monies)
    })
    .catch(err => {
      res.status(500).send();
      console.log(err);
    });
}

exports.getMoney = (req, res, next) => {
  moneyLogic.getMoney(req.params.id)
    .then(money => {
      // TODO: Map model

      if (!money)
        return res.status(404).send();

      res.send(money);
    })
    .catch(err => {
      res.status(500).send();
      console.log(err);
    });
}

exports.addMoney = (req, res, next) => {
  moneyLogic.addMoney(req.body)
    .then(data => {
      res.location(`${req.url}/${data.id}`).status(201).send(data.money);
    })
    .catch(err => {
      res.status(500).send();
      console.log(err);
    });
}

exports.updateMoney = (req, res, next) => {
  moneyLogic.updateMoney(req.params.id, req.body)
    .then(money => {
      if (!money)
        return res.status(404).send();
      res.send(money);
    })
    .catch(err => {
      res.status(500).send();
      console.log(err);
    });
}

exports.deleteMoney = (req, res, next) => {
  moneyLogic.deleteMoney(req.params.id)
    .then(deletedMoney => {
      if (!deletedMoney)
        return res.status(404).send();

      res.send(deletedMoney);
    })
    .catch(err => {
      res.status(500).send();
      console.log(err);
    });
}