//UTILIZANDO O COMANDO DE FUNÇÃO E PARAMETROS
    //FUNCTION

function BemVindo(){
    console.log('--------------------------------------------');
    console.log('🎇Bem vindo à unidade curricular Back-End🎇');
    console.log('--------------------------------------------');
    
}
    BemVindo();   //chamando uma vez a function
for (let n = 1; n <= 1000; n++){
    BemVindo();      //CHAMANDO ELA 1000 VEZES
}


    //PARAMETROS

function multiplicando(nr1, nr2){
    let resultado = nr1 * nr2;
    return resultado;
    
}
  let res = multiplicando(2, 7);    //passando valores para nossas function
    console.log('Olha aqui o resultado 🎁', res);
        console.log(multiplicando(2, 7));    //outro jeito de chamar e mostrar a function
        
 //FAZENDO COM O PROMPT
 let numero1 = prompt ('DGITE UM NUMERO');
let numero2 = prompt ('DGITE O SEGUNDO NUMERO');
    let rest2 = multiplicando(numero1, numero2);  //passando valores para nossa function
        console.log('Aqui seu resultado🎇', rest2);
        