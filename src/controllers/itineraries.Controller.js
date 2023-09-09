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

const addItineraryInCity = async (req, res) => {
  try {
    const { id } = req.query;
    const { image, name, price, likes, hashtag, duration } = req.body; // Obtén los valores del cuerpo de la solicitud

    const cityFound = await City.findById(id);

    if (!cityFound) {
      return res.status(404).json({ message: "City not found" });
    }

    const newItinerary = await Itinerary.create({
      image,
      name,
      price,
      likes,
      hashtag,
      duration,
      city: cityFound._id, // Asigna el ObjectId de la ciudad al itinerario
    });

    // Agrega el ObjectId del nuevo itinerario a la lista de itinerarios de la ciudad
    cityFound.itineraries.push(newItinerary._id);
    await cityFound.save();

    const cityFoundUpdated = await City.findById(id).populate('itineraries');

    res.status(200).json({
      message: "Itinerary has been updated successfully",
      City: cityFoundUpdated,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

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
  addItineraryInCity,
  updateItinerary,
  deleteItinerary,
};
