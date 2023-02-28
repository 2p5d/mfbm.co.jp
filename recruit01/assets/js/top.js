(()=>{"use strict";var e,t={795:(e,t,o)=>{const a=window.matchMedia("screen and (max-width: 767px)"),r=window.matchMedia("screen and (min-width: 768px) and (max-width: 1439px)"),n="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,l=document.querySelector(".header"),s=()=>{const e=window.innerWidth-document.body.clientWidth;document.documentElement.style.setProperty("--scroll-bar-width",`${e}px`)},i=e=>{e.preventDefault()};let p;var u=o(191),d=o(82),c=o(361);let m,h,f,g,y,v,b;u.p8.registerPlugin(d.i,c.Qj);let _;u.p8.registerPlugin(d.i,c.Qj);let w;u.p8.registerPlugin(d.i,c.Qj);let A;u.p8.registerPlugin(d.i,c.Qj);let k;u.p8.registerPlugin(d.i,c.Qj);let x;u.p8.registerPlugin(d.i,c.Qj);var T=o(898);let S;u.p8.registerPlugin(d.i,c.Qj,T.Z);const C=[];let O;u.p8.registerPlugin(d.i,c.Qj);let E,L,P,q;u.p8.registerPlugin(d.i,c.Qj);let j,G,V,$,D,R;const Q={flag:!1};var B=o(509);let F;B.BodyScrollOptions={reserveScrollBarGap:!0},u.p8.registerPlugin(c.Qj),function(){let e,t,o;function a(){const a=t.children[0];j&&!R&&(j.isEnabled||(j.enable(),window.addEventListener("touchmove",i,{passive:!1}),window.addEventListener("wheel",i,{passive:!1}))),(0,B.tG)(t),document.body.classList.remove("--scroll-bar-padding-active"),p&&p.play(),o&&o.pause(),e.animate([{opacity:"0"}],{duration:300,easing:"ease-out"}).onfinish=()=>{e.after(a),e.remove(),e.removeEventListener("click",r),F=!1}}function r(e){if(e.target.closest(".modal-close")||!e.target.closest("[data-modal-close-exclusion]")){a();const e=document.querySelector(".modal-active");e&&e.classList.remove("modal-active")}}const n=document.querySelectorAll("[data-modal-content]");function l(l){const u=this;return l.preventDefault(),u.classList.contains("modal-active")?(u.classList.remove("modal-active"),void a()):(u.classList.add("modal-active"),void function(a){const l=a.dataset.modalTrigger;for(let a=0;a<n.length;a++){let c=n[a].dataset.modalContent;if(c===l){u=n[a],d=c,j&&!R&&j.isEnabled&&(j.disable(),window.removeEventListener("touchmove",i,{passive:!1}),window.removeEventListener("wheel",i,{passive:!1})),e=document.createElement("div"),e.className="modal",Object.assign(e.style,{position:"fixed",top:"0",right:"0",bottom:"0",left:"0",width:"100vw",height:"100vh",overflow:"hidden",opacity:"0"}),t=document.createElement("div"),t.className="modal__inner",Object.assign(t.style,{width:"100%",height:"100%",overflowY:"auto",paddingRight:window.innerWidth-document.documentElement.clientWidth+"px"}),e.classList.add(`modal--${d}`),u.before(e),e.appendChild(t),t.appendChild(u),e.animate([{opacity:"1"}],{duration:400,easing:"ease-out",fill:"forwards"}).onfinish=()=>{e.style.opacity="1"},p&&p.pause(),o=u.querySelector("video"),o&&o.play(),s(),(0,B.Qp)(t,B.BodyScrollOptions),document.body.classList.add("--scroll-bar-padding-active"),F=!0,e.addEventListener("click",r);break}}var u,d}(u))}document.querySelectorAll("[data-modal-trigger]").forEach((e=>{e.addEventListener("click",l)}))}(),function(){const e=document.querySelector(".ep__01-02-bg"),t=e.querySelector("picture");p=document.createElement("video");const o=document.createElement("source");p.appendChild(o),p.poster="/recruit01/assets/images/top-section-01-bg-video-poster.jpg",p.muted=!0,o.src=a.matches?"/recruit01/assets/images/top-section-01-bg-sp.mp4":"/recruit01/assets/images/top-section-01-bg.mp4",p.width="1920",p.height="1080",p.setAttribute("playsinline",""),p.setAttribute("loop",""),e.appendChild(p),t.remove()}(),function(){const e=document.querySelector(".top-cover");window.addEventListener("touchmove",i,{passive:!1}),window.addEventListener("wheel",i,{passive:!1}),document.body.classList.add("--pointer-events-none"),(()=>{let e;const t=document.querySelector(".top-section__title"),o=document.querySelector(".ep__section-scroll");b=u.p8.to("img[src*='top-5-minute-lines'],img[src*='top-5-minute-invert-lines']",{duration:16,paused:!0,transformOrigin:"center",rotate:360,repeat:-1,ease:"none"});let a=u.p8.matchMedia();a.add("(min-width: 768px)",(()=>{e=u.p8.utils.toArray([".header__menu-button",".header__link",".ep__navigation-link",".ep__top-section-5minute"]),f=u.p8.timeline({defaults:{duration:1.25,ease:"power2.out"},paused:!0}).to("#prologue",{autoAlpha:1},"<").to(".ep__01-02-bg",{filter:"blur(0px)"},"<").to([t,".header__link",".ep__top-section-5minute",o],{autoAlpha:1},"<25%")})),a.add("(max-width: 767px)",(()=>{e=u.p8.utils.toArray([".header__menu-button",".header__link",".ep__top-section-5minute"]),u.p8.set(".top-lead",{paddingBottom:"60vh"}),v=u.p8.timeline({}).set(document.documentElement,{overscrollBehavior:"none"}).set("#prologue2",{"--top-scroll-bar":"none",overflowY:"auto",overscrollBehavior:"none"}),y=d.i.create({trigger:".top-lead",start:"top top",end:"bottom bottom",scroller:"#prologue2",onLeave:()=>{D("about",1,2),j.enable()},onLeaveBack:()=>{D("prologue",-1,0),j.enable()}})})),m=u.p8.timeline({defaults:{duration:1.25,ease:"power2.out"},paused:!0}).set("#prologue",{autoAlpha:1}).fromTo(t,{autoAlpha:0},{autoAlpha:1}).fromTo(e,{autoAlpha:0},{autoAlpha:1,stagger:.1},"<50%").fromTo(o,{autoAlpha:0},{autoAlpha:1},"<"),h=u.p8.timeline({defaults:{duration:1.25,ease:"power2.out"},paused:!0}).set("#prologue",{autoAlpha:1}).to([".top-lead__title img",".top-lead__body"],{y:40,autoAlpha:0}).to(".ep__01-02-bg",{filter:"blur(0px)"},"<").to([t,".header__link",".ep__top-section-5minute",o],{autoAlpha:1},"<25%"),g=u.p8.timeline({defaults:{duration:1.25,ease:"power2.out"},paused:!0,onComplete:()=>{}}).set("#prologue2",{autoAlpha:1}).to([".top-section__title",".header__link",".ep__top-section-5minute"],{autoAlpha:0}).to(".ep__01-02-bg",{filter:"blur(30px)"},"<").fromTo([".top-lead__title img",".top-lead__body"],{y:60,autoAlpha:0},{y:0,autoAlpha:1},"<25%")})(),p&&p.play(),setTimeout((()=>{e.classList.add("--disable"),p&&(p.currentTime=0),e.addEventListener("animationend",(t=>{m.play(),b.play(),m.eventCallback("onComplete",(()=>{Q.flag=!1,document.body.classList.remove("--pointer-events-none")})),e.remove()}))}),3e3)}(),function(){let e,t=-1;const o=document.querySelectorAll("[data-ep]"),s=[],m=document.querySelector(".ep__section-label"),y=u.p8.timeline({paused:!0}).set(".ep__section-label__click-icon",{overflow:"hidden"}).to(".ep__section-label__click-icon-bar",{keyframes:{0:{scaleX:1},"50%":{scaleX:0},"100%":{scaleX:1},easeEach:"none"},transformOrigin:"right",duration:2,repeat:-1,ease:"power2.out"}),v=()=>{m.classList.remove("--disable"),y.play()},T=()=>{m.classList.add("--disable"),y.pause()};o.forEach((e=>{u.p8.set(e,{position:"fixed",top:"0",left:"0",width:"100%",height:"100vh",height:"100dvh",autoAlpha:0})})),window.onbeforeunload=()=>window.scrollTo(0,0),a?.addEventListener?a.addEventListener("change",(()=>{location.reload()})):a.addListener((()=>{location.reload()})),n||document.querySelectorAll("[data-pc-href").forEach((e=>{e.classList.add("--linkable");const t=c.Qj.create({target:e,type:"pointer",onClick:e=>{const t=e.target.dataset.pcHref;window.location.href=t}});s.push(t)})),(()=>{let e=u.p8.matchMedia();e.add("(min-width: 768px)",(()=>{_=u.p8.timeline({defaults:{duration:1.25,ease:"power2.out",force3D:!0},paused:!0}).set("#about",{autoAlpha:1}).fromTo(".top-about__bg",{autoAlpha:0},{duration:2,autoAlpha:1}).fromTo(".top-about__blocks-item:nth-of-type(1) img",{autoAlpha:0,y:-300},{duration:2,ease:"power4.inOut",y:0,autoAlpha:1},"<").fromTo(".top-about__blocks-item:nth-of-type(2) img",{autoAlpha:0,y:-150,x:150},{duration:2,ease:"power4.inOut",y:0,x:0,autoAlpha:1},"<").fromTo(".top-about__blocks-item:nth-of-type(3) img",{autoAlpha:0,y:150,x:150},{duration:2,ease:"power4.inOut",y:0,x:0,autoAlpha:1},"<").fromTo(".top-about__blocks-item:nth-of-type(4) img",{autoAlpha:0,y:300,x:300},{duration:2,ease:"power4.inOut",y:0,x:0,autoAlpha:1},"<").fromTo(".top-about__blocks-item:nth-of-type(5) img",{autoAlpha:0,y:300},{duration:2,ease:"power4.inOut",y:0,x:0,autoAlpha:1},"<").fromTo(".top-about__blocks-item:nth-of-type(6) img",{autoAlpha:0,y:150,x:-150},{duration:2,ease:"power4.inOut",y:0,x:0,autoAlpha:1},"<").fromTo(".top-about__blocks-item:nth-of-type(7) img",{autoAlpha:0,y:-150,x:-150},{duration:2,ease:"power4.inOut",y:0,x:0,autoAlpha:1},"<").fromTo(".top-about__bg-fill",{clipPath:"inset(0 0 0 50%)",autoAlpha:.9},{duration:2,ease:"power4.inOut",clipPath:"inset(0 0 0 0%)",autoAlpha:1},"<35%").fromTo(".top-about__lead__title",{autoAlpha:0,y:60},{autoAlpha:1,y:0},"<50%").fromTo(".top-about__lead__body p",{autoAlpha:0,y:60},{autoAlpha:1,y:0,stagger:.1},"<25%")})),e.add("(max-width: 767px)",(()=>{_=u.p8.timeline({defaults:{duration:1.25,ease:"power2.out",force3D:!0},paused:!0}).set("#about",{autoAlpha:1}).fromTo(".top-about__bg",{autoAlpha:0},{duration:2,autoAlpha:1}).fromTo(".top-about__blocks-item:nth-of-type(1) img",{autoAlpha:0,y:-200},{duration:2,ease:"power4.inOut",y:0,autoAlpha:1},"<").fromTo(".top-about__blocks-item:nth-of-type(2) img",{autoAlpha:0,y:-100,x:100},{duration:2,ease:"power4.inOut",y:0,x:0,autoAlpha:1},"<").fromTo(".top-about__blocks-item:nth-of-type(3) img",{autoAlpha:0,y:100,x:100},{duration:2,ease:"power4.inOut",y:0,x:0,autoAlpha:1},"<").fromTo(".top-about__blocks-item:nth-of-type(4) img",{autoAlpha:0,y:200,x:200},{duration:2,ease:"power4.inOut",y:0,x:0,autoAlpha:1},"<").fromTo(".top-about__blocks-item:nth-of-type(5) img",{autoAlpha:0,y:200},{duration:2,ease:"power4.inOut",y:0,x:0,autoAlpha:1},"<").fromTo(".top-about__blocks-item:nth-of-type(6) img",{autoAlpha:0,y:100,x:-100},{duration:2,ease:"power4.inOut",y:0,x:0,autoAlpha:1},"<").fromTo(".top-about__blocks-item:nth-of-type(7) img",{autoAlpha:0,y:-100,x:-100},{duration:2,ease:"power4.inOut",y:0,x:0,autoAlpha:1},"<").fromTo(".top-about__bg-fill",{clipPath:"inset(0 0 0 50%)",autoAlpha:.9},{duration:2.5,ease:"power4.inOut",clipPath:"inset(0 0 0 0%)",autoAlpha:1},"<25%").fromTo(".top-about__lead__title",{autoAlpha:0,y:60},{autoAlpha:1,y:0},"<50%")}))})(),(()=>{let e=u.p8.matchMedia();e.add("(min-width: 768px)",(()=>{w=u.p8.timeline({defaults:{duration:1.25,ease:"power2.out"},paused:!0}).to("#business",{autoAlpha:1,force3D:!0}).fromTo(".mfbm-field__map img[src*='top-section-03-park-building']",{autoAlpha:0,y:-100},{duration:1.75,ease:"power2.inOut",autoAlpha:1,y:0,force3D:!0},"<35%").fromTo(".mfbm-field__map img[src*='top-section-03-park-grass']",{autoAlpha:0},{duration:1,ease:"power2.inOut",autoAlpha:1,force3D:!0},"<50%").fromTo(".mfbm-field__map img[src*='top-section-03-park-people']",{autoAlpha:0},{duration:1,ease:"power2.inOut",autoAlpha:1,force3D:!0},"<75%").fromTo(".mfbm-field__map img[src*='top-section-03-building-02']",{autoAlpha:0,y:-100},{duration:1.5,ease:"power2.inOut",autoAlpha:1,y:0,force3D:!0},"<10%").fromTo(".mfbm-field__map img[src*='top-section-03-building-03']",{autoAlpha:0,y:-100},{duration:.85,ease:"power2.inOut",autoAlpha:1,y:0,force3D:!0},"<50%").fromTo(".mfbm-field__map-inner",{x:0},{duration:1.25,ease:"power2.inOut",x:"40vw",force3D:!0},">").fromTo(".mfbm-field__lead-title",{autoAlpha:0,y:60},{duration:.75,ease:"power2.out",autoAlpha:1,y:0},"<50%").fromTo(".mfbm-field__lead-body p",{autoAlpha:0,y:60},{duration:.75,ease:"power2.out",autoAlpha:1,y:0,stagger:.1},"<35%")})),e.add("(max-width: 767px)",(()=>{w=u.p8.timeline({defaults:{duration:1.25,ease:"power2.out"},paused:!0}).fromTo("#business",{autoAlpha:0},{autoAlpha:1}).fromTo(".mfbm-field__map img[src*='top-section-03-park-building']",{autoAlpha:0,y:-100},{duration:1.5,ease:"power2.inOut",autoAlpha:1,y:0,force3D:!0},"<25%").fromTo(".mfbm-field__map img[src*='top-section-03-park-grass']",{autoAlpha:0},{duration:.85,ease:"power2.inOut",autoAlpha:1,force3D:!0},"<50%").fromTo(".mfbm-field__map img[src*='top-section-03-park-people']",{autoAlpha:0},{duration:1,ease:"power2.inOut",autoAlpha:.85,force3D:!0},"<75%").fromTo(".mfbm-field__map img[src*='top-section-03-building-02']",{autoAlpha:0,y:-100},{duration:1.25,ease:"power2.inOut",autoAlpha:1,y:0,force3D:!0},"<5%").fromTo(".mfbm-field__map img[src*='top-section-03-building-03']",{autoAlpha:0,y:-100},{duration:1,ease:"power2.inOut",autoAlpha:1,y:0,force3D:!0},"<50%").fromTo(".mfbm-field__map-inner",{y:0},{duration:1.25,ease:"power2.inOut",y:()=>l.clientHeight+Number(a.matches?(.0133333*window.innerWidth*21).toFixed(3):r.matches?(.00714286*window.innerWidth*21).toFixed(3):(21*(10+(window.innerWidth-1400)/1160*4)).toFixed(3)),force3D:!0},">").fromTo(".mfbm-field__lead-title",{autoAlpha:0,y:60},{duration:.75,ease:"power2.out",autoAlpha:1,y:0},"<50%")}))})(),(()=>{let e=u.p8.matchMedia();e.add("(min-width: 768px)",(()=>{A=u.p8.timeline({defaults:{duration:1.25,ease:"power2.out"},paused:!0}).to("#job",{autoAlpha:1}).fromTo(".top-job__peoples-item img",{autoAlpha:0,y:50},{duration:.75,ease:"power2.out",autoAlpha:1,y:0,stagger:{each:.1,from:"random",ease:"power1.in"}},"<25%").fromTo(".top-job__lead",{autoAlpha:0,x:"50%"},{duration:1.125,ease:"power2.out",autoAlpha:1,x:0}).fromTo(".top-job__lead-title",{autoAlpha:0,y:60},{duration:.75,ease:"power2.out",autoAlpha:1,y:0},"<50%").fromTo(".top-job__lead-body p",{autoAlpha:0,y:60},{duration:.75,ease:"power2.out",autoAlpha:1,y:0,stagger:.1},"<35%")})),e.add("(max-width: 767px)",(()=>{A=u.p8.timeline({defaults:{duration:1.25,ease:"power2.out"},paused:!0}).to("#job",{autoAlpha:1}).fromTo(".top-job__peoples-item img",{autoAlpha:0,y:60},{duration:.75,ease:"power2.out",autoAlpha:1,y:0,stagger:{each:.11,from:"random",ease:"power1.in"}},"<25%").fromTo(".top-job__lead",{autoAlpha:0,y:"100%"},{duration:1.125,ease:"power2.out",autoAlpha:1,y:0}).fromTo(".top-job__lead-title",{autoAlpha:0,y:40},{duration:.75,ease:"power2.out",autoAlpha:1,y:0},"<50%")}))})(),(()=>{let e=u.p8.matchMedia();e.add("(min-width: 768px)",(()=>{const e=u.p8.utils.toArray(["#p-1-1","#p-1-2"]),t=u.p8.utils.toArray(["#r-1-1","#r-1-2","#r-1-3"]),o=u.p8.utils.toArray(["#o-1"]),a=u.p8.utils.toArray(["#j"]),r=u.p8.utils.toArray(["#e-1","#e-2"]),n=u.p8.utils.toArray(["#c"]),l=u.p8.utils.toArray(["#t-1-1","#t-1-2"]),s=u.p8.utils.toArray(["#s"]),i=u.p8.utils.toArray(["#t-2-1","#t-2-2"]),p=u.p8.utils.toArray(["#o-2"]),d=u.p8.utils.toArray(["#r-2-1","#r-2-2","#r-2-3"]),c=u.p8.utils.toArray(["#y-1-1","#y-1-2","#y-1-3"]),m=u.p8.timeline({defaults:{duration:1.5,ease:"power2.out"}}).from(e,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`).from(t,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`).from(o,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`).from(a,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`).from(r,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`).from(n,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`).from(l,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`).from(s,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`).from(i,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`).from(p,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`).from(d,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`).from(c,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`);k=u.p8.timeline({defaults:{duration:1.5,ease:"power2.out"},paused:!0}).to("#project",{duration:1.75,autoAlpha:1}).add(m,"<50%").from(".top-project__lead-sub-title",{autoAlpha:0},"<60%")})),e.add("(max-width: 767px)",(()=>{const e=u.p8.utils.toArray(["#p-1-1-sp","#p-1-2-sp"]),t=u.p8.utils.toArray(["#r-1-1-sp","#r-1-2-sp","#r-1-3-sp"]),o=u.p8.utils.toArray(["#o-1-sp"]),a=u.p8.utils.toArray(["#j-sp"]),r=u.p8.utils.toArray(["#e-1-sp","#e-2-sp"]),n=u.p8.utils.toArray(["#c-sp"]),l=u.p8.utils.toArray(["#t-1-1-sp","#t-1-2-sp"]),s=u.p8.utils.toArray(["#s-sp"]),i=u.p8.utils.toArray(["#t-2-1-sp","#t-2-2-sp"]),p=u.p8.utils.toArray(["#o-2-sp"]),d=u.p8.utils.toArray(["#r-2-1-sp","#r-2-2-sp","#r-2-3-sp"]),c=u.p8.utils.toArray(["#y-1-1-sp","#y-1-2-sp","#y-1-3-sp"]),m=u.p8.timeline({defaults:{duration:1.5,ease:"power2.out"}}).from(e,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`).from(t,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`).from(o,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`).from(a,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`).from(r,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`).from(n,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`).from(l,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`).from(s,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`).from(i,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`).from(p,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`).from(d,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`).from(c,{drawSVG:0},`<${u.p8.utils.random([0,10])}%`);k=u.p8.timeline({defaults:{duration:1.5,ease:"power2.out"},paused:!0}).to("#project",{duration:1.75,autoAlpha:1}).add(m,"<50%").from(".top-project__lead-sub-title",{autoAlpha:0},"<60%")}))})(),(()=>{u.p8.set(".persons__bg",{autoAlpha:0});let e=u.p8.matchMedia();e.add("(min-width: 768px)",(()=>{x=u.p8.timeline({defaults:{duration:1.25,ease:"power2.out"},paused:!0}).fromTo("#person",{autoAlpha:0},{autoAlpha:1}).fromTo(".persons__solo-item",{clipPath:"inset(100% 0 0 0)"},{duration:.5,ease:"power2.out",clipPath:"inset(0% 0 0 0)",stagger:{each:.25,ease:"none"}},"<25%").to(".persons__solo",{duration:.75,ease:"power2.inOut",clipPath:"inset(0 0 100% 0)"},"<+=1.75").set(".persons__bg",{autoAlpha:1},"<").set(".persons__title",{autoAlpha:1}).fromTo(".persons__title__bg",{clipPath:"inset(0 0 100% 0)"},{duration:1.125,clipPath:"inset(0 0 0% 0)"}).to(".persons__bg-images-wrap",{scale:.8424,transformOrigin:"bottom",yPercent:4},"<").to(".persons__bg-images-wrap img[src*='person-all-01']",{yPercent:9,xPercent:-3},"<").to(".persons__bg-images-wrap img[src*='person-all-02']",{yPercent:9,xPercent:1},"<").to(".persons__bg-images-wrap img[src*='person-all-03']",{yPercent:3},"<").to(".persons__bg-images-wrap img[src*='person-all-04']",{xPercent:13,yPercent:-7},"<").to(".persons__bg-images-wrap img[src*='person-all-05']",{xPercent:-10},"<").fromTo(".persons__title-text",{autoAlpha:0},{duration:.75,ease:"power2.out",autoAlpha:1},"<50%")})),e.add("(max-width: 767px)",(()=>{x=u.p8.timeline({defaults:{duration:1.25,ease:"power2.out"},paused:!0}).to("#person",{autoAlpha:1}).fromTo(".persons__solo-item",{clipPath:"inset(100% 0 0 0)"},{duration:.5,ease:"power2.out",clipPath:"inset(0% 0 0 0)",stagger:{each:.25,ease:"none"}},"<25%").to(".persons__solo",{duration:.75,ease:"power2.inOut",clipPath:"inset(0 0 100% 0)"},"<+=1.75").set(".persons__bg",{autoAlpha:1},"<").set(".persons__title",{autoAlpha:1}).fromTo(".persons__title__bg",{clipPath:"inset(0 0 100% 0)"},{duration:1.125,clipPath:"inset(0 0 0% 0)"}).to(".persons__bg-images-wrap",{scale:.9,transformOrigin:"bottom",yPercent:10},"<").to(".persons__bg-images-wrap img[src*='person-all-01']",{yPercent:9,xPercent:-3},"<").to(".persons__bg-images-wrap img[src*='person-all-02']",{yPercent:9,xPercent:1},"<").to(".persons__bg-images-wrap img[src*='person-all-03']",{yPercent:3},"<").to(".persons__bg-images-wrap img[src*='person-all-04']",{xPercent:13,yPercent:-7},"<").to(".persons__bg-images-wrap img[src*='person-all-05']",{xPercent:-10},"<").fromTo(".persons__title-text",{autoAlpha:0},{duration:.75,ease:"power2.out",autoAlpha:1},"<50%")}))})(),(()=>{let e=u.p8.matchMedia();e.add("(min-width: 768px)",(()=>{S=u.p8.timeline({defaults:{duration:1.25,ease:"power2.out"},paused:!0}).to("#culture",{autoAlpha:1.25}).fromTo(".top-culture__copy-list",{x:"100%",autoAlpha:0},{duration:1.125,x:"0",autoAlpha:1},">").fromTo(".top-culture__lead",{x:"-100%",autoAlpha:0},{duration:1.125,x:"0",autoAlpha:1},"<").fromTo(".top-culture__lead-body p",{autoAlpha:0,y:60},{duration:1,autoAlpha:1,y:0,stagger:.2},"<50%").fromTo(".top-culture__copy-list-item",{autoAlpha:0,y:60},{duration:1,autoAlpha:1,y:0,stagger:.1},"<50%")})),e.add("(max-width: 767px)",(()=>{S=u.p8.timeline({defaults:{duration:1.25,ease:"power2.out"},paused:!0}).to("#culture",{autoAlpha:1.25}).fromTo(".top-culture__copy-list",{x:"100%",autoAlpha:0},{duration:1.125,x:"0",autoAlpha:1},">").fromTo(".top-culture__copy-list-item",{autoAlpha:0,y:30},{duration:1,autoAlpha:1,y:0,stagger:.125},"<50%")}));const t=u.p8.timeline({defaults:{duration:1,ease:"none",repeat:-1}}).fromTo("#culture-otedama-left-hand",{rotation:-15},{rotation:0,transformOrigin:"3% 3%",yoyo:!0}).set("#culture-otedama-right-hand",{yPercent:20,xPercent:-10},0).fromTo("#culture-otedama-right-hand",{rotation:-15},{rotation:0,transformOrigin:"95% 20%",yoyo:!0},0).to("#culture-otedama-goods",{duration:8,rotation:"-360",transformOrigin:"center"},0).to("#culture-otedama-goods > *",{duration:4,rotation:"-360",transformOrigin:"center"},0);C.push(t);const o=u.p8.timeline({defaults:{duration:1,ease:"sine.inOut"},repeat:-1,yoyo:!0,repeatDelay:1}).set("#target1, #target2",{rotation:-90,transformOrigin:"center center"}).set("#target1",{drawSVG:"33%"}).set("#target2",{drawSVG:"75%"}).to("#target1",{drawSVG:"0% 80%"}).to("#target2",{drawSVG:"33% 88%"},0);C.push(o),document.querySelectorAll(".donuts-chart").forEach(((e,t)=>{const o=e.querySelectorAll(".target1"),a=u.p8.timeline({defaults:{duration:"random([.85, 1, 1.25])",ease:"sine.inOut"},delay:"random([0, 1, 1.5])",repeat:-1,yoyo:!0,repeatDelay:.25}).set(o,{drawSVG:0,rotation:-90,transformOrigin:"center center"}).to(o,{drawSVG:"0% 85%"});C.push(a)}));const a=u.p8.timeline({defaults:{duration:1,ease:"sine.inOut"},repeat:-1,yoyo:!0,repeatDelay:1}).set(".culture-bar-graph-points > *",{x:"random([-65, -85, 65, 85])"}).to(".culture-bar-graph-points > *",{x:0,stagger:.25});C.push(a),document.querySelectorAll(".top-culture__bg-vertical-bar-graph").forEach(((e,t)=>{const o=e.querySelectorAll(".top-culture__bg-vertical-bar-graph-item"),a=u.p8.timeline({defaults:{duration:.75,ease:"sine.inOut"},repeat:-1,yoyo:!0}).set(o,{height:"random([35%, 50%, 75%, 100%])",transformOrigin:"bottom"}).to(o,{delay:"random([.25, .5, .75, 1])",scaleY:"random([.25, .35, .5, .75])",stagger:.25});C.push(a)})),document.querySelectorAll(".culture-drawing").forEach(((e,t)=>{const o=e.querySelector(".culture-drawing-pencil"),a=e.querySelector(".culture-drawing-right-hand"),r=e.querySelector(".culture-drawing-left-hand"),n=e.querySelector(".culture-drawing-line"),l=u.p8.timeline({delay:"random([.25, .5, .75])",defaults:{duration:1,ease:"none"},repeat:-1,yoyo:!0}).fromTo(o,{rotate:7},{transformOrigin:"center",rotate:-5}).fromTo(n,{y:6},{y:-4},0).fromTo(a,{rotate:12},{transformOrigin:"center 10%",rotate:-5},0).fromTo(r,{rotate:12},{transformOrigin:"20% 90%",rotate:-7},0);C.push(l)})),document.querySelectorAll(".culture-annai").forEach(((e,t)=>{const o=e.querySelector(".culture-annai-right-hand"),a=u.p8.timeline({delay:"random([.25, .5, .75])",defaults:{duration:1,ease:"none"},repeat:-1,yoyo:!0}).fromTo(o,{rotate:0},{transformOrigin:"top right",rotate:10},0);C.push(a)})),document.querySelectorAll(".culture-walking").forEach(((e,t)=>{const o=e.querySelector(".culture-walking-left-hand"),a=e.querySelector(".culture-walking-right-hand"),r=e.querySelector(".culture-walking-left-foot"),n=e.querySelector(".culture-walking-right-foot"),l=u.p8.timeline({delay:"random([.25, .5, .75])",defaults:{duration:.85,ease:"none"},repeat:-1,yoyo:!0}).fromTo(a,{rotate:-3},{transformOrigin:"top center",rotate:4},0).fromTo(o,{rotate:6},{transformOrigin:"top 3%",rotate:0},0).fromTo(n,{rotate:-3},{transformOrigin:"top left",rotate:1},0).fromTo(r,{rotate:-1},{transformOrigin:"top 60%",rotate:-4},0);C.push(l)})),document.querySelectorAll(".culture-making").forEach(((e,t)=>{const o=e.querySelector(".culture-making-left-hand"),a=e.querySelector(".culture-making-right-hand"),r=e.querySelector(".culture-making-haguruma-large"),n=e.querySelector(".culture-making-haguruma-small"),l=e.querySelector(".culture-making-structure"),s=u.p8.timeline({delay:"random([.25, .5, .75])",defaults:{duration:.85,ease:"none"},repeat:-1,yoyo:!0}).fromTo(a,{rotate:5},{transformOrigin:"top right",rotate:-2},0).fromTo(o,{rotate:5},{transformOrigin:"center right",rotate:-2},0).fromTo(l,{y:-3},{y:4},0),i=u.p8.timeline({delay:"random([.25, .5, .75])",defaults:{duration:.85,ease:"none"},repeat:-1}).to(r,{duration:3,rotation:-360,transformOrigin:"center",yoyo:!1},0).to(n,{duration:3,rotation:-360,transformOrigin:"center",yoyo:!1},0);C.push(s,i)})),document.querySelectorAll(".culture-making2").forEach(((e,t)=>{const o=e.querySelector(".culture-making2-left-hand"),a=e.querySelector(".culture-making2-right-hand"),r=e.querySelector(".culture-making2-structure"),n=e.querySelector(".culture-making2-head"),l=u.p8.timeline({delay:"random([.25, .5, .75])",defaults:{duration:.85,ease:"none"},repeat:-1,yoyo:!0}).fromTo(a,{rotate:7},{transformOrigin:"center left",rotate:2},0).fromTo(o,{rotate:5},{transformOrigin:"center left",rotate:2},0).fromTo(r,{y:3},{y:-4},0).fromTo(n,{rotate:0},{transformOrigin:"center bottom",rotate:-15,repeatDelay:1},0);C.push(l)})),document.querySelectorAll(".top-culture__bg-item[class*='fukidashi'] svg").forEach(((e,t)=>{const o=u.p8.utils.random(.5,.6,.7),a=u.p8.to(e,{delay:()=>t%3==0?.75:t%2==0?1.5:0,duration:()=>t%3==0?.78125:t%2==0?.7825:.78375,duration:"random([.75, .85, 1])",autoAlpha:.35,scale:"random([.75, .8, .85])",yoyo:!0,repeat:-1,repeatDelay:o,transformOrigin:"center center",ease:"power2.inOut"});C.push(a)})),C.forEach((e=>{e.pause()}))})(),O=u.p8.timeline({defaults:{duration:1.25,ease:"power2.out"},paused:!0}).to("#epilogue",{duration:2,autoAlpha:1}).fromTo(".top-epilogue__lead-title",{autoAlpha:0,y:60},{duration:1,ease:"power2.out",autoAlpha:1,y:0},"<25%").fromTo(".top-epilogue__lead-body p",{autoAlpha:0,y:60},{duration:1.5,ease:"power2.out",autoAlpha:1,y:0,stagger:.25},"<25%"),L=u.p8.timeline({paused:!0}).set(document.documentElement,{overscrollBehavior:"none"}).set(".footer",{marginTop:"100vh"}).set("#topFooter",{autoAlpha:1,"--top-scroll-bar":"none",overflowY:"auto",overscrollBehavior:"none"}),P=u.p8.to(".ep__section-scroll",{paused:!0,duration:.35,autoAlpha:0,ease:"power2.out"}),q=u.p8.to(".ep__bottom-gradient",{paused:!0,duration:.35,autoAlpha:0,ease:"power2.out"}),E=d.i.create({trigger:"#footer",start:"top bottom",end:"bottom top",scroller:"#topFooter",onEnter:()=>{P.restart(),q.restart()},onLeaveBack:()=>{a.matches?D("epilogue",-1,8):$("epilogue",-1,8),j.enable(),P.reverse(),q.reverse()}}),E.disable(),T(),a.matches||u.p8.set(".ep__01-02-bg",{zIndex:1}),Object.assign(document.documentElement.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",overscrollBehaviorY:"none"}),Object.assign(document.body.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",overscrollBehaviorY:"none"}),l.style.pointerEvents="none",l.querySelectorAll("header a, header button").forEach((e=>{e.style.pointerEvents="auto"}));const B=e=>{for(let t=0;t<o.length;t++)if((o[t].dataset.ep||o[t].dataset.epSp)===e)return o[t]},F=document.querySelectorAll(".ep__section-label__links-item"),M=e=>{F.forEach((t=>{const o=t.dataset.topTo;e===o?t.classList.add("--active"):t.classList.contains("--active")&&t.classList.remove("--active")}))},z=document.querySelectorAll(".ep__navigation-link"),I=e=>{z.forEach((t=>{const o=t.href.split("#")[1];e===o?t.classList.add("--active"):t.classList.contains("--active")&&t.classList.remove("--active")}))};function W(t,r){console.log(t),Q.flag=!0,e=o[t].dataset.ep,a.matches?D(e,r,t):$(e,r,t)}z.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),Q.flag=!0;const t=e.currentTarget.href.split("#")[1];"prologue"===t&&u.p8.to(B(G),{duration:1,autoAlpha:0,ease:"power2.out"}),"prologue"!=t&&"prologue"!=G&&"prologue2"!=G&&u.p8.set(".ep__01-02-bg",{visibility:"hidden",onComplete:()=>{u.p8.set(".ep__01-02-bg",{delay:1,visibility:""})}}),"prologue"===G&&u.p8.to(".ep__top-section-5minute, .header__link",{duration:1,autoAlpha:0}),"topFooter"===G&&(j.enable(),P.reverse(),q.reverse(),window.addEventListener("touchmove",i,{passive:!1}),window.addEventListener("wheel",i,{passive:!1}),R=!1,E.disable(),u.p8.to("#topFooter",{duration:1,autoAlpha:0,ease:"power2.out",clearProps:"opacity,visibility",onComplete:e=>{u.p8.set("#topFooter",{zIndex:""})}})),"prologue"===t&&T(),$(t,1,(e=>{for(let t=0;t<o.length;t++)if((o[t].dataset.ep||o[t].dataset.epSp)===e)return t})(t))}))})),$=(e,a,r)=>{switch(console.log("ディレクション："+a),console.log("カレント（前）のセクション："+G),console.log("ターゲット（次）セクション："+e),document.body.classList.add("--pointer-events-none"),o.forEach((e=>{e.style.zIndex=""})),1==a?G&&(B(G).style.zIndex=1,B(e).style.zIndex=2):(B(G).style.zIndex=2,B(e).style.zIndex=1),V&&("prologue"===e||"prologue2"===e?p&&p.paused&&p.play():p.pause()),"prologue"===e?b.play():b.pause(),"culture"===e?C.forEach((e=>{e.play()})):C.forEach((e=>{e.pause()})),e){case"prologue":V?1==a?(I(e),f.restart(),f.eventCallback("onComplete",(()=>{Q.flag=!1,document.body.classList.remove("--pointer-events-none"),g.progress(0).pause()}))):(h.restart(),h.eventCallback("onComplete",(()=>{Q.flag=!1,document.body.classList.remove("--pointer-events-none")}))):(V=!0,u.p8.set("#prologue",{zIndex:1}));break;case"prologue2":1==a?(_.progress(0).pause(),g.restart(),g.eventCallback("onComplete",(()=>{document.body.classList.remove("--pointer-events-none"),Q.flag=!1}))):(I("prologue"),T(),g.progress(1),_.reverse(),_.eventCallback("onReverseComplete",(()=>{document.body.classList.remove("--pointer-events-none"),Q.flag=!1})));break;case"about":1==a?(I(e),M(e),w.progress(0).pause(),_.restart(),_.eventCallback("onComplete",(e=>{v(),Q.flag=!1,document.body.classList.remove("--pointer-events-none")}))):(I(e),T(),_.progress(1),w.reverse(),w.eventCallback("onReverseComplete",(()=>{v(),M(e),Q.flag=!1,document.body.classList.remove("--pointer-events-none")})));break;case"business":1==a?(I(e),T(),A.progress(0).pause(),w.restart(),w.eventCallback("onComplete",(()=>{v(),M(e),Q.flag=!1,document.body.classList.remove("--pointer-events-none")}))):(I(e),T(),w.progress(1),A.reverse(),A.eventCallback("onReverseComplete",(()=>{v(),M(e),Q.flag=!1,document.body.classList.remove("--pointer-events-none")})));break;case"job":1==a?(I(e),T(),k.progress(0).pause(),A.restart(),A.eventCallback("onComplete",(()=>{v(),M(e),Q.flag=!1,document.body.classList.remove("--pointer-events-none")}))):(I(e),T(),A.progress(1),k.reverse(),k.eventCallback("onReverseComplete",(()=>{v(),M(e),Q.flag=!1,document.body.classList.remove("--pointer-events-none")})));break;case"project":1==a?(I(e),T(),x.progress(0).pause(),k.restart(),k.eventCallback("onComplete",(()=>{v(),M(e),document.body.classList.remove("--pointer-events-none"),Q.flag=!1}))):(I(e),T(),k.progress(1),x.reverse(),x.eventCallback("onReverseComplete",(()=>{v(),M(e),Q.flag=!1,document.body.classList.remove("--pointer-events-none")})));break;case"person":1==a?(I(e),T(),S.progress(0).pause(),x.restart(),x.eventCallback("onComplete",(()=>{v(),M(e),Q.flag=!1,document.body.classList.remove("--pointer-events-none")}))):(I(e),T(),x.progress(1),C.forEach((e=>{e.play()})),S.reverse(),S.eventCallback("onReverseComplete",(()=>{C.forEach((e=>{e.pause()})),v(),M(e),Q.flag=!1,document.body.classList.remove("--pointer-events-none")})));break;case"culture":1==a?(I(e),T(),O.progress(0).pause(),S.restart(),S.eventCallback("onComplete",(()=>{v(),M(e),Q.flag=!1,document.body.classList.remove("--pointer-events-none")}))):(I(e),T(),S.progress(1),O.reverse(),O.eventCallback("onReverseComplete",(()=>{v(),M(e),Q.flag=!1,document.body.classList.remove("--pointer-events-none")})));break;case"epilogue":1==a?(I(e),T(),document.querySelector("#topFooter").scrollTop=0,C.forEach((e=>{e.play()})),O.restart(),O.eventCallback("onComplete",(()=>{C.forEach((e=>{e.play()})),v(),M(e),Q.flag=!1,document.body.classList.remove("--pointer-events-none")}))):(window.addEventListener("touchmove",i,{passive:!1}),window.addEventListener("wheel",i,{passive:!1}),R=!1,E.disable(),Q.flag=!1);break;case"topFooter":T(),j.disable(),window.removeEventListener("touchmove",i,{passive:!1}),window.removeEventListener("wheel",i,{passive:!1}),R=!0,L.restart(),document.body.classList.remove("--pointer-events-none"),E.enable()}t=r,G=e},D=(e,o,a)=>{switch(console.log("ディレクション："+o),console.log("カレント（前）のセクション："+G),console.log("ターゲット（次）セクション："+e),V&&("prologue"===e||"prologue2"===e?p&&p.paused&&p.play():p.pause()),"prologue"===e?b.play():b.pause(),"culture"===e?C.forEach((e=>{e.play()})):C.forEach((e=>{e.pause()})),e){case"prologue":V?1==o?(f.restart(),f.eventCallback("onComplete",(()=>{Q.flag=!1}))):(window.addEventListener("touchmove",i,{passive:!1}),window.addEventListener("wheel",i,{passive:!1}),R=!1,document.querySelector("#prologue2").scrollTop=0,h.restart(),h.eventCallback("onComplete",(()=>{Q.flag=!1}))):V=!0;break;case"prologue2":1==o?(g.restart(),g.eventCallback("onComplete",(()=>{j.disable(),window.removeEventListener("touchmove",i,{passive:!1}),window.removeEventListener("wheel",i,{passive:!1}),R=!0}))):(T(),_.reverse(),_.eventCallback("onReverseComplete",(()=>{j.disable(),window.removeEventListener("touchmove",i,{passive:!1}),window.removeEventListener("wheel",i,{passive:!1}),R=!0})));break;case"about":1==o?(document.querySelector("#prologue2").scrollTop=document.querySelector(".top-lead").clientHeight,window.addEventListener("touchmove",i,{passive:!1}),window.addEventListener("wheel",i,{passive:!1}),R=!1,M(e),_.restart(),_.eventCallback("onComplete",(()=>{v(),Q.flag=!1}))):(T(),w.reverse(),w.eventCallback("onReverseComplete",(()=>{v(),M(e),Q.flag=!1})));break;case"business":1==o?(T(),w.restart(),w.eventCallback("onComplete",(()=>{v(),M(e),Q.flag=!1}))):(T(),A.reverse(),A.eventCallback("onReverseComplete",(()=>{v(),M(e),Q.flag=!1})));break;case"job":1==o?(T(),A.restart(),A.eventCallback("onComplete",(()=>{v(),M(e),Q.flag=!1}))):(T(),k.reverse(),k.eventCallback("onReverseComplete",(()=>{v(),M(e),Q.flag=!1})));break;case"project":1==o?(T(),k.restart(),k.eventCallback("onComplete",(()=>{v(),M(e),Q.flag=!1}))):(T(),x.reverse(),x.eventCallback("onReverseComplete",(()=>{v(),M(e),Q.flag=!1})));break;case"person":1==o?(T(),x.restart(),x.eventCallback("onComplete",(()=>{v(),M(e),Q.flag=!1}))):(T(),C.forEach((e=>{e.play()})),S.reverse(),S.eventCallback("onReverseComplete",(()=>{C.forEach((e=>{e.pause()})),v(),M(e),Q.flag=!1})));break;case"culture":1==o?(T(),O.progress(0).pause(),S.restart(),S.eventCallback("onComplete",(()=>{v(),M(e),Q.flag=!1}))):(T(),S.progress(1),O.reverse(),O.eventCallback("onReverseComplete",(()=>{v(),M(e),Q.flag=!1})));break;case"epilogue":1==o?(T(),C.forEach((e=>{e.play()})),O.restart(),O.eventCallback("onComplete",(()=>{C.forEach((e=>{e.pause()})),v(),M(e),Q.flag=!1,D("topFooter",1,9)}))):(window.addEventListener("touchmove",i,{passive:!1}),window.addEventListener("wheel",i,{passive:!1}),R=!1,E.disable(),setTimeout((()=>{v()}),500),Q.flag=!1);break;case"topFooter":P.eventCallback("onStart",(()=>{T()})),j.disable(),window.removeEventListener("touchmove",i,{passive:!1}),R=!0,window.removeEventListener("wheel",i,{passive:!1}),L.restart(),E.enable()}t=a,G=e},j=c.Qj.create({type:"wheel,touch,pointer",wheelSpeed:-1,onDown:()=>{!Q.flag&&t>0&&W(t-1,-1)},onUp:()=>{!Q.flag&&t<o.length-1&&W(t+1,1)},tolerance:10,preventDefault:!0}),W(0,1)}()}},o={};function a(e){var r=o[e];if(void 0!==r)return r.exports;var n=o[e]={id:e,exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=(t,o,r,n)=>{if(!o){var l=1/0;for(u=0;u<e.length;u++){for(var[o,r,n]=e[u],s=!0,i=0;i<o.length;i++)(!1&n||l>=n)&&Object.keys(a.O).every((e=>a.O[e](o[i])))?o.splice(i--,1):(s=!1,n<l&&(l=n));if(s){e.splice(u--,1);var p=r();void 0!==p&&(t=p)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[o,r,n]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.j=550,(()=>{var e={550:0};a.O.j=t=>0===e[t];var t=(t,o)=>{var r,n,[l,s,i]=o,p=0;if(l.some((t=>0!==e[t]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(i)var u=i(a)}for(t&&t(o);p<l.length;p++)n=l[p],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},o=self.webpackChunkprepros_project=self.webpackChunkprepros_project||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),a.nc=void 0;var r=a.O(void 0,[736],(()=>a(795)));r=a.O(r)})();