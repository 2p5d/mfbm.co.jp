import { touchDevice, remUnit, spmql, header, noscroll } from "./vars";

import {
	prologueInit,
	prologueInTl,
	prologueBackTl,
	topLeadTl,
	prologue2stInitTl,
	prologue2St,
} from "./top-animations/prologueInit";
import { aboutInit, aboutTl } from "./top-animations/aboutInit";
import { mfbmFieldInit, mfbmFieldTl } from "./top-animations/mfbmFieldInit";
import { topJobInit, topJobTl } from "./top-animations/topJobInit";
import { topProjectInit, topProjectTl } from "./top-animations/topProjectInit";
import { topPersonInit, topPersonTl } from "./top-animations/topPersonInit";
import { topCultureInit, topCultureTl } from "./top-animations/topCultureInit";
import { epilogueInit, epilogueTl } from "./top-animations/epilogueInit";
import {
	topFooterInit,
	topFooterInitTl,
	topFooterSt,
} from "./top-animations/topFooterInit";

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

let topScrollObserver, currentSectionId;
const tweenArray = [];

/*
アニメーションモジュールで書き換えするので、参照渡し
*/
const animating = {
	flag: false,
};
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
		sectionId;
	epsInit();

	const pcfcLinkObservers = [];
	const pcfcLinkInit = () => {
		const targets = document.querySelectorAll("[data-pc-href");

		targets.forEach((target) => {
			target.classList.add("--linkable");
			const observer = Observer.create({
				target: target,
				type: "pointer",
				onClick: (self) => {
					const href = self.target.dataset.pcHref;
					window.location.href = href;
				},
			});
			pcfcLinkObservers.push(observer);
		});
	};

	// if (!touchDevice) {
	// 	pcfcLinkInit();
	// }

	const animationsInit = () => {
		prologueInit();
		aboutInit();
		mfbmFieldInit();
		topJobInit();
		topProjectInit();
		topPersonInit();
		topCultureInit();
		epilogueInit();
		topFooterInit();
	};
	animationsInit();

	// const epsWrapperTween = gsap.to(epsWrapper, {
	// 	duration: 0.25,
	// 	autoAlpha: 0,
	// 	paused: true,
	// });

	const sectionLinksWRapper = document.querySelector(".ep__section-label");
	const sectionLinksInit = () => {
		gsap.set(sectionLinksWRapper, {
			autoAlpha: 0,
		});
	};
	sectionLinksInit();

	const showSectionLink = gsap.to(sectionLinksWRapper, {
		delay: 1,
		paused: true,
		duration: 1,
		autoAlpha: 1,
	});

	const hideSectionLink = gsap.to(sectionLinksWRapper, {
		delay: 1,
		paused: true,
		duration: 1,
		autoAlpha: 0,
	});

	const sectionsLinks = document.querySelectorAll(
		".ep__section-label__links-item"
	);
	const toggleNavigation = (sectionId) => {
		const sectionLinkChange = (sectionId) => {
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
			};
		// toggleSectionLink = (section) => {
		// 	console.log(eps);

		// 	const index = Array.from(eps).indexOf(section);

		// 	console.log(index);
		// 	console.log(eps.length - 1);

		// 	if (index > 1 && index != eps.length - 1) {
		// 		gsap.to(sectionLinksWRapper, {
		// 			duration: 1,
		// 			autoAlpha: 1,
		// 		});
		// 	} else {
		// 		gsap.to(sectionLinksWRapper, {
		// 			duration: 1,
		// 			autoAlpha: 0,
		// 		});
		// 	}
		// };

		// toggleSectionLink(sectionId);

		sectionLinkChange(sectionId);
		navigationChange(sectionId);

		// 	if (sectionId && sectionId != "prologue-2") {
		// 		sectionLinkChange(sectionId);
		// 		navigationChange(sectionId);
		// 	} else {
		// 		return false;
		// 	}
	};

	const getSectionIndex = (sectionId) => {
		for (let i = 0; i < eps.length; i++) {
			if (eps[i].id === sectionId) {
				return i;
			}
		}
	};

	const getSection = (sectionId) => {
		for (let i = 0; i < eps.length; i++) {
			if (eps[i].id === sectionId) {
				return eps[i];
			}
		}
	};

	const navigationLinks = document.querySelectorAll(".ep__navigation-link");
	const navigationInit = () => {
		navigationLinks.forEach((link) => {
			link.addEventListener("click", (event) => {
				event.preventDefault();
				// const index = Array.from(navigationLinks).indexOf(event.currentTarget);
				// const targetSection = eps[currentIndex];
				// gsap.to(targetSection, {
				// 	duration: 0.5,
				// 	autoAlpha: 0,
				// 	// onComplete: () => {
				// 	// 	fadeout.pause(0);
				// 	// },
				// });

				const targetSectionId = event.currentTarget.href.split("#")[1];
				// console.log(targetSectionId);

				let direction = 1;
				// if (targetSectionId === "prologue") {
				// 	direction = -1;
				// }

				console.log(getSectionIndex(targetSectionId));

				sectionTransition(
					targetSectionId,
					direction,
					getSectionIndex(targetSectionId)
				);
				toggleNavigation(targetSectionId);
				if (targetSectionId === "prologue" || targetSectionId === "epilogue") {
					hideSectionLink.play();
				} else {
					showSectionLink.play();
				}

				/*

					ナビゲーションと各アニメーションの管理について
					ジャンプすると前のアニメーションをprogress(1)にしないと
					持っどたときに何も表示されない。
					ナビゲーションのジャンプする間のIDと各アニメーションのIDを突き合わせして、下方向にジャンプする場合は、それらをprogress（1）する。
					かつ、ジャンプスするターゲットが始まった（または終わった）タイミングで実行しなければいけない。→ よく考えると、スクロールの移動では、下方向に移動した場合、常にprogress(1)状態なので、各アニメーションのdirection1のコールバックで、手前のアニメーションは常にprogress(1)しておくなどでもいいのかもしれない。
					tlには同じIDをつけて、getTweenOf(配列)で取得できそう。ｎんんっｂ
				*/

				// for (let i = 0; i < tweenArray.length; i++) {
				// 	tweenArray[i].progress(1);
				// }

				// gotoSection(index, 1);

				// const triggers = ScrollTrigger.getAll();
				// triggers.forEach((trigger) => {
				// 	trigger.disable();
				// });
				// // epsWrapperTween.play();
				// event.preventDefault();
				// window.removeEventListener("touchmove", noscroll, {
				// 	passive: false,
				// });
				// window.removeEventListener("wheel", noscroll, { passive: false });
				// const href = event.currentTarget.getAttribute("href");
				// const target = document.querySelector(href);
				// console.log(target);
				// gsap.to(window, {
				// 	duration: 0,
				// 	scrollTo: {
				// 		y: target,
				// 		// offsetY: () => {
				// 		// 	if (header) {
				// 		// 		return header.clientHeight;
				// 		// 	}
				// 		// },
				// 	},
				// 	onComplete: () => {
				// 		triggers.forEach((trigger) => {
				// 			trigger.enable(true);
				// 		});
				// 		ScrollTrigger.refresh();
				// 	},
				// });
			});
		});
	};
	navigationInit();

	const sectionTransition = (sectionId, direction, index) => {
		// console.log(currentIndex);

		if (direction == -1) {
			if (currentSectionId) {
				getSection(currentSectionId).style.zIndex = "1";
			}
		} else {
			if (currentSectionId) {
				getSection(currentSectionId).style.zIndex = "0";
			}
		}
		getSection(sectionId).style.zIndex = 1;

		switch (sectionId) {
			case "prologue":
				if (direction == 1) {
					setTimeout(() => {
						prologueInTl.play();
						prologueInTl.eventCallback("onComplete", () => {
							animating.flag = false;
						});
					}, 4000);
				} else {
					prologueBackTl.restart();
					prologueBackTl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "prologue-2":
				if (direction == 1) {
					topLeadTl.restart();
					topLeadTl.eventCallback("onComplete", () => {
						topScrollObserver.disable();
						prologue2stInitTl.play();
						prologue2St.enable();
						// animating.flag = false;
					});
				} else {
					hideSectionLink.restart();
					aboutTl.reverse();
					// topLeadTl.reverse();
					aboutTl.eventCallback("onReverseComplete", () => {
						topScrollObserver.disable();
						// animating.flag = false;
					});
				}
				break;
			case "about":
				toggleNavigation(sectionId);
				if (direction == 1) {
					showSectionLink.restart();
					aboutTl.restart();
					aboutTl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					mfbmFieldTl.reverse();
					mfbmFieldTl.eventCallback("onReverseComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "business":
				toggleNavigation(sectionId);
				if (direction == 1) {
					mfbmFieldTl.restart();
					mfbmFieldTl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					topJobTl.reverse();
					topJobTl.eventCallback("onReverseComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "job":
				toggleNavigation(sectionId);
				if (direction == 1) {
					topJobTl.restart();
					topJobTl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					topProjectTl.reverse();
					topProjectTl.eventCallback("onReverseComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "project":
				toggleNavigation(sectionId);
				if (direction == 1) {
					topProjectTl.restart();
					topProjectTl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					topPersonTl.reverse();
					topPersonTl.eventCallback("onReverseComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "person":
				toggleNavigation(sectionId);
				if (direction == 1) {
					topPersonTl.restart();
					topPersonTl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					topCultureTl.reverse();
					topCultureTl.eventCallback("onReverseComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "culture":
				toggleNavigation(sectionId);
				if (direction == 1) {
					topCultureTl.restart();
					topCultureTl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					showSectionLink.restart();
					epilogueTl.reverse();
					epilogueTl.eventCallback("onReverseComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "epilogue":
				toggleNavigation(sectionId);
				if (direction == 1) {
					hideSectionLink.restart();
					epilogueTl.restart();
					epilogueTl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					setTimeout(() => {
						animating.flag = false;
					}, 1000);
				}
				break;
			case "topFooter":
				topScrollObserver.disable();
				topFooterInitTl.play();
				topFooterSt.enable();
				break;
			default:
				break;
		}

		currentIndex = index;

		currentSectionId = sectionId;
		// console.log(currentSectionId);
	};

	function gotoSection(index, direction) {
		console.log(index);
		let fromTop = direction === -1,
			dFactor = fromTop ? -1 : 1;

		animating.flag = true;
		sectionId = eps[index].id;

		console.log(sectionId);

		sectionTransition(sectionId, direction, index);

		// if (currentIndex >= 0) {
		// 	// The first time this function runs, current is -1
		// 	prologueInTl.play();
		// 	prologueInTl.eventCallback("onComplete", () => {
		// 		animating.flag = false;
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
	}

	topScrollObserver = Observer.create({
		type: "wheel,touch,pointer",
		wheelSpeed: -1,
		onDown: () => {
			console.log(currentIndex);
			!animating.flag && currentIndex > 0 && gotoSection(currentIndex - 1, -1);
		},
		onUp: () => {
			console.log(currentIndex);
			!animating.flag &&
				currentIndex < eps.length - 1 &&
				gotoSection(currentIndex + 1, 1);
		},
		tolerance: 100,
		preventDefault: true,
	});

	gotoSection(0, 1);
}

export { topSections, topScrollObserver, tweenArray, animating };
