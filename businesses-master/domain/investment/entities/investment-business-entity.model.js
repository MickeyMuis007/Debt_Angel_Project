const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const investmentBusinessEntitySchema = new Schema({
  name: { type: String, unique: true, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('InvestmentBusinessEntity', investmentBusinessEntitySchema);
