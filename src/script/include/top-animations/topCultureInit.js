import { touchDevice, remUnit, spmql, header, noscroll } from "../vars";
import { tweenArray } from "../topSections";
import { gsap, ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger, Observer);
import { video } from "../topVideo";

let topCultureTl;

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
	});

	tweenArray.push(topCultureTl);
};

export { topCultureInit, topCultureTl };
