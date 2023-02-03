import { spmql, header } from "./vars";
import { gsap } from "gsap/all";

function accordion() {
	let triggers, subMenus;
	triggers = document.querySelectorAll("[data-accordion-trigger]");
	if (triggers.length > 0) {
		triggers.forEach((trigger) => {
			trigger.addEventListener("click", toggleMenu);
		});
	}
	subMenus = document.querySelectorAll("[data-accordion-content]");
	if (subMenus.length > 0) {
		subMenus.forEach((menu) => {
			gsap.set(menu, {
				autoAlpha: 0,
				height: 0,
				overflow: "hidden",
			});
		});
	}

	function toggleMenu(event) {
		const activeTrigger = event.currentTarget;
		const activeMenu = () => {
			return activeTrigger.nextElementSibling;
			// if (activeTrigger.classList.contains("menu__category-inner")) {
			// 	return activeTrigger.parentNode.nextElementSibling;
			// } else {
			// 	return activeTrigger.nextElementSibling;
			// }
		};

		if (activeTrigger.classList.contains("--active")) {
			activeTrigger.classList.remove("--active");
			gsap.to(activeMenu(), {
				duration: 0.5,
				autoAlpha: 0,
				height: 0,
				ease: "power2.inOut",
			});
		} else {
			activeTrigger.classList.add("--active");
			gsap.to(activeMenu(), {
				duration: 0.5,
				autoAlpha: 1,
				height: "auto",
				ease: "power2.inOut",
			});
		}

		// function spDisableAccordion() {
		// 	triggers.forEach((trigger) => {
		// 		trigger.removeEventListener("click", toggleMenu);
		// 		trigger.classList.remove("--active");
		// 	});
		// 	subMenus.forEach((menu) => {
		// 		gsap.set(menu, {
		// 			autoAlpha: 1,
		// 			height: "auto",
		// 		});
		// 	});
		// }

		// spmql.addEventListener("change", (event) => {
		// 	if (event.matches) {
		// 		spAccordion();
		// 	} else {
		// 		spDisableAccordion();
		// 	}
		// });
	}
}

export { accordion };
