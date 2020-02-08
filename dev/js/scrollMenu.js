$(window).scroll(function(){
  if ($(window).scrollTop() >= 449) {
      $('.headerContainer__navContainer').addClass('fixed-header');
      $('.visibleLogo').addClass('visible-logo-title');
  }
  else {
      $('.headerContainer__navContainer').removeClass('fixed-header');
      $('.visibleLogo').removeClass('visible-logo-title');
  }
});