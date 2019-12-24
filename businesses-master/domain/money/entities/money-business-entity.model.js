const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moneyBusinessEntitySchema = new Schema({
  name: { type: String, unique: true, required: true },
  description: { type: String, required: true }
})

module.exports = mongoose.model('MoneyBusinessEntity', moneyBusinessEntitySchema);