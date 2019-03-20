'use strict';

module.exports = {
    up: (queryInterface,Sequelize) =>{
        return queryInterface.bulkInsert('Books',[
            {
                title: "Knjiga1",
                number_of_pages: 257,
                year_of_publish: 2005,
                number_of_books: 2,
                writerId: 1
            },
            {
                title: "Knjiga2",
                number_of_pages: 554,
                year_of_publish: 2001,
                number_of_books: 1,
                writerId: 1
            },
            {
                title: "Knjiga3",
                number_of_pages: 1500,
                year_of_publish: 2010,
                number_of_books: 7,
                writerId: 2
            },
            {
                title: "Knjiga4",
                number_of_pages: 77,
                year_of_publish: 2016,
                number_of_books: 1,
                writerId: 3
            }

        ]);
    },

    down: (queryInterface,Sequelize) =>{
        return queryInterface.bulkDelete('Books', null, {});
    }
}