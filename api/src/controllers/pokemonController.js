const { Pokemon } = require('../db'); // Importa el modelo Pokemon

// Controlador para obtener todos los Pokemons
const getPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.findAll();
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los Pokemons' });
  }
};

// Controlador para obtener un Pokemon por su ID
const getPokemonById = async (req, res) => {
  const { idPokemon } = req.params;
  try {
    const pokemon = await Pokemon.findByPk(idPokemon);
    if (!pokemon) {
      res.status(404).json({ message: 'Pokemon no encontrado' });
    } else {
      res.status(200).json(pokemon);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el Pokemon' });
  }
};

// Controlador para crear un nuevo Pokemon
const createPokemon = async (req, res) => {
  const { name, imagen, vida, ataque, defensa, velocidad, altura, peso } = req.body;
  try {
    // Crea el pokemon en la base de datos
    const newPokemon = await Pokemon.create({
      name,
      imagen,
      vida,
      ataque,
      defensa,
      velocidad,
      altura,
      peso,
    });
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el Pokemon' });
  }
};

module.exports = {
  getPokemons,
  getPokemonById,
  createPokemon,
};
