const bookRepository = require('../repository/booksRepository');

class BooksController{
        async getAllBooks(req,res){
                try{
                    if(req.decodedToken === null) return res.status(401).json({error: 'Token missing or you need to login'});
                    const books = await bookRepository.repoGetAllBooks();
                    if(books.length > 0) return res.status(200).json(books);
                    return res.status(404).json({message:'No books'});
                } catch(err){
                    return res.status(400).json({error:err.message});
                }
    }
}

module.exports = new BooksController();