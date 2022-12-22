/*  global vars
================================================= */
const spmql = window.matchMedia("screen and (max-width: 767px)");
// const aspectmql = window.matchMedia("screen and (max-aspect-ratio: 1/1)");
const touchDevice =
	"ontouchstart" in document.documentElement ||
	navigator.maxTouchPoints > 0 ||
	navigator.msMaxTouchPoints > 0;
const remUnit = (coef) => {
	// ブレイクポイントごとに_wrap.scssのrooのfont-sizeの係数を反映
	if (spmql.matches) {
		return (window.innerWidth * 0.026666666666 * coef).toFixed(3);
	} else {
		return (window.innerWidth * 0.005208333333 * coef).toFixed(3);
	}
};
export { spmql, touchDevice, remUnit };
