const models = require('../models');

class WriterRepository{
    repoGetWriterBooks(writerName){
        return models.writers.findOne(
            {
                where:{
                    first_name: writerName,
                },
                include: [
                    {   model: models.books,
                        as: "books"                        
                    }   
                ]
            }
        );
    }   
}

module.exports = new WriterRepository();