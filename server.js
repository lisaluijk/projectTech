const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views','view/pages');

app.use('/static', express.static('static'))


app.listen(8000);

app.get('/', onHome);
app.get('/egg?', onEasterEgg);
app.get('/submit', onSubmit);
app.get('/about', onAbout);

app.use((req, res, next) => {
    res.render('error.ejs')
})

function onHome(req, res){
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
      ];
      var tagline = "No programming concept is complete without a cute animal mascot.";
    
    res.render('index.ejs', {
        mascots: mascots,
        tagline: tagline
      });
}

function onEasterEgg(req, res){
    res.send('<h1>serveren</h1>');
}

function onSubmit(req,res){
    res.render('submitForm.ejs');
}

function onAbout(req,res){
    res.render('about.ejs');
}

