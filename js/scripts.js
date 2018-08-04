function isotope_init() {
	var $grid = $('.grid').isotope({
	//	options
	itemSelector: '.grid-item',
	layoutMode: 'fitRows'
});

$('.filter-button-group').on('click', 'button', function(){
	$('.is-checked')[0].classList.remove('.is-checked');
	$(this)[0].classList.add('.is-checked');
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({filter: filterValue});
	})
}
function carousel_init() {
	$(".owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		loop: true
	});
}

 $(document).ready(function(){
		isotope_init();
		carousel_init();
 });