const $ = require('jquery');

$(document).ready(function() {
    // Canvas Toggle
    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active')
    });

    // Canvas Untoggle
    $('.nav-link').click(function () {
        $('.row-offcanvas').removeClass('active')
    });
});