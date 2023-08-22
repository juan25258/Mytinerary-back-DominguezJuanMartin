const express = require("express");
const router = require("./router/router");
const cors = require("cors");
require("./config/database");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", router);

app.get("/api/cities", (req, res) => {
  const filter = req.query.filter; // Obtengo el parámetro de filtro de la solicitud de consulta

  // Acá aplico la lógica de filtrado a los datos de las ciudades según el valor del filtro
  const filteredCities = cities.filter((city) => city.name.includes(filter));

  res.json(filteredCities); // esto devuelve los datos de las ciudades filtradas como respuesta de la API
});

/* app.get("/api/cities", (req, res) => {
  const filter = req.query.filter.toLowerCase();

  const filteredCities = cities.filter((city) => {
    const cityNameMatch = city.name.toLowerCase().includes(filter);
    const countryNameMatch = city.country.toLowerCase().includes(filter);
    return cityNameMatch || countryNameMatch;
  });

  res.json(filteredCities);
}); */

app.listen(5000, () => {
  console.log("listening on port 5000");
});