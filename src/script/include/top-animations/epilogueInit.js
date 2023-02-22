import { touchDevice, remUnit, spmql, header, noscroll } from "../vars";
import { gsap, ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger, Observer);

let epilogueTl;

const epilogueInit = () => {
	epilogueTl = gsap
		.timeline({
			defaults: { duration: 1.25, ease: "power2.out" },
			paused: true,
		})
		.to("#epilogue", {
			duration: 2,
			autoAlpha: 1,
		})
		.fromTo(
			".top-epilogue__lead-title",
			{
				autoAlpha: 0,
				y: () => {
					return remUnit(3);
				},
			},
			{
				duration: 1,
				ease: "power2.out",
				autoAlpha: 1,
				y: 0,
			},
			"<25%"
		)
		.fromTo(
			".top-epilogue__lead-body p",
			{
				autoAlpha: 0,
				y: () => {
					return remUnit(3);
				},
			},
			{
				duration: 1.5,
				ease: "power2.out",
				autoAlpha: 1,
				y: 0,
				stagger: 0.25,
			},
			"<25%"
		);
};

export { epilogueInit, epilogueTl };
