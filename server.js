const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views','view/pages');

app.use('/static', express.static('static'))


app.listen(8000);

app.get('/', onHome);
app.get('/egg', onEasterEgg);

function onHome(req, res){
    res.render('index.ejs');
}

function onEasterEgg(req, res){
    res.send('<h1>ei</h1?');
}

