/* bace import */
import "./include/webFontConfig";
import { modal } from "./include/modal";
import Chart from "chart.js/auto";
// import { viewPortHeight } from "./include/viewPortHeight";
import { smoothScroll } from "./include/smoothScroll";
// import "./libs/css_browser_selector.min";
// import { fadeUp } from "./include/scrollTrigger";
// import { topCover,topSections } from "./include/topSections";
import { topCover, topSections3 } from "./include/topSections3";
import { topVideo } from "./include/topVideo";

/* person import */
import { personSlider } from "./include/personSlider";
import { personScheduleAccordion } from "./include/personScheduleAccordion";

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
	switch (true) {
		case document.body.classList.contains("page-top"):
			top();
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
	// topCover();
	topVideo();
	topSections3();
}

// top
function personSingle() {
	personSlider();
	personScheduleAccordion();
}
