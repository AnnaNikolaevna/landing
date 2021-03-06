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
/*= меняем дефолтные значения, указанные в документации скрипта карусели на свои значения =*/
function carousel_init() {
	$(".owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		loop: true
	});
}

function to_top(){
	var btn = $('.totop-button');
	$(window).scroll(function(){
		if ($(window).scrollTop() > 300){
			btn.addClass('show');
		}
		else{
			btn.removeClass('show');
		}
	});
	
	btn.on('click', function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '300');
	});
}

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 40.4106, lng: -73.5631};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {
				zoom: 12, 
				center: uluru,});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

 $(document).ready(function(){
		isotope_init();
		carousel_init();
	 	to_top();
 });