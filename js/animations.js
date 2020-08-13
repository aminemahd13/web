$(document).ready(function(){

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		 if ($(this).scrollTop() > 80) {
			  $('.navigation-bar').addClass('scrolled');
			  $('nav').addClass('scrolled');

		 } else {
			  $('.navigation-bar').removeClass('scrolled');
			  $('nav').removeClass('scrolled');
		 }
	});
 
 });	


// Select pro package by clicking radio button
$(document).ready(function(){
	$(".Pro-package").each(function(i) {
		this.checked = true;
		$('#ActiveRadio').removeClass('Regular');
		$("#ActiveRadio").addClass('Pro');
	});  
	$('input:radio').click(function () {
		 var others = $("[name='" + this.name + "']").map(function () {
			  return this.value
		 }).get().join(" ")
		 console.log(others)
		 $('#ActiveRadio').removeClass(others).addClass(this.value)
	});
});	


// Remove input by clicking radio button
$(document).ready(function() { 
	$('.radio-p').on('click', function(e) { 
		 var $el = $('#infileid'); 
		 $el.wrap('<form>').closest( 
			'form').get(0).reset(); 
		 $el.unwrap(); 
	}); 
	$('.radio-p').on('click', function(e) { 
		$('#output').attr('src', '');
	}); 
}); 


// Open FAQ
$(document).ready(function(){
	$( ".faq-block-click" ).click(function() {
		$('.faq-block').removeClass( "active" );
		$( this ).parent().toggleClass( "active" );
	});
	$( ".faq-block-close" ).click(function() {
		$('.faq-block').removeClass( "active" );
	});
});	

$(document).ready(function(){
	window.onload = function() {
		$('body').addClass('loaded');
	 };
});

 // Open/close popup
 $(document).ready(function(){
	$('.btn-popup').click(function(){
		$('.how-blackover').addClass('active');
		$('.how-popup').addClass('active');
	});
	$('.how-blackover').click(function(){
		$('.how-blackover').removeClass('active');
		$('.how-popup').removeClass('active');
	});
	
});
