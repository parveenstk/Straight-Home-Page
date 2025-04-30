// product left start ---------->
if ($(".product-left").length) {
	var productSlider = new Swiper('.product-slider', {
		spaceBetween: 0,
		centeredSlides: false,
		loop: true,
		direction: 'horizontal',
		loopedSlides: 5,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		resizeObserver: true,
	});
	var productThumbs = new Swiper('.product-thumbs', {
		spaceBetween: 0,
		centeredSlides: true,
		loop: true,
		slideToClickedSlide: true,
		direction: 'horizontal',
		slidesPerView: 5,
		loopedSlides: 5,
	});
	productSlider.controller.control = productThumbs;
	productThumbs.controller.control = productSlider;

}
// product left end ---------->

// Hambuger Menu (Mobile Screen)
const toggleBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('mobile-sidebar');
const closeBtn = document.getElementById('close-sidebar');

toggleBtn.addEventListener('click', () => {
	sidebar.classList.add('show');
})

closeBtn.addEventListener('click', () => {
	sidebar.classList.remove('show');
});

// FAQs Animation Script
const faqButtons = document.querySelectorAll('.faq-alt-question');

faqButtons.forEach(btn => {
	btn.addEventListener('click', () => {
		const currentlyOpen = document.querySelector('.faq-alt-answer.open');
		const currentlyActive = document.querySelector('.faq-alt-question.active');

		if (currentlyOpen && currentlyOpen !== btn.nextElementSibling) {
			currentlyOpen.style.maxHeight = null;
			currentlyOpen.classList.remove('open');
			currentlyActive?.classList.remove('active');
		}

		const answer = btn.nextElementSibling;
		btn.classList.toggle('active');
		answer.classList.toggle('open');
		if (answer.classList.contains('open')) {
			answer.style.maxHeight = answer.scrollHeight + 'px';
		} else {
			answer.style.maxHeight = null;
		}
	});
});
