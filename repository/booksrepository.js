const models = require('../models');

class BooksRepository{
    repoGetAllBooks(){
        return models.books.findAll();
    }
    repoGetWriterBooks(writerID){
        return models.books.findAll({
            where: {
                writer_id: writerID
            }
        });
    }
}

module.exports = new BooksRepository();