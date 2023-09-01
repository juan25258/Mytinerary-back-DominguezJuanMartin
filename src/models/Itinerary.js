const { Schema, model, Types } = require("mongoose");

const schemaItinerary = new Schema({
  cityId: {
    type: Types.ObjectId, // Referencia al _id de la ciudad
    required: true,
  },
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
   
  },
  Likes: {
    type: Number,
    
  },
  Hashtag: {
    type: String,
    
  }
});

const Itinerary = model("Itinerary", schemaItinerary);

module.exports = Itinerary;