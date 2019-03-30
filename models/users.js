'use strict';
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (sequelize, DataTypes) =>{
    const user = sequelize.define(
        'users',{
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            firstName:{
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: false,
            }
            
        },
        {
            timestamps: false
        },
        {
            engine: 'InnoDB',
            charset: 'utf8'
        }, 
    );

    user.addHook('beforeCreate',async(u) =>{
            u.password = await bcrypt.hash(u.password,saltRounds);
    });

    return user;
};