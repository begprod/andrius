var Popup = (function() {
	var btnTrigger = $('.js-menu-trigger');

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
			btnTrigger.click(function() {
				if ($(this).hasClass('popup-on')) {
					$.magnificPopup.close();
				} else {
					$.magnificPopup.open({
						items: {
							src: $('#popup-content').html(),
							type: 'inline'
						},
						enableEscapeKey: false,
						closeOnBgClick: false,
						closeBtnInside: false,
						showCloseBtn: false,
						alignTop: true,
						mainClass: 'mfp-open-anim'
					});
				}

				$(this).toggleClass('popup-on');
			});
		}
	}
})();