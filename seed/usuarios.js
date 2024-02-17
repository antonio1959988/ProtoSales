import bcrypt from 'bcrypt'

const usuarios = [
    {
        nombre: 'Antonio',
        email: 'antonio@gmail.com',
        confirmado: 1,
        password: bcrypt.hashSync('password', 10)
    },
    {
        nombre: 'Fulano',
        email: 'fulano@gmail.com',
        confirmado: 1,
        password: bcrypt.hashSync('password',10 )
    }
]

export default usuarios