const Itinerary = require("../models/Itinerary");

const getItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find();
    res.status(200).json(itineraries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getItinerary = async (req, res) => {
  try {
    const { id } = req.params;
    const itinerary = await Itinerary.findById(id).populate('city');
    
    if (!itinerary) {
      return res.status(404).json({ message: "Itinerary not found" });
    }
    
    res.status(200).json(itinerary);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
    getItineraries,
    getItinerary,
}