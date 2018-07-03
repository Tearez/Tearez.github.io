jQuery(document).ready(function () {
    var $username = $('#username');
    jQuery('.tabs #login #submit').on('click', function () {
        var hrefVal = jQuery('.navbar-default .navbar-nav li #home-b').attr('href');
        $('.navbar-default .navbar-nav li #home-b').parent('li').addClass('active').siblings().removeClass('active');
        $('.navbar-default .navbar-nav li #login-b').parent('li').css('display', 'none');
        jQuery('.tabs ' + hrefVal).siblings().slideUp(500);
        jQuery('.tabs ' + hrefVal).delay(500).slideDown(500);
        $('.navbar-default .navbar-nav li #logout-b').parent('li').css('display', 'block');
        $('.navbar-default .navbar-nav li #tasks').parent('li').css('display', 'block');
        $('.navbar-default .navbar-brand span').append('    Hello, ' + $username.val());
    });
});