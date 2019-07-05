const bookRepository = require('../repository/booksRepository');

class BooksController{
        async getAllBooks(req, res, next){
            try{
                const books = await bookRepository.repoGetAllBooks();
                if(books.length > 0) return res.status(200).json(books);
                return res.status(404).json({message:'No books'});
            } catch(err){
                return next(err);
            }
        }
        async deleteBooks(req, res, next){
            try{
                const result = await bookRepository.repoDeleteBook(req.body.name);
                return res.status(200).json(result);
            } catch(err){
                return next(err);
            }
        }
}

module.exports = new BooksController();