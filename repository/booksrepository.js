const models = require('../models');
const Op = require('sequelize').Op;

class BooksRepository{
    repoGetAllBooks(){
        return models.books.findAll();
    }
    repoDeleteBook(bookname){
        return models.books.destroy({
            where: {
                title: bookname
            }
        });
    }
}

module.exports = new BooksRepository();