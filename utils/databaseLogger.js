const errorRepository = require('../repository/errorRepository.js');

module.exports.writeInDb = (errorObject) =>{
    errorRepository.insertError(errorObject);
};