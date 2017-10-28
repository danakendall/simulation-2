const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
const checkForSession = require('../middleware/checkForSession');
var dotenv = require('dotenv');
dotenv.config();

const port = 4020;
const propertiesController = require('./controllers/properties_controller');
const userController = require('./controllers/user_controller');

const app = express();

app.use( bodyParser.json() );
app.use( session({
  secret: '@nyth!ng y0u w@nT',
  resave: false,
  saveUninitialized: false
}));
app.use( checkForSession );


massive(process.env.DB_CONNECTION_STRING)
.then(dbInstance => {app.set('db', dbInstance)}
);

app.post('/api/auth/login', userController.login);
app.post('/api/auth/register', userController.register);
app.post('/api/auth/logout', userController.logout);

app.post('/api/properties', propertiesController.createProperty);
app.get('/api/properties', propertiesController.getProperties);
app.delete('/api/properties/:id', propertiesController.deleteProperty);
app.get('/api/properties/filter', propertiesController.filter);


app.listen(port, ()=> {
  console.log(`Server listening on port ${port}`);
});
