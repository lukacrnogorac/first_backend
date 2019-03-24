const usersRepository = require('../repository/usersRepository');

class AuthenticationController{
    async login(req,res){
        try{
            let result = await usersRepository.repoGetUser(req.body);
            
            if(result){
                if(req.body.password.localeCompare(result.password) === 0){
                    res.status(200).json({msg:'Login successful!'});
                }
                else{
                    res.status(403).json({error:'Invalid password'});
                }
            } else{
                res.status(403).json({msg:'Invalid username'});
            }
        } 

        catch(err){
            res.status(400).json({error:err.message});
        }    
    }
}

module.exports = new AuthenticationController();