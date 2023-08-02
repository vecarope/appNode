const { Bootcamp } = require('../models/bootcamp.model');

const createBootcamp = async (req, res) => {
  try {
    const { title, cue, description } = req.body;
    const bootcamp = await Bootcamp.create({ title, cue, description });
    res.status(201).json(bootcamp);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el Bootcamp' });
  }
};

const findById = async (req, res) => {
  try {
    const bootcampId = req.params.id;
    const bootcamp = await Bootcamp.findByPk(bootcampId);
    if (bootcamp) {
      res.json(bootcamp);
    } else {
      res.status(404).json({ error: 'Bootcamp no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el Bootcamp' });
  }
};


module.exports = {

  createBootcamp,
  findById,
  // ... Agrega aquí los demás controladores para el Bootcamp
};