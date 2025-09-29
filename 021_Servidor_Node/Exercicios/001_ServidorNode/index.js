const express = require('express'); 
const app = express();

app.get('/',  (req, res) => {      
    res.send ('<h1>🎉BEM VINDO🎉 <br> VOCÊ QUER SABER MAIS SOBRE MEUS PRODUTOS DIGITE NO URL:</h1><h3> ASSIM VOCE CONSEGUE IR PARA PAGINA DE PRODUTOS <h2> /produtos </h2>')
 });

const produtos = ['Pizza congelada', 'Nutella', 'Milho', 'Melancia', 'Bolacha', 'Biscoito', 'Mamão', 'Xuxu', 'Goiaba', 'Chocolate', 'Carne Bovina']; 
app.get('/produtos',  (req, res) => {      
    let html = '<h1>..............................................................LISTA DE PRODUTOS................................................................................</h1>';
;
    html += '<ul>';       
    for (let produtoAtual of produtos){ 
        html += `<li><h2>${produtoAtual}</h2></li>`
    }
    html += '</ul>';   
    res.send(html); 
 });

  app.get('/produtos/:id', (req,res) => {   
    const id = req.params.id;
    const produtoSel = produtos[id];  
    if (produtoSel == undefined){
        res.send('produto não encontrado')
    }else{
    res.send(`<h1>O id é ${id} e seu nome do produto escolhido é ${produtoSel}</h1>`);
    }
 })  

 app.get('/soma/:id_produto/:preco/:qtd', (req , res) => {
    const id_produto = Number (req.params.id_produto);  
    const preco = Number (req.params.preco); 
    const qtd = Number (req.params.qtd);  
    const resultado = preco * qtd;
    res.send(`${preco} * ${qtd} = ${resultado} o id do produto é ${id_produto}`);
});

app.get('/menu', (req, res) => {
    let html = `
    <h1>MENU</h1>
    <a href ="/"> BEM-VINDO </a> <br>
    <a href ="/produtos"> MEUS PRODUTOS </a> <br>
    <a href ="/produtos/: id"> ID DO PRODUTO </a> <br>
    <a href ="//soma/:id_produto/:preco/:qtd"> VALOR DA COMPRA </a> <br>
    `;
    res.send(html);
});





const porta = 3000;   
app.listen(porta, () => {     
    console.log(`servidor rodando em http://localhost:${porta}`);
    
})   