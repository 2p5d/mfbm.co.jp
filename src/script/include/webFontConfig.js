/* WebFontConfig
================================================= */
window.WebFontConfig = {
	google: {
		families: [
			"Noto+Sans+JP:400,500,700",
			"Noto+Serif+JP:400,500,700",
			"Cormorant:300",
		],
	},
	custom: {
		families: [
			"YakuHanJP_Noto",
			"YakuHanJPs_Noto",
			"YakuHanMP_Noto",
			"YakuHanMPs_Noto",
		],
		urls: [
			"https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanjp-noto.min.css",
			"https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanjp_s-noto.min.css",
			"https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanmp-noto.min.css",
			"https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanmp_s-noto.min.css",
		],
	},
	active: function () {
		sessionStorage.fonts = true;
	},
};

(function () {
	var wf = document.createElement("script");
	wf.src = "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";
	wf.type = "text/javascript";
	wf.async = "true";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(wf, s);
})();
