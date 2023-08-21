const express = require("express")
const router = require("./router/router")
const cors = require('cors');
require("./config/database")


const app = express()

app.use(cors());

app.use(express.json())

app.use("/api",router)

app.get('/api/cities', (req, res) => {
    const filter = req.query.filter; // Obtén el parámetro de filtro de la solicitud de consulta
  
    // Aplica la lógica de filtrado a los datos de las ciudades según el valor del filtro
    const filteredCities = cities.filter(city => city.name.includes(filter));
  
    res.json(filteredCities); // Devuelve los datos de las ciudades filtradas como respuesta de la API
  });




app.listen(8080, ()=>{
    console.log("listening on port 8080")
})