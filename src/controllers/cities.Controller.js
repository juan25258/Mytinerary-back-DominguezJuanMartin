const City = require("../models/City");

const getCities = async (req, res) => {
  try {
    let filter = {}; // Definoun filtro vacío por defecto

    // Si se proporciona el parámetro de consulta 'filter', lo usamos para filtrar
    if (req.query.filter) {
      const filterRegex = new RegExp(req.query.filter, "i"); // Uso la i para no distinguir mayúsculas y minúsculas
      filter = { name: filterRegex };
    }

    const cities = await City.find(filter);
    res.status(200).json(cities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCity = (req, res) => {
  const { id } = req.params;

  const { data } = req.required;
};

const addCity = async (req, res) => {
  try {
    let payload = req.body;
    console.log(payload);

    let querys = req.query;
    console.log(querys);

    let cityCreada = await City.create(payload);

    res.status(201).json({
      message: "city has been added",
      city: cityCreada,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const addCities = async (req, res) => {
  try {
    const newCities = req.body; // Supongamos que las ciudades nuevas se envían en el cuerpo de la solicitud como un array

    const addedCities = await City.insertMany(newCities);

    res.status(201).json({
      message: "Cities have been added",
      cities: addedCities,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateCity = async (req, res) => {
  try {
    const { id } = req.params; // me trae el ID de la ciudad a actualizar
    const updatedData = req.body; // Los datos actualizados de la ciudad

    // Encuentra la ciudad por su ID y la actuliza
    const updatedCity = await City.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedCity) {
      return res.status(404).json({ message: 'City not found' });
    }

    res.status(200).json({
      message: 'City has been updated',
      city: updatedCity,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteCity = async (req, res) => {
  try {
    let { id } = req.query;

    await City.deleteOne({ _id: id });

    res.status(201).json({
      message: "city has been deleted",
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = {
  getCities,
  getCity,
  addCity,
  addCities,
  updateCity,
  deleteCity,
};
