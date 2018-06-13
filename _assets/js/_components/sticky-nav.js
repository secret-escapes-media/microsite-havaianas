////////////////////////////////////////////////////////////////////////////////
//      Sticky microsite nav
////////////////////////////////////////////////////////////////////////////////

// elements and classes
var stickyNavContainer     = '.js-sticky-nav';
var stickyNavClass          = '.site-nav';
var stickyNavModifier  = 'is-stuck';

function stickyNav(){

  var scrollTop = $(document).scrollTop();
  var offset    = $(stickyNavContainer).offset().top;

  if( scrollTop > offset ){
    $(stickyNavClass).addClass(stickyNavModifier);
  }else{
    $(stickyNavClass).removeClass(stickyNavModifier);
  }
}

// runs on page load and scroll
stickyNav();
$(document).scroll(function(){ stickyNav(); });


