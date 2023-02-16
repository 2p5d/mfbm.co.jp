import { touchDevice, remUnit, spmql, header, noscroll } from "../vars";
import { tweenArray } from "../topSections";
import { gsap, ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger, Observer);

let aboutTl, spAbout2Tl, spAboutLinkTl;

const aboutInit = () => {
	let mm = gsap.matchMedia();

	mm.add("(min-width: 768px)", () => {
		aboutTl = gsap
			.timeline({
				defaults: { duration: 1.25, ease: "power2.out", force3D: true },
				paused: true,
			})
			.to("#about", {
				autoAlpha: 1,
			})
			.fromTo(
				".top-about__bg",
				{
					autoAlpha: 0,
				},
				{
					duration: 2,
					autoAlpha: 1,
				},
				"<25%"
			)
			.fromTo(
				".top-about__blocks-item:nth-of-type(1) img",
				{
					autoAlpha: 0,
					y: () => remUnit(-20),
				},
				{
					duration: 2,
					ease: "power4.inOut",
					y: 0,
					autoAlpha: 1,
				},
				"<"
			)
			.fromTo(
				".top-about__blocks-item:nth-of-type(2) img",
				{
					autoAlpha: 0,
					y: () => remUnit(-10),
					x: () => remUnit(10),
				},
				{
					duration: 2,
					ease: "power4.inOut",
					y: 0,
					x: 0,
					autoAlpha: 1,
				},
				"<"
			)
			.fromTo(
				".top-about__blocks-item:nth-of-type(3) img",
				{
					autoAlpha: 0,
					y: () => remUnit(10),
					x: () => remUnit(10),
				},
				{
					duration: 2,
					ease: "power4.inOut",
					y: 0,
					x: 0,
					autoAlpha: 1,
				},
				"<"
			)
			.fromTo(
				".top-about__blocks-item:nth-of-type(4) img",
				{
					autoAlpha: 0,
					y: () => remUnit(20),
					x: () => remUnit(20),
				},
				{
					duration: 2,
					ease: "power4.inOut",
					y: 0,
					x: 0,
					autoAlpha: 1,
				},
				"<"
			)
			.fromTo(
				".top-about__blocks-item:nth-of-type(5) img",
				{
					autoAlpha: 0,
					y: () => remUnit(20),
				},
				{
					duration: 2,
					ease: "power4.inOut",
					y: 0,
					x: 0,
					autoAlpha: 1,
				},
				"<"
			)
			.fromTo(
				".top-about__blocks-item:nth-of-type(6) img",
				{
					autoAlpha: 0,
					y: () => remUnit(10),
					x: () => remUnit(-10),
				},
				{
					duration: 2,
					ease: "power4.inOut",
					y: 0,
					x: 0,
					autoAlpha: 1,
				},
				"<"
			)
			.fromTo(
				".top-about__blocks-item:nth-of-type(7) img",
				{
					autoAlpha: 0,
					y: () => remUnit(-10),
					x: () => remUnit(-10),
				},
				{
					duration: 2,
					ease: "power4.inOut",
					y: 0,
					x: 0,
					autoAlpha: 1,
				},
				"<"
			)
			.fromTo(
				".top-about__bg-fill",
				{
					clipPath: "inset(0 0 0 50%)",
				},
				{
					duration: 4,
					ease: "power4.inOut",
					clipPath: "inset(0 0 0 0%)",
				},
				"<"
			)
			.fromTo(
				".top-about__lead__title",
				{
					autoAlpha: 0,
					y: "10vh",
				},
				{
					autoAlpha: 1,
					y: 0,
				},
				"<50%"
			)
			.fromTo(
				".top-about__lead__body p",
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
	mm.add("(max-width: 767px)", () => {
		aboutTl = gsap
			.timeline({
				defaults: { duration: 1.25, ease: "power2.out", force3D: true },
				paused: true,
			})
			.set("#about", {
				autoAlpha: 1,
			})
			.fromTo(
				".top-about__bg",
				{
					autoAlpha: 0,
				},
				{
					duration: 2,
					autoAlpha: 1,
				},
				"<25%"
			)
			.fromTo(
				".top-about__blocks-item:nth-of-type(1) img",
				{
					autoAlpha: 0,
					y: () => remUnit(-20),
				},
				{
					duration: 2,
					ease: "power4.inOut",
					y: 0,
					autoAlpha: 1,
				},
				"<"
			)
			.fromTo(
				".top-about__blocks-item:nth-of-type(2) img",
				{
					autoAlpha: 0,
					y: () => remUnit(-10),
					x: () => remUnit(10),
				},
				{
					duration: 2,
					ease: "power4.inOut",
					y: 0,
					x: 0,
					autoAlpha: 1,
				},
				"<"
			)
			.fromTo(
				".top-about__blocks-item:nth-of-type(3) img",
				{
					autoAlpha: 0,
					y: () => remUnit(10),
					x: () => remUnit(10),
				},
				{
					duration: 2,
					ease: "power4.inOut",
					y: 0,
					x: 0,
					autoAlpha: 1,
				},
				"<"
			)
			.fromTo(
				".top-about__blocks-item:nth-of-type(4) img",
				{
					autoAlpha: 0,
					y: () => remUnit(20),
					x: () => remUnit(20),
				},
				{
					duration: 2,
					ease: "power4.inOut",
					y: 0,
					x: 0,
					autoAlpha: 1,
				},
				"<"
			)
			.fromTo(
				".top-about__blocks-item:nth-of-type(5) img",
				{
					autoAlpha: 0,
					y: () => remUnit(20),
				},
				{
					duration: 2,
					ease: "power4.inOut",
					y: 0,
					x: 0,
					autoAlpha: 1,
				},
				"<"
			)
			.fromTo(
				".top-about__blocks-item:nth-of-type(6) img",
				{
					autoAlpha: 0,
					y: () => remUnit(10),
					x: () => remUnit(-10),
				},
				{
					duration: 2,
					ease: "power4.inOut",
					y: 0,
					x: 0,
					autoAlpha: 1,
				},
				"<"
			)
			.fromTo(
				".top-about__blocks-item:nth-of-type(7) img",
				{
					autoAlpha: 0,
					y: () => remUnit(-10),
					x: () => remUnit(-10),
				},
				{
					duration: 2,
					ease: "power4.inOut",
					y: 0,
					x: 0,
					autoAlpha: 1,
				},
				"<"
			)
			.fromTo(
				".top-about__bg-fill",
				{
					clipPath: "inset(0 0 0 50%)",
				},
				{
					duration: 4,
					ease: "power4.inOut",
					clipPath: "inset(0 0 0 0%)",
				},
				"<"
			)
			.fromTo(
				".top-about__lead__title",
				{
					autoAlpha: 0,
					y: "10vh",
				},
				{
					autoAlpha: 1,
					y: 0,
				},
				"<50%"
			);

		spAbout2Tl = gsap
			.timeline({
				defaults: { duration: 1.25, ease: "power2.out" },
				paused: true,
			})
			.to(".top-about__lead__body", {
				autoAlpha: 1,
			})
			.fromTo(
				".top-about__lead__body p",
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

		spAboutLinkTl = gsap
			.timeline({
				defaults: { duration: 1.25, ease: "power2.out" },
				paused: true,
			})
			.to("[data-ep-sp='aboutLink']", {
				autoAlpha: 1,
			})
			.fromTo(
				"[data-ep-sp='aboutLink'] .link-section__title, [data-ep-sp='aboutLink'] .link-section__arrow",
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

	tweenArray.push(aboutTl);
};

export { aboutInit, aboutTl, spAbout2Tl, spAboutLinkTl };
