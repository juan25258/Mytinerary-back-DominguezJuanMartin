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
const { getItineraries, getItinerariesForCity, addItinerary, updateItinerary, deleteItinerary } = require('../controllers/itineraries.Controller'); // Importa los controladores de itinerarios

// Rutas para ciudades
router.get("/cities", getCities);
router.get("/city/:id", getCity);
router.post("/cities", addCity);
router.put("/city/:id", updateCity);
router.delete("/cities", deleteCity);

// Rutas para itinerarios
router.get("/itineraries", getItineraries);
router.get("/itineraries/:city.Id", getItinerariesForCity); // Nueva ruta para obtener itinerarios por ciudad
router.get("/itineraries/city/:city.Id", getItinerariesForCity);

router.post("/itineraries", addItinerary);
router.put("/itinerary/:id", updateItinerary);
router.delete("/itinerary", deleteItinerary);

module.exports = router;



