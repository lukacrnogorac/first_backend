const express = require('express');
const app = express();
const router = express.Router();
const routes = require('./routes/routes.js');
const PORT = process.env.PORT || 5000;


routes(router);
app.listen(PORT,() => console.log(`Server running on ${PORT}`));



