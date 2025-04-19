$(document).ready(function () {
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
        
        if (!form[0].checkValidity()) {
            form.addClass('was-validated');
            return;
        }
        
        submitBtn.prop('disabled', true);
        submitText.text('Enviando...');
        spinner.removeClass('d-none');
        
        setTimeout(() => {
            spinner.addClass('d-none');
            submitText.text('Enviar');
            submitBtn.prop('disabled', false);
            
            $('#confirmationModal').modal('show');
            
            form[0].reset();
            form.removeClass('was-validated');
            form.find('.is-valid, .is-invalid').removeClass('is-valid is-invalid');
        }, 2000);
    });

    // Cerrar modal
    $('#confirmationModal').on('hidden.bs.modal', function() {
        console.log('Modal cerrado');
    });

    // Validación de Bootstrap para formularios
    $('form.needs-validation').on('submit', function (e) {
        if (!this.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
            $(this).addClass('was-validated');
        }
    });
});