import { spmql, touchDevice } from "./vars";
import { gsap } from "gsap/all";

let tlOnce;

function onceTransition() {
	tlOnce = gsap.timeline({
		defaults: {
			ease: "power3.inOut",
			clearProps: true,
			force3D: true,
		},
	});

	tlOnce.from("#content > *", {
		// #contentだとtransformでスタッキングが狂うのでとりあえず
		duration: 1.5,
		autoAlpha: 0,
	});

	tlOnce.pause();
}

export { onceTransition, tlOnce };
