const { Schema, model, Types } = require('mongoose');

const schemaUser = new Schema({
    name: {
        type: String,
        require: true,
    },
    lastname: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    urlimage: {
        type: String
    },
    country: {
        type: String,
        require: true,
    }

})

const User = model("user", schemaUser);

module.exports = User; 