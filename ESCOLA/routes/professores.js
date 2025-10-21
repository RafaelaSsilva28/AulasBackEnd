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
rotas.get('/novo', async (req, res) => {     
    res.render('professores/novo.ejs');   //retorna os professores em formato de lista

});

//OBTENDO OS DADOS DE CADASTRO FORMULARIO DO PROFESSOR E GUARDANDO  
rotas.post('/novo', async (req, res) => {     
    const nome_professor = req.body.nome_professor;
    const telefone = req.body.telefone;
    const formacao = req.body.formacao;
        // const {nome_professor, telefone, formacao}

            //INSERINDO OS DADOS RECEBIDOS NO BD
    const sql = 'INSERT INTO professores (nome_professor, telefone, formacao) VALUES ($1, $2, $3)';
    await BD.query(sql, [nome_professor, telefone, formacao]);
        //REDIRECIONANDO PARA PAGINA DE LISTAGEM
    res.redirect('/professores/listar');
});

module.exports = rotas;