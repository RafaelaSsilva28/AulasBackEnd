const express = require('express');
const rotas = express.Router();
const BD = require('../db')

rotas.get('/listar', async (req, res) => {     
    //BUSCANDO TODOS OS PROFESSORES DO BANCO DE DADOS
    const dados = await BD.query('SELECT * FROM turmas order by nome_turma');
        console.log(dados.rows);
        //BUSCANDO O ARQUIVO LISTA.EJS NA PASTA VIEWS/PROFESSORES
        res.render('turmas/lista.ejs', { dadosTurmas: dados.rows });   //retorna os professores em formato de lista
        
});

//OBTENDO OS DADOS DE CADASTRO FORMULARIO DO turmas E GUARDANDO  
rotas.post('/novo', async (req, res) => {     
    const nome_turma = req.body.nome_turma;
        // const {nome_professor, telefone, formacao}

            //INSERINDO OS DADOS RECEBIDOS NO BD
    const sql = 'INSERT INTO turmas (nome_turma) VALUES ($1)';
    await BD.query(sql, [nome_turma]);
        //REDIRECIONANDO PARA PAGINA DE LISTAGEM
    res.redirect('/turmas/listar');
});

module.exports = rotas;