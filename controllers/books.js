const bookRepository = require('../repository/booksRepository');
const helper = require('../helpers/tokenHelper.js');
const usersRepository = require('../repository/usersRepository.js');

class BooksController{
        async getAllBooks(req,res){
                try{ //it has to be user from dbase, so this check is unnecessary
                    const result = await usersRepository.repoGetUser(req.decodedToken);
                    if(!result) return res.status(401).json({message:'Token is not valid'});
                    const books = await bookRepository.repoGetAllBooks();
                    if(books.length > 0) return res.status(200).json(books);
                    
                    return res.status(404).json({message:'No books'});
                } catch(err){
                    return res.status(400).json({error:err.message});
                }
    }
}

module.exports = new BooksController();