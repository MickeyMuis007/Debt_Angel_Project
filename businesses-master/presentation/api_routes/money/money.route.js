const express = require('express');

const moneyController = require('../../controllers/money/money.controller');

const router = express.Router();
const uri = '/money';

router.get(uri, moneyController.getMonies);
router.get(`${uri}/:id`, moneyController.getMoney);
router.post(uri, moneyController.addMoney);
router.put(`${uri}/:id`, moneyController.updateMoney);
router.delete(`${uri}/:id`, moneyController.deleteMoney);

module.exports = router;