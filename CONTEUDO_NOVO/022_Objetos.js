//UTILIZANDO OBJETOS
    let produtos = {
        nome: "Celular",
        preco: 2000,
        marca: "Sansung",
        quebrado: false
    }
console.log(produtos);  //exibindo todos os dados do objeto
console.log(produtos.nome);  //exibindo dado especifico 
console.log(produtos.modelo);  //exibindo undefined

console.log(produtos['nome']);

//ALTERANDO UM OBJETO
produtos.preco = 1900;
    console.log(produtos);
//ADICIONANDO UM VALOR
produtos.modelo = 'Galaxy S24';
    console.log(produtos);
 
    
//ITERANDO SOBRE AS CHAVES DO OBJETO UTILIZANDO FOR
    for(let chave in produtos){
        console.log(chave);
        console.log(produtos[chave]);
        
    }
//OUTRO JEITO DE FAZER
    for (let chave in produtos) {
        console.log(`Chave: ${chave} seu valor é ${produtos[chave]}`);
        
        
    }


//objetos alinhados 
let aluno = {
    nome: 'Joquim',
    sexo: 'M',
    idade: 16,
    dados_mae: {        
        nome: 'Maria',
        telefone: '18 2323-323'
    },
    boletim: [     
        {materia: 'Português', nota: 10, faltas: 6},
        {materia: 'Matematica', nota: 8, faltas: 2}
    ]
   
}
   
console.log(aluno);
console.log(aluno.dados_mae.telefone);
     console.log(aluno.boletim);
        console.log(aluno.boletim[1].nota);
