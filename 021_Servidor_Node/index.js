//CRIANDO CONSTANTE PARA RECEBER O MODULO EXPRESS
    //declarando nosso servidor
const express = require('express');      //constante recebendo a função do pacote express
//CRIANDO UMA APLICAÇÃO EXPRESS
const app = express();

//APRENDENDO NOSSA PRIMEIRA ROTA    
//const pgPrincipal = (req, res) => {      (REQ de requisição recebe RES de respondendo o servidor)
   // res.send ('Bem vindo ao Servidor Node.js com Express') 
// }
    //ROTA PRINCIPAL COM /
app.get('/',  (req, res) => {      
    res.send ('Bem vindo ao Servidor Node.js com Express')
 });
    //SEGUNDA ROTA
app.get('/sobre',  (req, res) => {      
    res.send ('ESTA É A PAGINA SOBRE DO PROJETO')
 });  

 const usuarios = ['Rafaela', 'Guilherme', 'Vanessa', 'Paulo'];   //VETORES
 app.get('/usuarios',  (req, res) => {      
    let html = '<h1>Lista de usuarios:</h1>';
    html += '<ul>';        //html = html + '<ul>';
    for (let usuarioAtual of usuarios){    //declarando uma variavel para CADA VETOR não precisa de condição nem incremento
        html += `<li>${usuarioAtual}</li>`
    }
    html += '</ul>';   //fechando nosso ul
    res.send(html);  //chamando como se fosse nosso console nossa lista
 });  


 app.get('/usuario/:id', (req,res) => {   //BUSCANDO ID DE ALGUM USUARIO DA NOSSA LISTA
    const id = req.params.id;
    const usuarioSel = usuarios[id];   //chamando o usuario da posição do id que vc quer
    if (usuarioSel == undefined){
        res.send('Usuario não encontrado')
    }else{
    res.send(`Voce esta visualizando o perfil do id ${id} - seu nome é ${usuarioSel}`);
    }
 })  

 app.get('/soma/:n1/:n2', (req , res) => {
    const n1 = Number (req.params.n1);  //convertendo para number
    const n2 = Number (req.params.n2);  //convertendo para number
    const resultado = n1 + n2;
    res.send(`${n1} + ${n2} = ${resultado}`);
});

app.get('/menu', (req, res) => {
    let html = `
    <h1>MENU</h1>
    <a href ="/">😍 Principal</a> <br>
    <a href ="/😎 Sobre">Sobre</a> <br>
    <a href ="/usuarios">😂 Usuarios</a> <br>
    <a href ="/usuario/1">👥 USUARIO</a> <br>
    <a href ="/usuario/90">👥 USUARIO INVALIDO</a> <br>
    <a href ="/soma">🕸 SOMA</a> <br>
    `;
    res.send(html);
});

    //INICIANDO NOSSO SERVIDOR 
const porta = 3000;   //padrão 3000
app.listen(porta, () => {     //ouvindo minha porta com uma 
    console.log(`servidor rodando em http:/localhost:${porta}`);
    
})     