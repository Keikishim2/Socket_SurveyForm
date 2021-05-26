const express = require('express');
const app     = express();
const session = require('express-session');
const flash   = require('express-flash');

app.use(session({
secret: 'masocket',
resave: false,
saveUninitialized: true,
cookie: { maxAge: 60000 }
}))

app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
require('./config/routes.js')(app);

const server = app.listen(8000, () => console.log('Listening on port 8000'));
const route = require('./config/routes')(app, server);