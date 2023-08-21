const express = require('express')
const router = express.Router()
const {getCities, getCity, addCity, updateCity,deleteCity} = require('../controllers/cities.Controller')

router.get("/cities", getCities);
router.get("/city/:id", getCity);
router.post("/cities", addCity);
router.put("/city/:id", updateCity);
router.delete("/cities", deleteCity);


module.exports = router