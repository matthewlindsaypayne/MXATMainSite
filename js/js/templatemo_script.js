var top_menu_height = 0;
jQuery(function($) {
		$(window).load( function() {
			$('.external-link').unbind('click');	
		});
		
        $(document).ready( function() {

            // load google map
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
            'callback=initialize';
        document.body.appendChild(script);

        top_menu_height = $('.mxatsss-top-menu').height();
        // scroll spy to auto active the nav item
        $('body').scrollspy({ target: '#mxatsss-nav-bar', offset: top_menu_height + 10 });
		$('.external-link').unbind('click');

        // scroll to top
        $('#btn-back-to-top').click(function(e){
            e.preventDefault();
            scrollTo('#mxatsss-top');
        });
            
        // scroll to faculty
        $('#btn-to-faculty').click(function(e){
            e.preventDefault();
            scrollTo('#mxatsss-faculty');
        });
            
        // scroll to history
        $('#btn-to-history').click(function(e){
            e.preventDefault();
            scrollTo('#mxatsss-history');
        });
            
        // scroll to contact
        $('#btn-to-contact').click(function(e){
            e.preventDefault();
            scrollTo('#mxatsss-contact');
        });

        // scroll to specific id when click on menu
        $('.mxatsss-top-menu .navbar-nav a').click(function(e){
            e.preventDefault(); 
            var linkId = $(this).attr('href');
            scrollTo(linkId);
            if($('.navbar-toggle').is(":visible") == true){
                $('.navbar-collapse').collapse('toggle');
            }
            $(this).blur();
            return false;
        });
		
		var dt = window.atob('IHwgRGVzaWduOiA8YSByZWw9Im5vZm9sbG93IiBocmVmPSJodHRwOi8vd3d3LnRlbXBsYXRlbW8uY29tL3RtLTM5NS11cmJhbmljIiB0YXJnZXQ9Il9wYXJlbnQiPlVyYmFuaWM8L2E+'); // decode the string
		var div = document.getElementById('footer-line');

		div.innerHTML = div.innerHTML + dt;

        // to stick navbar on top
        $('.mxatsss-top-menu ').stickUp();

        // gallery category
        $('.mxatsss-gallery-category a').click(function(e){
            e.preventDefault(); 
            $(this).parent().children('a').removeClass('active');
            $(this).addClass('active');
            var linkClass = $(this).attr('href');
            $('.gallery').each(function(){
                if($(this).is(":visible") == true){
                   $(this).hide();
                };
            });
            $(linkClass).fadeIn();  
        });

        //gallery light box setup
        $('a.colorbox').colorbox({
                                    rel: function(){
                                        return $(this).data('group');

                                    }
        });
    });
});

function initialize() {
    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(42.381088,-71.118570)
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);
}

// scroll animation 
function scrollTo(selectors)
{

    if(!$(selectors).size()) return;
    var selector_top = $(selectors).offset().top - top_menu_height;
    $('html,body').animate({ scrollTop: selector_top }, 'slow');

}