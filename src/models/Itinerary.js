const { Schema, model, Types } = require("mongoose");

const schemaItinerary = new Schema({
  cityId: {
    type:String, 
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