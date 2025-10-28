const express = require('express');
const rotas = express.Router();
const BD = require('../db')

rotas.get('/listar', async (req, res) => {     
    //BUSCANDO TODOS OS PROFESSORES DO BANCO DE DADOS
    const dados = await BD.query(`SELECT * 
    FROM alunos INNER JOIN turmas on alunos.id_turma = turmas.id_turma
    WHERE alunos.ativo = true 
order by alunos.nome`);
        console.log(dados.rows);
        //BUSCANDO O ARQUIVO LISTA.EJS NA PASTA VIEWS/PROFESSORES
        res.render('alunos/lista.ejs', { dadosAlunos: dados.rows });   //retorna os professores em formato de lista
        
});

rotas.get('/novo', async (req, res) => {
    res.render('alunos/novo.ejs')
})

//OBTENDO OS DADOS DE CADASTRO FORMULARIO DO turmas E GUARDANDO  
rotas.post('/novo', async (req, res) => {     
    const alunos = req.body.nome;
        // const {nome_professor, telefone, formacao}

            //INSERINDO OS DADOS RECEBIDOS NO BD
    const sql = 'INSERT INTO alunos (nome) VALUES ($1)';
    await BD.query(sql, [alunos]);
        //REDIRECIONANDO PARA PAGINA DE LISTAGEM
    res.redirect('/alunos/listar');
});

//CRIANDO ROTA PARA EXCLUIR
rotas.post('/excluir/:id', async (req, res) => {     
    //recebendo codigo q quero excluir
    const id = req.params.id;

    //comando SQL para excluir do BD
        //desativando
    const sql = 'UPDATE alunos SET ativo = false WHERE id_aluno = $1';
    //mandando buscar o comando no BD
    await BD.query(sql, [id]);

    //redirecionando para pagina de listagem 
    res.redirect('/alunos/listar');
});

rotas.get('/editar/:id', async (req, res) => {     
    const id = req.params.id;

    const sql = 'SELECT * FROM alunos WHERE id_aluno = $1';
    const dados = await BD.query(sql, [id]);

    console.log(dados.rows[0]);

    res.render('alunos/editar.ejs', {aluno: dados.rows[0]});
    
});

rotas.post('/editar/:id', async (req, res) => {     
    const id = req.params.id;
    
    const nome = req.body.nome;
        

            //INSERINDO OS DADOS RECEBIDOS NO BD
    const sql = 'UPDATE alunos SET nome = $1 WHERE id_aluno = $2';
    await BD.query(sql, [nome, id]);
        //REDIRECIONANDO PARA PAGINA DE LISTAGEM
    res.redirect('/alunos/listar');
});

module.exports = rotas;