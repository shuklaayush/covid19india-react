(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[23,22],{100:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var i,a,o;if(Array.isArray(t)){if((i=t.length)!=n.length)return!1;for(a=i;0!==a--;)if(!e(t[a],n[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((i=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(a=i;0!==a--;)if(!Object.prototype.hasOwnProperty.call(n,o[a]))return!1;for(a=i;0!==a--;){var c=o[a];if(!e(t[c],n[c]))return!1}return!0}return t!==t&&n!==n}},107:function(e,t,n){"use strict";var i=n(129),a=n(2),o=(n(124),n(125),n(20));t.a=function(e){var t=e.children,n=e.message,c=e.hold,r=void 0!==c&&c,l=Object(a.useCallback)((function(e){return e.stopPropagation()}),[]);return Object(o.jsx)(i.a,{className:"Tooltip",content:"string"===typeof n?Object(o.jsx)("p",{className:"message",dangerouslySetInnerHTML:{__html:n.split("\n").map((function(e){return"<div>".concat(e,"</div>")})).join("")}}):n,arrow:!1,animation:"shift-away",touch:!r||["hold",300],children:Object(o.jsx)("div",{onClick:l,children:t})})}},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return r}));var i=n(104),a=n(20),o=function(){return Object(a.jsxs)("div",{className:"Icons",children:[Object(a.jsx)(i.s,{size:16}),Object(a.jsx)("span",{children:"7D"})]})},c=function(){return Object(a.jsxs)("div",{className:"Icons",children:[Object(a.jsx)(i.q,{size:16}),Object(a.jsx)("span",{children:"1L"})]})},r=function(){return Object(a.jsx)("div",{className:"Icons",children:Object(a.jsx)(i.p,{size:16})})}},127:function(e,t,n){!function(e,t){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var i="Left",a="Right",o="Up",c="Down",r={delta:10,preventDefaultTouchmoveEvent:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0},l={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},s="mousemove",u="mouseup",d="touchend",v="touchmove",h="touchstart";function p(e,t,n,r){return e>t?n>0?a:i:r>0?c:o}function f(e,t){if(0===t)return e;var n=Math.PI/180*t;return[e[0]*Math.cos(n)+e[1]*Math.sin(n),e[1]*Math.cos(n)-e[0]*Math.sin(n)]}function j(e,t){var i=function(t){t&&"touches"in t&&t.touches.length>1||e((function(e,i){i.trackMouse&&(document.addEventListener(s,a),document.addEventListener(u,r));var o="touches"in t?t.touches[0]:t,c=f([o.clientX,o.clientY],i.rotationAngle);return n({},e,l,{initial:[].concat(c),xy:c,start:t.timeStamp||0})}))},a=function(t){e((function(e,i){if("touches"in t&&t.touches.length>1)return e;var a="touches"in t?t.touches[0]:t,o=f([a.clientX,a.clientY],i.rotationAngle),c=o[0],r=o[1],l=c-e.xy[0],s=r-e.xy[1],u=Math.abs(l),d=Math.abs(s),v=(t.timeStamp||0)-e.start,h=Math.sqrt(u*u+d*d)/(v||1),j=[l/(v||1),s/(v||1)];if(u<i.delta&&d<i.delta&&!e.swiping)return e;var b=p(u,d,l,s),O={absX:u,absY:d,deltaX:l,deltaY:s,dir:b,event:t,first:e.first,initial:e.initial,velocity:h,vxvy:j};O.first&&i.onSwipeStart&&i.onSwipeStart(O),i.onSwiping&&i.onSwiping(O);var m=!1;return(i.onSwiping||i.onSwiped||"onSwiped"+b in i)&&(m=!0),m&&i.preventDefaultTouchmoveEvent&&i.trackTouch&&t.cancelable&&t.preventDefault(),n({},e,{first:!1,eventData:O,swiping:!0})}))},o=function(t){e((function(e,i){var a;if(e.swiping&&e.eventData){a=n({},e.eventData,{event:t}),i.onSwiped&&i.onSwiped(a);var o="onSwiped"+a.dir;o in i&&i[o](a)}else i.onTap&&i.onTap({event:t});return n({},e,l,{eventData:a})}))},c=function(){document.removeEventListener(s,a),document.removeEventListener(u,r)},r=function(e){c(),o(e)},j=function(e,t){var n=function(){};if(e&&e.addEventListener){var c=[[h,i],[v,a],[d,o]];c.forEach((function(n){var i=n[0],a=n[1];return e.addEventListener(i,a,{passive:t})})),n=function(){return c.forEach((function(t){var n=t[0],i=t[1];return e.removeEventListener(n,i)}))}}return n},b={ref:function(t){null!==t&&e((function(e,i){if(e.el===t)return e;var a={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),a.cleanUpTouch=void 0),i.trackTouch&&t&&(a.cleanUpTouch=j(t,!i.preventDefaultTouchmoveEvent)),n({},e,{el:t},a)}))}};return t.trackMouse&&(b.onMouseDown=i),[b,j]}function b(e,t,i){var a={};return!t.trackTouch&&e.cleanUpTouch?(e.cleanUpTouch(),a.cleanUpTouch=void 0):t.trackTouch&&!e.cleanUpTouch&&e.el&&(a.cleanUpTouch=i(e.el,!t.preventDefaultTouchmoveEvent)),n({},e,a)}function O(e){var i=e.trackMouse,a=t.useRef(n({},l)),o=t.useRef(n({},r));o.current=n({},r,e);var c=t.useMemo((function(){return j((function(e){return a.current=e(a.current,o.current)}),{trackMouse:i})}),[i]),s=c[0],u=c[1];return a.current=b(a.current,o.current,u),s}e.DOWN=c,e.LEFT=i,e.RIGHT=a,e.UP=o,e.useSwipeable=O}(t,n(2))},183:function(e,t,n){"use strict";n.r(t);var i=n(112),a=n(54),o=n(51),c=n(10),r=n(118),l=n(20),s=function(e){var t=e.width,n=e.statistic,i=window.innerWidth;t||(t=i>=769?480:i);var a=(i>=769?.9:1)*t/.885,o=42+c.k+a;return Object(l.jsxs)(r.a,{viewBox:"0 0 ".concat(t," ").concat(o),height:o,width:t,speed:2,backgroundColor:c.w[n].color,children:[Object(l.jsx)("circle",{cx:.4*t,cy:o/2,r:"5"}),Object(l.jsx)("circle",{cx:.5*t,cy:o/2,r:"5"}),Object(l.jsx)("circle",{cx:.6*t,cy:o/2,r:"5"})]})},u=n(126),d=n(107),v=n(25),h=n(104),p=n(102),f=n.n(p),j=n(100),b=n.n(j),O=n(108),m=n(2),g=n(294),x=n(5),T=n(106),S=n(127),y=n(289),w=Object(m.lazy)((function(){return Object(v.k)((function(){return Promise.all([n.e(1),n.e(13),n.e(43)]).then(n.bind(null,298))}))}));function C(e){var t,n,r,p,j,b=this,C=e.stateCode,k=void 0===C?"TT":C,N=e.data,D=e.mapStatistic,E=e.setMapStatistic,I=e.regionHighlighted,M=e.setRegionHighlighted,U=e.anchor,L=e.setAnchor,R=e.expandTable,H=void 0!==R&&R,P=e.hideDistrictData,A=void 0!==P&&P,z=e.lastUpdatedDate,B=Object(g.a)().t,Y=Object(m.useRef)(),F=Object(y.a)().width,X=Object(m.useState)(c.o.DISTRICTS),_=Object(o.a)(X,2),V=_[0],W=_[1],q=Object(m.useState)(!1),J=Object(o.a)(q,2),G=J[0],K=J[1],Q=Object(m.useState)(!1),Z=Object(o.a)(Q,2),$=Z[0],ee=Z[1],te=c.l[k],ne=te.mapType===c.n.COUNTRY?N:Object(a.a)({},k,N[k]),ie=Object(m.useMemo)((function(){var e,t,n=(I.districtName?null===(e=N[I.stateCode])||void 0===e||null===(t=e.districts)||void 0===t?void 0:t[I.districtName]:N[I.stateCode])||{};return Object(O.a)(n,(function(e){e.name=I.districtName||c.v[I.stateCode]}))}),[N,I.stateCode,I.districtName]),ae=Object(m.useCallback)((function(){var e=c.w[D];(null===e||void 0===e?void 0:e.nonLinear)||"population"===D||K((function(e){return!e}))}),[D,K]),oe=Object(m.useCallback)((function(){var e=V===c.o.DISTRICTS?c.o.STATES:c.o.DISTRICTS;e===c.o.STATES&&M({stateCode:I.stateCode,districtName:null}),W(e)}),[V,I.stateCode,W,M]),ce=Object(x.g)(),re=Object(m.useRef)();Object(m.useEffect)((function(){"#MapExplorer"===ce.location.hash&&re.current.scrollIntoView()}),[ce]);var le=Object(m.useMemo)((function(){var e=[];return[0,0,0,0,0,0,0].map((function(t,n){return e.push({animationDelay:"".concat(250*n,"ms")}),null})),e}),[]),se=Object(m.useCallback)((function(e){var t,n=c.w[D],i=(null===n||void 0===n?void 0:n.showDelta)&&$||"delta7"===(null===n||void 0===n||null===(t=n.tableConfig)||void 0===t?void 0:t.type)?"delta7":"total";return Object(v.h)(e,i,D,{expiredDate:z,normalizedByPopulationPer:G&&"population"!=D?"lakh":null,canBeNaN:!0})}),[D,G,z,$]),ue=se(ie);isNaN(ue)&&(ue="-");var de=Object(T.useSpring)({total:ue,config:Object(i.a)({tension:250},c.s)}),ve=Object(m.useCallback)((function(e){var t=c.m.indexOf(D),n=(c.m.length+t+e)%c.m.length;E(c.m[n])}),[D,E]),he=Object(S.useSwipeable)({onSwipedLeft:ve.bind(this,1),onSwipedRight:ve.bind(this,-1)}),pe=c.w[D],fe="population"!==D&&(G||(null===pe||void 0===pe||null===(t=pe.mapConfig)||void 0===t?void 0:t.colorScale)||(null===pe||void 0===pe?void 0:pe.nonLinear))?c.p.CHOROPLETH:c.p.BUBBLES,je=Object(m.useCallback)((function(){(null===pe||void 0===pe?void 0:pe.showDelta)&&ee((function(e){return!e}))}),[pe,ee]),be=V===c.o.DISTRICTS&&!A,Oe="mapexplorer"===U||H&&F>=769,me=Object(m.useCallback)((function(e){var t;return(null===pe||void 0===pe||null===(t=pe.mapConfig)||void 0===t?void 0:t.transformFn)?pe.mapConfig.transformFn(e):e}),[pe]),ge=(null===pe||void 0===pe||null===(n=pe.mapConfig)||void 0===n?void 0:n.colorScale)?pe.mapConfig.colorScale(me(ue)):"";return Object(l.jsxs)("div",{className:f()("MapExplorer",{stickied:Oe},{hidden:U&&"mapexplorer"!==U&&(!H||F<769)}),children:[Object(l.jsx)("div",{className:f()("anchor","fadeInUp",{stickied:Oe}),style:{display:F<769||F>=769&&H?"none":""},onClick:L&&L.bind(this,"mapexplorer"===U?null:"mapexplorer"),children:Object(l.jsx)(h.r,{})}),Object(l.jsxs)("div",{className:"panel",ref:re,children:[Object(l.jsxs)("div",{className:"panel-left fadeInUp",style:le[0],children:[Object(l.jsxs)("h2",{className:f()(D),style:{color:ge||(null===pe||void 0===pe?void 0:pe.color)},children:[B(ie.name),ie.name===c.E&&" [".concat(B(c.v[I.stateCode]),"]")]}),I.stateCode&&Object(l.jsxs)("h1",{className:f()("district",D),style:{color:ge||(null===pe||void 0===pe?void 0:pe.color)},children:[Object(l.jsx)(T.animated.div,{children:de.total.to((function(e){return Object(v.e)(e,pe.format,D)}))}),Object(l.jsx)("span",{children:"".concat(B(Object(v.a)(pe.displayName))).concat(G&&!(null===pe||void 0===pe?void 0:pe.nonLinear)&&"population"!==D?" ".concat(B("per lakh")):"").concat($&&(null===pe||void 0===pe?void 0:pe.showDelta)||"delta7"===(null===pe||void 0===pe||null===(r=pe.tableConfig)||void 0===r?void 0:r.type)?" ".concat(B("in last 7 days")):"")})]})]}),Object(l.jsxs)("div",{className:f()("panel-right","is-".concat(D)),children:[Object(l.jsxs)("div",{className:"switch-type",children:[Object(l.jsx)(d.a,{message:"Last 7 day values",hold:!0,children:Object(l.jsx)("div",{className:f()("toggle","fadeInUp",{"is-highlighted":$&&(null===pe||void 0===pe?void 0:pe.showDelta)||"delta7"===(null===pe||void 0===pe||null===(p=pe.tableConfig)||void 0===p?void 0:p.type),disabled:!(null===pe||void 0===pe?void 0:pe.showDelta)}),onClick:je,style:le[1],children:Object(l.jsx)(u.a,{})})}),Object(l.jsx)(d.a,{message:"Per lakh people",hold:!0,children:Object(l.jsx)("div",{className:f()("toggle","fadeInUp",{"is-highlighted":!(null===pe||void 0===pe?void 0:pe.nonLinear)&&fe===c.p.CHOROPLETH,disabled:(null===pe||void 0===pe?void 0:pe.nonLinear)||"population"===D}),onClick:ae,style:le[2],children:Object(l.jsx)(u.c,{})})}),te.mapType===c.n.COUNTRY&&Object(l.jsx)(d.a,{message:"Toggle between states/districts",hold:!0,children:Object(l.jsx)("div",{className:f()("toggle","boundary fadeInUp",{"is-highlighted":be}),onClick:oe,style:le[3],children:Object(l.jsx)(h.p,{})})}),te.mapType===c.n.STATE&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"divider"}),Object(l.jsx)("div",{className:"toggle back fadeInUp",onClick:function(){ce.push("/#MapExplorer")},style:le[4],children:Object(l.jsx)(h.b,{})})]})]}),Object(l.jsx)("div",{className:"switch-statistic fadeInUp",style:le[5],children:c.m.map((function(e){return Object(l.jsx)("div",{className:f()("toggle","statistic-option","is-".concat(e),{"is-highlighted":D===e}),onClick:E.bind(b,e),children:Object(l.jsx)(h.i,{})},e)}))})]})]}),Object(l.jsx)("div",Object(i.a)(Object(i.a)({ref:Y,className:"fadeInUp",style:le[3]},he),{},{children:D&&Object(l.jsx)(m.Suspense,{fallback:Object(l.jsx)(s,{className:"map-loader",width:null===(j=Y.current)||void 0===j?void 0:j.clientWidth,statistic:D}),children:Object(l.jsx)(w,{data:ne,statistic:D,mapCode:k,isDistrictView:be,mapViz:fe,regionHighlighted:I,setRegionHighlighted:M,getMapStatistic:se,transformStatistic:me})})}))]})}var k=function(e,t){var n,i,a,o,c,r,l,s,u,d;return!!b()(e.stateCode,t.stateCode)&&(!!b()(e.regionHighlighted,t.regionHighlighted)&&(!!b()(e.mapStatistic,t.mapStatistic)&&(!!b()(e.anchor,t.anchor)&&(!!b()(e.hideDistrictData,t.hideDistrictData)&&(!!b()(e.expandTable,t.expandTable)&&(!!b()(null===(n=e.data)||void 0===n||null===(i=n.TT)||void 0===i||null===(a=i.meta)||void 0===a?void 0:a.last_updated,null===(o=t.data)||void 0===o||null===(c=o.TT)||void 0===c||null===(r=c.meta)||void 0===r?void 0:r.last_updated)&&!!b()(null===(l=e.data)||void 0===l||null===(s=l.TT)||void 0===s?void 0:s.total,null===(u=t.data)||void 0===u||null===(d=u.TT)||void 0===d?void 0:d.total)))))))};t.default=Object(m.memo)(C,k)}}]);
//# sourceMappingURL=23.ac21be2a.chunk.js.map