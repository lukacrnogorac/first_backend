const express = require('express');
const app = express();
const router = require('./routes/routes.js');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/',router);

const server = app.listen(PORT,() => console.log(`Server running on ${PORT}`));

module.exports = server;


