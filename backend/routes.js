const express = require('express');
const { Router } = require('express');
const routes = Router()
const Participant = require('../controller/controller');
const app = express()

routes.get('/participants', (req, res) => Participant.find()
    .then(result => res.json(result))
    .catch(error => console.error(error))
);
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Servidor rodando na porta 3000');
});

module.exports = routes;
