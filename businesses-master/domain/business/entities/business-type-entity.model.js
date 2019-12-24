/*
  Description: 
    - This represent all the bounded contexts which will become microservices
    - This is sync data:
      - Sync data from the business-type-microservice Bounded Context
      - Should note be added, edited or deleted from this Bounded context
    - Properties: 
      - name: String          (Name of the Bounded context)
      - description: String   (Describing the Bounded context)
*/

const mongoose = require('mongoose');

const Schema = mongoose.Schema();

const businessTypeEntitySchema = new Schema({
  name: { type: String, required: true },       
  description: { type: String, required: true }
})

module.exports = mongoose.model('BusinessTypeEntity', businessTypeEntitySchema);