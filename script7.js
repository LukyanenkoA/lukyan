"use strict"
$(document).ready(function () {

	$(".slider").slick({	
		dots: true,
		infinite: true,
		
		speed: 200,
		
		arrows: true,
		
		slidesToShow: 4,
		
		slidesToScroll: 4,
		
		responsive: [
			{
				
			    breakpoint: 768,
			
			    settings: {
				
		            slidesToShow: 2,
				    
			    arrows: true,
			
                            slidesToScroll: 2,
					
                            infinite: true,
					
                            dots: true
				
                         }
			
                    }

                 ]
	
	});

});
 
