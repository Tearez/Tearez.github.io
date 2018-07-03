jQuery(document).ready(function () {
	jQuery('.navbar-default .navbar-nav li a').on('click', function (e) {

			var currentAttrValue = jQuery(this).attr('href');
			// Show/Hide Tabs
			if (currentAttrValue === '#logout') {
				var hrefVal = jQuery('.navbar-default .navbar-nav li #home-b').attr('href');

				$('.navbar-default .navbar-nav li #home-b').parent('li').addClass('active').siblings().removeClass('active');
				$('.navbar-default .navbar-nav li #login-b').parent('li').css('display', 'block');
				$('.navbar-default .navbar-nav li #logout-b').parent('li').css('display', 'none');
				
				jQuery('.tabs ' + hrefVal).siblings().slideUp(500);
				jQuery('.tabs ' + hrefVal).delay(500).slideDown(500);

				$('.navbar-default .navbar-brand span').empty();
				$('.navbar-default .navbar-nav li #tasks').parent('li').css('display', 'none');
				e.preventDefault();
			} else {

			jQuery('.tabs ' + currentAttrValue).siblings().slideUp(500);
			jQuery('.tabs ' + currentAttrValue).delay(500).slideDown(500);

			// Change/remove current tab to active
			$('.navbar-default .navbar-nav li').removeClass('active');
			jQuery(this).parent('li').addClass('active');
			
			e.preventDefault();
		}
	});
});