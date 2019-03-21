const router = require('express').Router();
const writers = require('../controllers/writers');
const books = require('../controllers/books');

router.get('/books',(req,res) =>{
    if(req.query.writer){
        writers.getWriterBooks(req,res,req.query.writer);
    }
    else{
        books.getAllBooks(req,res);  
    }
});

module.exports = router;