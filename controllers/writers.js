const writerRepository = require('../repository/writerrepository');

class WritersController{
    async getWriterBooks(req,res){
        try{
            let writer = await writerRepository.repoGetWriterBooks(req.query.writer);
            if(writer.books.length > 0){
                return res.status(200).json(writer.books);
            }
                return res.status(200).json({msg:"No books for writer"});
        }
        catch(err){
            return res.status(400).json({error: "No wanted writer in database"});
        }
    }
}

module.exports = new WritersController();