const fs = require('fs');

const pessoa = {
    nome: 'Rafaela',
    idade: 17,
    hobbies : ['jogar', 'sair', 'estudar']
}

//convertendo um objeto JavaScript para JSON
const json = JSON.stringify(pessoa);

//gravando o arquivo JSON
fs.writeFileSync('./026.json', json);