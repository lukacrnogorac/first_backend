const usersRepository = require('../repository/usersRepository');
const bcrypt = require('bcrypt');

class AuthenticationController{
    async login(req,res){
        try{ 
            const result = await usersRepository.repoGetUser(req.body);
            if(!result) return res.status(403).json({msg:'Invalid username'}); 
                
            if(bcrypt.compareSync(req.body.password,result.password)) 
                return res.status(200).json({msg:'Login successful!'});
                    
            return res.status(403).json({error:'Invalid password'});
                
                
        } catch(err){
                return res.status(400).json({error:err.message});
        }    
    }

    async registration(req,res){ //email check missing
        try{
            if(!req.body.firstName || 
                !req.body.lastName || 
                !req.body.username || 
                !req.body.password || 
                !req.body.email
                ) return res.status(400).json({error:'You need to fill all fields'});;

            const isNotValidUsername = await usersRepository.repoGetUser(req.body);
            if(isNotValidUsername) return res.status('400').json({message:'A user with the same username already exists'});
            
            await usersRepository.repoAddUser(req.body);
            return res.status('200').json({message:`User with ${req.body.username} is created`});
            
        } catch(err){
            return res.status(400).json({error:err.message});
    } 

    }
}

module.exports = new AuthenticationController();