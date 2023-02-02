import { touchDevice, remUnit, spmql, header } from "./vars";
import { gsap, ScrollTrigger } from "gsap/all";

function toggleToTop() {
	const element = document.querySelector(".to-top ");

	if (element) {
		gsap.set(element, {
			autoAlpha: 0,
		});

		ScrollTrigger.create({
			trigger: "main.main",
			start: "50vh top",
			endTrigger: "#footer",
			end: "top bottom-=100px",
			onEnter: (self) => {
				gsap.to(element, {
					duration: 0.5,
					autoAlpha: 1,
				});
			},
			onLeave: (self) => {
				gsap.to(element, {
					duration: 0.5,
					autoAlpha: 0,
				});
			},
			onEnterBack: (self) => {
				gsap.to(element, {
					duration: 0.5,
					autoAlpha: 1,
				});
			},
			onLeaveBack: (self) => {
				gsap.to(element, {
					duration: 0.5,
					autoAlpha: 0,
				});
			},
			// onUpdate: (self) => {
			// 	console.log(
			// 		"progress:",
			// 		self.progress.toFixed(3),
			// 		"direction:",
			// 		self.direction,
			// 		"velocity",
			// 		self.getVelocity()
			// 	);
			// },
		});
	}
}

export { toggleToTop };
