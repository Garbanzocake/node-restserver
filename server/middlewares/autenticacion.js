const jwt = require('jsonwebtoken');


//========================
//Verificar token
//=========================


let verificaToken = (req, res, next) => {

    let token = req.get('Authorization');

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }

        req.usuario = decoded.usuario;

        next(); //ejecuta la verificacion y luego en cadena ejecuta lo que haya en la funcion siguiente

    });



    //console.log(token);//Se ejecuta la verificacion aun asi que no se imprima



};


//========================
//Verificar si usuario es Administrador -AdminRole
//=========================


let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;


    if (usuario.role === 'ADMIN_ROLE') {

        next();
        return;

    } else {

        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });

    }






};







module.exports = {
    verificaToken,
    verificaAdmin_Role
}