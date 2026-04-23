$(document).ready(function() {    
    // On window load, wait 500ms, then show modal only if flag is false
    $(window).on('load', function(){
        var delayMs = 500;

        setTimeout(function(){

            // ✅ ONLY show modal if NOT coming from #contact
            if (window.location.hash !== '#contact') {
                $('#introModal').modal('show');
            }

        }, delayMs);
    });

    var players = [];

    // Find all Vimeo iframes
    $('iframe[src*="vimeo.com"]').each(function () {
      var player = new Vimeo.Player(this);
      players.push(player);

      // When a video starts playing
      player.on('play', function () {
        $.each(players, function (i, otherPlayer) {
          if (otherPlayer !== player) {
            otherPlayer.pause();
          }
        });
      });
    });

    

    
    

    $("#work-btn").click(function(){            
        $('html, body').animate({
                scrollTop: $("#shop").position().top-50
            }, 1000);
    });
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    $('.list-group>a').on('click', function(){
        $('#wrapper').toggleClass('toggled');
        
        $('#hamburger').removeClass('fa-times');
        $('#hamburger').addClass('fa-bars');

    });
    

    $("#hamburger").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        
        $("#hamburger").toggleClass("fa-bars");
        $("#hamburger").toggleClass("fa-times");
        $(".push-wrapper").toggleClass('push');
        
      });
    $("#nav-home").click(function(){            
        $('html, body').animate({
                scrollTop: $("#body").position().top-50
            }, 1000);
            $(".push-wrapper").toggleClass('push');

    });

    $("#nav-contact").click(function(){            
        $('html, body').animate({
                scrollTop: $("#contact").position().top-70
            }, 1000);
    });

    $("#nav-scriptures").click(function(){            
        $('html, body').animate({
                scrollTop: $("#scriptures").position().top-100
            }, 1000);
    });

    $("#nav-books").click(function(){            
        $('html, body').animate({
                scrollTop: $("#books").position().top-100
            }, 1000);
    });

    $("#nav-teachings").click(function(){            
        $('html, body').animate({
                scrollTop: $("#teachings").position().top-100
            }, 1000);
    });

    $("#nav-videos").click(function(){            
        $('html, body').animate({
                scrollTop: $("#videos").position().top-100
            }, 1000);
    });

    $("#top-icon").click(function(){            
        $('html, body').animate({
                scrollTop: $("#body").position().top-0
            }, 1000);
    });
    $("#thumb-1, #thumb-2, #thumb-3, #thumb-4, #thumb-5, #thumb-6").mouseenter(function(){
        $(this).find('.text').animate({top: '+=35%'}, '200');
        $(this).find('button').animate({bottom: '+=25%'}, '200');
      });
    $("#thumb-1, #thumb-2, #thumb-3, #thumb-4, #thumb-5, #thumb-6").mouseleave(function(){
        $(this).find('.text').animate({top: '-=35%'}, '200');
        $(this).find('button').animate({bottom: '-=25%'}, '200');
      });
      $('.modal').on('hide.bs.modal', function() {
        var memory = $(this).html();
        $(this).html(memory);
      });
          // Attach an event listener to all audio elements for the 'play' event
    $('audio').on('play', function() {
        // When an audio element starts playing, iterate through all other audio elements
        $('audio').not(this).each(function() {
            // Pause any other audio elements that are currently playing
            this.pause();
        });
    });


    
})

