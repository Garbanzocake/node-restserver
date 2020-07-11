//==================
//Puerto
//==================

process.env.PORT = process.env.PORT || 3000;


//==================
//Entorno
//==================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==================
//DB
//==================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://GarbanzoCake:UdtyOcxpjKQxkWyZ@cafe.jbl4i.mongodb.net/Cafe?retryWrites=true&w=majority';
}

process.env.URLDB = urlDB;


// mongodb://localhost:27017/cafe