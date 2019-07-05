const express = require('express');
const app = express();
const router = require('./routes/routes.js');
const bodyParser = require('body-parser');
const statusHelper = require('./helpers/tokenStatusHelper.js');
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/',router);
app.use(errorHandler);

app.set('views', './views');
app.set('view engine', 'pug');

const server = app.listen(PORT,() => console.log(`Server running on ${PORT}`));

function errorHandler(err, req, res, next){
    let errorObject = {
        status: 500,
        path: req.path,
        message: err.message
    };

    if(err.name) errorObject.status = statusHelper(err.message);
    return res.status(errorObject.status).json({error: errorObject.message});
}

module.exports = server;


