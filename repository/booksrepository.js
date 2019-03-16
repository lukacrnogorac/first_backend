const models = require('../models');

module.exports.repoGetBooks = models.books.findAll();