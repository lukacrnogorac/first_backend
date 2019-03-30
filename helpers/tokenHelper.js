const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret =  process.env.JWT_SECRET;
const options = {expiresIn: '1h',algorithm: 'HS384'};

class TokenHelper{
    decodeToken(req,res){
        req.decodedToken = null;
        try{
            const authorization = req.headers.authorization;
            if(authorization){ 
                const token = authorization.split(' ')[1];
                req.decodedToken = jwt.verify(token,secret);
                return true;
        }
        res.status(401).json({message:'Unauthorized'});
        return false;
    } catch(err){
        res.status(401).json({message: err.message});
        return false;
    }
        

}
}

module.exports = new TokenHelper();