import { setScrollBarWidth } from "./include/vars";
import { onceTransition, tlOnce } from "./include/onceTransition";
import { smoothScroll } from "./include/smoothScroll";
import { accordion } from "./include/accordion";
import { toggleToTop } from "./include/toggleToTop";
import "./libs/css_browser_selector.min";
import { modal } from "./include/modal";
import {
	scrollRevealInit,
	scrollReveal,
	scrollRevealItems,
	scrollRevealGroupInit,
	scrollRevealGroup,
	scrollRevealGroups,
} from "./include/scrollReveal";

smoothScroll();

modal();
setScrollBarWidth();

toggleToTop();
accordion();
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
