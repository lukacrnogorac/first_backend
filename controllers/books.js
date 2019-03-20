const bookRepository = require('../repository/booksrepository');

class BooksController{
        async getAllBooks(req,res){
            try{
            let books = await bookRepository.repoGetAllBooks();
            if(Object.keys(books).length > 0){
                res.status(200).json(books);
            }
            else{
                return;
            }
            
        }
            catch(err){
                res.status(400).json({error: err.message});
            }
        };

}

module.exports = new BooksController();