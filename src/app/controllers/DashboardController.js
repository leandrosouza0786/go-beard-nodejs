const { User } = require('../models')

class dashboardController{
    async index(req, res){
        const providers = await User.findAll ({ where: { providers: true }})

        return res.render('dashboard', { providers })
    }
}

module.exports = new dashboardController()