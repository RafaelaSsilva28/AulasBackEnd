//  UTILIZANDO ESCOPO DE VARIAVEL GLOBAL E LOCAL
    //VARIAVEL GLOBAL e LOCAL

let variavelGlobal = 'Sou global';   //global pode ser chamada de qualquer lugar consegue ser chamada por um console.log

    function minhaFuncao(){
        let variavelLocal = 'Sou local';   //local não pode ser chamada de qualquer lugar pelo console ela (NÃO É DEFINIDA)
        console.log(variavelGlobal);    //acessando variavel global
        console.log(variavelLocal);         //acessando variavel local
        
    }
        minhaFuncao();
            console.log(variavelGlobal);  //chamando uma variavel GLOBAL Q CONSEGUE SER CHAMADA
                console.log(variavelLocal);   //chamando uma variavel LOCAL QUE NÃO CONSEGUE SER CHAMADA VAI DAR ERRO
                
            