const aprovado = true;
let mensagem = '';
//MODO IF TRADICIONAL SEM SER TERNARIO
if (aprovado == true){
    mensagem = 'Aprovado'
}else{
    mensagem = 'Reprovado'
}

//MODO TERNARIO  variavel recebe a condição do nosso parentese if() com sua resposta ? verdadeiro : se falso
              //CONDIÇÃO   ? se verdadeiro(if) : se falso(else)
mensagem = (aprovado == true) ? 'Aprovado': 'Reprovado'