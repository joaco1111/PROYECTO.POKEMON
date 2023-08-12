/* "validation.js": Un componente clave para garantizar 
la integridad de los datos que ingresan en tu aplicación o API,
y para prevenir errores o problemas relacionados con datos incorrectos
o no válidos. Sin embargo, ten en cuenta que "validation.js" no es un término
estandarizado y su función exacta podría variar según el proyecto o contexto 
en el que se utilice. */
const validateString = (str) => {
    if (typeof str !== 'string') {
      throw new Error('Se esperaba una cadena de caracteres.');
    }
    return str.trim();
  };
  
  const validateNumber = (num) => {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error('Se esperaba un número válido.');
    }
    return num;
  };
  
  const validateURL = (url) => {
    // Aquí podrías implementar una lógica más avanzada para validar URLs
    if (!url.startsWith('http')) {
      throw new Error('La URL no es válida.');
    }
    return url;
  };
  
  
  module.exports = {
    validateString,
    validateNumber,
    validateURL,
    // Exporta otras funciones de validación aquí...
  };
  