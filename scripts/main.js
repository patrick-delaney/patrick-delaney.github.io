// MENU TOGGLE
$(document).ready(function() {
  // todo - can we just have one toggle action that looks for a toggle class?
  $( '.mmm-burger, .work-toggle' ).on( 'click', function(e) {
    $('html').toggleClass('menu-open'); 
    e.preventDefault();
  } );


  // case study open/close toggle
  $('.case-study').each(function() {
    $(this).addClass('state-closed');
  });

  $( '.cs-header' ).on( 'click', function(e) {
    $(this).closest('.case-study').toggleClass('state-closed state-open'); 
    e.preventDefault();
  } );







  // var scrollTimeout;
  // var throttle = 250;

  // function isScrolledIntoView(elem) {
  //   var docViewTop = $(window).scrollTop();
  //   var docViewBottom = docViewTop + $(window).height();

  //   var elemTop = $(elem).offset().top;
  //   var elemBottom = elemTop + $(elem).height();

  //   // return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  //   return ((elemTop <= docViewBottom));
  // }

  // $(window).scroll(function () {
  //   if (!scrollTimeout) {
  //     scrollTimeout = setTimeout(function () {
  //       $('.cell').each(function () {
  //         if (isScrolledIntoView(this) === true) {
  //           $(this).addClass('burger');
  //           console.log('burger');
  //         }
  //       });
        
  //       scrollTimeout = null;
  //     }, throttle);
  //   }    
  // });




});