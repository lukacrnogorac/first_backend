const models = require('../models');

class UsersRepository{
    repoGetUser(requestData){
        return models.users.findOne({
            where:{
                username: requestData.username
            }
        });
    }
    
    repoGetEmail(requestData){
        return models.users.findOne({
            where: {
                email: requestData.email
            }
        });
    }
    repoAddUser(requestData){
        models.users.create({
                firstName: requestData.firstName,
                lastName: requestData.lastName,
                username: requestData.username,
                password: requestData.password,
                email: requestData.email      
        });
    };
}

module.exports = new UsersRepository();