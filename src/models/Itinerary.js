const { Schema, model, Types } = require("mongoose");

const schemaItinerary = new Schema({
  image:{
    type: String,
  },
  name:{
type: String,
  },
  price: {
    type: Number,
    //require: true,
  },
  likes: {
    type: Number,
    //require: true,
  },
  hashtag: [{
    type: String,
    //require: true,
  }],
  duration:{
    type: String,
  },
  city: 
  {
    type: Types.ObjectId,
    ref: 'City'
  },

});

const Itinerary = model('Itinerary', schemaItinerary);

module.exports = Itinerary;
