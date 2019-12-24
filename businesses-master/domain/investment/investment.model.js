const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const investmentSchema = new Schema({
  name: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  businesses: {
    type: [{
      businessId: { type: Schema.Types.ObjectId, required: true, ref: 'InvestmentBusinessEntity' }
    }]
  }
});

module.exports = mongoose.model('Investment', investmentSchema);