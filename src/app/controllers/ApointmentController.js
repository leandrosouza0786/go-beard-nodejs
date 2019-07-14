const { User, Appoinment } = require('../models');

class AppointmentController{

    async create(req, res){

        const provider = await User.findByPk(req.params.provider)

        return res.render('appointments/create', { provider })
    }

    async store(req, res){
        const { id } = req.session.user
        const { provider } = req.params
        const { date } = req.body

        await Appoinment.create({
            user_id : id,
            provider_id: provider,
            date
        })
    }
}

module.export = new AppointmentController()