const express = require('express')
const routes = express.Router()

const ClassesControler = require('./controllers/ClassesControler')
const ConnectionsController = require('./controllers/ConnectionsController')

routes.post('/classes',ClassesControler.createClasses)
routes.get('/classes',ClassesControler.showClasses)
routes.post('/connection',ConnectionsController.createConnection)
routes.get('/connection',ConnectionsController.showConnection)

module.exports = routes