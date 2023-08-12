const { Type } = require('../db');

// Pokemons y sus tipos
const getPokemons = async (req, res) => {
  try {
    const pokemons = await pokemons.findAll({
      include: Type,
    });
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).json({ message: 'Error al tener los Pokemons' });
  }
};

// Pokemon por su ID y sus tipos
const getPokemonById = async (req, res) => {
  const { idPokemon } = req.params;
  try {
    const pokemon = await pokemon.findByPk(idPokemon, {
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
