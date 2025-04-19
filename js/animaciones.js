$(document).ready(function () {
    // Animaciones del Hero section
    $('.hero .overlay').fadeIn(1000);
    $('.hero-title').slideDown(1000);
    $('.hero-subtitle').delay(200).slideDown(1000);
    $('.hero .btn').delay(400).fadeIn(1000);

    // Efecto zoom en tarjetas
    $('.card').hover(
        function() {
            $(this).find('.card-img').css('transform', 'scale(1.05)');
            $(this).find('.overlay').css('opacity', '1');
            $(this).css({
                'transform': 'translateY(-5px)',
                'box-shadow': '0 10px 20px rgba(0, 0, 0, 0.15)'
            });
        },
        function() {
            $(this).find('.card-img').css('transform', 'scale(1)');
            $(this).find('.overlay').css('opacity', '0');
            $(this).css({
                'transform': 'translateY(0)',
                'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.1)'
            });
        }
    );

    // Efecto flip en tarjetas
    $('.flip-card').hover(
        function() {
            $(this).find('.flip-card-inner').css('transform', 'rotateY(180deg)');
        },
        function() {
            $(this).find('.flip-card-inner').css('transform', 'rotateY(0deg)');
        }
    );
}); 