import { spBreakPoint } from "./vars";
import { gsap } from "gsap/all";

function personScheduleAccordion() {
	let mm = gsap.matchMedia(),
		hiddenItemsArray = [];
	const wrapper = document.querySelector(".person-schedule__list-wrapper"),
		trigger = document.querySelector(".person-schedule__sp-more-button"),
		triggerIcon = document.querySelector(".person-schedule__sp-more-icon"),
		triggerText = document.querySelector(
			".person-schedule__sp-more-button-text"
		),
		items = document.querySelectorAll(".person-schedule__list-item"),
		itemCount = 3,
		getDefaultItemsHeight = () => {
			let height = 0;
			for (let i = 0; i < itemCount; i++) {
				const style = window.getComputedStyle(items[i]);
				height = height + items[i].clientHeight + parseFloat(style.marginTop);
			}
			return height;
		},
		resizeObserver = new ResizeObserver((entries) => {
			entries.forEach(({ target }) => {
				gsap.set(wrapper, {
					height: `${getDefaultItemsHeight()}px`,
				});
			});
		}),
		toggleMenu = (event) => {
			resizeObserver.disconnect();
			const activeTrigger = event.currentTarget;
			if (activeTrigger.classList.contains("--active")) {
				activeTrigger.classList.remove("--active");
				gsap
					.timeline({
						defaults: {
							duration: 0.5,
							ease: "power2.inOut",
						},
						onComplete: () => {
							resizeObserver.observe(wrapper);
							triggerText.textContent = "more";
						},
					})
					.to(wrapper, {
						duration: 0.5,
						height: `${getDefaultItemsHeight()}px`,
						ease: "power2.inOut",
					})
					.to(
						hiddenItemsArray,
						{
							autoAlpha: 0,
						},
						"<"
					)
					.to(
						triggerIcon,
						{
							autoAlpha: 1,
						},
						"<"
					);
			} else {
				activeTrigger.classList.add("--active");
				gsap
					.timeline({
						defaults: {
							duration: 0.5,
							ease: "power2.inOut",
						},
						onComplete: () => {
							triggerText.textContent = "close";
						},
					})
					.to(wrapper, {
						duration: 0.5,
						height: "auto",
						ease: "power2.inOut",
					})
					.to(
						hiddenItemsArray,
						{
							autoAlpha: 1,
						},
						"<"
					)
					.to(
						triggerIcon,
						{
							autoAlpha: 0,
						},
						"<"
					);
			}
		},
		accordionInit = () => {
			if (trigger) {
				trigger.addEventListener("click", toggleMenu);
			}

			if (items.length > 0) {
				items.forEach((item, index) => {
					if (index >= itemCount) {
						hiddenItemsArray.push(item);
					}
				});

				gsap.set(hiddenItemsArray, {
					autoAlpha: 0,
				});
			}

			if (wrapper) {
				gsap.set(wrapper, {
					overflow: "hidden",
					height: `${getDefaultItemsHeight()}px`,
				});
				resizeObserver.observe(wrapper);
			}
		},
		accordionDisable = () => {
			trigger.removeEventListener("click", toggleMenu);
			trigger.classList.remove("--active");
			resizeObserver.disconnect();
			/*
				gsap系は勝手にやってくれる
			*/
			// gsap.set(hiddenItemsArray, {
			// 	autoAlpha: 1,
			// });

			// gsap.set(wrapper, {
			// 	overflow: "visible",
			// 	height: "auto",
			// });
		};

	mm.add(`(max-width: ${spBreakPoint})`, () => {
		accordionInit();

		return () => {
			accordionDisable();
		};
	});
}

export { personScheduleAccordion };
