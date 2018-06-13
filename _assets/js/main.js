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
      'margin-top', offset*speed
    );
  });
}


parallax();
$(window).scroll(function () {
  parallax();
});




///////////////////////////////////////
//        Active section
///////////////////////////////////////



function activeSection(){
  var scrollTop = $(document).scrollTop();
  var section = '.js-section';

  $(section).each(function(){
    var offset = $(this).offset().top;
    if( scrollTop+300 > offset ){
      $(this).addClass('is-active');
    }else{
      $(this).removeClass('is-active');
    }
  });
}

$(window).scroll(function () {
  activeSection();
});