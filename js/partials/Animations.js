var Animation = (function() {
	var borderedEl = $('.js-anim-border');
	var logoEl = $('.js-anim-logo');
	var borderedElActiveClass = 'l-main__content--is-active';
	var logoElActiveClass = 'b-logo--is-active';

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
				borderedEl.addClass(borderedElActiveClass);
				logoEl.addClass(logoElActiveClass);
			});
		}
	}
})();