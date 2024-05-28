const express = require('express');
const ejs = require('ejs');
const router = express.Router();


app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + './views'));



// Rotas

const HomeRouter  = require('./controllers/HomeController')  //Home

// Configs
app.use(express.json());
app.use(express.static(__dirname));


// Uso das Rotas
app.get('/',(_,res)=>res.redirecy('/Home/'));

app.use(HomeRouter);

app.listen(3000);
console.log('Listen to 3000');