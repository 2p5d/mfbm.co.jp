import { gsap, ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollToPlugin);

/* smooth scroll================================================= */

function smoothScroll() {
	const triggers = document.querySelectorAll('a[href^="#"]:not([href$="#"])');
	triggers.forEach((trigger) => {
		trigger.addEventListener("click", clickHandler);
	});

	function clickHandler(event) {
		event.preventDefault();
		const href = this.getAttribute("href");
		const target = document.querySelector(href);
		const header = document.querySelector(".header");

		gsap.to(window, {
			duration: 0.5,
			scrollTo: {
				y: target,
				offsetY: () => {
					if (header) {
						return header.clientHeight;
					}
				},
			},
			ease: "power2.inOut",
		});
	}
}

export { smoothScroll };
