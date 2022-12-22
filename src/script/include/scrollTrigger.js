import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// 汎用セレクタ'.js-fadeup-item'
const fadeupitems = gsap.utils.toArray(".js-fadeup-item");
gsap.set(fadeupitems, { autoAlpha: 0, y: "20%" });

function fadeUp() {
	fadeupitems.forEach((item, i) => {
		const anim = gsap.to(item, {
			duration: 1,
			autoAlpha: 1,
			y: 0,
			ease: "power2.out",
			paused: true,
		});
		ScrollTrigger.create({
			trigger: item,
			start: "top 75%",
			once: true,
			onEnter: (self) => {
				anim.play();
				// ↓トリガーを過ぎていたらアニメーション済みに
				// self.progress === 1 ? anim.progress(1) : anim.play()
			},
		});
	});
}

/* スクロールトリガーの位置がずれるので…
https://greensock.com/forums/topic/24653-scrolltrigger-doesnt-work-properly-on-page-with-lazy-load-images/#comment-117910_wrap
================================================= */
document.querySelectorAll("img").forEach((img) => {
	if (img.complete) {
		ScrollTrigger.refresh();
	} else {
		img.addEventListener("load", (imgLoaded) => ScrollTrigger.refresh());
	}
});

export { fadeUp };
