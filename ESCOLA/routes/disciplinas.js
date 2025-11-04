const express = require('express');
const rotas = express.Router();
const BD = require('../db')

rotas.get('/listar', async (req, res) => {

     const busca = req.query.busca || '';
    const ordem = req.query.ordem || 'nome_disciplina';

    //BUSCANDO TODOS OS PROFESSORES DO BANCO DE DADOS

    const dados = await BD.query(`SELECT disciplinas.id_disciplina, disciplinas.nome_disciplina, professores.nome_professor
    FROM disciplinas INNER JOIN professores on disciplinas.id_professor = professores.id_professor
    WHERE disciplinas.ativo = true and (disciplinas.nome_disciplina ilike $1 or professores.nome_professor ilike $1)
    ORDER BY disciplinas.nome_disciplina`,
    ['%' + busca + '%']);

    console.log(dados.rows);
    //BUSCANDO O ARQUIVO LISTA.EJS NA PASTA VIEWS/PROFESSORES
    res.render('disciplinas/lista.ejs', { dadosDisciplinas: dados.rows });   //retorna os professores em formato de lista

});

rotas.get('/novo', async (req, res) => {
    //buscando os professores para alimentar o select da tela
    const dadosProfessores = await BD.query(`
        SELECT id_professor, nome_professor FROM professores
        WHERE ativo = true
        ORDER BY nome_professor`);
    res.render('disciplinas/novo.ejs', { dadosProfessores: dadosProfessores.rows });
})

//OBTENDO OS DADOS DE CADASTRO FORMULARIO DO turmas E GUARDANDO  
rotas.post('/novo', async (req, res) => {
    const nome_disciplina = req.body.nome_disciplina;
    const id_professor = req.body.id_professor;
    // const {nome_professor, telefone, formacao}

    //INSERINDO OS DADOS RECEBIDOS NO BD
    const sql = 'INSERT INTO disciplinas (nome_disciplina, id_professor) VALUES ($1, $2)';
    await BD.query(sql, [nome_disciplina, id_professor]);
    //REDIRECIONANDO PARA PAGINA DE LISTAGEM
    res.redirect('/disciplinas/listar');   //pagina que voce quer abrir
});

//CRIANDO ROTA PARA EXCLUIR
rotas.post('/excluir/:id', async (req, res) => {
    //recebendo codigo q quero excluir
    const id = req.params.id;

    //comando SQL para excluir do BD
    //desativando
    const sql = 'UPDATE disciplinas SET ativo = false WHERE id_disciplina = $1';
    //mandando buscar o comando no BD
    await BD.query(sql, [id]);

    //redirecionando para pagina de listagem 
    res.redirect('/disciplinas/listar');
});

//EDITAR DISCIPLINAS
rotas.get('/editar/:id', async (req, res) => {
    const id = req.params.id;

    const sql = 'SELECT * FROM disciplinas WHERE id_disciplina = $1';
    const dados = await BD.query(sql, [id]);
    
    console.log(dados.rows[0]);

    const dadosProfessores = await BD.query(`
        SELECT id_professor, nome_professor FROM professores
        WHERE ativo = true
        ORDER BY nome_professor`);


    res.render('disciplinas/editar.ejs', { disciplina: dados.rows[0], dadosProfessores: dadosProfessores.rows });

});

rotas.post('/editar/:id', async (req, res) => {
    // tem q ser extamente iguall o valor da const com a pasta editar
    const id = req.params.id;

    const nome_disciplina = req.body.nome_disciplina;
    const id_professor = req.body.id_professor;


    //INSERINDO OS DADOS RECEBIDOS NO BD
    const sql = 'UPDATE disciplinas SET nome_disciplina = $1, id_professor = $2 WHERE id_disciplina = $3';
    await BD.query(sql, [nome_disciplina, id_professor, id]);
    //REDIRECIONANDO PARA PAGINA DE LISTAGEM
    res.redirect('/disciplinas/listar');
});

module.exports = rotas;