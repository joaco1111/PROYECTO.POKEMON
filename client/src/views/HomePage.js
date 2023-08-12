import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    // Llama a la API para obtener los pokémons y actualiza el estado
    axios.get('/pokemons')
      .then(response => {
        setPokemons(response.data);
      })
      .catch(error => {
        console.error('Error fetching pokemons:', error);
      });
  }, []);

  return (
    <div className="home-page">

      {pokemons.map(pokemon => (
        <Link key={pokemon.id} to={`/detail/${pokemon.id}`}>
          <div className="pokemon-card">
            <img src={pokemon.imagen} alt={pokemon.nombre} />
            <h3>{pokemon.nombre}</h3>
            <h3>{pokemon.tipos.join(', ')}</h3>
            <h3>{pokemon.vida}</h3>
            <h3>{pokemon.ataque}</h3>
            <h3>{pokemon.defenda}</h3>
            <h3>{pokemon.velocidad}</h3>
            <h3>{pokemon.altura}</h3>
            <h3>{pokemon.peso}</h3>
          </div>
        </Link>
      ))}
      <Link to="/create">
        <button>Crear nuevo Pokémon</button>
      </Link>
    </div>
  );
};

export default HomePage;
