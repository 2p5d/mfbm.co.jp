import { touchDevice, remUnit, spmql, header } from "./vars";
import { gsap, ScrollTrigger, Observer } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Observer);
import { video } from "./topVideo";

/* hero align height
==================================ove======================================== */
function topSections() {
	window.onbeforeunload = () => window.scrollTo(0, 0);

	// ScrollTrigger.normalizeScroll(true);

	const epsWrapper = document.querySelector(".ep"),
		eps = document.querySelectorAll(".ep > section > section"),
		scroller = document.createElement("div");

	/* 
		コーディングのしやすさから、段積みで組んだ各セクションをjsでposition:fixedなどして初期化する。
		スクロール監理は、通常のScrollTriggerと同じ使い方をしたいので、ダミーのdomを生成して、
		トリガーの位置を指定、または各セクションの高さとシンクロさせる。
	*/

	let epTriggers = []; // 各epのtimelineのtriggerに指定する配列
	const createTriggers = () => {
		scroller.className = "ep-scroller";
		scroller.style.pointerEvents = "none";
		epsWrapper.appendChild(scroller);

		let autoHeightEps = [];
		let autoTriggers = [];
		eps.forEach((ep, index) => {
			index = index + 1;
			const epTrigger = document.createElement("div");
			epTrigger.className = `ep-trigger-${index.toString().padStart(2, "0")}`;
			scroller.appendChild(epTrigger);
			epTriggers.push(epTrigger);

			switch (index) {
				case 1:
					epTrigger.style.height = "25vh";
					break;
				case 2:
					epTrigger.style.height = `${ep.clientHeight}px`;
					autoHeightEps.push(ep);
					autoTriggers.push(epTrigger);
					break;
				case 3:
					epTrigger.style.height = "150vh";
					break;
				case 4:
					epTrigger.style.height = "100vh";
					break;
				default:
					epTrigger.style.height = "100vh";
			}
		});

		/*
			ダミーのスクローラーとheight:autoのセクションの高さを同期
		*/

		ScrollTrigger.addEventListener("refreshInit", () => {
			autoTriggers.forEach((trigger, index) => {
				trigger.style.height = `${autoHeightEps[index].clientHeight}px`;
			});
		});
	};

	createTriggers();

	const epsInit = () => {
		eps.forEach((ep) => {
			gsap.set(ep, {
				position: "fixed",
				inset: "0",
				width: "100%",
				height: "100vh",
				autoAlpha: 0,
			});
		});
	};
	epsInit();

	/* 
		---------- ep01_01 ----------
	*/

	const section01Title = document.querySelector(".top-section__title");
	const section01Scroll = document.querySelector(".top-section__scroll");
	const section01Items = gsap.utils.toArray([
		".header__menu-button",
		".header__link",
		".top-sections__navigation",
		".top-section__5minute",
	]);

	const noscroll = (event) => {
		event.preventDefault();
	};

	const ep01_01InTl = gsap
		.timeline({
			defaults: { duration: 1.25, ease: "power2.out" },
			paused: true,
			onStart: () => {
				window.addEventListener("touchmove", noscroll, { passive: false });
				window.addEventListener("wheel", noscroll, { passive: false });
			},
			onComplete: () => {
				window.removeEventListener("touchmove", noscroll, {
					passive: false,
				});
				window.removeEventListener("wheel", noscroll, { passive: false });
			},
		})
		.set(eps[0], {
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

	gsap.set(".top-lead__body-inner", {
		marginTop: "20vh",
		// onComplete: () => {
		// 	ScrollTrigger.refresh();
		// },
	});

	const ep01_01BackTl = gsap
		.timeline({
			defaults: { duration: 1.25, ease: "power2.out" },
			paused: true,
			onStart: () => {
				window.addEventListener("touchmove", noscroll, { passive: false });
				window.addEventListener("wheel", noscroll, { passive: false });
			},
			onComplete: () => {
				window.removeEventListener("touchmove", noscroll, {
					passive: false,
				});
				window.removeEventListener("wheel", noscroll, { passive: false });
			},
		})
		.to([".top-lead__title img, .top-lead__body-inner"], {
			y: "10vh",
			autoAlpha: 0,
		})
		.to(
			".ep__01-bg",
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

	ScrollTrigger.create({
		trigger: epTriggers[0],
		start: "top center",
		end: "bottom top",
		onToggle: (self) => {
			if (self.direction === 1) {
				ep01_01InTl.play();
			} else {
				ep01_01BackTl.restart();
			}
		},
	});

	/* 
		---------- ep01_02 ----------
	*/

	const ep01_02inTl = gsap
		.timeline({
			defaults: { duration: 1.25, ease: "power2.out" },
			paused: true,
			onStart: () => {
				window.addEventListener("touchmove", noscroll, { passive: false });
				window.addEventListener("wheel", noscroll, { passive: false });
			},
			onComplete: () => {
				window.removeEventListener("touchmove", noscroll, {
					passive: false,
				});
				window.removeEventListener("wheel", noscroll, { passive: false });
			},
		})
		.set(eps[1], {
			autoAlpha: 1,
		})
		.to(
			[
				section01Title,
				".header__link",
				".top-section__5minute",
				section01Scroll,
			],
			{
				autoAlpha: 0,
			}
		)
		.to(
			".ep__01-bg",
			{
				filter: "blur(30px)",
			},
			"<"
		)
		.fromTo(
			[".top-lead__title img, .top-lead__body-inner"],
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

	const ep01_02BodyTween = gsap.fromTo(
		".top-lead__body",
		{
			y: 0,
		},
		{
			y: "-100%",
		}
	);

	const ep01_02BackTl = gsap
		.timeline({
			defaults: { duration: 1.25, ease: "power2.out" },
			paused: true,
			onStart: () => {
				if (video) {
					video.play();
				}
				window.addEventListener("touchmove", noscroll, { passive: false });
				window.addEventListener("wheel", noscroll, { passive: false });
			},
			onComplete: () => {
				window.removeEventListener("touchmove", noscroll, {
					passive: false,
				});
				window.removeEventListener("wheel", noscroll, { passive: false });
			},
		})
		.to(".top-about__blocks-item:nth-of-type(1) img", {
			duration: 2,
			ease: "power4.inOut",
			autoAlpha: 0,
			y: () => remUnit(-20),
		})
		.to(
			".top-about__blocks-item:nth-of-type(2) img",
			{
				duration: 2,
				ease: "power4.inOut",
				y: () => remUnit(-10),
				x: () => remUnit(10),
				autoAlpha: 0,
			},
			"<"
		)
		.to(
			".top-about__blocks-item:nth-of-type(3) img",
			{
				duration: 2,
				ease: "power4.inOut",
				autoAlpha: 0,
				y: () => remUnit(10),
				x: () => remUnit(10),
			},
			"<"
		)
		.to(
			".top-about__blocks-item:nth-of-type(4) img",
			{
				duration: 2,
				ease: "power4.inOut",
				autoAlpha: 0,
				y: () => remUnit(20),
				x: () => remUnit(20),
			},
			"<"
		)
		.to(
			".top-about__blocks-item:nth-of-type(5) img",
			{
				duration: 2,
				ease: "power4.inOut",
				autoAlpha: 0,
				y: () => remUnit(20),
			},
			"<"
		)
		.to(
			".top-about__blocks-item:nth-of-type(6) img",
			{
				duration: 2,
				ease: "power4.inOut",
				autoAlpha: 0,
				y: () => remUnit(10),
				x: () => remUnit(-10),
			},
			"<"
		)
		.to(
			".top-about__blocks-item:nth-of-type(7) img",
			{
				duration: 2,
				ease: "power4.inOut",
				autoAlpha: 0,
				y: () => remUnit(-10),
				x: () => remUnit(-10),
			},
			"<"
		)
		.to(
			".top-about__bg-fill",
			{
				duration: 2,
				ease: "power4.inOut",
				y: () => remUnit(24),
				x: () => remUnit(24),
			},
			"<"
		)
		.to(
			".top-about__bg",
			{
				autoAlpha: 0,
			},
			"<50%"
		)
		.to(
			eps[1],
			{
				autoAlpha: 1,
			},
			"<"
		);

	ScrollTrigger.create({
		trigger: epTriggers[1],
		start: "top top",
		end: "bottom top",
		onEnter: (self) => {
			ep01_02inTl.restart();
		},
		onEnterBack: (self) => {
			ep01_02BackTl.restart();
		},
		// markers: true,
	});

	const ep01_02BodySt = ScrollTrigger.create({
		trigger: epTriggers[1],
		animation: ep01_02BodyTween,
		pin: true,
		pinSpacing: false,
		start: "top -1", // 反応を遅らせる
		end: "bottom 1", // 反応を遅らせる
		scrub: 1,
		// markers: true,
	});

	/* 
		---------- ep02_01 ----------
	*/

	const ep02_01InTl = gsap
		.timeline({
			defaults: { duration: 1.25, ease: "power2.out" },
			paused: true,
			onStart: () => {
				window.addEventListener("touchmove", noscroll, { passive: false });
				window.addEventListener("wheel", noscroll, { passive: false });
			},
			onComplete: () => {
				if (video) {
					video.pause();
				}
				window.removeEventListener("touchmove", noscroll, {
					passive: false,
				});
				window.removeEventListener("wheel", noscroll, { passive: false });
			},
		})
		.set(eps[2], {
			autoAlpha: 1,
		})
		.to(eps[1], {
			autoAlpha: 0,
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
			"<"
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
		);

	const ep02_01BackTl = gsap
		.timeline({
			defaults: { duration: 1.25, ease: "power2.out" },
			paused: true,
			onStart: () => {
				window.addEventListener("touchmove", noscroll, { passive: false });
				window.addEventListener("wheel", noscroll, { passive: false });
			},
			onComplete: () => {
				window.removeEventListener("touchmove", noscroll, {
					passive: false,
				});
				window.removeEventListener("wheel", noscroll, { passive: false });
			},
		})
		.to(".top-about__bg-fill", {
			duration: 0.75,
			ease: "none",
			scale: "1.4",
		})
		.to(
			".top-about__lead__title",
			{
				autoAlpha: 0,
				y: "10vh",
			},
			"<25%"
		)
		.to(
			".top-about__lead__body p",
			{
				autoAlpha: 0,
				y: "10vh",
				stagger: 0.1,
			},
			"<25%"
		);

	const ep02_01_02Tl = gsap
		.timeline({
			defaults: { duration: 1.25, ease: "power2.out" },
			paused: true,
			onStart: () => {
				window.addEventListener("touchmove", noscroll, { passive: false });
				window.addEventListener("wheel", noscroll, { passive: false });
			},
			onComplete: () => {
				window.removeEventListener("touchmove", noscroll, {
					passive: false,
				});
				window.removeEventListener("wheel", noscroll, { passive: false });
			},
		})
		.fromTo(
			".top-about__bg-fill",
			{
				scale: "1.4",
			},
			{
				duration: 0.75,
				ease: "none",
				scale: "3",
			}
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

	ScrollTrigger.create({
		trigger: epTriggers[2],
		start: "top top",
		end: "center top",
		onEnter: (self) => {
			ep02_01InTl.restart();
		},
		onEnterBack: (self) => {
			ep02_01_02Tl.reverse();
		},
		// markers: true,
	});

	ScrollTrigger.create({
		trigger: epTriggers[2],
		start: "center top",
		// end: "bottom top",
		onEnter: (self) => {
			ep02_01_02Tl.restart();
		},
		// markers: true,
	});

	/* 
		---------- ep02_02 ----------
	*/

	const ep02_02Tl = gsap
		.timeline({
			defaults: { duration: 1.25, ease: "power2.out" },
			paused: true,
			onStart: () => {
				window.addEventListener("touchmove", noscroll, { passive: false });
				window.addEventListener("wheel", noscroll, { passive: false });
			},
			onComplete: () => {
				window.removeEventListener("touchmove", noscroll, {
					passive: false,
				});
				window.removeEventListener("wheel", noscroll, { passive: false });
			},
		})
		.set(eps[3], {
			autoAlpha: 1,
		})
		.fromTo(
			".link-section",
			{
				autoAlpha: 0,
			},
			{
				duration: 1.25,
				ease: "power2.out",
				autoAlpha: 1,
			}
		);

	ScrollTrigger.create({
		trigger: epTriggers[3],
		start: "top top",
		end: "bottom top",
		onEnter: (self) => {
			ep02_02Tl.restart();
		},
		onLeaveBack: (self) => {
			ep02_02Tl.reverse();
		},
		// onEnterBack: (self) => {
		// 	ep02_01_02Tl.reverse();
		// },
		markers: true,
	});
}

export { topSections };
