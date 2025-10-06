const express = require('express');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// Configurando o motor de visualização EJS
app.set('view engine', 'ejs');
// Configurando a pasta para os arquivos estáticos
app.use(express.static('public'));

//Definindo o layout padrão da nossa página
app.use(expressLayouts);
app.set('layout', 'layouts/principal');

//Para processar e receber os dados do formulário
app.use(express.urlencoded({ extended: true}));

//Rota principal do site
app.get('/', (req, res) => {
    //Buscando o arquivo index.ejs na pasta views
    res.render('index');
});

app.get('/sobre', (req, res) => {
    //Buscando o arquivo index.ejs na pasta views
    res.render('sobre');
});

app.get('/juros_simples', (req, res) => {
    res.render('juros_simples');
});

app.post('/juros_simples', (req, res) => { 
    //Recebendo os dados do campos do formulário    
    const capital = req.body.capital;
    const taxa = req.body.taxa;
    const tempo = req.body.tempo;
    const juros = (capital * taxa * tempo) / 100;
    const total = Number(capital) + Number(juros);

    res.render('juros_simples', {capital, taxa, tempo, juros, total} );
})

app.get('/juros_composto', (req, res) => {
    res.render('juros_composto');
});

app.post('/juros_composto', (req, res) => { 
    //Recebendo os dados do campos do formulário    
    const capital = Number(req.body.capital);
    const taxa = Number(req.body.taxa);
    const tempo = Number(req.body.tempo);
    const composto = capital * (1 + taxa / 100) ** tempo.toFixed(2);
    const total = composto;

    res.render('juros_composto', {capital, taxa, tempo, composto, total} );
})

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor http://localhost:${porta}`);
});
