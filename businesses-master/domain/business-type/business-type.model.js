/*
  Description: 
    - This represent all the bounded contexts which will become microservices
    - So I'm splitting the business types into bounded context
      - Reason so that when you focus on advertising certain business with a specific type, that it can work independantly.
        Also so each team can create this seperately
    - Properties: 
      - name: String          (Name of the Microservice)
      - description: String   (Describing the Microservice)
*/

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const businessTypeSchema = new Schema({
  name: { type: String, required: true, unique: true },       
  description: { type: String, required: true }
});

module.exports = mongoose.model('BusinessType', businessTypeSchema);