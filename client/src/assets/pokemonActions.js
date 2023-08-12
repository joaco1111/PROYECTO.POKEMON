// Acción para obtener la lista de pokémons
export const getPokemons = (pokemons) => {
    return {
      type: 'GET_POKEMONS',
      payload: pokemons,
    };
  };
  
  // Acción para agregar un nuevo pokémon
  export const addPokemon = (pokemon) => {
    return {
      type: 'ADD_POKEMON',
      payload: pokemon,
    };
  };
  