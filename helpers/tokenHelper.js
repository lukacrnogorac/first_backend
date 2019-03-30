const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret =  process.env.JWT_SECRET;
const options = {expiresIn: '1h',algorithm: 'HS384'};

class TokenHelper{
    decodeToken(req,res){
        let responseObject = {bool: false,status:"Unauthorized, token required"};
        req.decodedToken = null;
        try{
            const authorization = req.headers.authorization;
            if(authorization){ 
                req.decodedToken = jwt.verify(authorization,secret,options);
                return responseObject = {bool: true,status:"valid"};
        }
        return responseObject;
    } catch(err){
        return responseObject = {bool: false,status:err.message};
    }
}
}

module.exports = new TokenHelper();