/*-----------------------------------------------------------------------------------*/
/*  MAIN
/*-----------------------------------------------------------------------------------*/
function initTemplateJS() {

(function () {
   'use strict';

    /* VIDEO BACKGROUNDS */
    jQuery('.video-bg').each(function() {
      var videoID = jQuery(this).data('youtube-video-id');
      jQuery(this).YTPlayer({
          fitToBackground: true,
          videoId: videoID 
      });
    });

    /* LIGHTBOX */
    jQuery('.image-gallery').magnificPopup({
      delegate: '.item a',
      type: 'image'
    });

    jQuery('.gallery').magnificPopup({
      delegate: 'figure a',
      type: 'image'
    });

    jQuery('[data-lighbox-link="true"]').magnificPopup({
      type: 'image'
    });

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

  	jQuery('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = jQuery(this.hash);
          target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            jQuery('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    jQuery(window).bind('scroll', function() {
        var navHeight = jQuery(window).height() - 100;
        if (jQuery(window).scrollTop() > navHeight) {
            jQuery('.navbar-default').addClass('on');
        } else {
            jQuery('.navbar-default').removeClass('on');
        }
    });

    if (typeof scrollspy !== 'undefined' && jQuery.isFunction(scrollspy)) {
      jQuery('body').scrollspy({ 
          target: '.navbar-default',
          offset: 80
      })
    }

    if (typeof carousel !== 'undefined' && jQuery.isFunction(carousel)) {
      jQuery('.carousel').carousel({
          interval: 5000
      }).on('slide.bs.carousel', function (e)   {
          var nextH = jQuery(e.relatedTarget).height();
          jQuery(this).find('.active.item').parent().animate({ height: nextH }, 500);
      });
    }

    jQuery(document).ready(function(){

        jQuery('body').on('click', ".filter-button", function() {
            var value = jQuery(this).attr('data-filter');        
            if(value == "all")    {
              jQuery(".filter").not('.'+value).fadeOut('200');
              setTimeout(function() {
                 jQuery('.filter').fadeIn('200');
              }, 400);
            } else {
              jQuery(".filter").not('.'+value).fadeOut('200');
              jQuery('.filter').filter('.'+value).fadeOut('200');
              setTimeout(function() {
                jQuery('.filter').filter('.'+value).fadeIn('200');    
              }, 400);        
            }
        });

        /* EQUAL HEIGHT DIVS */
        setTimeout(function() {
         jQuery('.match-height').matchHeight();
        }, 100);
        
        jQuery('.owl-carousel').each( function( index, el ) {
          var items = jQuery(el).attr('data-owl-items');
          jQuery(el).owlCarousel({
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            items: items
          });
        });
        
        $('#contactform').submit(function(){
          var action = $(this).attr('action');
          $("#message").slideUp(750,function() {
          $('#message').hide();
          $('#submit').attr('disabled','disabled');
          $.post(action, {
            name: $('#name').val(),
            email: $('#email').val(),
            comments: $('#comments').val()
          },
            function(data){
              document.getElementById('message').innerHTML = data;
              $('#message').slideDown('slow');
              $('#submit').removeAttr('disabled');
              if(data.match('success') != null) $('#contactform').slideUp('slow');
              $(window).trigger('resize');
            }
          );
          });
          return false;
        });


    });


}());


}

initTemplateJS();