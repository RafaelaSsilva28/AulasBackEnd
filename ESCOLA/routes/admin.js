const express = require('express');
const rotas = express.Router();

//Rota para o painel administrativo
rotas.get('/', (req, res) => {
    res.render('admin/dashboard')
});

module.exports = rotas;