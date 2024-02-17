import { Precio, Categoria, Propiedad } from '../models/index.js'

const inicio = async (req, res) => {

    const [categorias, precios] = await Promise.all([
        Categoria.findAll({row: true}),
        Precio.findAll({row: true})
    ])

    console.log(categorias)

    res.render('inicio', {
        pagina: 'Inicio',
        categorias,
        precios
    })
}

const categoria = (req, res) => {
    
}

const noEncontrado = (req, res) => {
    
}

const buscador = (req, res) => {
    
}

export {
    inicio,
    categoria,
    noEncontrado,
    buscador
}