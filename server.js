const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./app/index');
const userController = require('./app/controllers/user.controller');
const bootcampController = require('./app/controllers/bootcamp.controller');

const app = express();

app.use(bodyParser.json());

// Rutas para el usuario
app.post('/users', userController.createUser);
app.get('/users/:id', userController.findUserById);

// Rutas para el Bootcamp
app.post('/bootcamps', bootcampController.createBootcamp);
app.get('/bootcamps/:id', bootcampController.findById);

const port = 3000;

async function createUsers() {
  try {
    await sequelize.sync({ force: true });
    await userController.createUser({
      firstName: 'Mateo',
      lastName: 'Díaz',
      email: 'mateo.diaz@correo.com',
    });
    await userController.createUser({
      firstName: 'Santiago',
      lastName: 'Mejías',
      email: 'santiago.mejias@correo.com',
    });
    await userController.createUser({
      firstName: 'Lucas',
      lastName: 'Rojas',
      email: 'lucas.rojas@correo.com',
    });
    await userController.createUser({
      firstName: 'Facundo',
      lastName: 'Fernandez',
      email: 'facundo.fernandez@correo.com',
    });
    console.log('Usuarios creados correctamente.');
  } catch (error) {
    console.error('Error al crear usuarios:', error);
  }
}

createUsers();

sequelize
  .authenticate()
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar con la base de datos:', error);
  });
