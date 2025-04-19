$(document).ready(function () {
    // Configuración del carrusel de testimonios
    $('#testimonialsCarousel').carousel({
        interval: 5000,
        pause: 'hover'
    }).on('slid.bs.carousel', function () {
        console.log('Carrusel cambió de slide');
    });
});