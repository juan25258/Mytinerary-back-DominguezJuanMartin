const { Schema, model, Types } = require("mongoose");

const schemaItinerary = new Schema({
  Image:{
    type: String,
  },
  Name:{
type: String,
  },
  Price: {
    type: Number,
    //require: true,
  },
  Likes: {
    type: Number,
    //require: true,
  },
  Hashtag: [{
    type: String,
    //require: true,
  }],
  Duration:{
    type: String,
  },
  city: 
  {
    type: Types.ObjectId,
    ref: 'City'
  },

});

const Itinerary = model("Itinerary", schemaItinerary);

module.exports = Itinerary;
