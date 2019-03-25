const bookRepository = require('../repository/booksRepository');

class BooksController{
        async getAllBooks(req,res){
            try{
            let books = await bookRepository.repoGetAllBooks();
            if(books.length > 0){
                return res.status(200).json(books);
            }
                return res.status(200).json({message:'No books'});;
            
        }
            catch(err){
                return res.status(400).json({error: err.message});
            }
        };

}

module.exports = new BooksController();