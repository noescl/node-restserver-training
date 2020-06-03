const jwt = require('jsonwebtoken');

//=================================
//Verificar Token
//=================================
let verificaToken = (req, res, next) => {
    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            console.log(err);
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token NO Valido'
                }
            });
        }
        req.usuario = decoded.usuario;
        next();
        console.log(token);
    });


};

//=================================
//Verificar AdminRole leer el usuario 
//=================================
let verificaAdmin_Role = (req, res, next) => {
    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        res.json({
            ok: false,
            err: {
                message: 'Usuario no es administrador'
            }
        });
    }
};

// =====================
// Verifica token para imagen
// =====================
let verificaTokenImg = (req, res, next) => {

    let token = req.query.token;

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
        next();

    });


}

module.exports = {
    verificaToken,
    verificaAdmin_Role,
    verificaTokenImg
}