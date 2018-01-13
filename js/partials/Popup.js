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
						focus: '#y_name',
						items: {
							src: $('#popup-content').html(),
							type: 'inline'
						},
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