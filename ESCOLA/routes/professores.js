const express = require('express');
const rotas = express.Router();
const BD = require('../db')

//listar prfessores (R-read)
   //localhost:3000/professores/listar 
rotas.get('/listar', async (req, res) => {     

    //armazenando o valor dentro do campo busca
    const busca = req.query.busca || '';
    const ordem = req.query.ordem || 'nome_professor';

    //BUSCANDO TODOS OS PROFESSORES DO BANCO DE DADOS
const dados = await BD.query(`SELECT * FROM professores WHERE ativo = true AND nome_professor ILIKE $1 or formacao ILIKE $1 order by ${ordem}`, ['%' + busca + '%']);
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

//CRIANDO ROTA PARA EXCLUIR
rotas.post('/excluir/:id', async (req, res) => {     
    //recebendo codigo q quero excluir
    const id = req.params.id;

    //comando SQL para excluir do BD
    const sql = 'UPDATE professores SET ativo = false WHERE id_professor = $1';
    //mandando buscar o comando no BD
    await BD.query(sql, [id]);

    //redirecionando para pagina de listagem 
    res.redirect('/professores/listar');
});

rotas.get('/editar/:id', async (req, res) => {     
    const id = req.params.id;

    const sql = 'SELECT * FROM professores WHERE id_professor = $1';
    const dados = await BD.query(sql, [id]);

    console.log(dados.rows[0]);

    res.render('professores/editar.ejs', {professor: dados.rows[0]});
    
});

rotas.post('/editar/:id', async (req, res) => {     
    const id = req.params.id;
    
    const nome_professor = req.body.nome_professor;
    const telefone = req.body.telefone;
    const formacao = req.body.formacao;
        // const {nome_professor, telefone, formacao}

            //INSERINDO OS DADOS RECEBIDOS NO BD
    const sql = 'UPDATE professores SET nome_professor = $1, telefone = $2, formacao = $3 WHERE id_professor = $4';
    await BD.query(sql, [nome_professor, telefone, formacao, id]);
        //REDIRECIONANDO PARA PAGINA DE LISTAGEM
    res.redirect('/professores/listar');
});

module.exports = rotas;