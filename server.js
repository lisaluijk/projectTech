require('dotenv').config();

const { MongoClient, ObjectId } = require("mongodb");
const uri = process.env.URI;
const client = new MongoClient(uri);
const db = client.db(process.env.DB_NAME);

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views','view/pages');

app.use('/static', express.static('static'));
app.use(express.urlencoded({extended: true}));


app.listen(8000);

app.get('/', onHome);
app.get('/egg?', onEasterEgg);
app.get('/about', onAbout);
app.get("/form", onForm);
app.post('/submit', onSubmit);
//app.get('/submit', onSubmit);

app.use((req, res, next) => {
    res.render('error.ejs');
})

async function connectDB() {
    try {
        await client.connect();
        console.log("client connected to database");
    } catch (error) {
        console.log(error);
    }
}

connectDB();


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
    //res.render('submitForm.ejs');
    //const { username, password, ofcourse, zekers, favcolor } = req.body;
    res.send(`${req.body.username}`);
    console.log(req.body);
}

function onAbout(req,res){
    res.render('about.ejs');
}

function onForm(req, res){
    console.log("lisa is poepie, soortvan lief en stinky");
    res.render('form.ejs');
}


