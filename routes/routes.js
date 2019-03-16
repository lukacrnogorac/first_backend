const router = require('express').Router();

const books = require('../controllers/books');
router.get('/books',(req,res) => books.getAllBooks);

module.exports = router;