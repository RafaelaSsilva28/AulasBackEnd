const express = require('express');
const rotas = express.Router();
const BD = require('../db')

rotas.get('/listar', async (req, res) => {     
    //BUSCANDO TODOS OS PROFESSORES DO BANCO DE DADOS
    const dados = await BD.query(`SELECT * 
    FROM disciplinas INNER JOIN professores on disciplinas.id_professor = professores.id_professor
    WHERE disciplinas.ativo = true 
order by disciplinas.nome_disciplina`);
        console.log(dados.rows);
        //BUSCANDO O ARQUIVO LISTA.EJS NA PASTA VIEWS/PROFESSORES
        res.render('disciplinas/lista.ejs', { dadosDisciplinas: dados.rows });   //retorna os professores em formato de lista
        
});

rotas.get('/novo', async (req, res) => {
    res.render('disciplinas/novo.ejs')
})

//OBTENDO OS DADOS DE CADASTRO FORMULARIO DO turmas E GUARDANDO  
rotas.post('/novo', async (req, res) => {     
    const disciplinas = req.body.nome_disciplina;
        // const {nome_professor, telefone, formacao}

            //INSERINDO OS DADOS RECEBIDOS NO BD
    const sql = 'INSERT INTO disciplinas (nome_disciplina) VALUES ($1)';
    await BD.query(sql, [disciplinas]);
        //REDIRECIONANDO PARA PAGINA DE LISTAGEM
    res.redirect('/disciplinas/listar');
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

rotas.get('/editar/:id', async (req, res) => {     
    const id = req.params.id;

    const sql = 'SELECT * FROM disciplinas WHERE id_disciplina = $1';
    const dados = await BD.query(sql, [id]);

    console.log(dados.rows[0]);

    res.render('disciplinas/editar.ejs', {disciplina: dados.rows[0]});
    
});

rotas.post('/editar/:id', async (req, res) => {     
    const id = req.params.id;
    
    const nome_disciplina = req.body.nome_disciplina;
        

            //INSERINDO OS DADOS RECEBIDOS NO BD
    const sql = 'UPDATE disciplinas SET nome_disciplina = $1 WHERE id_disciplina = $2';
    await BD.query(sql, [nome_disciplina, id]);
        //REDIRECIONANDO PARA PAGINA DE LISTAGEM
    res.redirect('/disciplinas/listar');
});

module.exports = rotas;