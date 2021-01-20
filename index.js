$(document).ready(function(){
    ///////////////////////////////////////////////////////////////////////////////////////////////
    // scale home image
    ///////////////////////////////////////////////////////////////////////////////////////////////
    $('#Home').css({'height': $(window).height()});
    $(window).on('resize', function() {
         $('#Home').css({'height': $(window).height()});
    });

    ///////////////////////////////////////////////////////////////////////////////////////////////
    // smoothscroll taken directly from W3schools bootstrap 4 tutorial
    ///////////////////////////////////////////////////////////////////////////////////////////////
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: -259});

    // Add smooth scrolling on all links inside the navbar
    $(".navbar a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 400, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });

    ///////////////////////////////////////////////////////////////////////////////////////////////
    // sets scrollyspy positional offset for fixed navbar (edit scroll-position css)
    ///////////////////////////////////////////////////////////////////////////////////////////////
    // navbar does not have a height element BUT we can get a computed height (idk saw it in
    // google chromes inspect and pulled some documentation on getComputedStyle()
    // https://developer.mozilla.org/en-US/docs/Web/CSS/computed_value
    let navElement = document.querySelector('nav')
    navHeight = window.getComputedStyle(navElement)['height']

    // negate the height we found to compensate for navbar
    $(".scroll-position").css('top', '-' + navHeight)
});