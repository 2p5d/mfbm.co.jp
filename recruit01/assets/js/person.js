(()=>{"use strict";var e,t={751:(e,t,o)=>{var n=o(191),r=o(82);const i="767px";window.matchMedia(`screen and (max-width: ${i})`),window.matchMedia("screen and (min-width: 768px) and (max-width: 1439px)"),"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints,document.querySelector(".header"),n.p8.registerPlugin(r.i);var s=o(99);o(309),(()=>{const e=document.querySelectorAll(".person-index__item:not(.swiper-slide)");e.length&&(e.forEach((e=>{const t=e.querySelectorAll(".person-index__item-cover-content,.person-index__item-cover-label.person-index__item-cover-title,.person-index__item-link,.person-index__item-person-photo,.person-index__item-person-description-title,.person-index__item-person-description-text,.person-index__item-person-data-label,.person-index__item-person-data-name,.person-index__item-person-data-text");n.p8.set(t,{autoAlpha:0})})),r.i.batch(e,{id:"scrollReveal",start:"top 90%",once:!0,onEnter:(e,t)=>{e.forEach(((e,o)=>{const r=n.p8.to(e.querySelectorAll(".person-index__item-cover-content,.person-index__item-cover-label.person-index__item-cover-title,.person-index__item-link,.person-index__item-person-photo,.person-index__item-person-description-title,.person-index__item-person-description-text,.person-index__item-person-data-label,.person-index__item-person-data-name,.person-index__item-person-data-text"),{duration:1.25,autoAlpha:1,stagger:{each:.2},ease:"power3.inOut",paused:!0});1===t[o].progress?r.progress(1):r.play()}))}}))})(),function(){const e=document.querySelector(".swiper");new s.ZP(e,{modules:[s.W_,s.Qr],speed:700,loop:!0,navigation:{prevEl:"[data-slider-prev]",nextEl:"[data-slider-next]"},on:{init:function(){var e;(e=this).slides.forEach((e=>{const t=e.querySelector(".person-index__item-cover-label span").textContent;Number(t)%2==0&&e.classList.add("--swiper-slide-even"),e.classList.add(`--person-${t}`)})),e.slideTo((()=>{const e=document.body.classList;for(let t=0;t<e.length;t++)if(e[t].includes("page-person"))return Number(e[t].replace("page-person",""))})(),0)}}})}(),function(){let e=n.p8.matchMedia(),t=[];const o=document.querySelector(".person-schedule__list-wrapper"),r=document.querySelector(".person-schedule__sp-more-button"),s=document.querySelector(".person-schedule__sp-more-icon"),a=document.querySelector(".person-schedule__sp-more-button-text"),p=document.querySelectorAll(".person-schedule__list-item"),d=()=>{let e=0;for(let t=0;t<3;t++){const o=window.getComputedStyle(p[t]);e=e+p[t].clientHeight+parseFloat(o.marginTop)}return e},l=new ResizeObserver((e=>{e.forEach((({target:e})=>{n.p8.set(o,{height:`${d()}px`})}))})),c=e=>{l.disconnect();const r=e.currentTarget;r.classList.contains("--active")?(r.classList.remove("--active"),n.p8.timeline({defaults:{duration:.5,ease:"power2.inOut"},onComplete:()=>{l.observe(o),a.textContent="more"}}).to(o,{duration:.5,height:`${d()}px`,ease:"power2.inOut"}).to(t,{autoAlpha:0},"<").to(s,{autoAlpha:1},"<")):(r.classList.add("--active"),n.p8.timeline({defaults:{duration:.5,ease:"power2.inOut"},onComplete:()=>{a.textContent="close"}}).to(o,{duration:.5,height:"auto",ease:"power2.inOut"}).to(t,{autoAlpha:1},"<").to(s,{autoAlpha:0},"<"))};e.add(`(max-width: ${i})`,(()=>(r&&r.addEventListener("click",c),p.length>0&&(p.forEach(((e,o)=>{o>=3&&t.push(e)})),n.p8.set(t,{autoAlpha:0})),o&&(n.p8.set(o,{overflow:"hidden",height:`${d()}px`}),l.observe(o)),()=>{r.removeEventListener("click",c),r.classList.remove("--active"),l.disconnect()})))}()}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={id:e,exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,o,r,i)=>{if(!o){var s=1/0;for(l=0;l<e.length;l++){for(var[o,r,i]=e[l],a=!0,p=0;p<o.length;p++)(!1&i||s>=i)&&Object.keys(n.O).every((e=>n.O[e](o[p])))?o.splice(p--,1):(a=!1,i<s&&(s=i));if(a){e.splice(l--,1);var d=r();void 0!==d&&(t=d)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.j=445,(()=>{var e={445:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,i,[s,a,p]=o,d=0;if(s.some((t=>0!==e[t]))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(p)var l=p(n)}for(t&&t(o);d<s.length;d++)i=s[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self.webpackChunkprepros_project=self.webpackChunkprepros_project||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),n.nc=void 0;var r=n.O(void 0,[736],(()=>n(751)));r=n.O(r)})();