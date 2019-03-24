const dbConfig = require('config').get('database');

module.exports = {
    database: dbConfig.database,
    username: dbConfig.user,
    password: dbConfig.password,
    host: dbConfig.options.host,
    dialect: dbConfig.options.dialect,
    seederStorage: "sequelize"
  };