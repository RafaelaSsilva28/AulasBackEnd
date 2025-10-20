const express = require('express');
const rotas = express.Router();
const BD = require('../db')

//listar prfessores (R-read)
   //localhost:3000/professores/listar 
rotas.get('/listar', async (req, res) => {     
    //BUSCANDO TODOS OS PROFESSORES DO BANCO DE DADOS
    const dados = await BD.query('SELECT * FROM professores order by nome_professor');
        console.log(dados.rows);
        //BUSCANDO O ARQUIVO LISTA.EJS NA PASTA VIEWS/PROFESSORES
        res.render('professores/lista.ejs', { dadosProfessores: dados.rows });   //retorna os professores em formato de lista
        
});

module.exports = rotas;