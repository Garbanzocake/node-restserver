require('./config/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');


const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'));



// mongoose.connect('mongodb://localhost:27017/cafe', (err) => {
//     if (err) throw err;

//     console.log('Base de datos ONLINE');
// });



mongoose.connect(process.env.urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}, console.log('Base de datos ONLINENUEVAFORMA'));



app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto:', 3000);
});