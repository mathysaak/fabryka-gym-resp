$(document).ready(function () {
    // Resaltar fila/columna en la tabla de precios
    $('.table-hover td, .table-hover th').hover(
        function() {
            const colIndex = $(this).index() + 1;
            $(this).closest('table').find(`tr td:nth-child(${colIndex}), tr th:nth-child(${colIndex})`).addClass('bg-light');
            $(this).parent().addClass('table-active');
        },
        function() {
            $(this).closest('table').find('td, th').removeClass('bg-light table-active');
        }
    );

    // Toggle entre precios mensuales/anuales
    $('input[name="priceToggle"]').on('change', function() {
        if ($('#annual').is(':checked')) {
            $('.monthly-price').addClass('text-muted');
            $('.annual-price').removeClass('text-muted').addClass('fw-bold');
        } else {
            $('.annual-price').addClass('text-muted');
            $('.monthly-price').removeClass('text-muted').addClass('fw-bold');
        }
    });

    // Inicializar tooltips en la sección de precios
    $('[data-bs-toggle="tooltip"]').tooltip({
        trigger: 'hover',
        placement: 'top'
    });
});