'use strict';

module.exports = (sequelize, DataTypes) =>{
    const writer = sequelize.define(
        'writers',{
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            first_name:{
                type: DataTypes.STRING(100),
                allowNull: false
            },
            last_name: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            date_of_birth: {
                type:DataTypes.DATEONLY,
                allowNull:false
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

    writer.associate = function(models){
        writer.hasMany(models.books,{as:'books',foreignKey:'writerId'});
    }
    return writer;
};