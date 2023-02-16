import { touchDevice, remUnit, spmql, header, noscroll } from "../vars";
import { tweenArray } from "../topSections";
import { gsap, ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger, Observer);

let topCultureTl, spCulture2Tl, spCultureLinkTl;

const cultureTweenArray = [];

const topCultureInit = () => {
	let mm = gsap.matchMedia();

	mm.add("(min-width: 768px)", () => {
		topCultureTl = gsap
			.timeline({
				defaults: { duration: 1.25, ease: "power2.out" },
				paused: true,
			})
			.to("#culture", {
				autoAlpha: 1,
			})
			.fromTo(
				".top-culture__copy-list",
				{
					x: "100%",
					autoAlpha: 0,
				},
				{
					duration: 1.125,
					x: "0",
					autoAlpha: 1,
				}
			)
			.fromTo(
				".top-culture__lead",
				{
					x: "-100%",
					autoAlpha: 0,
				},
				{
					duration: 1.125,
					x: "0",
					autoAlpha: 1,
				},
				"<"
			)
			.fromTo(
				".top-culture__lead-body p",
				{
					autoAlpha: 0,
					y: () => {
						return remUnit(3);
					},
				},
				{
					duration: 1,
					autoAlpha: 1,
					y: 0,
					stagger: 0.2,
				},
				"<50%"
			)
			.fromTo(
				".top-culture__copy-list-item",
				{
					autoAlpha: 0,
					y: () => {
						return remUnit(3);
					},
				},
				{
					duration: 1,
					autoAlpha: 1,
					y: 0,
					stagger: 0.1,
				},
				"<50%"
			);
	});

	mm.add("(max-width: 767px)", () => {
		topCultureTl = gsap
			.timeline({
				defaults: { duration: 1.25, ease: "power2.out" },
				paused: true,
			})
			.to("#culture", {
				autoAlpha: 1,
			})
			.fromTo(
				".top-culture__copy-list",
				{
					x: "100%",
					autoAlpha: 0,
				},
				{
					duration: 1.125,
					x: "0",
					autoAlpha: 1,
				}
			)
			.fromTo(
				".top-culture__copy-list-item",
				{
					autoAlpha: 0,
					y: () => {
						return remUnit(3);
					},
				},
				{
					duration: 1,
					autoAlpha: 1,
					y: 0,
					stagger: 0.1,
				},
				"<50%"
			);

		spCulture2Tl = gsap
			.timeline({
				defaults: { duration: 1.25, ease: "power2.out" },
				paused: true,
			})
			.to(".top-culture__lead", {
				autoAlpha: 1,
			})
			.fromTo(
				".top-culture__lead p",
				{
					autoAlpha: 0,
					y: "10vh",
				},
				{
					autoAlpha: 1,
					y: 0,
					stagger: 0.1,
				},
				"<25%"
			);

		spCultureLinkTl = gsap
			.timeline({
				defaults: { duration: 1.25, ease: "power2.out" },
				paused: true,
			})
			.to("[data-ep-sp='cultureLink']", {
				autoAlpha: 1,
			})
			.fromTo(
				"[data-ep-sp='cultureLink'] .link-section__title, [data-ep-sp='cultureLink'] .link-section__arrow",
				{
					autoAlpha: 0,
					y: "10vh",
				},
				{
					autoAlpha: 1,
					y: 0,
					stagger: 0.1,
				},
				"<25%"
			);
	});

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
	cultureTweenArray.push(otedamaTl);

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
	cultureTweenArray.push(bigPieChartTl);

	const donutsChart = document.querySelectorAll(".donuts-chart");

	donutsChart.forEach((elm, index) => {
		const circle = elm.querySelectorAll(".target1");

		const tween = gsap
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

		cultureTweenArray.push(tween);
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
	cultureTweenArray.push(horizontalBarGraf);

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
		cultureTweenArray.push(verticalBarGraf);
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
		cultureTweenArray.push(drawingTl);
	});

	const cultureAnnai = document.querySelectorAll(".culture-annai");

	cultureAnnai.forEach((elm, index) => {
		const rightHand = elm.querySelector(".culture-annai-right-hand");
		const annaiTl = gsap
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
		cultureTweenArray.push(annaiTl);
	});

	const cultureWalking = document.querySelectorAll(".culture-walking");

	cultureWalking.forEach((elm, index) => {
		const leftHand = elm.querySelector(".culture-walking-left-hand");
		const rightHand = elm.querySelector(".culture-walking-right-hand");
		const leftFoot = elm.querySelector(".culture-walking-left-foot");
		const rightFoot = elm.querySelector(".culture-walking-right-foot");
		const walkingTl = gsap
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
		cultureTweenArray.push(walkingTl);
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
		cultureTweenArray.push(makingTl, makingHagrumaTl);
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
		cultureTweenArray.push(makingTl);
	});

	const fukidashi = document.querySelectorAll(
		".top-culture__bg-item[class*='fukidashi']"
	);

	fukidashi.forEach((item, index) => {
		const tween = gsap.fromTo(
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
		cultureTweenArray.push(tween);
	});

	tweenArray.push(topCultureTl);

	cultureTweenArray.forEach((tween) => {
		tween.pause();
	});
};

export {
	topCultureInit,
	topCultureTl,
	spCulture2Tl,
	spCultureLinkTl,
	cultureTweenArray,
};
