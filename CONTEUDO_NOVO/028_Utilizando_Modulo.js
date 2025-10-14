const funcoesJuros = require("./027_Modulo_Juros");

const resultadoJurosSimples = funcoesJuros.juros_simples(1000, 5, 12);
    console.log(resultadoJurosSimples);
     //importando

const resJurosComposto = funcoesJuros.juros_composto(500, 4, 24);
//desestruturando o objeto de retorno da função
const {juros, total} = resJurosComposto;
    console.log(`O jutos foi de R${juros} e o total foi de R${total}`);
    