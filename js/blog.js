// Blog Fitness - Funcionalidades
$(document).ready(function() {
    // Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Filtros por tags
    $('.tag-filter button').on('click', function() {
        const tag = $(this).data('tag');
        
        // Actualizar botones activos
        $('.tag-filter button').removeClass('active');
        $(this).addClass('active');
        
        // Filtrar artículos
        if (tag === 'todos') {
            $('.blog-card').show();
        } else {
            $('.blog-card').hide();
            $(`.blog-card[data-tag="${tag}"]`).show();
        }
    });

    // Sistema de comentarios
    $('.reply-btn').on('click', function() {
        const commentContainer = $(this).closest('.comment-body');
        let replyForm = commentContainer.next('.reply-form');
        
        if (replyForm.length === 0) {
            replyForm = $(`
                <div class="reply-form mt-3">
                    <textarea class="form-control mb-2" placeholder="Escribe tu respuesta..." rows="2"></textarea>
                    <button class="btn btn-sm btn-primary submit-reply">Enviar</button>
                    <button class="btn btn-sm btn-outline-secondary cancel-reply ms-2">Cancelar</button>
                </div>
            `);
            
            commentContainer.after(replyForm);
            
            // Manejar cancelación
            replyForm.find('.cancel-reply').on('click', function() {
                replyForm.remove();
            });
            
            // Manejar envío
            replyForm.find('.submit-reply').on('click', function() {
                const replyText = replyForm.find('textarea').val();
                if (replyText.trim() !== '') {
                    const randomInitials = getRandomInitials();
                    const randomColor = getRandomColor();
                    
                    const newReply = $(`
                        <div class="comment-reply mt-3 ms-5">
                            <div class="comment">
                                <div class="comment-header d-flex align-items-center">
                                    <div class="comment-avatar" style="background-color: ${randomColor};">${randomInitials}</div>
                                    <div class="comment-author ms-3">
                                        <strong>Tú</strong>
                                        <small class="text-muted">Ahora</small>
                                    </div>
                                </div>
                                <div class="comment-body mt-2">
                                    <p>${replyText}</p>
                                    <button class="btn btn-sm btn-outline-primary reply-btn">Responder</button>
                                </div>
                            </div>
                        </div>
                    `);
                    
                    replyForm.before(newReply);
                    replyForm.remove();
                    
                    // Asignar evento al nuevo botón de responder
                    newReply.find('.reply-btn').on('click', function() {
                        $(this).trigger('click');
                    });
                }
            });
        }
    });

    // Funciones auxiliares para comentarios
    function getRandomInitials() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return letters.charAt(Math.floor(Math.random() * letters.length)) + 
               letters.charAt(Math.floor(Math.random() * letters.length));
    }

    function getRandomColor() {
        const colors = ['#0d6efd', '#198754', '#6c757d', '#dc3545', '#fd7e14', '#6f42c1'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Manejar envío de comentario principal
    $('.comment-form').on('submit', function(e) {
        e.preventDefault();
        const commentText = $(this).find('textarea').val();
        
        if (commentText.trim() !== '') {
            const randomInitials = getRandomInitials();
            const randomColor = getRandomColor();
            
            const newComment = $(`
                <div class="comment mb-4">
                    <div class="comment-header d-flex align-items-center">
                        <div class="comment-avatar" style="background-color: ${randomColor};">${randomInitials}</div>
                        <div class="comment-author ms-3">
                            <strong>Tú</strong>
                            <small class="text-muted">Ahora</small>
                        </div>
                    </div>
                    <div class="comment-body mt-2">
                        <p>${commentText}</p>
                        <button class="btn btn-sm btn-outline-primary reply-btn">Responder</button>
                    </div>
                </div>
            `);
            
            $('.comment-list').append(newComment);
            $(this).find('textarea').val('');
            
            // Asignar evento al nuevo botón de responder
            newComment.find('.reply-btn').on('click', function() {
                $(this).trigger('click');
            });
        }
    });
});