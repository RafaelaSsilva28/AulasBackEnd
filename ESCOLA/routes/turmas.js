const express = require('express');
const rotas = express.Router();
const BD = require('../db')

rotas.get('/listar', async (req, res) => {     
    //BUSCANDO TODOS OS PROFESSORES DO BANCO DE DADOS
    const dados = await BD.query('SELECT * FROM turmas WHERE ativo = true order by nome_turma');
        console.log(dados.rows);
        //BUSCANDO O ARQUIVO LISTA.EJS NA PASTA VIEWS/PROFESSORES
        res.render('turmas/lista.ejs', { dadosTurmas: dados.rows });   //retorna os professores em formato de lista
        
});

rotas.get('/novo', async (req, res) => {
    res.render('turmas/novo.ejs')
})

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

//CRIANDO ROTA PARA EXCLUIR
rotas.post('/excluir/:id', async (req, res) => {     
    //recebendo codigo q quero excluir
    const id = req.params.id;

    //comando SQL para excluir do BD
        //desativando
    const sql = 'UPDATE turmas SET ativo = false WHERE id_turma = $1';
    //mandando buscar o comando no BD
    await BD.query(sql, [id]);

    //redirecionando para pagina de listagem 
    res.redirect('/turmas/listar');
});

rotas.get('/editar/:id', async (req, res) => {     
    const id = req.params.id;

    const sql = 'SELECT * FROM turmas WHERE id_turma = $1';
    const dados = await BD.query(sql, [id]);

    console.log(dados.rows[0]);

    res.render('turmas/editar.ejs', {turma: dados.rows[0]});
    
});

rotas.post('/editar/:id', async (req, res) => {     
    const id = req.params.id;
    
    const nome_turma = req.body.nome_turma;
        

            //INSERINDO OS DADOS RECEBIDOS NO BD
    const sql = 'UPDATE turmas SET nome_turma = $1 WHERE id_turma = $2';
    await BD.query(sql, [nome_turma, id]);
        //REDIRECIONANDO PARA PAGINA DE LISTAGEM
    res.redirect('/turmas/listar');
});

module.exports = rotas;