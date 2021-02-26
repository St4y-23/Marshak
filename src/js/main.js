$(window).on('load', function () {
	// $('.darkBox').delay(100).fadeToggle(100);
	$('.intro__title').addClass('active');

	// Intro
	var tl0 = gsap.timeline({ defaults: { duration: 1 } });
	tl0.from(".intro__subtitle", { delay: 3, x: '-5%', opacity: 0 })
	tl0.from(".intro__btn-box", { x: '-5%', opacity: 0 }, "-=.7")
	tl0.from(".intro__arrow", { y: '-50%', opacity: 0 }, "-=.7")
	tl0.from("#fp-nav li", { stagger: 0.1, x: '50%', opacity: 0 }, "-=1")

	// logo
	tl0.to(".path_7", { fill: '#b31c21'}, "-=3")
	tl0.to(".path_12", { fill: '#b31c21'}, "-=2.9")
	tl0.to(".path_11", { fill: '#b31c21'}, "-=2.8")

	tl0.to(".path_9", { fill: '#008cd1'}, "-=2.7")
	tl0.to(".path_10", { fill: '#008cd1'}, "-=2.6")
	tl0.to(".path_8", { fill: '#008cd1'}, "-=2.5")

	tl0.to(".pol_1", { fill: '#71706f'}, "-=3")
	tl0.to(".pol_2", { fill: '#fff'}, "-=2.9")

	tl0.to(".rect_1", { fill: '#c7c6c5'}, "-=2.8")
	tl0.to(".rect_2", { fill: '#008cd1'}, "-=2.7")
	tl0.to(".rect_3", { fill: '#b31c21'}, "-=2.6")
	tl0.to(".rect_4", { fill: '#ffcb05'}, "-=2.5")

	// Header & Footer
	var tl1 = gsap.timeline({ defaults: { duration: 1 } });
	tl1.from(".header__logo", { delay: 1, y: '50%', opacity: 0 })
	tl1.from(".menu", { y: '50%', opacity: 0 }, "-=1")
	tl1.from(".footer__copy", { y: '50%', opacity: 0 }, "-=.8")
	tl1.from(".social__link", { y: '20%', opacity: 0, stagger: 0.2 }, "-=.8")

	// About
	var tl5 = gsap.timeline({ defaults: { duration: 1 } });
	tl5.from(".about__box-title", { delay: .8, y: '10%', opacity: 0 })
		.from(".about__text", { y: '10%', opacity: 0 }, "-=.9")
		.from(".about__btn-box", { y: '20%', opacity: 0 }, "-=.9")

	
});


