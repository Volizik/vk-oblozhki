import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();

	$(document).on('click', '.settings__title', function () {
		$(this).siblings('.settings__col2-body').slideToggle('fast');
		$(this).toggleClass('settings__title--active');
	});

});
