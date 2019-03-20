const models = require('../models');

class BooksRepository{
    repoGetAllBooks(){
        return models.books.findAll();
    }
}

module.exports = new BooksRepository();