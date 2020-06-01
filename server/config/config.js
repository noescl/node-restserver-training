//===============
// Puerto
//===============
process.env.PORT = process.env.PORT || 3000;

//===============
// Entorno
//===============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//===============
// Fecha de Vencimiento
// segundos, minutos, horas, dias
//===============
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
//se cambia caducidad a 48 hrs
//process.env.CADUCIDAD_TOKEN = '48h';

//===============
// Seed de Autentificacion
//===============
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//===============
// Base de Datos
//urlDB = 'mongodb://cafe-user:bXPh7I8YsKllL5Be@cluster0-5l6ey.mongodb.net/cafe';  NOT WORK  OLD VERSION
//===============
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

//===============
// Google Client Id
//===============
process.env.CLIENT_ID = process.env.CLIENT_ID || '841545208908-ipqofut6ih1kjpq3sf79013opdu56f5k.apps.googleusercontent.com';