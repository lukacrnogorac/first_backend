const bookRepository = require('../repository/booksrepository');

class BooksController{
        async getAllBooks(req,res){
            try{
            let books = await bookRepository.repoGetAllBooks();
            if(books){
            books = books.map(book => {
                return{
                    id: book.id,
                    title: book.title,
                    number_of_pages: book.number_of_pages,
                    year_of_publish: book.year_of_publish,
                    number_of_books: book.number_of_books,
                    writer_id: book.writer_id
                };
            });
        }
            else{
                return;
            }

            if(!books) throw new Error('No books..');
            res.status(200).json(books);
        }
            catch(err){
                res.status(400).json({error: err.message});
            }
        };

        async getWriterBooks(req,res,writerID){
            try{
                let writerBooks = await bookRepository.repoGetWriterBooks(writerID);
                if(Object.keys(writerBooks).length > 0){
                    writerBooks = writerBooks.map(w => {
                        return{
                            id: w.id,
                            title: w.title,
                            number_of_pages: w.number_of_pages,
                            year_of_publish: w.year_of_publish,
                            number_of_books: w.number_of_books,
                            writer_id: w.writer_id
                        };
                    });
                    res.status(200).json(writerBooks);
                }
                else{
                    res.status(200).json({message:'No books for wanted writer.'});
                }
            }
            catch(err){
                res.status(400).json({error: err.message});
            }
        };
}

module.exports = new BooksController();