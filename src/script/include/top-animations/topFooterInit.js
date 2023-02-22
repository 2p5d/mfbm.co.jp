import { touchDevice, remUnit, spmql, header, noscroll } from "../vars";
import {
	animating,
	topScrollObserver,
	spSectionTransition,
	pcSectionTransition,
} from "../topSections";
import { gsap, ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger, Observer);

/* 
		---------- footer ----------
	*/

let topFooterSt,
	topFooterInitTl,
	sectionScrollTween,
	sectionBottomGradientTween;

const topFooterInit = () => {
	topFooterInitTl = gsap
		.timeline({
			paused: true,
		})
		.set(document.documentElement, {
			overscrollBehavior: "none",
		})
		.set(".footer", {
			marginTop: "100vh",
			// marginTop: "100dvh", // 旧バージョンで対応してないと設定されないので一旦消す
		})
		.set("#topFooter", {
			autoAlpha: 1,
			"--top-scroll-bar": "none",
			overflowY: "auto",
			overscrollBehavior: "none",
		});

	sectionScrollTween = gsap.to(".ep__section-scroll", {
		paused: true,
		duration: 0.5,
		autoAlpha: 0,
		ease: "power2.out",
	});
	sectionBottomGradientTween = gsap.to(".ep__bottom-gradient", {
		paused: true,
		duration: 0.5,
		autoAlpha: 0,
		ease: "power2.out",
	});

	topFooterSt = ScrollTrigger.create({
		trigger: "#footer",
		start: "top bottom",
		end: "bottom top",
		// markers: true,
		scroller: "#topFooter",

		onEnter: () => {
			sectionScrollTween.restart();
			sectionBottomGradientTween.restart();
		},
		onLeaveBack: () => {
			console.log("test");
			/*
				pc・sp関数切替
			*/
			if (spmql.matches) {
				spSectionTransition("epilogue", -1, 8);
			} else {
				pcSectionTransition("epilogue", -1, 8);
			}
			topScrollObserver.enable();
			sectionScrollTween.reverse();
			sectionBottomGradientTween.reverse();
		},
	});
	topFooterSt.disable();

	// tweenArray.push(prologueInTl, topLeadTl);
};

export {
	topFooterInit,
	topFooterInitTl,
	topFooterSt,
	sectionScrollTween,
	sectionBottomGradientTween,
};
