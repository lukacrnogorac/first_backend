'use strict';

module.exports = (sequelize, DataTypes) =>{
    return sequelize.define(
        'error_log',{
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            status:{
                type: DataTypes.INTEGER(11),
                allowNull: false
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false
            },
            path: {
                type: DataTypes.STRING,
                allowNull: false
            },
            error_message: {
                type: DataTypes.STRING,
                allowNull: false
            }        
        },
        {
            freezeTableName: true,
            timestamps: false
        },
        {
            engine: 'InnoDB',
            charset: 'utf8'
        },
    );
};