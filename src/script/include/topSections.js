import { touchDevice, remUnit, spmql, header, noscroll } from "./vars";
import { video } from "./topVideo";
import {
	prologueInit,
	prologueInTl,
	prologueBackTl,
	prologueBackFromPrologue2Tl,
	topLeadBackTl,
	prologueRepeatTween,
	topLeadTl,
	prologue2stInitTl,
	prologue2St,
} from "./top-animations/prologueInit";
import {
	aboutInit,
	aboutTl,
	spAbout2Tl,
	spAboutLinkTl,
} from "./top-animations/aboutInit";
import {
	mfbmFieldInit,
	mfbmFieldTl,
	spBusiness2Tl,
	spBusinessLinkTl,
} from "./top-animations/mfbmFieldInit";
import {
	topJobInit,
	topJobTl,
	spJob2Tl,
	spJobLinkTl,
} from "./top-animations/topJobInit";
import {
	topProjectInit,
	topProjectTl,
	spProjectLinkTl,
} from "./top-animations/topProjectInit";
import {
	topPersonInit,
	topPersonTl,
	spPersonLinkTl,
} from "./top-animations/topPersonInit";
import {
	topCultureInit,
	topCultureTl,
	cultureTweenArray,
	spCulture2Tl,
	spCultureLinkTl,
} from "./top-animations/topCultureInit";
import { epilogueInit, epilogueTl } from "./top-animations/epilogueInit";
import {
	topFooterInit,
	topFooterInitTl,
	topFooterSt,
} from "./top-animations/topFooterInit";

