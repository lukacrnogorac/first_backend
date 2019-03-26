'use strict';
module.exports = (sequelize, DataTypes) =>{
    const book = sequelize.define(
        'books',{
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            title:{
                type: DataTypes.STRING(120),
                allowNull: false,
                unique: true
            },
            number_of_pages: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            year_of_publish: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            number_of_books: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            writerId: {
                type: DataTypes.INTEGER(11),
                references: {
                    model: 'writers',
                    key: 'id'
                }
            }
            
        },
        {
            timestamps: false
        },
        {
            engine: 'InnoDB',
            charset: 'utf8'
        }
    );

    return book;
};