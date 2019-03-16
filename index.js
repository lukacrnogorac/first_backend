const express = require('express');
const app = express();
const routes = require('./routes/routes.js');
const PORT = process.env.PORT || 5000;


routes(app);
app.listen(PORT,() => console.log(`Server running on ${PORT}`));



