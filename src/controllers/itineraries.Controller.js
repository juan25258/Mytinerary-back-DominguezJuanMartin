const Itinerary = require('../models/Itinerary');

module.exports = {
  getItineraries: async (req, res) => {
    try {
      const itineraries = await Itinerary.find();
      res.json(itineraries);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching itineraries' });
    }
  },
  
  addItinerary: async (req, res) => {
    try {
      const newItinerary = await Itinerary.create(req.body);
      res.status(201).json(newItinerary);
    } catch (error) {
      res.status(500).json({ error: 'Error creating itinerary' });
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
      res.status(500).json({ error: 'Error updating itinerary' });
    }
  },

  deleteItinerary: async (req, res) => {
    try {
      let { id } = req.query;
      await Itinerary.deleteOne({_id: id});
      res.status(201).json({
        message: "Itinerary has been deleted"
      });

    } catch (error) {
      res.status(500).json({ error: 'Error deleting itinerary' });
    }
  }
};
