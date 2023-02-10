import { touchDevice, remUnit, spmql, header, noscroll } from "../vars";
import { gsap, ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger, Observer);
import { video } from "../topVideo";

let topPersonTl;

const topPersonInit = () => {
	gsap.set(".persons__bg", {
		autoAlpha: 0,
	});

	topPersonTl = gsap
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
		.set("[data-ep='person']", {
			autoAlpha: 1,
		})
		.fromTo(
			".persons__solo-item",
			{
				clipPath: "inset(100% 0 0 0)",
			},
			{
				duration: 0.5,
				ease: "power2.out",
				clipPath: "inset(0% 0 0 0)",
				stagger: {
					// wrap advanced options in an object
					each: 0.25,
					// from: "random",
					// grid: "auto",
					ease: "none",
				},
			},
			"<"
		)
		.to(
			".persons__solo",
			{
				duration: 0.75,
				ease: "power2.inOut",
				clipPath: "inset(0 0 100% 0)",
			},
			"<+=1.75"
		)
		.set(
			".persons__bg",
			{
				autoAlpha: 1,
			},
			"<"
		)
		.set(".persons__title", {
			autoAlpha: 1,
		})
		.fromTo(
			".persons__title__bg",
			{
				clipPath: "inset(0 0 100% 0)",
			},
			{
				duration: 1.125,
				clipPath: "inset(0 0 0% 0)",
			}
		)
		.to(
			".persons__bg-images-wrap",
			{
				scale: 0.8424,
				transformOrigin: "bottom",
				yPercent: 4,
			},
			"<"
		)
		.to(
			".persons__bg-images-wrap img[src*='person-all-01']",
			{
				yPercent: 9,
				xPercent: -3,
			},
			"<"
		)
		.to(
			".persons__bg-images-wrap img[src*='person-all-02']",
			{
				yPercent: 9,
				xPercent: 1,
			},
			"<"
		)
		.to(
			".persons__bg-images-wrap img[src*='person-all-03']",
			{
				yPercent: 3,
			},
			"<"
		)
		.to(
			".persons__bg-images-wrap img[src*='person-all-04']",
			{
				xPercent: 13,
				yPercent: -7,
			},
			"<"
		)
		.to(
			".persons__bg-images-wrap img[src*='person-all-05']",
			{
				xPercent: -10,
			},
			"<"
		)
		.fromTo(
			".persons__title-text",
			{
				autoAlpha: 0,
			},
			{
				duration: 0.75,
				ease: "power2.out",
				autoAlpha: 1,
			},
			"<50%"
		);
};

export { topPersonInit, topPersonTl };
