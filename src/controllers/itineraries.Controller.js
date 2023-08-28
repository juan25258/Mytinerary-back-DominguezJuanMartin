const Itinerary = require("../models/Itinerary");

module.exports = {
  getItineraries: async (req, res) => {
    try {
      const itineraries = await Itinerary.find();
      res.json(itineraries);
    } catch (error) {
      res.status(500).json({ error: "Error fetching itineraries" });
    }
  },
  getItineraryForCity: async (req, res) => {
    const cityId = req.params.cityId;
    try {
      const itinerary = await Itinerary.findOne({ cityId });
      if (!itinerary) {
        return res.status(404).json({ error: "Itinerary not found" });
      }
      console.log('Itinerary response:', itinerary); 
      res.json(itinerary);
    } catch (error) {
      console.error('Error fetching itinerary:', error); 
      res.status(500).json({ error: "Error fetching itinerary" }); 
    }
  },
  

  addItinerary: async (req, res) => {
    try {
      const newItinerary = await Itinerary.create(req.body);
      res.status(201).json(newItinerary);
    } catch (error) {
      res.status(500).json({ error: "Error creating itinerary" });
    }
  },

  updateItinerary: async (req, res) => {
    try {
      const updatedItinerary = await Itinerary.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } // Para devolver el itinerario actualizado
      );
      res.json(updatedItinerary);
    } catch (error) {
      res.status(500).json({ error: "Error updating itinerary" });
    }
  },

  deleteItinerary: async (req, res) => {
    try {
      let { id } = req.query;
      await Itinerary.deleteOne({ _id: id });
      res.status(201).json({
        message: "Itinerary has been deleted",
      });
    } catch (error) {
      res.status(500).json({ error: "Error deleting itinerary" });
    }
  },
};
