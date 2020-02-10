$(window).scroll(function(){
  if ($(window).scrollTop() >= 449) {
      $('.headerContainer__navContainer').addClass('fixed-header');
      $('.headerContainer__navContainer').addClass('fixed-header-1024');
      $('.visibleLogo').addClass('visible-logo-title');
  }
  else {
      $('.headerContainer__navContainer').removeClass('fixed-header');
      $('.headerContainer__navContainer').removeClass('fixed-header-1024');
      $('.visibleLogo').removeClass('visible-logo-title');
  }
});