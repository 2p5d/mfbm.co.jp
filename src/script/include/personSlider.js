import { spmql, touchDevice, remUnit } from "./vars";
import Swiper, { Controller, Navigation } from "swiper";
import "swiper/css";

function personSlider() {
	const slider = document.querySelector(".swiper");

	/*
    odd と　even　でスタイルわけが必要だったのと詳細ページでは自身のスライドが無くなるので、要素内のテキストで判定してはキーカラーを固定するクラス付与
  */

	const setOddEvenClass = (swiper) => {
		swiper.slides.forEach((slide) => {
			const personNumber = slide.querySelector(
				".person-index__item-cover-label span"
			).textContent;
			if (Number(personNumber) % 2 == 0) {
				slide.classList.add("--swiper-slide-even");
			}
			slide.classList.add(`--person-${personNumber}`);
		});

		/*
			スライド移動
		*/
		const getPersonNumber = () => {
			const bodyClassList = document.body.classList;

			for (let i = 0; i < bodyClassList.length; i++) {
				if (bodyClassList[i].includes("page-person")) {
					return Number(bodyClassList[i].replace("page-person", ""));
				}
			}
		};
		swiper.slideTo(getPersonNumber(), 0);
	};

	const swiper = new Swiper(slider, {
		modules: [Navigation, Controller],
		speed: 700,
		loop: true,
		// slidesPerView: 2.2,
		// centeredSlides: true,
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
			init: function () {
				setOddEvenClass(this);
			},
		},
		// breakpoints: {
		// 	768: {
		// 		// autoHeight: false,
		// 		centeredSlides: false,
		// 		slidesPerView: 4,
		// 		spaceBetween: Number(remUnit(3.8)),
		// 	},
		// },
	});
}

export { personSlider };
