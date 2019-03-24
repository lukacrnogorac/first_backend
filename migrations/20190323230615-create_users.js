'use strict';

module.exports = {
    up: (queryInterface,Sequelize) =>{
        return queryInterface.createTable(
            'Users',{
                id: {
                    type: Sequelize.INTEGER(11),
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
                },
                firstName: {
                    type: Sequelize.STRING(100),
                    allowNull: false
                },
                lastName: {
                    type: Sequelize.STRING(100),
                    allowNull: false
                },
                username: {
                    type: Sequelize.STRING(100),
                    unique: true,
                    allowNull: false
                },
                password: {
                    type: Sequelize.STRING(100),
                    allowNull: false
                },
                email: {
                    type: Sequelize.STRING(100),
                    unique: true,
                    allowNull: false
                }
            }
        )
    },

    down: (queryInterface, Sequelize) =>{
        return queryInterface.dropTable('Users');
    }
}