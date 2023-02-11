import { touchDevice, remUnit, spmql, header, noscroll } from "../vars";
import { tweenArray } from "../topSections";
import { gsap, ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger, Observer);
import { video } from "../topVideo";

let topJobTl;

const topJobInit = () => {
	topJobTl = gsap
		.timeline({
			defaults: { duration: 1.25, ease: "power2.out" },
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
		.to("#job", {
			autoAlpha: 1,
		})
		.fromTo(
			".top-job__peoples-item img",
			{
				autoAlpha: 0,
				y: () => {
					return remUnit(3);
				},
			},
			{
				duration: 0.75,
				ease: "power2.out",
				autoAlpha: 1,
				y: 0,
				stagger: {
					// wrap advanced options in an object
					each: 0.1,
					from: "random",
					// grid: "auto",
					ease: "power2.in",
				},
			},
			"<25%"
		)
		.fromTo(
			".top-job__lead",
			{
				autoAlpha: 0,
				x: "50%",
			},
			{
				duration: 1.125,
				ease: "power2.out",
				autoAlpha: 1,
				x: 0,
			}
		)
		.fromTo(
			".top-job__lead-title",
			{
				autoAlpha: 0,
				y: "5rem",
			},
			{
				duration: 0.75,
				ease: "power2.out",
				autoAlpha: 1,
				y: 0,
			},
			"<50%"
		)
		.fromTo(
			".top-job__lead-body p",
			{
				autoAlpha: 0,
				y: "5rem",
			},
			{
				duration: 0.75,
				ease: "power2.out",
				autoAlpha: 1,
				y: 0,
				stagger: 0.1,
			},
			"<35%"
		);
	tweenArray.push(topJobTl);
};

export { topJobInit, topJobTl };
