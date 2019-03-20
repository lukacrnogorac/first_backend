const writerRepository = require('../repository/writerrepository');

class WritersController{
    async getWriterBooks(req,res,writerName){
        try{
            let writer = await writerRepository.repoGetWriterBooks(writerName);
            if(Object.keys(writer.books).length > 0){
                res.status(200).json(writer.books);
            }
            else{
                res.status(200).json({msg:"No books for writer"});
                return;
            }
        }
        catch(err){
            res.status(400).json({error: "No wanted writer in database"});
        }
    }
}

module.exports = new WritersController();