// Acción para obtener la lista de tipos de pokémon
export const getTypes = (types) => {
    return {
      type: 'GET_TYPES',
      payload: types,
    };
  };
  