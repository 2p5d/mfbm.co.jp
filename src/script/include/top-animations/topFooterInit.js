import { touchDevice, remUnit, spmql, header, noscroll } from "../vars";
import { tweenArray, animating, topScrollObserver } from "../topSections";
import { gsap, ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger, Observer);

/* 
		---------- prologue ----------
	*/

let topFooterSt, topFooterInitTl;

const topFooterInit = () => {
	topFooterInitTl = gsap
		.timeline({
			paused: true,
		})
		.set(".footer", {
			marginTop: "100vh",
		})
		.set("#topFooter", {
			autoAlpha: 1,
			"--top-scroll-bar": "none",
			overflowY: "auto",
		});

	// const topFooterContainerInit = gsap.set(".footer", {
	// 	marginTop: "100vh",
	// });

	const sectionScrollTween = gsap.to(".ep__section-scroll", {
		paused: true,
		duration: 0.75,
		autoAlpha: 0,
		ease: "power2.out",
	});

	const sectionBottomGradientTween = gsap.to(".ep__bottom-gradient", {
		paused: true,
		duration: 0.75,
		autoAlpha: 0,
		ease: "power2.out",
	});

	topFooterSt = ScrollTrigger.create({
		trigger: ".footer",
		start: "top bottom",
		end: "bottom top",
		// markers: true,
		scroller: "#topFooter",
		// onLeave: () => {
		// 	topScrollObserver.enable();
		// 	animating.flag = false;
		// },
		onEnter: () => {
			sectionScrollTween.restart();
			sectionBottomGradientTween.restart();
		},
		onLeaveBack: () => {
			topScrollObserver.enable();
			animating.flag = false;
			sectionScrollTween.reverse();
			sectionBottomGradientTween.reverse();
		},
		// onToggle: (self) => {
		// 	sectionChange(self.trigger);
		// },
	});
	topFooterSt.disable();

	// tweenArray.push(prologueInTl, topLeadTl);
};

export { topFooterInit, topFooterInitTl, topFooterSt };
