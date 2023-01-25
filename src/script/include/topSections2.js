import { touchDevice, remUnit, spmql, header } from "./vars";
import { gsap, ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/Observer";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger, Observer, DrawSVGPlugin);
import { video } from "./topVideo";

let firstSt;

const noscroll = (event) => {
	event.preventDefault();
};

function topCover() {
	window.addEventListener("touchmove", noscroll, {
		passive: false,
	});
	window.addEventListener("wheel", noscroll, { passive: false });

	const content = document.querySelector(".top-cover");
	const title = content.querySelector(".top-cover__title");
	setTimeout(() => {
		title.classList.add("--active");
		setTimeout(() => {
			window.removeEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.removeEventListener("wheel", noscroll, { passive: false });
			content.classList.add("--disable");
			video.play();
			// setTimeout(() => {
			// 	firstSt.enable();
			// }, 1000);
		}, 2000);
	}, 1000);
}
export { topCover };

function topSections2() {
	window.onbeforeunload = () => window.scrollTo(0, 0);

	let animating;

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
			if (!ep.previousElementSibling) {
				const parentElm = ep.parentElement;
				const id = parentElm.id;
				epTrigger.id = id;
				parentElm.id = "";
			}
			scroller.appendChild(epTrigger);
			epTriggers.push(epTrigger);
			switch (index) {
				case 1:
					epTrigger.style.height = "50vh";
					break;
				case 2:
					epTrigger.style.height = `${ep.clientHeight}px`;
					autoHeightEps.push(ep);
					autoTriggers.push(epTrigger);
					break;
				case 3:
					epTrigger.style.height = "200vh";
					break;
				case 4:
					epTrigger.style.height = "100vh";
					break;
				case 5:
					epTrigger.style.height = "125vh";
					break;
				case 6:
					epTrigger.style.height = "100vh";
					break;
				case 7:
					epTrigger.style.height = "125vh";
					break;
				case 8:
					epTrigger.style.height = "100vh";
					break;
				case 9:
					epTrigger.style.height = "125vh";
					break;
				case 10:
					epTrigger.style.height = "100vh";
					break;
				case 11:
					epTrigger.style.height = "125vh";
					break;
				case 12:
					epTrigger.style.height = "100vh";
					break;
				case 13:
					epTrigger.style.height = "50vh";
					break;
				case 14:
					epTrigger.style.height = "75vh";
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

	gsap.defaults({
		onStart: (self) => {
			animating = true;
		},
		onComplete: (self) => {
			animating = false;
		},
	});

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

	ScrollTrigger.defaults({
		// preventOverlaps: true,
		// fastScrollEnd: true,
		// markers: {
		// 	startColor: "skyBlue",
		// 	endColor: "red",
		// 	fontSize: "18px",
		// 	fontWeight: "bold",
		// },
	});

	const epsWrapperTween = gsap.to(epsWrapper, {
		duration: 0.25,
		autoAlpha: 0,
		paused: true,
	});

	const navigationInit = () => {
		const navigationLinks = document.querySelectorAll(".ep__navigation-link");
		navigationLinks.forEach((link) => {
			link.addEventListener("click", (event) => {
				// event.preventDefault;
				// const triggers = ScrollTrigger.getAll();
				// triggers.forEach((trigger) => {
				// 	trigger.disable();
				// });
				// epsWrapperTween.play();

				// setTimeout(() => {
				// 	triggers.forEach((trigger) => {
				// 		trigger.enable(true);
				// 	});

				// 	// epsWrapperTween.reverse();
				// }, 100);

				navigationLinks.forEach((link) => {
					link.classList.remove("--active");
				});
				event.currentTarget.classList.add("--active");
			});
		});
	};
	navigationInit();

	/* 
		---------- prologue ----------
	*/

	const section01Title = document.querySelector(".top-section__title");
	const section01Scroll = document.querySelector(".top-section__scroll");
	const section01Items = gsap.utils.toArray([
		".header__menu-button",
		".header__link",
		".top-sections__navigation",
		".top-section__5minute",
	]);

	const prologueInTl = gsap
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

	const prologueBackTl = gsap
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

	function gotoSection(index, direction) {
		prologueInTl.play();
		// index = wrap(index); // make sure it's valid
		// animating = true;
		// let fromTop = direction === -1,
		// 	dFactor = fromTop ? -1 : 1,
		// 	tl = gsap.timeline({
		// 		defaults: { duration: 1.25, ease: "power1.inOut" },
		// 		onComplete: () => (animating = false),
		// 	});
		// if (currentIndex >= 0) {
		// 	// The first time this function runs, current is -1
		// 	gsap.set(sections[currentIndex], { zIndex: 0 });
		// 	tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
		// 		sections[currentIndex],
		// 		{ autoAlpha: 0 }
		// 	);
		// }
		// gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
		// tl.fromTo(
		// 	[outerWrappers[index], innerWrappers[index]],
		// 	{
		// 		yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
		// 	},
		// 	{
		// 		yPercent: 0,
		// 	},
		// 	0
		// )
		// 	.fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
		// 	.fromTo(
		// 		splitHeadings[index].chars,
		// 		{
		// 			autoAlpha: 0,
		// 			yPercent: 150 * dFactor,
		// 		},
		// 		{
		// 			autoAlpha: 1,
		// 			yPercent: 0,
		// 			duration: 1,
		// 			ease: "power2",
		// 			stagger: {
		// 				each: 0.02,
		// 				from: "random",
		// 			},
		// 		},
		// 		0.2
		// 	);
		// currentIndex = index;
	}

	Observer.create({
		type: "wheel,touch,pointer",
		wheelSpeed: -1,
		onDown: () => !animating && gotoSection(),
		// onDown: () => !animating && gotoSection(currentIndex - 1, -1),
		// onUp: () => !animating && gotoSection(currentIndex + 1, 1),
		tolerance: 100,
		preventDefault: true,
	});

	gotoSection(0, 1);

	// firstSt = ScrollTrigger.create({
	// 	id: "prologue",
	// 	trigger: epTriggers[0],
	// 	start: "top center",
	// 	end: "bottom top",
	// 	onToggle: (self) => {
	// 		window.addEventListener("touchmove", noscroll, { passive: false });
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		if (self.direction === 1) {
	// 			prologueInTl.play();
	// 		} else {
	// 			window.addEventListener("touchmove", noscroll, {
	// 				passive: false,
	// 			});
	// 			window.addEventListener("wheel", noscroll, { passive: false });
	// 			prologueBackTl.restart();
	// 		}
	// 	},
	// });
	// firstSt.disable();

	/* 
		---------- topLead ----------
	*/

	const topLeadTl = gsap
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

	// ScrollTrigger.create({
	// 	id: "topLeadTl",
	// 	trigger: epTriggers[1],
	// 	start: "top top",
	// 	end: "bottom top",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		topLeadTl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		topLeadTl.reverse();
	// 	},
	// });

	// const topLeadBodyTween = gsap.fromTo(
	// 	".top-lead__body",
	// 	{
	// 		y: 0,
	// 	},
	// 	{
	// 		y: "-100%",
	// 	}
	// );

	// ScrollTrigger.create({
	// 	id: "topLeadBodyTween",
	// 	trigger: epTriggers[1],
	// 	animation: topLeadBodyTween,
	// 	pin: true,
	// 	pinSpacing: false,
	// 	start: "top -1", // 反応を遅らせる
	// 	end: "bottom 1", // 反応を遅らせる
	// 	scrub: 1,
	// });

	/* 
		---------- about ----------
	*/

	const aboutTl = gsap
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
		.to(eps[2], {
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
		);

	// ScrollTrigger.create({
	// 	id: "aboutTl",
	// 	trigger: epTriggers[2],
	// 	start: "top top",
	// 	end: "center top",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		aboutTl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, { passive: false });
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		aboutTl.reverse();
	// 	},
	// });

	const about_02Tl = gsap
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

	// ScrollTrigger.create({
	// 	id: "about_02Tl",
	// 	trigger: epTriggers[2],
	// 	start: "center top",
	// 	// end: "bottom top",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		about_02Tl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		about_02Tl.reverse();
	// 	},
	// });

	/* 
		---------- aboutLink ----------
	*/

	const aboutLinkTl = gsap
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
		.set(eps[3], {
			autoAlpha: 1,
		})
		.fromTo(
			".ep__02-02 .link-section",
			{
				autoAlpha: 0,
			},
			{
				duration: 1.25,
				ease: "power2.out",
				autoAlpha: 1,
			}
		);

	// ScrollTrigger.create({
	// 	id: "aboutLinkTl",
	// 	trigger: epTriggers[3],
	// 	start: "top top",
	// 	end: "bottom top",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		aboutLinkTl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		aboutLinkTl.reverse();
	// 	},
	// });

	/* 
		---------- .ep__03-01----------
	*/

	const mfbmFieldTl = gsap
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
			eps[4],
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
		);

	// ScrollTrigger.create({
	// 	id: "mfbmFieldTl",
	// 	trigger: epTriggers[4],
	// 	start: "top top",
	// 	end: "center top",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, { passive: false });
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		mfbmFieldTl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, { passive: false });
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		mfbmFieldTl.reverse();
	// 	},
	// });

	const mfbmField_02Tl = gsap
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
			".mfbm-field__map-inner",
			{
				x: 0,
			},
			{
				duration: 1.25,
				ease: "power2.inOut",
				x: "40vw",
				force3D: true,
			}
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

	// ScrollTrigger.create({
	// 	id: "mfbmField_02Tl",
	// 	trigger: epTriggers[4],
	// 	start: "center top",
	// 	end: "bottom top",
	// 	onEnter: (self) => {
	// 		mfbmField_02Tl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		mfbmField_02Tl.reverse();
	// 	},
	// });

	/* 
		---------- businessLink ----------
	*/

	const businessLinkTl = gsap
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
		.set(eps[5], {
			autoAlpha: 1,
		})
		.fromTo(
			".ep__03-02 .link-section",
			{
				autoAlpha: 0,
			},
			{
				duration: 1.25,
				ease: "power2.out",
				autoAlpha: 1,
			}
		);

	// ScrollTrigger.create({
	// 	id: "businessLinkTl",
	// 	trigger: epTriggers[5],
	// 	start: "top top",
	// 	end: "bottom top",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		businessLinkTl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		businessLinkTl.reverse();
	// 	},
	// });

	/* 
		---------- topJob ----------
	*/

	const topJobTl = gsap
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
		.to(eps[6], {
			autoAlpha: 1,
		})
		.fromTo(
			".top-job__peoples-item img",
			{
				autoAlpha: 0,
				y: () => {
					return remUnit(3);
				},
			},
			{
				duration: 0.75,
				ease: "power2.out",
				autoAlpha: 1,
				y: 0,
				stagger: {
					// wrap advanced options in an object
					each: 0.1,
					from: "random",
					// grid: "auto",
					ease: "power2.in",
				},
			},
			"<25%"
		);

	// ScrollTrigger.create({
	// 	id: "topJobTl",
	// 	trigger: epTriggers[6],
	// 	start: "top top",
	// 	end: "center top",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		topJobTl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		topJobTl.reverse();
	// 	},
	// });

	const topJob_02Tl = gsap
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
			".top-job__lead",
			{
				autoAlpha: 0,
				x: "50%",
			},
			{
				duration: 1.125,
				ease: "power2.out",
				autoAlpha: 1,
				x: 0,
			}
		)
		.fromTo(
			".top-job__lead-title",
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
			".top-job__lead-body p",
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

	// ScrollTrigger.create({
	// 	id: "topJob_02Tl",
	// 	trigger: epTriggers[6],
	// 	start: "center top",
	// 	end: "bottom top",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		topJob_02Tl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		topJob_02Tl.reverse();
	// 	},
	// });

	/* 
		---------- jobLink ----------
	*/

	const jobLinkTl = gsap
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
		.set(eps[7], {
			autoAlpha: 1,
		})
		.fromTo(
			".ep__04-02 .link-section",
			{
				autoAlpha: 0,
			},
			{
				duration: 1.25,
				ease: "power2.out",
				autoAlpha: 1,
			}
		);

	// ScrollTrigger.create({
	// 	id: "jobLinkTl",
	// 	trigger: epTriggers[7],
	// 	start: "top top",
	// 	end: "bottom top",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		jobLinkTl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		jobLinkTl.reverse();
	// 	},
	// });

	/* 
		---------- topProject ----------
	*/

	const textP1 = gsap.utils.toArray(["#p-1-1", "#p-1-2"]);
	const textR1 = gsap.utils.toArray(["#r-1-1", "#r-1-2", "#r-1-3"]);
	const textO1 = gsap.utils.toArray(["#o-1"]);
	const textJ = gsap.utils.toArray(["#j"]);
	const textE = gsap.utils.toArray(["#e-1", "#e-2"]);
	const textC = gsap.utils.toArray(["#c"]);
	const textT1 = gsap.utils.toArray(["#t-1-1", "#t-1-2"]);
	const textS = gsap.utils.toArray(["#s"]);
	const textT2 = gsap.utils.toArray(["#t-2-1", "#t-2-2"]);
	const textO2 = gsap.utils.toArray(["#o-2"]);
	const textR2 = gsap.utils.toArray(["#r-2-1", "#r-2-2", "#r-2-3"]);
	const textY = gsap.utils.toArray(["#y-1-1", "#y-1-2", "#y-1-3"]);

	const topProjectTl = gsap
		.timeline({
			defaults: { duration: 1.5, ease: "power2.out" },
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
		.to(eps[8], {
			autoAlpha: 1,
		})
		//　line animation
		.from(
			textP1,
			{
				drawSVG: 0,
			},
			`<${gsap.utils.random([0, 10])}%`
		)
		.from(
			textR1,
			{
				drawSVG: 0,
			},
			`<${gsap.utils.random([0, 10])}%`
		)
		.from(
			textO1,
			{
				drawSVG: 0,
			},
			`<${gsap.utils.random([0, 10])}%`
		)
		.from(
			textJ,
			{
				drawSVG: 0,
			},
			`<${gsap.utils.random([0, 10])}%`
		)
		.from(
			textE,
			{
				drawSVG: 0,
			},
			`<${gsap.utils.random([0, 10])}%`
		)
		.from(
			textC,
			{
				drawSVG: 0,
			},
			`<${gsap.utils.random([0, 10])}%`
		)
		.from(
			textT1,
			{
				drawSVG: 0,
			},
			`<${gsap.utils.random([0, 10])}%`
		)
		.from(
			textS,
			{
				drawSVG: 0,
			},
			`<${gsap.utils.random([0, 10])}%`
		)
		.from(
			textT2,
			{
				drawSVG: 0,
			},
			`<${gsap.utils.random([0, 10])}%`
		)
		.from(
			textO2,
			{
				drawSVG: 0,
			},
			`<${gsap.utils.random([0, 10])}%`
		)
		.from(
			textR2,
			{
				drawSVG: 0,
			},
			`<${gsap.utils.random([0, 10])}%`
		)
		.from(
			textY,
			{
				drawSVG: 0,
			},
			`<${gsap.utils.random([0, 10])}%`
		)
		.from(
			".top-project__bg",
			{
				duration: 3,
				autoAlpha: 0,
				// ease: "expo.inOut",
			},
			"<50%"
		);

	// ScrollTrigger.create({
	// 	id: "topProjectTl",
	// 	trigger: epTriggers[8],
	// 	start: "top top",
	// 	end: "center top",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		topProjectTl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		topProjectTl.reverse();
	// 	},
	// });

	const topProject_02Tl = gsap
		.timeline({
			defaults: { duration: 1.5, ease: "power2.out" },
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
		.from(".top-project__lead-sub-title", {
			autoAlpha: 0,
		});

	ScrollTrigger.create({
		id: "topProject_02Tl",
		trigger: epTriggers[8],
		start: "center top",
		end: "bottom top",
		onEnter: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topProject_02Tl.restart();
		},
		onLeaveBack: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topProject_02Tl.reverse();
		},
	});

	/* 
		---------- projectLink ----------
	*/

	const projectLinkTl = gsap
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
		.set(eps[9], {
			autoAlpha: 1,
		})
		.fromTo(
			".ep__05-02 .link-section",
			{
				autoAlpha: 0,
			},
			{
				duration: 1.25,
				ease: "power2.out",
				autoAlpha: 1,
			}
		);

	// ScrollTrigger.create({
	// 	id: "projectLinkTl",
	// 	trigger: epTriggers[9],
	// 	start: "top top",
	// 	end: "bottom top",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		projectLinkTl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		projectLinkTl.reverse();
	// 	},
	// });

	/* 
		---------- topPerson ----------
	*/

	gsap.set(".persons__bg", {
		autoAlpha: 0,
	});

	const topPersonTl = gsap
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
		.set(eps[10], {
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
			"<"
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
		);

	ScrollTrigger.create({
		id: "topPersonTl",
		trigger: epTriggers[10],
		start: "top top",
		end: "center top",
		onEnter: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topPersonTl.restart();
		},
		onLeaveBack: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topPersonTl.reverse();
		},
	});

	const topPerson_02Tl = gsap
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

	ScrollTrigger.create({
		id: "topPerson_02Tl",
		trigger: epTriggers[10],
		start: "center top",
		end: "bottom top",
		onEnter: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topPerson_02Tl.restart();
		},
		onLeaveBack: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topPerson_02Tl.reverse();
		},
	});

	/* 
		---------- personLink ----------
	*/

	const personLinkTl = gsap
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
		.set(eps[11], {
			autoAlpha: 1,
		})
		.fromTo(
			".ep__06-02 .link-section",
			{
				autoAlpha: 0,
			},
			{
				duration: 1.25,
				ease: "power2.out",
				autoAlpha: 1,
			}
		);

	// ScrollTrigger.create({
	// 	id: "personLinkTl",
	// 	trigger: epTriggers[11],
	// 	start: "top top",
	// 	end: "bottom top",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		personLinkTl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		personLinkTl.reverse();
	// 	},
	// });

	/* 
		---------- topCulture ----------
	*/

	const topCultureTl = gsap
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
		.to(eps[12], {
			autoAlpha: 1,
		});

	// ScrollTrigger.create({
	// 	id: "topCultureTl",
	// 	trigger: epTriggers[12],
	// 	start: "top top",
	// 	end: "center top",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		topCultureTl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		topCultureTl.reverse();
	// 	},
	// });

	const topCulture_02Tl = gsap
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
			".top-culture__copy-list",
			{
				x: "100%",
				autoAlpha: 0,
			},
			{
				duration: 1.125,
				x: "0",
				autoAlpha: 1,
			}
		)
		.fromTo(
			".top-culture__lead",
			{
				x: "-100%",
				autoAlpha: 0,
			},
			{
				duration: 1.125,
				x: "0",
				autoAlpha: 1,
			},
			"<"
		)
		.fromTo(
			".top-culture__lead-body p",
			{
				autoAlpha: 0,
				y: () => {
					return remUnit(3);
				},
			},
			{
				duration: 1,
				autoAlpha: 1,
				y: 0,
				stagger: 0.2,
			},
			"<50%"
		)
		.fromTo(
			".top-culture__copy-list-item",
			{
				autoAlpha: 0,
				y: () => {
					return remUnit(3);
				},
			},
			{
				duration: 1,
				autoAlpha: 1,
				y: 0,
				stagger: 0.1,
			},
			"<50%"
		);

	// ScrollTrigger.create({
	// 	id: "topCulture_02Tl",
	// 	trigger: epTriggers[12],
	// 	start: "center top",
	// 	end: "bottom top",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		topCulture_02Tl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		topCulture_02Tl.reverse();
	// 	},
	// });

	/* 
		---------- cultureLink ----------
	*/

	const cultureLinkTl = gsap
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
		.set(eps[13], {
			autoAlpha: 1,
		})
		.fromTo(
			".ep__07-02 .link-section",
			{
				autoAlpha: 0,
			},
			{
				duration: 1.25,
				ease: "power2.out",
				autoAlpha: 1,
			}
		);

	// ScrollTrigger.create({
	// 	id: "cultureLinkTl",
	// 	trigger: epTriggers[13],
	// 	start: "top top",
	// 	end: "bottom top",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		cultureLinkTl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		cultureLinkTl.reverse();
	// 	},
	// });

	/* 
		---------- epilogue ----------
	*/

	const epilogueTl = gsap
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
		.to(eps[14], {
			duration: 2,
			autoAlpha: 1,
		})
		.fromTo(
			".top-epilogue__lead-title",
			{
				autoAlpha: 0,
				y: () => {
					return remUnit(3);
				},
			},
			{
				duration: 1,
				ease: "power2.out",
				autoAlpha: 1,
				y: 0,
			},
			"<25%"
		)
		.fromTo(
			".top-epilogue__lead-body p",
			{
				autoAlpha: 0,
				y: () => {
					return remUnit(3);
				},
			},
			{
				duration: 1.5,
				ease: "power2.out",
				autoAlpha: 1,
				y: 0,
				stagger: 0.25,
			},
			"<25%"
		);

	// ScrollTrigger.create({
	// 	id: "epilogueTl",
	// 	trigger: epTriggers[14],
	// 	start: "top top",
	// 	end: "bottom top",
	// 	onEnter: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		epilogueTl.restart();
	// 	},
	// 	onLeaveBack: (self) => {
	// 		window.addEventListener("touchmove", noscroll, {
	// 			passive: false,
	// 		});
	// 		window.addEventListener("wheel", noscroll, { passive: false });
	// 		epilogueTl.reverse();
	// 	},
	// });

	// const footerTween = gsap.fromTo(
	// 	".top-lead__body",
	// 	{
	// 		y: 0,
	// 	},
	// 	{
	// 		y: "-100%",
	// 	}
	// );

	// ScrollTrigger.create({
	// 	id: "footerTween",
	// 	trigger: epTriggers[14],
	// 	animation: footerTween,
	// 	pin: true,
	// 	pinSpacing: false,
	// 	start: "top -1", // 反応を遅らせる
	// 	end: "bottom 1", // 反応を遅らせる
	// 	scrub: 1,
	// 	markers: true,
	// });
}

export { topSections2 };
