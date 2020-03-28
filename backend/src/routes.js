const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

//Requisição para lista de ongs
routes.get('/ongs', OngController.index);
//Requisição para cadastro
routes.post('/ongs', OngController.create);

//Requisição para listar casos de uma ong especifica
routes.get('/profile', ProfileController.index);

//Requisição para listar os casos(incident)
routes.get('/incidents', IncidentController.index);
//Requisição para criar um caso(incident)
routes.post('/incidents', IncidentController.create);
//requisição para deletar um caso(incident)
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;