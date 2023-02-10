import { touchDevice, remUnit, spmql, header, noscroll } from "../vars";
import { gsap, ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger, Observer);
import { video } from "../topVideo";

/* 
		---------- prologue ----------
	*/

let prologueInTl, prologueBackTl, topLeadTl;

const prologueInit = () => {
	const section01Title = document.querySelector(".top-section__title");
	const section01Scroll = document.querySelector(".top-section__scroll");
	const section01Items = gsap.utils.toArray([
		".header__menu-button",
		".header__link",
		".ep__navigation",
		".top-section__5minute",
	]);

	prologueInTl = gsap
		.timeline({
			defaults: { duration: 1.25, ease: "power2.out" },
			paused: true,
			onComplete: () => {
				window.removeEventListener("touchmove", noscroll, {
					passive: false,
				});
				window.removeEventListener("wheel", noscroll, { passive: false });
			},
		})
		.set("[data-ep='prologue']", {
			autoAlpha: 1,
		})
		.fromTo(
			section01Title,
			{
				autoAlpha: 0,
			},
			{
				autoAlpha: 1,
			}
		)
		.fromTo(
			section01Items,
			{
				autoAlpha: 0,
			},
			{
				autoAlpha: 1,
				stagger: 0.1,
			},
			"<50%"
		)
		.fromTo(
			section01Scroll,
			{
				autoAlpha: 0,
			},
			{
				autoAlpha: 1,
			},
			"<"
		);

	// gsap.set(".top-lead__body-inner", {
	// 	marginTop: "20vh",
	// 	// onComplete: () => {
	// 	// 	ScrollTrigger.refresh();
	// 	// },
	// });

	prologueBackTl = gsap
		.timeline({
			defaults: { duration: 1.25, ease: "power2.out" },
			paused: true,
			onComplete: () => {
				window.removeEventListener("touchmove", noscroll, {
					passive: false,
				});
				window.removeEventListener("wheel", noscroll, { passive: false });
			},
		})
		.to([".top-lead__title img"], {
			y: "10vh",
			autoAlpha: 0,
		})
		.to(
			".ep__01-02-bg",
			{
				filter: "blur(0px)",
			},
			"<"
		)
		.to(
			[
				section01Title,
				".header__link",
				".top-section__5minute",
				section01Scroll,
			],
			{
				autoAlpha: 1,
			},
			"<25%"
		);

	topLeadTl = gsap
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
		.set("[data-ep='prologue-2']", {
			autoAlpha: 1,
		})
		.to(
			[
				".top-section__title",
				".header__link",
				".top-section__5minute",
				".top-section__scroll",
			],
			{
				autoAlpha: 0,
			}
		)
		.to(
			".ep__01-02-bg",
			{
				filter: "blur(30px)",
			},
			"<"
		)
		.fromTo(
			[".top-lead__title img"],
			{
				y: "10vh",
				autoAlpha: 0,
			},
			{
				y: 0,
				autoAlpha: 1,
			},
			"<25%"
		);

	const topLeadBodyTl1 = gsap.timeline({
		scrollTrigger: {
			id: "topLeadBodyTl1",
			trigger: "#prologue-2",
			start: "top top",
			end: "25% top",
			scrub: true,
			// markers: true,
			toggleActions: "play reverse play reverse",
		},
	});

	const topLeadBodyTl2 = gsap.timeline({
		scrollTrigger: {
			id: "topLeadBodyTl2",
			trigger: "#prologue-2",
			start: "75% top",
			end: "bottom top-=200px",
			scrub: true,
			// markers: true,
			toggleActions: "play reverse play reverse",
		},
	});

	gsap.set("#prologue-2 .top-lead__body", {
		opacity: 0,
	});

	topLeadBodyTl1.to("#prologue-2 .top-lead__body", {
		opacity: 1,
		duration: 0.5,
	});

	topLeadBodyTl2.to("#prologue-2 .top-lead__body", {
		opacity: 0,
		duration: 0.5,
	});
};

export { prologueInit, prologueInTl, prologueBackTl, topLeadTl };
