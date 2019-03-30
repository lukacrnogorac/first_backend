const asyncMiddleware = fn =>
(req,res,next) =>{
 Promise.resolve(fn(req,res,next))
    .catch(next);
};

module.exports = asyncMiddleware;

//asyncMiddleware is a function that takes another
// function and wraps it in a promise
// in our case the function it will take is an express route handler
//, and since we are passing that handler into Promise.resolve
//it will resolve with whatever value our route handler returns.

// If, however, one of the await statements in our handler gives us 
// a rejected promise, it will go into the .catch on line 4 and be 
// passed to next which will eventually give the error to our 
// express error middleware to handle. Now all that remains to do 
// is to wrap our routes in our asyncMiddleware and we will 
// no longer have to worry about using try / catch 
// statements in our routes.