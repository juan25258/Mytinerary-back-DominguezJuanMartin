const { Schema, model, Types } = require("mongoose");

const schemaCity = new Schema({
  image: {
    type: String,
    require: false,
  },
  name: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  details: {
    type: String,
    
  },
  moreDetails: {
    type: String,
    
  },
});

const City = model("City", schemaCity);

module.exports = City;
