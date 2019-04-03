'use strict';

module.exports = {
    up: (queryInterface,Sequelize) =>{
        return queryInterface.createTable(
            'Error_log',{
                id: {
                    type: Sequelize.INTEGER(11),
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
                },
                status: {
                    type: Sequelize.INTEGER(11),
                    allowNull: false
                },
                created_at: {
                    type: Sequelize.DATETIME,
                    allowNull: false
                },
                path: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                error_message: {
                    type: Sequelize.STRING,
                    allowNull: false
                }
            }
        );
    },
    
    down: function(queryInterface,Sequelize){
        return queryInterface.dropTable('Error_log');
    }
}

