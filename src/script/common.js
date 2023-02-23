/* bace import */
import { touchDevice } from "./include/vars";
import "./include/webFontConfig";
import "./libs/css_browser_selector.min";
// import { modal } from "./include/modal";

window.addEventListener("DOMContentLoaded", resolve);

if (touchDevice) {
	document.documentElement.classList.add("touch-device");
}

function resolve() {
	document.body.classList.remove("contents-hidden");
	// init();
}

// function init() {
// 	modal(); // topでオブザーバーの判定などする場合、順序が後に来る必要がある（という挙動をしているが、モジュールエクスポートの依存関係ってこうなるんだっけ…？グローバルな変数を上書きしてタイミングで参照わけだから、順番は関係無い気がするのだが…
// 	setScrollBarWidth();
// }
