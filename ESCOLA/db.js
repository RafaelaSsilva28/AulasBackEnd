const { Pool } = require('pg');    //fazendo conexão com o banco de dados

const BD = new Pool(
    {
        user: 'postgres',   //usuario cadastrado no banco de dados
        host: 'localhost',  //endereço do servidor do banco de dados (esse caminho(localhost) muda se o servidor nao for mais local)
        database: '_2025_escola',                 //nome do banco de dados tem que ser exatamente igual para conectar
        password: 'admin',  //senha do usuario do nosso banco de dados
        port: 5432        //porta de conexão do nosso banco de dados
    }
);

module.exports = BD;