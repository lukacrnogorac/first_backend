const writerRepository = require('../repository/writerrepository');

class WritersController{
    async getWriterBooks(req,res){
            try{
                if(req.decodedToken === null) return res.status(401).json({error: 'Token missing or you need to login'});
                let writer = await writerRepository.repoGetWriterBooks(req.query.writer);
                if(writer.books.length) return res.status(200).json(writer.books);
                return res.status(404).json({msg:"No books for writer"});
            } catch(err){
                return res.status(400).json({error:err.message});
            }
    }
}

module.exports = new WritersController();