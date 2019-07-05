const usersRepository = require('../repository/usersRepository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.JWT_SECRET;
const options = {expiresIn: '1h',algorithm: 'HS384'};

class AuthenticationController{
    async login(req, res, next){ 
        try{
            const result = await usersRepository.repoGetUser(req.body);
            if(!result) return res.status(403).json({msg:'Invalid username'}); 
                
            if(!bcrypt.compareSync(req.body.password,result.password))
                return res.status(403).json({error:'Invalid password'}); 
            
            const token = jwt.sign(result.dataValues, secret, options);
            return res.status(201).send({ auth:true, token:token});           
        } catch(err){
            next(err);
        }        
    }

    async registration(req, res, next){ 
        try{
            if(!req.body.firstName || 
                !req.body.lastName || 
                !req.body.username || 
                !req.body.password || 
                !req.body.email
                ) return res.status(400).json({error:'You need to fill all fields'});;

            const isNotValidUsername = await usersRepository.repoGetUser(req.body);
            if(isNotValidUsername) return res.status('409').json({message:'A user with the same username already exists'});
            
            const isNotValidEmail = await usersRepository.repoGetEmail(req.body);
            if(isNotValidEmail) return res.status('409').json({message:'A user with the same email already exists'});
            
            await usersRepository.repoAddUser(req.body);
            return res.status('201').json({message:`User with ${req.body.username} is created`});
        } catch(err){
            return next(err);
        }
    }
}

module.exports = new AuthenticationController();