/*
  This is all the businesses for each bounded context, which will be consider as microservices eventually.
  Properties:
    - _id
    - name: String (Business name)
    - description: String (Business description)
    - businessTypes: Array (This should be all the bounded context it belongs too and more details on that business on that bounded context )
      - businessType: ObjectId (reference to the business type bounded context)
      - description: String (describing the business type, or say the business solution)

  - Think of business type as business solution

*/

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const businessSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  businessTypes: {
    type: [{
      businessTypeId: { type: Schema.Types.ObjectId, require: true, ref: 'BusinessTypeEntity' },    //dropDubs: Ensure dropping duplicate records in your schemas
      description: String
    }]
  }
});

module.exports = mongoose.model('Business', businessSchema);
