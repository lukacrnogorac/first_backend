const router = require('express').Router();
const writers = require('../controllers/writers');
const books = require('../controllers/books');

router.get('/books',(req,res) =>{
    if(Object.keys(req.query).length !== 0){
        let stringQuery = JSON.parse(JSON.stringify(req.query));
        writers.getWriterId(req,res,stringQuery["writer"]);
    }
    else{
        books.getAllBooks(req,res);  
    }
});

module.exports = router;