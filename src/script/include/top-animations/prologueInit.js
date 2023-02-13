import { touchDevice, remUnit, spmql, header, noscroll } from "../vars";
import { tweenArray, animating, topScrollObserver } from "../topSections";
import { gsap, ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger, Observer);
import { video } from "../topVideo";

/* 
		---------- prologue ----------
	*/

let prologueInTl,
	prologueBackTl,
	topLeadTl,
	prologue2St,
	prologue2stInitTl,
	prologueRepeatTween;

const prologueInit = () => {
	const section01Title = document.querySelector(".top-section__title");
	const section01Scroll = document.querySelector(".top-section__scroll");
	const section01Items = gsap.utils.toArray([
		".header__menu-button",
		".header__link",
		".ep__navigation",
		".top-section__5minute",
	]);

	prologueRepeatTween = gsap.to(
		"img[src*='top-5-minute-lines'],img[src*='top-5-minute-invert-lines']",
		{
			duration: 16,
			paused: true,
			transformOrigin: "center",
			rotate: 360,
			repeat: -1,
			ease: "none",
		}
	);
	prologueRepeatTween.play();

	let mm = gsap.matchMedia();

	mm.add("(min-width: 768px)", () => {
		prologue2stInitTl = gsap
			.timeline({
				paused: true,
			})
			// .set(".top-lead__body", {
			// 	marginTop: "50vh",
			// 	marginBottom: "100vh",
			// })
			.set("#prologue2", {
				"--top-scroll-bar": "none",
				overflowY: "auto",
			})
			.set(".top-lead__title", {
				position: "fixed",
				pointerEvents: "none",
			});

		/*
		prologue2stInitTlはtopLeadTlのoncompleteで開始するので、
		スクロールするための余白分ははじめからつけて置く（のでエクスポートもしない）
	*/
		const prologue2stContainerInit = gsap.set(".top-lead__body", {
			marginTop: "40vh", // startの値と合わせる
			marginBottom: "100vh",
		});

		prologue2St = ScrollTrigger.create({
			trigger: ".top-lead__body",
			start: "top 40%",
			end: "bottom top",
			// markers: true,
			scroller: "#prologue2",
			onLeave: () => {
				topScrollObserver.enable();
				animating.flag = false;
			},
			onLeaveBack: () => {
				topScrollObserver.enable();
				animating.flag = false;
			},
		});
		prologue2St.disable();
	});
	mm.add("(max-width: 767px)", () => {
		/*
		prologue2stInitTlはtopLeadTlのoncompleteで開始するので、
		スクロールするための余白分ははじめからつけて置く（のでエクスポートもしない）
	*/
		const prologue2stContainerInit = gsap.set(".top-lead", {
			marginBottom: "50vh",
		});

		prologue2stInitTl = gsap
			.timeline({
				paused: true,
			})
			// .set(".top-lead__body", {
			// 	marginTop: "50vh",
			// 	marginBottom: "100vh",
			// })
			.set("#prologue2", {
				"--top-scroll-bar": "none",
				overflowY: "auto",
			});

		prologue2St = ScrollTrigger.create({
			trigger: ".top-lead",
			start: "top top",
			end: "bottom bottom",
			// markers: true,
			scroller: "#prologue2",
			onLeave: () => {
				topScrollObserver.enable();
				animating.flag = false;
			},
			onLeaveBack: () => {
				topScrollObserver.enable();
				animating.flag = false;
			},
		});
		prologue2St.disable();
	});

	// later, if we need to revert all the animations/ScrollTriggers...
	// mm.revert();

	prologueInTl = gsap
		.timeline({
			defaults: { duration: 1.25, ease: "power2.out" },
			paused: true,
		})
		.set("#prologue", {
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
		})
		.to([".top-lead__title img", ".top-lead__body"], {
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
		})
		.set("#prologue2", {
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
			[".top-lead__title img", ".top-lead__body"],
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

	tweenArray.push(prologueInTl, topLeadTl, prologueRepeatTween);
};

export {
	prologueInit,
	prologueInTl,
	prologueBackTl,
	topLeadTl,
	prologue2stInitTl,
	prologue2St,
	prologueRepeatTween,
};
