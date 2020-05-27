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