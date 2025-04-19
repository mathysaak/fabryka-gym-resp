$(document).ready(function () {
    // Sistema de rating con estrellas
    $('.star-rating input').on('change', function() {
        const value = $(this).val();
        $(this).closest('.star-rating').find('.rating-value').text(value);
    });

    $('.star-rating label').on('mouseenter', function() {
        const ratingGroup = $(this).closest('.star-rating');
        const stars = ratingGroup.find('label');
        const currentStar = $(this);
        
        stars.css('color', '#ddd');
        currentStar.css('color', '#ffc107');
        currentStar.prevAll('label').css('color', '#ffc107');
    }).on('mouseleave', function() {
        const ratingGroup = $(this).closest('.star-rating');
        const stars = ratingGroup.find('label');
        const checkedInput = ratingGroup.find('input:checked');
        
        if (checkedInput.length) {
            stars.css('color', '#ddd');
            checkedInput.next('label').css('color', '#ffc107');
            checkedInput.nextAll('label').css('color', '#ffc107');
        } else {
            stars.css('color', '#ddd');
        }
    });
});