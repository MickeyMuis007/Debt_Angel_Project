const investmentLogic = require('../../../application/logic/investment/investment.logic');

exports.getInvestments = (req, res, next) => {
  investmentLogic.getInvestments()
    .then(investments => {
      res.send(investments);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send();
    });
}

exports.getInvestment = (req, res, next) => {
  investmentLogic.getInvestment(req.params.id)
    .then(investment => {
      if (!investment)
        return res.status(404).send();

      res.send(investment);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send();
    })
}

exports.addInvestment = (req, res, next) => {
  investmentLogic.addInvestment(req.body)
    .then(investment => {
      res.location(`${req.url}/${investment.id}`).status(201).send(investment);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send();
    });
}

exports.updateInvestment = (req, res, next) => {
  investmentLogic.updateInvestment(req.params.id, req.body)
    .then(investment => {
      if (!investment)
        return res.status(404).send();
      res.send(investment);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send();
    });
}

exports.deleteInvestment = (req, res, next) => {
  investmentLogic.deleteInvestment(req.params.id)
    .then(deletedInvestment => {
      if (!deletedInvestment)
        return res.status(404).send();
      res.send(deletedInvestment);
    })
    .catch(err => {
      console.log(err);
      req.status(500).send();
    })
}
