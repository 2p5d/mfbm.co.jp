/*  global vars
================================================= */
function topCover() {
	const content = document.querySelector(".top-cover");
	const title = content.querySelector(".top-cover__title");
	setTimeout(() => {
		title.classList.add("--active");
		setTimeout(() => {
			content.classList.add("--disable");
		}, 1000);
	}, 500);
}
export { topCover };
