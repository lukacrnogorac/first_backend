const router = require('express').Router();

const books = require('../controllers/books');
router.get('/',() => console.log('HELLO FOLKS'));
router.get('/books',books.getAllBooks);

module.exports = router;