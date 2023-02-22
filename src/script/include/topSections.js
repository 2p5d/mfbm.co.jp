import { touchDevice, remUnit, spmql, header, noscroll } from "./vars";
import { video } from "./topVideo";
import {
	prologueInit,
	prologueFirstTl,
	prologueBackTl,
	prologueBackFromPrologue2Tl,
	prologueRepeatTween,
	topLeadTl,
	prologue2stInitTl,
	prologue2St,
} from "./top-animations/prologueInit";
import { aboutInit, aboutTl } from "./top-animations/aboutInit";
import { mfbmFieldInit, mfbmFieldTl } from "./top-animations/mfbmFieldInit";
import { topJobInit, topJobTl } from "./top-animations/topJobInit";
import { topProjectInit, topProjectTl } from "./top-animations/topProjectInit";
import { topPersonInit, topPersonTl } from "./top-animations/topPersonInit";
import {
	topCultureInit,
	topCultureTl,
	cultureTweenArray,
} from "./top-animations/topCultureInit";
import { epilogueInit, epilogueTl } from "./top-animations/epilogueInit";
import {
	topFooterInit,
	topFooterInitTl,
	topFooterSt,
	sectionScrollTween,
	sectionBottomGradientTween,
} from "./top-animations/topFooterInit";

import { gsap, ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/Observer";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger, Observer, DrawSVGPlugin);

let topScrollObserver,
	currentSectionId,
	firstLoad,
	pcSectionTransition,
	spSectionTransition;

const /*
アニメーションモジュールで書き換えするので、参照渡し
*/
	animating = {
		flag: false,
	};

function topCover() {
	const content = document.querySelector(".top-cover"),
		removeCover = () => {
			content.classList.add("--disable");
			if (video) {
				video.play();
			}
			content.addEventListener("animationend", (event) => {
				prologueFirstTl.play();
				prologueRepeatTween.play();

				prologueFirstTl.eventCallback("onComplete", () => {
					animating.flag = false;
					document.body.classList.remove("--pointer-events-none");
				});

				if (!spmql.matches) {
					window.removeEventListener("touchmove", noscroll, {
						passive: false,
					});
					window.removeEventListener("wheel", noscroll, { passive: false });
				}

				// content.remove();
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
		初回判定はナシに
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
	let currentIndex = -1,
		sectionId;

	/*
	PCとSPでセクションの差異がなくなったのでナシに
	*/

	// mm.add("(min-width: 768px)", () => {
	// 	eps = document.querySelectorAll("[data-ep]");
	// });
	// mm.add("(max-width: 767px)", () => {
	// 	eps = document.querySelectorAll("[data-ep],[data-ep-sp]");
	// });

	const eps = document.querySelectorAll("[data-ep]"),
		epsInit = () => {
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
	window.onbeforeunload = () => window.scrollTo(0, 0);

	/*
		今更だが、少し前のsafari（var13で確認）では
		spmql.addEventListenerだとエラーになる。

	*/
	if (spmql?.addEventListener) {
		spmql.addEventListener("change", () => {
			location.reload();
		});
	} else {
		spmql.addListener(() => {
			location.reload();
		});
	}

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
				easeEach: "none",
				// ease: "power1.inOut",
			},
			transformOrigin: "right",
			duration: 2,
			repeat: -1,
			ease: "power2.out",
		});

	const toggleSectionLink = (sectionId) => {
		sectionsLinks.forEach((sectionsLink) => {
			const linkId = sectionsLink.dataset.topTo;

			if (sectionId === linkId) {
				sectionsLink.classList.add("--active");
			} else if (sectionsLink.classList.contains("--active")) {
				sectionsLink.classList.remove("--active");
			}
		});
	};

	const showSectionLink = gsap.to(sectionLinksWRapper, {
		// delay: 0.5,
		paused: true,
		duration: 0.35,
		autoAlpha: 1,
		overwrite: "auto", // hideSectionLinkを上書き
		ease: "power2.out",
		onStart: () => {
			sectionLinkArrowTl.play();
		},
	});

	const hideSectionLink = gsap.to(sectionLinksWRapper, {
		// delay: 0.5,
		paused: true,
		duration: 0.35,
		autoAlpha: 0,
		ease: "power2.out",
		// overwrite: "auto", // showSectionLinkが上書きされる場合があったので、設定しない
		onStart: (self) => {
			sectionLinkArrowTl.pause();
		},
	});

	const sectionsLinks = document.querySelectorAll(
		".ep__section-label__links-item"
	);
	const toggleNavigation = (sectionId) => {
		navigationLinks.forEach((navigationLink) => {
			const linkId = navigationLink.href.split("#")[1];
			if (sectionId === linkId) {
				navigationLink.classList.add("--active");
			} else if (navigationLink.classList.contains("--active")) {
				navigationLink.classList.remove("--active");
			}
		});
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

				if (targetSectionId === "prologue") {
					/*
					プロローグへの遷移は、#prologue,#prologue2の共通背景のz-indexの関係で
					ターゲット（次）のセクションをフェードインできないので、カレント（前）のセクションをフェードアウトする
				*/

					gsap
						.timeline()
						.set(".ep__01-02-bg", {
							zIndex: 1,
						})
						.to(getSection(currentSectionId), {
							duration: 1,
							autoAlpha: 0,
							ease: "power2.out",
						});
				}
				/*
					プロローグからのジャンプ時にはフェードアウト（プロローグのトランジション対象なので戻すのは必要無い）
				*/
				if (currentSectionId === "prologue") {
					gsap.to(".ep__top-section-5minute, .header__link", {
						duration: 1,
						autoAlpha: 0,
					});
				}
				if (currentSectionId === "topFooter") {
					/*
					エピローグからの遷移のスクロールトリガー関係の処理
				*/
					topScrollObserver.enable(); // スクロールイベント監視再開
					sectionScrollTween.reverse(); // スクロールラベル表示
					sectionBottomGradientTween.reverse(); // スクロールラベル下のグラデ表示
					window.addEventListener("touchmove", noscroll, {
						passive: false,
					}); // スクロール禁止
					window.addEventListener("wheel", noscroll, { passive: false }); //　スクロール禁止
					topFooterSt.disable(); // スクロールトリガー停止
					gsap.to("#topFooter", {
						duration: 1,
						autoAlpha: 0,
						ease: "power2.out",
						clearProps: "opacity,visibility",
						onComplete: (self) => {
							gsap.set("#topFooter", {
								zIndex: "",
							});
						},
					}); // フッターはz-indexはそのままでフェードアウトして、コールバックで戻す
				}

				/*
					セクション間移動禁止
				*/
				animating.flag = true;

				/*
					リンクが無いセクションの処理
				*/
				if (targetSectionId === "prologue" || targetSectionId === "epilogue") {
					hideSectionLink.restart();
				}

				pcSectionTransition(
					targetSectionId,
					1, // ディレクションは1に
					getSectionIndex(targetSectionId) // ターゲットのIDでスクロール用のインデックスもジャンプさせる
				);
			});
		});
	};
	navigationInit();

	/*
	残件：
	・z-indexの関係で、トップに戻ったときに、5minuteがクリックできない
	*/

	pcSectionTransition = (sectionId, direction, index) => {
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
		} else {
			getSection(currentSectionId).style.zIndex = 2; // カレント
			getSection(sectionId).style.zIndex = 1; // ターゲット
		}

		/*
			ループするコンテンツの処理。
			各トランジションに書いていたが、ナビゲーションでジャンプするので、共通処理に変更
		*/
		if (sectionId === "prologue" || sectionId === "prologue2") {
			if (video && video.paused) {
				video.play();
			}
		} else {
			video.pause();
		}
		if (sectionId === "prologue") {
			prologueRepeatTween.play();
		} else {
			prologueRepeatTween.pause();
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
						// prologue2St.disable();
						prologueBackTl.restart();
						prologueBackTl.eventCallback("onComplete", () => {
							animating.flag = false;
							document.body.classList.remove("--pointer-events-none");
							topLeadTl.progress(0).pause();
						});
					} else {
						// prologue2St.disable();

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
					// document.querySelector("#prologue2").scrollTop = 0; // スクロール位置リセット
					topLeadTl.restart();
					topLeadTl.eventCallback("onComplete", () => {
						// topScrollObserver.disable();
						// prologue2stInitTl.play();
						// prologue2St.enable();
						document.body.classList.remove("--pointer-events-none");
						animating.flag = false;
					});
				} else {
					toggleNavigation("prologue"); // ナビゲーションとIDが結びつかないので、文字列を渡す
					// prologueBackTl.progress(0).pause();

					// document.querySelector(
					// 	"#prologue2"
					// ).scrollTop = document.querySelector("#prologue2").clientHeight; // スクロール位置を進めておく
					hideSectionLink.restart();
					topLeadTl.progress(1);
					aboutTl.reverse();
					// topLeadTl.reverse();
					aboutTl.eventCallback("onReverseComplete", () => {
						// topScrollObserver.disable();
						// prologue2stInitTl.play();
						// prologue2St.enable();
						document.body.classList.remove("--pointer-events-none");
						animating.flag = false;
					});
				}
				break;
			case "about":
				if (direction == 1) {
					toggleNavigation(sectionId); // ナビゲーションの切替
					toggleSectionLink(sectionId); // リンクラベルの切替
					mfbmFieldTl.progress(0).pause(); // 次のトランジションを準備（ナビゲーションジャンプに対応）
					aboutTl.restart(); // トランジション
					aboutTl.eventCallback("onComplete", (self) => {
						showSectionLink.restart(); // リンクラベル表示切替
						animating.flag = false; // セクション移動を許可
						document.body.classList.remove("--pointer-events-none"); // クリックを許可
					});
				} else {
					toggleNavigation(sectionId); // ナビゲーションの切替
					hideSectionLink.restart(); // リンクラベル表示切替
					aboutTl.progress(1); // 次のトランジションを準備（ナビゲーションジャンプに対応）
					mfbmFieldTl.reverse(); // トランジション
					mfbmFieldTl.eventCallback("onReverseComplete", () => {
						showSectionLink.restart(); // リンクラベル表示切替
						toggleSectionLink(sectionId); // リンクラベルの切替
						animating.flag = false; // セクション移動を許可
						document.body.classList.remove("--pointer-events-none"); // クリックを許可
					});
				}
				break;
			case "business":
				if (direction == 1) {
					toggleNavigation(sectionId);
					hideSectionLink.restart();
					topJobTl.progress(0).pause();
					mfbmFieldTl.restart();
					mfbmFieldTl.eventCallback("onComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						animating.flag = false;
						document.body.classList.remove("--pointer-events-none");
					});
				} else {
					toggleNavigation(sectionId);
					hideSectionLink.restart();
					mfbmFieldTl.progress(1);
					topJobTl.reverse();
					topJobTl.eventCallback("onReverseComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						animating.flag = false;
						document.body.classList.remove("--pointer-events-none");
					});
				}
				break;
			case "job":
				if (direction == 1) {
					toggleNavigation(sectionId);
					hideSectionLink.restart();
					topProjectTl.progress(0).pause();
					topJobTl.restart();
					topJobTl.eventCallback("onComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						animating.flag = false;
						document.body.classList.remove("--pointer-events-none");
					});
				} else {
					toggleNavigation(sectionId);
					hideSectionLink.restart();
					topJobTl.progress(1);
					topProjectTl.reverse();
					topProjectTl.eventCallback("onReverseComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						animating.flag = false;
						document.body.classList.remove("--pointer-events-none");
					});
				}
				break;
			case "project":
				if (direction == 1) {
					toggleNavigation(sectionId);
					hideSectionLink.restart();
					topPersonTl.progress(0).pause();
					topProjectTl.restart();
					topProjectTl.eventCallback("onComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						document.body.classList.remove("--pointer-events-none");
						animating.flag = false;
					});
				} else {
					toggleNavigation(sectionId);
					hideSectionLink.restart();
					topProjectTl.progress(1);
					topPersonTl.reverse();
					topPersonTl.eventCallback("onReverseComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						animating.flag = false;
						document.body.classList.remove("--pointer-events-none");
					});
				}
				break;
			case "person":
				if (direction == 1) {
					toggleNavigation(sectionId);
					hideSectionLink.restart();
					topCultureTl.progress(0).pause();
					topPersonTl.restart();
					topPersonTl.eventCallback("onComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						animating.flag = false;
						document.body.classList.remove("--pointer-events-none");
					});
				} else {
					toggleNavigation(sectionId);
					hideSectionLink.restart();
					topPersonTl.progress(1);
					topCultureTl.reverse();
					topCultureTl.eventCallback("onReverseComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						animating.flag = false;
						document.body.classList.remove("--pointer-events-none");
					});
				}
				break;
			case "culture":
				if (direction == 1) {
					toggleNavigation(sectionId);
					hideSectionLink.restart();
					epilogueTl.progress(0).pause();
					topCultureTl.restart();
					topCultureTl.eventCallback("onComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						animating.flag = false;
						document.body.classList.remove("--pointer-events-none");
					});
				} else {
					toggleNavigation(sectionId);
					hideSectionLink.restart();
					topCultureTl.progress(1);
					epilogueTl.reverse();
					epilogueTl.eventCallback("onReverseComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						animating.flag = false;
						document.body.classList.remove("--pointer-events-none");
					});
				}
				break;
			case "epilogue":
				if (direction == 1) {
					toggleNavigation(sectionId);
					hideSectionLink.restart();
					document.querySelector("#topFooter").scrollTop = 0; // スクロール位置リセット
					epilogueTl.restart();
					epilogueTl.eventCallback("onComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						animating.flag = false;
						document.body.classList.remove("--pointer-events-none");
					});
				} else {
					window.addEventListener("touchmove", noscroll, {
						passive: false,
					}); // スクロール禁止
					window.addEventListener("wheel", noscroll, { passive: false }); //　スクロール禁止
					topFooterSt.disable(); // スクロールトリガー停止
					// showSectionLink.restart(); // タイミングが微妙なので一旦なし
					animating.flag = false;
				}
				break;
			case "topFooter":
				hideSectionLink.restart();
				toggleNavigation(sectionId);
				topScrollObserver.disable(); // スクロールイベント監視停止
				window.removeEventListener("touchmove", noscroll, {
					passive: false,
				}); // スクロール許可
				window.removeEventListener("wheel", noscroll, { passive: false }); // スクロール許可
				topFooterInitTl.restart();
				document.body.classList.remove("--pointer-events-none");
				topFooterSt.enable(); // スクロールトリガー開始（スクロールトリガーはイベントコールバックのメソッドが無いので処理内容はモジュール内で確認）
				break;
			default:
				break;
		}

		currentIndex = index; // グローバルインデックスを更新
		currentSectionId = sectionId; // グローバルIDを更新
	};

	spSectionTransition = (sectionId, direction, index) => {
		console.log("ディレクション：" + direction);
		console.log("カレント（前）のセクション：" + currentSectionId);
		console.log("ターゲット（次）セクション：" + sectionId);

		/*
			ループするコンテンツの処理。
			各トランジションに書いていたが、ナビゲーションでジャンプするので、共通処理に変更
		*/
		if (sectionId === "prologue" || sectionId === "prologue2") {
			if (video && video.paused) {
				video.play();
			}
		} else {
			video.pause();
		}
		if (sectionId === "prologue") {
			prologueRepeatTween.play();
		} else {
			prologueRepeatTween.pause();
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
						prologueBackTl.restart();
						prologueBackTl.eventCallback("onComplete", () => {
							animating.flag = false;
						});
					} else {
						window.addEventListener("touchmove", noscroll, {
							passive: false,
						}); // スクロール禁止
						window.addEventListener("wheel", noscroll, { passive: false }); // スクロール禁止
						// prologue2St.disable(); // スクロールトリガー停止
						document.querySelector("#prologue2").scrollTop = 0; // スクロール位置リセット
						prologueBackFromPrologue2Tl.restart();
						prologueBackFromPrologue2Tl.eventCallback("onComplete", () => {
							animating.flag = false;
						});
					}
				}
				break;

			/*
					prologue2Stをenable、disableすると都度判定が走るからか、セクション移動した瞬間にonLeaveが発動してしまうので、オンオフはしないようにした。トラブル無いかは経過観測
					→ もし問題がある場合、例えば、ディレクションに合わせて、スクロールトリガーを分ける、または処理の順番見直しなど（一番時間がかかるのでやりたくない）
			*/

			case "prologue2":
				if (direction == 1) {
					topLeadTl.restart();
					topLeadTl.eventCallback("onComplete", () => {
						topScrollObserver.disable(); // スクロールイベント監視停止
						// animating.flag = false; // 監視停止するので、不要
						window.removeEventListener("touchmove", noscroll, {
							passive: false,
						}); // スクロール許可
						window.removeEventListener("wheel", noscroll, { passive: false }); // スクロール許可
						// prologue2St.enable(); // スクロールトリガー開始（スクロールトリガーはイベントコールバックのメソッドが無いので処理内容はモジュール内で確認）
					});
				} else {
					hideSectionLink.restart();
					aboutTl.reverse();
					aboutTl.eventCallback("onReverseComplete", () => {
						topScrollObserver.disable(); // スクロールイベント監視停止
						// animating.flag = false; // 監視停止するので、不要
						window.removeEventListener("touchmove", noscroll, {
							passive: false,
						}); // スクロール許可
						window.removeEventListener("wheel", noscroll, { passive: false }); // スクロール許可
						// prologue2St.enable(); // スクロールトリガー開始（スクロールトリガーはイベントコールバックのメソッドが無いので処理内容はモジュール内で確認）
					});
				}
				break;
			case "about":
				if (direction == 1) {
					document.querySelector(
						"#prologue2"
					).scrollTop = document.querySelector(".top-lead").clientHeight; // スクロール位置を完了に設定
					window.addEventListener("touchmove", noscroll, {
						passive: false,
					}); // スクロール禁止
					window.addEventListener("wheel", noscroll, { passive: false }); // スクロール禁止
					// prologue2St.disable(); // スクロールトリガー停止
					toggleSectionLink(sectionId);
					aboutTl.restart();
					aboutTl.eventCallback("onComplete", () => {
						showSectionLink.restart();
						animating.flag = false;
					});
				} else {
					hideSectionLink.restart();
					window.addEventListener("touchmove", noscroll, {
						passive: false,
					});
					window.addEventListener("wheel", noscroll, {
						passive: false,
					});
					mfbmFieldTl.reverse();
					mfbmFieldTl.eventCallback("onReverseComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						animating.flag = false;
					});
				}
				break;
			case "business":
				if (direction == 1) {
					hideSectionLink.restart();
					mfbmFieldTl.restart();
					mfbmFieldTl.eventCallback("onComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						animating.flag = false;
					});
				} else {
					hideSectionLink.restart();
					topJobTl.reverse();
					topJobTl.eventCallback("onReverseComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						animating.flag = false;
					});
				}
				break;
			case "job":
				if (direction == 1) {
					hideSectionLink.restart();
					topJobTl.restart();
					topJobTl.eventCallback("onComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						animating.flag = false;
					});
				} else {
					hideSectionLink.restart();
					topProjectTl.reverse();
					topProjectTl.eventCallback("onReverseComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						animating.flag = false;
					});
				}
				break;
			case "project":
				if (direction == 1) {
					hideSectionLink.restart();
					topProjectTl.restart();
					topProjectTl.eventCallback("onComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						animating.flag = false;
					});
				} else {
					hideSectionLink.restart();
					topPersonTl.reverse();
					topPersonTl.eventCallback("onReverseComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						animating.flag = false;
					});
				}
				break;
			case "person":
				if (direction == 1) {
					hideSectionLink.restart();
					topPersonTl.restart();
					topPersonTl.eventCallback("onComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						animating.flag = false;
					});
				} else {
					hideSectionLink.restart();
					topCultureTl.reverse();
					topCultureTl.eventCallback("onReverseComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						animating.flag = false;
					});
				}
				break;
			case "culture":
				if (direction == 1) {
					hideSectionLink.restart();
					epilogueTl.progress(0).pause();
					topCultureTl.restart();
					topCultureTl.eventCallback("onComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						animating.flag = false;
					});
				} else {
					hideSectionLink.restart();
					topCultureTl.progress(1);
					epilogueTl.reverse();
					epilogueTl.eventCallback("onReverseComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						animating.flag = false;
					});
				}
				break;
			case "epilogue":
				if (direction == 1) {
					hideSectionLink.restart();
					epilogueTl.restart();
					epilogueTl.eventCallback("onComplete", () => {
						showSectionLink.restart();
						toggleSectionLink(sectionId);
						animating.flag = false;
						spSectionTransition("topFooter", 1, 9);
					});
				} else {
					window.addEventListener("touchmove", noscroll, {
						passive: false,
					}); // スクロール禁止
					window.addEventListener("wheel", noscroll, { passive: false }); //　スクロール禁止
					topFooterSt.disable(); // スクロールトリガー停止
					setTimeout(() => {
						showSectionLink.restart();
					}, 500);
					animating.flag = false;
				}
				break;
			case "topFooter":
				sectionScrollTween.eventCallback("onStart", () => {
					hideSectionLink.restart();
				});
				topScrollObserver.disable(); // スクロールイベント監視停止
				window.removeEventListener("touchmove", noscroll, {
					passive: false,
				}); // スクロール許可
				window.removeEventListener("wheel", noscroll, { passive: false }); // スクロール許可
				topFooterInitTl.restart();
				topFooterSt.enable(); // スクロールトリガー開始（スクロールトリガーはイベントコールバックのメソッドが無いので処理内容はモジュール内で確認）
				break;
			default:
				break;
		}

		currentIndex = index;
		currentSectionId = sectionId;
	};

	function gotoSection(index, direction) {
		console.log(index);
		animating.flag = true;
		/*
			PCとSPでセクションの差異がなくなったのでナシに
		*/
		// sectionId = eps[index].dataset.ep || eps[index].dataset.epSp;
		sectionId = eps[index].dataset.ep;

		/*
			PCとSPでセクションの差異がなくなったが、
			それでもセクションの処理や、ナビゲーションの有無で、
			処理に差があるのでブレイクポイントで分けた
		*/
		if (spmql.matches) {
			spSectionTransition(sectionId, direction, index);
		} else {
			pcSectionTransition(sectionId, direction, index);
		}
	}

	// ScrollTrigger.normalizeScroll(true); // windowイベントにしかアタッチできないので、使えない

	topScrollObserver = Observer.create({
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
		tolerance: 10,
		preventDefault: true,
		// onEnable: (self) => (self.savedScroll = self.scrollY()), // save the scroll position
		// onChangeY: (self) => self.scrollY(self.savedScroll), // refuse to scroll
	});

	gotoSection(0, 1);
}

export {
	topSections,
	topScrollObserver,
	animating,
	pcSectionTransition,
	spSectionTransition,
};
