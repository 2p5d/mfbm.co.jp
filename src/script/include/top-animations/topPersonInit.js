import { touchDevice, remUnit, spmql, header, noscroll } from "../vars";
import { tweenArray } from "../topSections";
import { gsap, ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger, Observer);

let topPersonTl, spPersonLinkTl;

const topPersonInit = () => {
	gsap.set(".persons__bg", {
		autoAlpha: 0,
	});

	let mm = gsap.matchMedia();

	mm.add("(min-width: 768px)", () => {
		topPersonTl = gsap
			.timeline({
				defaults: { duration: 1.25, ease: "power2.out" },
				paused: true,
			})
			.fromTo(
				"#person",
				{
					autoAlpha: 0,
				},
				{
					autoAlpha: 1,
				}
			)
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
				"<25%"
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
	});

	mm.add("(max-width: 767px)", () => {
		topPersonTl = gsap
			.timeline({
				defaults: { duration: 1.25, ease: "power2.out" },
				paused: true,
			})
			.to("#person", {
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
				"<25%"
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
					scale: 0.9,
					transformOrigin: "bottom",
					yPercent: 10,
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

		spPersonLinkTl = gsap
			.timeline({
				defaults: { duration: 1.25, ease: "power2.out" },
				paused: true,
			})
			.to("[data-ep-sp='personLink']", {
				autoAlpha: 1,
			})
			.fromTo(
				"[data-ep-sp='personLink'] .link-section__title, [data-ep-sp='personLink'] .link-section__arrow",
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
};

export { topPersonInit, topPersonTl, spPersonLinkTl };
