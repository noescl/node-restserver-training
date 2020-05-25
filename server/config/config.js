//===============
// Puerto
//===============
process.env.PORT = process.env.PORT || 3000;

//===============
// Entorno
//===============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//===============
// Base de Datos
//urlDB = 'mongodb://cafe-user:bXPh7I8YsKllL5Be@cluster0-5l6ey.mongodb.net/cafe';  NOT WORK  OLD VERSION
//===============
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb+srv://cafe-user:bXPh7I8YsKllL5Be@cluster0-5l6ey.mongodb.net/cafe';
}
process.env.URLDB = urlDB;