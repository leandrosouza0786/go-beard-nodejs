const bcrtpt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        avatar: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING,
        provider: DataTypes.BOOLEAN,
    }, {
            hooks: {
                beforeSave: async user => {
                    if (user.password) {
                        user.password_hash = await bcrtpt.hash(user.password, 8)
                    }
                }
            },
        }
    )

    User.prototype.checkpassword = function ( password ){
        return bcrtpt.compare(password, this.password_hash)
    }

    return User
}