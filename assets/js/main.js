let width = $(window).width();
let height = $(window).height();

$('.navbar .nav-link').click(function () {
  //手機版 nav click 收合
  if($(window).innerWidth() <= 769) {
    $('.navbar-toggler').trigger('click');
  }
});

// header - Smooth scrolling using jQuery easing
$('a.smooth-scroll[href*="#"]:not([href="#"])').click(function () {
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


$(window).scroll(function () {
    //fix show/hide 
    let scroll = $(this).scrollTop();
    let examTop = $('#exam').offset().top;

    if ( scroll > examTop) {
        $('#fix-right').show(500);
    } else {
        $('#fix-right').hide(500);
    }

    //cerebrity show/hide 
    let cerebrity1Top = $('#cerebrity-1').offset().top - (height / 2);
    let cerebrity2Top = $('#cerebrity-2').offset().top - (height / 2);
    let cerebrity3Top = $('#cerebrity-3').offset().top - (height / 2);
    let videoTop = $('#video').offset().top - height - 50;

    if ( width < 768 && scroll > cerebrity1Top && scroll <= videoTop ) {
      $('.side-nav').fadeIn();
      $('.fix-right').addClass('scroll');
    } else if ( width < 768 ) {
      $('.side-nav').fadeOut();
      $('.fix-right').removeClass('scroll');
    }

    if ( scroll > cerebrity1Top && scroll <= cerebrity2Top ) {
      $('.side-nav li').removeClass('active');
      $('.side-nav li').eq(0).addClass('active');
    } else if ( scroll > cerebrity2Top && scroll <= cerebrity3Top ) {
      $('.side-nav li').removeClass('active');
      $('.side-nav li').eq(1).addClass('active');
    } else if ( scroll > cerebrity3Top ) {
      $('.side-nav li').removeClass('active');
      $('.side-nav li').eq(2).addClass('active');
    }
});

//fix click none
$(document).ready(function(){
  $("#hide").click(function(){
    $("#fix-right").remove();
  });
});


//faq
$(".accordion__group .accordion__item__header").on("click", function() {
  $(this).parent().siblings().children(".accordion__item__panel").slideUp();
  $(this).parent().siblings().children(".accordion__item__header").removeClass("active");
  $(this).parent().siblings().children(".accordion__item__header").children(".icon-plus").addClass("active");
  $(this).parent().siblings().children(".accordion__item__header").children(".icon-minus").removeClass("active");
  $(this).toggleClass("active");
  $(this).children(".icon-plus").toggleClass("active");
  $(this).children(".icon-minus").toggleClass("active");
  $(this).siblings(".accordion__item__panel").slideToggle();
});
