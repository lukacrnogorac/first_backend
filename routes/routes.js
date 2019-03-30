const router = require('express').Router();
const writers = require('../controllers/writers');
const books = require('../controllers/books');
const authentication = require('../controllers/authentication');
const swaggerUi = require('swagger-ui-express');
const helper = require('../helpers/tokenHelper.js');
const swaggerDocument = require('../docs/swagger.json');
//const asyncMiddleware = require('../utils/asyncMiddleware.js');

router.get('/books',(req,res) =>{
    if(helper.decodeToken(req,res)){
    if(req.query.writer) return writers.getWriterBooks(req,res);

    return books.getAllBooks(req,res);  
    } 
    // return res.status(401).json({message:'Unauthorized'});
});

router.post('/login', authentication.login);
router.post('/registration', authentication.registration);

router.use('/docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;