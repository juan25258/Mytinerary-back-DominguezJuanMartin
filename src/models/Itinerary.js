const { Schema, model, Types } = require("mongoose");

const schemaItinerary = new Schema({
  Price: {
    type: Number,
   
  },
  Likes: {
    type: Number,
    
  },
  Hashtag: {
    type: String,  
  },

  city: [
    {
      type: Types.ObjectId,
      ref: 'City'
    }
  ]
});

const Itinerary = model('Itinerary', schemaItinerary);

module.exports = Itinerary;