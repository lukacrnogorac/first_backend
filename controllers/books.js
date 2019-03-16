const bookRepository = require('../repository/booksrepository');
module.exports.getAllBooks = async(req,res) =>{
    try{
    let books = await bookRepository.repoGetBooks;
    
    books = books.map(book => {
        return{
            id: book.id,
            title: book.title,
            number_of_pages: book.number_of_pages,
            year_of_publish: book.year_of_publish,
            number_of_books: book.number_of_books
        };
    });

    if(!books) throw new Error('No books..');
    res.status(200).json(books);
}
    catch(err){
        res.status(400).json({error: err.message});
    }
};