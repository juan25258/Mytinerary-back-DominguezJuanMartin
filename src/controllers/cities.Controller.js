const City = require("../models/City")

/* const getCities = async(req, res) => {

    try{
        let cities = await City.find()
        res.status(200).json(
            cities
        )
    }catch(err){
        res.status(500).json({message: err.message})
    }

} */

 
const getCities = async (req, res) => {
    try {
      let filter = {}; // Definimos un filtro vacío por defecto
  
      // Si se proporciona el parámetro de consulta 'filter', lo usamos para filtrar
      if (req.query.filter) {
        const filterRegex = new RegExp(req.query.filter, 'i'); // Uso la i para no distinguir mayúsculas y minúsculas
        filter = { name: filterRegex };
      }
  
      const cities = await City.find(filter);
      res.status(200).json(cities);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

const getCity = (req, res)=> {

  const {id} = req.params

  const {data} = req.required 
 }

const addCity = async (req, res) => {

    try{
        let payload = req.body 
        console.log(payload);
    
        let querys = req.query
        console.log(querys);
    
        //let cityCreada = new City(querys)
    
        //cityCreada.save()
    
        let cityCreada = await City.create(payload)
    
    
        res.status(201).json({
            "message": "city has been added",
            "city": cityCreada
        })
    }catch(err){
        res.status(500).json({message:err})
    }
}

const deleteCity = async (req, res) => {

    try{
        let {id} = req.query 
    
        await City.deleteOne({_id: id})
    
        res.status(201).json({
            "message": "city has been deleted",
        })
    }catch(err){
        res.status(500).json({message:err})
    }
}

module.exports = {
    getCities, 
    getCity,
    addCity,
    deleteCity
}