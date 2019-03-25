const usersRepository = require('../repository/usersRepository');

class AuthenticationController{
    async login(req,res){
        try{
            let result = await usersRepository.repoGetUser(req.body);
            
            if(result){
                if(req.body.password === result.password){
                    return res.status(200).json({msg:'Login successful!'});
                }
                    return res.status(403).json({error:'Invalid password'});
                
            } 
                return res.status(403).json({msg:'Invalid username'}); 
        } 

        catch(err){
                return res.status(400).json({error:err.message});
        }    
    }
}

module.exports = new AuthenticationController();