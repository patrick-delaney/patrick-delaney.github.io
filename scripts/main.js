

// ----------------------------------------------------------------
// MENU TOGGLE
$(document).ready(function() {

  // ----------------------------------------------------------------

  // todo - can we just have one toggle action that looks for a toggle class?
  $( '.mmm-burger, .work-toggle' ).on( 'click', function(e) {
    $('html').toggleClass('menu-open'); 
    e.preventDefault();
  } );

  // ----------------------------------------------------------------

  // case study open/close toggle
  $('.cs-wrapper').each(function() {
    $(this).addClass('state-closed');
  });

  // ----------------------------------------------------------------

  $( '.cs-header' ).on( 'click', function(e) {
    $(this).closest('.cs-wrapper').toggleClass('state-closed state-open'); 
    e.preventDefault();
  } );


  // ----------------------------------------------------------------
  // Throttle function to limit the rate at which sectionScroll is called
  function throttle(func, delay) {
      let lastCall = 0;
      return function() {
          const now = new Date().getTime();
          if (now - lastCall >= delay) {
              lastCall = now;
              func();
          }
      };
  }

  // ----------------------------------------------------------------
  // GET HEIGHT OF NAV
  function headerHeight() {
    window.headerHeight = $('.section-header').outerHeight();
    // console.log(headerHeight);
  }


  // ----------------------------------------------------------------
  // DETECT IF SECTION FULLY IN VIEW
  $.fn.isInViewport = function() {
    var header = window.headerHeight;
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop() + 65;
    // var viewportBottom = viewportTop + $(window).height();
    return elementTop < viewportTop && elementBottom > viewportTop;
  };

  // ----------------------------------------------------------------
  // IF SECTION IN VIEWPORT, APPLY THEME DATA ATTR TO NAV STYLE
  function sectionScroll() {
    $('section').each(function() {
      var activeData = $(this).data('theme');
      if ($(this).isInViewport()) {
        // $('#fixed-' + activeData).addClass(activeData + '-active');
        console.log(activeData);
        
        $('section.section-header').removeClass('theme-dark theme-light theme-page theme-backing-light').addClass(activeData);
      }
    });
  }

  

  // ----------------------------------------------------------------
  // THROTTLED ON SCROLL
  $(window).on('load resize', throttle(headerHeight, 125));
  $(window).on('scroll resize', throttle(sectionScroll, 125));


});