$(window).scroll(function(){
  if ($(window).scrollTop() >= 449) {
      $('.headerContainer__navContainer').addClass('fixed-header');
      // esta clase es para el tamaño del logo title en modo responsive
      $('.headerContainer__navContainer').addClass('fixed-header-1024');
      // esta es para posicionar la tabla de busqueda 
      $('.content-search').addClass('position-search-table');
      // para ver el logo visible al momento de hacer scroll
      $('.visibleLogo').addClass('visible-logo-title');
  }
  else {
      $('.headerContainer__navContainer').removeClass('fixed-header');
      $('.headerContainer__navContainer').removeClass('fixed-header-1024');
      $('.content-search').removeClass('position-search-table');
      $('.visibleLogo').removeClass('visible-logo-title');
  }
});