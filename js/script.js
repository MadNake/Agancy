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


// $(function() {
// 	$('.faq__item').click(function(){
// 		 $(this).toggleClass('faq__item_show');
// 	});
// });


let accItem = document.querySelectorAll(".faq__item");
let accQuestion = document.querySelectorAll(".faq__question");
let accAnswer = document.querySelectorAll(".faq__answer");

for (let i = 0; i < accItem.length; i++) {
		accItem[i].addEventListener("click", function(evt) {
		evt.preventDefault();
		accItem[i].classList.toggle("faq__item_show");
		accQuestion[i].classList.toggle("faq__question_show");
		accAnswer[i].classList.toggle("faq__answer_show");
		if (accAnswer[i].style.maxHeight) {
			accAnswer[i].style.maxHeight = null;
		 } else {
			accAnswer[i].style.maxHeight = accAnswer[i].scrollHeight + "px";
		 } 
	})
	
}

