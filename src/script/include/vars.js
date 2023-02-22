/*  global vars
================================================= */
const pcBreakPoint = "768px";
const spBreakPoint = "767px";
const spmql = window.matchMedia(`screen and (max-width: ${spBreakPoint})`);
const pclgmql = window.matchMedia(
	"screen and (min-width: 768px) and (max-width: 1439px)"
);
// const aspectmql = window.matchMedia("screen and (max-aspect-ratio: 1/1)");
const touchDevice =
	"ontouchstart" in document.documentElement ||
	navigator.maxTouchPoints > 0 ||
	navigator.msMaxTouchPoints > 0;
const remUnit = (coef) => {
	// ブレイクポイントごとに_wrap.scssのrooのfont-sizeの係数を反映
	if (spmql.matches) {
		return (window.innerWidth * 0.0133333 * coef).toFixed(3);
	} else if (pclgmql.matches) {
		return (window.innerWidth * 0.00714286 * coef).toFixed(3);
	} else {
		return (
			(10 + (16 - 12) * ((window.innerWidth - 1400) / (2560 - 1400))) *
			coef
		).toFixed(3);
	}
};
const header = document.querySelector(".header");
const setScrollBarWidth = () => {
	const scrollbarWidth = window.innerWidth - document.body.clientWidth;
	document.documentElement.style.setProperty(
		"--scroll-bar-width",
		`${scrollbarWidth}px`
	);
};

const noscroll = (event) => {
	event.preventDefault();
};

export {
	spBreakPoint,
	pcBreakPoint,
	spmql,
	touchDevice,
	remUnit,
	header,
	setScrollBarWidth,
	noscroll,
};
