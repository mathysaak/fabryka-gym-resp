$(document).ready(function () {
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

    // Activar contador si ya está visible al cargar
    if ($('.counter-section').length && $(window).scrollTop() + $(window).height() > $('.counter-section').offset().top) {
        startCounter();
        counterStarted = true;
    }
});