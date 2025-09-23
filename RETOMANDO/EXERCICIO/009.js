//EXERCICIO
function pessoas(nome, sobreNome){
    console.log('Olá meu nome é ', nome, sobreNome);
}
pessoas('Rafaela', 'de Souza Silva');
pessoas('Guilherme', 'Santos Nascimento');
pessoas('Vanessa', 'de Souza Silva');


//FUNÇAO ANONIMA
const pessoas = function(nome, sobreNome){
    console.log('Olá meu nome é ', nome, sobreNome);
}
pessoas('Rafaela', 'de Souza Silva');
pessoas('Guilherme', 'Santos Nascimento');
pessoas('Vanessa', 'de Souza Silva');

//FUNÇÃO ARROW 
const pessoas = (nome, sobreNome) => {
    console.log('Olá meu nome é ', nome, sobreNome);
}
pessoas('Rafaela', 'de Souza Silva');
pessoas('Guilherme', 'Santos Nascimento');
pessoas('Vanessa', 'de Souza Silva');