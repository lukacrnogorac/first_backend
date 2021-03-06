const router = require('express').Router();
const writers = require('../controllers/writers');
const books = require('../controllers/books');
const authentication = require('../controllers/authentication');
const swaggerUi = require('swagger-ui-express');
const helper = require('../helpers/tokenHelper.js');
const swaggerDocument = require('../docs/swagger.json');
//const asyncMiddleware = require('../utils/asyncMiddleware.js');

router.post('/login', authentication.login);
router.post('/registration', authentication.registration);
router.use('/docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.use(helper);
router.get('/books',(req,res) =>{
    if(req.query.writer) return writers.getWriterBooks(req,res);
    return books.getAllBooks(req,res);  
});
router.get('/writers', writers.getWriters);
router.post('/books/delete', books.deleteBooks);

module.exports = router;