$(document).ready(function () {
        // Funcionalidad para la página de precios
    
    // 1. Resaltar fila/columna en la tabla de precios
    $('.table-hover td, .table-hover th').hover(
        function() {
            // Resaltar columna
            const colIndex = $(this).index() + 1;
            $(this).closest('table').find(`tr td:nth-child(${colIndex}), tr th:nth-child(${colIndex})`).addClass('bg-light');
            
            // Resaltar fila
            $(this).parent().addClass('table-active');
        },
        function() {
            // Quitar resaltado
            $(this).closest('table').find('td, th').removeClass('bg-light table-active');
        }
    );

    // 2. Toggle mensual/anual
    $('input[name="priceToggle"]').on('change', function() {
        if ($('#annual').is(':checked')) {
            $('.monthly-price').addClass('text-muted');
            $('.annual-price').removeClass('text-muted').addClass('fw-bold');
        } else {
            $('.annual-price').addClass('text-muted');
            $('.monthly-price').removeClass('text-muted').addClass('fw-bold');
        }
    });

    // 3. Inicializar tooltips
    $('[data-bs-toggle="tooltip"]').tooltip({
        trigger: 'hover',
        placement: 'top'
    });
    // Animaciones del Hero
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

// Filtros corregidos para clases
$('.filter-checkbox').on('change', function() {
    const filter = $(this).data('filter');
    
    // Remover clase active de todos los botones
    $('.filters label').removeClass('active');
    // Agregar clase active al botón clickeado
    $(this).next('label').addClass('active');
    
    // Mostrar u ocultar elementos según el filtro
    if (filter === 'all') {
        $('.masonry-item').show().css('opacity', 0).animate({opacity: 1}, 300);
    } else {
        $('.masonry-item').hide();
        $(`.masonry-item[data-category="${filter}"]`).show().css('opacity', 0).animate({opacity: 1}, 300);
    }
});

// Asegurar que el filtro "Todas" esté activo al inicio
$('label[for="filter-all"]').addClass('active');
    // Contador animado con CountUp.js
    function startCounter() {
        $('.counter').each(function () {
            const $this = $(this);
            const target = parseInt($this.data('target'));
            if (typeof CountUp !== 'undefined') {
                const countUp = new CountUp(this, target, {
                    duration: 2,
                    useEasing: true
                });
                if (!countUp.error) {
                    countUp.start();
                } else {
                    console.error('CountUp error:', countUp.error);
                }
            } else {
                let current = 0;
                const step = target / 50;
                const interval = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(interval);
                    }
                    $this.text(Math.round(current));
                }, 40);
            }
        });
    }
// Efecto flip alternativo con jQuery (opcional)
$('.flip-card').hover(
    function() {
        $(this).find('.flip-card-inner').css('transform', 'rotateY(180deg)');
    },
    function() {
        $(this).find('.flip-card-inner').css('transform', 'rotateY(0deg)');
    }
);
    // Activar contador al hacer scroll
    let counterStarted = false;
    $(window).on('scroll', function () {
        const counterSection = $('.counter-section');
        if (counterSection.length) {
            const sectionTop = counterSection.offset().top;
            const windowHeight = $(window).height();
            const scrollPos = $(window).scrollTop();
            if (!counterStarted && scrollPos + windowHeight > sectionTop) {
                startCounter();
                counterStarted = true;
            }
        }
    });

    // Forzar inicio del contador si ya está visible al cargar
    if ($('.counter-section').length && $(window).scrollTop() + $(window).height() > $('.counter-section').offset().top) {
        startCounter();
        counterStarted = true;
    }

// Animación de barras de habilidades al hacer scroll
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

    // Sistema de rating con estrellas mejorado
$('.star-rating input').on('change', function() {
    const value = $(this).val();
    $(this).closest('.star-rating').find('.rating-value').text(value);
});

$('.star-rating label').on('mouseenter', function() {
    const ratingGroup = $(this).closest('.star-rating');
    const stars = ratingGroup.find('label');
    const currentStar = $(this);
    
    // Reset all stars
    stars.css('color', '#ddd');
    
    // Highlight current and previous stars
    currentStar.css('color', '#ffc107');
    currentStar.prevAll('label').css('color', '#ffc107');
}).on('mouseleave', function() {
    const ratingGroup = $(this).closest('.star-rating');
    const stars = ratingGroup.find('label');
    const checkedInput = ratingGroup.find('input:checked');
    
    if (checkedInput.length) {
        // Reset all stars
        stars.css('color', '#ddd');
        
        // Highlight selected rating
        checkedInput.next('label').css('color', '#ffc107');
        checkedInput.nextAll('label').css('color', '#ffc107');
    } else {
        // No rating selected, reset all
        stars.css('color', '#ddd');
    }
});

    // Personalización del carrusel
    $('#testimonialsCarousel').carousel({
        interval: 5000,
        pause: 'hover'
    }).on('slid.bs.carousel', function () {
        console.log('Carrusel cambió de slide');
    });

    // Validación en tiempo real para formulario de contacto
$('#contactFormMain input, #contactFormMain textarea').on('input', function() {
    const input = $(this);
    const isInvalid = input[0].checkValidity() === false && input.val() !== '';
    
    if (input.val() === '') {
        input.removeClass('is-valid is-invalid');
    } else if (isInvalid) {
        input.addClass('is-invalid');
        input.removeClass('is-valid');
    } else {
        input.addClass('is-valid');
        input.removeClass('is-invalid');
    }
});

// Validación mejorada para formularios de contacto
$('#contactForm, #contactFormMain').on('submit', function(e) {
    e.preventDefault();
    const form = $(this);
    const submitBtn = form.find('button[type="submit"]');
    const spinner = form.find('.spinner-border');
    const submitText = form.find('.submit-text');
    
    // Validación manual para mostrar feedback
    if (!form[0].checkValidity()) {
        form.addClass('was-validated');
        return;
    }
    
    // Mostrar spinner y deshabilitar botón
    submitBtn.prop('disabled', true);
    submitText.text('Enviando...');
    spinner.removeClass('d-none');
    
    // Simular envío (en un caso real sería una llamada AJAX)
    setTimeout(() => {
        // Ocultar spinner y resetear botón
        spinner.addClass('d-none');
        submitText.text('Enviar');
        submitBtn.prop('disabled', false);
        
        // Mostrar modal de confirmación
        $('#confirmationModal').modal('show');
        
        // Resetear formulario y validación
        form[0].reset();
        form.removeClass('was-validated');
        form.find('.is-valid, .is-invalid').removeClass('is-valid is-invalid');
    }, 2000);
});

// Cerrar modal y redirigir si es necesario
$('#confirmationModal').on('hidden.bs.modal', function() {
    // Aquí podrías redirigir o hacer otras acciones después de cerrar el modal
    console.log('Modal cerrado');
});

    // Validación de Bootstrap
    $('form.needs-validation').on('submit', function (e) {
        if (!this.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
            $(this).addClass('was-validated');
        }
    });
});

