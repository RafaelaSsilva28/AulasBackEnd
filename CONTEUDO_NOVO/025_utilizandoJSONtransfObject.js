//importando o modulo 'fs' para ler arquivos
const fs = require('fs');

//lendo o arquivo JSON
const dados = fs.readFileSync('./024_JSON.json', 'utf8');

//convertendi o JSON para um objeto JavaScript utilizando JSON.parse
const pessoa = JSON.parse(dados);
    console.log(pessoa);
        console.log(pessoa.nome);
        
    