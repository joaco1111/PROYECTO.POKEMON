/*"formatter": Es importante tener en cuenta que el término "formatter" puede
variar en su significado según el contexto específico de tu proyecto. 
Si estás trabajando en un proyecto particular y te encuentras con un 
archivo 'formatter.js', te recomiendo revisar la documentación del 
proyecto o buscar en el código fuente para entender cómo se está
utilizando en esa API en particular.*/

const formatPokemon = (pokemonData) => {
    return {
      id: pokemonData.id,
      name: pokemonData.name,
      image: pokemonData.imagen,
      stats: {
        vida: pokemonData.vida,
        ataque: pokemonData.ataque,
        defensa: pokemonData.defensa,
        velocidad: pokemonData.velocidad,
        altura: pokemonData.altura,
        peso: pokemonData.peso,
      },
    };
  };
  
  module.exports = {
    formatPokemon,
  };
  