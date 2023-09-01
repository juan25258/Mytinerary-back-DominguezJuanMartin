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
  getItinerariesForCity: async (req, res) => {
    const cityId = req.params.cityId;
    try {
      const itineraries = await Itinerary.find({ cityId });
      res.json(itineraries);
    } catch (error) {
      console.error("Error fetching itineraries for city:", error);
      res.status(500).json({ error: "Error fetching itineraries for city" });
    }
  },
  getItineraryForCity: async (req, res) => {
    const cityId = req.params.cityId;
    try {
      const itinerary = await Itinerary.findOne({ cityId });
      if (!itinerary) {
        return res.status(404).json({ error: "Itinerary not found" });
      }
      console.log("Itinerary response:", itinerary);
      res.json(itinerary);
    } catch (error) {
      console.error("Error fetching itinerary:", error);
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
    const itineraryId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedItinerary = await Itinerary.findByIdAndUpdate(
        itineraryId,
        updatedData,
        { new: true }
      );
      if (!updatedItinerary) {
        return res.status(404).json({ error: "Itinerary not found" });
      }
      res.json(updatedItinerary);
    } catch (error) {
      res.status(500).json({ error: "Error updating itinerary" });
    }
  },

  deleteItinerary: async (req, res) => {
    const itineraryId = req.query.id;
    try {
      const deletedItinerary = await Itinerary.findByIdAndDelete(itineraryId);
      if (!deletedItinerary) {
        return res.status(404).json({ error: "Itinerary not found" });
      }
      res.status(201).json({
        message: "Itinerary has been deleted",
      });
    } catch (error) {
      res.status(500).json({ error: "Error deleting itinerary" });
    }
  },

  getItineraryDetails: async (req, res) => {
    const itineraryId = req.params.id;
    try {
      const itinerary = await Itinerary.findById(itineraryId);
      if (!itinerary) {
        return res.status(404).json({ error: "Itinerary not found" });
      }
      res.json(itinerary);
    } catch (error) {
      console.error("Error fetching itinerary details:", error);
      res.status(500).json({ error: "Error fetching itinerary details" });
    }
  },
};
