/* bace import */
import "./include/webFontConfig";
import { modal } from "./include/modal";
import Chart from "chart.js/auto";
// import { viewPortHeight } from "./include/viewPortHeight";
import { smoothScroll } from "./include/smoothScroll";
// import "./libs/css_browser_selector.min";
// import { fadeUp } from "./include/scrollTrigger";
import { topSections } from "./include/topSections";
import { topVideo } from "./include/topVideo";

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
	if (document.body.classList.contains("page-top")) {
		top();
	}
}

/* each page */

// top
function top() {
	topVideo();
	topSections();
}
