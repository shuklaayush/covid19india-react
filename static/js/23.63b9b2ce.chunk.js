(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[23],{163:function(e,t,n){"use strict";var r=n(2),i=n(88),o=["mousedown","touchstart"];t.a=function(e,t,n){void 0===n&&(n=o);var a=Object(r.useRef)(t);Object(r.useEffect)((function(){a.current=t}),[t]),Object(r.useEffect)((function(){for(var t=function(t){var n=e.current;n&&!n.contains(t.target)&&a.current(t)},r=0,o=n;r<o.length;r++){var c=o[r];Object(i.d)(document,c,t)}return function(){for(var e=0,r=n;e<r.length;e++){var o=r[e];Object(i.c)(document,o,t)}}}),[n,e])}},646:function(e,t,n){!function(e,t){"use strict";function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e){var t,n,r,o,c,u,s,f,h,v,b,p,g,m,O,j,y,w,x,k,S,M,E,P,T,A,L,N,z,C,I,B,_=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},R="data-keen-slider-moves",D="data-keen-slider-v",W=[],Y=null,X=!1,F=!1,H=0,V=[];function J(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e.addEventListener(t,n,r),W.push([e,t,n,r])}function U(e){if(w&&x===$(e)&&ce()){var n=Q(e).x;if(!te(e)&&P)return K(e);P&&(Xe(),k=n,t.setAttribute(R,!0),P=!1),e.cancelable&&e.preventDefault(),Ce(E(k-n,qe)*(se()?-1:1),e.timeStamp),k=n}}function q(e){w||!ce()||ee(e.target)||(w=!0,P=!0,x=$(e),te(e),he(),y=v,k=Q(e).x,Ce(0,e.timeStamp),oe("dragStart"))}function K(e){w&&x===$(e,!0)&&ce()&&(t.removeAttribute(R),w=!1,pe(),oe("dragEnd"))}function Z(e){return e.changedTouches}function $(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?Z(e):G(e);return t?t[0]?t[0].identifier:"error":"default"}function G(e){return e.targetTouches}function Q(e){var t=G(e);return{x:le()?t?t[0].screenY:e.pageY:t?t[0].screenX:e.pageX,timestamp:e.timeStamp}}function ee(e){return e.hasAttribute(j.preventEvent)}function te(e){var t=G(e);if(!t)return!0;var n=t[0],r=le()?n.clientY:n.clientX,i=le()?n.clientX:n.clientY,o=void 0!==S&&void 0!==M&&Math.abs(M-i)<=Math.abs(S-r);return S=r,M=i,o}function ne(e){ce()&&w&&e.preventDefault()}function re(){J(window,"orientationchange",Te),J(window,"resize",(function(){return Pe()})),J(t,"dragstart",(function(e){ce()&&e.preventDefault()})),J(t,"mousedown",q),J(j.cancelOnLeave?t:window,"mousemove",U),j.cancelOnLeave&&J(t,"mouseleave",K),J(window,"mouseup",K),J(t,"touchstart",q,{passive:!0}),J(t,"touchmove",U,{passive:!1}),J(t,"touchend",K,{passive:!0}),J(t,"touchcancel",K,{passive:!0}),J(window,"wheel",ne,{passive:!1})}function ie(){W.forEach((function(e){e[0].removeEventListener(e[1],e[2],e[3])})),W=[]}function oe(e){j[e]&&j[e](qe)}function ae(){return j.centered}function ce(){return void 0!==n?n:j.controls}function ue(){return j.loop&&r>1}function se(){return j.rtl}function fe(){return!j.loop&&j.rubberband}function le(){return!!j.vertical}function de(){T=window.requestAnimationFrame(ve)}function he(){T&&(window.cancelAnimationFrame(T),T=null),A=null}function ve(e){A||(A=e);var t=e-A,n=be(t);if(t>=N)return Ce(L-C,!1),B?B():void oe("afterChange");var r=Ie(n);if(0===r||ue()||fe()||I){if(0!==r&&fe()&&!I)return ye();C+=n,Ce(n,!1),de()}else Ce(n-r,!1)}function be(e){return L*z(e/N)-C}function pe(){switch(oe("beforeChange"),j.mode){case"free":Oe();break;case"free-snap":je();break;case"snap":default:ge()}}function ge(){me((1===s&&0!==b?y:v)+Math.sign(b))}function me(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:j.duration,r=function(e){return 1+--e*e*e*e*e};we(De(e=Re(e,arguments.length>3&&void 0!==arguments[3]&&arguments[3],arguments.length>4&&void 0!==arguments[4]&&arguments[4])),n,r,t)}function Oe(){if(0===g)return!(!Ie(0)||ue())&&me(v);var e=j.friction/Math.pow(Math.abs(g),-.5);we(Math.pow(g,2)/e*Math.sign(g),6*Math.abs(g/e),(function(e){return 1-Math.pow(1-e,5)}))}function je(){if(0===g)return me(v);var e=j.friction/Math.pow(Math.abs(g),-.5),t=Math.pow(g,2)/e*Math.sign(g),n=6*Math.abs(g/e),r=(H+t)/(u/s);we((-1===b?Math.floor(r):Math.ceil(r))*(u/s)-H,n,(function(e){return 1-Math.pow(1-e,5)}))}function ye(){if(he(),0===g)return me(v,!0);var e=.04/Math.pow(Math.abs(g),-.5),t=Math.pow(g,2)/e*Math.sign(g),n=function(e){return--e*e*e+1},r=g;we(t,3*Math.abs(r/e),n,!0,(function(){we(De(Re(v)),500,n,!0)}))}function we(e,t,n,r,i){he(),L=e,C=0,N=t,z=n,I=r,B=i,A=null,de()}function xe(n){var r=l(e);r.length&&(t=r[0],Pe(n),re(),oe("mounted"))}function ke(){var e,t=_.breakpoints||[];for(var n in t)window.matchMedia(n).matches&&(e=n);if(e===Y)return!0;var r=(Y=e)?t[Y]:_;r.breakpoints&&Y&&delete r.breakpoints,j=i(i(i({},Ue),_),r),X=!0,h=null,Ee()}function Se(e){return"function"==typeof e?e():d(e,1,Math.max(ue()?r-1:r,1))}function Me(){ke(),F=!0,oe("created")}function Ee(e,t){e&&(_=e),t&&(Y=null),Ae(),xe(t)}function Pe(e){var n=window.innerWidth;if(ke()&&(n!==h||e)){h=n;var i=j.slides;"number"==typeof i?(c=null,r=i):(c=l(i,t),r=c?c.length:0);var a=j.dragSpeed;E="function"==typeof a?a:function(e){return e*a},u=le()?t.offsetHeight:t.offsetWidth,s=Se(j.slidesPerView),f=d(j.spacing,0,u/(s-1)-1),u+=f,o=ae()?(u/2-u/s/2)/u:0,Ne();var b=!F||X&&j.resetSlide?j.initial:v;Je(ue()?b:Be(b)),le()&&t.setAttribute(D,!0),X=!1}}function Te(e){Pe(),setTimeout(Pe,500),setTimeout(Pe,2e3)}function Ae(){ie(),ze(),t&&t.hasAttribute(D)&&t.removeAttribute(D),oe("destroyed")}function Le(){c&&c.forEach((function(e,t){var n=m[t].distance*u-t*(u/s-f/s-f/s*(s-1)),r=le()?0:n,i=le()?n:0,o="translate3d(".concat(r,"px, ").concat(i,"px, 0)");e.style.transform=o,e.style["-webkit-transform"]=o}))}function Ne(){c&&c.forEach((function(e){var t="calc(".concat(100/s,"% - ").concat(f/s*(s-1),"px)");le()?(e.style["min-height"]=t,e.style["max-height"]=t):(e.style["min-width"]=t,e.style["max-width"]=t)}))}function ze(){if(c){var e=["transform","-webkit-transform"];e=[].concat(a(e),le?["min-height","max-height"]:["min-width","max-width"]),c.forEach((function(t){e.forEach((function(e){t.style.removeProperty(e)}))}))}}function Ce(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Ye(e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now()),t&&(e=He(e)),H+=e,Fe()}function Ie(e){var t=u*(r-1*(ae()?1:s))/s,n=H+e;return n>t?n-t:n<0?n:0}function Be(e){return d(e,0,r-1-(ae()?0:s-1))}function _e(){var e=Math.abs(O),t=H<0?1-e:e;return{direction:b,progressTrack:t,progressSlides:t*r/(r-1),positions:m,position:H,speed:g,relativeSlide:(v%r+r)%r,absoluteSlide:v,size:r,slidesPerView:s,widthOrHeight:u}}function Re(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return ue()?t?We(e,n):e:Be(e)}function De(e){return-(-u/s*e+H)}function We(e,t){var n=(v%r+r)%r,i=n<(e=(e%r+r)%r)?-n-r+e:-(n-e),o=n>e?r-n+e:e-n,a=t?Math.abs(i)<=o?i:o:e<n?i:o;return v+a}function Ye(e,t){clearTimeout(p);var n=Math.sign(e);if(n!==b&&Xe(),b=n,V.push({distance:e,time:t}),p=setTimeout((function(){V=[],g=0}),50),(V=V.slice(-6)).length<=1||0===b)return g=0;var r=V.slice(0,-1).reduce((function(e,t){return e+t.distance}),0),i=V[V.length-1].time,o=V[0].time;g=d(r/(i-o),-10,10)}function Xe(){V=[]}function Fe(){O=ue()?H%(u*r/s)/(u*r/s):H/(u*r/s),Ve();for(var e=[],t=0;t<r;t++){var n=(1/r*t-(O<0&&ue()?O+1:O))*r/s+o;ue()&&(n+=n>(r-1)/s?-r/s:n<-r/s+1?r/s:0);var i=1/s,a=n+i,c=a<i?a/i:a>1?1-(a-1)*s/1:1;e.push({portion:c<0||c>1?0:c,distance:se()?-1*n+1-i:n})}m=e,Le(),oe("move")}function He(e){if(ue())return e;var t,n=Ie(e);return fe()?0===n?e:e*(t=n/u,(1-Math.abs(t))*(1-Math.abs(t))):e-n}function Ve(){var e=Math.round(H/(u/s));e!==v&&(!ue()&&(e<0||e>r-1)||(v=e,oe("slideChanged")))}function Je(e){oe("beforeChange"),Ce(De(e),!1),oe("afterChange")}var Ue={centered:!1,breakpoints:null,controls:!0,dragSpeed:1,friction:.0025,loop:!1,initial:0,duration:500,preventEvent:"data-keen-slider-pe",slides:".keen-slider__slide",vertical:!1,resetSlide:!1,slidesPerView:1,spacing:0,mode:"snap",rtl:!1,rubberband:!0,cancelOnLeave:!0},qe={controls:function(e){n=e},destroy:Ae,refresh:function(e){Ee(e,!0)},next:function(){me(v+1,!0)},prev:function(){me(v-1,!0)},moveToSlide:function(e,t){me(e,!0,t)},moveToSlideRelative:function(e){me(e,!0,arguments.length>2?arguments[2]:void 0,!0,arguments.length>1&&void 0!==arguments[1]&&arguments[1])},resize:function(){Pe(!0)},details:function(){return _e()},options:function(){var e=i({},j);return delete e.breakpoints,e}};return Me(),qe}function f(e){return Array.prototype.slice.call(e)}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"function"==typeof e?f(e()):"string"==typeof e?f(t.querySelectorAll(e)):e instanceof HTMLElement!=0?[e]:e instanceof NodeList!=0?e:[]}function d(e,t,n){return Math.min(Math.max(e,t),n)}Math.sign||(Math.sign=function(e){return(e>0)-(e<0)||+e});var h=function e(t,n){var r=Object.prototype.toString.call(t);if(r!==Object.prototype.toString.call(n))return!1;if(["[object Array]","[object Object]"].indexOf(r)<0)return!1;var i="[object Array]"===r?t.length:Object.keys(t).length;if(i!==("[object Array]"===r?n.length:Object.keys(n).length))return!1;var o=function(t,n){var r=Object.prototype.toString.call(t);if(["[object Array]","[object Object]"].indexOf(r)>=0){if(!e(t,n))return!1}else{if(r!==Object.prototype.toString.call(n))return!1;if("[object Function]"===r){if(t.toString()!==n.toString())return!1}else if(t!==n)return!1}};if("[object Array]"===r){for(var a=0;a<i;a++)if(!1===o(t[a],n[a]))return!1}else for(var c in t)if(t.hasOwnProperty(c)&&!1===o(t[c],n[c]))return!1;return!0};e.default=s,e.useKeenSlider=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.useRef(),r=t.useRef();function i(e){return h(r.current,e)||(r.current=e),r.current}var a=o(t.useState(null),2),c=a[0],u=a[1];return t.useEffect((function(){var e=new s(n.current,r.current);return u(e),function(){e.destroy()}}),[i(e)]),[n,c]},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(2))},647:function(e,t,n){},708:function(e,t,n){"use strict";n.r(t);var r=n(37),i=n(29),o=n(90),a=n(85),c=n.n(a),u=n(83),s=n.n(u),f=n(646),l=(n(647),n(2)),d=n.n(l),h=n(40),v=n.n(h),b=n(19),p=n.n(b);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var O=Object(l.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,a=m(e,["color","size"]);return d.a.createElement("svg",g({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),d.a.createElement("polygon",{points:"13 19 22 12 13 5 13 19"}),d.a.createElement("polygon",{points:"2 19 11 12 2 5 2 19"}))}));O.propTypes={color:p.a.string,size:p.a.oneOfType([p.a.string,p.a.number])},O.displayName="FastForward";var j=O;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var x=Object(l.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,a=w(e,["color","size"]);return d.a.createElement("svg",y({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),d.a.createElement("rect",{x:"6",y:"4",width:"4",height:"16"}),d.a.createElement("rect",{x:"14",y:"4",width:"4",height:"16"}))}));x.propTypes={color:p.a.string,size:p.a.oneOfType([p.a.string,p.a.number])},x.displayName="Pause";var k=x;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var E=Object(l.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,a=M(e,["color","size"]);return d.a.createElement("svg",S({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),d.a.createElement("polygon",{points:"5 3 19 12 5 21 5 3"}))}));E.propTypes={color:p.a.string,size:p.a.oneOfType([p.a.string,p.a.number])},E.displayName="Play";var P=E,T=n(722),A=n(91),L=n(163),N=n(88),z=N.a?window:null,C=function(e){return!!e.addEventListener},I=function(e){return!!e.on},B=function(e,t,n,r){void 0===n&&(n=z),Object(l.useEffect)((function(){if(t&&n)return C(n)?Object(N.d)(n,e,t,r):I(n)&&n.on(e,t,r),function(){C(n)?Object(N.c)(n,e,t,r):I(n)&&n.off(e,t,r)}}),[e,t,n,JSON.stringify(r)])},_=function(e,t,n,r){void 0===t&&(t=N.b),void 0===n&&(n={}),void 0===r&&(r=[e]);var i=n.event,o=void 0===i?"keydown":i,a=n.target,c=n.options,u=Object(l.useMemo)((function(){var n,r="function"===typeof(n=e)?n:"string"===typeof n?function(e){return e.key===n}:n?function(){return!0}:function(){return!1};return function(e){if(r(e))return t(e)}}),r);B(o,u,a,c)},R=function(e){var t=Object(l.useState)([!1,null]),n=t[0],r=t[1];return _(e,(function(e){return r([!0,e])}),{event:"keydown"},[n]),_(e,(function(e){return r([!1,e])}),{event:"keyup"},[n]),n},D=n(661),W=function(e,t,n,r){void 0===r&&(r=R);var i=r(e),o=i[0],a=i[1];Object(D.a)((function(){!o&&n?n(a):o&&t&&t(a)}),[o])},Y=n(18),X=Object(l.lazy)((function(){return Promise.all([n.e(19),n.e(37)]).then(n.bind(null,701))}));function F(e){var t=this,n=e.date,a=e.setDate,u=e.dates,s=(e.isTimelineMode,e.setIsTimelineMode),d=Object(T.a)().t,h=Object(l.useState)(null),b=Object(r.a)(h,2),p=b[0],g=b[1],m=Object(l.useState)(!1),O=Object(r.a)(m,2),y=O[0],w=O[1],x=Object(l.useState)(!1),S=Object(r.a)(x,2),M=S[0],E=S[1],N=Object(l.useRef)(),z=Object(l.useRef)();Object(L.a)(N,(function(){E(!1)}));var C=Object(f.useKeenSlider)({initial:""===n?Math.min(1,u.length):u.indexOf(n),dragSpeed:function(e,t){var n=t.details().widthOrHeight;return-e*(n/(n/2*Math.tan(Math.PI/180*20))/1)},move:function(e){g(e.details())},afterChange:function(e){var t=e.details().absoluteSlide;0===t?v.a.unstable_batchedUpdates((function(){s(!1),E(!1),a("")})):a(u[t])},mode:"free-snap",slides:u.length,slidesPerView:1}),I=Object(r.a)(C,2),B=I[0],_=I[1],R=Object(l.useState)(0),D=Object(r.a)(R,2),F=D[0],H=D[1];Object(l.useEffect)((function(){_&&H(_.details().widthOrHeight)}),[_]);var V=function(e){return e===Object(i.f)()?d("Today"):e===Object(i.g)()?d("Yesterday"):Object(i.c)(e,"dd MMM y")},J=Object(l.useMemo)((function(){if(!p)return[];for(var e=[],t=0;t<u.length;t++){var n=1*p.positions[t].distance,r=Math.abs(n)>9?180:20*n*-1,i={transform:"rotateY(".concat(r,"deg) translateZ(").concat(F,"px)"),WebkitTransform:"rotateY(".concat(r,"deg) translateZ(").concat(F,"px)")},o=t===p.absoluteSlide?"current":"",a=p.absoluteSlide+Math.round(n);Math.abs(n)<5&&e.push({className:o,style:i,slide:a})}return e}),[p,F,u.length]);W("ArrowLeft",(function(){_&&_.next()})),W("ArrowRight",(function(){_&&_.prev()})),W("Escape",(function(){w(!1),_&&_.moveToSlide(0)})),W("Enter",(function(){w(!y)}));var U=function(e){e===(null===p||void 0===p?void 0:p.absoluteSlide)?E(!M):_&&_.moveToSlide(e)},q={"2020-03-25":d("Beginning of Lockdown Phase 1"),"2020-04-14":d("End of Lockdown Phase 1"),"2020-04-15":d("Beginning of Lockdown Phase 2"),"2020-05-03":d("End of Lockdown Phase 2"),"2020-05-04":d("Beginning of Lockdown Phase 3"),"2020-05-17":d("End of Lockdown Phase 3"),"2020-05-18":d("Beginning of Lockdown Phase 4"),"2020-05-31":d("End of Lockdown Phase 4"),"2020-06-01":d("Beginning of Lockdown Phase 5"),"2020-11-20":Object(Y.jsx)(o.k,{size:12})};Object(l.useEffect)((function(){return z.current=setInterval((function(){y&&_&&_.prev()}),2500),function(){clearInterval(z.current)}}),[y,_]);var K=Object(A.useTransition)(M,{from:{paddingTop:0,marginBottom:0,height:0,opacity:0},enter:{paddingTop:36,marginBottom:400,opacity:1},leave:{pointerEvents:"none",paddingTop:0,marginBottom:0,height:0,opacity:0},config:{mass:1,tension:100,friction:15}});return Object(Y.jsxs)("div",{className:"Timeline",ref:N,children:[Object(Y.jsxs)("div",{className:"actions timeline fadeInUp",onWheel:function(e){_&&(e.deltaX>0?_.prev():e.deltaX<0&&_.next())},children:[Object(Y.jsxs)("div",{className:"wheel-buttons",children:[Object(Y.jsx)("div",{className:"wheel-button left",onClick:U.bind(this,u.length-1),children:Object(Y.jsx)(j,{})}),Object(Y.jsx)("div",{className:c()("wheel-button",{active:y}),onClick:w.bind(this,!y),children:y?Object(Y.jsx)(k,{}):Object(Y.jsx)(P,{})}),Object(Y.jsx)("div",{className:"wheel-button",onClick:U.bind(this,0),children:Object(Y.jsx)(j,{})})]}),Object(Y.jsxs)("div",{className:"wheel",ref:B,children:[Object(Y.jsx)("div",{className:"wheel__inner",children:Object(Y.jsx)("div",{className:"wheel__slides",children:J.map((function(e){var n=e.className,r=e.style,i=e.slide;return Object(Y.jsx)("div",{className:"wheel__slide",style:r,children:Object(Y.jsx)("h5",{className:n,onClick:U.bind(t,i),children:V(u[i])})},i)}))})}),J.map((function(e){var t=e.slide;return Object.keys(q).includes(u[t])&&Object(Y.jsx)("h5",{className:c()("highlight",{current:t===(null===p||void 0===p?void 0:p.absoluteSlide)}),children:q[u[t]]},t)}))]})]}),Object(Y.jsx)(l.Suspense,{fallback:Object(Y.jsx)("div",{}),children:K((function(e,t){return t&&Object(Y.jsx)(A.animated.div,{style:e,children:Object(Y.jsx)(X,{date:n,dates:u,slider:_})})}))})]})}var H=function(e,t){return!!s()(t.date,e.date)&&(!!s()(t.isTimelineMode,e.isTimelineMode)&&!!s()(t.dates,e.dates))};t.default=Object(l.memo)(F,H)}}]);
//# sourceMappingURL=23.63b9b2ce.chunk.js.map