$(document).ready(function () {
    function animateSkills() {
        $('.skill-bar').each(function() {
            const width = $(this).data('width');
            $(this).css('width', width + '%');
        });
    }

    // Activar animaciones al hacer scroll
    $(window).on('scroll', function() {
        const skillsSection = $('.flip-card-back');
        if (skillsSection.length) {
            const sectionTop = skillsSection.first().offset().top;
            const windowHeight = $(window).height();
            const scrollPos = $(window).scrollTop();
            
            if (scrollPos + windowHeight > sectionTop) {
                animateSkills();
            }
        }
    });

    // Forzar animación si la sección ya está visible al cargar
    if ($('.flip-card-back').length && $(window).scrollTop() + $(window).height() > $('.flip-card-back').first().offset().top) {
        animateSkills();
    }
});