const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moneySchema = new Schema({
  name: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  businesses: {
    type: [{
      businessId: { type: Schema.Types.ObjectId, required: true, ref: 'MoneyBusinessEntity' }
    }]
  }
});

module.exports = mongoose.model('Money', moneySchema);