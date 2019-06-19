/* Scroll down */
$(function() {
    $('#arrowDown').click (function() {
        $('html, body').animate({scrollTop: $('#secondSection').offset().top }, 'slow');
        return false;
    });
});