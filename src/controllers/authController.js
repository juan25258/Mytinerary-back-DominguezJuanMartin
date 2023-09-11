

const register = async (req, res) => {
    try {
        const payload = req.body
        const userExists = await User.findOne({email: payload.email})

        if (userExists) {
            res.status(403).json({message: "User alredy exist"},)
        }
        const userCreated = await User.create(payload)

        res.status(200).json({
            message: "User created successfully",
            userCreated
        })
    } catch (e) {
        res.status(400).json({message: e.message});
    }


};

module.exports = {
    register,
};