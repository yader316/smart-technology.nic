$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.allCam .category_item[typeProduct="camara90"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function(){
		var catTypeProduct= $(this).attr('typeProduct')
    console.log(catTypeProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.products-container').css('transform', 'scale(0)');
		function hideProduct(){
			$('.products-container').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.products-container[typeProduct="'+catTypeProduct+'"]').show();
			$('.products-container[typeProduct="'+catTypeProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[typeProduct="camara90"]').click(function(){
		function showAll(){
			$('.products-container').show();
			$('.products-container').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});