import { touchDevice, remUnit, spmql, header, noscroll } from "../vars";
import { gsap, ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger, Observer);
import { video } from "../topVideo";

let topProjectTl;

const topProjectInit = () => {
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

	topProjectTl = gsap
		.timeline({
			defaults: { duration: 1.5, ease: "power2.out" },
			paused: true,
			onComplete: () => {
				window.removeEventListener("touchmove", noscroll, {
					passive: false,
				});
				window.removeEventListener("wheel", noscroll, { passive: false });
			},
			onReverseComplete: () => {
				window.removeEventListener("touchmove", noscroll, {
					passive: false,
				});
				window.removeEventListener("wheel", noscroll, { passive: false });
			},
		})
		.to("#project", {
			autoAlpha: 1,
		})
		//　line animation
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
		)
		.from(
			".top-project__bg",
			{
				duration: 3,
				autoAlpha: 0,
				// ease: "expo.inOut",
			},
			"<50%"
		)
		.from(".top-project__lead-sub-title", {
			autoAlpha: 0,
		});
};

export { topProjectInit, topProjectTl };
