'use strict';

module.exports = {
    up: (queryInterface,Sequelize) =>{
        return queryInterface.bulkInsert('Users',[
            {
                firstName: "Ante",
                lastName: "Antic",
                username: "aantic95",
                password: "123456",
                email: "aantic95@gmail.com"
            },
            {
                firstName: "Ivan",
                lastName: "Ivic",
                username: "iivic92",
                password: "123321",
                email: "i.ivic@gmail.com"
            },
            {
                firstName: "Marko",
                lastName: "Markovic",
                username: "mmarko77",
                password: "123asd",
                email: "markovic@gmail.com"
            }
        ]);
    },
    
    down: (queryInterface,Sequelize) =>{
        return queryInterface.bulkDelete('Users',null, {});
    }
}