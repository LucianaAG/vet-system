const express = require('express');
const app = express();
require('dotenv').config();
const session = require('express-session');
const flash = require('connect-flash');


const {create} = require('express-handlebars');

const handlebarsInstance = create({
  extname: ".hbs",
  defaultLayout: "main"
});

app.engine(".hbs", handlebarsInstance.engine);
app.set("views", "./views");

//Midleware para leer formularios
app.use(express.urlencoded({ extended: true }));

app.use(session({
 secret: process.env.COD_ENCRIPTACION,
 resave: false,
 saveUninitialized: false,
 name: 'secret-name',
 cookie: {
 expires: 600000 // (10 minutos)
 }
}));

app.use(flash());

app.use((request, response, next) => {
 response.locals.varEstiloMensaje = request.flash('varEstiloMensaje');
 response.locals.varMensaje = request.flash('varMensaje');
next();
});


app.use("/", require('./routes/routes'));
app.use(express.static(__dirname + "/assets"));

app.listen(process.env.PORT, () => {
    console.log("servidor corriendo en el puerto" + process.env.PORT);
});

