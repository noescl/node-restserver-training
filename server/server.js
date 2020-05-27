require('./config/config');

const express = require('express')
    // Using Node.js `require()`
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); //Se puede llamar middleware

// parse application/json
app.use(bodyParser.json()); //Se puede llamar middleware

//configuracion global de rutas
app.use(require('./routes/index')); //Se puede llamar middleware


//mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
//mongoose.connect('mongodb://localhost:27017/cafe', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
mongoose.connect(process.env.URLDB, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
    (err, res) => {
        if (err) throw err;

        console.log('Base de Datos Online');
    });

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto :', process.env.PORT);
});