import { gsap, ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/Observer";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger, Observer, DrawSVGPlugin);

let topScrollObserver, currentSectionId, firstLoad;

const /*
アニメーションモジュールで書き換えするので、参照渡し
*/
	animating = {
		flag: false,
	},
	tweenArray = []; // とりあえず使ってない

function topCover() {
	const content = document.querySelector(".top-cover"),
		removeCover = () => {
			content.classList.add("--disable");
			if (video) {
				video.play();
			}
			content.addEventListener("animationend", (event) => {
				prologueInTl.play();
				prologueRepeatTween.play();

				prologueInTl.eventCallback("onComplete", () => {
					animating.flag = false;
					document.body.classList.remove("--pointer-events-none");
				});

				if (!spmql.matches) {
					window.removeEventListener("touchmove", noscroll, {
						passive: false,
					});
					window.removeEventListener("wheel", noscroll, { passive: false });
				}

				content.remove();
			});
		};

	window.addEventListener("touchmove", noscroll, {
		passive: false,
	});
	window.addEventListener("wheel", noscroll, { passive: false });
	document.body.classList.add("--pointer-events-none");

	prologueInit();

	setTimeout(removeCover, 3000);

	/*
		初回判定は一旦ナシに
	*/
	// if (!sessionStorage.getItem("visited")) {
	// 	sessionStorage.setItem("visited", "first");

	// 	setTimeout(removeCover, 3000);
	// } else {
	// 	content.remove();
	// 	onceTransition();
	// 	tlOnce.play();
	// 	tlOnce.add(scrollReveal(), "<75%");
	// }
}
export { topCover };

function topSections() {
	let mm = gsap.matchMedia(),
		eps,
		currentIndex = -1,
		sectionId;

	mm.add("(min-width: 768px)", () => {
		eps = document.querySelectorAll("[data-ep]");
	});
	mm.add("(max-width: 767px)", () => {
		eps = document.querySelectorAll("[data-ep],[data-ep-sp]");
	});

	const epsInit = () => {
			eps.forEach((ep) => {
				gsap.set(ep, {
					position: "fixed",
					top: "0",
					left: "0",
					width: "100%",
					height: "100vh",
					height: "100dvh",
					autoAlpha: 0,
				});
			});
			window.onbeforeunload = () => window.scrollTo(0, 0);
			spmql.addEventListener("change", (event) => {
				location.reload();
			});
		},
		pcfcLinkObservers = [],
		pcfcLinkInit = () => {
			const targets = document.querySelectorAll("[data-pc-href");

			targets.forEach((target) => {
				target.classList.add("--linkable");
				const observer = Observer.create({
					target: target,
					type: "pointer",
					onClick: (self) => {
						const href = self.target.dataset.pcHref;
						window.location.href = href;
					},
				});
				pcfcLinkObservers.push(observer);
			});
		},
		animationsInit = () => {
			// prologueInit();
			aboutInit();
			mfbmFieldInit();
			topJobInit();
			topProjectInit();
			topPersonInit();
			topCultureInit();
			epilogueInit();
			topFooterInit();
		},
		sectionLinksWRapper = document.querySelector(".ep__section-label"),
		sectionLinksInit = () => {
			gsap.set(sectionLinksWRapper, {
				autoAlpha: 0,
			});
		};

	/*
	初期化
	*/
	epsInit();
	if (!touchDevice) {
		pcfcLinkInit();
	}
	animationsInit();
	sectionLinksInit();

	const sectionLinkArrowTl = gsap
		.timeline({
			paused: true,
		})
		.set(".ep__section-label__click-icon", {
			overflow: "hidden",
		})
		.to(".ep__section-label__click-icon-bar", {
			keyframes: {
				0: {
					scaleX: 1,
				},
				"50%": {
					scaleX: 0,
				},
				"100%": {
					scaleX: 1,
				},
				easeEach: "none", // ease between keyframes
				// ease: "power1.inOut",
			},
			transformOrigin: "right",
			duration: 2,
			repeat: -1,
			// repeatDelay: 0.25,
			// yoyo: true,
			ease: "power2.out",
		});

	const showSectionLink = gsap.to(sectionLinksWRapper, {
		// delay: 0.5,
		paused: true,
		duration: 1,
		autoAlpha: 1,
		onStart: () => {
			sectionLinkArrowTl.play();
		},
	});

	const hideSectionLink = gsap.to(sectionLinksWRapper, {
		// delay: 0.5,
		paused: true,
		duration: 1,
		autoAlpha: 0,
		onStart: () => {
			sectionLinkArrowTl.pause();
		},
	});

	const sectionsLinks = document.querySelectorAll(
		".ep__section-label__links-item"
	);
	const toggleNavigation = (sectionId) => {
		const sectionLinkChange = (sectionId) => {
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
			};

		sectionLinkChange(sectionId);
		navigationChange(sectionId);
	};

	const getSectionIndex = (sectionId) => {
		for (let i = 0; i < eps.length; i++) {
			const targetId = eps[i].dataset.ep || eps[i].dataset.epSp;
			if (targetId === sectionId) {
				return i;
			}
		}
	};

	const getSection = (sectionId) => {
		for (let i = 0; i < eps.length; i++) {
			const targetId = eps[i].dataset.ep || eps[i].dataset.epSp;
			if (targetId === sectionId) {
				return eps[i];
			}
		}
	};

	const navigationLinks = document.querySelectorAll(".ep__navigation-link");
	const navigationInit = () => {
		navigationLinks.forEach((link) => {
			link.addEventListener("click", (event) => {
				event.preventDefault();

				const targetSectionId = event.currentTarget.href.split("#")[1];

				let direction = 1;

				/*	
					とりあえず
				*/
				if (targetSectionId === "prologue") {
					/*
						プロローグへの遷移は、z-indexの共通処理で背景の動画が見えなくなるので、
						現在のインデックスをフェードアウト、他のセクションは非表示にした。（フェードが重なるとパフォーマンスが良くないので、共通処理にはしない）。
						
					*/
					gsap.to(getSection(currentSectionId), {
						duration: 1,
						autoAlpha: 0,
						ease: "power2.out",
					});
					for (let i = 0; i < eps.length; i++) {
						const id = eps[i].dataset.ep || eps[i].dataset.epSp;
						if (id != currentSectionId && id != "prologue") {
							gsap.set(eps[i], {
								autoAlpha: 0,
							});
						}
					}
				}

				animating.flag = true; // 一旦ここに
				sectionTransition(
					targetSectionId,
					direction,
					getSectionIndex(targetSectionId) // ターゲットのIDからスクロール用のインデックスもジャンプさせる
				);
				if (targetSectionId === "prologue" || targetSectionId === "epilogue") {
					hideSectionLink.restart();
				}
			});
		});
	};
	navigationInit();

	const sectionTransition = (sectionId, direction, index) => {
		console.log("ディレクション：" + direction);
		console.log("カレント（前）のセクション：" + currentSectionId);
		console.log("ターゲット（次）セクション：" + sectionId);

		/*
		アニメーション中は、操作不可（ナビゲーションで壊れるので。解除は各アニメーションのコールバック）
		*/
		document.body.classList.add("--pointer-events-none");

		/*
		z-indexを初期化
		*/
		eps.forEach((ep) => {
			ep.style.zIndex = "";
		});
		/*
		ディレクションによってz-indexを操作して、常にターゲットのセクションが一番上にくるように設定
		*/

		if (direction == 1) {
			if (currentSectionId) {
				getSection(currentSectionId).style.zIndex = 1; // カレント
				getSection(sectionId).style.zIndex = 2; // ターゲット
			}
		}

		topScrollObserver.enable();

		/*

		対象以外のすべてのセクションをリセットする

		*/

		for (let i = 0; i < eps.length; i++) {
			const id = eps[i].dataset.ep || eps[i].dataset.epSp;
			if (id != currentSectionId && id != sectionId) {
				eps[i].style.visibility = "hidden";
				/*

					gsapで"hidden"するとセクションのアニメーションをキャンセルされるので
					styleメソッドで非表示した。（overwrite設定を試したが、始めっから動かなかったりしてうまく行かなかった…）
				*/
				// gsap.set(eps[i], {
				// 	autoAlpha: 0,
				// });
			}
		}

		if (sectionId === "prologue" || sectionId === "prologue2") {
			if (video && video.paused) {
				video.play();
			}
		} else {
			video.pause();
		}
		if (sectionId === "culture") {
			cultureTweenArray.forEach((tween) => {
				tween.play();
			});
		} else {
			cultureTweenArray.forEach((tween) => {
				tween.pause();
			});
		}

		switch (sectionId) {
			case "prologue":
				if (!firstLoad) {
					firstLoad = true;
				} else {
					if (direction == 1) {
						toggleNavigation(sectionId);

						// ScrollTrigger.refresh();
						prologue2St.disable();
						prologueBackTl.restart();
						prologueBackTl.eventCallback("onComplete", () => {
							console.log("test");
							animating.flag = false;
							document.body.classList.remove("--pointer-events-none");
							topLeadTl.progress(0).pause();
						});
					} else {
						prologue2St.disable();
						prologueBackFromPrologue2Tl.restart();
						prologueBackFromPrologue2Tl.eventCallback("onComplete", () => {
							animating.flag = false;
							document.body.classList.remove("--pointer-events-none");
						});
					}
				}
				break;
			case "prologue2":
				if (direction == 1) {
					aboutTl.progress(0).pause(); // ナビゲーションジャンプに備えて、次のアニメーションを戻しておく
					document.querySelector("#prologue2").scrollTop = 0; // スクロール位置を戻しておく
					topLeadTl.restart();
					topLeadTl.eventCallback("onComplete", () => {
						topScrollObserver.disable();
						prologue2stInitTl.play();
						prologue2St.enable();
						document.body.classList.remove("--pointer-events-none");
						// animating.flag = false;
					});
				} else {
					toggleNavigation("prologue"); // ナビゲーションとIDが結びつかないので、文字列を渡す
					prologueBackTl.progress(0).pause();

					topLeadTl.progress(1);

					document.querySelector(
						"#prologue2"
					).scrollTop = document.querySelector("#prologue2").clientHeight; // スクロール位置を進めておく
					hideSectionLink.restart();
					aboutTl.reverse();
					// topLeadTl.reverse();
					aboutTl.eventCallback("onReverseComplete", () => {
						topScrollObserver.disable();
						prologue2stInitTl.play();
						prologue2St.enable();
						document.body.classList.remove("--pointer-events-none");
						// animating.flag = false;
					});
				}
				break;
			case "about":
				if (direction == 1) {
					toggleNavigation(sectionId);
					mfbmFieldTl.progress(0).pause(); // ナビゲーションジャンプに備えて、次のアニメーションを戻しておく
					aboutTl.restart();
					aboutTl.eventCallback("onComplete", (self) => {
						// allTweenReset(aboutTl);
						showSectionLink.restart();
						animating.flag = false;
						document.body.classList.remove("--pointer-events-none");
					});
				} else {
					hideSectionLink.restart();
					toggleNavigation(sectionId);
					aboutTl.progress(1); // ナビゲーションジャンプに備えて、前のアニメーションを完了しておく
					mfbmFieldTl.reverse();
					mfbmFieldTl.eventCallback("onReverseComplete", () => {
						showSectionLink.restart();
						animating.flag = false;
						document.body.classList.remove("--pointer-events-none");
					});
				}
				break;
			case "business":
				if (direction == 1) {
					hideSectionLink.restart();
					toggleNavigation(sectionId);
					topJobTl.progress(0).pause();
					mfbmFieldTl.restart();
					mfbmFieldTl.eventCallback("onComplete", () => {
						showSectionLink.restart();
						animating.flag = false;
						document.body.classList.remove("--pointer-events-none");
					});
				} else {
					hideSectionLink.restart();
					toggleNavigation(sectionId);
					mfbmFieldTl.progress(1);
					topJobTl.reverse();
					topJobTl.eventCallback("onReverseComplete", () => {
						showSectionLink.restart();
						animating.flag = false;
						document.body.classList.remove("--pointer-events-none");
					});
				}
				break;
			case "job":
				if (direction == 1) {
					topProjectTl.progress(0).pause();
					toggleNavigation(sectionId);
					hideSectionLink.restart();
					topJobTl.restart();
					topJobTl.eventCallback("onComplete", () => {
						showSectionLink.restart();
						animating.flag = false;
						document.body.classList.remove("--pointer-events-none");
					});
				} else {
					hideSectionLink.restart();
					toggleNavigation(sectionId);
					topJobTl.progress(1);
					topProjectTl.reverse();
					topProjectTl.eventCallback("onReverseComplete", () => {
						showSectionLink.restart();
						animating.flag = false;
						document.body.classList.remove("--pointer-events-none");
					});
				}
				break;
			case "project":
				if (direction == 1) {
					hideSectionLink.restart();
					toggleNavigation(sectionId);
					topPersonTl.progress(0).pause();
					topProjectTl.restart();
					topProjectTl.eventCallback("onComplete", () => {
						showSectionLink.restart();
						document.body.classList.remove("--pointer-events-none");
						animating.flag = false;
					});
				} else {
					hideSectionLink.restart();
					toggleNavigation(sectionId);
					topProjectTl.progress(1);
					topPersonTl.reverse();
					topPersonTl.eventCallback("onReverseComplete", () => {
						showSectionLink.restart();
						animating.flag = false;
						document.body.classList.remove("--pointer-events-none");
					});
				}
				break;
			case "person":
				if (direction == 1) {
					hideSectionLink.restart();
					toggleNavigation(sectionId);
					topCultureTl.progress(0).pause();
					topPersonTl.restart();
					topPersonTl.eventCallback("onComplete", () => {
						showSectionLink.restart();
						animating.flag = false;
						document.body.classList.remove("--pointer-events-none");
					});
				} else {
					hideSectionLink.restart();
					toggleNavigation(sectionId);
					topPersonTl.progress(1);
					topCultureTl.reverse();
					topCultureTl.eventCallback("onReverseComplete", () => {
						showSectionLink.restart();
						animating.flag = false;
						document.body.classList.remove("--pointer-events-none");
					});
				}
				break;
			case "culture":
				if (direction == 1) {
					hideSectionLink.restart();
					toggleNavigation(sectionId);
					epilogueTl.progress(0).pause();
					topCultureTl.restart();
					topCultureTl.eventCallback("onComplete", () => {
						showSectionLink.restart();
						animating.flag = false;
						document.body.classList.remove("--pointer-events-none");
					});
				} else {
					console.log("beforetopCultureTl");
					topCultureTl.progress(1);
					toggleNavigation(sectionId);
					epilogueTl.reverse();
					epilogueTl.eventCallback("onReverseComplete", () => {
						showSectionLink.restart();
						animating.flag = false;
						document.body.classList.remove("--pointer-events-none");
						/*
							とりあえず
						*/
						// gsap.set("#topFooter", {
						// 	zIndex: "",
						// });
					});
				}
				break;
			case "epilogue":
				if (direction == 1) {
					hideSectionLink.restart();
					toggleNavigation(sectionId);
					topFooterInitTl.progress(0).pause();
					epilogueTl.restart();
					epilogueTl.eventCallback("onComplete", () => {
						animating.flag = false;
						document.body.classList.remove("--pointer-events-none");
					});
				} else {
					topFooterSt.disable();
					animating.flag = false;
				}
				break;
			case "topFooter":
				/*
							とりあえず
						*/
				// gsap.set("#topFooter", {
				// 	zIndex: "3",
				// });
				document.body.classList.remove("--pointer-events-none");
				topScrollObserver.disable();
				topFooterInitTl.restart();
				topFooterSt.enable();
				break;
			default:
				break;
		}

		currentIndex = index;

		currentSectionId = sectionId;
		// console.log(currentSectionId);
	};

	const spSectionTransition = (sectionId, direction, index) => {
		console.log("ディレクション：" + direction);
		console.log("カレント（前）のセクション：" + currentSectionId);
		console.log("ターゲット（次）セクション：" + sectionId);

		topScrollObserver.enable();

		if (sectionId === "prologue" || sectionId === "prologue2") {
			if (video && video.paused) {
				video.play();
			}
		} else {
			video.pause();
		}
		if (sectionId === "culture") {
			cultureTweenArray.forEach((tween) => {
				tween.play();
			});
		} else {
			cultureTweenArray.forEach((tween) => {
				tween.pause();
			});
		}

		switch (sectionId) {
			case "prologue":
				if (!firstLoad) {
					firstLoad = true;
				} else {
					add;
					if (direction == 1) {
						prologueBackTl.restart();
						prologueBackTl.eventCallback("onComplete", () => {
							animating.flag = false;
						});
					} else {
						window.addEventListener("touchmove", noscroll, {
							passive: false,
						});
						window.addEventListener("wheel", noscroll, { passive: false });
						prologueBackFromPrologue2Tl.restart();
						prologueBackFromPrologue2Tl.eventCallback("onComplete", () => {
							animating.flag = false;
						});
					}
				}
				break;
			case "prologue2":
				if (direction == 1) {
					/*
					スクロールの問題、アニメーションとの関係でトラブルになりそうなので、
					一旦スマホ版だけ反映
					*/

					topLeadTl.restart();
					topScrollObserver.disable();
					prologue2stInitTl.play();

					prologue2St.enable();
					topLeadTl.eventCallback("onComplete", () => {
						window.removeEventListener("touchmove", noscroll, {
							passive: false,
						});
						window.removeEventListener("wheel", noscroll, { passive: false });
						// animating.flag = false;
					});
				} else {
					prologue2St.enable();
					aboutTl.reverse();
					// topLeadTl.reverse();
					topScrollObserver.disable();
					aboutTl.eventCallback("onReverseComplete", () => {
						window.removeEventListener("touchmove", noscroll, {
							passive: false,
						});
						window.removeEventListener("wheel", noscroll, { passive: false });
					});
				}
				break;
			case "about":
				if (direction == 1) {
					window.addEventListener("touchmove", noscroll, {
						passive: false,
					});
					window.addEventListener("wheel", noscroll, {
						passive: false,
					});
					aboutTl.restart();
					aboutTl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					window.addEventListener("touchmove", noscroll, {
						passive: false,
					});
					window.addEventListener("wheel", noscroll, {
						passive: false,
					});
					spAbout2Tl.reverse();
					spAbout2Tl.eventCallback("onReverseComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "about2":
				if (direction == 1) {
					spAbout2Tl.restart();
					spAbout2Tl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					spAboutLinkTl.reverse();
					spAboutLinkTl.eventCallback("onReverseComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "aboutLink":
				if (direction == 1) {
					spAboutLinkTl.restart();
					spAboutLinkTl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					mfbmFieldTl.reverse();
					mfbmFieldTl.eventCallback("onReverseComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "business":
				if (direction == 1) {
					mfbmFieldTl.restart();
					mfbmFieldTl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					console.log("test");
					spBusiness2Tl.reverse();
					spBusiness2Tl.eventCallback("onReverseComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "business2":
				if (direction == 1) {
					spBusiness2Tl.restart();
					spBusiness2Tl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					spBusinessLinkTl.reverse();
					spBusinessLinkTl.eventCallback("onReverseComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "businessLink":
				if (direction == 1) {
					spBusinessLinkTl.restart();
					spBusinessLinkTl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					topJobTl.reverse();
					topJobTl.eventCallback("onReverseComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "job":
				if (direction == 1) {
					topJobTl.restart();
					topJobTl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					spJob2Tl.reverse();
					spJob2Tl.eventCallback("onReverseComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "job2":
				if (direction == 1) {
					spJob2Tl.restart();
					spJob2Tl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					spJobLinkTl.reverse();
					spJobLinkTl.eventCallback("onReverseComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "jobLink":
				if (direction == 1) {
					spJobLinkTl.restart();
					spJobLinkTl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					topProjectTl.reverse();
					topProjectTl.eventCallback("onReverseComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "project":
				if (direction == 1) {
					topProjectTl.restart();
					topProjectTl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					spProjectLinkTl.reverse();
					spProjectLinkTl.eventCallback("onReverseComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "projectLink":
				if (direction == 1) {
					spProjectLinkTl.restart();
					spProjectLinkTl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					topPersonTl.reverse();
					topPersonTl.eventCallback("onReverseComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "person":
				if (direction == 1) {
					topPersonTl.restart();
					topPersonTl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					spPersonLinkTl.reverse();
					spPersonLinkTl.eventCallback("onReverseComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "personLink":
				if (direction == 1) {
					spPersonLinkTl.restart();
					spPersonLinkTl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					topCultureTl.reverse();
					topCultureTl.eventCallback("onReverseComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "culture":
				if (direction == 1) {
					topCultureTl.restart();
					topCultureTl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					spCulture2Tl.reverse();
					spCulture2Tl.eventCallback("onReverseComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "culture2":
				if (direction == 1) {
					spCulture2Tl.restart();
					spCulture2Tl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					spCultureLinkTl.reverse();
					spCultureLinkTl.eventCallback("onReverseComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "cultureLink":
				if (direction == 1) {
					spCultureLinkTl.restart();
					spCultureLinkTl.eventCallback("onComplete", () => {
						animating.flag = false;
					});
				} else {
					window.addEventListener("touchmove", noscroll, {
						passive: false,
					});
					window.addEventListener("wheel", noscroll, { passive: false });
					epilogueTl.reverse();
					epilogueTl.eventCallback("onReverseComplete", () => {
						animating.flag = false;
					});
				}
				break;
			case "epilogue":
				toggleNavigation(sectionId);
				if (direction == 1) {
					epilogueTl.restart();
					epilogueTl.eventCallback("onComplete", () => {
						animating.flag = false;

						/*
						一旦これで（#footerいらない？）
						*/

						topScrollObserver.disable();

						window.removeEventListener("touchmove", noscroll, {
							passive: false,
						});
						window.removeEventListener("wheel", noscroll, { passive: false });

						topFooterInitTl.play();
						topFooterSt.enable();
					});
				} else {
					topFooterSt.disable();
					animating.flag = false;
				}
				break;
			case "topFooter":
				// topScrollObserver.disable();
				// topFooterInitTl.play();
				// topFooterSt.enable();
				break;
			default:
				break;
		}

		currentIndex = index;
		currentSectionId = sectionId;
	};

	function gotoSection(index, direction) {
		console.log(index);
		// let fromTop = direction === -1,
		// 	dFactor = fromTop ? -1 : 1;

		animating.flag = true;
		sectionId = eps[index].dataset.ep || eps[index].dataset.epSp;

		if (spmql.matches) {
			spSectionTransition(sectionId, direction, index);
		} else {
			sectionTransition(sectionId, direction, index);
		}
	}

	/*
		windowイベントにしかアタッチできないらしい。
		スクロールのエリアを変える可能性も
	*/

	// ScrollTrigger.normalizeScroll(true);

	topScrollObserver = ScrollTrigger.observe({
		type: "wheel,touch,pointer",
		wheelSpeed: -1,
		onDown: () => {
			// console.log(currentIndex);
			!animating.flag && currentIndex > 0 && gotoSection(currentIndex - 1, -1);
		},
		onUp: () => {
			// console.log(currentIndex);
			!animating.flag &&
				currentIndex < eps.length - 1 &&
				gotoSection(currentIndex + 1, 1);
		},
		tolerance: 100,
		preventDefault: true,
		// onEnable: (self) => (self.savedScroll = self.scrollY()), // save the scroll position
		// onChangeY: (self) => self.scrollY(self.savedScroll), // refuse to scroll
	});

	gotoSection(0, 1);
}

export { topSections, topScrollObserver, tweenArray, animating };
