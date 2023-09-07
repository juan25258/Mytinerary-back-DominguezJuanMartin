/* const Itinerary = require("../models/Itinerary");

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
}; */

const City = require("../models/City");
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
    const itinerary = await Itinerary.findById(id);

    if (!itinerary) {
      return res.status(404).json({ message: "Itinerary not found" });
    }

    res.status(200).json(itinerary);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* const addItinerary = async (req, res) => {
  try {
    const payload = req.body;
    const newItinerary = await Itinerary.create(payload);
    res.status(201).json({
      message: "Itinerary has been added",
      itinerary: newItinerary,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}; */
const addItineraries = async(req,res) => {
  try {
    const newItineraries = req.body;
    const addedItineraries = await Itinerary.insertMany(newItineraries);

    res.status(200).json({
      message: "Itineraries has been added",
      itineraries: addedItineraries,
    });
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

const addItinerary = async (req, res) => {
  try {
    let { id } = req.query;
    let cityFound = await City.findById(id);
    let newItinerary = await Itinerary.create({
      Price: Itinerary.Price,
      Likes: Itinerary.Likes,
      Hashtag: Itinerary.Hashtag,
      city: cityFound
    });
    await cityFound.updateOne({ itineraries: [...cityFound.itineraries, newItinerary] });

    let cityFoundUpdated = await City.findById(id).populate('itineraries')

    res.status(200).json({
      message: "Itinerary has been updated successfully",
      City: cityFoundUpdated
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/* const addItinerary = async (req, res) => {
  try {
    const { id } = req.query;
    const cityFound = await City.findById(id);

    if (!cityFound) {
      return res.status(404).json({ message: "City not found" });
    }

    const newItinerary = await Itinerary.create({
      Price,
      Likes,
      Hashtag,
      city: cityFound._id, // Asigna el ObjectId de la ciudad al itinerario
    });

    // Agrega el ObjectId del nuevo itinerario a la lista de itinerarios de la ciudad
    cityFound.itineraries.push(newItinerary._id);
    await cityFound.save();

    let cityFoundUpdated = await City.findById(id);

    res.status(200).json({
      message: "Itinerary has been updated successfully",
      City: cityFoundUpdated,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}; */

const updateItinerary = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedItinerary = await Itinerary.findByIdAndUpdate(
      id,
      updatedData,
      {
        new: true,
      }
    );

    if (!updatedItinerary) {
      return res.status(404).json({ message: "Itinerary not found" });
    }

    res.status(200).json({
      message: "Itinerary has been updated",
      itinerary: updatedItinerary,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteItinerary = async (req, res) => {
  try {
    const { id } = req.params;
    await Itinerary.findByIdAndDelete(id);
    res.status(200).json({ message: "Itinerary has been deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getItineraries,
  getItinerary,
  addItineraries,
  addItinerary,
  updateItinerary,
  deleteItinerary,
};
