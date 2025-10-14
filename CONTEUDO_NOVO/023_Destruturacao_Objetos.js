let funcionario = {      //variavel funcionario 
    nome: "Reinaldo",
    salario: 5000.00,
    idade: 40,
    setor: 'RH'
}

//atribuindo a variaveis os valores das propriedades do objeto 
//let salario = funcionario.salario * 1.1;
//let nome = funcionario.nome;

//mesma coisa mais resumida em uma unica linha destruturação do objeto 
    //declarando e  atribuindo os valores automaticamente do objeto
let{  idade, setor, salario, nome  } = funcionario;
console.log(salario);
