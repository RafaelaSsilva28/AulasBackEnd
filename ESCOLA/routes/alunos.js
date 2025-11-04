const express = require('express');
const rotas = express.Router();
const BD = require('../db')

rotas.get('/listar', async (req, res) => {     

     //armazenando o valor dentro do campo busca
    const busca = req.query.busca || '';
    const ordem = req.query.ordem || 'nome';

    //BUSCANDO TODOS OS PROFESSORES DO BANCO DE DADOS
   const dados = await BD.query(`SELECT * FROM alunos left JOIN turmas on alunos.id_turma = turmas.id_turma 
    WHERE alunos.ativo = true AND (nome ILIKE $1 or nome_turma ILIKE $1) 
    order by ${ordem}`, 
    ['%' + busca + '%']);
        console.log(dados.rows);
        //BUSCANDO O ARQUIVO LISTA.EJS NA PASTA VIEWS/PROFESSORES
        res.render('alunos/lista.ejs', { dadosAlunos: dados.rows });   //retorna os professores em formato de lista     
});

rotas.get('/novo', async (req, res) => {
    const dadosTurmas = await BD.query(`
        SELECT id_turma, nome_turma FROM turmas
        WHERE ativo = true 
        ORDER BY nome_turma`);
    res.render('alunos/novo.ejs', {dadosTurmas: dadosTurmas.rows});
});


//OBTENDO OS DADOS DE CADASTRO FORMULARIO DO turmas E GUARDANDO  
rotas.post('/novo', async (req, res) => {     
    const nome = req.body.nome;
    const idade = req.body.idade;
    const cpf = req.body.cpf;
    const sexo = req.body.sexo;
    const foto = req.body.foto
    const turma = req.body.id_turma;
        // const {nome_professor, telefone, formacao}

            //INSERINDO OS DADOS RECEBIDOS NO BD
    const sql = 'INSERT INTO alunos (nome, idade, cpf, sexo, foto, id_turma) VALUES ($1, $2, $3, $4, $5, $6)';
    await BD.query(sql, [nome, idade, cpf, sexo, turma]);
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
     const dadosTurmas = await BD.query(`
        SELECT id_turma, nome_turma FROM turmas
        WHERE ativo = true
        ORDER BY nome_turma`);

    res.render('alunos/editar.ejs', {aluno: dados.rows[0], dadosTurmas: dadosTurmas.rows});
    
});

rotas.post('/editar/:id', async (req, res) => {     
    const id = req.params.id;
    
       //const {nome, idade, emaul, cpf} = req.body;
    const nome = req.body.nome;
    const idade = req.body.idade;
    const  cpf  = req.body.cpf;
    const  sexo = req.body.sexo;
    const  id_turma = req.body.id_turma;
    const  foto = req.body.foto;
    const  email = req.body.email;
 

            //INSERINDO OS DADOS RECEBIDOS NO BD
    const sql = 'UPDATE alunos SET nome = $1, idade = $2, cpf = $3, sexo = $4, foto = $5, id_turma = $6, email = $7 WHERE id_aluno = $8';
    await BD.query(sql, [nome, idade, cpf, sexo, foto, id_turma, email, id]);
        //REDIRECIONANDO PARA PAGINA DE LISTAGEM
    res.redirect('/alunos/listar');
});

module.exports = rotas;