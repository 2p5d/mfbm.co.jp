import { touchDevice, remUnit, spmql, header, noscroll } from "../vars";
import { gsap, ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger, Observer);
import { video } from "../topVideo";

/* 
		---------- prologue ----------
	*/

let mfbmFieldTl;

const mfbmFieldInit = () => {
	mfbmFieldTl = gsap
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
		.fromTo(
			"[data-ep='business']",
			{
				autoAlpha: 0,
			},
			{
				autoAlpha: 1,
			}
		)
		.fromTo(
			".mfbm-field__map img[src*='top-section-03-park-building']",
			{
				autoAlpha: 0,
				y: () => {
					return remUnit(-7);
				},
			},
			{
				duration: 1,
				ease: "power2.inOut",
				autoAlpha: 1,
				y: 0,
				force3D: true,
			},
			"<50%"
		)
		.fromTo(
			".mfbm-field__map img[src*='top-section-03-park-grass']",
			{
				autoAlpha: 0,
			},
			{
				duration: 0.65,
				ease: "power2.out",
				autoAlpha: 1,
			},
			"<25%"
		)
		.fromTo(
			".mfbm-field__map img[src*='top-section-03-park-people']",
			{
				autoAlpha: 0,
			},
			{
				duration: 0.65,
				ease: "power2.out",
				autoAlpha: 1,
			},
			"<25%"
		)
		.fromTo(
			".mfbm-field__map img[src*='top-section-03-building-02']",
			{
				autoAlpha: 0,
				y: () => {
					return remUnit(-7);
				},
			},
			{
				duration: 1.5,
				ease: "power2.inOut",
				autoAlpha: 1,
				y: 0,
				force3D: true,
			},
			"<50%"
		)
		.fromTo(
			".mfbm-field__map img[src*='top-section-03-building-03']",
			{
				autoAlpha: 0,
				y: () => {
					return remUnit(-7);
				},
			},
			{
				duration: 0.85,
				ease: "power2.inOut",
				autoAlpha: 1,
				y: 0,
				force3D: true,
			},
			"<50%"
		)
		.fromTo(
			".mfbm-field__map-inner",
			{
				x: 0,
			},
			{
				duration: 1.25,
				ease: "power2.inOut",
				x: "40vw",
				force3D: true,
			},
			">"
		)
		.fromTo(
			".mfbm-field__lead-title",
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
			".mfbm-field__lead-body p",
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
};

export { mfbmFieldInit, mfbmFieldTl };