const router = require('express').Router();
const writers = require('../controllers/writers');
const books = require('../controllers/books');
const authentication = require('../controllers/authentication');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/swagger.json');

router.get('/books',(req,res) =>{
    if(req.query.writer) writers.getWriterBooks(req,res);
    
    books.getAllBooks(req,res);  
    
});

router.post('/login', authentication.login);
router.post('/registration', authentication.registration);

router.use('/docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));


module.exports = router;