import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    // Llama a la API para obtener el detalle del pokémon y actualiza el estado
    axios.get(`/pokemons/${id}`)
      .then(response => {
        setPokemon(response.data);
      })
      .catch(error => {
        console.error('Error fetching pokemon detail:', error);
      });
  }, [id]);

  if (!pokemon) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="detail-page">
      <img src={pokemon.imagen} alt={pokemon.nombre} />
      <h2>{pokemon.nombre}</h2>
      <p>ID: {pokemon.id}</p>
      <p>Vida: {pokemon.vida}</p>
      <p>Ataque: {pokemon.ataque}</p>
      <p>Defensa: {pokemon.defenda}</p>
      <p>Velocidad: {pokemon.velocidad}</p>
      <p>Altura: {pokemon.altura}</p>
      <p>Peso: {pokemon.peso}</p>
      {}
    </div>
  );
};

export default DetailPage;
