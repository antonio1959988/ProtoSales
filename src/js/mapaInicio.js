

(function () {
    // Logical or
    const lat = 20.67444163271174;
    const lng = -103.38739216304566;
    const mapa = L.map('mapa-inicio').setView([lat, lng], 16);

    let markers = new L.featureGroup().addTo(mapa)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);

    const obtenerPropiedades = async () => {
        try {
            const url = 'api/propiedades'

            const respuesta = await fetch(url)
            const propiedades = await respuesta.json()

            mostrarPropiedades(propiedades.propiedades)

        } catch (error) {
            console.log(error)
        }
    }

    const mostrarPropiedades = propiedades => {
        
        propiedades.forEach(propiedad => {

            // Agregar los pines
            const marker = new L.marker([propiedad?.lat, propiedad?.lng], {
                autoPan: true
            })
            .addTo(mapa)
            .bindPopup(`
                <div class='text-center'>
                <p class='text-indigo-600 font-bold'>
                ${propiedad?.categoria.nombre}
            </p>
            <h1 class='text-xl font-extrabold uppercase my-2'>${propiedad?.titulo}</h1>
            <img src='/uploads/${propiedad?.imagen}' alt='imagen de la propiedad ${propiedad?.titulo}'>
            <p class='text-gray-600 font-bold'>
                ${propiedad?.precio.nombre}
            </p>
            <a href='/propiedad/${propiedad?.id}' class='bg-indigo-600 block p-2 text-center font-bold uppercase text-white'>Ver Propiedad</a>


                </div>

            `)

            markers.addLayer(marker)
        })
    }

    obtenerPropiedades()
})()