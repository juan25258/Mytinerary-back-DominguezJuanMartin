const {Schema, model, Types} = require('mongoose')


const schemaCity = new Schema({
    
    photo: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    country: {
        type: String,
        require: true,
    }
})

const City = model("City",schemaCity)

module.exports = City