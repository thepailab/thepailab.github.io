$(document).ready(function(){
	

	/*  Foundation Init    */
	$(document).foundation();



	/*  carousel Init    */
	$('#carousel').carouFredSel({
	 	width : '670',
	 	pagination  : ".pagination",
	 	responsive : true,
	 	scroll :{
	 		fx : 'fade'
	 	},
	 	items :{
	 		visible : 1,
	 		width : '670'
	 	},
		swipe: {
			onMouse: true,
			onTouch: true
		}
    });


	/*    activate hamburger    */
	var $hamburger = $(".hamburger");
	var $sidenav = $("#sidenav");
	var $main = $("#main");
	$hamburger.on("click", function(e) {
	  $hamburger.toggleClass("is-active");
	  $sidenav.toggleClass("is-active");
	  $main.toggleClass("is-hidden");
	});

	/*    side nav    */

	/*    navigation menu scroll to    */
    $('#main-nav ul li a').click(function(e){
    	e.preventDefault();
    	scrollTo($(this).attr('href'), 900, 'easeInOutCubic');
    });


	/*    citation navigation menu scroll to    */
    $('.citation').click(function(e){
    	e.preventDefault();
    	scrollTo($(this).attr('href'), 900, 'easeInOutCubic');
    });




    /*    Back to top button    */
    var back_top = $('#back_top');

    back_top.click(function(e){
    	e.preventDefault();
    	scrollTo(0, 900, 'easeInOutCubic');
    	
    });

    function scrollTo(target, speed, ease){
    	$(window).scrollTo(target, speed, {easing:ease});
    }

    $(window).on('scroll', function(){    
	    if($(this).scrollTop()>749)
	    {
	    	back_top.stop().animate({opacity : 1}, 250);
	    }else
	    {
	    	back_top.stop().animate({opacity : 0}, 250);	    
	    }   
    });

});