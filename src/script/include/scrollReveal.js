import { gsap, ScrollTrigger } from "gsap/all";
import { remUnit, spmql } from "./vars";
gsap.registerPlugin(ScrollTrigger);

let scrollRevealItems, scrollRevealGroups;
const scrollRevealInit = () => {
		// 汎用セレクタ'.js-fadeup-item'
		scrollRevealItems = document.querySelectorAll("[data-scroll-reveal]");
		if (scrollRevealItems.length) {
			gsap.set(scrollRevealItems, { autoAlpha: 0 });
		}
	},
	scrollReveal = () => {
		ScrollTrigger.batch(scrollRevealItems, {
			// interval: 0.1, // time window (in seconds) for batching to occur.
			// batchMax: 3,   // maximum batch size (targets)
			id: "scrollReveal",
			start: "top 90%",
			once: true,
			onEnter: (batch, selfs) => {
				// あまり良くわかってないが、第1引数が、domで第２引数がスクロールトリーがのようだ
				const anim = gsap.to(batch, {
					duration: 1.25,
					autoAlpha: 1,
					stagger: {
						each: 0.2,
						// ease: "power3.out",
					},
					ease: "power3.inOut",
					paused: true,
				});

				selfs.forEach((self) => {
					self.progress === 1 ? anim.progress(1) : anim.play();
				});
			},
		});
	},
	scrollRevealGroupInit = () => {
		// 汎用セレクタ'.js-fadeup-item'
		scrollRevealGroups = document.querySelectorAll(
			"[data-scroll-reveal-group]"
		);
		if (scrollRevealGroups.length) {
			scrollRevealGroups.forEach((group) => {
				const items = group.querySelectorAll("[data-scroll-reveal-group-item]");
				if (group.dataset.scrollRevealGroup === "fade-up") {
					gsap.set(group, {
						y: () => {
							if (spmql.matches) {
								return remUnit(7);
							} else {
								return remUnit(5);
							}
						},
						autoAlpha: 0,
					});
					gsap.set(items, {
						autoAlpha: 0,
					});
				} else {
					gsap.set([group, items], {
						autoAlpha: 0,
					});
				}
			});
		}
	},
	scrollRevealGroup = () => {
		ScrollTrigger.batch(scrollRevealGroups, {
			// interval: 0.1,
			id: "scrollRevealGroups",
			start: "top 90%",
			once: true,
			onEnter: (batch, selfs) => {
				batch.forEach((group) => {
					const items = group.querySelectorAll(
						"[data-scroll-reveal-group-item]"
					);

					let anim;

					if (group.dataset.scrollRevealGroup === "fade-up") {
						anim = gsap
							.timeline({
								paused: true,
							})
							.to(group, {
								duration: 1.25,
								autoAlpha: 1,
								y: 0,
								ease: "power3.out",
							})
							.to(
								items,
								{
									duration: 0.85,
									autoAlpha: 1,
									stagger: {
										each: 0.125,
										ease: "power2.out",
									},
									ease: "power3.inOut",
								},
								"<0.25"
							);
					} else {
						anim = gsap.to([group, items], {
							duration: 1.25,
							autoAlpha: 1,
							stagger: {
								each: 0.125,
								ease: "power3.out",
							},
							ease: "power3.inOut",
							paused: true,
						});
					}

					selfs.forEach((self) => {
						self.progress === 1 ? anim.play() : anim.play();
					});
				});
			},
		});
	};

export {
	scrollRevealInit,
	scrollReveal,
	scrollRevealItems,
	scrollRevealGroupInit,
	scrollRevealGroup,
	scrollRevealGroups,
};
