const { Router } = require('express')
// Importar todos los routers;
const pokemonRouter = require('./pokemonRouter.js')
const typeRouter = require('./typeRouter.js')

const router = Router()
router.use('/pokemons', pokemonRouter)
router.use('/types', typeRouter)

// Configurar los routers


module.exports = router