require('./config/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');


const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//Configurcion global de rutas
app.use(require('./routes/index'));




// mongoose.connect('mongodb://localhost:27017/cafe', (err) => {
//     if (err) throw err;

//     console.log('Base de datos ONLINE');
// });



mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}, console.log('Base de datos ONLINE NUEVA FORMA'));



app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto:', 3000);
});