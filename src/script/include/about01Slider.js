import { spmql, touchDevice, remUnit } from "./vars";
import Swiper, { Controller, Navigation } from "swiper";
import "swiper/css";

function about01Slider() {
	const slider = document.querySelector(".swiper");

	const swiper = new Swiper(slider, {
		modules: [Navigation, Controller],
		speed: 700,
		loop: true,
		spaceBetween: Number(remUnit(10.25)),
		slidesPerView: 1.3125,
		centeredSlides: true,
		allowTouchMove: true,
		// spaceBetween: Number(remUnit(3.6)),
		// autoHeight: true,
		// preloadImages: false,
		// lazy: {
		// 	loadPrevNext: true,
		// },
		navigation: {
			prevEl: "[data-slider-prev]",
			nextEl: "[data-slider-next]",
		},
		on: {
			resize: function () {
				if (spmql.matches) {
					swiper.params.spaceBetween = Number(remUnit(10.2));
				} else {
					swiper.params.spaceBetween = Number(remUnit(-4.8));
				}
			},
		},
		breakpoints: {
			768: {
				centeredSlides: true,
				slidesPerView: 3,
				spaceBetween: Number(remUnit(-4.8)),
			},
		},
	});
}

export { about01Slider };
