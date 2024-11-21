$(function(){

	// Off Canvas
	var controller = new slidebars();
	controller.init();

	$(controller.events).on('opened', function(){
		$('[canvas="container"]').addClass('js-close-any-slidebar');
	});
	$(controller.events ).on('closed', function(){
		$('[canvas="container"]').removeClass('js-close-any-slidebar');
		$('.js-left-slidebar').removeClass('open');
	});
	$('body').on('click', '.js-close-any-slidebar', function(event){
		event.stopPropagation();
		controller.close();
	});
	$('.js-left-slidebar').on('click', function(event){
		$(this).addClass('open');
		event.stopPropagation();
		controller.toggle('slidebar-left');
	});
	$('.js-top-slidebar').on('click', function(event){
		event.stopPropagation();
		controller.toggle('slidebar-top');
	});

	// Header Scrolled
	var scrolled = false;
	var topOffset = 155;
	$('#pagewrap').scroll(function(){
		if($(window).width() >= 992){
			if(topOffset < $('#pagewrap').scrollTop() && !scrolled){
				var cloneMenu = $('.header nav.main-navbar').html();
				$('.header-sticky nav.navbar.main-navbar').append(cloneMenu);
				$('.header-sticky').addClass('sticky');
				scrolled = true;
			}
			if(topOffset >= $('#pagewrap').scrollTop() && scrolled){
				$('.header-sticky').removeClass('sticky');
				$('.header-sticky nav.navbar.main-navbar').empty();
				scrolled = false;
			}
		} else {
			$('.header-sticky').removeClass('sticky');
			$('.header-sticky nav.navbar.main-navbar').empty();
			scrolled = false;
		}
	});

	// Home Slider
	if (jQuery().sliderPro) {
		$('#home-slider').sliderPro({
			width: 1140,
			height: 550,
			fade: true,
			arrows: true,
			buttons: false,
			fullScreen: false,
			shuffle: false,
			thumbnailArrows: false,
			thumbnailWidth: 100,
			thumbnailHeight: 67,
			autoplay: true
		});
	}

	// Carousel
	if (jQuery().owlCarousel) {

		var owlCategories = $('#categories-carousel');
		owlCategories.owlCarousel({
			items : 4,
			itemsDesktop : [1199,4],
			itemsDesktopSmall : [980,3],
			itemsTablet: [767,2],
			itemsMobile : [479,1],
			singleItem : false,
			slideSpeed : 400,
			paginationSpeed : 800,
			rewindSpeed : 1000,
			autoPlay : true,
			stopOnHover : true,
			navigation : false,
			navigationText : ["prev","next"],
			rewindNav : true,
			pagination : false,
			paginationNumbers: false,
			responsive: true,
			lazyLoad : true,
			autoHeight : false,
			addClassActive : false
		});

		$('.categories-carousel-nav > .next').click(function(){
			owlCategories.trigger('owl.next');
		});
		$('.categories-carousel-nav > .prev').click(function(){
			owlCategories.trigger('owl.prev');
		});

		var owlBlogfeed = $('#blogfeed-carousel');
		owlBlogfeed.owlCarousel({
			items : 2,
			itemsDesktop : [1199,2],
			itemsDesktopSmall : [990,1],
			itemsTablet: [767,1],
			itemsMobile : [479,1],
			singleItem : false,
			slideSpeed : 400,
			paginationSpeed : 800,
			rewindSpeed : 1000,
			autoPlay : true,
			stopOnHover : true,
			navigation : false,
			navigationText : ["prev","next"],
			rewindNav : true,
			pagination : true,
			paginationNumbers: false,
			responsive: true,
			lazyLoad : true,
			autoHeight : false,
			addClassActive : false
		});

		$('.blogfeed-carousel-nav > .next').click(function(){
			owlBlogfeed.trigger('owl.next');
		});
		$('.blogfeed-carousel-nav > .prev').click(function(){
			owlBlogfeed.trigger('owl.prev');
		});

		var owlProduct = $('#product-carousel');
		owlProduct.owlCarousel({
			items : 4,
			itemsDesktop : [1199,4],
			itemsDesktopSmall : [990,3],
			itemsTablet: [767,3],
			itemsMobile : [479,3],
			singleItem : false,
			slideSpeed : 400,
			paginationSpeed : 800,
			rewindSpeed : 1000,
			autoPlay : true,
			stopOnHover : true,
			navigation : false,
			navigationText : ["prev","next"],
			rewindNav : true,
			pagination : false,
			paginationNumbers: false,
			responsive: true,
			lazyLoad : true,
			autoHeight : false,
			addClassActive : false,
			afterInit: function(){
				owlProduct.trigger('owl.next');
			}
		});

		$('.product-carousel-nav > .next').click(function(){
			owlProduct.trigger('owl.next');
		});
		$('.product-carousel-nav > .prev').click(function(){
			owlProduct.trigger('owl.prev');
		});

	}

	// Image Zoom
	if (jQuery().ImageZoom) {
		$('#thepic').ImageZoom();
		$('.listpic > img').on('click', function(event){
			var srcPic = $(this).data('src');
			var srcPicL = $(this).data('largeimg');
			// Change Image
			var srcObj = $('#thepic').data('imagezoom');
			srcObj.changeImage(srcPic, srcPicL);
			event.preventDefault();
		});
	}

	// ToTop
	$('#pagewrap').scroll(function() {
		var afterScroll = 400;
		var scrollTop = $('#pagewrap').scrollTop();

		if (scrollTop > afterScroll) {
			$('#totop').css({'bottom':'10px','opacity':1});
		} else {
			$('#totop').css({'bottom':'-50px','opacity':0});
		}
	});
	$('#totop').click(function(e) {
		$('#pagewrap').animate({scrollTop: 0}, 500);
		e.preventDefault();
	});

	// Validate
	if (jQuery().validate) {
		$('#contactform').validate({
			submitHandler: function(form) {
				$('#contactform').attr('action', 'http://ssl.co.th/demo/submit-contact.php');
				form.submit();
			},
			errorClass: 'error',
			errorElement: 'small',
			rules: {
				topic: 'required',
				email: {
					required: true,
					email: true
				},
			message: 'required',
			name: 'required'
			},
			messages: {
				topic: 'required',
				email: 'required',
				message: 'required',
				name: 'required'
			}
		});
	}

});