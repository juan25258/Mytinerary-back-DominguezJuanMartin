const City = require("../models/City")

const getCities = async(req, res) => {

    try{
        let cities = await City.find()
        res.json(
            cities
        )
    }catch(err){
        res.json({message: err.message})
    }

}

 
 const getCity = (req, res)=> {

  const {id} = req.params

  const {data} = req.required 
 }

 module.exports = {
    getCities, 
    getCity
}