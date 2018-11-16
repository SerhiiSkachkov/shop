$(document).ready(function(){

	$(window).on('load', function () {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
			$('body').addClass('ios');
		} else{
			$('body').addClass('web');
		};
		$('body').removeClass('loaded'); 
	});

	// slick slider init 
	$('.product-slide').slick({

		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		arrows: true,
		appendArrows: ".slick-controls",
		appendDots: ".slick-controls",
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	// toggle elements in filter
	$('.js-filter-trigger').click(function(e) {
			e.preventDefault();
		
		$(this).toggleClass('filter-arrow--up');
		$(this).next().slideToggle();

		if($(this).children('filter-material-box')) {
			$('.js-filter-select--meterial').jScrollPane();
		};
	});

	// take information about categories
	$('.js-filter-categories li').click(function() {

		var inp_cetegories = $('#filter-categories'),
				cetegories_val = $(this).attr('val');

		$(this).addClass('filter-active');
		$(this).siblings().removeClass('filter-active');

		inp_cetegories.val(cetegories_val);
	});
	
	// take information about the material
	$('.js-filter-select--meterial li').click(function() {

			var inp_material = $('#filter-material'),
				material_val = $(this).attr('val');

			$(this).addClass('filter-active');
			$(this).siblings().removeClass('filter-active');

			inp_material.val(material_val);
	});
			
	// inint plugin cusel for select styling
	$(function(){

		var params = {
			changedEl: "select",
			visRows: 5,
			scrollArrows: true
		}
		cuSel(params);
	});
});
