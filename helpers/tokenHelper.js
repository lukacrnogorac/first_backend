const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret =  process.env.JWT_SECRET;
const options = {expiresIn: '1h',algorithm: 'HS384'};

module.exports = function decodeToken(req,res,next){
        req.decodedToken = null;
        try{
            const authorization = req.headers.authorization;
            if(authorization){ 
                req.decodedToken = jwt.verify(authorization,secret,options);
        }
        next();
       // return res.status(401).json({message:'Missing token'});
    } catch(err){
        next(err);
    }
}


