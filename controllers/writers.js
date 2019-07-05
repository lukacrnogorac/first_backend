const writerRepository = require('../repository/writerrepository');

class WritersController{
    async getWriterBooks(req, res, next){
        try{
            let writer = await writerRepository.repoGetWriterBooks(req.query.writer);
            if(writer.books.length) return res.status(200).json(writer.books);
            return res.status(404).json({msg:"No books for writer"});
        } catch(err){
            return next(err);
        }
    }

    async getWriters(req, res, next){
        try{
            const writers = await writerRepository.repoGetWriters();
            if(!writers.length) return res.status(404).json({msg:"No writers"});
            return res.status(200).json(writers);
        } catch(err){
            return next(err);
        }
    }
}

module.exports = new WritersController();