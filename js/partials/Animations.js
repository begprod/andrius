var Animation = (function() {
	var borderedEl = $('.js-anim-border');
	var logoEl = $('.js-anim-logo');
	var menuTrigger = $('.js-menu-trigger')
	var borderedPageReadyClass = 'l-main__content--is-ready';
	var logoPageReadyClass = 'b-logo--is-ready';
	var menuActiveClass = 'b-menu-trigger--is-active';
	var menuPageReadyClass = 'b-menu-trigger--is-ready';
	var windowWidth = $(window).width();
	var animTime;

	return {
		init: function() {
			this.getData();
		},
		getData: function() {
			this.render();
		},
		render: function() {
			this.event();
		},
		event: function() {
			$(document).ready(function() {
				borderedEl.addClass(borderedPageReadyClass);
				logoEl.addClass(logoPageReadyClass);

				windowWidth > 600 ? (animTime = 4500) : (animTime = 2500)
				setTimeout(function() {
					menuTrigger.addClass(menuPageReadyClass);
				}, animTime);
			});

			menuTrigger.click(function() {
				$(this).toggleClass(menuActiveClass);
			});
		}
	}
})();