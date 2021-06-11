/*! For license information please see 23.03e80ae6.chunk.js.LICENSE.txt */
(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[23],{102:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)){if(i.length){var s=c.apply(null,i);s&&e.push(s)}}else if("object"===r)if(i.toString===Object.prototype.toString)for(var a in i)n.call(i,a)&&i[a]&&e.push(a);else e.push(i.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(i=function(){return c}.apply(t,[]))||(e.exports=i)}()},122:function(e,t,n){"use strict";var i=n(51),c=n(2),r={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};t.a=function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),s=n[0],a=n[1];return Object(c.useEffect)((function(){e.current&&new IntersectionObserver((function(t,n){t.forEach((function(t){t.isIntersecting&&(a(!0),n.unobserve(e.current))}))}),r).observe(e.current)}),[e]),s}},204:function(e,t,n){"use strict";var i=n(2),c=n(101);t.a=function(e,t,n){if(!c.a)return[t,function(){}];var r=Object(i.useState)((function(){try{var i=sessionStorage.getItem(e);return"string"!==typeof i?(sessionStorage.setItem(e,n?String(t):JSON.stringify(t)),t):n?i:JSON.parse(i||"null")}catch(r){return t}})),s=r[0],a=r[1];return Object(i.useEffect)((function(){try{var t=n?String(s):JSON.stringify(s);sessionStorage.setItem(e,t)}catch(r){}})),[s,a]}},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(1),c=n(0);function r(e){var t,n;if(Object(c.a)(1,arguments),e&&"function"===typeof e.forEach)t=e;else{if("object"!==typeof e||null===e)return new Date(NaN);t=Array.prototype.slice.call(e)}return t.forEach((function(e){var t=Object(i.a)(e);(void 0===n||n<t||isNaN(Number(t)))&&(n=t)})),n||new Date(NaN)}},255:function(e,t,n){"use strict";n.r(t);var i=n(107),c=n(51),r=n(10),s=n(122),a=n(25),l=n(104),o=n(102),d=n.n(o),u=n(77),j=n(205),b=n(2),O=n(141),v=n(294),f=n(5),h=n(204),m=n(118),p=n(20),x=Object(b.lazy)((function(){return Object(a.k)((function(){return Promise.all([n.e(1),n.e(20)]).then(n.bind(null,217))}))})),g=Object(b.lazy)((function(){return Object(a.k)((function(){return n.e(9).then(n.bind(null,150))}))})),y=Object(b.lazy)((function(){return Object(a.k)((function(){return n.e(33).then(n.bind(null,165))}))})),N=Object(b.lazy)((function(){return Object(a.k)((function(){return n.e(38).then(n.bind(null,166))}))})),k=Object(b.lazy)((function(){return Object(a.k)((function(){return Promise.all([n.e(2),n.e(7),n.e(6)]).then(n.bind(null,234))}))})),S=Object(b.lazy)((function(){return Object(a.k)((function(){return n.e(34).then(n.bind(null,167))}))})),w=Object(b.lazy)((function(){return Object(a.k)((function(){return Promise.all([n.e(1),n.e(3),n.e(26)]).then(n.bind(null,168))}))})),C=Object(b.lazy)((function(){return Object(a.k)((function(){return n.e(8).then(n.bind(null,236))}))})),M=Object(b.lazy)((function(){return Object(a.k)((function(){return Promise.all([n.e(2),n.e(36)]).then(n.bind(null,235))}))})),I=Object(b.lazy)((function(){return Object(a.k)((function(){return n.e(24).then(n.bind(null,183))}))}));function z(){var e,t,n,o,z,R,U,D,E=Object(v.a)().t,H=Object(f.i)().stateCode.toUpperCase(),J=Object(h.a)("mapStatistic","active"),P=Object(c.a)(J,2),A=P[0],F=P[1],T=Object(b.useState)(!1),V=Object(c.a)(T,2),W=V[0],B=V[1],L=Object(b.useState)({stateCode:H,districtName:null}),q=Object(c.a)(L,2),G=q[0],K=q[1],Q=Object(b.useState)(!1),X=Object(c.a)(Q,2),Y=X[0],Z=X[1];Object(b.useEffect)((function(){G.stateCode!==H&&(K({stateCode:H,districtName:null}),B(!1))}),[G.stateCode,H]);var $=Object(m.a)("".concat(r.d,"/timeseries-").concat(H,".min.json"),a.b,{revalidateOnMount:!0,refreshInterval:1e5}),_=$.data,ee=$.error,te=Object(m.a)("".concat(r.d,"/data.min.json"),a.b,{revalidateOnMount:!0,refreshInterval:1e5}).data,ne=Object(b.useMemo)((function(){var e;if(te){var t=window.innerWidth>=540?3:2,n=(null===(e=te[H])||void 0===e?void 0:e.districts)?Object.keys(te[H].districts).filter((function(e){return"Unknown"!==e})).length:0;return Math.ceil(n/t)}}),[te,H]),ie=Object(b.useRef)(),ce=Object(s.a)(ie),re=Object(b.useMemo)((function(){var e=[];return[0,0,0,0].map((function(t,n){return e.push({animationDelay:"".concat(250*n,"ms")}),null})),e}),[]),se=W?window.innerWidth>=540?10:8:6,ae=Object(b.useMemo)((function(){var e,t,n,i,c,r,s,l,o=[null===te||void 0===te||null===(e=te[H])||void 0===e||null===(t=e.meta)||void 0===t?void 0:t.date,null===te||void 0===te||null===(n=te[H])||void 0===n||null===(i=n.meta)||void 0===i||null===(c=i.tested)||void 0===c?void 0:c.date,null===te||void 0===te||null===(r=te[H])||void 0===r||null===(s=r.meta)||void 0===s||null===(l=s.vaccinated)||void 0===l?void 0:l.date].filter((function(e){return e}));return o.length>0?Object(u.a)(Object(j.a)(o.map((function(e){return Object(a.j)(e)}))),{representation:"date"}):null}),[H,te]),le=r.n.includes(A)?A:"confirmed";return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(O.a,{children:[Object(p.jsxs)("title",{children:["Coronavirus Outbreak in ",r.w[H]," - covid19india.org"]}),Object(p.jsx)("meta",{name:"title",content:"Coronavirus Outbreak in ".concat(r.w[H],": Latest Map and Case Count")})]}),Object(p.jsxs)("div",{className:"State",children:[Object(p.jsxs)("div",{className:"state-left",children:[Object(p.jsx)(C,{data:null===te||void 0===te?void 0:te[H],stateCode:H}),Object(p.jsxs)("div",{style:{position:"relative"},children:[Object(p.jsx)(S,{mapStatistic:A,setMapStatistic:F}),Object(p.jsx)(y,{data:null===te||void 0===te?void 0:te[H]}),Object(p.jsx)(w,{timeseries:null===_||void 0===_||null===(e=_[H])||void 0===e?void 0:e.dates,stateCode:H,forceRender:!!ee})]}),(null===te||void 0===te||null===(t=te[H])||void 0===t||null===(n=t.total)||void 0===n?void 0:n.vaccinated1)&&Object(p.jsx)(N,{data:null===te||void 0===te?void 0:te[H]}),te&&Object(p.jsx)(b.Suspense,{fallback:Object(p.jsx)("div",{style:{minHeight:"50rem"}}),children:Object(p.jsx)(k,{stateCode:H,data:te,regionHighlighted:G,setRegionHighlighted:K,mapStatistic:A,setMapStatistic:F,lastDataDate:ae,delta7Mode:Y,setDelta7Mode:Z})}),Object(p.jsx)("span",{ref:ie}),ce&&te&&Object(p.jsx)(b.Suspense,{fallback:Object(p.jsx)("div",{}),children:Object(p.jsx)(M,{stateCode:H,data:te,timeseries:null===_||void 0===_||null===(o=_[H])||void 0===o?void 0:o.dates})})]}),Object(p.jsx)("div",{className:"state-right",children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"district-bar",children:[Object(p.jsxs)("div",{className:d()("district-bar-top",{expanded:W}),children:[Object(p.jsxs)("div",{className:"district-bar-left",children:[Object(p.jsx)("h2",{className:d()(le,"fadeInUp"),style:re[0],children:E("Top districts")}),Object(p.jsx)("div",{className:"districts fadeInUp ".concat(W?"is-grid":""),style:W?Object(i.a)({gridTemplateRows:"repeat(".concat(ne,", 2rem)")},re[1]):re[1],children:Object.keys((null===te||void 0===te||null===(z=te[H])||void 0===z?void 0:z.districts)||{}).filter((function(e){return"Unknown"!==e})).sort((function(e,t){return function(e,t){var n=te[H].districts[e],i=te[H].districts[t];return Object(a.h)(i,"total",A)-Object(a.h)(n,"total",A)}(e,t)})).slice(0,W?void 0:5).map((function(e){var t=Object(a.h)(te[H].districts[e],"total",le),n=Object(a.h)(te[H].districts[e],"delta",le);return Object(p.jsxs)("div",{className:"district",children:[Object(p.jsx)("h2",{children:Object(a.e)(t)}),Object(p.jsx)("h5",{children:E(e)}),"active"!==le&&Object(p.jsx)("div",{className:"delta",children:Object(p.jsx)("h6",{className:le,children:n>0?"\u2191"+Object(a.e)(n):""})})]},e)}))})]}),Object(p.jsxs)("div",{className:"district-bar-right fadeInUp",style:re[2],children:[_&&("confirmed"===le||"deceased"===le)&&Object(p.jsx)("div",{className:"happy-sign",children:Object.keys((null===(R=_[H])||void 0===R?void 0:R.dates)||{}).slice(-se).every((function(e){return 0===Object(a.h)(_[H].dates[e],"delta",le)}))&&Object(p.jsxs)("div",{className:"alert ".concat("confirmed"===le?"is-green":""),children:[Object(p.jsx)(l.w,{}),Object(p.jsxs)("div",{className:"alert-right",children:["No new ",le," cases in the past five days"]})]})}),Object(p.jsx)(x,{timeseries:null===_||void 0===_||null===(U=_[H])||void 0===U?void 0:U.dates,statistic:le,stateCode:H,lookback:se,forceRender:!!ee})]})]}),Object(p.jsx)("div",{className:"district-bar-bottom",children:Object.keys((null===te||void 0===te||null===(D=te[H])||void 0===D?void 0:D.districts)||{}).length>5?Object(p.jsx)("button",{className:"button fadeInUp",onClick:function(){B(!W)},style:re[3],children:Object(p.jsx)("span",{children:E(W?"View less":"View all")})}):Object(p.jsx)("div",{style:{height:"3.75rem",flexBasis:"15%"}})})]}),Object(p.jsx)(b.Suspense,{fallback:Object(p.jsx)("div",{}),children:Object(p.jsx)(I,{stateCode:H,timeseries:_,regionHighlighted:G,setRegionHighlighted:K,forceRender:!!ee})})]})})]}),Object(p.jsx)(g,{})]})}t.default=Object(b.memo)(z)}}]);
//# sourceMappingURL=23.03e80ae6.chunk.js.map