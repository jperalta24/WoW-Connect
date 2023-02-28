const express = require('express');
const path = require('path');
const routes = require('./controllers');
const helpers = require('./utils/helper');
const exphbs = require('express-handlebars');

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
//import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Uses custom helpers for Hndlbrs
const hbs = exphbs.create({ helpers });

// Set up sessions
const sess = {
    secret: 'Super secret secret',
    cookie: {
        // Stored in milliseconds
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// Inform Express.js to use Handlebars.js as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');




// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up for the routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Sever listening on http://localhost:${PORT}`));
});

