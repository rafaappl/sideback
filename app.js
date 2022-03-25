//importação express
const express = require('express');

//criando objeto na variavel app
const app = express();
//configurando EJS
app.set('view engine', 'ejs');
//acrescentando arquivos estaticos
app.use(express.static('public'));

//criando a primeira rota
app.get('/', (req, res) => {
    res.send('home/index', {noticias: noticias.slice(0, 3)});
})

//criando segunda rota
app.get('/noticias', (req, res) => {
    res.send('Todas as noticias');
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('Press CTRL + C to stop server');
});