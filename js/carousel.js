// JavaScript Document
// Written by Chris Converse for lynda.com

var startingItem = 3;

$(document).ready(function() {
	$('.carousel_data .carousel_item').each(function(){	
		$('#carousel').append( $(this).find('.image').html() );
	});
	createCarousel();
	showCaption();
});

function createCarousel(){
	$('div#carousel').roundabout({
		startingChild: window.startingItem,
		childSelector: 'img',
		tilt: -8.0,
		minOpacity:1,
		minScale: .35,
		duration: 1200,
		clickToFocus: true,
		clickToFocusCallback: showCaption
	});
	createCustomButtons();
}

function createCustomButtons(){
	
	$('.nextItem').click(function(){
		hideCaption();
		$('div#carousel').roundabout('animateToNextChild', showCaption);
	});
	
	$('.prevItem').click(function(){
		hideCaption();
		$('div#carousel').roundabout('animateToPreviousChild', showCaption);
	});
	
	$('div#carousel img').click(function(){
		hideCaption();
	});
}

function hideCaption(){
	$('#captions').animate({'opacity':0}, 250);
}

function showCaption(){
	var childInFocus = $('div#carousel').data('roundabout').childInFocus
	var setCaption = $('.carousel_data .carousel_item .caption:eq('+childInFocus+')').html();
	$('#captions').html(setCaption);
	var newHeight = $('#captions').height()+'px';
	$('.caption_container').animate({'height':newHeight}, 500, function(){
		$('#captions').animate({'opacity':1}, 250);	
	});
	
}

