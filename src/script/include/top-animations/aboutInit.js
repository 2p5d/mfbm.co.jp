import { touchDevice, remUnit, spmql, header, noscroll } from "../vars";
import { tweenArray } from "../topSections";
import { gsap, ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger, Observer);
import { video } from "../topVideo";

let aboutTl;

const aboutInit = () => {
	aboutTl = gsap
		.timeline({
			defaults: { duration: 1.25, ease: "power2.out" },
			paused: true,
			onComplete: () => {
				if (video) {
					video.pause();
				}
				window.removeEventListener("touchmove", noscroll, {
					passive: false,
				});
				window.removeEventListener("wheel", noscroll, { passive: false });
			},
			onReverseComplete: () => {
				if (video) {
					video.play();
				}
				window.removeEventListener("touchmove", noscroll, {
					passive: false,
				});
				window.removeEventListener("wheel", noscroll, { passive: false });
			},
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
				y: () => remUnit(24),
				x: () => remUnit(24),
			},
			{
				duration: 2,
				ease: "power4.inOut",
				y: 0,
				x: 0,
			},
			"<"
		)
		.fromTo(
			".top-about__bg-fill",
			{
				// scale: "1.4",
				scale: "1",
			},
			{
				duration: 0.75,
				ease: "none",
				scale: "3",
			},
			"> .25"
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
			"<25%"
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
	tweenArray.push(aboutTl);
};

export { aboutInit, aboutTl };
