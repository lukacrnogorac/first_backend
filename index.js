const express = require('express');
const app = express();
const router = require('./routes/routes.js');

const PORT = process.env.PORT || 5000;

app.use(router);
app.listen(PORT,() => console.log(`Server running on ${PORT}`));



