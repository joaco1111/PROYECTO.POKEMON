const { Type } = require('../db');

const getTypesHandler = async (req, res) => {
  try {
    const types = await Type.findAll();
    res.status(200).json(types);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los tipos de Pokémon' });
  }
};

module.exports = {
  getTypesHandler,
};
