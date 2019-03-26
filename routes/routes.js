const router = require('express').Router();
const writers = require('../controllers/writers');
const books = require('../controllers/books');
const authentication = require('../controllers/authentication');

router.get('/books',(req,res) =>{
    if(req.query.writer){
        writers.getWriterBooks(req,res);
    }
    else{
        books.getAllBooks(req,res);  
    }
});

router.post('/login', authentication.login);
router.post('/registration', authentication.registration);

module.exports = router;