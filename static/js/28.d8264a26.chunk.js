(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[28],{197:function(e,t,a){"use strict";a.r(t);var r=a(109),i=a(81),n=a(0),c=a.n(n),s=a(95),o=function(){var e=window.innerWidth,t=e>769?480:e;return c.a.createElement(s.a,{viewBox:"0 0 ".concat(t," ").concat(800),height:800,width:t,speed:2},c.a.createElement("circle",{cx:.4*t,cy:400,r:"5"}),c.a.createElement("circle",{cx:.5*t,cy:400,r:"5"}),c.a.createElement("circle",{cx:.6*t,cy:400,r:"5"}))},l=a(7),d=a(102),m=a(31),u=a(88),b=a(82),f=a.n(b),O=a(61),h=a(62),j=a(4),p=a(2),g=a(1);function v(e,t){Object(g.a)(2,arguments);var a=Object(p.a)(e),r=Object(j.a)(t);if(isNaN(r))return new Date(NaN);if(!r)return a;var i=a.getDate(),n=new Date(a.getTime());n.setMonth(a.getMonth()+r+1,0);var c=n.getDate();return i>=c?n:(a.setFullYear(n.getFullYear(),n.getMonth(),i),a)}function y(e,t){Object(g.a)(2,arguments);var a=Object(j.a)(t);return v(e,-a)}function E(e,t){if(Object(g.a)(2,arguments),!t||"object"!==typeof t)return new Date(NaN);var a="years"in t?Object(j.a)(t.years):0,r="months"in t?Object(j.a)(t.months):0,i="weeks"in t?Object(j.a)(t.weeks):0,n="days"in t?Object(j.a)(t.days):0,c="hours"in t?Object(j.a)(t.hours):0,s="minutes"in t?Object(j.a)(t.minutes):0,o="seconds"in t?Object(j.a)(t.seconds):0,l=y(Object(p.a)(e),r+12*a),d=Object(h.a)(l,n+7*i),m=s+60*c,u=o+60*m,b=1e3*u,f=new Date(d.getTime()-b);return f}var N=a(85),C=a.n(N),k=a(251),x=a(163),w=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(4),a.e(27)]).then(a.bind(null,243))}));t.default=c.a.memo((function(e){var t=this,a=e.stateCode,s=e.timeseries,b=e.date,h=e.regionHighlighted,j=e.setRegionHighlighted,p=e.anchor,g=e.setAnchor,v=e.expandTable,y=Object(k.a)().t,N=Object(x.a)("timeseriesLookback",l.z.MONTH),C=Object(i.a)(N,2),T=C[0],M=C[1],H=Object(x.a)("chartType","total"),S=Object(i.a)(H,2),P=S[0],z=S[1],R=Object(x.a)("isUniform",!0),U=Object(i.a)(R,2),D=U[0],J=U[1],L=Object(x.a)("isLog",!1),F=Object(i.a)(L,2),I=F[0],B=F[1],G=Object(n.useRef)(),q=Object(d.a)(G,{once:!0}),K=Object(n.useMemo)((function(){var e;return(null===s||void 0===s||null===(e=s[h.stateCode])||void 0===e?void 0:e.districts)?{stateCode:h.stateCode,districtName:h.districtName}:{stateCode:h.stateCode,districtName:null}}),[s,h.stateCode,h.districtName]),Y=Object(n.useMemo)((function(){var e,t,a,r;return K.districtName?null===s||void 0===s||null===(e=s[K.stateCode])||void 0===e||null===(t=e.districts)||void 0===t||null===(a=t[K.districtName])||void 0===a?void 0:a.dates:null===s||void 0===s||null===(r=s[K.stateCode])||void 0===r?void 0:r.dates}),[s,K.stateCode,K.districtName]),A=Object(n.useMemo)((function(){var e=Object.keys(s||{}).filter((function(e){return e!==a})).sort((function(e,t){return l.s[e].localeCompare(l.s[t])})).map((function(e){return{stateCode:e,districtName:null}})),t=Object.keys(s||{}).reduce((function(e,t){var a;return[].concat(Object(r.a)(e),Object(r.a)(Object.keys((null===s||void 0===s||null===(a=s[t])||void 0===a?void 0:a.districts)||{}).reduce((function(e,a){return[].concat(Object(r.a)(e),[{stateCode:t,districtName:a}])}),[])))}),[]);return[{stateCode:a,districtName:null}].concat(Object(r.a)(e),Object(r.a)(t))}),[s,a]),W=Object(n.useMemo)((function(){return A.find((function(e){return e.stateCode===h.stateCode&&e.districtName===h.districtName}))?A:[].concat(Object(r.a)(A),[{stateCode:h.stateCode,districtName:h.districtName}])}),[h.stateCode,h.districtName,A]),X=Object(n.useMemo)((function(){var e,t=b||Object(m.g)(),a=Object.keys(Y||{}).filter((function(e){return e<=t})),r=a[a.length-1];return T===l.z.BEGINNING?a:(T===l.z.MONTH?e=Object(O.a)(E(Object(m.k)(r),{months:1}),{representation:"date"}):T===l.z.THREE_MONTHS&&(e=Object(O.a)(E(Object(m.k)(r),{months:3}),{representation:"date"})),a.filter((function(t){return t>=e})))}),[Y,b,T]),_=Object(n.useCallback)((function(e){var t=e.target;j(JSON.parse(t.value))}),[j]),Q=Object(n.useCallback)((function(){j({stateCode:a,districtName:null})}),[a,j]);return c.a.createElement("div",{className:f()("TimeseriesExplorer fadeInUp",{stickied:"timeseries"===p},{expanded:v}),style:{display:"mapexplorer"===p?"none":""},ref:G},c.a.createElement("div",{className:"timeseries-header"},c.a.createElement("div",{className:f()("anchor",{stickied:"timeseries"===p}),onClick:g&&g.bind(this,"timeseries"===p?null:"timeseries")},c.a.createElement(u.m,null)),c.a.createElement("h1",null,y("Spread Trends")),c.a.createElement("div",{className:"tabs"},Object.entries(l.y).map((function(e,a){var r=Object(i.a)(e,2),n=r[0],s=r[1];return c.a.createElement("div",{className:"tab ".concat(P===n?"focused":""),key:n,onClick:z.bind(t,n)},c.a.createElement("h4",null,y(s)))}))),c.a.createElement("div",{className:"scale-modes"},c.a.createElement("label",{className:"main"},y("Scale Modes")),c.a.createElement("div",{className:"timeseries-mode"},c.a.createElement("label",{htmlFor:"timeseries-mode"},y("Uniform")),c.a.createElement("input",{id:"timeseries-mode",type:"checkbox",className:"switch",checked:D,"aria-label":y("Checked by default to scale uniformly."),onChange:J.bind(this,!D)})),c.a.createElement("div",{className:"timeseries-logmode ".concat("total"!==P?"disabled":"")},c.a.createElement("label",{htmlFor:"timeseries-logmode"},y("Logarithmic")),c.a.createElement("input",{id:"timeseries-logmode",type:"checkbox",checked:"total"===P&&I,className:"switch",disabled:"total"!==P,onChange:B.bind(this,!I)})))),W&&c.a.createElement("div",{className:"state-selection"},c.a.createElement("div",{className:"dropdown"},c.a.createElement("select",{value:JSON.stringify(K),onChange:_},W.filter((function(e){return l.s[e.stateCode]!==e.districtName})).map((function(e){return c.a.createElement("option",{value:JSON.stringify(e),key:"".concat(e.stateCode,"-").concat(e.districtName)},e.districtName?y(e.districtName):y(l.s[e.stateCode]))})))),c.a.createElement("div",{className:"reset-icon",onClick:Q},c.a.createElement(u.o,null))),q&&c.a.createElement(n.Suspense,{fallback:c.a.createElement(o,null)},c.a.createElement(w,Object.assign({timeseries:Y,regionHighlighted:K},{dates:X,chartType:P,isUniform:D,isLog:I}))),!q&&c.a.createElement("div",{style:{height:"50rem"}}),c.a.createElement("div",{className:"pills"},Object.values(l.z).map((function(e){return c.a.createElement("button",{key:e,type:"button",className:f()({selected:T===e}),onClick:function(){return M(e)}},y(e))}))),c.a.createElement("div",{className:"alert"},c.a.createElement(u.k,{size:24}),c.a.createElement("div",{className:"alert-right"},y("Tested chart is independent of uniform scaling"))))}),(function(e,t){return!t.forceRender&&(!(t.timeseries||!e.timeseries)||!(t.timeseries&&!e.timeseries)&&(!!C()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&(!!C()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(!!C()(t.date,e.date)&&(!!C()(t.anchor,e.anchor)&&!!C()(t.expandTable,e.expandTable))))))}))},95:function(e,t,a){"use strict";var r=a(0),i=function(){return(i=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};var n=function(e){var t=e.animate,a=e.backgroundColor,n=e.backgroundOpacity,c=e.baseUrl,s=e.children,o=e.foregroundColor,l=e.foregroundOpacity,d=e.gradientRatio,m=e.uniqueKey,u=e.interval,b=e.rtl,f=e.speed,O=e.style,h=e.title,j=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]])}return a}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),p=m||Math.random().toString(36).substring(6),g=p+"-diff",v=p+"-animated-diff",y=p+"-aria",E=b?{transform:"scaleX(-1)"}:null,N="0; "+u+"; 1",C=f+"s";return Object(r.createElement)("svg",i({"aria-labelledby":y,role:"img",style:i(i({},O),E)},j),h?Object(r.createElement)("title",{id:y},h):null,Object(r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+g+")",style:{fill:"url("+c+"#"+v+")"}}),Object(r.createElement)("defs",{role:"presentation"},Object(r.createElement)("clipPath",{id:g},s),Object(r.createElement)("linearGradient",{id:v},Object(r.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:n},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:N,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:l},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:N,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:n},t&&Object(r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:N,dur:C,repeatCount:"indefinite"})))))};n.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var c=function(e){return e.children?Object(r.createElement)(n,i({},e)):Object(r.createElement)(s,i({},e))},s=function(e){return Object(r.createElement)(c,i({viewBox:"0 0 476 124"},e),Object(r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=c}}]);
//# sourceMappingURL=28.d8264a26.chunk.js.map