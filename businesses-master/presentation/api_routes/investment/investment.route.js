const express = require('express');

const controller = require('../../controllers/investment/investment.controller');

const router = express.Router();
const uri = '/investment';

router.get(uri, controller.getInvestments);
router.get(`${uri}/:id`, controller.getInvestment);
router.post(uri, controller.addInvestment);
router.put(`${uri}/:id`, controller.updateInvestment);
router.delete(`${uri}/:id`, controller.deleteInvestment);

module.exports = router;