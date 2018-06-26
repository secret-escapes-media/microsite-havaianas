// general js for the project that wouldn't be a reuseable component



///////////////////////////////////////
//        Parallax elements
///////////////////////////////////////

function parallax(){
  var plx = '.js-plx';
  var scroll = $(document).scrollTop();
  $(plx).each(function(){
    var distance = $(this).offset().top;
    var offset = distance - scroll;
    var speed = $(this).data('plx');
    $(this).css(
      'top', offset*speed
    );
  });
}
parallax();



///////////////////////////////////////
//        Active section
///////////////////////////////////////

$('.js-section').addClass('is-inactive');
function activeSection(){
  var scrollTop = $(document).scrollTop();
  var section = '.js-section';

  $(section).each(function(){
    var offset = $(this).offset().top;
    if( scrollTop+300 > offset ){
      $(this).removeClass('is-inactive').addClass('is-active');
    }else{
      $(this).addClass('is-inactive').removeClass('is-active');
    }
  });
}



// Run functions on scroll
$(window).scroll(function () {
  parallax();
  activeSection();
});