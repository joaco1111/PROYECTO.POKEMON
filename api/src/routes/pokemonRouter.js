const { Router } = require('express');
const pokemonRouter = Router();
const { getPokemonByName, getAllPokemons, getPokemonById, createPokemon } = require('../controllers/pokemonController'); // Importa las funciones correctas desde pokemonControllers.js
//const { getPokemons, getPokemonById, createPokemon } = require('../handlers/pokemonControllers');


pokemonRouter.get('/', async (req, res) => {
  try {
    const pokemons = await getAllPokemons();
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los Pokemons' });
  }
});

pokemonRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const pokemon = await getPokemonById(id);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el Pokemon' });
  }
});

pokemonRouter.post('/', async (req, res) => {
  const { Nombre, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Type } = req.body;
  try {
    const newPokemon = await createPokemon(Nombre, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Type); // Usa la función createPokemon
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el Pokemon' });
  }
});

module.exports = pokemonRouter;

