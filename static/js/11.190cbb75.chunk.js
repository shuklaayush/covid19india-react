(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[11,37],{110:function(t,r,e){"use strict";e.d(r,"b",(function(){return f})),e.d(r,"a",(function(){return p}));var n=Array.prototype.slice,o=function(t){return t};function i(t){return"translate("+(t+.5)+",0)"}function a(t){return"translate(0,"+(t+.5)+")"}function c(t){return function(r){return+t(r)}}function u(t){var r=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(r=Math.round(r)),function(e){return+t(e)+r}}function l(){return!this.__axis}function s(t,r){var e=[],s=null,f=null,p=6,v=6,h=3,d=1===t||4===t?-1:1,g=4===t||2===t?"x":"y",y=1===t||3===t?i:a;function O(n){var i=null==s?r.ticks?r.ticks.apply(r,e):r.domain():s,a=null==f?r.tickFormat?r.tickFormat.apply(r,e):o:f,O=Math.max(p,0)+h,b=r.range(),m=+b[0]+.5,w=+b[b.length-1]+.5,j=(r.bandwidth?u:c)(r.copy()),k=n.selection?n.selection():n,x=k.selectAll(".domain").data([null]),E=k.selectAll(".tick").data(i,r).order(),z=E.exit(),M=E.enter().append("g").attr("class","tick"),S=E.select("line"),P=E.select("text");x=x.merge(x.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),E=E.merge(M),S=S.merge(M.append("line").attr("stroke","currentColor").attr(g+"2",d*p)),P=P.merge(M.append("text").attr("fill","currentColor").attr(g,d*O).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),n!==k&&(x=x.transition(n),E=E.transition(n),S=S.transition(n),P=P.transition(n),z=z.transition(n).attr("opacity",1e-6).attr("transform",(function(t){return isFinite(t=j(t))?y(t):this.getAttribute("transform")})),M.attr("opacity",1e-6).attr("transform",(function(t){var r=this.parentNode.__axis;return y(r&&isFinite(r=r(t))?r:j(t))}))),z.remove(),x.attr("d",4===t||2==t?v?"M"+d*v+","+m+"H0.5V"+w+"H"+d*v:"M0.5,"+m+"V"+w:v?"M"+m+","+d*v+"V0.5H"+w+"V"+d*v:"M"+m+",0.5H"+w),E.attr("opacity",1).attr("transform",(function(t){return y(j(t))})),S.attr(g+"2",d*p),P.attr(g,d*O).text(a),k.filter(l).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),k.each((function(){this.__axis=j}))}return O.scale=function(t){return arguments.length?(r=t,O):r},O.ticks=function(){return e=n.call(arguments),O},O.tickArguments=function(t){return arguments.length?(e=null==t?[]:n.call(t),O):e.slice()},O.tickValues=function(t){return arguments.length?(s=null==t?null:n.call(t),O):s&&s.slice()},O.tickFormat=function(t){return arguments.length?(f=t,O):f},O.tickSize=function(t){return arguments.length?(p=v=+t,O):p},O.tickSizeInner=function(t){return arguments.length?(p=+t,O):p},O.tickSizeOuter=function(t){return arguments.length?(v=+t,O):v},O.tickPadding=function(t){return arguments.length?(h=+t,O):h},O}function f(t){return s(2,t)}function p(t){return s(3,t)}},113:function(t,r,e){"use strict";var n=e(0),o=e.n(n),i=e(20),a=e.n(i);function c(){return(c=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}function u(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var l=Object(n.forwardRef)((function(t,r){var e=t.color,n=void 0===e?"currentColor":e,i=t.size,a=void 0===i?24:i,l=u(t,["color","size"]);return o.a.createElement("svg",c({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),o.a.createElement("polygon",{points:"22 2 15 22 11 13 2 9 22 2"}))}));l.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},l.displayName="Send",r.a=l},115:function(t,r,e){"use strict";e.d(r,"a",(function(){return a}));var n=e(94),o=e(90),i=Symbol("implicit");function a(){var t=new Map,r=[],e=[],c=i;function u(n){var o=n+"",a=t.get(o);if(!a){if(c!==i)return c;t.set(o,a=r.push(n))}return e[(a-1)%e.length]}return u.domain=function(e){if(!arguments.length)return r.slice();r=[],t=new Map;var o,i=Object(n.a)(e);try{for(i.s();!(o=i.n()).done;){var a=o.value,c=a+"";t.has(c)||t.set(c,r.push(a))}}catch(l){i.e(l)}finally{i.f()}return u},u.range=function(t){return arguments.length?(e=Array.from(t),u):e.slice()},u.unknown=function(t){return arguments.length?(c=t,u):c},u.copy=function(){return a(r,e).unknown(c)},o.b.apply(u,arguments),u}},128:function(t,r,e){"use strict";var n=e(0),o=e.n(n),i=e(20),a=e.n(i);function c(){return(c=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}function u(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var l=Object(n.forwardRef)((function(t,r){var e=t.color,n=void 0===e?"currentColor":e,i=t.size,a=void 0===i?24:i,l=u(t,["color","size"]);return o.a.createElement("svg",c({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))}));l.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},l.displayName="GitHub",r.a=l},129:function(t,r,e){"use strict";var n=e(0),o=e.n(n),i=e(20),a=e.n(i);function c(){return(c=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}function u(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var l=Object(n.forwardRef)((function(t,r){var e=t.color,n=void 0===e?"currentColor":e,i=t.size,a=void 0===i?24:i,l=u(t,["color","size"]);return o.a.createElement("svg",c({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),o.a.createElement("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),o.a.createElement("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"}))}));l.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},l.displayName="Database",r.a=l},130:function(t,r,e){"use strict";var n=e(0),o=e.n(n),i=e(20),a=e.n(i);function c(){return(c=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}function u(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var l=Object(n.forwardRef)((function(t,r){var e=t.color,n=void 0===e?"currentColor":e,i=t.size,a=void 0===i?24:i,l=u(t,["color","size"]);return o.a.createElement("svg",c({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))}));l.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},l.displayName="Twitter",r.a=l},131:function(t,r,e){"use strict";var n=e(0),o=e.n(n),i=e(20),a=e.n(i);function c(){return(c=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}function u(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var l=Object(n.forwardRef)((function(t,r){var e=t.color,n=void 0===e?"currentColor":e,i=t.size,a=void 0===i?24:i,l=u(t,["color","size"]);return o.a.createElement("svg",c({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),o.a.createElement("polyline",{points:"22,6 12,13 2,6"}))}));l.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},l.displayName="Mail",r.a=l},138:function(t,r,e){"use strict";e.d(r,"a",(function(){return o}));var n=e(94);function o(t,r){var e;if(void 0===r){var o,i=Object(n.a)(t);try{for(i.s();!(o=i.n()).done;){var a=o.value;null!=a&&(e>a||void 0===e&&a>=a)&&(e=a)}}catch(f){i.e(f)}finally{i.f()}}else{var c,u=-1,l=Object(n.a)(t);try{for(l.s();!(c=l.n()).done;){var s=c.value;null!=(s=r(s,++u,t))&&(e>s||void 0===e&&s>=s)&&(e=s)}}catch(f){l.e(f)}finally{l.f()}}return e}},141:function(t,r,e){"use strict";var n=e(0),o=e(89),i=["mousedown","touchstart"];r.a=function(t,r,e){void 0===e&&(e=i);var a=Object(n.useRef)(r);Object(n.useEffect)((function(){a.current=r}),[r]),Object(n.useEffect)((function(){for(var r=function(r){var e=t.current;e&&!e.contains(r.target)&&a.current(r)},n=0,i=e;n<i.length;n++){var c=i[n];Object(o.c)(document,c,r)}return function(){for(var t=0,n=e;t<n.length;t++){var i=n[t];Object(o.b)(document,i,r)}}}),[e,t])}},150:function(t,r,e){"use strict";var n=e(0),o="undefined"!==typeof window?n.useLayoutEffect:n.useEffect,i=e(89),a={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};r.a=i.a&&window.ResizeObserver?function(){var t=Object(n.useState)(null),r=t[0],e=t[1],i=Object(n.useState)(a),c=i[0],u=i[1],l=Object(n.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var r=t[0].contentRect,e=r.x,n=r.y,o=r.width,i=r.height,a=r.top,c=r.left,l=r.bottom,s=r.right;u({x:e,y:n,width:o,height:i,top:a,left:c,bottom:l,right:s})}}))}),[]);return o((function(){if(r)return l.observe(r),function(){l.disconnect()}}),[r]),[e,c]}:function(){return[function(){},a]}},172:function(t,r,e){"use strict";e.d(r,"a",(function(){return c}));var n=e(81),o=e(173),i=e(90),a=e(115);function c(){var t,r,e=Object(a.a)().unknown(void 0),u=e.domain,l=e.range,s=0,f=1,p=!1,v=0,h=0,d=.5;function g(){var e=u().length,n=f<s,i=n?f:s,a=n?s:f;t=(a-i)/Math.max(1,e-v+2*h),p&&(t=Math.floor(t)),i+=(a-i-t*(e-v))*d,r=t*(1-v),p&&(i=Math.round(i),r=Math.round(r));var c=Object(o.a)(e).map((function(r){return i+t*r}));return l(n?c.reverse():c)}return delete e.unknown,e.domain=function(t){return arguments.length?(u(t),g()):u()},e.range=function(t){var r,e;return arguments.length?(r=t,e=Object(n.a)(r,2),s=e[0],f=e[1],s=+s,f=+f,g()):[s,f]},e.rangeRound=function(t){var r,e;return r=t,e=Object(n.a)(r,2),s=e[0],f=e[1],s=+s,f=+f,p=!0,g()},e.bandwidth=function(){return r},e.step=function(){return t},e.round=function(t){return arguments.length?(p=!!t,g()):p},e.padding=function(t){return arguments.length?(v=Math.min(1,h=+t),g()):v},e.paddingInner=function(t){return arguments.length?(v=Math.min(1,t),g()):v},e.paddingOuter=function(t){return arguments.length?(h=+t,g()):h},e.align=function(t){return arguments.length?(d=Math.max(0,Math.min(1,t)),g()):d},e.copy=function(){return c(u(),[s,f]).round(p).paddingInner(v).paddingOuter(h).align(d)},i.b.apply(g(),arguments)}},173:function(t,r,e){"use strict";r.a=function(t,r,e){t=+t,r=+r,e=(o=arguments.length)<2?(r=t,t=0,1):o<3?1:+e;for(var n=-1,o=0|Math.max(0,Math.ceil((r-t)/e)),i=new Array(o);++n<o;)i[n]=t+n*e;return i}},222:function(t,r,e){"use strict";var n=e(0),o=e.n(n),i=e(20),a=e.n(i);function c(){return(c=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}function u(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var l=Object(n.forwardRef)((function(t,r){var e=t.color,n=void 0===e?"currentColor":e,i=t.size,a=void 0===i?24:i,l=u(t,["color","size"]);return o.a.createElement("svg",c({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),o.a.createElement("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}))}));l.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},l.displayName="Compass",r.a=l},223:function(t,r,e){"use strict";var n=e(0),o=e.n(n),i=e(20),a=e.n(i);function c(){return(c=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}function u(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var l=Object(n.forwardRef)((function(t,r){var e=t.color,n=void 0===e?"currentColor":e,i=t.size,a=void 0===i?24:i,l=u(t,["color","size"]);return o.a.createElement("svg",c({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),o.a.createElement("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),o.a.createElement("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),o.a.createElement("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"}))}));l.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},l.displayName="Smile",r.a=l},83:function(t,r,e){"use strict";t.exports=function t(r,e){if(r===e)return!0;if(r&&e&&"object"==typeof r&&"object"==typeof e){if(r.constructor!==e.constructor)return!1;var n,o,i;if(Array.isArray(r)){if((n=r.length)!=e.length)return!1;for(o=n;0!==o--;)if(!t(r[o],e[o]))return!1;return!0}if(r.constructor===RegExp)return r.source===e.source&&r.flags===e.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===e.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===e.toString();if((n=(i=Object.keys(r)).length)!==Object.keys(e).length)return!1;for(o=n;0!==o--;)if(!Object.prototype.hasOwnProperty.call(e,i[o]))return!1;for(o=n;0!==o--;){var a=i[o];if(!t(r[a],e[a]))return!1}return!0}return r!==r&&e!==e}}}]);
//# sourceMappingURL=11.190cbb75.chunk.js.map