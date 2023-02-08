/* bace import */
import "./include/webFontConfig";
import { setScrollBarWidth } from "./include/vars";
import { modal } from "./include/modal";
import Chart from "chart.js/auto";
// import { viewPortHeight } from "./include/viewPortHeight";
import { smoothScroll } from "./include/smoothScroll";
import { accordion } from "./include/accordion";
import { toggleToTop } from "./include/toggleToTop";
// import "./libs/css_browser_selector.min";
// import { fadeUp } from "./include/scrollTrigger";
import { topCover, topSections } from "./include/topSections";
// import { topCover, topSections3 } from "./include/topSections3";
import { topVideo } from "./include/topVideo";

/* person import */
import { personSlider } from "./include/personSlider";
import { personScheduleAccordion } from "./include/personScheduleAccordion";

/* about01 import */
import { about01Slider } from "./include/about01Slider";

/* business import */
import { businessHover } from "./include/businessHover";

if (
	document.readyState === "interactive" ||
	document.readyState === "complete"
) {
	resolve();
} else {
	window.addEventListener("DOMContentLoaded", resolve);
}

function resolve() {
	document.body.removeAttribute("unresolved");
	init();
}

function init() {
	// fadeUp();
	modal();
	smoothScroll();
	toggleToTop();
	accordion();
	setScrollBarWidth();
	switch (true) {
		case document.body.classList.contains("page-top"):
			top();
			break;
		case document.body.classList.contains("page-about01"):
			about01();
			break;
		case document.body.classList.contains("page-business"):
			business();
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
	// document.querySelector(".top-cover").remove(); // 開発用
	topCover();
	topVideo();
	topSections();
	// topSections3();
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
