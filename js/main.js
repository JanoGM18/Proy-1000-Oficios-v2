$(function () {
    var $content = $('#iframe');
    $('#menu a')
        .click(function () {
        $content.attr('src', $(this).attr('href'));

         $('#menu a.Onselect').removeClass('Onselect').addClass('Offselect');
         $(this).addClass('Onselect').removeClass('Offselect');

        return false;
    });
});