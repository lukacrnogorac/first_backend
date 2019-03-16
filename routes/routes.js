module.exports = (app) =>{
    const books = require('../controllers/books');
    app.route('/').get((req,res) => res.json({msg:'Hello folks'}));
    app.route('/books').get(books.getAllBooks);
}