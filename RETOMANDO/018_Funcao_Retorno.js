//FUNÇÃO COM RETORNO
    //FUNCTION e RETURN
function calcularComissao(valor, percComissao){
    let valorComissao = valor * (percComissao / 100);
    return valorComissao     //da a resposta para quem pediu retorna o valor
}

let comissaoRetornada;
comissaoRetornada = calcularComissao(2500, 3);
console.log(comissaoRetornada);


//adicionando outro salario
let salario = 3000;
salario = salario + comissaoRetornada;
    console.log('O salario final é de ', salario);