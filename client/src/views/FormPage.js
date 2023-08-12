import React, { useState } from 'react';
import axios from 'axios';

const FormPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    imagen: '',
    vida: '',
    ataque: '',
    defensa: '',
    velocidad:'',
    altura: '',
    peso: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('/pokemons', formData)
      .then(response => {
        console.log('Nuevo pokémon creado:', response.data);
       
        setFormData({
          nombre: '',
          imagen: '',
          vida: '',
          ataque: '',
          defensa: '',
          velocidad:'',
          altura: '',
          peso: '',
        });
      })
      .catch(error => {
        console.error('Error creating pokemon:', error);
      });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="form-page">
      <h2>Crear nuevo Pokémon</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        <button type="submit">Crear el tuyo!</button>
      </form>
    </div>
  );
};

export default FormPage;
