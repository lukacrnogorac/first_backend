const models = require('../models');

class WriterRepository{
    repoGetWriter(writerName){
        return models.writers.findOne({where: {first_name: writerName}});
    }   
}

module.exports = new WriterRepository();