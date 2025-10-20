const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));   //configura a pasta das views
app.set('view engine', 'ejs');    // Configurando o motor de visualização EJS
app.use(express.static(path.join(__dirname, 'public')));   // Configurando a pasta para os arquivos estáticos
//buscando a pasta public

//Para processar e receber os dados do formulário
app.use(express.urlencoded({ extended: true}));
app.use(express.json());     //para utilizar dados em formato JSON convertendo tudo para JSON


//rota da pagina principal  'Landing Page'
app.get('/', (req, res) => {
    res.render('landing/index');   //buscara o arquivo index.ejs que esta na pasta views/landing
})

//importando as rotas do admin
     //localhost:3000/admin/dashboard
const adminRotas = require('./routes/admin')
app.use('/admin', adminRotas); //Todas as rotas do admin começam com /admin

//importando as rotas do profesor
     //localhost:3000/admin/dashboard
const professoresRotas = require('./routes/professores')    //busca do arquivo routes/professores.js
app.use('/professores', professoresRotas);

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor http://localhost:${porta}`);
});