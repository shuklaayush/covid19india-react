(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[21],{106:function(t,n,e){"use strict";var r=e(2),i=e(83),a=i.a?r.useLayoutEffect:r.useEffect,c={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};n.a=i.a&&"undefined"!==typeof window.ResizeObserver?function(){var t=Object(r.useState)(null),n=t[0],e=t[1],i=Object(r.useState)(c),o=i[0],u=i[1],l=Object(r.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var n=t[0].contentRect,e=n.x,r=n.y,i=n.width,a=n.height,c=n.top,o=n.left,l=n.bottom,s=n.right;u({x:e,y:r,width:i,height:a,top:c,left:o,bottom:l,right:s})}}))}),[]);return a((function(){if(n)return l.observe(n),function(){l.disconnect()}}),[n]),[e,o]}:function(){return[i.b,c]}},122:function(t,n,e){"use strict";n.a=function(t){for(var n;n=t.sourceEvent;)t=n;return t}},140:function(t,n,e){"use strict";e.d(n,"b",(function(){return h})),e.d(n,"a",(function(){return d}));var r=Array.prototype.slice,i=function(t){return t},a=1e-6;function c(t){return"translate("+t+",0)"}function o(t){return"translate(0,"+t+")"}function u(t){return function(n){return+t(n)}}function l(t,n){return n=Math.max(0,t.bandwidth()-2*n)/2,t.round()&&(n=Math.round(n)),function(e){return+t(e)+n}}function s(){return!this.__axis}function f(t,n){var e=[],f=null,h=null,d=6,b=6,j=3,m="undefined"!==typeof window&&window.devicePixelRatio>1?0:.5,v=1===t||4===t?-1:1,g=4===t||2===t?"x":"y",O=1===t||3===t?c:o;function p(r){var c=null==f?n.ticks?n.ticks.apply(n,e):n.domain():f,o=null==h?n.tickFormat?n.tickFormat.apply(n,e):i:h,p=Math.max(d,0)+j,x=n.range(),y=+x[0]+m,k=+x[x.length-1]+m,M=(n.bandwidth?l:u)(n.copy(),m),_=r.selection?r.selection():r,w=_.selectAll(".domain").data([null]),A=_.selectAll(".tick").data(c,n).order(),N=A.exit(),T=A.enter().append("g").attr("class","tick"),E=A.select("line"),S=A.select("text");w=w.merge(w.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),A=A.merge(T),E=E.merge(T.append("line").attr("stroke","currentColor").attr(g+"2",v*d)),S=S.merge(T.append("text").attr("fill","currentColor").attr(g,v*p).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),r!==_&&(w=w.transition(r),A=A.transition(r),E=E.transition(r),S=S.transition(r),N=N.transition(r).attr("opacity",a).attr("transform",(function(t){return isFinite(t=M(t))?O(t+m):this.getAttribute("transform")})),T.attr("opacity",a).attr("transform",(function(t){var n=this.parentNode.__axis;return O((n&&isFinite(n=n(t))?n:M(t))+m)}))),N.remove(),w.attr("d",4===t||2===t?b?"M"+v*b+","+y+"H"+m+"V"+k+"H"+v*b:"M"+m+","+y+"V"+k:b?"M"+y+","+v*b+"V"+m+"H"+k+"V"+v*b:"M"+y+","+m+"H"+k),A.attr("opacity",1).attr("transform",(function(t){return O(M(t)+m)})),E.attr(g+"2",v*d),S.attr(g,v*p).text(o),_.filter(s).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),_.each((function(){this.__axis=M}))}return p.scale=function(t){return arguments.length?(n=t,p):n},p.ticks=function(){return e=r.call(arguments),p},p.tickArguments=function(t){return arguments.length?(e=null==t?[]:r.call(t),p):e.slice()},p.tickValues=function(t){return arguments.length?(f=null==t?null:r.call(t),p):f&&f.slice()},p.tickFormat=function(t){return arguments.length?(h=t,p):h},p.tickSize=function(t){return arguments.length?(d=b=+t,p):d},p.tickSizeInner=function(t){return arguments.length?(d=+t,p):d},p.tickSizeOuter=function(t){return arguments.length?(b=+t,p):b},p.tickPadding=function(t){return arguments.length?(j=+t,p):j},p.offset=function(t){return arguments.length?(m=+t,p):m},p}function h(t){return f(2,t)}function d(t){return f(3,t)}},168:function(t,n,e){"use strict";e.d(n,"b",(function(){return b})),e.d(n,"a",(function(){return j}));var r=e(255),i=e(279),a=e(117),c=e(99),o=e(92);function u(t){return Math.log(t)}function l(t){return Math.exp(t)}function s(t){return-Math.log(-t)}function f(t){return-Math.exp(-t)}function h(t){return isFinite(t)?+("1e"+t):t<0?0:t}function d(t){return function(n){return-t(-n)}}function b(t){var n,e,c=t(u,l),o=c.domain,b=10;function j(){return n=function(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}(b),e=function(t){return 10===t?h:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}(b),o()[0]<0?(n=d(n),e=d(e),t(s,f)):t(u,l),c}return c.base=function(t){return arguments.length?(b=+t,j()):b},c.domain=function(t){return arguments.length?(o(t),j()):o()},c.ticks=function(t){var i,a=o(),c=a[0],u=a[a.length-1];(i=u<c)&&(h=c,c=u,u=h);var l,s,f,h=n(c),d=n(u),j=null==t?10:+t,m=[];if(!(b%1)&&d-h<j){if(h=Math.floor(h),d=Math.ceil(d),c>0){for(;h<=d;++h)for(s=1,l=e(h);s<b;++s)if(!((f=l*s)<c)){if(f>u)break;m.push(f)}}else for(;h<=d;++h)for(s=b-1,l=e(h);s>=1;--s)if(!((f=l*s)<c)){if(f>u)break;m.push(f)}2*m.length<j&&(m=Object(r.a)(c,u,j))}else m=Object(r.a)(h,d,Math.min(d-h,j)).map(e);return i?m.reverse():m},c.tickFormat=function(t,r){if(null==r&&(r=10===b?".0e":","),"function"!==typeof r&&(r=Object(i.a)(r)),t===1/0)return r;null==t&&(t=10);var a=Math.max(1,b*t/c.ticks().length);return function(t){var i=t/e(Math.round(n(t)));return i*b<b-.5&&(i*=b),i<=a?r(t):""}},c.nice=function(){return o(Object(a.a)(o(),{floor:function(t){return e(Math.floor(n(t)))},ceil:function(t){return e(Math.ceil(n(t)))}}))},c}function j(){var t=b(Object(c.d)()).domain([1,10]);return t.copy=function(){return Object(c.a)(t,j()).base(t.base())},o.b.apply(t,arguments),t}},173:function(t,n,e){"use strict";var r=e(122);n.a=function(t,n){if(t=Object(r.a)(t),void 0===n&&(n=t.currentTarget),n){var e=n.ownerSVGElement||n;if(e.createSVGPoint){var i=e.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,[(i=i.matrixTransform(n.getScreenCTM().inverse())).x,i.y]}if(n.getBoundingClientRect){var a=n.getBoundingClientRect();return[t.clientX-a.left-n.clientLeft,t.clientY-a.top-n.clientTop]}}return[t.pageX,t.pageY]}},221:function(t,n,e){"use strict";var r=e(257),i=e(121),a=e(120),c=e(134),o=e(165),u=e(135);n.a=function(t,n,e){var l=null,s=Object(a.a)(!0),f=null,h=c.a,d=null;function b(a){var c,o,u,b,j,m=(a=Object(i.a)(a)).length,v=!1,g=new Array(m),O=new Array(m);for(null==f&&(d=h(j=Object(r.a)())),c=0;c<=m;++c){if(!(c<m&&s(b=a[c],c,a))===v)if(v=!v)o=c,d.areaStart(),d.lineStart();else{for(d.lineEnd(),d.lineStart(),u=c-1;u>=o;--u)d.point(g[u],O[u]);d.lineEnd(),d.areaEnd()}v&&(g[c]=+t(b,c,a),O[c]=+n(b,c,a),d.point(l?+l(b,c,a):g[c],e?+e(b,c,a):O[c]))}if(j)return d=null,j+""||null}function j(){return Object(o.a)().defined(s).curve(h).context(f)}return t="function"===typeof t?t:void 0===t?u.a:Object(a.a)(+t),n="function"===typeof n?n:void 0===n?Object(a.a)(0):Object(a.a)(+n),e="function"===typeof e?e:void 0===e?u.b:Object(a.a)(+e),b.x=function(n){return arguments.length?(t="function"===typeof n?n:Object(a.a)(+n),l=null,b):t},b.x0=function(n){return arguments.length?(t="function"===typeof n?n:Object(a.a)(+n),b):t},b.x1=function(t){return arguments.length?(l=null==t?null:"function"===typeof t?t:Object(a.a)(+t),b):l},b.y=function(t){return arguments.length?(n="function"===typeof t?t:Object(a.a)(+t),e=null,b):n},b.y0=function(t){return arguments.length?(n="function"===typeof t?t:Object(a.a)(+t),b):n},b.y1=function(t){return arguments.length?(e=null==t?null:"function"===typeof t?t:Object(a.a)(+t),b):e},b.lineX0=b.lineY0=function(){return j().x(t).y(n)},b.lineY1=function(){return j().x(t).y(e)},b.lineX1=function(){return j().x(l).y(n)},b.defined=function(t){return arguments.length?(s="function"===typeof t?t:Object(a.a)(!!t),b):s},b.curve=function(t){return arguments.length?(h=t,null!=f&&(d=h(f)),b):h},b.context=function(t){return arguments.length?(null==t?f=d=null:d=h(f=t),b):f},b}},299:function(t,n,e){"use strict";e.r(n);var r=e(82),i=e(7),a=e(22),c=e(85),o=e.n(c),u=e(136),l=e(164),s=e(204),f=e(140),h=e(116),d=e(276),b=e(138),j=e(168),m=e(173),v=e(256),g=e(221);function O(t,n){this._context=t,this._t=n}O.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var e=this._x*(1-this._t)+t*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}};var p=function(t){return new O(t,.5)};var x=e(165),y=e(258),k=(e(98),e(76)),M=e(84),_=e.n(M),w=e(2),A=e(293),N=e(106),T=e(18),E=15,S=35,C=25,V=25,F=.7;function H(t){var n=t.statistics,e=t.timeseries,c=t.dates,O=t.endDate,M=t.chartType,_=t.isUniform,H=t.isLog,R=t.isMovingAverage,z=Object(A.a)().t,P=Object(w.useRef)([]),Y=Object(N.a)(),L=Object(r.a)(Y,2),X=L[0],D=L[1],U=D.width,G=D.height,I=Object(w.useState)(c[c.length-1]),B=Object(r.a)(I,2),J=B[0],Z=B[1];Object(w.useEffect)((function(){Z(c[c.length-1])}),[c]);var q=Object(w.useMemo)((function(){var t=c.length,n=Object(k.a)(Object(a.k)(c[t-1]),Object(a.k)(c[0])),e=U-S;return Math.max(0,e-V)/(1.25*n)<4}),[U,c]),K=Object(w.useMemo)((function(){var t=c.length,n=U-S;return Object(d.a)().clamp(!0).domain([Object(a.k)(c[0]||O),Object(a.k)(c[t-1]||O)]).range([V,n])}),[U,O,c]),Q=Object(w.useMemo)((function(){var t=G-C,r=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=t.domain();return n?t.domain([e[0],e[0]*Math.pow(e[1]/e[0],1.4285714285714286)]):t.domain([e[0],e[0]+(e[1]-e[0])/F]),t},o=Math.min(0,Object(u.a)(c,(function(t){return Object(a.h)(e[t],M,"active",{movingAverage:R})}))||0),s=Math.max(1,Object(l.a)(c,(function(t){return Math.max(Object(a.h)(e[t],M,"confirmed",{movingAverage:R}),Object(a.h)(e[t],M,"recovered",{movingAverage:R}),Object(a.h)(e[t],M,"deceased",{movingAverage:R}))}))||0),f=r(Object(b.a)().clamp(!0).domain([o,s]).range([t,E]).nice(4)),h=r(Object(j.a)().clamp(!0).domain([Math.max(1,o),Math.max(10,s)]).range([t,E]).nice(4),!0);return n.map((function(n){if(_&&"total"===M&&H&&i.r.includes(n))return h;if(_&&i.r.includes(n))return f;var o=Math.min(0,Object(u.a)(c,(function(t){return Object(a.h)(e[t],M,n,{movingAverage:R})}))||0),s=Math.max(1,Object(l.a)(c,(function(t){return Object(a.h)(e[t],M,n,{movingAverage:R})}))||0);return"total"===M&&H?r(Object(j.a)().clamp(!0).domain([Math.max(1,o),Math.max(10,s)]).range([t,E]).nice(4),!0):r(Object(b.a)().clamp(!0).domain(["total"===M||"active"!==n?0:o,"%"===i.w[n].format?Math.min(100,s):s]).range([t,E]).nice(4))}))}),[G,M,_,H,R,n,c,e]);Object(w.useEffect)((function(){if(U&&G){var t=c.length,r=U-S,o=G-C,u="delta"===M&&!R,l=function(t){return t.attr("class","x-axis").call(Object(f.a)(K).ticks(function(t){return t<480?4:6}(U)))},d=function(t,n){t.attr("class","x-axis2").call(Object(f.a)(K).tickValues([]).tickSize(0)).select(".domain").style("transform","translate3d(0, ".concat(n(0),"px, 0)")),n(0)!==o?t.select(".domain").attr("opacity",.4):t.select(".domain").attr("opacity",0)},b=function(t,n,e){return t.attr("class","y-axis").call(Object(f.b)(n).ticks(4).tickFormat((function(t){return Object(a.e)(t,e)})).tickPadding(4))};n.forEach((function(n,s){var f=P.current[s],m=Object(v.a)(f),k=m.transition().duration(i.c),_=Q[s],w=i.w[n].color,A="%"===i.w[n].format?"%":"short";m.select(".x-axis").style("transform","translate3d(0, ".concat(o,"px, 0)")).transition(k).call(l),m.select(".x-axis2").transition(k).call(d,_),m.select(".y-axis").style("transform","translate3d(".concat(r,"px, 0, 0)")).transition(k).call(b,_,A),m.selectAll("circle.normal").data(q?[]:c,(function(t){return t})).join((function(t){return t.append("circle").attr("class","normal").attr("fill",w).attr("stroke",w).attr("cx",(function(t){return K(Object(a.k)(t))})).attr("cy",(function(t){return _(u?0:Object(a.h)(e[t],M,n,{movingAverage:R}))})).attr("r",2)})).transition(k).attr("cx",(function(t){return K(Object(a.k)(t))})).attr("cy",(function(t){return _(Object(a.h)(e[t],M,n,{movingAverage:R}))}));var N=function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(g.a)().curve(p).x((function(t){return K(Object(a.k)(t))})).y0(_(0)).y1(r?_(0):function(t){return _(Object(a.h)(e[t],M,n))})(t)};m.selectAll(".trend-area").data(t&&"delta"===M&&q?[c]:[]).join((function(t){return t.append("path").attr("class","trend-area").call((function(t){return t.attr("d",(function(t){return N(t,!0)})).transition(k).attr("d",N)}))}),(function(t){return t.call((function(t){return t.transition(k).attrTween("d",(function(t){var n=Object(v.a)(this).attr("d"),e=N(t);return Object(h.a)(n,e)}))}))}),(function(t){return t.call((function(t){return t.transition(k).attr("d",(function(t){return N(t,!0)})).remove()}))})).transition(k).attr("opacity",R?.3:1),m.selectAll(".stem").data(t&&"delta"===M&&!q?c:[],(function(t){return t})).join((function(t){return t.append("line").attr("class","stem").attr("stroke-width",4).attr("x1",(function(t){return K(Object(a.k)(t))})).attr("y1",_(0)).attr("x2",(function(t){return K(Object(a.k)(t))})).attr("y2",_(0))}),(function(t){return t}),(function(t){return t.call((function(t){return t.transition(k).attr("x1",(function(t){return K(Object(a.k)(t))})).attr("x2",(function(t){return K(Object(a.k)(t))})).attr("y1",_(0)).attr("y2",_(0)).remove()}))})).transition(k).attr("x1",(function(t){return K(Object(a.k)(t))})).attr("y1",_(0)).attr("x2",(function(t){return K(Object(a.k)(t))})).attr("y2",(function(t){return _(Object(a.h)(e[t],M,n))})).attr("opacity",R?.2:1);var T=Object(x.a)().curve(y.a).x((function(t){return K(Object(a.k)(t))})).y((function(t){return _(Object(a.h)(e[t],M,n,{movingAverage:R}))}));m.selectAll(".trend").data(t&&("total"===M||R)?[c]:[]).join((function(t){return t.append("path").attr("class","trend").attr("fill","none").attr("stroke-width",4).attr("d",T).call((function(t){return t.transition(k).attr("opacity",1)}))}),(function(t){return t.call((function(t){return t.attr("opacity",1).transition(k).attrTween("d",(function(t){var n=Object(v.a)(this).attr("d"),e=T(t);return Object(h.a)(n,e)}))}))}),(function(t){return t.call((function(t){return t.transition(k).attr("opacity",0).remove()}))})).attr("stroke",w+(q?"99":"50")),m.selectAll("*").attr("pointer-events","none"),m.on("mousemove",j).on("touchmove",(function(t){return j(t.touches[0])})).on("mouseout touchend",O)}))}function j(t){var n=Object(m.a)(t)[0],e=K.invert(n);if(!isNaN(e)){var r=(0,Object(s.a)((function(t){return Object(a.k)(t)})).left)(c,e,1),i=c[r-1],o=c[r];Z(e-Object(a.k)(i)<Object(a.k)(o)-e?i:o)}}function O(n){Z(c[t-1])}}),[U,G,M,R,q,K,Q,n,c,e]),Object(w.useEffect)((function(){n.forEach((function(t,n){var r=P.current[n],c=Object(v.a)(r),o=i.w[t].color,u=Q[n],l=c.transition().duration(i.c);c.selectAll("circle.condensed").data(q&&J?[J]:[],(function(t){return t})).join((function(n){return n.append("circle").attr("class","condensed").attr("fill",o).attr("stroke",o).attr("pointer-events","none").attr("cx",(function(t){return K(Object(a.k)(t))})).attr("cy",(function(n){return u(Object(a.h)(e[n],M,t,{movingAverage:R}))})).attr("r",4)})).transition(l).attr("cx",(function(t){return K(Object(a.k)(t))})).attr("cy",(function(n){return u(Object(a.h)(e[n],M,t,{movingAverage:R}))})),q||c.selectAll("circle").attr("r",(function(t){return t===J?4:2}))}))}),[M,R,q,J,K,Q,n,e]);var W=Object(w.useCallback)((function(t){var n;if(J){var r=Object(a.h)(null===e||void 0===e?void 0:e[J],M,t,{movingAverage:R});if(!(null===(n=i.w[t])||void 0===n?void 0:n.hideZero)||0!==r){var o=c[c.findIndex((function(t){return t===J}))-1];return r-Object(a.h)(null===e||void 0===e?void 0:e[o],M,t,{movingAverage:R})}}}),[e,c,J,M,R]),$=Object(w.useMemo)((function(){return n.map((function(t,n){return{animationDelay:"".concat(250*n,"ms")}}))}),[n]);return Object(T.jsx)("div",{className:"Timeseries",children:n.map((function(t,n){var r=W(t,n),c=i.w[t];return Object(T.jsxs)("div",{className:o()("svg-parent fadeInUp","is-".concat(t)),style:$[n],ref:0===n?X:null,children:[J&&Object(T.jsxs)("div",{className:o()("stats","is-".concat(t)),children:[Object(T.jsx)("h5",{className:"title",children:z(Object(a.a)(c.displayName))}),Object(T.jsx)("h5",{children:Object(a.c)(J,"dd MMMM")}),Object(T.jsxs)("div",{className:"stats-bottom",children:[Object(T.jsx)("h2",{children:Object(a.e)(Object(a.h)(null===e||void 0===e?void 0:e[J],M,t,{movingAverage:R}),"short"!==c.format?c.format:"long",t)}),Object(T.jsx)("h6",{children:"".concat(r>0?"+":"").concat(Object(a.e)(r,"short"!==c.format?c.format:"long",t))})]})]}),Object(T.jsxs)("svg",{ref:function(t){P.current[n]=t},preserveAspectRatio:"xMidYMid meet",children:[Object(T.jsx)("g",{className:"x-axis"}),Object(T.jsx)("g",{className:"x-axis2"}),Object(T.jsx)("g",{className:"y-axis"})]})]},t)}))})}var R=function(t,n){return!!_()(n.chartType,t.chartType)&&(!!_()(n.isUniform,t.isUniform)&&(!!_()(n.isLog,t.isLog)&&(!!_()(n.isMovingAverage,t.isMovingAverage)&&(!!_()(n.regionHighlighted.stateCode,t.regionHighlighted.stateCode)&&(!!_()(n.regionHighlighted.districtName,t.regionHighlighted.districtName)&&(!!_()(n.endDate,t.endDate)&&(!!_()(n.statistics,t.statistics)&&!!_()(n.dates,t.dates))))))))};n.default=Object(w.memo)(H,R)}}]);
//# sourceMappingURL=21.141e6261.chunk.js.map