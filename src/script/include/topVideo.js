let video;

function topVideo() {
	const wrapper = document.querySelector(".ep__01-02-bg");
	const image = wrapper.querySelector("img");
	video = document.createElement("video");
	// video.className = "top-hero__video";
	const source = document.createElement("source");
	video.appendChild(source);
	(video.poster = `/recruit01/assets/images/top-section-01-bg-video-poster.jpg`),
		(video.muted = true),
		// (video.playsinline = true),
		(source.src = `/recruit01/assets/images/top-section-01-bg.mp4`),
		(video.width = "1920"),
		(video.height = "1080");
	video.setAttribute("playsinline", ""); // setAttributeで付与しないとsafariで自動再生されない
	video.setAttribute("loop", "");
	// video.setAttribute("autoplay", "");
	wrapper.appendChild(video);
	// video.play();
	image.remove();
}

export { topVideo, video };
