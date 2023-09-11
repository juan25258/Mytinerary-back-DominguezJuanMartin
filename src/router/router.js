const express = require('express');
const router = express.Router();
const { getCities, getCity, addCity, updateCity, deleteCity, addCities } = require('../controllers/cities.Controller');
const { getItineraries, getItinerary,addItineraries, updateItinerary, deleteItinerary, addItineraryInCity } = require('../controllers/itineraries.Controller');
const authRouter = require('./auth');

// Rutas para ciudades
router.get("/cities", getCities);
router.get("/city/:id", getCity);
router.post("/cities", addCities);
router.post("/city", addCity);
router.put("/city/:id", updateCity);
router.delete("/cities", deleteCity);

// Rutas para itinerarios
router.get("/itineraries", getItineraries);
router.get("/itinerary/:id", getItinerary); // Cambié el parámetro de ruta a ":id"
router.post("/itineraries", addItineraries);
router.post("/itinerary", addItineraryInCity);
router.put("/itinerary/:id", updateItinerary); 
router.delete("/itinerary/:id", deleteItinerary); 


router.use("/user", authRouter)




module.exports = router;




