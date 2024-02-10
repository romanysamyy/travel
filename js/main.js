new WOW().init();
   



$(document).ready(function() {
    $('.navbar').hide().fadeIn(1500);  
    $('.section').hide().fadeIn(1500);  
  });


    // Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 300) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
  });
  $('.back-to-top').click(function() {
      $('html, body').animate({
          scrollTop: 0
      }, 1500, 'easeInOutExpo');
      return false;
  });
 window.scroll( function(){
    if(this.scrollTop > 300){
        style
    }
 })