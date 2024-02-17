(function() {

    // Logical or
    const lat = document.querySelector('#lat').value || 20.67444163271174;
    const lng = document.querySelector('#lng').value || -103.38739216304566;
    const mapa = L.map('mapa').setView([lat, lng ], 16);
    let marker;

    // Utilizar provider y geocoder
    const geocodeService = L.esri.Geocoding.geocodeService();

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);

    // El pin
    marker = new L.marker([lat, lng], {
        draggable: true,
        autoPan: true
    })
    .addTo(mapa)

    // Detectar el movimiento del pin
    marker.on('moveend', function(event){
        marker = event.target

        const posicion = marker.getLatLng()

        // Centrar mapa al detectar evento
        mapa.panTo(new L.LatLng(posicion.lat, posicion.lng))

        // Obtener la información de las calles al soltar el pin
        geocodeService.reverse().latlng(posicion, 13).run( function(err, result) {
            
            // Objeto con info de la ubicación del pin
            console.log(result)

            // Personalizar popup de pin
            marker.bindPopup(result.address.LongLabel)

            // Llenar los campos
            document.querySelector('.calle').textContent = result?.address?.Address ?? '';
            document.querySelector('#calle').value = result?.address?.Address ?? ''
            document.querySelector('#lat').value = result?.latlng?.lat ?? ''
            document.querySelector('#lng').value = result?.latlng?.lng ?? ''
        } )
    })
})()