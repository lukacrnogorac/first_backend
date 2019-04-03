const models = require('../models');

class ErrorLogRepository{
    insertError(errorObject){
        models.error_log.create({
            status: errorObject.status,
            created_at: errorObject.time,
            path: errorObject.path,
            error_message: errorObject.message
        });
    };

    getAllErrors(){
        models.error_log.findAll();
    };
}

module.exports = new ErrorLogRepository();