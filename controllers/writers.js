const writerRepository = require('../repository/writerrepository');
const books = require('../controllers/books');

class WritersController{
    async getWriterId(req,res,writerName){
        try{
            let writer = await writerRepository.repoGetWriter(writerName);
            if(writer){
                books.getWriterBooks(req,res,writer.id);
            }
            else{
                res.status(200).json({msg:"No writer"});
                return;
            }
        }
        catch(err){
            res.status(400).json({error: err.message});
        }
    }
}

module.exports = new WritersController();