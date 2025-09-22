 const prompt = require ('prompt-sync')();

 let nome = prompt('Qual é o seu nome ? ');
    console.log('SEJA BEM VINDO(A)', nome);

let ano = prompt('Qual é o ano que voce nasceu?');
    let anoA  = 2025;
    let anoAn = 2024;
console.log('Voce tem', anoA - ano, 'anos');

let anoT = prompt('Voce ja fez aniversario ? ');
 if (anoT == 'sim'){
    console.log('Voce tem', anoA - ano, 'idade');
 } else if (anoT == 'nao'){
    console.log('Voce tem', anoAn - ano, 'idade');
 }



 