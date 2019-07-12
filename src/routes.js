const express = require('express')

const routes = express.Router()

const UserController = require('./app/controllers/UserController')

routes.get('/singup', UserController.create)
routes.post('/singin', UserController.store)

module.exports = routes