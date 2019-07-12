'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('users',{
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name:{
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      avatar:{
        allowNull: null,
        type: Sequelize.STRING,
      },
      password_hash:{
        allowNull: false,
        type: Sequelize.STRING
      },
      provider:{
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      create_at:{
        allowNull: false,
        type: Sequelize.DATE,
      },
      update_at:{
        allowNull: false,
        type: Sequelize.DATE,
      }
   })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users')
  }
  
};
