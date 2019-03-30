const writerRepository = require('../repository/writerrepository');
const helper = require('../helpers/tokenHelper.js');

class WritersController{
    async getWriterBooks(req,res){
        const resObject = helper.decodeToken(req,res);
        if(resObject.bool){
            try{
                let writer = await writerRepository.repoGetWriterBooks(req.query.writer);
                if(writer.books.length) return res.status(200).json(writer.books);
                
                return res.status(404).json({msg:"No books for writer"});
            } catch(err){
                return res.status(400).json({error:err.message});
            }
        }
        return res.status(401).json({error:resObject.status});
    }
}

module.exports = new WritersController();