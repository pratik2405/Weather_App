import './polyfills.server.mjs';
import{$ as Z1,A as U1,B as q1,C as d2,D as P2,E as C,F as v,G as O,H as W1,I as W,N as j1,Q as G1,R as V1,T as X1,U as Y1,V as $1,W as K2,X as Q2,Y as K1,Z as Q1,_ as J1,a as M2,aa as c3,b as P1,ba as l3,c as T1,d as F1,e as U,ea as s3,f as D1,g as E1,h as y2,i as v2,j as k2,k as O1,ka as e3,l as H1,m as p2,n as p,o as F,p as R1,q as A2,r as B1,s as S,t as z,u as L,v as x,w as I1,x as _1,y as q,z as C2}from"./chunk-JKWQDJ5V.mjs";import{a as t,b,l as d}from"./chunk-RABUEHFZ.mjs";d();d();d();d();d();var a3=()=>{},u1={},k3={},A3=null,P3={mark:a3,measure:a3};try{typeof window<"u"&&(u1=window),typeof document<"u"&&(k3=document),typeof MutationObserver<"u"&&(A3=MutationObserver),typeof performance<"u"&&(P3=performance)}catch{}var{userAgent:n3=""}=u1.navigator||{},K=u1,g=k3,i3=A3,T2=P3,A6=!!K.document,V=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",T3=~n3.indexOf("MSIE")||~n3.indexOf("Trident/"),N="classic",F3="duotone",A="sharp",P="sharp-duotone",S4=[N,F3,A,P],w4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},o3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},y4=["kit"],v4=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,k4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,A4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},P4={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},T4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},F4={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},D4={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},E4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},D3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},O4=["solid","regular","light","thin","duotone","brands"],E3=[1,2,3,4,5,6,7,8,9,10],H4=E3.concat([11,12,13,14,15,16,17,18,19,20]),u2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},R4=[...Object.keys(F4),...O4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",u2.GROUP,u2.SWAP_OPACITY,u2.PRIMARY,u2.SECONDARY].concat(E3.map(c=>"".concat(c,"x"))).concat(H4.map(c=>"w-".concat(c))),B4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},I4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},_4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},t3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},j="___FONT_AWESOME___",e1=16,O3="fa",H3="svg-inline--fa",e2="data-fa-i2svg",a1="data-fa-pseudo-element",U4="data-fa-pseudo-element-pending",h1="data-prefix",g1="data-icon",r3="fontawesome-i2svg",q4="async",W4=["HTML","HEAD","STYLE","SCRIPT"],R3=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),B3=[N,A,P];function S2(c){return new Proxy(c,{get(l,s){return s in l?l[s]:l[N]}})}var I3=t({},D3);I3[N]=t(t(t({},D3[N]),o3.kit),o3["kit-duotone"]);var l2=S2(I3),n1=t({},E4);n1[N]=t(t(t({},n1[N]),t3.kit),t3["kit-duotone"]);var N2=S2(n1),i1=t({},D4);i1[N]=t(t({},i1[N]),_4.kit);var s2=S2(i1),o1=t({},T4);o1[N]=t(t({},o1[N]),I4.kit);var j4=S2(o1),G4=v4,_3="fa-layers-text",V4=k4,X4=t({},w4),P6=S2(X4),Y4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],J2=u2,r2=new Set;Object.keys(N2[N]).map(r2.add.bind(r2));Object.keys(N2[A]).map(r2.add.bind(r2));Object.keys(N2[P]).map(r2.add.bind(r2));var $4=[...y4,...R4],g2=K.FontAwesomeConfig||{};function K4(c){var l=g.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function Q4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}g&&typeof g.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[s,e]=l,a=Q4(K4(s));a!=null&&(g2[e]=a)});var U3={styleDefault:"solid",familyDefault:"classic",cssPrefix:O3,replacementClass:H3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};g2.familyPrefix&&(g2.cssPrefix=g2.familyPrefix);var f2=t(t({},U3),g2);f2.autoReplaceSvg||(f2.observeMutations=!1);var m={};Object.keys(U3).forEach(c=>{Object.defineProperty(m,c,{enumerable:!0,set:function(l){f2[c]=l,x2.forEach(s=>s(m))},get:function(){return f2[c]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(c){f2.cssPrefix=c,x2.forEach(l=>l(m))},get:function(){return f2.cssPrefix}});K.FontAwesomeConfig=m;var x2=[];function J4(c){return x2.push(c),()=>{x2.splice(x2.indexOf(c),1)}}var Y=e1,R={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Z4(c){if(!c||!V)return;let l=g.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;let s=g.head.childNodes,e=null;for(let a=s.length-1;a>-1;a--){let n=s[a],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(e=n)}return g.head.insertBefore(l,e),c}var c0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function b2(){let c=12,l="";for(;c-- >0;)l+=c0[Math.random()*62|0];return l}function m2(c){let l=[];for(let s=(c||[]).length>>>0;s--;)l[s]=c[s];return l}function x1(c){return c.classList?m2(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function q3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function l0(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,'="').concat(q3(c[s]),'" '),"").trim()}function H2(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,": ").concat(c[s].trim(),";"),"")}function N1(c){return c.size!==R.size||c.x!==R.x||c.y!==R.y||c.rotate!==R.rotate||c.flipX||c.flipY}function s0(c){let{transform:l,containerWidth:s,iconWidth:e}=c,a={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),i="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),o="rotate(".concat(l.rotate," 0 0)"),r={transform:"".concat(n," ").concat(i," ").concat(o)},f={transform:"translate(".concat(e/2*-1," -256)")};return{outer:a,inner:r,path:f}}function e0(c){let{transform:l,width:s=e1,height:e=e1,startCentered:a=!1}=c,n="";return a&&T3?n+="translate(".concat(l.x/Y-s/2,"em, ").concat(l.y/Y-e/2,"em) "):a?n+="translate(calc(-50% + ".concat(l.x/Y,"em), calc(-50% + ").concat(l.y/Y,"em)) "):n+="translate(".concat(l.x/Y,"em, ").concat(l.y/Y,"em) "),n+="scale(".concat(l.size/Y*(l.flipX?-1:1),", ").concat(l.size/Y*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var a0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function W3(){let c=O3,l=H3,s=m.cssPrefix,e=m.replacementClass,a=a0;if(s!==c||e!==l){let n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(l),"g");a=a.replace(n,".".concat(s,"-")).replace(i,"--".concat(s,"-")).replace(o,".".concat(e))}return a}var f3=!1;function Z2(){m.autoAddCss&&!f3&&(Z4(W3()),f3=!0)}var n0={mixout(){return{dom:{css:W3,insertCss:Z2}}},hooks(){return{beforeDOMElementCreation(){Z2()},beforeI2svg(){Z2()}}}},G=K||{};G[j]||(G[j]={});G[j].styles||(G[j].styles={});G[j].hooks||(G[j].hooks={});G[j].shims||(G[j].shims=[]);var B=G[j],j3=[],G3=function(){g.removeEventListener("DOMContentLoaded",G3),E2=1,j3.map(c=>c())},E2=!1;V&&(E2=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),E2||g.addEventListener("DOMContentLoaded",G3));function i0(c){V&&(E2?setTimeout(c,0):j3.push(c))}function w2(c){let{tag:l,attributes:s={},children:e=[]}=c;return typeof c=="string"?q3(c):"<".concat(l," ").concat(l0(s),">").concat(e.map(w2).join(""),"</").concat(l,">")}function m3(c,l,s){if(c&&c[l]&&c[l][s])return{prefix:l,iconName:s,icon:c[l][s]}}var o0=function(l,s){return function(e,a,n,i){return l.call(s,e,a,n,i)}},c1=function(l,s,e,a){var n=Object.keys(l),i=n.length,o=a!==void 0?o0(s,a):s,r,f,M;for(e===void 0?(r=1,M=l[n[0]]):(r=0,M=e);r<i;r++)f=n[r],M=o(M,l[f],f,l);return M};function t0(c){let l=[],s=0,e=c.length;for(;s<e;){let a=c.charCodeAt(s++);if(a>=55296&&a<=56319&&s<e){let n=c.charCodeAt(s++);(n&64512)==56320?l.push(((a&1023)<<10)+(n&1023)+65536):(l.push(a),s--)}else l.push(a)}return l}function t1(c){let l=t0(c);return l.length===1?l[0].toString(16):null}function r0(c,l){let s=c.length,e=c.charCodeAt(l),a;return e>=55296&&e<=56319&&s>l+1&&(a=c.charCodeAt(l+1),a>=56320&&a<=57343)?(e-55296)*1024+a-56320+65536:e}function z3(c){return Object.keys(c).reduce((l,s)=>{let e=c[s];return!!e.icon?l[e.iconName]=e.icon:l[s]=e,l},{})}function r1(c,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:e=!1}=s,a=z3(l);typeof B.hooks.addPack=="function"&&!e?B.hooks.addPack(c,z3(l)):B.styles[c]=t(t({},B.styles[c]||{}),a),c==="fas"&&r1("fa",l)}var{styles:c2,shims:f0}=B,m0={[N]:Object.values(s2[N]),[A]:Object.values(s2[A]),[P]:Object.values(s2[P])},b1=null,V3={},X3={},Y3={},$3={},K3={},z0={[N]:Object.keys(l2[N]),[A]:Object.keys(l2[A]),[P]:Object.keys(l2[P])};function L0(c){return~$4.indexOf(c)}function M0(c,l){let s=l.split("-"),e=s[0],a=s.slice(1).join("-");return e===c&&a!==""&&!L0(a)?a:null}var Q3=()=>{let c=e=>c1(c2,(a,n,i)=>(a[i]=c1(n,e,{}),a),{});V3=c((e,a,n)=>(a[3]&&(e[a[3]]=n),a[2]&&a[2].filter(o=>typeof o=="number").forEach(o=>{e[o.toString(16)]=n}),e)),X3=c((e,a,n)=>(e[n]=n,a[2]&&a[2].filter(o=>typeof o=="string").forEach(o=>{e[o]=n}),e)),K3=c((e,a,n)=>{let i=a[2];return e[n]=n,i.forEach(o=>{e[o]=n}),e});let l="far"in c2||m.autoFetchSvg,s=c1(f0,(e,a)=>{let n=a[0],i=a[1],o=a[2];return i==="far"&&!l&&(i="fas"),typeof n=="string"&&(e.names[n]={prefix:i,iconName:o}),typeof n=="number"&&(e.unicodes[n.toString(16)]={prefix:i,iconName:o}),e},{names:{},unicodes:{}});Y3=s.names,$3=s.unicodes,b1=R2(m.styleDefault,{family:m.familyDefault})};J4(c=>{b1=R2(c.styleDefault,{family:m.familyDefault})});Q3();function S1(c,l){return(V3[c]||{})[l]}function p0(c,l){return(X3[c]||{})[l]}function $(c,l){return(K3[c]||{})[l]}function J3(c){return Y3[c]||{prefix:null,iconName:null}}function C0(c){let l=$3[c],s=S1("fas",c);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function Q(){return b1}var w1=()=>({prefix:null,iconName:null,rest:[]});function R2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:s=N}=l,e=l2[s][c],a=N2[s][c]||N2[s][e],n=c in B.styles?c:null;return a||n||null}var d0={[N]:Object.keys(s2[N]),[A]:Object.keys(s2[A]),[P]:Object.keys(s2[P])};function B2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:s=!1}=l,e={[N]:"".concat(m.cssPrefix,"-").concat(N),[A]:"".concat(m.cssPrefix,"-").concat(A),[P]:"".concat(m.cssPrefix,"-").concat(P)},a=null,n=N,i=S4.filter(r=>r!==F3);i.forEach(r=>{(c.includes(e[r])||c.some(f=>d0[r].includes(f)))&&(n=r)});let o=c.reduce((r,f)=>{let M=M0(m.cssPrefix,f);if(c2[f]?(f=m0[n].includes(f)?j4[n][f]:f,a=f,r.prefix=f):z0[n].indexOf(f)>-1?(a=f,r.prefix=R2(f,{family:n})):M?r.iconName=M:f!==m.replacementClass&&!i.some(h=>f===e[h])&&r.rest.push(f),!s&&r.prefix&&r.iconName){let h=a==="fa"?J3(r.iconName):{},u=$(r.prefix,r.iconName);h.prefix&&(a=null),r.iconName=h.iconName||u||r.iconName,r.prefix=h.prefix||r.prefix,r.prefix==="far"&&!c2.far&&c2.fas&&!m.autoFetchSvg&&(r.prefix="fas")}return r},w1());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&n===A&&(c2.fass||m.autoFetchSvg)&&(o.prefix="fass",o.iconName=$(o.prefix,o.iconName)||o.iconName),!o.prefix&&n===P&&(c2.fasds||m.autoFetchSvg)&&(o.prefix="fasds",o.iconName=$(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||a==="fa")&&(o.prefix=Q()||"fas"),o}var f1=class{constructor(){this.definitions={}}add(){for(var l=arguments.length,s=new Array(l),e=0;e<l;e++)s[e]=arguments[e];let a=s.reduce(this._pullDefinitions,{});Object.keys(a).forEach(n=>{this.definitions[n]=t(t({},this.definitions[n]||{}),a[n]),r1(n,a[n]);let i=s2[N][n];i&&r1(i,a[n]),Q3()})}reset(){this.definitions={}}_pullDefinitions(l,s){let e=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(e).map(a=>{let{prefix:n,iconName:i,icon:o}=e[a],r=o[2];l[n]||(l[n]={}),r.length>0&&r.forEach(f=>{typeof f=="string"&&(l[n][f]=o)}),l[n][i]=o}),l}},L3=[],o2={},t2={},u0=Object.keys(t2);function h0(c,l){let{mixoutsTo:s}=l;return L3=c,o2={},Object.keys(t2).forEach(e=>{u0.indexOf(e)===-1&&delete t2[e]}),L3.forEach(e=>{let a=e.mixout?e.mixout():{};if(Object.keys(a).forEach(n=>{typeof a[n]=="function"&&(s[n]=a[n]),typeof a[n]=="object"&&Object.keys(a[n]).forEach(i=>{s[n]||(s[n]={}),s[n][i]=a[n][i]})}),e.hooks){let n=e.hooks();Object.keys(n).forEach(i=>{o2[i]||(o2[i]=[]),o2[i].push(n[i])})}e.provides&&e.provides(t2)}),s}function m1(c,l){for(var s=arguments.length,e=new Array(s>2?s-2:0),a=2;a<s;a++)e[a-2]=arguments[a];return(o2[c]||[]).forEach(i=>{l=i.apply(null,[l,...e])}),l}function a2(c){for(var l=arguments.length,s=new Array(l>1?l-1:0),e=1;e<l;e++)s[e-1]=arguments[e];(o2[c]||[]).forEach(n=>{n.apply(null,s)})}function J(){let c=arguments[0],l=Array.prototype.slice.call(arguments,1);return t2[c]?t2[c].apply(null,l):void 0}function z1(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c,s=c.prefix||Q();if(l)return l=$(s,l)||l,m3(Z3.definitions,s,l)||m3(B.styles,s,l)}var Z3=new f1,g0=()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,a2("noAuto")},x0={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return V?(a2("beforeI2svg",c),J("pseudoElements2svg",c),J("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l}=c;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,i0(()=>{b0({autoReplaceSvgRoot:l}),a2("watch",c)})}},N0={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:$(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=R2(c[0]);return{prefix:s,iconName:$(s,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(m.cssPrefix,"-"))>-1||c.match(G4))){let l=B2(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||Q(),iconName:$(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){let l=Q();return{prefix:l,iconName:$(l,c)||c}}}},T={noAuto:g0,config:m,dom:x0,parse:N0,library:Z3,findIconDefinition:z1,toHtml:w2},b0=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l=g}=c;(Object.keys(B.styles).length>0||m.autoFetchSvg)&&V&&m.autoReplaceSvg&&T.dom.i2svg({node:l})};function I2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(s=>w2(s))}}),Object.defineProperty(c,"node",{get:function(){if(!V)return;let s=g.createElement("div");return s.innerHTML=c.html,s.children}}),c}function S0(c){let{children:l,main:s,mask:e,attributes:a,styles:n,transform:i}=c;if(N1(i)&&s.found&&!e.found){let{width:o,height:r}=s,f={x:o/r/2,y:.5};a.style=H2(b(t({},n),{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:a,children:l}]}function w0(c){let{prefix:l,iconName:s,children:e,attributes:a,symbol:n}=c,i=n===!0?"".concat(l,"-").concat(m.cssPrefix,"-").concat(s):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b(t({},a),{id:i}),children:e}]}]}function y1(c){let{icons:{main:l,mask:s},prefix:e,iconName:a,transform:n,symbol:i,title:o,maskId:r,titleId:f,extra:M,watchable:h=!1}=c,{width:u,height:y}=s.found?s:l,X=e==="fak",Z=[m.replacementClass,a?"".concat(m.cssPrefix,"-").concat(a):""].filter(i2=>M.classes.indexOf(i2)===-1).filter(i2=>i2!==""||!!i2).concat(M.classes).join(" "),D={children:[],attributes:b(t({},M.attributes),{"data-prefix":e,"data-icon":a,class:Z,role:M.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(u," ").concat(y)})},_=X&&!~M.classes.indexOf("fa-fw")?{width:"".concat(u/y*16*.0625,"em")}:{};h&&(D.attributes[e2]=""),o&&(D.children.push({tag:"title",attributes:{id:D.attributes["aria-labelledby"]||"title-".concat(f||b2())},children:[o]}),delete D.attributes.title);let k=b(t({},D),{prefix:e,iconName:a,main:l,mask:s,maskId:r,transform:n,symbol:i,styles:t(t({},_),M.styles)}),{children:E,attributes:n2}=s.found&&l.found?J("generateAbstractMask",k)||{children:[],attributes:{}}:J("generateAbstractIcon",k)||{children:[],attributes:{}};return k.children=E,k.attributes=n2,i?w0(k):S0(k)}function M3(c){let{content:l,width:s,height:e,transform:a,title:n,extra:i,watchable:o=!1}=c,r=b(t(t({},i.attributes),n?{title:n}:{}),{class:i.classes.join(" ")});o&&(r[e2]="");let f=t({},i.styles);N1(a)&&(f.transform=e0({transform:a,startCentered:!0,width:s,height:e}),f["-webkit-transform"]=f.transform);let M=H2(f);M.length>0&&(r.style=M);let h=[];return h.push({tag:"span",attributes:r,children:[l]}),n&&h.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),h}function y0(c){let{content:l,title:s,extra:e}=c,a=b(t(t({},e.attributes),s?{title:s}:{}),{class:e.classes.join(" ")}),n=H2(e.styles);n.length>0&&(a.style=n);let i=[];return i.push({tag:"span",attributes:a,children:[l]}),s&&i.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),i}var{styles:l1}=B;function L1(c){let l=c[0],s=c[1],[e]=c.slice(4),a=null;return Array.isArray(e)?a={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(J2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(J2.SECONDARY),fill:"currentColor",d:e[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(J2.PRIMARY),fill:"currentColor",d:e[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:e}},{found:!0,width:l,height:s,icon:a}}var v0={found:!1,width:512,height:512};function k0(c,l){!R3&&!m.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function M1(c,l){let s=l;return l==="fa"&&m.styleDefault!==null&&(l=Q()),new Promise((e,a)=>{if(s==="fa"){let n=J3(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&l1[l]&&l1[l][c]){let n=l1[l][c];return e(L1(n))}k0(c,l),e(b(t({},v0),{icon:m.showMissingIcons&&c?J("missingIconAbstract")||{}:{}}))})}var p3=()=>{},p1=m.measurePerformance&&T2&&T2.mark&&T2.measure?T2:{mark:p3,measure:p3},h2='FA "6.6.0"',A0=c=>(p1.mark("".concat(h2," ").concat(c," begins")),()=>c4(c)),c4=c=>{p1.mark("".concat(h2," ").concat(c," ends")),p1.measure("".concat(h2," ").concat(c),"".concat(h2," ").concat(c," begins"),"".concat(h2," ").concat(c," ends"))},v1={begin:A0,end:c4},F2=()=>{};function C3(c){return typeof(c.getAttribute?c.getAttribute(e2):null)=="string"}function P0(c){let l=c.getAttribute?c.getAttribute(h1):null,s=c.getAttribute?c.getAttribute(g1):null;return l&&s}function T0(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(m.replacementClass)}function F0(){return m.autoReplaceSvg===!0?D2.replace:D2[m.autoReplaceSvg]||D2.replace}function D0(c){return g.createElementNS("http://www.w3.org/2000/svg",c)}function E0(c){return g.createElement(c)}function l4(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:s=c.tag==="svg"?D0:E0}=l;if(typeof c=="string")return g.createTextNode(c);let e=s(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){e.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){e.appendChild(l4(n,{ceFn:s}))}),e}function O0(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var D2={replace:function(c){let l=c[0];if(l.parentNode)if(c[1].forEach(s=>{l.parentNode.insertBefore(l4(s),l)}),l.getAttribute(e2)===null&&m.keepOriginalSource){let s=g.createComment(O0(l));l.parentNode.replaceChild(s,l)}else l.remove()},nest:function(c){let l=c[0],s=c[1];if(~x1(l).indexOf(m.replacementClass))return D2.replace(c);let e=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){let n=s[0].attributes.class.split(" ").reduce((i,o)=>(o===m.replacementClass||o.match(e)?i.toSvg.push(o):i.toNode.push(o),i),{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}let a=s.map(n=>w2(n)).join(`
`);l.setAttribute(e2,""),l.innerHTML=a}};function d3(c){c()}function s4(c,l){let s=typeof l=="function"?l:F2;if(c.length===0)s();else{let e=d3;m.mutateApproach===q4&&(e=K.requestAnimationFrame||d3),e(()=>{let a=F0(),n=v1.begin("mutate");c.map(a),n(),s()})}}var k1=!1;function e4(){k1=!0}function C1(){k1=!1}var O2=null;function u3(c){if(!i3||!m.observeMutations)return;let{treeCallback:l=F2,nodeCallback:s=F2,pseudoElementsCallback:e=F2,observeMutationsRoot:a=g}=c;O2=new i3(n=>{if(k1)return;let i=Q();m2(n).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!C3(o.addedNodes[0])&&(m.searchPseudoElements&&e(o.target),l(o.target)),o.type==="attributes"&&o.target.parentNode&&m.searchPseudoElements&&e(o.target.parentNode),o.type==="attributes"&&C3(o.target)&&~Y4.indexOf(o.attributeName))if(o.attributeName==="class"&&P0(o.target)){let{prefix:r,iconName:f}=B2(x1(o.target));o.target.setAttribute(h1,r||i),f&&o.target.setAttribute(g1,f)}else T0(o.target)&&s(o.target)})}),V&&O2.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function H0(){O2&&O2.disconnect()}function R0(c){let l=c.getAttribute("style"),s=[];return l&&(s=l.split(";").reduce((e,a)=>{let n=a.split(":"),i=n[0],o=n.slice(1);return i&&o.length>0&&(e[i]=o.join(":").trim()),e},{})),s}function B0(c){let l=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",a=B2(x1(c));return a.prefix||(a.prefix=Q()),l&&s&&(a.prefix=l,a.iconName=s),a.iconName&&a.prefix||(a.prefix&&e.length>0&&(a.iconName=p0(a.prefix,c.innerText)||S1(a.prefix,t1(c.innerText))),!a.iconName&&m.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=c.firstChild.data)),a}function I0(c){let l=m2(c.attributes).reduce((a,n)=>(a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a),{}),s=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return m.autoA11y&&(s?l["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(e||b2()):(l["aria-hidden"]="true",l.focusable="false")),l}function _0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:R,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function h3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:s,prefix:e,rest:a}=B0(c),n=I0(c),i=m1("parseNodeAttributes",{},c),o=l.styleParser?R0(c):[];return t({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:e,transform:R,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:o,attributes:n}},i)}var{styles:U0}=B;function a4(c){let l=m.autoReplaceSvg==="nest"?h3(c,{styleParser:!1}):h3(c);return~l.extra.classes.indexOf(_3)?J("generateLayersText",c,l):J("generateSvgReplacementMutation",c,l)}var I=new Set;B3.map(c=>{I.add("fa-".concat(c))});Object.keys(l2[N]).map(I.add.bind(I));Object.keys(l2[A]).map(I.add.bind(I));Object.keys(l2[P]).map(I.add.bind(I));I=[...I];function g3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!V)return Promise.resolve();let s=g.documentElement.classList,e=M=>s.add("".concat(r3,"-").concat(M)),a=M=>s.remove("".concat(r3,"-").concat(M)),n=m.autoFetchSvg?I:B3.map(M=>"fa-".concat(M)).concat(Object.keys(U0));n.includes("fa")||n.push("fa");let i=[".".concat(_3,":not([").concat(e2,"])")].concat(n.map(M=>".".concat(M,":not([").concat(e2,"])"))).join(", ");if(i.length===0)return Promise.resolve();let o=[];try{o=m2(c.querySelectorAll(i))}catch{}if(o.length>0)e("pending"),a("complete");else return Promise.resolve();let r=v1.begin("onTree"),f=o.reduce((M,h)=>{try{let u=a4(h);u&&M.push(u)}catch(u){R3||u.name==="MissingIcon"&&console.error(u)}return M},[]);return new Promise((M,h)=>{Promise.all(f).then(u=>{s4(u,()=>{e("active"),e("complete"),a("pending"),typeof l=="function"&&l(),r(),M()})}).catch(u=>{r(),h(u)})})}function q0(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;a4(c).then(s=>{s&&s4([s],l)})}function W0(c){return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(l||{}).icon?l:z1(l||{}),{mask:a}=s;return a&&(a=(a||{}).icon?a:z1(a||{})),c(e,b(t({},s),{mask:a}))}}var j0=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=R,symbol:e=!1,mask:a=null,maskId:n=null,title:i=null,titleId:o=null,classes:r=[],attributes:f={},styles:M={}}=l;if(!c)return;let{prefix:h,iconName:u,icon:y}=c;return I2(t({type:"icon"},c),()=>(a2("beforeDOMElementCreation",{iconDefinition:c,params:l}),m.autoA11y&&(i?f["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(o||b2()):(f["aria-hidden"]="true",f.focusable="false")),y1({icons:{main:L1(y),mask:a?L1(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:u,transform:t(t({},R),s),symbol:e,title:i,maskId:n,titleId:o,extra:{attributes:f,styles:M,classes:r}})))},G0={mixout(){return{icon:W0(j0)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=g3,c.nodeCallback=q0,c}}},provides(c){c.i2svg=function(l){let{node:s=g,callback:e=()=>{}}=l;return g3(s,e)},c.generateSvgReplacementMutation=function(l,s){let{iconName:e,title:a,titleId:n,prefix:i,transform:o,symbol:r,mask:f,maskId:M,extra:h}=s;return new Promise((u,y)=>{Promise.all([M1(e,i),f.iconName?M1(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(X=>{let[Z,D]=X;u([l,y1({icons:{main:Z,mask:D},prefix:i,iconName:e,transform:o,symbol:r,maskId:M,title:a,titleId:n,extra:h,watchable:!0})])}).catch(y)})},c.generateAbstractIcon=function(l){let{children:s,attributes:e,main:a,transform:n,styles:i}=l,o=H2(i);o.length>0&&(e.style=o);let r;return N1(n)&&(r=J("generateAbstractTransformGrouping",{main:a,transform:n,containerWidth:a.width,iconWidth:a.width})),s.push(r||a.icon),{children:s,attributes:e}}}},V0={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:s=[]}=l;return I2({type:"layer"},()=>{a2("beforeDOMElementCreation",{assembler:c,params:l});let e=[];return c(a=>{Array.isArray(a)?a.map(n=>{e=e.concat(n.abstract)}):e=e.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...s].join(" ")},children:e}]})}}}},X0={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:s=null,classes:e=[],attributes:a={},styles:n={}}=l;return I2({type:"counter",content:c},()=>(a2("beforeDOMElementCreation",{content:c,params:l}),y0({content:c.toString(),title:s,extra:{attributes:a,styles:n,classes:["".concat(m.cssPrefix,"-layers-counter"),...e]}})))}}}},Y0={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=R,title:e=null,classes:a=[],attributes:n={},styles:i={}}=l;return I2({type:"text",content:c},()=>(a2("beforeDOMElementCreation",{content:c,params:l}),M3({content:c,transform:t(t({},R),s),title:e,extra:{attributes:n,styles:i,classes:["".concat(m.cssPrefix,"-layers-text"),...a]}})))}}},provides(c){c.generateLayersText=function(l,s){let{title:e,transform:a,extra:n}=s,i=null,o=null;if(T3){let r=parseInt(getComputedStyle(l).fontSize,10),f=l.getBoundingClientRect();i=f.width/r,o=f.height/r}return m.autoA11y&&!e&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,M3({content:l.innerHTML,width:i,height:o,transform:a,title:e,extra:n,watchable:!0})])}}},$0=new RegExp('"',"ug"),x3=[1105920,1112319],N3=t(t(t({FontAwesome:{normal:"fas",400:"fas"}},P4),A4),B4),d1=Object.keys(N3).reduce((c,l)=>(c[l.toLowerCase()]=N3[l],c),{}),K0=Object.keys(d1).reduce((c,l)=>{let s=d1[l];return c[l]=s[900]||[...Object.entries(s)][0][1],c},{});function Q0(c){let l=c.replace($0,""),s=r0(l,0),e=s>=x3[0]&&s<=x3[1],a=l.length===2?l[0]===l[1]:!1;return{value:t1(a?l[0]:l),isSecondary:e||a}}function J0(c,l){let s=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(l),a=isNaN(e)?"normal":e;return(d1[s]||{})[a]||K0[s]}function b3(c,l){let s="".concat(U4).concat(l.replace(":","-"));return new Promise((e,a)=>{if(c.getAttribute(s)!==null)return e();let i=m2(c.children).filter(u=>u.getAttribute(a1)===l)[0],o=K.getComputedStyle(c,l),r=o.getPropertyValue("font-family"),f=r.match(V4),M=o.getPropertyValue("font-weight"),h=o.getPropertyValue("content");if(i&&!f)return c.removeChild(i),e();if(f&&h!=="none"&&h!==""){let u=o.getPropertyValue("content"),y=J0(r,M),{value:X,isSecondary:Z}=Q0(u),D=f[0].startsWith("FontAwesome"),_=S1(y,X),k=_;if(D){let E=C0(X);E.iconName&&E.prefix&&(_=E.iconName,y=E.prefix)}if(_&&!Z&&(!i||i.getAttribute(h1)!==y||i.getAttribute(g1)!==k)){c.setAttribute(s,k),i&&c.removeChild(i);let E=_0(),{extra:n2}=E;n2.attributes[a1]=l,M1(_,y).then(i2=>{let N4=y1(b(t({},E),{icons:{main:i2,mask:w1()},prefix:y,iconName:k,extra:n2,watchable:!0})),$2=g.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore($2,c.firstChild):c.appendChild($2),$2.outerHTML=N4.map(b4=>w2(b4)).join(`
`),c.removeAttribute(s),e()}).catch(a)}else e()}else e()})}function Z0(c){return Promise.all([b3(c,"::before"),b3(c,"::after")])}function c6(c){return c.parentNode!==document.head&&!~W4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(a1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function S3(c){if(V)return new Promise((l,s)=>{let e=m2(c.querySelectorAll("*")).filter(c6).map(Z0),a=v1.begin("searchPseudoElements");e4(),Promise.all(e).then(()=>{a(),C1(),l()}).catch(()=>{a(),C1(),s()})})}var l6={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=S3,c}}},provides(c){c.pseudoElements2svg=function(l){let{node:s=g}=l;m.searchPseudoElements&&S3(s)}}},w3=!1,s6={mixout(){return{dom:{unwatch(){e4(),w3=!0}}}},hooks(){return{bootstrap(){u3(m1("mutationObserverCallbacks",{}))},noAuto(){H0()},watch(c){let{observeMutationsRoot:l}=c;w3?C1():u3(m1("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},y3=c=>{let l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((s,e)=>{let a=e.toLowerCase().split("-"),n=a[0],i=a.slice(1).join("-");if(n&&i==="h")return s.flipX=!0,s;if(n&&i==="v")return s.flipY=!0,s;if(i=parseFloat(i),isNaN(i))return s;switch(n){case"grow":s.size=s.size+i;break;case"shrink":s.size=s.size-i;break;case"left":s.x=s.x-i;break;case"right":s.x=s.x+i;break;case"up":s.y=s.y-i;break;case"down":s.y=s.y+i;break;case"rotate":s.rotate=s.rotate+i;break}return s},l)},e6={mixout(){return{parse:{transform:c=>y3(c)}}},hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-transform");return s&&(c.transform=y3(s)),c}}},provides(c){c.generateAbstractTransformGrouping=function(l){let{main:s,transform:e,containerWidth:a,iconWidth:n}=l,i={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),r="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),f="rotate(".concat(e.rotate," 0 0)"),M={transform:"".concat(o," ").concat(r," ").concat(f)},h={transform:"translate(".concat(n/2*-1," -256)")},u={outer:i,inner:M,path:h};return{tag:"g",attributes:t({},u.outer),children:[{tag:"g",attributes:t({},u.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:t(t({},s.icon.attributes),u.path)}]}]}}}},s1={x:0,y:0,width:"100%",height:"100%"};function v3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function a6(c){return c.tag==="g"?c.children:[c]}var n6={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-mask"),e=s?B2(s.split(" ").map(a=>a.trim())):w1();return e.prefix||(e.prefix=Q()),c.mask=e,c.maskId=l.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(l){let{children:s,attributes:e,main:a,mask:n,maskId:i,transform:o}=l,{width:r,icon:f}=a,{width:M,icon:h}=n,u=s0({transform:o,containerWidth:M,iconWidth:r}),y={tag:"rect",attributes:b(t({},s1),{fill:"white"})},X=f.children?{children:f.children.map(v3)}:{},Z={tag:"g",attributes:t({},u.inner),children:[v3(t({tag:f.tag,attributes:t(t({},f.attributes),u.path)},X))]},D={tag:"g",attributes:t({},u.outer),children:[Z]},_="mask-".concat(i||b2()),k="clip-".concat(i||b2()),E={tag:"mask",attributes:b(t({},s1),{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,D]},n2={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:a6(h)},E]};return s.push(n2,{tag:"rect",attributes:t({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(_,")")},s1)}),{children:s,attributes:e}}}},i6={provides(c){let l=!1;K.matchMedia&&(l=K.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let s=[],e={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:b(t({},e),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=b(t({},a),{attributeName:"opacity"}),i={tag:"circle",attributes:b(t({},e),{cx:"256",cy:"364",r:"28"}),children:[]};return l||i.children.push({tag:"animate",attributes:b(t({},a),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:b(t({},n),{values:"1;0;1;1;0;1;"})}),s.push(i),s.push({tag:"path",attributes:b(t({},e),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:b(t({},n),{values:"1;0;0;0;0;1;"})}]}),l||s.push({tag:"path",attributes:b(t({},e),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:b(t({},n),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},o6={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-symbol"),e=s===null?!1:s===""?!0:s;return c.symbol=e,c}}}},t6=[n0,G0,V0,X0,Y0,l6,s6,e6,n6,i6,o6];h0(t6,{mixoutsTo:T});var T6=T.noAuto,n4=T.config,F6=T.library,i4=T.dom,o4=T.parse,D6=T.findIconDefinition,E6=T.toHtml,t4=T.icon,O6=T.layer,r6=T.text,f6=T.counter;var m6=["*"],z6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},L6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},M6=c=>{let l={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(l).map(s=>l[s]?s:null).filter(s=>s)},A1=new WeakSet,r4="fa-auto-css";function p6(c,l){if(!l.autoAddCss||A1.has(c))return;if(c.getElementById(r4)!=null){l.autoAddCss=!1,A1.add(c);return}let s=c.createElement("style");s.setAttribute("type","text/css"),s.setAttribute("id",r4),s.innerHTML=i4.css();let e=c.head.childNodes,a=null;for(let n=e.length-1;n>-1;n--){let i=e[n],o=i.nodeName.toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}c.head.insertBefore(s,a),l.autoAddCss=!1,A1.add(c)}var C6=c=>c.prefix!==void 0&&c.iconName!==void 0,d6=(c,l)=>C6(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:l,iconName:c},u6=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(s){n4.autoAddCss=s,this._autoAddCss=s}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275prov=M2({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),h6=(()=>{class c{constructor(){this.definitions={}}addIcons(...s){for(let e of s){e.prefix in this.definitions||(this.definitions[e.prefix]={}),this.definitions[e.prefix][e.iconName]=e;for(let a of e.icon[2])typeof a=="string"&&(this.definitions[e.prefix][a]=e)}}addIconPacks(...s){for(let e of s){let a=Object.keys(e).map(n=>e[n]);this.addIcons(...a)}}getIconDefinition(s,e){return s in this.definitions&&e in this.definitions[s]?this.definitions[s][e]:null}static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275prov=M2({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),g6=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(s){if("size"in s)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275dir=E1({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[y2]})}}return c})(),x6=(()=>{class c{constructor(s,e){this.renderer=s,this.elementRef=e}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(s){"size"in s&&(s.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${s.size.currentValue}`),s.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${s.size.previousValue}`))}static{this.\u0275fac=function(e){return new(e||c)(F(R1),F(O1))}}static{this.\u0275cmp=U({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[y2,W],ngContentSelectors:m6,decls:1,vars:0,template:function(e,a){e&1&&(U1(),q1(0))},encapsulation:2})}}return c})(),U2=(()=>{class c{constructor(s,e,a,n,i){this.sanitizer=s,this.config=e,this.iconLibrary=a,this.stackItem=n,this.document=F1(V1),i!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(s){if(this.icon==null&&this.config.fallbackIcon==null){L6();return}if(s){let e=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(e!=null){let a=this.buildParams();p6(this.document,this.config);let n=t4(e,a);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(s){let e=d6(s,this.config.defaultPrefix);if("icon"in e)return e;let a=this.iconLibrary.getIconDefinition(e.prefix,e.iconName);return a??(z6(e),null)}buildParams(){let s={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},e=typeof this.transform=="string"?o4.transform(this.transform):this.transform;return{title:this.title,transform:e,classes:M6(s),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}static{this.\u0275fac=function(e){return new(e||c)(F(c3),F(u6),F(h6),F(g6,8),F(x6,8))}}static{this.\u0275cmp=U({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(e,a){e&2&&(_1("innerHTML",a.renderedIconHTML,H1),B1("title",a.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[y2,W],decls:0,vars:0,template:function(e,a){},encapsulation:2})}}return c})();var z2=(()=>{class c{static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275mod=D1({type:c})}static{this.\u0275inj=P1({})}}return c})();d();var m4={prefix:"fas",iconName:"cloud",icon:[640,512,[9729],"f0c2","M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"]};var z4={prefix:"fas",iconName:"face-frown",icon:[512,512,[9785,"frown"],"f119","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.3 388.7c-2.6 8.4-11.6 13.2-20 10.5s-13.2-11.6-10.5-20C145.2 326.1 196.3 288 256 288s110.8 38.1 127.3 91.3c2.6 8.4-2.1 17.4-10.5 20s-17.4-2.1-20-10.5C340.5 349.4 302.1 320 256 320s-84.5 29.4-96.7 68.7zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]};var L4={prefix:"fas",iconName:"cloud-rain",icon:[512,512,[127783,9926],"f73d","M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96L96 320zm-6.8 52c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3l0 3c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-3c0-8.5 2.1-16.9 6.2-24.3L89.2 372zm160 0c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3l0 3c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-3c0-8.5 2.1-16.9 6.2-24.3L249.2 372zm124.9 64.6L409.2 372c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3l0 3c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-3c0-8.5 2.1-16.9 6.2-24.3z"]};var M4={prefix:"fas",iconName:"thumbs-down",icon:[512,512,[128078,61576],"f165","M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2l144 0c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48l-97.5 0c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7l0 38.3 0 48 0 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32L32 96C14.3 96 0 110.3 0 128L0 352c0 17.7 14.3 32 32 32z"]};var N6={prefix:"fas",iconName:"face-smile",icon:[512,512,[128578,"smile"],"f118","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},p4=N6;var C4={prefix:"fas",iconName:"thumbs-up",icon:[512,512,[128077,61575],"f164","M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z"]};d();d();var q2=class{temperature;summaryimage;day;time;summary;rainpercent;location};d();var W2=class{time;summaryimage;temperature};d();var j2=class{day;summaryimage;tempmax;tempmin};d();var G2=class{uvindex;windstatus;sunrise;sunset;humidity;visibility;airquality};d();var H={weatherApiLocationURL:"https://weather338.p.rapidapi.com/locations/search?",weatherApiForcastURL:"https://weather338.p.rapidapi.com/weather/forecast?",xRapidApiKeyName:"x-rapidapi-key",xRapidApiKeyValue:"a9a9dc8271msh2438cb32015721ep1eadfbjsn2daa79afb973",xRapidApiHostName:"x-rapidapi-host",xRapidApiHostValue:"weather338.p.rapidapi.com"};var L2=class c{constructor(l){this.httpClient=l;this.getData()}locationDetails;weatherDetails;temperatureData;todayData=[];weekData=[];todaysHighLight;cityName="pune";language="en-US";date="20200622";units="m";currentTime;today=!1;week=!0;celsius=!0;fahrenheit=!1;getSummaryImg(l){var s="cloudy.png",e="cloudy (1).png",a="windsum.png",n="sun.png",i="rainy-day-sum.png",o="clouds.png";return String(l).includes("Partly Cloudy")||String(l).includes("P Cloudy")||String(l).includes("Clear")?s:String(l).includes("Partly Rainy")||String(l).includes("P Rainy")?e:String(l).includes("Wind")?a:String(l).includes("Rain")?i:String(l).includes("Sun")?n:String(l).includes("Smoke")?o:e}fillTemperatureData(){this.currentTime=new Date,this.temperatureData.day=this.weatherDetails["v3-wx-observations-current"].dayOfWeek,this.temperatureData.time=`${String(this.currentTime.getHours()).padStart(2,"0")}:${String(this.currentTime.getMinutes()).padStart(2,"0")}`,this.temperatureData.temperature=this.weatherDetails["v3-wx-observations-current"].temperature,this.temperatureData.location=`${this.locationDetails.location.city[0]},${this.locationDetails.location.country[0]}`,this.temperatureData.rainpercent=this.weatherDetails["v3-wx-observations-current"].precip24Hour,this.temperatureData.summary=this.weatherDetails["v3-wx-observations-current"].wxPhraseShort,this.temperatureData.summaryimage=this.getSummaryImg(this.temperatureData.summary)}fillWeekData(){for(var l=0;l<7;)this.weekData.push(new j2),this.weekData[l].day=this.weatherDetails["v3-wx-forecast-daily-15day"].dayOfWeek[l].slice(0,3),this.weekData[l].tempmax=this.weatherDetails["v3-wx-forecast-daily-15day"].calendarDayTemperatureMax[l],this.weekData[l].tempmin=this.weatherDetails["v3-wx-forecast-daily-15day"].calendarDayTemperatureMin[l],this.weekData[l].summaryimage=this.getSummaryImg(this.weatherDetails["v3-wx-forecast-daily-15day"].narrative[l]),l++}fillTodayData(){for(var l=0;l<7;)this.todayData.push(new W2),this.todayData[l].time=this.weatherDetails["v3-wx-forecast-hourly-10day"].validTimeLocal[l].slice(11,16),this.todayData[l].temperature=this.weatherDetails["v3-wx-forecast-hourly-10day"].temperature[l],this.todayData[l].summaryimage=this.getSummaryImg(this.weatherDetails["v3-wx-forecast-hourly-10day"].wxPhraseShort[l]),l++}getTimeFromString(l){return l.slice(11,16)}fillTodaysHightlight(){this.todaysHighLight.airquality=this.weatherDetails["v3-wx-globalAirQuality"].globalairquality.airQualityIndex,this.todaysHighLight.humidity=this.weatherDetails["v3-wx-observations-current"].relativeHumidity,this.todaysHighLight.sunrise=this.getTimeFromString(this.weatherDetails["v3-wx-observations-current"].sunriseTimeLocal),this.todaysHighLight.sunset=this.getTimeFromString(this.weatherDetails["v3-wx-observations-current"].sunsetTimeLocal),this.todaysHighLight.uvindex=this.weatherDetails["v3-wx-observations-current"].uvIndex,this.todaysHighLight.visibility=this.weatherDetails["v3-wx-observations-current"].visibility,this.todaysHighLight.windstatus=this.weatherDetails["v3-wx-observations-current"].windSpeed}perparedData(){this.fillTemperatureData(),this.fillWeekData(),this.fillTodayData(),this.fillTodaysHightlight()}celsiusToFahrenheit(l){return(l*1.8+32).toFixed(1)}fahrenheitToCelsius(l){return(l*32/.555).toFixed(1)}getLocationDetails(l,s){return this.httpClient.get(H.weatherApiLocationURL,{headers:new K2().set(H.xRapidApiKeyName,H.xRapidApiKeyValue).set(H.xRapidApiHostName,H.xRapidApiHostValue),params:new Q2().set("query",l).set("language",s)})}getWeatherReport(l,s,e,a,n){return this.httpClient.get(H.weatherApiForcastURL,{headers:new K2().set(H.xRapidApiKeyName,H.xRapidApiKeyValue).set(H.xRapidApiHostName,H.xRapidApiHostValue),params:new Q2().set("date",l).set("latitude",s).set("longitude",e).set("language",a).set("units",n)})}getData(){this.todayData=[],this.weekData=[],this.temperatureData=new q2,this.todaysHighLight=new G2;var l,s;this.getLocationDetails(this.cityName,this.language).subscribe({next:e=>{this.locationDetails=e,l=this.locationDetails?.location.latitude[0],s=this.locationDetails?.location.longitude[0],this.getWeatherReport(this.date,l,s,this.language,this.units).subscribe({next:a=>{this.weatherDetails=a,this.perparedData()}})}})}static \u0275fac=function(s){return new(s||c)(T1(K1))};static \u0275prov=M2({token:c,factory:c.\u0275fac,providedIn:"root"})};var V2=class c{constructor(l){this.weatherService=l}faCloud=m4;faCloudRain=L4;onSearch(l){this.weatherService.cityName=l,this.weatherService.getData()}static \u0275fac=function(s){return new(s||c)(F(L2))};static \u0275cmp=U({type:c,selectors:[["app-left-container"]],standalone:!0,features:[W],decls:38,vars:10,consts:[["location",""],[1,"left-container"],[1,"left-nav-bar"],[1,"search-icon",3,"click"],["src","search.png","alt",""],[1,"search-input"],["type","text","placeholder","Search for places...",3,"keyup.Enter"],[1,"search-location",3,"click"],["src","google-maps.png","alt",""],[1,"left-data-box"],[1,"temp-data"],[1,"temp-img"],["alt","summaryImg",3,"src"],[1,"temp-value"],[1,"day-time"],[1,"other-details"],[1,"temp-summary"],[1,"temp-summary-pharse-img"],[2,"color","#4060d2",3,"icon"],[1,"temp-summary-value"],[1,"temp-rain-stats"],[1,"temp-rain-img"],[1,"temp-rain-value"],[1,"location-details"],[1,"location-details-img"],["src","pune-1625115438.jpg","alt",""],[1,"location-details-name"]],template:function(s,e){if(s&1){let a=I1();z(0,"div",1)(1,"div",2)(2,"div",3),q("click",function(){v2(a);let i=P2(6);return k2(e.onSearch(i.value))}),x(3,"img",4),L(),z(4,"div",5)(5,"input",6,0),q("keyup.Enter",function(){v2(a);let i=P2(6);return k2(e.onSearch(i.value))}),L()(),z(7,"div",7),q("click",function(){v2(a);let i=P2(6);return k2(e.onSearch(i.value))}),x(8,"img",8),L()(),z(9,"div",9)(10,"div",10)(11,"div",11),x(12,"img",12),L(),z(13,"div",13),C(14),z(15,"sup"),C(16),L()(),z(17,"div",14),C(18),z(19,"span"),C(20),L()()(),x(21,"hr"),z(22,"div",15)(23,"div",16)(24,"div",17),x(25,"fa-icon",18),L(),z(26,"div",19),C(27),L()(),z(28,"div",20)(29,"div",21),x(30,"fa-icon",18),L(),z(31,"div",22),C(32),L()(),x(33,"div",23),z(34,"div",24),x(35,"img",25),L(),z(36,"div",26),C(37),L()()()()}s&2&&(p(12),d2("src",e.weatherService.temperatureData.summaryimage,p2),p(2),v(e.weatherService.celsius==!0?e.weatherService.temperatureData.temperature:e.weatherService.celsiusToFahrenheit(e.weatherService.temperatureData.temperature)),p(2),v(e.weatherService.celsius==!0?"\xB0C":"\xB0F"),p(2),O("",e.weatherService.temperatureData.day,", "),p(2),v(e.weatherService.temperatureData.time),p(5),S("icon",e.faCloud),p(2),v(e.weatherService.temperatureData.summary),p(3),S("icon",e.faCloudRain),p(2),O("Rain - ",e.weatherService.temperatureData.rainpercent,""),p(5),v(e.weatherService.temperatureData.location))},dependencies:[z2,U2],styles:["left-container[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}.left-nav-bar[_ngcontent-%COMP%]{flex:2;display:flex;flex-direction:row;justify-content:center;align-items:center;margin:30px}.left-nav-bar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px}.search-icon[_ngcontent-%COMP%]{flex:2;text-align:right;margin-right:8px}.search-input[_ngcontent-%COMP%]{flex:4}.search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;padding:8px;font-size:11px}.search-location[_ngcontent-%COMP%]{flex:2;text-align:center}.search-location[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{padding:1px;border-radius:100px}.left-data-box[_ngcontent-%COMP%]{flex:12;display:flex;flex-direction:column;margin-left:30px;margin-right:30px}.temp-data[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.temp-img[_ngcontent-%COMP%]{flex:2}.temp-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:200px}.temp-value[_ngcontent-%COMP%]{flex:1;font-size:62px;font-weight:400;margin-top:6px;margin-bottom:6px}.day-time[_ngcontent-%COMP%]{flex:1;font-weight:700;font-size:medium;color:#000}.day-time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ddd}.other-details[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.other-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px}.temp-summary[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:row;font-size:small;margin-top:6px;margin-bottom:6px}.temp-summary-pharse-img[_ngcontent-%COMP%]{margin-right:10px}.temp-rain-stats[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:row;font-size:small;margin-top:6px;margin-bottom:6px}.temp-rain-img[_ngcontent-%COMP%]{margin-right:12px}.location-details[_ngcontent-%COMP%]{flex:4;margin-top:10px;margin-bottom:6px}.location-details-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100px;width:240px;border-radius:20px}.location-details-name[_ngcontent-%COMP%]{margin-top:-60px;margin-left:70px;font-size:medium;font-weight:700;color:#fff}"]})};d();function b6(c,l){if(c&1&&(z(0,"div",43)(1,"div",44),C(2),L(),z(3,"div",45),x(4,"img",46),L(),z(5,"div",47)(6,"span",48),C(7),L(),z(8,"span",49),C(9),L()()()),c&2){let s=l.$implicit,e=C2(2);p(2),v(s.day),p(2),d2("src",s.summaryimage,p2),p(3),O("",e.weatherService.celsius==!0?s.tempmax:e.weatherService.celsiusToFahrenheit(s.tempmax),"\xB0 "),p(2),O("",e.weatherService.celsius==!0?s.tempmin:e.weatherService.celsiusToFahrenheit(s.tempmin),"\xB0")}}function S6(c,l){if(c&1&&(z(0,"div",41),A2(1,b6,10,4,"div",42),L()),c&2){let s=C2();p(),S("ngForOf",s.weatherService.weekData)}}function w6(c,l){if(c&1&&(z(0,"div",43)(1,"div",44),C(2),L(),z(3,"div",45),x(4,"img",46),L(),z(5,"div",47),C(6),L()()),c&2){let s=l.$implicit,e=C2(2);p(2),v(s.time),p(2),d2("src",s.summaryimage,p2),p(2),W1("",e.weatherService.celsius==!0?s.temperature:e.weatherService.celsiusToFahrenheit(s.temperature),"",e.weatherService.celsius==!0?"\xB0C":"\xB0F","")}}function y6(c,l){if(c&1&&(z(0,"div",50),A2(1,w6,7,4,"div",42),L()),c&2){let s=C2();p(),S("ngForOf",s.weatherService.todayData)}}var X2=class c{constructor(l){this.weatherService=l}faThumbsUp=C4;faThumbsDown=M4;faSmile=p4;faFaceFrown=z4;onToday(){this.weatherService.week=!1,this.weatherService.today=!0}onWeek(){this.weatherService.week=!0,this.weatherService.today=!1}onCelsius(){this.weatherService.celsius=!0,this.weatherService.fahrenheit=!1}onFahrenheit(){this.weatherService.fahrenheit=!0,this.weatherService.celsius=!1}static \u0275fac=function(s){return new(s||c)(F(L2))};static \u0275cmp=U({type:c,selectors:[["app-right-container"]],standalone:!0,features:[W],decls:86,vars:20,consts:[[1,"right-container"],[1,"right-nav-bar"],[1,"nav-bar-tabs"],[1,"today",3,"click","className"],[1,"week",3,"click","className"],[1,"underline",3,"className"],[1,"nav-bar-temp"],[1,"celsius",3,"click","className"],[1,"fahrenheit",3,"click","className"],[1,"profile-image"],["src","boy.png","alt","profile-image"],[1,"right-data-box"],["class","temp-week-card-box",4,"ngIf"],["class","temp-today-card-box",4,"ngIf"],[1,"today-highlight"],[1,"today-highlight-title"],[1,"today-highlight-card"],[1,"today-card"],[1,"today-card-title"],[1,"gauge"],[1,"gauge_body"],[1,"gauge_fill"],[1,"gauge_cover"],[1,"today-card-value"],[1,"wind-value",2,"align-self","self-start","margin-left","20px"],[1,"unit"],[1,"wind-logo"],["src","wind.png","alt",""],[1,"sunrise-sunset-value"],[1,"sunrise"],[1,"sunrise-img"],["src","arrow.png","alt",""],[1,"sunrise-time"],[1,"sunset"],[1,"sunset-img"],["src","arrow (1).png","alt",""],[1,"sunset-time"],[1,"percentage-unit",2,"margin-top","-10px"],[1,"humidity-sum",2,"align-self","self-start","margin-left","20px"],[2,"color","#4060d2",3,"icon"],[2,"color","#f8dc0a",3,"icon"],[1,"temp-week-card-box"],["class","temp-card",4,"ngFor","ngForOf"],[1,"temp-card"],[1,"temp-card-day"],[1,"temp-card-temp-img"],["alt","",3,"src"],[1,"temp-card-temp-value"],[1,"temp-max"],[1,"temp-min"],[1,"temp-today-card-box"]],template:function(s,e){s&1&&(z(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),q("click",function(){return e.onToday()}),C(4,"Today"),L(),z(5,"div",4),q("click",function(){return e.onWeek()}),C(6,"Week"),L(),x(7,"div",5),L(),z(8,"div",6)(9,"div",7),q("click",function(){return e.onCelsius()}),C(10,"\xB0C "),L(),z(11,"div",8),q("click",function(){return e.onFahrenheit()}),C(12,"\xB0F"),L(),z(13,"div",9),x(14,"img",10),L()()(),z(15,"div",11),A2(16,S6,2,1,"div",12)(17,y6,2,1,"div",13),z(18,"div",14)(19,"div",15),C(20,"Today's Highlight"),L(),z(21,"div",16)(22,"div",17)(23,"div",18),C(24,"UV Index"),L(),z(25,"div",19)(26,"div",20),x(27,"div",21)(28,"div",22),L()(),z(29,"div",23),C(30),L()(),z(31,"div",17)(32,"div",18),C(33,"Wind Status"),L(),z(34,"div",24),C(35),z(36,"span",25),C(37," km/h"),L()(),z(38,"div",26),x(39,"img",27),L()(),z(40,"div",17)(41,"div",18),C(42,"Sunrise & Sunset"),L(),z(43,"div",28)(44,"div",29)(45,"div",30),x(46,"img",31),L(),z(47,"div",32),C(48),L()(),z(49,"div",33)(50,"div",34),x(51,"img",35),L(),z(52,"div",36),C(53),L()()()()(),z(54,"div",16)(55,"div",17)(56,"div",18),C(57,"Humidity"),L(),z(58,"div",24),C(59),z(60,"sup",37),C(61,"%"),L()(),z(62,"div",38),C(63),z(64,"span"),x(65,"fa-icon",39),L()()(),z(66,"div",17)(67,"div",18),C(68,"Visibility"),L(),z(69,"div",24),C(70),z(71,"span",25),C(72," km/h"),L()(),z(73,"div",38),C(74),z(75,"span"),x(76,"fa-icon",40),L()()(),z(77,"div",17)(78,"div",18),C(79,"Air Quality"),L(),z(80,"div",24),C(81),L(),z(82,"div",38),C(83),z(84,"span"),x(85,"fa-icon",39),L()()()()()()()),s&2&&(p(3),S("className",e.weatherService.today==!0?"today today-active":"today"),p(2),S("className",e.weatherService.week==!0?"week week-active":"week"),p(2),S("className",e.weatherService.today==!0?"underline underline-today":"underline underline-week"),p(2),S("className",e.weatherService.celsius==!0?"celsius celsius-active":"celsius"),p(2),S("className",e.weatherService.fahrenheit==!0?"fahrenheit fahrenheit-active":"fahrenheit"),p(5),S("ngIf",e.weatherService.week==!0),p(),S("ngIf",e.weatherService.today==!0),p(13),v(e.weatherService.todaysHighLight.uvindex),p(5),v(e.weatherService.todaysHighLight.windstatus),p(13),v(e.weatherService.todaysHighLight.sunrise),p(5),v(e.weatherService.todaysHighLight.sunset),p(6),O("",e.weatherService.todaysHighLight.humidity," "),p(4),O("",e.weatherService.todaysHighLight.humidity<50?"Normal":"High"," "),p(2),S("icon",e.faThumbsUp),p(5),O("",e.weatherService.todaysHighLight.visibility," "),p(4),O("",e.weatherService.todaysHighLight.visibility>5?"Normal":"Low"," "),p(2),S("icon",e.faFaceFrown),p(5),v(e.weatherService.todaysHighLight.airquality),p(2),O("",e.weatherService.todaysHighLight.airquality<100?"Satisfactory":"Unhealthy"," "),p(2),S("icon",e.faThumbsDown))},dependencies:[$1,X1,Y1,z2,U2],styles:[".right-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;font-weight:bolder}.right-nav-bar[_ngcontent-%COMP%]{flex:2;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.nav-bar-tabs[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-left:30px}.today[_ngcontent-%COMP%]{margin-right:20px;color:#c5c5c5}.today[_ngcontent-%COMP%]:hover{color:#000;cursor:pointer}.today-active[_ngcontent-%COMP%]{color:#1a1a1a}.week[_ngcontent-%COMP%]{color:#c5c5c5}.week[_ngcontent-%COMP%]:hover{color:#000;cursor:pointer}.week-active[_ngcontent-%COMP%]{color:#1a1a1a}.underline[_ngcontent-%COMP%]{width:50px;height:2px;background-color:#1a1a1a;margin-top:22px}.underline-today[_ngcontent-%COMP%]{transform:translate3d(-232%,0,0);transition:.1s}.underline-week[_ngcontent-%COMP%]{transform:translate3d(-95%,0,0);transition:.1s}.nav-bar-temp[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-right:30px;justify-content:center;align-items:center}.celsius[_ngcontent-%COMP%]{border-radius:500px;padding:5px 7px 4px;color:#1a1a1a;background-color:#f6f6f8;font-size:small;cursor:pointer}.celsius-active[_ngcontent-%COMP%]{background-color:#000;color:#fff}.fahrenheit[_ngcontent-%COMP%]{border-radius:500px;padding:5px 7px 4px;color:#1a1a1a;background-color:#f6f6f8;margin-left:10px;margin-right:10px;font-size:small;cursor:pointer}.fahrenheit-active[_ngcontent-%COMP%]{background-color:#000;color:#fff}.profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:20px;margin-left:10px;margin-right:10px}.right-data-box[_ngcontent-%COMP%]{flex:12;display:flex;flex-direction:column;margin:30px}.temp-week-card-box[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:row;justify-content:center}.temp-card[_ngcontent-%COMP%]{width:80px;height:90px;background-color:#fff;border-radius:10px;margin-left:5px;margin-right:5px;text-align:center;justify-content:center;align-items:center;font-size:x-small;font-weight:500}.temp-card-day[_ngcontent-%COMP%]{padding-top:5px;margin:5px}.temp-min[_ngcontent-%COMP%]{color:gray}.temp-card-temp-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px}.temp-card-temp-value[_ngcontent-%COMP%]{margin:5px}.temp-today-card-box[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:row;justify-content:center}.today-highlight[_ngcontent-%COMP%]{flex:3;display:flex;flex-direction:column}.today-highlight-title[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:10px;flex:2;font-size:medium;font-weight:700}.today-highlight-card[_ngcontent-%COMP%]{flex:8;display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:-10px}.today-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;background-color:#fff;border-radius:10px;width:200px;height:150px;justify-content:center;align-items:center;text-align:center;margin-left:10px}.today-card-title[_ngcontent-%COMP%]{flex:1;color:#c9c9c9;font-size:small;font-weight:500;margin-top:20px;align-self:self-start;margin-left:20px}.gauge[_ngcontent-%COMP%]{margin-top:-40px;flex:2;width:70%;max-width:180px;font-size:32px;font-weight:500;color:#adff2f}.gauge_body[_ngcontent-%COMP%]{width:100%;height:0;padding-bottom:50%;background-color:#f3f3f4;position:relative;border-top-left-radius:100% 200%;border-top-right-radius:100% 200%;overflow:hidden;margin-top:1rem}.gauge_fill[_ngcontent-%COMP%]{position:absolute;top:100%;left:0%;width:inherit;height:100%;background:#ffbf5e;transform-origin:center top;transform:rotate(.25turn);transition:transform .2s ease-out}.gauge_cover[_ngcontent-%COMP%]{width:75%;height:150%;background:#fff;border-radius:50%;position:absolute;top:25%;left:50%;transform:translate(-50%);display:flex;align-items:center;justify-content:center;padding-bottom:25%;box-sizing:border-box;color:#fff}.today-card-value[_ngcontent-%COMP%]{flex:1;margin-top:-40px;margin-bottom:10px;z-index:1;font-size:xx-large;font-weight:500}.wind-value[_ngcontent-%COMP%]{flex:2;font-size:40px;font-weight:500;text-align:center}.unit[_ngcontent-%COMP%]{font-size:16px}.wind-logo[_ngcontent-%COMP%]{flex:1;align-self:self-start;margin-left:30px}.wind-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px}.sunrise-sunset-value[_ngcontent-%COMP%]{flex:3;display:flex;flex-direction:column}.sunrise[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:row;margin-bottom:-10px;margin-left:-30px}.sunrise-img[_ngcontent-%COMP%]{flex:1;margin-bottom:10px;margin-right:10px}.sunrise-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px}.sunrise-time[_ngcontent-%COMP%]{flex:4;margin-top:3px;font-weight:700;font-size:medium}.sunset[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:row;margin-left:-30px}.sunset-img[_ngcontent-%COMP%]{flex:1;margin-bottom:10px;margin-right:9px}.sunset-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px}.sunset-time[_ngcontent-%COMP%]{flex:4;margin-top:3px;font-weight:700;font-size:medium}.percentage-unit[_ngcontent-%COMP%]{font-size:16px}.humidity-sum[_ngcontent-%COMP%]{font-size:small;font-weight:500;margin-bottom:10px}.humidity-sum[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px}"]})};var Y2=class c{title="weatherApp";static \u0275fac=function(s){return new(s||c)};static \u0275cmp=U({type:c,selectors:[["app-root"]],standalone:!0,features:[W],decls:6,vars:0,consts:[[1,"app-container"],[1,"weather-container"],[1,"left-container"],[1,"rigth-container"]],template:function(s,e){s&1&&(z(0,"div",0)(1,"div",1)(2,"div",2),x(3,"app-left-container"),L(),z(4,"div",3),x(5,"app-right-container"),L()()())},dependencies:[V2,X2,z2,J1],styles:[".app-container[_ngcontent-%COMP%]{width:100vw;height:100vh;background-color:#d6d7da;display:flex;justify-content:center;align-items:center}.weather-container[_ngcontent-%COMP%]{width:70vw;height:90vh;border-radius:30px;display:flex;flex-direction:row}.left-container[_ngcontent-%COMP%]{flex:3;background-color:#fff;border-top-left-radius:30px;border-bottom-left-radius:30px}.rigth-container[_ngcontent-%COMP%]{flex:7;background-color:#f6f6f8;border-top-right-radius:30px;border-bottom-right-radius:30px}"]})};d();d();d();var h4=[];var g4={providers:[j1({eventCoalescing:!0}),e3(h4),l3(),Q1()]};var v6={providers:[s3()]},x4=G1(g4,v6);var k6=()=>Z1(Y2,x4),i5=k6;export{i5 as a};
