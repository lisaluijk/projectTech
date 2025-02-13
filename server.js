const express = require('express');
const app = express();

app.listen(8000);
app.get('/', onHome);
app.get('/egg', onEasterEgg);

function onHome(req, res){
    res.send('<h1>eerste server bitch</h1>');
}

function onEasterEgg(req, res){
    res.send('<h1>ei</h1?');
}