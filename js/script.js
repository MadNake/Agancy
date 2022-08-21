"use strict";

$(function() {
	$('.main-header__nav-menu').click(function(){
		 $(this).toggleClass('open');
		 $(".nav-list-wrapper").toggleClass("hidden")
	});
});