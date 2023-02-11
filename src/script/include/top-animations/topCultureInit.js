import { touchDevice, remUnit, spmql, header, noscroll } from "../vars";
import { gsap, ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger, Observer);
import { video } from "../topVideo";

let topCultureTl;

const topCultureInit = () => {
	topCultureTl = gsap
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
};

export { topCultureInit, topCultureTl };
