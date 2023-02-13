import { spmql, setScrollBarWidth } from "./vars";
import { topScrollObserver } from "./topSections";
import {
	disableBodyScroll,
	enableBodyScroll,
	clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { BodyScrollOptions } from "body-scroll-lock";
BodyScrollOptions = {
	reserveScrollBarGap: true,
};
import { gsap } from "gsap/all";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(Observer);

let modalFlag;

// 外部モジュール用のフラグリセット関数
function resetModalFlag() {
	modalFlag = false;
}

function modal() {
	let wrap, wrapInner, movieVideo;

	function disableModal() {
		const fadeOut = [{ opacity: "0" }];
		const fadeOutTiming = {
			duration: 300,
			easing: "ease-out",
			// fill: "forwards",
		};
		const content = wrapInner.children[0];

		if (topScrollObserver) {
			if (!topScrollObserver.isEnabled) {
				topScrollObserver.enable();
			}
		}

		enableBodyScroll(wrapInner);

		document.body.classList.remove("--scroll-bar-padding-active");
		if (movieVideo) {
			movieVideo.pause();
		}
		wrap.animate(fadeOut, fadeOutTiming).onfinish = () => {
			wrap.after(content);
			wrap.remove();
			wrap.removeEventListener("click", closeModalTrigger);
			modalFlag = false;
		};
	}

	function closeModalTrigger(event) {
		// モーダル内のクローズトリガー
		if (
			event.target.closest(".modal-close") ||
			!event.target.closest("[data-modal-close-exclusion]")
		) {
			disableModal();
			// ↓モーダル外で付与したクラスなどの処理
			const modalActiveClass = document.querySelector(".modal-active");
			if (modalActiveClass) {
				modalActiveClass.classList.remove("modal-active");
			}
		}
		false;
	}

	function activeModal(content, id) {
		if (topScrollObserver) {
			if (topScrollObserver.isEnabled) {
				topScrollObserver.disable();
			}
		}

		wrap = document.createElement("div");
		wrap.className = "modal";
		Object.assign(wrap.style, {
			position: "fixed",
			top: "0",
			right: "0",
			bottom: "0",
			left: "0",
			width: "100vw", // ガタツキ防止
			height: "100vh", // iosでアドレスバー変化のガタツキ防止
			overflow: "hidden",
			opacity: "0",
		});

		wrapInner = document.createElement("div");
		wrapInner.className = "modal__inner";
		Object.assign(wrapInner.style, {
			width: "100%",
			height: "100%",
			overflowY: "auto",
			overscrollBehaviorY: "none",
			paddingRight: `${
				window.innerWidth - document.documentElement.clientWidth
			}px`, // 親のガタツキ防止の100vwでスクロールバーを超えるので、その分余白設定
		});
		wrap.classList.add(`modal--${id}`);
		content.before(wrap);
		wrap.appendChild(wrapInner);
		wrapInner.appendChild(content);
		const fadeIn = [{ opacity: "1" }];
		const fadeInTiming = {
			duration: 400,
			easing: "ease-out",
			fill: "forwards",
		};
		wrap.animate(fadeIn, fadeInTiming).onfinish = () => {
			wrap.style.opacity = "1"; // safariでfadeOut = [{ opacity: "0" }];が効かなくなるので
		};

		movieVideo = content.querySelector("video");
		if (movieVideo) {
			movieVideo.play();
		}
		setScrollBarWidth();
		disableBodyScroll(wrapInner, BodyScrollOptions);
		document.body.classList.add("--scroll-bar-padding-active");
		modalFlag = true;
		wrap.addEventListener("click", closeModalTrigger);
	}

	const modalContents = document.querySelectorAll("[data-modal-content]");

	function modalInit(trigger) {
		const modalTriggerId = trigger.dataset.modalTrigger;
		for (let i = 0; i < modalContents.length; i++) {
			let modalContentId = modalContents[i].dataset.modalContent;
			if (modalContentId === modalTriggerId) {
				activeModal(modalContents[i], modalContentId);
				break;
			}
		}
	}

	function modalTrigger(event) {
		const trigger = this;
		event.preventDefault();
		if (trigger.classList.contains("modal-active")) {
			trigger.classList.remove("modal-active");
			disableModal();
			return;
		} else {
			trigger.classList.add("modal-active");
			modalInit(trigger);
			return;
		}
	}

	const modalTriggers = document.querySelectorAll("[data-modal-trigger]");
	function toggleModal(event) {
		modalTriggers.forEach((trigger) => {
			trigger.addEventListener("click", modalTrigger);
		});
		// ブレイクポイントでモーダルの有り無しがある場合、トリガーのイベント処理分岐
		// if (event.matches) {
		// 	modalTriggers.forEach((trigger) => {
		// 		trigger.addEventListener("click", modalTrigger);
		// 	});
		// } else {
		// 	modalTriggers.forEach((trigger) => {
		// 		trigger.removeEventListener("click", modalTrigger);
		// 		if (trigger.classList.contains("modal-active")) {
		// 			trigger.classList.remove("modal-active");
		// 		}
		// 	});
		// }
	}

	toggleModal();

	// // ブレイクポイントでモーダルの有り無しがある場合、モーダルをフェードアウト
	// spmql.addEventListener("change", (event) => {
	// 	toggleModal(event);
	// 	if (modalFlag) {
	// 		if (!event.matches) {
	// 			disableModal();
	// 		}
	// 	}
	// });
	// toggleModal(spmql);
}

export { modal, modalFlag, resetModalFlag };
