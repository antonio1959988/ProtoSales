import jwt from 'jsonwebtoken'
import Usuario from '../models/Usuario.js'


const identificarUsuario = async (req, res, next) => {
    // Identificar si hay un token en las cookies
    const _token = req.cookies._token
    if(!_token){
        req.usuario = null
        return next()
    }

    try {
        const decoded = jwt.verify(_token, process.env.JWT_SECRET)

        // Buscar usuario y ocultar campos sensibles
        const usuario = await Usuario.scope('eliminarPassword').findByPk(decoded.id)

        if(usuario){
            req.usuario = usuario
        }
        return next()
    } catch (error) {
        console.log(error)
        return res.clearCookie('_token').redirect('/auth/login')
    }
    
    // Comprobar el token
  
}

export default identificarUsuario