//==================
//Puerto
//==================

process.env.PORT = process.env.PORT || 3000;


//==================
//Entorno
//==================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==================
// Vencimiento del Token
//==================
//60 segundos
//60 minutos
//24 horas
//30 dias

process.env.CADUCIDAD_TOKEN = '48h';



//==================
// SEED(secreto,semilla de autenticación)
//==================

process.env.SEED = process.env.SEED || 'seed-Pastel-de-Garbanzo-desarrollo';



//==================
//DB
//==================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;


//==================
//Google client id
//==================

process.env.CLIENT_ID = process.env.CLIENT_ID || '777656063619-34hr4hc5ichoklh4ftjfp8c6q40422ph.apps.googleusercontent.com';

// mongodb://localhost:27017/cafe