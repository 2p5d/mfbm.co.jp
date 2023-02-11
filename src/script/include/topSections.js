import { touchDevice, remUnit, spmql, header, noscroll } from "./vars";

import {
	prologueInit,
	prologueInTl,
	prologueBackTl,
	topLeadTl,
} from "./top-animations/prologueInit";
import { aboutInit, aboutTl } from "./top-animations/aboutInit";
import { mfbmFieldInit, mfbmFieldTl } from "./top-animations/mfbmFieldInit";
import { topJobInit, topJobTl } from "./top-animations/topJobInit";
import { topProjectInit, topProjectTl } from "./top-animations/topProjectInit";
import { topPersonInit, topPersonTl } from "./top-animations/topPersonInit";
import { topCultureInit, topCultureTl } from "./top-animations/topCultureInit";
import { epilogueInit, epilogueTl } from "./top-animations/epilogueInit";

import { gsap, ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/Observer";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger, Observer, DrawSVGPlugin);
import { video } from "./topVideo";

function topCover() {
	window.addEventListener("touchmove", noscroll, {
		passive: false,
	});
	window.addEventListener("wheel", noscroll, { passive: false });

	const content = document.querySelector(".top-cover");
	const title = content.querySelector(".top-cover__title");
	setTimeout(() => {
		title.classList.add("--active");
		setTimeout(() => {
			window.removeEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.removeEventListener("wheel", noscroll, { passive: false });
			content.classList.add("--disable");
			video.play();
			setTimeout(() => {
				// firstSt.enable();
			}, 1000);
		}, 2000);
	}, 1000);
}
export { topCover };

let topScrollObserver, sectionId;

function topSections() {
	window.onbeforeunload = () => window.scrollTo(0, 0);

	// ScrollTrigger.normalizeScroll(true);

	const epsWrapper = document.querySelector(".ep"),
		eps = document.querySelectorAll(".ep > section"),
		epsInit = () => {
			eps.forEach((ep) => {
				gsap.set(ep, {
					position: "fixed",
					inset: "0",
					width: "100%",
					height: "100vh",
					autoAlpha: 0,
				});
			});
		},
		wrap = gsap.utils.wrap(0, eps.length - 1);

	let currentIndex = -1,
		animating,
		sectionId;

	epsInit();

	const animationsInit = () => {
		prologueInit();
		aboutInit();
		mfbmFieldInit();
		topJobInit();
		topProjectInit();
		topPersonInit();
		topCultureInit();
		epilogueInit();
	};
	animationsInit();

	function gotoSection(index, direction) {
		// console.log(index);
		let fromTop = direction === -1,
			dFactor = fromTop ? -1 : 1;

		animating = true;
		sectionId = eps[index].id;

		console.log(sectionId);
		switch (sectionId) {
			case "prologue":
				if (direction == 1) {
					prologueInTl.restart();
					prologueInTl.eventCallback("onComplete", () => {
						animating = false;
					});
				} else {
					prologueBackTl.restart();
					prologueBackTl.eventCallback("onComplete", () => {
						animating = false;
					});
				}
				break;
			case "prologue-2":
				topLeadTl.restart();
				topLeadTl.eventCallback("onComplete", () => {
					animating = false;
				});
				break;
			case "about":
				aboutTl.restart();
				aboutTl.eventCallback("onComplete", () => {
					animating = false;
				});
				break;
			default:
				break;
		}

		// if (currentIndex >= 0) {
		// 	// The first time this function runs, current is -1
		// 	prologueInTl.play();
		// 	prologueInTl.eventCallback("onComplete", () => {
		// 		animating = false;
		// 	});
		// }
		// gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
		// tl.fromTo(
		// 	[outerWrappers[index], innerWrappers[index]],
		// 	{
		// 		yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
		// 	},
		// 	{
		// 		yPercent: 0,
		// 	},
		// 	0
		// )
		// 	.fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
		// 	.fromTo(
		// 		splitHeadings[index].chars,
		// 		{
		// 			autoAlpha: 0,
		// 			yPercent: 150 * dFactor,
		// 		},
		// 		{
		// 			autoAlpha: 1,
		// 			yPercent: 0,
		// 			duration: 1,
		// 			ease: "power2",
		// 			stagger: {
		// 				each: 0.02,
		// 				from: "random",
		// 			},
		// 		},
		// 		0.2
		// 	);
		currentIndex = index;
	}

	topScrollObserver = Observer.create({
		type: "wheel,touch,pointer",
		wheelSpeed: -1,
		onDown: () => {
			console.log(currentIndex);
			!animating && currentIndex > 0 && gotoSection(currentIndex - 1, -1);
		},
		onUp: () => {
			console.log(currentIndex);
			!animating &&
				currentIndex < eps.length - 1 &&
				gotoSection(currentIndex + 1, 1);
		},
		tolerance: 500,
		preventDefault: true,
	});

	gotoSection(0, 1);

	// const epsWrapperTween = gsap.to(epsWrapper, {
	// 	duration: 0.25,
	// 	autoAlpha: 0,
	// 	paused: true,
	// });

	// const navigationLinks = document.querySelectorAll(".ep__navigation-link");
	// const navigationInit = () => {
	// 	navigationLinks.forEach((link) => {
	// 		link.addEventListener("click", (event) => {
	// 			const triggers = ScrollTrigger.getAll();
	// 			triggers.forEach((trigger) => {
	// 				trigger.disable();
	// 			});
	// 			// epsWrapperTween.play();

	// 			event.preventDefault();

	// 			window.removeEventListener("touchmove", noscroll, {
	// 				passive: false,
	// 			});
	// 			window.removeEventListener("wheel", noscroll, { passive: false });

	// 			const href = event.currentTarget.getAttribute("href");
	// 			const target = document.querySelector(href);
	// 			console.log(target);
	// 			gsap.to(window, {
	// 				duration: 0,
	// 				scrollTo: {
	// 					y: target,
	// 					// offsetY: () => {
	// 					// 	if (header) {
	// 					// 		return header.clientHeight;
	// 					// 	}
	// 					// },
	// 				},
	// 				onComplete: () => {
	// 					triggers.forEach((trigger) => {
	// 						trigger.enable(true);
	// 					});
	// 					ScrollTrigger.refresh();
	// 				},
	// 			});
	// 		});
	// 	});
	// };
	// navigationInit();

	// const sectionLinksWRapper = document.querySelector(".ep__section-label");
	// const sectionLinksInit = () => {
	// 	gsap.set(sectionLinksWRapper, {
	// 		autoAlpha: 0,
	// 	});
	// };
	// sectionLinksInit();

	// const sectionsLinks = document.querySelectorAll(
	// 	".ep__section-label__links-item"
	// );
	// const sectionChange = (section) => {
	// 	const sectionId = section.id,
	// 		sectionLinkChange = (sectionId) => {
	// 			sectionsLinks.forEach((sectionsLink) => {
	// 				const linkId = sectionsLink.dataset.topTo;

	// 				if (sectionId === linkId) {
	// 					sectionsLink.classList.add("--active");
	// 				} else if (sectionsLink.classList.contains("--active")) {
	// 					sectionsLink.classList.remove("--active");
	// 				}
	// 			});
	// 		},
	// 		navigationChange = (sectionId) => {
	// 			navigationLinks.forEach((navigationLink) => {
	// 				const linkId = navigationLink.href.split("#")[1];
	// 				if (sectionId === linkId) {
	// 					navigationLink.classList.add("--active");
	// 				} else if (navigationLink.classList.contains("--active")) {
	// 					navigationLink.classList.remove("--active");
	// 				}
	// 			});
	// 		},
	// 		toggleSectionLink = (section) => {
	// 			const index = epTriggers.indexOf(section);

	// 			console.log(index);
	// 			console.log(epTriggers.length - 1);

	// 			if (index > 1 && index != epTriggers.length - 1) {
	// 				gsap.to(sectionLinksWRapper, {
	// 					duration: 1,
	// 					autoAlpha: 1,
	// 				});
	// 			} else {
	// 				gsap.to(sectionLinksWRapper, {
	// 					duration: 1,
	// 					autoAlpha: 0,
	// 				});
	// 			}
	// 		};

	// 	toggleSectionLink(section);

	// 	console.log(sectionId);

	// 	if (sectionId && sectionId != "prologue-2") {
	// 		sectionLinkChange(sectionId);
	// 		navigationChange(sectionId);
	// 	} else {
	// 		return false;
	// 	}
	// };

	/* 
		---------- prologue ----------
	*/

	// gsap.set(".top-lead__body-inner", {
	// 	marginTop: "20vh",
	// 	// onComplete: () => {
	// 	// 	ScrollTrigger.refresh();
	// 	// },
	// });

	// firstSt = ScrollTrigger.create({
	// 	id: "prologue",
	// 	trigger: "#prologue",
	// 	start: "top center",
	// 	end: "bottom top",
	// 	// markers: true,
	// 	onToggle: (self) => {
	// 		window.addEventListener("touchmove", noscroll, { passive: false });
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		if (self.direction === 1) {
	// 			prologueInTl.play();
	// 		} else {
	// 			// window.addEventListener("touchmove", noscroll, {
	// 			// 	passive: false,
	// 			// });
	// 			// window.addEventListener("wheel", noscroll, { passive: false });
	// 			prologueBackTl.restart();
	// 		}
	// 	},
	// });
	// firstSt.disable();

	// ScrollTrigger.create({
	// 	id: "topLeadTl",
	// 	trigger: "#prologue-2",
	// 	start: "top top",
	// 	end: "bottom top",
	// 	// markers: true,
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		topLeadTl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		topLeadTl.reverse();
	// 	},
	// });

	// /*
	// 	---------- about ----------
	// */

	// ScrollTrigger.create({
	// 	id: "aboutTl",
	// 	trigger: "#about",
	// 	start: "top top",
	// 	end: "center top",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		aboutTl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, { passive: false });
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		aboutTl.reverse();
	// 	},
	// });

	// /*
	// 	---------- mfbmField ----------
	// */

	// ScrollTrigger.create({
	// 	id: "mfbmFieldTl",
	// 	trigger: "#business",
	// 	start: "top top",
	// 	end: "center top",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, { passive: false });
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		mfbmFieldTl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, { passive: false });
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		mfbmFieldTl.reverse();
	// 	},
	// });

	// /*
	// 	---------- topJob ----------
	// */

	// ScrollTrigger.create({
	// 	id: "topJobTl",
	// 	trigger: "#job",
	// 	start: "top top",
	// 	end: "center top",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		topJobTl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		topJobTl.reverse();
	// 	},
	// });

	// /*
	// 	---------- topProject ----------
	// */

	// ScrollTrigger.create({
	// 	id: "topProjectTl",
	// 	trigger: "#project",
	// 	start: "top top",
	// 	end: "center top",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		topProjectTl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		topProjectTl.reverse();
	// 	},
	// });

	// /*
	// 	---------- topPerson ----------
	// */

	// ScrollTrigger.create({
	// 	id: "topPersonTl",
	// 	trigger: "#person",
	// 	start: "top top",
	// 	end: "center top",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		topPersonTl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		topPersonTl.reverse();
	// 	},
	// });

	// /*
	// 	---------- topCulture ----------
	// */

	// ScrollTrigger.create({
	// 	id: "topCultureTl",
	// 	trigger: "#culture",
	// 	start: "top top",
	// 	end: "center top",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		topCultureTl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		topCultureTl.reverse();
	// 	},
	// });

	// /*
	// 	---------- epilogue ----------
	// */

	// ScrollTrigger.create({
	// 	id: "epilogueTl",
	// 	trigger: "#epilogue",
	// 	start: "top top",
	// 	end: "bottom bottom",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		epilogueTl.restart();
	// 	},
	// 	// onLeave: (self) => {
	// 	// 	lastTl.play();
	// 	// },
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		epilogueTl.reverse();
	// 	},
	// 	// onEnterBack: (self) => {
	// 	// 	lastTl.reverse();
	// 	// },
	// });
}

export { topSections, topScrollObserver };
