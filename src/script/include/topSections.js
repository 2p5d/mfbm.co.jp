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

let firstSt;

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
				firstSt.enable();
			}, 1000);
		}, 2000);
	}, 1000);
}
export { topCover };

let topScrollObserver;

function topSections() {
	window.onbeforeunload = () => window.scrollTo(0, 0);

	// topScrollObserver = Observer.create({
	// 	type: "wheel,touch,pointer",
	// 	wheelSpeed: -1,
	// 	onDown: () => {
	// 		console.log("onDown");
	// 	},
	// 	onUp: () => {
	// 		console.log("onUp");
	// 	},
	// 	// onDown: () => !animating && gotoSection(currentIndex - 1, -1),
	// 	// onUp: () => !animating && gotoSection(currentIndex + 1, 1),
	// 	tolerance: 10,
	// 	preventDefault: true,
	// });

	// ScrollTrigger.normalizeScroll(true);

	const epsWrapper = document.querySelector(".ep"),
		eps = document.querySelectorAll(".ep > section"),
		scroller = document.createElement("div");

	/* 
		コーディングのしやすさから、段積みで組んだ各セクションをjsでposition:fixedなどして初期化する。
		スクロール監理は、通常のScrollTriggerと同じ使い方をしたいので、ダミーのdomを生成して、
		トリガーの位置を指定、または各セクションの高さとシンクロさせる。
	*/

	let epTriggers = []; // 各epのtimelineのtriggerに指定する配列
	const createTriggers = () => {
		scroller.className = "ep-scroller";
		scroller.style.pointerEvents = "none";
		epsWrapper.appendChild(scroller);

		// let autoHeightEps = [];
		// let autoTriggers = [];
		eps.forEach((ep, index) => {
			index = index + 1;
			const epTrigger = document.createElement("div");

			const id = ep.id;
			epTrigger.id = id;
			ep.id = "";

			ep.dataset.ep = `${id}`;

			scroller.appendChild(epTrigger);
			epTriggers.push(epTrigger);
			switch (id) {
				case "prologue":
					epTrigger.style.height = "500vh";
					break;
				case "prologue-2":
					// epTrigger.style.height = `${ep.clientHeight}px`;
					const scrollContent = ep.querySelector(".top-lead__body");
					gsap.set(scrollContent, {
						paddingTop: "50vh",
						// marginBottom: "50vh",
					});
					epTrigger.appendChild(scrollContent);
					// autoHeightEps.push(ep);
					// autoTriggers.push(epTrigger);
					break;
				case "about":
					epTrigger.style.height = "500vh";
					break;
				case "business":
					epTrigger.style.height = "500vh";
					break;
				case "job":
					epTrigger.style.height = "500vh";
					break;
				case "project":
					epTrigger.style.height = "500vh";
					break;
				case "person":
					epTrigger.style.height = "500vh";
					break;
				case "culture":
					epTrigger.style.height = "500vh";
					break;
				case "epilogue":
					epTrigger.style.height = "500vh";
					break;
				default:
					epTrigger.style.height = "300";
			}
		});

		/*
			ダミーのスクローラーとheight:autoのセクションの高さを同期
		*/

		// ScrollTrigger.addEventListener("refreshInit", () => {
		// 	autoTriggers.forEach((trigger, index) => {
		// 		trigger.style.height = `${autoHeightEps[index].clientHeight}px`;
		// 	});
		// });
	};

	createTriggers();

	const epsInit = () => {
		eps.forEach((ep) => {
			gsap.set(ep, {
				position: "fixed",
				inset: "0",
				width: "100%",
				height: "100vh",
				autoAlpha: 0,
			});
		});
	};
	epsInit();

	ScrollTrigger.defaults({
		preventOverlaps: true,
		fastScrollEnd: true,
		// markers: {
		// 	startColor: "skyBlue",
		// 	endColor: "red",
		// 	fontSize: "18px",
		// 	fontWeight: "bold",
		// },
	});

	const epsWrapperTween = gsap.to(epsWrapper, {
		duration: 0.25,
		autoAlpha: 0,
		paused: true,
	});

	const navigationLinks = document.querySelectorAll(".ep__navigation-link");
	const navigationInit = () => {
		navigationLinks.forEach((link) => {
			link.addEventListener("click", (event) => {
				const triggers = ScrollTrigger.getAll();
				triggers.forEach((trigger) => {
					trigger.disable();
				});
				// epsWrapperTween.play();

				event.preventDefault();

				window.removeEventListener("touchmove", noscroll, {
					passive: false,
				});
				window.removeEventListener("wheel", noscroll, { passive: false });

				const href = event.currentTarget.getAttribute("href");
				const target = document.querySelector(href);
				console.log(target);
				gsap.to(window, {
					duration: 0,
					scrollTo: {
						y: target,
						// offsetY: () => {
						// 	if (header) {
						// 		return header.clientHeight;
						// 	}
						// },
					},
					onComplete: () => {
						triggers.forEach((trigger) => {
							trigger.enable(true);
						});
						ScrollTrigger.refresh();
					},
				});

				// event.preventDefault;

				// setTimeout(() => {
				// 	triggers.forEach((trigger) => {
				// 		trigger.enable(true);
				// 	});

				// 	// epsWrapperTween.reverse();
				// }, 100);

				// navigationLinks.forEach((link) => {
				// 	link.classList.remove("--active");
				// });
				// event.currentTarget.classList.add("--active");
			});
		});
	};
	navigationInit();

	const sectionLinksWRapper = document.querySelector(".ep__section-label");
	const sectionLinksInit = () => {
		gsap.set(sectionLinksWRapper, {
			autoAlpha: 0,
		});
	};
	sectionLinksInit();

	const sectionsLinks = document.querySelectorAll(
		".ep__section-label__links-item"
	);
	const sectionChange = (section) => {
		const sectionId = section.id,
			sectionLinkChange = (sectionId) => {
				sectionsLinks.forEach((sectionsLink) => {
					const linkId = sectionsLink.dataset.topTo;

					if (sectionId === linkId) {
						sectionsLink.classList.add("--active");
					} else if (sectionsLink.classList.contains("--active")) {
						sectionsLink.classList.remove("--active");
					}
				});
			},
			navigationChange = (sectionId) => {
				navigationLinks.forEach((navigationLink) => {
					const linkId = navigationLink.href.split("#")[1];
					if (sectionId === linkId) {
						navigationLink.classList.add("--active");
					} else if (navigationLink.classList.contains("--active")) {
						navigationLink.classList.remove("--active");
					}
				});
			},
			toggleSectionLink = (section) => {
				const index = epTriggers.indexOf(section);

				console.log(index);
				console.log(epTriggers.length - 1);

				if (index > 1 && index != epTriggers.length - 1) {
					gsap.to(sectionLinksWRapper, {
						duration: 1,
						autoAlpha: 1,
					});
				} else {
					gsap.to(sectionLinksWRapper, {
						duration: 1,
						autoAlpha: 0,
					});
				}
			};

		toggleSectionLink(section);

		console.log(sectionId);

		if (sectionId && sectionId != "prologue-2") {
			sectionLinkChange(sectionId);
			navigationChange(sectionId);
		} else {
			return false;
		}
	};

	epTriggers.forEach((section, index) => {
		ScrollTrigger.create({
			id: `sectionChange-${index}`,
			trigger: section,
			start: "top top",
			end: "bottom top",
			// markers: true,
			onToggle: (self) => {
				sectionChange(self.trigger);
			},
		});
	});

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

	/* 
		---------- prologue ----------
	*/

	// gsap.set(".top-lead__body-inner", {
	// 	marginTop: "20vh",
	// 	// onComplete: () => {
	// 	// 	ScrollTrigger.refresh();
	// 	// },
	// });

	firstSt = ScrollTrigger.create({
		id: "prologue",
		trigger: "#prologue",
		start: "top center",
		end: "bottom top",
		// markers: true,
		onToggle: (self) => {
			window.addEventListener("touchmove", noscroll, { passive: false });
			window.addEventListener("wheel", noscroll, { passive: false });
			if (self.direction === 1) {
				prologueInTl.play();
			} else {
				// window.addEventListener("touchmove", noscroll, {
				// 	passive: false,
				// });
				// window.addEventListener("wheel", noscroll, { passive: false });
				prologueBackTl.restart();
			}
		},
	});
	firstSt.disable();

	ScrollTrigger.create({
		id: "topLeadTl",
		trigger: "#prologue-2",
		start: "top top",
		end: "bottom top",
		// markers: true,
		onEnter: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topLeadTl.restart();
		},
		onLeaveBack: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topLeadTl.reverse();
		},
	});

	/* 
		---------- about ----------
	*/

	ScrollTrigger.create({
		id: "aboutTl",
		trigger: "#about",
		start: "top top",
		end: "center top",
		onEnter: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			aboutTl.restart();
		},
		onLeaveBack: (self) => {
			window.addEventListener("touchmove", noscroll, { passive: false });
			window.addEventListener("wheel", noscroll, { passive: false });
			aboutTl.reverse();
		},
	});

	/* 
		---------- mfbmField ----------
	*/

	ScrollTrigger.create({
		id: "mfbmFieldTl",
		trigger: "#business",
		start: "top top",
		end: "center top",
		onEnter: (self) => {
			window.addEventListener("touchmove", noscroll, { passive: false });
			window.addEventListener("wheel", noscroll, { passive: false });
			mfbmFieldTl.restart();
		},
		onLeaveBack: (self) => {
			window.addEventListener("touchmove", noscroll, { passive: false });
			window.addEventListener("wheel", noscroll, { passive: false });
			mfbmFieldTl.reverse();
		},
	});

	/* 
		---------- topJob ----------
	*/

	ScrollTrigger.create({
		id: "topJobTl",
		trigger: "#job",
		start: "top top",
		end: "center top",
		onEnter: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topJobTl.restart();
		},
		onLeaveBack: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topJobTl.reverse();
		},
	});

	/* 
		---------- topProject ----------
	*/

	ScrollTrigger.create({
		id: "topProjectTl",
		trigger: "#project",
		start: "top top",
		end: "center top",
		onEnter: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topProjectTl.restart();
		},
		onLeaveBack: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topProjectTl.reverse();
		},
	});

	/* 
		---------- topPerson ----------
	*/

	ScrollTrigger.create({
		id: "topPersonTl",
		trigger: "#person",
		start: "top top",
		end: "center top",
		onEnter: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topPersonTl.restart();
		},
		onLeaveBack: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topPersonTl.reverse();
		},
	});

	/* 
		---------- topCulture ----------
	*/

	ScrollTrigger.create({
		id: "topCultureTl",
		trigger: "#culture",
		start: "top top",
		end: "center top",
		onEnter: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topCultureTl.restart();
		},
		onLeaveBack: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topCultureTl.reverse();
		},
	});

	/* 
		---------- epilogue ----------
	*/

	ScrollTrigger.create({
		id: "epilogueTl",
		trigger: "#epilogue",
		start: "top top",
		end: "bottom bottom",
		onEnter: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			epilogueTl.restart();
		},
		// onLeave: (self) => {
		// 	lastTl.play();
		// },
		onLeaveBack: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			epilogueTl.reverse();
		},
		// onEnterBack: (self) => {
		// 	lastTl.reverse();
		// },
	});
}

export { topSections, topScrollObserver };
