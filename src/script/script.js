/* bace import */
import "./include/webFontConfig";
import { setScrollBarWidth, touchDevice, spmql } from "./include/vars";
import { modal } from "./include/modal";
import { onceTransition, tlOnce } from "./include/onceTransition";
// import { viewPortHeight } from "./include/viewPortHeight";
import { smoothScroll } from "./include/smoothScroll";
import { accordion } from "./include/accordion";
import { toggleToTop } from "./include/toggleToTop";
import { topTest } from "./include/topTest";
// import "./libs/css_browser_selector.min";
import {
	scrollRevealInit,
	scrollReveal,
	scrollRevealItems,
	scrollRevealGroupInit,
	scrollRevealGroup,
	scrollRevealGroups,
} from "./include/scrollReveal";
import { topSections, topCover } from "./include/topSections";
import { topVideo } from "./include/topVideo";

/* person import */
import { personIndex } from "./include/personIndex";

/* person import */
import { personSlider } from "./include/personSlider";
import { personScheduleAccordion } from "./include/personScheduleAccordion";

/* about01 import */
import { about01Slider } from "./include/about01Slider";

/* business import */
import { businessHover } from "./include/businessHover";

/* culture import */
import { cultureHero } from "./include/cultureHero";
import { cultureContents } from "./include/cultureContents";

window.addEventListener("DOMContentLoaded", resolve);

if (touchDevice) {
	document.documentElement.classList.add("touch-device");
}

function resolve() {
	document.body.classList.remove("contents-hidden");
	init();
}

function init() {
	if (
		!document.body.classList.contains("page-top") &&
		!document.body.classList.contains("page-index_test")
	) {
		onceTransition();
		tlOnce.play();
		scrollRevealInit();
		if (scrollRevealItems.length) {
			tlOnce.add(scrollReveal(), "<75%");
		}
		scrollRevealGroupInit();
		if (scrollRevealGroups.length) {
			tlOnce.add(scrollRevealGroup(), "<75%");
		}
		smoothScroll();
	}

	modal();
	toggleToTop();
	accordion();
	setScrollBarWidth();
	switch (true) {
		case document.body.classList.contains("page-top"):
			top();
			break;
		case document.body.classList.contains("page-index_test"):
			topTest();
			break;
		case document.body.classList.contains("page-about01"):
			about01();
			break;
		case document.body.classList.contains("page-business"):
			business();
			break;
		case document.body.classList.contains("page-person"): // elm.classList.valueで文字列取得してincludes()で部分一致
			personIndex();
			break;
		case document.body.classList.value.includes("page-person0"): // elm.classList.valueで文字列取得してincludes()で部分一致
			personSingle();
			break;
		case document.body.classList.value.includes("page-culture"): // elm.classList.valueで文字列取得してincludes()で部分一致
			cultureHero();
			cultureContents();
			break;
		default:
			break;
	}
}

/* each page */

import { gsap, ScrollTrigger } from "gsap/all";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

