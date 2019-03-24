const router = require('express').Router();
const writers = require('../controllers/writers');
const books = require('../controllers/books');
const authentication = require('../controllers/authentication');

router.get('/books',(req,res) =>{
    if(req.query.writer){
        writers.getWriterBooks(req,res,req.query.writer);
    }
    else{
        books.getAllBooks(req,res);  
    }
});

router.post('/login', (req,res) =>{
    authentication.login(req,res);
});

module.exports = router;