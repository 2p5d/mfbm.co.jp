import { gsap, ScrollTrigger } from "gsap/all";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

function cultureContents() {
	const tableManTl = gsap
		.timeline({
			defaults: {
				duration: 0.5,
				ease: "none",
				repeat: -1,
				yoyo: true,
				// repeatDelay: 0.25, // 何故かジャンプするので…
			},
		})
		.fromTo(
			"#table-left-man-hand",
			{
				rotation: -8,
			},
			{
				rotation: 9,
				transformOrigin: "left center",
			}
		)
		.fromTo(
			"#table-right-man-hand",
			{
				rotation: 10,
			},
			{
				duration: 0.45,
				rotation: -7,
				transformOrigin: "right center",
			},
			0
		);

	const hartManTl = gsap
		.timeline({
			defaults: {
				duration: 0.45,
				ease: "none",
				repeat: -1,
				yoyo: true,
				// repeatDelay: 0.25, // 何故かジャンプするので…
			},
		})
		.fromTo(
			"#hart-man-hands",
			{
				y: -6,
			},
			{
				y: 0,
			}
		);

	const buildingManTl = gsap
		.timeline({
			defaults: {
				duration: 0.75,
				ease: "none",
				repeat: -1,
				yoyo: true,
				// repeatDelay: 0.25, // 何故かジャンプするので…
			},
		})
		.fromTo(
			"#building-man-left-hand",
			{
				y: -2,
				x: 0,
			},
			{
				y: 2,
				x: 2,
				transformOrigin: "right center",
			}
		)
		.fromTo(
			"#building-man-right-hand",
			{
				y: 2,
				x: 0,
			},
			{
				y: -2,
				x: -3,
				transformOrigin: "right center",
				yoyo: true,
			},
			0
		)
		.fromTo(
			"#building-man-building",
			{
				x: 2,
				rotation: 2,
			},
			{
				duration: 0.65,
				x: 0,
				rotation: -3,
				transformOrigin: "right bottom",
			},
			0
		);

	const helloManTl = gsap
		.timeline({
			defaults: {
				duration: 0.35,
				ease: "none",
				repeat: -1,
				yoyo: true,
				repeatDelay: 0.175,
				// repeatDelay: 0.25, // 何故かジャンプするので…
			},
		})
		.fromTo(
			"#hello-pink-man-hand",
			{
				rotation: 0,
			},
			{
				rotation: 16,
				transformOrigin: "right top",
			}
		)
		.fromTo(
			"#hello-orange-man-hand",
			{
				rotation: 0,
			},
			{
				rotation: 8,
				transformOrigin: "95% top",
			}
		);

	const pcManTl = gsap
		.timeline({
			defaults: {
				duration: 0.25,
				ease: "none",
				repeat: -1,
				yoyo: true,
				repeatDelay: 0.15,
				// repeatDelay: 0.25, // 何故かジャンプするので…
			},
		})
		.fromTo(
			"#pc-man-leg",
			{
				y: 5,
				rotation: -8,
			},
			{
				y: 5,
				rotation: 6,
				transformOrigin: "top 75%",
			}
		);

	const musicSymbol = gsap.utils.toArray([
		"#music-man-simbol-01",
		"#music-man-simbol-02",
		"#music-man-simbol-03",
	]);

	musicSymbol.forEach((symbol) => {
		gsap.fromTo(
			symbol,
			{
				y: 5,
			},
			{
				delay: "random([.25, .35, .5])",
				duration: ".5",
				y: -3,
				repeat: -1,
				yoyo: true,
			},
			0
		);
	});

	const musicManTl = gsap
		.timeline({
			defaults: { duration: 0.55, ease: "none" },
			repeat: -1,
			yoyo: true,
			// repeatDelay: 1,
		})
		.fromTo(
			"#music-man-right-hand",
			{
				rotate: 5,
			},
			{
				transformOrigin: "top left",
				rotate: -3,
			},
			0
		)
		.fromTo(
			"#music-man-left-hand",
			{
				rotate: 0,
			},
			{
				transformOrigin: "top 55%",
				rotate: 8,
			},
			0
		)
		.fromTo(
			"#music-man-right-foot",
			{
				rotate: -2,
			},
			{
				transformOrigin: "top 5%",
				rotate: -8,
			},
			0
		)
		.fromTo(
			"#music-man-left-foot",
			{
				rotate: -4,
			},
			{
				transformOrigin: "top 93%",
				rotate: 4,
			},
			0
		);

	const foodManTl = gsap
		.timeline({
			defaults: {
				duration: 0.5,
				ease: "none",
				repeat: -1,
				yoyo: true,
				// repeatDelay: 0.15,
				// repeatDelay: 0.25, // 何故かジャンプするので…
			},
		})
		.fromTo(
			"#green-cup",
			{
				y: -3,
			},
			{
				y: 7,
			}
		)
		.fromTo(
			"#orange-cup",
			{
				y: -13,
			},
			{
				y: 0,
			}
		);

	const sittingManTl = gsap
		.timeline({
			defaults: { duration: 0.55, ease: "none" },
			repeat: -1,
			yoyo: true,
			// repeatDelay: 1,
		})
		.fromTo(
			"#sitting-man-leg",
			{
				rotate: -1,
			},
			{
				transformOrigin: "top left",
				rotate: 9,
			},
			0
		)
		.fromTo(
			"#sitting-man-leef-left",
			{
				rotate: -3,
			},
			{
				duration: 0.4,
				transformOrigin: "30% right",
				rotate: 4,
			},
			0
		)
		.fromTo(
			"#sitting-man-leef-bottom",
			{
				rotate: -3,
			},
			{
				duration: 0.4,
				transformOrigin: "15% center",
				rotate: 4,
			},
			0
		)
		.fromTo(
			"#sitting-man-leef-right",
			{
				rotate: -4,
			},
			{
				duration: 0.4,
				transformOrigin: "25% 75%",
				rotate: 5,
			},
			0
		)
		.fromTo(
			"#sitting-man-leef-top",
			{
				rotate: 2,
			},
			{
				duration: 0.4,
				transformOrigin: "bottom center",
				rotate: -6,
			},
			0
		);

	const familyTl = gsap
		.timeline({
			defaults: {
				duration: 0.6,
				ease: "none",
				repeat: -1,
				yoyo: true,
				// repeatDelay: 0.175,
				// repeatDelay: 0.25, // 何故かジャンプするので…
			},
		})
		.fromTo(
			"#family-child-right-hand",
			{
				rotation: 0,
			},
			{
				rotation: -14,
				transformOrigin: "20% top",
			}
		)
		.fromTo(
			"#family-child-left-hand",
			{
				rotation: 0,
			},
			{
				rotation: 14,
				transformOrigin: "80% top",
			},
			0
		)
		.fromTo(
			"#family-parent-left-hand",
			{
				rotation: 0,
			},
			{
				rotation: 10,
				transformOrigin: "right top",
			},
			0
		);

	// const clockManTl = gsap
	// 	.timeline({
	// 		defaults: { duration: 0.55, ease: "none" },
	// 		repeat: -1,
	// 		// repeatDelay: 1,
	// 	})
	gsap.fromTo(
		"#clock-man-leg",
		{
			rotate: -5,
		},
		{
			transformOrigin: "top left",
			rotate: 9,
			yoyo: true,
			repeat: -1,
		},
		0
	);
	gsap.to(
		"#clock-man-second",
		{
			duration: 6,
			rotate: 360,
			transformOrigin: "center left",
			repeat: -1,
			ease: "none",
		},
		0
	);
	gsap.to(
		"#clock-man-minute",
		{
			duration: 72,
			rotate: 360,
			transformOrigin: "bottom center",
			repeat: -1,
			ease: "none",
		},
		0
	);

	const ballGameTl = gsap
		.timeline({
			defaults: {
				duration: 0.8,
				ease: "none",
				repeat: -1,
				// repeatDelay: 0.25, // 何故かジャンプするので…
			},
		})
		.to(
			"#ball-game-basket",
			{
				duration: 1.8,
				rotate: 360,
				transformOrigin: "center",
			},
			0
		)
		.to(
			"#ball-game-soccer",
			{
				duration: 1.6,
				rotate: 360,
				transformOrigin: "center",
			},
			0
		)
		.fromTo(
			"#ball-game-racket",
			{
				rotate: -8,
			},
			{
				duration: 0.6,
				transformOrigin: "center",
				rotate: 7,
				yoyo: true,
				yoyo: true,
			},
			0
		);

	const hatManTl = gsap
		.timeline({
			defaults: { duration: 0.55, ease: "none" },
			repeat: -1,
			yoyo: true,
			// repeatDelay: 1,
		})
		.fromTo(
			"#hat-man-right-hand",
			{
				rotate: 5,
			},
			{
				transformOrigin: "top left",
				rotate: -3,
			},
			0
		)
		.fromTo(
			"#hat-man-left-hand",
			{
				rotate: 0,
			},
			{
				transformOrigin: "top 55%",
				rotate: 8,
			},
			0
		)
		.fromTo(
			"#hat-man-right-foot",
			{
				rotate: -2,
			},
			{
				transformOrigin: "top 5%",
				rotate: -8,
			},
			0
		)
		.fromTo(
			"#hat-man-left-foot",
			{
				rotate: -4,
			},
			{
				transformOrigin: "top 93%",
				rotate: 4,
			},
			0
		);
}

export { cultureContents };
