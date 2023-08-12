const server = require('./src/app')
const { conn } = require('./src/db')
require('dotenv').config()
const { PORT } = process.env
const { getTypesToDB } = require('./src/controllers/typesControllers.js')

// Syncing all the models at once.
conn
	.sync({ force: true }) // verificar si debo modificar esto luego
	.then(() => {
		server.listen(PORT || 3001, () => {
			getTypesToDB()
			console.log(`Server listening at ${PORT}`) // eslint-disable-line no-console
		})
	})
	.catch((error) => console.log(error.message))