(()=>{var e={71:()=>{window.WebFontConfig={google:{families:["Noto+Sans+JP:300,400,500,700","Noto+Serif+JP:400,500,700","Cormorant:300","Poiret+One"]},custom:{families:["YakuHanJP_Noto","YakuHanJPs_Noto","YakuHanMP_Noto","YakuHanMPs_Noto"],urls:["https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanjp-noto.min.css","https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanjp_s-noto.min.css","https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanmp-noto.min.css","https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanmp_s-noto.min.css"]},active:function(){sessionStorage.fonts=!0}},function(){var e=document.createElement("script");e.src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js",e.type="text/javascript",e.async="true";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(e,i)}()},873:()=>{window.onload=function(){var e=window.navigator.userAgent.toLowerCase(),i="",n="",o="";-1!=e.indexOf("macintosh")?-1!=e.indexOf("iphone")||-1!=e.indexOf("ipad")||-1!=e.indexOf("ipod")?(i="ios",n="safari"):(i="mac",n="safari",-1!=e.indexOf("firefox")?n="firefox":-1!=e.indexOf("chrome")&&(n="chrome",-1!=e.indexOf("opr")&&(n="opera"))):-1!=e.indexOf("iphone")||-1!=e.indexOf("ipad")||-1!=e.indexOf("ipod")?(i="ios",n="safari"):-1!=e.indexOf("windows")?(i="windows",-1!=e.indexOf("firefox")?n="firefox":-1!=e.indexOf("chrome")?(n="chrome",-1!=e.indexOf("opr")?n="opera":-1!=e.indexOf("edge")&&(n="edge")):-1!=e.indexOf("msie")?(n="ie",-1!=e.indexOf("msie 6.")?n+=",ie6":-1!=e.indexOf("msie 7.")?n+=",ie7":-1!=e.indexOf("msie 8.")?n+=",ie8":-1!=e.indexOf("msie 9.")?n+=",ie9":-1!=e.indexOf("msie 10.")&&(n+=",ie10")):-1!=e.indexOf("rv:11")&&(n="ie,ie11"),-1!=e.indexOf("mobile")&&(o="mobile")):-1!=e.indexOf("android")&&(i="android",-1!=e.indexOf("firefox")?n="firefox":-1!=e.indexOf("chrome")?(n="chrome",-1!=e.indexOf("opr")&&(n="opera")):n="browser",o=-1!=e.indexOf("mobile")?"mobile":"tablet");var t=document.querySelector("html");if(""!=i){for(var s=i.split(","),a=0;a<s.length;a++)t.classList.add(s[a]);t.classList.add(i)}if(""!=n){var d=n.split(",");for(a=0;a<d.length;a++)t.classList.add(d[a])}if(""!=o){var r=o.split(",");for(a=0;a<r.length;a++)t.classList.add(r[a])}}}},i={};function n(o){var t=i[o];if(void 0!==t)return t.exports;var s=i[o]={exports:{}};return e[o](s,s.exports,n),s.exports}(()=>{"use strict";window.matchMedia("screen and (max-width: 767px)"),window.matchMedia("screen and (min-width: 768px) and (max-width: 1439px)");const e="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;document.querySelector(".header"),n(71),n(873),window.addEventListener("DOMContentLoaded",(function(){document.body.classList.remove("contents-hidden")})),e&&document.documentElement.classList.add("touch-device")})()})();