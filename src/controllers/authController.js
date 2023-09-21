const { verifyPassword } = require("../middlewares/Auth");
const User = require("../models/User");

const getRegisteredUsers = async (req, res) => {
  try {
    const registeredUsers = await User.find();
    res.status(200).json(registeredUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const register = async (req, res) => {
  try {
    const payload = req.body;
    const userExists = await User.findOne({ email: payload.email });

    if (userExists) {
      return res.status(403).json({ message: "User alredy exist" });
    }
    const userCreated = await User.create(payload);

    res.status(200).json({
      message: "User created successfully",
      userCreated,
    });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const login = async (req, res) => {
  try {
      res.status(200).json({
        message: 'Successfully logged id',
        token: req.token,
        user:  {
          email: req.user.email,
          id: req.user._id,
          //y todos los demas datos que quiera.
          //si quiero todos los datos escribo solo user: req.user
        }
      })
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const authenticated = async(req, res) => {
  try {
    res.status(200).json({
      message: 'Successfully authenticated ',
      token: req.token,
      user:  {
        email: req.user.email,
        id: req.user._id,
        //y todos los demas datos que quiera.
        //si quiero todos los datos escribo solo user: req.user
      }
    })
} catch (e) {
  res.status(400).json({ message: e.message });
}
}

const logout = async (req, res) => {
  try {
      res.status(200).json({message: 'logged out', token: req.token})
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}


module.exports = {
  getRegisteredUsers,
  register,
  login,
  authenticated,
  logout,
};
