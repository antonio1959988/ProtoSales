import Propiedad from './Propiedad.js';
import Categoria from './Categoria.js';
import Precio from './Precio.js';
import Usuario from './Usuario.js'
import Mensaje from './Mensaje.js';

// Archivo central con las asociaciones (relaciones SQL)

// Cada propiedad tiene un precio
Propiedad.belongsTo(Precio, {foreignKey: 'precioId'});

// Cada propiedad tiene una categoria
Propiedad.belongsTo(Categoria, {foreignKey: 'categoriaId'})

// Cata propiedad tiene un usuario
Propiedad.belongsTo(Usuario, {foreignKey: 'usuarioId'})

// Una propiedad puede tener multiples mensajes
Propiedad.hasMany(Mensaje, {foreignKey: 'propiedadId'})

Mensaje.belongsTo(Propiedad, {foreignKey: 'propiedadId'})
Mensaje.belongsTo(Usuario, {foreignKey: 'usuarioId'})

export {
    Propiedad,
    Precio,
    Categoria,
    Usuario,
    Mensaje
}