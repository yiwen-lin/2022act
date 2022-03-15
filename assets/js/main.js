 // solar card - Click to show
//  function myFunction(season, elm) {
//     elm.style.display = "none";
//     document.getElementById("others-"+season).style.display = "block";
//   }


  // header - Smooth scrolling using jQuery easing
  $('a.smooth-scroll[href*="#"]:not([href="#"])').click(function () {
    //手機版 nav click 收合
    if($(window).innerWidth() <= 769) {
      $('.navbar-toggler').trigger('click');
      }
      
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000);
        // return false;
      }
    }
  });

//click none
  $(document).ready(function(){
    $("#hide").click(function(){
      $(".fix-right").hide();
    });
  });



  $(function(){
    var elem= document.getElementById("exam");
    $("#fix-right").css("display","block");
  })

  