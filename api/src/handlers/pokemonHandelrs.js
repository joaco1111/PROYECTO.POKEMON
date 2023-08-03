const { Type } = require('../db'); // Importa el modelo Type

// Controlador para tener todos los Pokemons incluyendo sus tipos
const getPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.findAll({
      include: Type,
    });
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).json({ message: 'Error al tener los Pokemons' });
  }
};

// Controlador para tener un Pokemon por su ID incluyendo sus tipos
const getPokemonById = async (req, res) => {
  const { idPokemon } = req.params;
  try {
    const pokemon = await Pokemon.findByPk(idPokemon, {
      include: Type,
    });
    if (!pokemon) {
      res.status(404).json({ message: 'Pokemon no encontrado' });
    } else {
      res.status(200).json(pokemon);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al tener el Pokemon' });
  }
};

module.exports = {
  getPokemons,
  getPokemonById,
};
