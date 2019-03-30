'use strict';

module.exports = {
    up: (queryInterface,Sequelize) =>{
        return queryInterface.bulkInsert('Writers',[
            {
                first_name: "John",
                last_name: "Johnatan",
                date_of_birth: "1985-05-27"
            },
            {
                first_name: "Jim",
                last_name: "Jimmy",
                date_of_birth: "1978-12-11"
            },
            {
                first_name: "Bill",
                last_name: "Billman",
                date_of_birth: "1989-09-19"
            },
            {
                first_name: "Mark",
                last_name: "Marquinhos",
                date_of_birth: "1970-08-27"
            }
        ]);
    },
    down: (queryInterface,Sequelize) =>{
        return queryInterface.bulkDelete('Writers', null, {});
    }
}