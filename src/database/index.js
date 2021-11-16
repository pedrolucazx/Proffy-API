const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig.development);

const Teachers = require('../models/Teachers');

Teachers.init(connection);


connection.authenticate().then(() => {
  console.log('Successfully Connected');
}).catch((error) => {
  console.log(error);
})