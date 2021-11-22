$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		center: true,
		items:2,
		loop:true,
		margin:10,
	
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		},
		nav:true,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		autoHeight:false


	});

});