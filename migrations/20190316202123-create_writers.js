'use strict';

module.exports = {
    up: (queryInterface,Sequelize) =>{
        return queryInterface.createTable(
            'Writers',{
                id: {
                    type: Sequelize.INTEGER(11),
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
                },
                first_name: {
                    type: Sequelize.STRING(100),
                    allowNull: false
                },
                last_name: {
                    type:Sequelize.STRING(100),
                    allowNull: false
                },
                date_of_birth: {
                    type: Sequelize.DATEONLY,
                    allowNull: false
                },
            }
        )
    },
    
    down: function(queryInterface,Sequelize){
        return queryInterface.dropTable('Writers');
    }
}

