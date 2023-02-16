import { touchDevice, remUnit, spmql, header, noscroll } from "../vars";
import { tweenArray } from "../topSections";
import { gsap, ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger, Observer);

let topJobTl, spJob2Tl, spJobLinkTl;

const topJobInit = () => {
	let mm = gsap.matchMedia();

	mm.add("(min-width: 768px)", () => {
		topJobTl = gsap
			.timeline({
				defaults: { duration: 1.25, ease: "power2.out" },
				paused: true,
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
	});

	mm.add("(max-width: 767px)", () => {
		topJobTl = gsap
			.timeline({
				defaults: { duration: 1.25, ease: "power2.out" },
				paused: true,
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
					y: "100%",
				},
				{
					duration: 1.125,
					ease: "power2.out",
					autoAlpha: 1,
					y: 0,
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
			);

		spJob2Tl = gsap
			.timeline({
				defaults: { duration: 1.25, ease: "power2.out" },
				paused: true,
			})
			.to(".top-job__lead-body", {
				autoAlpha: 1,
			})
			.fromTo(
				".top-job__lead-body p",
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

		spJobLinkTl = gsap
			.timeline({
				defaults: { duration: 1.25, ease: "power2.out" },
				paused: true,
			})
			.to("[data-ep-sp='jobLink']", {
				autoAlpha: 1,
			})
			.fromTo(
				"[data-ep-sp='jobLink'] .link-section__title, [data-ep-sp='jobLink'] .link-section__arrow",
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

	tweenArray.push(topJobTl);
};

export { topJobInit, topJobTl, spJob2Tl, spJobLinkTl };
