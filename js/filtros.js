$(document).ready(function () {
    // Filtros para galería o elementos
    $('.filter-checkbox').on('change', function() {
        const filter = $(this).data('filter');
        
        $('.filters label').removeClass('active');
        $(this).next('label').addClass('active');
        
        if (filter === 'all') {
            $('.masonry-item').show().css('opacity', 0).animate({opacity: 1}, 300);
        } else {
            $('.masonry-item').hide();
            $(`.masonry-item[data-category="${filter}"]`).show().css('opacity', 0).animate({opacity: 1}, 300);
        }
    });

    // Activar filtro "Todas" por defecto
    $('label[for="filter-all"]').addClass('active');
});