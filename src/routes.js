const express = require('express')
const routes = express.Router()
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const authMiddlewares = require('./app/middlewares/auth')
const guestMiddlewares = require('./app/middlewares/guest')

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const dashboardController = require('./app/controllers/DashboardController')
const fileController = require('./app/controllers/FileController')
const appointmentController = require('./app/controllers/ApointmentController')
const avaibledController = require('./app/controllers/AvailableController')

routes.use((req, res, next )=>{
    res.locals.flashSucces = req.flash('success')
    res.locals.flashError = req.flash('error')
    return next()
})

routes.get('/files/:file', fileController.show)

routes.get('/',guestMiddlewares, SessionController.create)
routes.post('/', SessionController.store)

routes.get('/singup', guestMiddlewares, UserController.create)
routes.post('/singup', upload.single('avatar'), UserController.store)

routes.get('/app', authMiddlewares)

routes.get('/app/logout', SessionController.destroy)

routes.get('/app/dashboard', dashboardController.index)

routes.get('/app/appointments/new/:provider', appointmentController.create)
routes.post('/app/appointments/new/:provider', appointmentController.store)
routes.get('/app/availabled/:provider', avaibledController.index)

module.exports = routes