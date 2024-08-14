require('dotenv').config();
const express = require('express');
const session = require('express-session');
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');

const client = require('./config/connection');
const view_routes = require('./routes/view_routes');
const user_routes = require('./routes/user_routes');
const blog_routes = require('./routes/blog_routes')

const app = express();
const PORT = 3333;

//create a git route for every file in public
app.use(express.static('./public'));

app.use(express.json());

//allow urlencoded form data to be attached to req.body
app.use(express.urlencoded({ extended: false }))

//method override
app.use(methodOverride('_method'));

//load setup handlebars
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs')

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        store: new SequelizeStore({
            db: client,
        }),
        saveUninitialized: false,
        resave: false,
        proxy: true,
        cookie: {
            httpOnly: true,
            maxAge: 1 * 60 * 60
        }
    })
);

//load in the routes
app.use('/', [view_routes, user_routes, blog_routes]);


// start the server or make the server listen for server-side requests
client.sync({ force: false })
    .then(() => {
        app.listen(PORT, () => {
            console.log('Server started', PORT)
        })
    });