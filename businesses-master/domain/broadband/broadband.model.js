const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const broadbandSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  businesses: {
    type: [{
      businessId: { type: Schema.Types.ObjectId, required: true, ref: 'BroadbandBusinessEntity' }
    }]
  }
});

module.exports = mongoose.model('Broadband', broadbandSchema);