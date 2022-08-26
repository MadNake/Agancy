"use strict";

$(function() {
	$('.main-header__nav-menu').click(function(){
		 $(this).toggleClass('open');
		 $(".nav-list-wrapper").toggleClass("hidden")
	});
});

var el = $(".bar");

$(window).scroll(function(){
	if ( $(this).scrollTop() > el.offset().top - window.screen.height ) {
		 el.addClass('bar-animation');
	}
});