// top
function top() {
	// document.querySelector(".top-cover").remove(); // 開発用
	topVideo();
	topCover();
	topSections();

	// if (!spmql.matches) {
	// 	topCover();
	// 	topVideo();
	// 	topSections();
	// } else {
	// 	topVideo();
	// 	topCover();
	// 	// video.play();
	// 	// document.querySelector(".top-cover").remove(); // 開発用
	// }

	const otedamaTl = gsap
		.timeline({
			defaults: {
				duration: 1,
				ease: "none",
				repeat: -1,
				// repeatDelay: 0.25, // 何故かジャンプするので…
			},
		})
		.fromTo(
			"#culture-otedama-left-hand",
			{
				rotation: -15,
			},
			{
				rotation: 0,
				transformOrigin: "3% 3%",
				yoyo: true,
			}
		)
		.set(
			"#culture-otedama-right-hand",
			{
				yPercent: 20,
				xPercent: -10,
			},
			0
		)
		.fromTo(
			"#culture-otedama-right-hand",
			{
				rotation: -15,
			},
			{
				rotation: 0,
				transformOrigin: "95% 20%",
				yoyo: true,
			},
			0
		)
		.to(
			"#culture-otedama-goods",
			{
				duration: 8,
				rotation: "-360",
				transformOrigin: "center",
			},
			0
		)
		.to(
			"#culture-otedama-goods > *",
			{
				duration: 4,
				rotation: "-360",
				transformOrigin: "center",
			},
			0
		);

	const bigPieChartTl = gsap
		.timeline({
			defaults: { duration: 1, ease: "sine.inOut" },
			repeat: -1,
			yoyo: true,
			repeatDelay: 1,
		})
		.set("#target1, #target2", {
			rotation: -90,
			transformOrigin: "center center",
		})
		.set("#target1", { drawSVG: "33%" })
		.set("#target2", { drawSVG: "75%" })
		.to("#target1", { drawSVG: "0% 80%" })
		.to("#target2", { drawSVG: "33% 88%" }, 0);
	// .to("#target3", { drawSVG: "56% 100%" }, 0);

	const donutsChart = document.querySelectorAll(".donuts-chart");

	donutsChart.forEach((elm, index) => {
		const circle = elm.querySelectorAll(".target1");

		gsap
			.timeline({
				defaults: { duration: "random([.85, 1, 1.25])", ease: "sine.inOut" },
				delay: "random([0, 1, 1.5])",
				repeat: -1,
				yoyo: true,
				repeatDelay: 0.25,
			})
			.set(circle, {
				drawSVG: 0,
				rotation: -90,
				transformOrigin: "center center",
			})

			.to(circle, { drawSVG: `0% 85%` });
	});

	const horizontalBarGraf = gsap
		.timeline({
			defaults: { duration: 1, ease: "sine.inOut" },
			repeat: -1,
			yoyo: true,
			repeatDelay: 1,
		})
		.set(".culture-bar-graph-points > *", {
			x: "random([-65, -85, 65, 85])",
		})
		.to(".culture-bar-graph-points > *", {
			x: 0,
			stagger: 0.25,
		});

	const verticalBarGraph = document.querySelectorAll(
		".top-culture__bg-vertical-bar-graph"
	);

	verticalBarGraph.forEach((elm, index) => {
		const children = elm.querySelectorAll(
			".top-culture__bg-vertical-bar-graph-item"
		);

		const verticalBarGraf = gsap
			.timeline({
				defaults: { duration: 0.75, ease: "sine.inOut" },
				repeat: -1,
				yoyo: true,
				// repeatDelay: 1,
			})
			.set(children, {
				// height: "random([35%, 50%, 75%, 100%])",
				height: "random([35%, 50%, 75%, 100%])",
				transformOrigin: "bottom",
			})
			.to(children, {
				delay: "random([.25, .5, .75, 1])",
				scaleY: "random([.25, .35, .5, .75])",
				stagger: 0.25,
			});
	});

	const cultureDrawing = document.querySelectorAll(".culture-drawing");

	cultureDrawing.forEach((elm, index) => {
		const pen = elm.querySelector(".culture-drawing-pencil");
		const rightHand = elm.querySelector(".culture-drawing-right-hand");
		const leftHand = elm.querySelector(".culture-drawing-left-hand");
		const drawLines = elm.querySelector(".culture-drawing-line");
		const drawingTl = gsap
			.timeline({
				delay: "random([.25, .5, .75])",
				defaults: { duration: 1, ease: "none" },
				repeat: -1,
				yoyo: true,
				// repeatDelay: 1,
			})
			.fromTo(
				pen,
				{
					rotate: 7,
				},
				{
					transformOrigin: "center",
					rotate: -5,
				}
			)
			.fromTo(
				drawLines,
				{
					y: 6,
				},
				{
					y: -4,
				},
				0
			)
			.fromTo(
				rightHand,
				{
					rotate: 12,
				},
				{
					transformOrigin: "center 10%",
					rotate: -5,
				},
				0
			)
			.fromTo(
				leftHand,
				{
					rotate: 12,
				},
				{
					transformOrigin: "20% 90%",
					rotate: -7,
				},
				0
			);
	});

	const cultureAnnai = document.querySelectorAll(".culture-annai");

	cultureAnnai.forEach((elm, index) => {
		const rightHand = elm.querySelector(".culture-annai-right-hand");
		const drawingTl = gsap
			.timeline({
				delay: "random([.25, .5, .75])",
				defaults: { duration: 1, ease: "none" },
				repeat: -1,
				yoyo: true,
				// repeatDelay: 1,
			})
			.fromTo(
				rightHand,
				{
					rotate: 0,
				},
				{
					transformOrigin: "top right",
					rotate: 10,
				},
				0
			);
	});

	const cultureWalking = document.querySelectorAll(".culture-walking");

	cultureWalking.forEach((elm, index) => {
		const leftHand = elm.querySelector(".culture-walking-left-hand");
		const rightHand = elm.querySelector(".culture-walking-right-hand");
		const leftFoot = elm.querySelector(".culture-walking-left-foot");
		const rightFoot = elm.querySelector(".culture-walking-right-foot");
		const drawingTl = gsap
			.timeline({
				delay: "random([.25, .5, .75])",
				defaults: { duration: 0.85, ease: "none" },
				repeat: -1,
				yoyo: true,
				// repeatDelay: 1,
			})
			.fromTo(
				rightHand,
				{
					rotate: -3,
				},
				{
					transformOrigin: "top center",
					rotate: 4,
				},
				0
			)
			.fromTo(
				leftHand,
				{
					rotate: 6,
				},
				{
					transformOrigin: "top 3%",
					rotate: 0,
				},
				0
			)
			.fromTo(
				rightFoot,
				{
					rotate: -3,
				},
				{
					transformOrigin: "top left",
					rotate: 1,
				},
				0
			)
			.fromTo(
				leftFoot,
				{
					rotate: -1,
				},
				{
					transformOrigin: "top 60%",
					rotate: -4,
				},
				0
			);
	});

	const cultureMaking = document.querySelectorAll(".culture-making");

	cultureMaking.forEach((elm, index) => {
		const leftHand = elm.querySelector(".culture-making-left-hand");
		const rightHand = elm.querySelector(".culture-making-right-hand");
		const hagurumaLarge = elm.querySelector(".culture-making-haguruma-large");
		const hagurumaSmall = elm.querySelector(".culture-making-haguruma-small");
		const structure = elm.querySelector(".culture-making-structure");
		const makingTl = gsap
			.timeline({
				delay: "random([.25, .5, .75])",
				defaults: { duration: 0.85, ease: "none" },
				repeat: -1,
				yoyo: true,
				// repeatDelay: 1,
			})
			.fromTo(
				rightHand,
				{
					rotate: 5,
				},
				{
					transformOrigin: "top right",
					rotate: -2,
				},
				0
			)
			.fromTo(
				leftHand,
				{
					rotate: 5,
				},
				{
					transformOrigin: "center right",
					rotate: -2,
				},
				0
			)
			.fromTo(
				structure,
				{
					y: -3,
				},
				{
					y: 4,
				},
				0
			);
		const makingHagrumaTl = gsap
			.timeline({
				delay: "random([.25, .5, .75])",
				defaults: { duration: 0.85, ease: "none" },
				repeat: -1,
				// repeatDelay: 1,
			})
			.to(
				hagurumaLarge,
				{
					duration: 3,
					rotation: -360,
					transformOrigin: "center",
					yoyo: false,
				},
				0
			)
			.to(
				hagurumaSmall,
				{
					duration: 3,
					rotation: -360,
					transformOrigin: "center",
					yoyo: false,
				},
				0
			);
	});

	const cultureMaking2 = document.querySelectorAll(".culture-making2");

	cultureMaking2.forEach((elm, index) => {
		const leftHand = elm.querySelector(".culture-making2-left-hand");
		const rightHand = elm.querySelector(".culture-making2-right-hand");
		const structure = elm.querySelector(".culture-making2-structure");
		const head = elm.querySelector(".culture-making2-head");
		const makingTl = gsap
			.timeline({
				delay: "random([.25, .5, .75])",
				defaults: { duration: 0.85, ease: "none" },
				repeat: -1,
				yoyo: true,
				// repeatDelay: 1,
			})
			.fromTo(
				rightHand,
				{
					rotate: 7,
				},
				{
					transformOrigin: "center left",
					rotate: 2,
				},
				0
			)
			.fromTo(
				leftHand,
				{
					rotate: 5,
				},
				{
					transformOrigin: "center left",
					rotate: 2,
				},
				0
			)
			.fromTo(
				structure,
				{
					y: 3,
				},
				{
					y: -4,
				},
				0
			)
			.fromTo(
				head,
				{
					rotate: 0,
				},
				{
					transformOrigin: "center bottom",
					rotate: -15,
					repeatDelay: 1,
				},
				0
			);
	});

	const fukidashi = document.querySelectorAll(
		".top-culture__bg-item[class*='fukidashi']"
	);

	fukidashi.forEach((item, index) => {
		gsap.fromTo(
			item,
			{
				scale: "random([.5, .75])",
			},
			{
				delay: () => {
					if (index % 3 == 0) {
						return 0.75;
					}
					if (index % 2 == 0) {
						return 1.5;
					} else {
						return 0;
					}
				},
				duration: () => {
					if (index % 3 == 0) {
						return 0.78125;
					}
					if (index % 2 == 0) {
						return 0.7825;
					} else {
						return 0.78375;
					}
				},
				autoAlpha: 1,
				scale: 1,
				yoyo: true,
				repeat: -1,
				repeatDelay: 1,
				transformOrigin: "center center",
			}
		);
	});
}

// about01
function about01() {
	about01Slider();
}

// business
function business() {
	businessHover();
}

// person
function personSingle() {
	personSlider();
	personScheduleAccordion();
}
