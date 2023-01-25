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

// function topCover() {
// 	window.addEventListener("touchmove", noscroll, {
// 		passive: false,
// 	});
// 	window.addEventListener("wheel", noscroll, { passive: false });

// 	const content = document.querySelector(".top-cover");
// 	const title = content.querySelector(".top-cover__title");
// 	setTimeout(() => {
// 		title.classList.add("--active");
// 		setTimeout(() => {
// 			window.removeEventListener("touchmove", noscroll, {
// 				passive: false,
// 			});
// 			window.removeEventListener("wheel", noscroll, { passive: false });
// 			content.classList.add("--disable");
// 			video.play();
// 			// setTimeout(() => {
// 			// 	firstSt.enable();
// 			// }, 1000);
// 		}, 2000);
// 	}, 1000);
// }
// export { topCover };

function topSections3() {
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

	// createTriggers();

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

	// let sections = document.querySelectorAll("section"),
	// 	images = document.querySelectorAll(".bg"),
	// 	headings = gsap.utils.toArray(".section-heading"),
	// 	outerWrappers = gsap.utils.toArray(".outer"),
	// 	innerWrappers = gsap.utils.toArray(".inner"),
	// 	splitHeadings = headings.map(
	// 		(heading) =>
	// 			new SplitText(heading, {
	// 				type: "chars,words,lines",
	// 				linesClass: "clip-text",
	// 			})
	// 	),
	// 	currentIndex = -1,
	// 	wrap = gsap.utils.wrap(0, sections.length - 1),
	// 	animating;
	let currentIndex = -1,
		animating;

	// gsap.defaults({
	// 	onStart: (self) => {
	// 		animating = true;
	// 		console.log(animating);
	// 	},
	// 	onComplete: (self) => {
	// 		animating = false;
	// 		console.log(animating);
	// 	},
	// });
	// gsap.set(outerWrappers, { yPercent: 100 });
	// gsap.set(innerWrappers, { yPercent: -100 });

	const setCurrentIndex = (index) => {
		currentIndex++;
	};

	function gotoSection(index, direction) {
		console.log(`index${index}`);
		console.log(`direction${direction}`);

		const prologueInTl = gsap
			.timeline({
				defaults: { duration: 1.25, ease: "power2.out" },
				paused: true,
				onStart: () => {
					animating = true;
				},
				onComplete: () => {
					animating = false;
					setCurrentIndex(index);
					console.log(currentIndex);
				},
			})
			.set(".ep__01-01", {
				autoAlpha: 1,
			})
			.fromTo(
				".top-section__title",
				{
					autoAlpha: 0,
				},
				{
					autoAlpha: 1,
				}
			)
			.fromTo(
				[
					".header__menu-button",
					".header__link",
					".top-sections__navigation",
					".top-section__5minute",
				],
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
				".top-section__scroll",
				{
					autoAlpha: 0,
				},
				{
					autoAlpha: 1,
				},
				"<"
			);

		const topLeadTl = gsap
			.timeline({
				defaults: { duration: 1.25, ease: "power2.out" },
				paused: true,
				onStart: () => {
					animating = true;
				},
				onComplete: () => {
					animating = false;
					setCurrentIndex(index);
					console.log(currentIndex);
				},
			})
			.set(".ep__01-02", {
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

		switch (index) {
			case 0:
				prologueInTl.restart();
				break;
			case 1:
				topLeadTl.restart();
				break;
			// case 2:
			// 	epTrigger.style.height = `${ep.clientHeight}px`;
			// 	autoHeightEps.push(ep);
			// 	autoTriggers.push(epTrigger);
			// 	break;
			// case 3:
			// 	epTrigger.style.height = "200vh";
			// 	break;
			// case 4:
			// 	epTrigger.style.height = "100vh";
			// 	break;
			// case 5:
			// 	epTrigger.style.height = "125vh";
			// 	break;
			// case 6:
			// 	epTrigger.style.height = "100vh";
			// 	break;
			// case 7:
			// 	epTrigger.style.height = "125vh";
			// 	break;
			// case 8:
			// 	epTrigger.style.height = "100vh";
			// 	break;
			// case 9:
			// 	epTrigger.style.height = "125vh";
			// 	break;
			// case 10:
			// 	epTrigger.style.height = "100vh";
			// 	break;
			// case 11:
			// 	epTrigger.style.height = "125vh";
			// 	break;
			// case 12:
			// 	epTrigger.style.height = "100vh";
			// 	break;
			// case 13:
			// 	epTrigger.style.height = "50vh";
			// 	break;
			// case 14:
			// 	epTrigger.style.height = "75vh";
			// 	break;
			// default:
			// 	epTrigger.style.height = "100vh";
		}

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
		onDown: () => !animating && gotoSection(currentIndex - 1, -1),
		onUp: () => !animating && gotoSection(currentIndex + 1, 1),
		tolerance: 10,
		preventDefault: true,
	});

	gotoSection(0, 1);
}

export { topSections3 };
