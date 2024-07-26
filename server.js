require('dotenv').config();

const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const MySqlStore = require('express-mysql-session')(session);

const GetControllers = require('./src/controllers/get');
const PostControllers = require('./src/controllers/post');

const app = express();
const hbs = exphbs.create({});

const ConfigSessionDb= {
    host: 'localhost',
    port: process.env.PORTDB,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
};

const sessionStore = new MySqlStore(ConfigSessionDb)

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');

app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    store:sessionStore,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24
    }
}));

app.use(express.static('./src/public'));

app.get('/',GetControllers.Home);
app.get('/sessions',GetControllers.Sessions);

app.post('/feedback',PostControllers.FeedBack);
app.use(function(request,response) {
    return response.status(404).render("error/404",{
        title: "Página não encontrada",
        css: ['https://orca-massive-mullet.ngrok-free.app/css/404.css']
    });
});
// ADMIN ROUTERS

const PORT = 8080;

app.listen(PORT,() => console.log('Server Running ' + PORT));