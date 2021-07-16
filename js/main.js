//owl carousel
$(document).ready(function(){
    $(".slider1").owlCarousel({
        loop: true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
  });
  //owl carousel 2
  $(document).ready(function(){
    $(".slider2").owlCarousel({
        items:1,
        loop: true
    });
  });
   //owl carousel 3
   $(document).ready(function(){
    $(".product-main-slider").owlCarousel({
        items:1,
        loop: true,
        dots:false
    });
  }); 
  //owl carousel 4
  $(document).ready(function(){
    $(".product-sub-slider").owlCarousel({
        items:4,
        loop: true,
        margin:10,
        nav:true,
        dots:false
        
    });
  });
  $("#back-to-top").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
  });