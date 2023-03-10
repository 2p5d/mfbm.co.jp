import { touchDevice, remUnit, spmql, header, noscroll } from "../vars";
import {
	animating,
	topScrollObserver,
	spSectionTransition,
} from "../topSections";
import { gsap, ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger, Observer);
/* 
		---------- prologue ----------
	*/

let prologueFirstTl,
	prologueBackFromPrologue2Tl,
	prologueBackTl,
	topLeadTl,
	prologue2St,
	prologue2stInitTl,
	prologueRepeatTween;

const prologueInit = () => {
	let section01Items;

	const section01Title = document.querySelector(".top-section__title");
	const section01Scroll = document.querySelector(".ep__section-scroll");

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

	let mm = gsap.matchMedia();

	mm.add("(min-width: 768px)", () => {
		section01Items = gsap.utils.toArray([
			".header__menu-button",
			".header__link",
			".ep__navigation-link",
			".ep__top-section-5minute",
		]);

		// prologue2stInitTl = gsap
		// 	.timeline({
		// 		// paused: true,
		// 	})
		// 	.set(document.documentElement, {
		// 	overscrollBehavior: "none",
		// })
		// 	// .set(".top-lead__body", {
		// 	// 	marginTop: "50vh",
		// 	// 	marginBottom: "100vh",
		// 	// })
		// 	.set("#prologue2", {
		// 		"--top-scroll-bar": "none",
		// 		overflowY: "auto",
		// 		overscrollBehavior: "none",
		// 	})
		// 	.set(".top-lead__title", {
		// 		position: "fixed",
		// 		pointerEvents: "none",
		// 	});

		/*
		prologue2stInitTlはtopLeadTlのoncompleteで開始するので、
		スクロールするための余白分ははじめからつけて置く（のでエクスポートもしない）
	*/
		// const prologue2stContainerInit = gsap.set(".top-lead__body", {
		// 	marginTop: "40vh", // startの値と合わせる
		// 	marginBottom: "100vh",
		// });

		// prologue2St = ScrollTrigger.create({
		// 	trigger: ".top-lead__body",
		// 	start: "top 40%",
		// 	end: "bottom top",
		// 	// markers: true,
		// 	scroller: "#prologue2",
		// 	onLeave: () => {
		// 		topScrollObserver.enable();
		// 		animating.flag = false;
		// 	},
		// 	onLeaveBack: () => {
		// 		topScrollObserver.enable();
		// 		animating.flag = false;
		// 	},
		// });
		// prologue2St.disable();

		prologueBackTl = gsap
			.timeline({
				defaults: { duration: 1.25, ease: "power2.out" },
				paused: true,
			})
			.to(
				"#prologue",
				{
					autoAlpha: 1,
				},
				"<"
			)
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
					".ep__top-section-5minute",
					section01Scroll,
				],
				{
					autoAlpha: 1,
				},
				"<25%"
			);
	});

	mm.add("(max-width: 767px)", () => {
		section01Items = gsap.utils.toArray([
			".header__menu-button",
			".header__link",
			".ep__top-section-5minute",
		]);

		/*
		prologue2stInitTlはtopLeadTlのoncompleteで開始するので、
		スクロールするための余白分ははじめからつけて置く（のでエクスポートもしない）
	*/
		const prologue2stContainerInit = gsap.set(".top-lead", {
			paddingBottom: "60vh",
		});

		prologue2stInitTl = gsap
			.timeline({
				// paused: true,
			})
			.set(document.documentElement, {
				overscrollBehavior: "none",
			})
			.set("#prologue2", {
				"--top-scroll-bar": "none",
				overflowY: "auto",
				overscrollBehavior: "none",
			});

		prologue2St = ScrollTrigger.create({
			trigger: ".top-lead",
			start: "top top",
			end: "bottom bottom",
			// markers: true,
			scroller: "#prologue2",
			onLeave: () => {
				spSectionTransition("about", 1, 2);
				topScrollObserver.enable();
			},
			onLeaveBack: () => {
				spSectionTransition("prologue", -1, 0);
				topScrollObserver.enable();
			},
		});
		// prologue2St.disable();
	});

	// later, if we need to revert all the animations/ScrollTriggers...
	// mm.revert();

	prologueFirstTl = gsap
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

	prologueBackFromPrologue2Tl = gsap
		.timeline({
			defaults: { duration: 1.25, ease: "power2.out" },
			paused: true,
		})
		.set("#prologue", {
			autoAlpha: 1,
		})
		.to([".top-lead__title img", ".top-lead__body"], {
			y: 40,
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
				".ep__top-section-5minute",
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
				"topLeadTl";
			},
		})
		.set("#prologue2", {
			autoAlpha: 1,
		})
		.to([".top-section__title", ".header__link", ".ep__top-section-5minute"], {
			autoAlpha: 0,
		})
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
				y: 60,
				autoAlpha: 0,
			},
			{
				y: 0,
				autoAlpha: 1,
			},
			"<25%"
		);
};

export {
	prologueInit,
	prologueFirstTl,
	prologueBackTl,
	prologueBackFromPrologue2Tl,
	topLeadTl,
	prologue2stInitTl,
	prologue2St,
	prologueRepeatTween,
};
