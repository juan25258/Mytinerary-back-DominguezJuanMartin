const { Schema, model, Types } = require("mongoose");

const schemaItinerary = new Schema({
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
  Price: {
    type: Number,
    require: true,
  },
  Likes: {
    type: Number,
    
  },
  Hashtag: {
    type: String,
    require: true,
  }
});

const Itinerary = model("Itinerary", schemaItinerary);

module.exports = Itinerary;