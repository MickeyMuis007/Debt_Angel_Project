const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const insuranceSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  businesses: {
    type: [{
      businessId: { type: Schema.Types.ObjectId, ref: 'InsuranceBusinessEntity', required: true }
    }]
  }
});

module.exports = mongoose.model('Insurance', insuranceSchema);