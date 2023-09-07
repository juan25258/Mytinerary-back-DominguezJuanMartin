/* const express = require('express')
const router = express.Router()
const {getCities, getCity, addCity, updateCity,deleteCity} = require('../controllers/cities.Controller');



router.get("/cities", getCities);
router.get("/city/:id", getCity);
router.post("/cities", addCity);
router.put("/city/:id", updateCity);
router.delete("/cities", deleteCity);


module.exports = router */

const express = require('express');
const router = express.Router();
const { getCities, getCity, addCity, updateCity, deleteCity } = require('../controllers/cities.Controller');
const { getItineraries, getItinerary,addItineraries, addItinerary, updateItinerary, deleteItinerary } = require('../controllers/itineraries.Controller');

// Rutas para ciudades
router.get("/cities", getCities);
router.get("/city/:id", getCity);
router.post("/cities", addCity);
router.put("/city/:id", updateCity);
router.delete("/cities", deleteCity);

// Rutas para itinerarios
router.get("/itineraries", getItineraries);
router.get("/itinerary/:id", getItinerary); // Cambié el parámetro de ruta a ":id"
router.post("/itineraries", addItineraries);
router.post("/itinerary", addItinerary);
router.put("/itinerary/:id", updateItinerary); 
router.delete("/itinerary/:id", deleteItinerary); 

module.exports = router;




