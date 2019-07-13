const { User } = require('../models')

class UserController {
    create(req, res) {
        return res.render('auth/singup')
    }

    async store(req, res) {
        req.body.avatar = 'teste.png'
        await User.create(req.body)

        return res.redirect('/')
    }
}

module.exports = new UserController()