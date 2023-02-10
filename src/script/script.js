/* bace import */
import "./include/webFontConfig";
import { setScrollBarWidth, touchDevice, spmql } from "./include/vars";
import { modal } from "./include/modal";
import { onceTransition, tlOnce } from "./include/onceTransition";
// import { viewPortHeight } from "./include/viewPortHeight";
import { smoothScroll } from "./include/smoothScroll";
import { accordion } from "./include/accordion";
import { toggleToTop } from "./include/toggleToTop";
import { topTest } from "./include/topTest";
// import "./libs/css_browser_selector.min";
import {
	scrollRevealInit,
	scrollReveal,
	scrollRevealItems,
	scrollRevealGroupInit,
	scrollRevealGroup,
	scrollRevealGroups,
} from "./include/scrollReveal";
import { topCover, topSections } from "./include/topSections";
import { topVideo, video } from "./include/topVideo";

/* person import */
import { personIndex } from "./include/personIndex";

/* person import */
import { personSlider } from "./include/personSlider";
import { personScheduleAccordion } from "./include/personScheduleAccordion";

/* about01 import */
import { about01Slider } from "./include/about01Slider";

/* business import */
import { businessHover } from "./include/businessHover";

window.addEventListener("DOMContentLoaded", resolve);

if (touchDevice) {
	document.documentElement.classList.add("touch-device");
}

function resolve() {
	document.body.classList.remove("contents-hidden");
	init();
}

function init() {
	if (
		!document.body.classList.contains("page-top") &&
		!document.body.classList.contains("page-index_test")
	) {
		onceTransition();
		tlOnce.play();
		scrollRevealInit();
		if (scrollRevealItems.length) {
			tlOnce.add(scrollReveal(), "<75%");
		}
		scrollRevealGroupInit();
		if (scrollRevealGroups.length) {
			tlOnce.add(scrollRevealGroup(), "<75%");
		}
		smoothScroll();
	}

	modal();
	toggleToTop();
	accordion();
	setScrollBarWidth();
	switch (true) {
		case document.body.classList.contains("page-top"):
			top();
			break;
		case document.body.classList.contains("page-index_test"):
			topTest();
			break;
		case document.body.classList.contains("page-about01"):
			about01();
			break;
		case document.body.classList.contains("page-business"):
			business();
			break;
		case document.body.classList.contains("page-person"): // elm.classList.valueで文字列取得してincludes()で部分一致
			personIndex();
			break;
		case document.body.classList.value.includes("page-person0"): // elm.classList.valueで文字列取得してincludes()で部分一致
			personSingle();
			break;
		default:
			break;
	}
}

/* each page */

// top
function top() {
	if (!spmql.matches) {
		topCover();
		topVideo();
		topSections();
	} else {
		topVideo();
		topCover();
		// video.play();
		// document.querySelector(".top-cover").remove(); // 開発用
	}
}

// about01
function about01() {
	about01Slider();
}

// business
function business() {
	businessHover();
}

// person
function personSingle() {
	personSlider();
	personScheduleAccordion();
}