$(function () {

	// Animsition
	$(".animsition-overlay").animsition({
		inClass: 'overlay-slide-in-top',
		outClass: 'overlay-slide-out-top',
		inDuration: 1500,
		outDuration: 800,
		linkElement: '.animsition-link',
		loading: true,
		loadingParentElement: 'body',
		loadingClass: 'animsition-loading',
		loadingInner: '', // e.g '<img src="loading.svg" />'
		timeout: false,
		timeoutCountdown: 5000,
		onLoadEvent: true,
		browser: ['animation-duration', '-webkit-animation-duration'],
		overlay: true,
		overlayClass: 'animsition-overlay-slide',
		overlayParentElement: 'body',
		transition: function (url) { window.location.href = url; }
	});




	// Menu
	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
		};
		init();
	}();



	$('#fullpage').fullpage({
		autoScrolling: true,
		scrollBar: false,
		navigation: true,
		navigationTooltips: ['Главная', 'О Нас', 'Услуги', 'Работы', 'Контакты'],
		showActiveTooltip: true,
		anchors: ['section1', 'section2'],

		onLeave: function (origin, destination, direction) {

			// about us
			if (destination == 2) {
				var tl2 = gsap.timeline({ defaults: { duration: 1 } });
				tl2.from(".bgText span", { delay: .5, y: '110%' })
					.from(".aboutUs__suptitle", { opacity: 0, y: '100%' }, "-=.7")
					.from(".aboutUs__title", { y: '20%', opacity: 0 }, "-=.7")
					.from(".aboutUs__text", { stagger: 0.2, y: '20%', opacity: 0 }, "-=.7")
					.from(".aboutUs__btn-box", { y: '40%', opacity: 0 }, "-=.8")
					.from(".aboutUs__image", { x: '100%' }, "-=1.7")
					.from(".aboutUs__image-dark", { width: '100%' }, "-=.7")
					.from(".aboutUs__item", { stagger: 0.2, y: '20%', opacity: 0 }, "-=1.5")
			};
			// our services
			if (destination == 3) {
				var tl3 = gsap.timeline({ defaults: { duration: 1 } });
				tl3.from(".ourServices__item-hide", { delay: .5, height: '100%', stagger: 0.2 })
					.from(".ourServices__num", { y: '20%', opacity: 0, stagger: 0.2 }, "-=2.4")
					.from(".ourServices__name", { y: '20%', opacity: 0, stagger: 0.2 }, "-=2.2")
					.from(".ourServices__popup-pagination", { width: 0 }, "-=2.2")
					.from(".ourServices-button-prev", { y: '20%', opacity: 0 }, "-=2.2")
					.from(".ourServices-button-next", { y: '20%', opacity: 0 }, "-=2.2")
			};
			// portfolio
			if (destination == 4) {
				var tl4 = gsap.timeline({ defaults: { duration: 1 } });
				tl4.from(".portfolio__item-hide", { delay: .5, height: '101%', stagger: 0.2 })
					.from(".portfolio__bgText span", { y: '110%' }, "-=1.8")
					.from(".portfolio__btn-box", { y: '15%', opacity: 0 }, "-=1.8")
					.from(".portfolio-button-prev", { opacity: 0 }, "-=.8")
					.from(".portfolio-button-next", { opacity: 0 }, "-=1")
			};
			// contacts
			if (destination == 5) {
				var tl4 = gsap.timeline({ defaults: { duration: 1 } });
				tl4.from(".ourContacts__bgText span", { delay: .5, y: '110%' })
					.from(".ourContacts__title", { y: '50%', opacity: 0 }, "-=.7")
					.from(".ourContacts__text", { y: '30%', opacity: 0 }, "-=.7")
					.from(".ourContacts__logo", { y: '15%', opacity: 0, stagger: 0.2 }, "-=.7")
					.from(".ourContacts__adress", { y: '15%', opacity: 0 }, "-=1")
					.from(".ourContacts__tel a", { y: '15%', opacity: 0, stagger: 0.2 }, "-=.8")
					.from(".ourContacts__email", { y: '15%', opacity: 0 }, "-=1")
					.from(".ourContacts__map", { x: '100%' }, "-=2.2")
					.from(".ourContacts__map-hide", { width: '100%' }, "-=1.2")
			};

		}
	});


	// Vegas
	$('.intro').vegas({
		transition: 'fade2',
		animation: 'random',
		timer: false,
		delay: 10000,
		transitionDuration: 2000,
		slides: [
			{ src: '../img/intro.jpg' },
			{ src: '../img/about.jpg' },
			{ src: '../img/about_02.jpg' }
		]
	});





	var mySwiper = new Swiper('.ourServices__slider', {
		loop: false,
		slidesPerView: 'auto',
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});

	var mySwiper2 = new Swiper('.portfolio__slider', {
		loop: false,
		slidesPerView: 'auto',
		spaceBetween: 40,
		centeredSlides: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {

			701: {
				spaceBetween: 60,
			},
			1401: {
				centeredSlides: false,
			}
		}
	});


	var mySwiper3 = new Swiper('.testimonials__slider', {
		loop: true,
		slidesPerView: 1,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	var mySwiper4 = new Swiper('.team__slider', {
		loop: true,
		slidesPerView: 'auto',
		centeredSlides: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {

			1: {
				spaceBetween: 25,
			},
			425: {
				spaceBetween: 45,
			},
			600: {
				spaceBetween: 70,
			},
			1300: {
				spaceBetween: 100,
			},
			1440: {
				spaceBetween: 150
			}
		}
	});




	if (window.matchMedia("(min-width: 1440px)").matches) {

		$(window).on("scroll load resize", function () {
			$(".box__pages").css("opacity", 1 - $(window).scrollTop() / 350);
		});

		$(window).on("scroll load resize", function () {
			$(".bgText--pages").css("opacity", 1 - $(window).scrollTop() / 500);
		});

	} else {

		$(window).on("scroll load resize", function () {
			$(".box__pages").css("opacity", 1 - $(window).scrollTop() / 200);
		});

		$(window).on("scroll load resize", function () {
			$(".bgText--pages").css("opacity", 1 - $(window).scrollTop() / 300);
		});

	}




	// Popup
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,


		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in',

		callbacks: {
			open: function () {
				jQuery('body').addClass('popup-active');
			},
			close: function () {
				jQuery('body').removeClass('popup-active');
			}
		}

	});


	$('.popup-with-zoom-anim').click(function () {
		var mySwiper5 = new Swiper('.services__popup-slider', {
			loop: true,
			slidesPerView: 1,
			effect: 'fade',
			fadeEffect: {
				crossFade: false
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'progressbar',
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	});


	// Image popup
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		fixedContentPos: false,
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function (item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function (element) {
				return element.find('img');
			}
		}

	});


	// Tilt
	$('.js-tilt').tilt({
		maxTilt: 5,
		glare: true,
		maxGlare: 0.1,
		easing: "cubic-bezier(.03,.98,.52,.99)",
		speed: 600
	});


	$('.about__btn').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 100 }, 500, 'linear');
	});


	// ScrollReveal

	// function aboutImage(el) {
	// 	el.classList.remove('is-animating');
	// 	el.classList.add('is-visible');
	// }

	function aboutImage(el) {
		el.classList.add('blackHide--off');
	}

	var slideUp = {
		delay: 100,
		useDelay: 'once',
		duration: 500,
		reset: false,
		interval: 100,
		distance: '20px',
		easing: 'cubic-bezier(.15,0,.32,1.01)',
		viewOffset: {
			bottom: 50
		}
	}

	// cubic-bezier(0,.01,1,1)

	// aboutInfoBox
	var aboutBox = [
		document.querySelector('.aboutInfo__box-suptitle'),
		document.querySelector('.aboutInfo__title'),
		document.querySelector('.aboutInfo__box-text'),
		document.querySelector('.aboutServices__suptitle'),
		document.querySelector('.aboutServices__title'),
		document.querySelector('.howWeWork__suptitle'),
		document.querySelector('.howWeWork__title'),
		document.querySelector('.howWeWork__text'),
		document.querySelector('.qualities__suptitle'),
		document.querySelector('.qualities__title'),
		document.querySelector('.qualities__text'),
		document.querySelector('.features__suptitle'),
		document.querySelector('.features__title'),
		document.querySelector('.testimonials__item-suptitle'),
		document.querySelector('.testimonials__item-title'),
		document.querySelector('.testimonials__item-text'),
		document.querySelector('.testimonials__item-icon'),
		document.querySelector('.testimonials__item-text'),
		document.querySelector('.testimonials__item-name'),
		document.querySelector('.testimonials__item-company'),
		document.querySelector('.team__suptitle'),
		document.querySelector('.team__title'),
		document.querySelector('.contacts__title'),
		document.querySelector('.contacts__text'),
		document.querySelector('.services__title'),
		document.querySelector('.services__text'),
		document.querySelector('.works__title'),
		document.querySelector('.works__text'),
	];

	var aboutInfoContacts = document.querySelectorAll('.aboutInfo__contacts-box');
	var aboutServicesItem = document.querySelectorAll('.aboutServices__item');
	var howWeWorkItem = document.querySelectorAll('.howWeWork__item');
	var qualitiesItem = document.querySelectorAll('.qualities__item');
	var qualitiesFeature = document.querySelectorAll('.qualities__feature');
	var featuresItem = document.querySelectorAll('.features__item');
	var partnersItem = document.querySelectorAll('.partners__item');
	var contactsItem = document.querySelectorAll('.contacts__item');
	var servicesItem = document.querySelectorAll('.services__col');
	var worksItem = document.querySelectorAll('.works__item-popup');


	ScrollReveal().reveal(aboutBox, slideUp);
	ScrollReveal().reveal(aboutInfoContacts, slideUp);

	ScrollReveal().reveal('.aboutInfo__image', { afterReveal: aboutImage });

	ScrollReveal().reveal(aboutServicesItem, slideUp);

	ScrollReveal().reveal(howWeWorkItem, slideUp);

	ScrollReveal().reveal(qualitiesItem, slideUp);
	ScrollReveal().reveal(qualitiesFeature, slideUp);

	ScrollReveal().reveal(featuresItem, slideUp);

	ScrollReveal().reveal(partnersItem, slideUp);

	ScrollReveal().reveal('.team__slider', { afterReveal: aboutImage });

	ScrollReveal().reveal(contactsItem, slideUp);
	
	ScrollReveal().reveal('.contacts__map', { afterReveal: aboutImage });
	
	ScrollReveal().reveal(servicesItem, slideUp);

	ScrollReveal().reveal(worksItem, slideUp);



   



	var $window = jQuery(window);

	// Cursor
	cursor = {
		$el: jQuery('.cursor'),
		$el_main: jQuery('span.cursor-circle'),
		targetX: $window.width() / 2,
		targetY: $window.height() / 2,
		currentX: $window.width() / 2,
		currentY: $window.height() / 2,
		easing: 0.2,
		init: function () {
			let $this_el = this.$el;
			// Cursor Move
			$window.on('mousemove', function (e) {
				cursor.targetX = e.clientX - $this_el.width() / 2;
				cursor.targetY = e.clientY - $this_el.height() / 2;
			});
			if ($this_el.length) {
				cursor.animate();
			}

			// Show and Hide Cursor
			$window.on('mouseleave', function () {
				cursor.$el.addClass('is-inactive');
			}).on('mouseenter', function () {
				cursor.$el.removeClass('is-inactive');
			});

			// Bind Interractions
			jQuery(document).on('mouseenter', 'a', function () {
				if (jQuery(this).hasClass('lightbox-link')) {
					cursor.$el.addClass('int-lightbox');
				} else {
					cursor.$el.addClass('int-link');
				}
				jQuery(this).on('mouseleave', function () {
					cursor.$el.removeClass('int-link int-lightbox');
				});
			}).on('mouseenter', '.menu', function () {
				cursor.$el.addClass('int-link');
				jQuery(this).on('mouseleave', function () {
					cursor.$el.removeClass('int-link');
				});
			}).on('mouseenter', 'button', function () {
				cursor.$el.addClass('int-link');
				jQuery(this).on('mouseleave', function () {
					cursor.$el.removeClass('int-link');
				});
			}).on('mouseenter', '.ourServices__item', '.portfolio__item', function () {
				cursor.$el.addClass('int-link');
				jQuery(this).on('mouseleave', function () {
					cursor.$el.removeClass('int-link');
				});
			});
		},
		animate: function () {
			let $this_el = cursor.$el;
			cursor.currentX += ((cursor.targetX - cursor.currentX) * cursor.easing);
			cursor.currentY += ((cursor.targetY - cursor.currentY) * cursor.easing);
			$this_el.css('transform', 'translate3d(' + cursor.currentX + 'px, ' + cursor.currentY + 'px, 0)');
			requestAnimationFrame(cursor.animate);
		}
	};
	cursor.init();


	gsap.config({
		nullTargetWarn: false
	});


	



});

