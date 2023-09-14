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
    image: {
        type: String,
    },
    country: {
        type: String,
    }

})

const User = model("User", schemaUser);

module.exports = User; 