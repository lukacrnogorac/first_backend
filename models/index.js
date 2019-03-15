'use strict';
// thanks to the sequelize docs
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('config');
const dbConfig = config.get('database');

let models = {};

dbConfig.options.operatorsAliases = require('../config/sequlize-operator-aliases');

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, dbConfig.options);

fs.readdirSync(__dirname).filter(function (file) {
  return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function (file) {
  let model = sequelize['import'](path.join(__dirname, file));
  models[model.name] = model;
});

Object.keys(models).forEach(function (modelName) {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }

  if ("loadScopes" in models[modelName]) {
    models[modelName].loadScopes(models);
  }

  if ("loadHooks" in models[modelName]) {
    models[modelName].loadHooks(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;