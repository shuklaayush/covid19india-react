(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[20,28],{162:function(e,t,a){"use strict";var r=a(0),i=a(88),n=function(){};t.a=function(e,t,a){if(!i.a)return[t,n,n];if(!e)throw new Error("useLocalStorage key may not be falsy");var c=a?a.raw?function(e){return e}:a.deserializer:JSON.parse,o=Object(r.useState)((function(){try{var r=a?a.raw?String:a.serializer:JSON.stringify,i=localStorage.getItem(e);return null!==i?c(i):(t&&localStorage.setItem(e,r(t)),t)}catch(o){return t}})),s=o[0],l=o[1],d=Object(r.useCallback)((function(t){try{var r="function"===typeof t?t(s):t;if("undefined"===typeof r)return;var i=void 0;i=a?a.raw?"string"===typeof r?r:JSON.stringify(r):a.serializer?a.serializer(r):JSON.stringify(r):JSON.stringify(r),localStorage.setItem(e,i),l(c(i))}catch(o){}}),[e,l]),u=Object(r.useCallback)((function(){try{localStorage.removeItem(e),l(void 0)}catch(o){}}),[e,l]);return[s,d,u]}},196:function(e,t,a){"use strict";a.r(t);var r=a(108),i=a(80),n=a(0),c=a.n(n),o=a(94),s=function(){var e=window.innerWidth,t=e>769?480:e;return c.a.createElement(o.a,{viewBox:"0 0 ".concat(t," ").concat(800),height:800,width:t,speed:2},c.a.createElement("circle",{cx:.4*t,cy:400,r:"5"}),c.a.createElement("circle",{cx:.5*t,cy:400,r:"5"}),c.a.createElement("circle",{cx:.6*t,cy:400,r:"5"}))},l=a(12),d=a(101),u=a(31),m=a(87),b=a(81),f=a.n(b),O=a(61),h=a(62),g=a(4),j=a(2),p=a(1);function y(e,t){Object(p.a)(2,arguments);var a=Object(j.a)(e),r=Object(g.a)(t);if(isNaN(r))return new Date(NaN);if(!r)return a;var i=a.getDate(),n=new Date(a.getTime());n.setMonth(a.getMonth()+r+1,0);var c=n.getDate();return i>=c?n:(a.setFullYear(n.getFullYear(),n.getMonth(),i),a)}function v(e,t){Object(p.a)(2,arguments);var a=Object(g.a)(t);return y(e,-a)}function N(e,t){if(Object(p.a)(2,arguments),!t||"object"!==typeof t)return new Date(NaN);var a="years"in t?Object(g.a)(t.years):0,r="months"in t?Object(g.a)(t.months):0,i="weeks"in t?Object(g.a)(t.weeks):0,n="days"in t?Object(g.a)(t.days):0,c="hours"in t?Object(g.a)(t.hours):0,o="minutes"in t?Object(g.a)(t.minutes):0,s="seconds"in t?Object(g.a)(t.seconds):0,l=v(Object(j.a)(e),r+12*a),d=Object(h.a)(l,n+7*i),u=o+60*c,m=s+60*u,b=1e3*m,f=new Date(d.getTime()-b);return f}var E=a(84),C=a.n(E),k=a(250),w=a(212),x=a(162),S=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(4),a.e(27)]).then(a.bind(null,241))}));t.default=c.a.memo((function(e){var t=this,a=e.stateCode,o=e.timeseries,b=e.date,h=e.regionHighlighted,g=e.setRegionHighlighted,j=e.anchor,p=e.setAnchor,y=e.expandTable,v=Object(k.a)().t,E=Object(w.a)("timeseriesLookback",l.x.MONTH),C=Object(i.a)(E,2),T=C[0],M=C[1],H=Object(x.a)("chartType","total"),J=Object(i.a)(H,2),I=J[0],P=J[1],R=Object(x.a)("isUniform",!0),U=Object(i.a)(R,2),z=U[0],D=U[1],L=Object(x.a)("isLog",!1),F=Object(i.a)(L,2),B=F[0],G=F[1],q=Object(n.useRef)(),K=Object(d.a)(q,{once:!0}),Y=Object(n.useMemo)((function(){var e;return(null===o||void 0===o||null===(e=o[h.stateCode])||void 0===e?void 0:e.districts)?{stateCode:h.stateCode,districtName:h.districtName}:{stateCode:h.stateCode,districtName:null}}),[o,h.stateCode,h.districtName]),A=Object(n.useMemo)((function(){var e,t,a,r;return Y.districtName?null===o||void 0===o||null===(e=o[Y.stateCode])||void 0===e||null===(t=e.districts)||void 0===t||null===(a=t[Y.districtName])||void 0===a?void 0:a.dates:null===o||void 0===o||null===(r=o[Y.stateCode])||void 0===r?void 0:r.dates}),[o,Y.stateCode,Y.districtName]),W=Object(n.useMemo)((function(){var e=Object.keys(o||{}).filter((function(e){return e!==a})).sort((function(e,t){return l.r[e].localeCompare(l.r[t])})).map((function(e){return{stateCode:e,districtName:null}})),t=Object.keys(o||{}).reduce((function(e,t){var a;return[].concat(Object(r.a)(e),Object(r.a)(Object.keys((null===o||void 0===o||null===(a=o[t])||void 0===a?void 0:a.districts)||{}).reduce((function(e,a){return[].concat(Object(r.a)(e),[{stateCode:t,districtName:a}])}),[])))}),[]);return[{stateCode:a,districtName:null}].concat(Object(r.a)(e),Object(r.a)(t))}),[o,a]),X=Object(n.useMemo)((function(){return W.find((function(e){return e.stateCode===h.stateCode&&e.districtName===h.districtName}))?W:[].concat(Object(r.a)(W),[{stateCode:h.stateCode,districtName:h.districtName}])}),[h.stateCode,h.districtName,W]),_=Object(n.useMemo)((function(){var e,t=b||Object(u.g)(),a=Object.keys(A||{}).filter((function(e){return e<=t})),r=a[a.length-1];return T===l.x.BEGINNING?a:(T===l.x.MONTH?e=Object(O.a)(N(Object(u.j)(r),{months:1}),{representation:"date"}):T===l.x.THREE_MONTHS&&(e=Object(O.a)(N(Object(u.j)(r),{months:3}),{representation:"date"})),a.filter((function(t){return t>=e})))}),[A,b,T]),Q=Object(n.useCallback)((function(e){var t=e.target;g(JSON.parse(t.value))}),[g]),V=Object(n.useCallback)((function(){g({stateCode:a,districtName:null})}),[a,g]);return c.a.createElement("div",{className:f()("TimeseriesExplorer fadeInUp",{stickied:"timeseries"===j},{expanded:y}),style:{display:"mapexplorer"===j?"none":""},ref:q},c.a.createElement("div",{className:"timeseries-header"},c.a.createElement("div",{className:f()("anchor",{stickied:"timeseries"===j}),onClick:p&&p.bind(this,"timeseries"===j?null:"timeseries")},c.a.createElement(m.m,null)),c.a.createElement("h1",null,v("Spread Trends")),c.a.createElement("div",{className:"tabs"},Object.entries(l.w).map((function(e,a){var r=Object(i.a)(e,2),n=r[0],o=r[1];return c.a.createElement("div",{className:"tab ".concat(I===n?"focused":""),key:n,onClick:P.bind(t,n)},c.a.createElement("h4",null,v(o)))}))),c.a.createElement("div",{className:"scale-modes"},c.a.createElement("label",{className:"main"},v("Scale Modes")),c.a.createElement("div",{className:"timeseries-mode"},c.a.createElement("label",{htmlFor:"timeseries-mode"},v("Uniform")),c.a.createElement("input",{id:"timeseries-mode",type:"checkbox",className:"switch",checked:z,"aria-label":v("Checked by default to scale uniformly."),onChange:D.bind(this,!z)})),c.a.createElement("div",{className:"timeseries-logmode ".concat("total"!==I?"disabled":"")},c.a.createElement("label",{htmlFor:"timeseries-logmode"},v("Logarithmic")),c.a.createElement("input",{id:"timeseries-logmode",type:"checkbox",checked:"total"===I&&B,className:"switch",disabled:"total"!==I,onChange:G.bind(this,!B)})))),X&&c.a.createElement("div",{className:"state-selection"},c.a.createElement("div",{className:"dropdown"},c.a.createElement("select",{value:JSON.stringify(Y),onChange:Q},X.filter((function(e){return l.r[e.stateCode]!==e.districtName})).map((function(e){return c.a.createElement("option",{value:JSON.stringify(e),key:"".concat(e.stateCode,"-").concat(e.districtName)},e.districtName?v(e.districtName):v(l.r[e.stateCode]))})))),c.a.createElement("div",{className:"reset-icon",onClick:V},c.a.createElement(m.o,null))),K&&c.a.createElement(n.Suspense,{fallback:c.a.createElement(s,null)},c.a.createElement(S,Object.assign({timeseries:A,regionHighlighted:Y},{dates:_,chartType:I,isUniform:z,isLog:B}))),!K&&c.a.createElement("div",{style:{height:"50rem"}}),c.a.createElement("div",{className:"pills"},Object.values(l.x).map((function(e){return c.a.createElement("button",{key:e,type:"button",className:f()({selected:T===e}),onClick:function(){return M(e)}},v(e))}))),c.a.createElement("div",{className:"alert"},c.a.createElement(m.k,{size:24}),c.a.createElement("div",{className:"alert-right"},v("Tested chart is independent of uniform scaling"))))}),(function(e,t){return!t.forceRender&&(!(t.timeseries||!e.timeseries)||!(t.timeseries&&!e.timeseries)&&(!!C()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&(!!C()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(!!C()(t.date,e.date)&&(!!C()(t.anchor,e.anchor)&&!!C()(t.expandTable,e.expandTable))))))}))},94:function(e,t,a){"use strict";var r=a(0),i=function(){return(i=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};var n=function(e){var t=e.animate,a=e.backgroundColor,n=e.backgroundOpacity,c=e.baseUrl,o=e.children,s=e.foregroundColor,l=e.foregroundOpacity,d=e.gradientRatio,u=e.uniqueKey,m=e.interval,b=e.rtl,f=e.speed,O=e.style,h=e.title,g=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]])}return a}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),j=u||Math.random().toString(36).substring(6),p=j+"-diff",y=j+"-animated-diff",v=j+"-aria",N=b?{transform:"scaleX(-1)"}:null,E="0; "+m+"; 1",C=f+"s";return Object(r.createElement)("svg",i({"aria-labelledby":v,role:"img",style:i(i({},O),N)},g),h?Object(r.createElement)("title",{id:v},h):null,Object(r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+p+")",style:{fill:"url("+c+"#"+y+")"}}),Object(r.createElement)("defs",{role:"presentation"},Object(r.createElement)("clipPath",{id:p},o),Object(r.createElement)("linearGradient",{id:y},Object(r.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:n},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:E,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"50%",stopColor:s,stopOpacity:l},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:E,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:n},t&&Object(r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:E,dur:C,repeatCount:"indefinite"})))))};n.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var c=function(e){return e.children?Object(r.createElement)(n,i({},e)):Object(r.createElement)(o,i({},e))},o=function(e){return Object(r.createElement)(c,i({viewBox:"0 0 476 124"},e),Object(r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=c}}]);
//# sourceMappingURL=20.b219e8bc.chunk.js.map