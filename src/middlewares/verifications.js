const Joi = require("joi");


const userSchema = Joi.object({
    name: Joi.string(),
    lastname: Joi.string(),
    email: Joi.string().email().min(6).max(20).required(),
    password: Joi.string().alphanum().min(8).max(16).required(),
    urlimage: Joi.string(), 
    country: Joi.string(),

});

const verifyAuthData = (req, res, next) => {
    const payload = req.body;
    const userValidated = userSchema.validate(payload);

    if (userValidated.error) {
        return res.status(400).json({ message: userValidated.error.details.map((err) => err.message)});
    }
    next()

};


module.exports = {
    verifyAuthData,
};