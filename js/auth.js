$(document).ready(function() {
    $('#login, #password').on('input', function() {
        if ($('#login').val() !== '' && $('#password').val() !== '') {
            $('#enter')
                .removeAttr('disabled')
                .removeClass('hover')
                .removeClass('active');
        } else {
            $('#enter')
                .attr('disabled', 'disabled')
                .addClass('hover')
                .addClass('active');
        }
    });
});