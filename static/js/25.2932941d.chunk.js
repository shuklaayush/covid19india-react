(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[25,27],{101:function(e,t,i){"use strict";var r=i(2),c=function(){return(c=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var c in t=arguments[i])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)};var n=function(e){var t=e.animate,i=e.backgroundColor,n=e.backgroundOpacity,a=e.baseUrl,s=e.children,o=e.foregroundColor,l=e.foregroundOpacity,d=e.gradientRatio,u=e.uniqueKey,b=e.interval,j=e.rtl,f=e.speed,m=e.style,O=e.title,h=function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(i[r[c]]=e[r[c]])}return i}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),g=u||Math.random().toString(36).substring(6),v=g+"-diff",p=g+"-animated-diff",y=g+"-aria",x=j?{transform:"scaleX(-1)"}:null,N="0; "+b+"; 1",C=f+"s";return Object(r.createElement)("svg",c({"aria-labelledby":y,role:"img",style:c(c({},m),x)},h),O?Object(r.createElement)("title",{id:y},O):null,Object(r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+a+"#"+v+")",style:{fill:"url("+a+"#"+p+")"}}),Object(r.createElement)("defs",null,Object(r.createElement)("clipPath",{id:v},s),Object(r.createElement)("linearGradient",{id:p},Object(r.createElement)("stop",{offset:"0%",stopColor:i,stopOpacity:n},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:N,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:l},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:N,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"100%",stopColor:i,stopOpacity:n},t&&Object(r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:N,dur:C,repeatCount:"indefinite"})))))};n.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var a=function(e){return e.children?Object(r.createElement)(n,c({},e)):Object(r.createElement)(s,c({},e))},s=function(e){return Object(r.createElement)(a,c({viewBox:"0 0 476 124"},e),Object(r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=a},123:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var r=i(89);function c(e,t){var i;if(void 0===t){var c,n=Object(r.a)(e);try{for(n.s();!(c=n.n()).done;){var a=c.value;null!=a&&(i>a||void 0===i&&a>=a)&&(i=a)}}catch(u){n.e(u)}finally{n.f()}}else{var s,o=-1,l=Object(r.a)(e);try{for(l.s();!(s=l.n()).done;){var d=s.value;null!=(d=t(d,++o,e))&&(i>d||void 0===i&&d>=d)&&(i=d)}}catch(u){l.e(u)}finally{l.f()}}return i}},631:function(e,t,i){"use strict";var r=i(2),c=i(88);t.a=function(e,t,i){if(!c.a)return[t,c.b,c.b];if(!e)throw new Error("useLocalStorage key may not be falsy");var n=i?i.raw?function(e){return e}:i.deserializer:JSON.parse,a=Object(r.useState)((function(){try{var r=i?i.raw?String:i.serializer:JSON.stringify,c=localStorage.getItem(e);return null!==c?n(c):(t&&localStorage.setItem(e,r(t)),t)}catch(a){return t}})),s=a[0],o=a[1],l=Object(r.useCallback)((function(t){try{var r="function"===typeof t?t(s):t;if("undefined"===typeof r)return;var c=void 0;c=i?i.raw?"string"===typeof r?r:JSON.stringify(r):i.serializer?i.serializer(r):JSON.stringify(r):JSON.stringify(r),localStorage.setItem(e,c),o(n(c))}catch(a){}}),[e,o]),d=Object(r.useCallback)((function(){try{localStorage.removeItem(e),o(void 0)}catch(a){}}),[e,o]);return[s,l,d]}},660:function(e,t,i){"use strict";i.r(t);var r=i(116),c=i(37),n=i(101),a=i(18),s=function(){var e=window.innerWidth,t=e>769?480:e,i=1200;return Object(a.jsxs)(n.a,{viewBox:"0 0 ".concat(t," ").concat(i),height:i,width:t,speed:2,children:[Object(a.jsx)("circle",{cx:.4*t,cy:600,r:"5"}),Object(a.jsx)("circle",{cx:.5*t,cy:600,r:"5"}),Object(a.jsx)("circle",{cx:.6*t,cy:600,r:"5"})]})},o=i(6),l=i(113),d=i(29),u=i(90),b=i(85),j=i.n(b),f=i(123),m=i(59),O=i(70),h=i(83),g=i.n(h),v=i(2),p=i(722),y=i(631),x=i(714),N=Object(v.lazy)((function(){return Promise.all([i.e(1),i.e(2),i.e(22)]).then(i.bind(null,698))})),C=Object(v.lazy)((function(){return Promise.all([i.e(1),i.e(2),i.e(21),i.e(41)]).then(i.bind(null,699))}));function k(e){var t,i=this,n=e.stateCode,b=e.timeseries,h=e.date,g=e.regionHighlighted,k=e.setRegionHighlighted,w=e.anchor,S=e.setAnchor,E=e.expandTable,M=e.showVaccinated,J=Object(p.a)().t,P=Object(y.a)("timeseriesLookbackDays",90),T=Object(c.a)(P,2),I=T[0],U=T[1],H=Object(y.a)("chartType","total"),A=Object(c.a)(H,2),L=A[0],R=A[1],z=Object(y.a)("isUniform",!1),B=Object(c.a)(z,2),D=B[0],V=B[1],q=Object(y.a)("isLog",!1),F=Object(c.a)(q,2),K=F[0],G=F[1],W=Object(y.a)("isMovingAverage",!1),X=Object(c.a)(W,2),Q=X[0],Y=X[1],Z=Object.keys((null===b||void 0===b||null===(t=b[n])||void 0===t?void 0:t.dates)||{}),$=Z[0]||h||Object(d.g)(),_=Object(f.a)([Z[Z.length-1],h||Object(d.g)()]),ee=Object(v.useState)(_),te=Object(c.a)(ee,2),ie=te[0],re=te[1];Object(v.useEffect)((function(){re(_)}),[_]);var ce=null!==I?Object(m.a)(Object(O.a)(Object(d.k)(ie),I),{representation:"date"}):$,ne=Object(v.useRef)(),ae=Object(l.a)(ne,{once:!0}),se=Object(x.a)().width,oe=Object(v.useMemo)((function(){var e;return(null===b||void 0===b||null===(e=b[g.stateCode])||void 0===e?void 0:e.districts)?{stateCode:g.stateCode,districtName:g.districtName}:{stateCode:g.stateCode,districtName:null}}),[b,g.stateCode,g.districtName]),le=Object(v.useMemo)((function(){var e,t,i,r;return oe.districtName?null===b||void 0===b||null===(e=b[oe.stateCode])||void 0===e||null===(t=e.districts)||void 0===t||null===(i=t[oe.districtName])||void 0===i?void 0:i.dates:null===b||void 0===b||null===(r=b[oe.stateCode])||void 0===r?void 0:r.dates}),[b,oe.stateCode,oe.districtName]),de=Object(v.useMemo)((function(){var e=Object.keys(b||{}).filter((function(e){return e!==n})).sort((function(e,t){return o.u[e].localeCompare(o.u[t])})).map((function(e){return{stateCode:e,districtName:null}})),t=Object.keys(b||{}).reduce((function(e,t){var i;return[].concat(Object(r.a)(e),Object(r.a)(Object.keys((null===b||void 0===b||null===(i=b[t])||void 0===i?void 0:i.districts)||{}).reduce((function(e,i){return[].concat(Object(r.a)(e),[{stateCode:t,districtName:i}])}),[])))}),[]);return[{stateCode:n,districtName:null}].concat(Object(r.a)(e),Object(r.a)(t))}),[b,n]),ue=Object(v.useMemo)((function(){return de.find((function(e){return e.stateCode===g.stateCode&&e.districtName===g.districtName}))?de:[].concat(Object(r.a)(de),[{stateCode:g.stateCode,districtName:g.districtName}])}),[g.stateCode,g.districtName,de]),be=Object(v.useMemo)((function(){return Object.keys(le||{}).filter((function(e){return e<=_}))}),[le,_]),je=Object(v.useMemo)((function(){return be.filter((function(e){return ce<=e&&e<=ie}))}),[be,ce,ie]),fe=Object(v.useCallback)((function(e){var t=e.target;k(JSON.parse(t.value))}),[k]),me=Object(v.useCallback)((function(){k({stateCode:n,districtName:null})}),[n,k]),Oe=Object(v.useMemo)((function(){return o.C.filter((function(e){return("vaccinated"!==e||M)&&("delta"===L||"tpr"!==e)}))}),[L,M]);return Object(a.jsxs)("div",{className:j()("TimeseriesExplorer fadeInUp",{stickied:"timeseries"===w},{expanded:E}),style:{display:w&&"timeseries"!==w&&(!E||se<769)?"none":""},ref:ne,children:[Object(a.jsxs)("div",{className:"timeseries-header",children:[Object(a.jsx)("div",{className:j()("anchor","fadeInUp",{stickied:"timeseries"===w}),style:{display:E&&se>769?"none":""},onClick:S&&S.bind(this,"timeseries"===w?null:"timeseries"),children:Object(a.jsx)(u.o,{})}),Object(a.jsx)("h1",{children:J("Spread Trends")}),Object(a.jsx)("div",{className:"tabs",children:Object.entries(o.A).map((function(e,t){var r=Object(c.a)(e,2),n=r[0],s=r[1];return Object(a.jsx)("div",{className:"tab ".concat(L===n?"focused":""),onClick:R.bind(i,n),children:Object(a.jsx)("h4",{children:J(s)})},n)}))}),Object(a.jsxs)("div",{className:"timeseries-options",children:[Object(a.jsxs)("div",{className:"scale-modes",children:[Object(a.jsx)("label",{className:"main",children:"".concat(J("Scale Modes"),":")}),Object(a.jsxs)("div",{className:"timeseries-mode",children:[Object(a.jsx)("label",{htmlFor:"timeseries-mode",children:J("Uniform")}),Object(a.jsx)("input",{id:"timeseries-mode",type:"checkbox",className:"switch",checked:D,"aria-label":J("Checked by default to scale uniformly."),onChange:V.bind(this,!D)})]}),Object(a.jsxs)("div",{className:"timeseries-mode ".concat("total"!==L?"disabled":""),children:[Object(a.jsx)("label",{htmlFor:"timeseries-logmode",children:J("Logarithmic")}),Object(a.jsx)("input",{id:"timeseries-logmode",type:"checkbox",checked:"total"===L&&K,className:"switch",disabled:"total"!==L,onChange:G.bind(this,!K)})]})]}),Object(a.jsxs)("div",{className:"timeseries-mode ".concat("total"===L?"disabled":""," moving-average"),children:[Object(a.jsx)("label",{htmlFor:"timeseries-moving-average",children:J("7 day Moving Average")}),Object(a.jsx)("input",{id:"timeseries-moving-average",type:"checkbox",checked:"delta"===L&&Q,className:"switch",disabled:"delta"!==L,onChange:Y.bind(this,!Q)})]})]})]}),ue&&Object(a.jsxs)("div",{className:"state-selection",children:[Object(a.jsx)("div",{className:"dropdown",children:Object(a.jsx)("select",{value:JSON.stringify(oe),onChange:fe,children:ue.filter((function(e){return o.u[e.stateCode]!==e.districtName})).map((function(e){return Object(a.jsx)("option",{value:JSON.stringify(e),children:e.districtName?J(e.districtName):J(o.u[e.stateCode])},"".concat(e.stateCode,"-").concat(e.districtName))}))})}),Object(a.jsx)("div",{className:"reset-icon",onClick:me,children:Object(a.jsx)(u.q,{})})]}),ae&&Object(a.jsxs)(v.Suspense,{fallback:Object(a.jsx)(s,{}),children:[Object(a.jsx)(N,{timeseries:le,regionHighlighted:oe,dates:je,statistics:Oe,endDate:_,chartType:L,isUniform:D,isLog:K,isMovingAverage:Q,showVaccinated:M}),Object(a.jsx)(C,{timeseries:le,regionHighlighted:oe,currentBrushSelection:[ce,ie],animationIndex:Oe.length,dates:be,endDate:_,lookback:I,setBrushSelectionEnd:re,setLookback:U})]}),!ae&&Object(a.jsx)("div",{style:{height:"50rem"}}),Object(a.jsx)("div",{className:"pills fadeInUp",style:{animationDelay:"".concat(250*(1+Oe.length),"ms")},children:o.B.map((function(e){return Object(a.jsx)("button",{type:"button",className:j()({selected:e===I}),onClick:U.bind(i,e),children:null!==e?"".concat(e," ").concat(J("days")):J("Beginning")},e)}))})]})}var w=function(e,t){return!t.forceRender&&(!(t.timeseries||!e.timeseries)||!(t.timeseries&&!e.timeseries)&&(!!g()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&(!!g()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(!!g()(t.date,e.date)&&(!!g()(t.anchor,e.anchor)&&(!!g()(t.expandTable,e.expandTable)&&!!g()(t.showVaccinated,e.showVaccinated)))))))};t.default=Object(v.memo)(k,w)},83:function(e,t,i){"use strict";e.exports=function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var r,c,n;if(Array.isArray(t)){if((r=t.length)!=i.length)return!1;for(c=r;0!==c--;)if(!e(t[c],i[c]))return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((r=(n=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(c=r;0!==c--;)if(!Object.prototype.hasOwnProperty.call(i,n[c]))return!1;for(c=r;0!==c--;){var a=n[c];if(!e(t[a],i[a]))return!1}return!0}return t!==t&&i!==i}}}]);
//# sourceMappingURL=25.2932941d.chunk.js.map