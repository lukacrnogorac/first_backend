'use strict';

module.exports = {
    up: (queryInterface,Sequelize) =>{
        return queryInterface.createTable(
            'Books',{
                id: {
                    type: Sequelize.INTEGER(11),
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
                },
                title:{
                    type: Sequelize.STRING(120),
                    allowNull: false,
                    unique: true
                },
                number_of_pages:{
                    type: Sequelize.INTEGER,
                    allowNull: false
                },
                year_of_publish:{
                    type: Sequelize.INTEGER,
                    allowNull: false
                },
                number_of_books:{
                    type: Sequelize.INTEGER,
                    allowNull: false
                },
                writerId:{
                    type: Sequelize.INTEGER(11)
                }
            }
        )
    },
    
    down: function(queryInterface,Sequelize){
        return queryInterface.dropTable('Books');
    }
}

