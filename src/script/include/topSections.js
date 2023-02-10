import { touchDevice, remUnit, spmql, header } from "./vars";
import { gsap, ScrollTrigger } from "gsap/all";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
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
			setTimeout(() => {
				firstSt.enable();
			}, 1000);
		}, 2000);
	}, 1000);
}
export { topCover };

function topSections() {
	window.onbeforeunload = () => window.scrollTo(0, 0);

	// ScrollTrigger.normalizeScroll(true);

	const epsWrapper = document.querySelector(".ep"),
		eps = document.querySelectorAll(".ep > section"),
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

		// let autoHeightEps = [];
		// let autoTriggers = [];
		eps.forEach((ep, index) => {
			index = index + 1;
			const epTrigger = document.createElement("div");

			const id = ep.id;
			epTrigger.id = id;
			ep.id = "";

			ep.dataset.ep = `${id}`;

			scroller.appendChild(epTrigger);
			epTriggers.push(epTrigger);
			switch (id) {
				case "prologue":
					epTrigger.style.height = "500vh";
					break;
				case "prologue-2":
					// epTrigger.style.height = `${ep.clientHeight}px`;
					const scrollContent = ep.querySelector(".top-lead__body");
					gsap.set(scrollContent, {
						paddingTop: "50vh",
						// marginBottom: "50vh",
					});
					epTrigger.appendChild(scrollContent);
					// autoHeightEps.push(ep);
					// autoTriggers.push(epTrigger);
					break;
				case "about":
					epTrigger.style.height = "500vh";
					break;
				case "business":
					epTrigger.style.height = "500vh";
					break;
				case "job":
					epTrigger.style.height = "500vh";
					break;
				case "project":
					epTrigger.style.height = "500vh";
					break;
				case "person":
					epTrigger.style.height = "500vh";
					break;
				case "culture":
					epTrigger.style.height = "500vh";
					break;
				case "epilogue":
					epTrigger.style.height = "500vh";
					break;
				default:
					epTrigger.style.height = "300";
			}
		});

		/*
			ダミーのスクローラーとheight:autoのセクションの高さを同期
		*/

		// ScrollTrigger.addEventListener("refreshInit", () => {
		// 	autoTriggers.forEach((trigger, index) => {
		// 		trigger.style.height = `${autoHeightEps[index].clientHeight}px`;
		// 	});
		// });
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

	ScrollTrigger.defaults({
		preventOverlaps: true,
		fastScrollEnd: true,
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

	const navigationLinks = document.querySelectorAll(".ep__navigation-link");
	const navigationInit = () => {
		navigationLinks.forEach((link) => {
			link.addEventListener("click", (event) => {
				const triggers = ScrollTrigger.getAll();
				triggers.forEach((trigger) => {
					trigger.disable();
				});
				// epsWrapperTween.play();

				event.preventDefault();

				window.removeEventListener("touchmove", noscroll, {
					passive: false,
				});
				window.removeEventListener("wheel", noscroll, { passive: false });

				const href = event.currentTarget.getAttribute("href");
				const target = document.querySelector(href);
				console.log(target);
				gsap.to(window, {
					duration: 0,
					scrollTo: {
						y: target,
						// offsetY: () => {
						// 	if (header) {
						// 		return header.clientHeight;
						// 	}
						// },
					},
					onComplete: () => {
						triggers.forEach((trigger) => {
							trigger.enable(true);
						});
						ScrollTrigger.refresh();
					},
				});

				// event.preventDefault;

				// setTimeout(() => {
				// 	triggers.forEach((trigger) => {
				// 		trigger.enable(true);
				// 	});

				// 	// epsWrapperTween.reverse();
				// }, 100);

				// navigationLinks.forEach((link) => {
				// 	link.classList.remove("--active");
				// });
				// event.currentTarget.classList.add("--active");
			});
		});
	};
	navigationInit();

	const sectionLinksWRapper = document.querySelector(".ep__section-label");
	const sectionLinksInit = () => {
		gsap.set(sectionLinksWRapper, {
			autoAlpha: 0,
		});
	};
	sectionLinksInit();

	const sectionsLinks = document.querySelectorAll(
		".ep__section-label__links-item"
	);
	const sectionChange = (section) => {
		const sectionId = section.id,
			sectionLinkChange = (sectionId) => {
				sectionsLinks.forEach((sectionsLink) => {
					const linkId = sectionsLink.dataset.topTo;

					if (sectionId === linkId) {
						sectionsLink.classList.add("--active");
					} else if (sectionsLink.classList.contains("--active")) {
						sectionsLink.classList.remove("--active");
					}
				});
			},
			navigationChange = (sectionId) => {
				navigationLinks.forEach((navigationLink) => {
					const linkId = navigationLink.href.split("#")[1];
					if (sectionId === linkId) {
						navigationLink.classList.add("--active");
					} else if (navigationLink.classList.contains("--active")) {
						navigationLink.classList.remove("--active");
					}
				});
			},
			toggleSectionLink = (section) => {
				const index = epTriggers.indexOf(section);

				console.log(index);
				console.log(epTriggers.length - 1);

				if (index > 1 && index != epTriggers.length - 1) {
					gsap.to(sectionLinksWRapper, {
						duration: 1,
						autoAlpha: 1,
					});
				} else {
					gsap.to(sectionLinksWRapper, {
						duration: 1,
						autoAlpha: 0,
					});
				}
			};

		toggleSectionLink(section);

		console.log(sectionId);

		if (sectionId && sectionId != "prologue-2") {
			sectionLinkChange(sectionId);
			navigationChange(sectionId);
		} else {
			return false;
		}
	};

	epTriggers.forEach((section, index) => {
		ScrollTrigger.create({
			id: `sectionChange-${index}`,
			trigger: section,
			start: "top top",
			end: "bottom top",
			// markers: true,
			onToggle: (self) => {
				sectionChange(self.trigger);
			},
		});
	});

	/* 
		---------- prologue ----------
	*/

	const section01Title = document.querySelector(".top-section__title");
	const section01Scroll = document.querySelector(".top-section__scroll");
	const section01Items = gsap.utils.toArray([
		".header__menu-button",
		".header__link",
		".ep__navigation",
		".top-section__5minute",
	]);

	video.play(); // 開発用

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

	firstSt = ScrollTrigger.create({
		id: "prologue",
		trigger: "#prologue",
		start: "top center",
		end: "bottom top",
		// markers: true,
		onToggle: (self) => {
			window.addEventListener("touchmove", noscroll, { passive: false });
			window.addEventListener("wheel", noscroll, { passive: false });
			if (self.direction === 1) {
				prologueInTl.play();
			} else {
				// window.addEventListener("touchmove", noscroll, {
				// 	passive: false,
				// });
				// window.addEventListener("wheel", noscroll, { passive: false });
				prologueBackTl.restart();
			}
		},
	});
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
		.set("[data-ep='prologue-2']", {
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

	ScrollTrigger.create({
		id: "topLeadTl",
		trigger: "#prologue-2",
		start: "top top",
		end: "bottom top",
		// markers: true,
		onEnter: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topLeadTl.restart();
		},
		onLeaveBack: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topLeadTl.reverse();
		},
	});

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
		.to("[data-ep='about']", {
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

	ScrollTrigger.create({
		id: "aboutTl",
		trigger: "#about",
		start: "top top",
		end: "center top",
		onEnter: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			aboutTl.restart();
		},
		onLeaveBack: (self) => {
			window.addEventListener("touchmove", noscroll, { passive: false });
			window.addEventListener("wheel", noscroll, { passive: false });
			aboutTl.reverse();
		},
	});

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

	ScrollTrigger.create({
		id: "mfbmFieldTl",
		trigger: "#business",
		start: "top top",
		end: "center top",
		onEnter: (self) => {
			window.addEventListener("touchmove", noscroll, { passive: false });
			window.addEventListener("wheel", noscroll, { passive: false });
			mfbmFieldTl.restart();
		},
		onLeaveBack: (self) => {
			window.addEventListener("touchmove", noscroll, { passive: false });
			window.addEventListener("wheel", noscroll, { passive: false });
			mfbmFieldTl.reverse();
		},
	});

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
		.to("[data-ep='job']", {
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
		)
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

	ScrollTrigger.create({
		id: "topJobTl",
		trigger: "#job",
		start: "top top",
		end: "center top",
		onEnter: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topJobTl.restart();
		},
		onLeaveBack: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topJobTl.reverse();
		},
	});

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
		.to("[data-ep='project']", {
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
		)
		.from(".top-project__lead-sub-title", {
			autoAlpha: 0,
		});

	ScrollTrigger.create({
		id: "topProjectTl",
		trigger: "#project",
		start: "top top",
		end: "center top",
		onEnter: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topProjectTl.restart();
		},
		onLeaveBack: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topProjectTl.reverse();
		},
	});

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
		.set("[data-ep='person']", {
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
		)
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
		id: "topPersonTl",
		trigger: "#person",
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
		.to("[data-ep='culture']", {
			autoAlpha: 1,
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

	ScrollTrigger.create({
		id: "topCultureTl",
		trigger: "#culture",
		start: "top top",
		end: "center top",
		onEnter: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topCultureTl.restart();
		},
		onLeaveBack: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			topCultureTl.reverse();
		},
	});

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
		.to("[data-ep='epilogue']", {
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

	// const lastTl = gsap
	// 	.timeline({
	// 		defaults: { duration: 1.25, ease: "power2.out" },
	// 		paused: true,
	// 		onComplete: () => {
	// 			// window.removeEventListener("touchmove", noscroll, {
	// 			// 	passive: false,
	// 			// });
	// 			// window.removeEventListener("wheel", noscroll, { passive: false });
	// 		},
	// 		onReverseComplete: () => {
	// 			// window.removeEventListener("touchmove", noscroll, {
	// 			// 	passive: false,
	// 			// });
	// 			// window.removeEventListener("wheel", noscroll, { passive: false });
	// 		},
	// 	})
	// 	.to(".ep__section-scroll", {
	// 		autoAlpha: 0,
	// 		duration: 1,
	// 	})
	// 	.to(".ep__bottom-gradient", {
	// 		autoAlpha: 0,
	// 		duration: 1,
	// 	});

	ScrollTrigger.create({
		id: "epilogueTl",
		trigger: "#epilogue",
		start: "top top",
		end: "bottom bottom",
		onEnter: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			epilogueTl.restart();
		},
		// onLeave: (self) => {
		// 	lastTl.play();
		// },
		onLeaveBack: (self) => {
			window.addEventListener("touchmove", noscroll, {
				passive: false,
			});
			window.addEventListener("wheel", noscroll, { passive: false });
			epilogueTl.reverse();
		},
		// onEnterBack: (self) => {
		// 	lastTl.reverse();
		// },
	});
}

export { topSections };
