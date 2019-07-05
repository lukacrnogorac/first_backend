const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret =  process.env.JWT_SECRET;
const options = {expiresIn: '1h',algorithm: 'HS384'};

module.exports = function decodeToken(req, res, next){
        req.decodedToken = null;
        try{
            const authorization = req.headers.authorization;
            if(!authorization) return next({message: 'Token missing', status: 401});

            jwt.verify(authorization, secret, options, (err, decoded) =>{
                if(err) return next({message: 'Failed to authenticate', status: 400});
                req.decodedToken = decoded;
                return next();
            });
    } catch(err){
        next(err);
    }
}


