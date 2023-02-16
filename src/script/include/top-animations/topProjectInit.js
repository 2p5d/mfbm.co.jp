import { touchDevice, remUnit, spmql, header, noscroll } from "../vars";
import { tweenArray } from "../topSections";
import { gsap, ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger, Observer);

let topProjectTl, spProjectLinkTl;

const topProjectInit = () => {
	let mm = gsap.matchMedia();

	mm.add("(min-width: 768px)", () => {
		const textP1 = gsap.utils.toArray(["#p-1-1", "#p-1-2"]);
		const textR1 = gsap.utils.toArray(["#r-1-1", "#r-1-2", "#r-1-3"]);
		const textO1 = gsap.utils.toArray(["#o-1"]);
		const textJ = gsap.utils.toArray(["#j"]);
		const textE = gsap.utils.toArray(["#e-1", "#e-2"]);
		const textC = gsap.utils.toArray(["#c"]);
		const textT1 = gsap.utils.toArray(["#t-1-1", "#t-1-2"]);
		const textS = gsap.utils.toArray(["#s"]);
		const textT2 = gsap.utils.toArray(["#t-2-1", "#t-2-2"]);
		const textO2 = gsap.utils.toArray(["#o-2"]);
		const textR2 = gsap.utils.toArray(["#r-2-1", "#r-2-2", "#r-2-3"]);
		const textY = gsap.utils.toArray(["#y-1-1", "#y-1-2", "#y-1-3"]);

		const textTl = gsap
			.timeline({
				defaults: { duration: 1.5, ease: "power2.out" },
				// paused: true,
			})
			.from(
				textP1,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			)
			.from(
				textR1,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			)
			.from(
				textO1,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			)
			.from(
				textJ,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			)
			.from(
				textE,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			)
			.from(
				textC,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			)
			.from(
				textT1,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			)
			.from(
				textS,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			)
			.from(
				textT2,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			)
			.from(
				textO2,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			)
			.from(
				textR2,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			)
			.from(
				textY,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			);

		topProjectTl = gsap
			.timeline({
				defaults: { duration: 1.5, ease: "power2.out" },
				paused: true,
			})
			.to("#project", {
				duration: 1.75,
				autoAlpha: 1,
			})
			// .from(".top-project__bg", {
			// 	duration: 1,
			// 	autoAlpha: 0,
			// 	// ease: "expo.inOut",
			// })
			//　line animation
			.add(textTl, "<50%")
			.from(
				".top-project__lead-sub-title",
				{
					autoAlpha: 0,
				},
				"<60%"
			);
	});

	mm.add("(max-width: 767px)", () => {
		const textP1 = gsap.utils.toArray(["#p-1-1-sp", "#p-1-2-sp"]);
		const textR1 = gsap.utils.toArray(["#r-1-1-sp", "#r-1-2-sp", "#r-1-3-sp"]);
		const textO1 = gsap.utils.toArray(["#o-1-sp"]);
		const textJ = gsap.utils.toArray(["#j-sp"]);
		const textE = gsap.utils.toArray(["#e-1-sp", "#e-2-sp"]);
		const textC = gsap.utils.toArray(["#c-sp"]);
		const textT1 = gsap.utils.toArray(["#t-1-1-sp", "#t-1-2-sp"]);
		const textS = gsap.utils.toArray(["#s-sp"]);
		const textT2 = gsap.utils.toArray(["#t-2-1-sp", "#t-2-2-sp"]);
		const textO2 = gsap.utils.toArray(["#o-2-sp"]);
		const textR2 = gsap.utils.toArray(["#r-2-1-sp", "#r-2-2-sp", "#r-2-3-sp"]);
		const textY = gsap.utils.toArray(["#y-1-1-sp", "#y-1-2-sp", "#y-1-3-sp"]);

		const textTl = gsap
			.timeline({
				defaults: { duration: 1.5, ease: "power2.out" },
				// paused: true,
			})
			.from(
				textP1,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			)
			.from(
				textR1,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			)
			.from(
				textO1,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			)
			.from(
				textJ,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			)
			.from(
				textE,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			)
			.from(
				textC,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			)
			.from(
				textT1,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			)
			.from(
				textS,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			)
			.from(
				textT2,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			)
			.from(
				textO2,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			)
			.from(
				textR2,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			)
			.from(
				textY,
				{
					drawSVG: 0,
				},
				`<${gsap.utils.random([0, 10])}%`
			);

		topProjectTl = gsap
			.timeline({
				defaults: { duration: 1.5, ease: "power2.out" },
				paused: true,
			})
			.to("#project", {
				duration: 1.75,
				autoAlpha: 1,
			})
			// .from(".top-project__bg", {
			// 	duration: 1,
			// 	autoAlpha: 0,
			// 	// ease: "expo.inOut",
			// })
			//　line animation
			.add(textTl, "<50%")
			.from(
				".top-project__lead-sub-title",
				{
					autoAlpha: 0,
				},
				"<60%"
			);

		spProjectLinkTl = gsap
			.timeline({
				defaults: { duration: 1.25, ease: "power2.out" },
				paused: true,
			})
			.to("[data-ep-sp='projectLink']", {
				autoAlpha: 1,
			})
			.fromTo(
				"[data-ep-sp='projectLink'] .link-section__title, [data-ep-sp='projectLink'] .link-section__arrow",
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

	tweenArray.push(topProjectTl);
};

export { topProjectInit, topProjectTl, spProjectLinkTl };
