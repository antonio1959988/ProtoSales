import Propiedad from './Propiedad.js';
import Categoria from './Categoria.js';
import Precio from './Precio.js';
import Usuario from './Usuario.js'

// Archivo central con las asociaciones (relaciones SQL)

// Cada propiedad tiene un precio
Propiedad.belongsTo(Precio, {foreignKey: 'precioId'});

// Cada propiedad tiene una categoria
Propiedad.belongsTo(Categoria, {foreignKey: 'categoriaId'})

// Cata propiedad tiene un usuario
Propiedad.belongsTo(Usuario, {foreignKey: 'usuarioId'})

export {
    Propiedad,
    Precio,
    Categoria,
    Usuario
}