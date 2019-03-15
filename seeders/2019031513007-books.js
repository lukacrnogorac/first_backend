'use strict';

module.exports = {
    up: (queryInterface,Sequelize) =>{
        return queryInterface.bulkInsert('Books',[
            {
                title: "Knjiga1",
                number_of_pages: 257,
                year_of_publish: 2005,
                number_of_books: 2
            },
            {
                title: "Knjiga2",
                number_of_pages: 554,
                year_of_publish: 2001,
                number_of_books: 1
            }
        ]);
    },

    down: (queryInterface,Sequelize) =>{
        return queryInterface.bulkDelete('Books', null, {});
    }
}