const express = require('express');
const { Sequelize } = require('sequelize');
const dbConfig = require('./config/db.config');

const app = express();

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    logging: false,
  }
);

const User = require('./models/user.model')(sequelize, Sequelize);
const Bootcamp = require('./models/bootcamp.model')(sequelize, Sequelize);

sequelize.sync()
  .then(() => {
    console.log('Base de datos sincronizada correctamente.');
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });

const port = 3000 

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});



module.exports = {
  sequelize, 
};