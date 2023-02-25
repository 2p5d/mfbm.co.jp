import { gsap, ScrollTrigger } from "gsap/all";
import { remUnit } from "./vars";
gsap.registerPlugin(ScrollTrigger);

const personIndex = () => {
	const parents = document.querySelectorAll(
			".person-index__item:not(.swiper-slide)"
		),
		personIndexInit = () => {
			parents.forEach((parent) => {
				const items = parent.querySelectorAll(
					".person-index__item-cover-content,.person-index__item-cover-label.person-index__item-cover-title,.person-index__item-link,.person-index__item-person-photo,.person-index__item-person-description-title,.person-index__item-person-description-text,.person-index__item-person-data-label,.person-index__item-person-data-name,.person-index__item-person-data-text"
				);
				gsap.set(items, { autoAlpha: 0 });
			});
		},
		personIndexAnim = () => {
			ScrollTrigger.batch(parents, {
				// interval: 0.1, // time window (in seconds) for batching to occur.
				// batchMax: 3,   // maximum batch size (targets)
				id: "scrollReveal",
				start: "top 90%",
				once: true,
				onEnter: (batch, selfs) => {
					// あまり良くわかってないが、第1引数が、domで第２引数がスクロールトリーがのようだ
					batch.forEach((item, index) => {
						const anim = gsap.to(
							item.querySelectorAll(
								".person-index__item-cover-content,.person-index__item-cover-label.person-index__item-cover-title,.person-index__item-link,.person-index__item-person-photo,.person-index__item-person-description-title,.person-index__item-person-description-text,.person-index__item-person-data-label,.person-index__item-person-data-name,.person-index__item-person-data-text"
							),
							{
								duration: 1.25,
								autoAlpha: 1,
								stagger: {
									each: 0.2,
									// ease: "power3.out",
								},
								ease: "power3.inOut",
								paused: true,
							}
						);

						selfs[index].progress === 1 ? anim.progress(1) : anim.play();
					});
				},
			});
		};

	if (parents.length) {
		personIndexInit();
		personIndexAnim();
	}
};
export { personIndex };
