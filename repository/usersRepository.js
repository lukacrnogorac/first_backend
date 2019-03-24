const models = require('../models');

class UsersRepository{
    repoGetUser(requestData){
        return models.users.findOne({
            where:{
                username: requestData.username
            }
        });
    }
}

module.exports = new UsersRepository();