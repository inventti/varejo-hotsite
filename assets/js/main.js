$(document).ready(function(){
    toastr.options = { "positionClass": "toast-bottom-right" };

    // âncoragem
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    // Cadastrando o contato
    $(".form-inline").submit(function (e) {
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: "para qual url?",
            data: {
                nome: $('#inputNome').val(),
                email: $('#inputEmail').val(),
                telefone: $('#inputTelefone').val()
            },
            success: function () {
                toastr.success('Obrigado, recebemos seus dados.');
            }
        });
    });
});