(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[44],{292:function(t,e,i){"use strict";i.r(e);var a=i(51),s=i(10),c=i(25),d=i(102),l=i.n(d),n=i(100),o=i.n(n),r=i(2),b=i(106),j=i(20),u=function(t){var e=t.statistic,i=t.data,a=(t.lastUpdatedDate,t.getTableStatistic),d=a(i,e,"total"),n=a(i,e,"delta"),o=Object(b.useSpring)({total:d,delta:n,config:s.t}),r=s.x[e];return Object(j.jsxs)("div",{className:"cell statistic",children:[(null===r||void 0===r?void 0:r.showDelta)&&Object(j.jsx)(b.animated.div,{className:l()("delta","is-".concat(e)),title:n,children:o.delta.to((function(t){return t>0?"\u2191"+Object(c.e)(t,r.format):t<0?"\u2193"+Object(c.e)(Math.abs(t),r.format):""}))}),Object(j.jsx)(b.animated.div,{className:"total",title:d,children:o.total.to((function(t){return Object(c.e)(t,r.format,e)}))})]})},m=function(t,e){var i,a,s,c;return!!o()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!o()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(c=e.data)||void 0===c?void 0:c.delta)&&!!o()(t.getTableStatistic,e.getTableStatistic))},g=Object(r.memo)(u,m),h=i(108),v=i(104),O=i(113),x=i(294);function N(t){var e,i=t.stateCode,a=t.districtName,s=t.data,c=t.tableStatistics,d=t.regionHighlighted,n=t.setRegionHighlighted,o=(t.expandTable,t.getTableStatistic),b=Object(x.a)().t,u=Object(r.useCallback)((function(){d.districtName!==a&&n(Object(O.a)(d,(function(t){t.stateCode=i,t.districtName=a})))}),[d,a,n,i]);return Object(j.jsxs)("div",{className:l()("row","district",{"is-highlighted":(null===d||void 0===d?void 0:d.districtName)===a}),onMouseEnter:u,children:[Object(j.jsxs)("div",{className:"cell",children:[Object(j.jsx)("div",{className:"state-name",children:b(a)}),(null===s||void 0===s||null===(e=s.meta)||void 0===e?void 0:e.notes)&&Object(j.jsx)(h.a,{message:s.meta.notes,children:Object(j.jsx)(v.o,{size:16})})]}),c.map((function(t){return Object(j.jsx)(g,{statistic:t,data:s,getTableStatistic:o},t)}))]})}var C=function(t,e){var i,a,s,c,d,l;return!!o()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!o()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(c=e.data)||void 0===c?void 0:c.delta)&&(!!o()(null===(d=t.data)||void 0===d?void 0:d.last_updated,null===(l=e.data)||void 0===l?void 0:l.last_updated)&&(!(!o()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(o()(t.regionHighlighted.districtName,t.districtName)||o()(e.regionHighlighted.districtName,e.districtName)))&&(!!o()(t.expandTable,e.expandTable)&&(!!o()(t.getTableStatistic,e.getTableStatistic)&&!!o()(t.tableStatistics,e.tableStatistics))))))},f=Object(r.memo)(N,C),p=i(184),S=i(5),T=i(204);function H(t){var e,i,d=this,n=t.data,o=t.tableStatistics,b=t.stateCode,u=t.districtName,m=t.regionHighlighted,N=t.setRegionHighlighted,C=t.expandTable,H=t.getTableStatistic,k=Object(r.useState)(!1),w=Object(a.a)(k,2),A=w[0],D=w[1],F=Object(T.a)("districtSortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),z=Object(a.a)(F,2),R=z[0],_=z[1],E=Object(S.g)(),M=Object(x.a)().t,y=Object(r.useRef)(),I=Object(r.useCallback)((function(t){R.sortColumn!==t?_(Object(O.a)(R,(function(e){"districtName"!==R.sortColumn&&"districtName"!==t||(e.isAscending=!R.isAscending),e.sortColumn=t}))):_(Object(O.a)(R,(function(t){t.isAscending=!R.isAscending})))}),[R,_]),J=Object(r.useCallback)((function(t,e){if("districtName"!==R.sortColumn){var i=s.x[R.sortColumn],a=R.delta&&(null===i||void 0===i?void 0:i.showDelta)?"delta":"total",c=H(n.districts[t],R.sortColumn,a),d=H(n.districts[e],R.sortColumn,a);return R.isAscending?c-d:d-c}return R.isAscending?t.localeCompare(e):e.localeCompare(t)}),[R,n,H]),U=Object(r.useCallback)((function(){b?m.stateCode!==b&&N(Object(O.a)(m,(function(t){t.stateCode=b,t.districtName=null}))):u&&(m.districtName===u&&m.stateCode===n.stateCode||N(Object(O.a)(m,(function(t){t.stateCode=n.stateCode,t.districtName=u}))))}),[n.stateCode,u,m,N,b]),V=Object(r.useCallback)((function(){n.districts&&D(!A)}),[A,n]),q=M(u);u===s.F&&(q="".concat(M(s.F)," [").concat(M(s.w[n.stateCode]),"]"));var B=Object(r.useCallback)((function(t){E.push("state/".concat(t))}),[E]),G=Object(r.useCallback)((function(){D(!1),y.current.scrollIntoView({block:"start"})}),[]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:l()("row",{"is-total":"TT"===b},{"is-highlighted":b&&(null===m||void 0===m?void 0:m.stateCode)===b||u&&(null===m||void 0===m?void 0:m.districtName)===u&&(null===m||void 0===m?void 0:m.stateCode)===n.stateCode}),onMouseEnter:U,onClick:V,ref:y,children:[Object(j.jsxs)("div",{className:"cell",children:[Object(j.jsx)("div",{className:"state-name fadeInUp",children:M(s.w[b])||q}),(null===n||void 0===n||null===(e=n.meta)||void 0===e?void 0:e.notes)&&Object(j.jsx)(h.a,{message:n.meta.notes,children:Object(j.jsx)(v.o,{size:16})})]}),o.map((function(t){return Object(j.jsx)(g,{data:n,statistic:t,getTableStatistic:H},t)}))]}),A&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"state-meta",children:[Object(j.jsxs)("div",{className:"state-meta-top",children:[(null===n||void 0===n||null===(i=n.meta)||void 0===i?void 0:i.last_updated)&&Object(j.jsxs)("p",{className:"last-updated",children:[Object(j.jsx)(v.g,{}),Object(c.a)("".concat(Object(c.d)(n.meta.last_updated)," ").concat(M("ago")))]}),Object(j.jsxs)("div",{className:"state-page",onClick:B.bind(this,b),children:[Object(j.jsx)(v.l,{}),Object(j.jsx)("span",{children:M("See more details on {{state}}",{state:b})})]})]}),n.districts&&s.F in n.districts&&Object(j.jsx)("div",{className:"state-meta-bottom",children:Object(j.jsxs)("div",{className:l()("disclaimer"),children:[Object(j.jsx)(v.a,{}),Object(j.jsx)("span",{children:M("District-wise data not available in state bulletin")})]})})]}),Object(j.jsxs)("div",{className:l()("row","heading"),children:[Object(j.jsxs)("div",{className:"cell heading",onClick:I.bind(this,"districtName"),children:[Object(j.jsx)("div",{className:"district-name",children:M("District")}),"districtName"===R.sortColumn&&Object(j.jsx)("div",{className:"sort-icon",children:R.isAscending?Object(j.jsx)(v.x,{size:12}):Object(j.jsx)(v.y,{size:12})})]}),o.map((function(t){return Object(j.jsx)(p.a,{statistic:t,sortData:R,setSortData:_,handleSort:I.bind(d,t)},t)}))]})]}),A&&Object.keys(n.districts||{}).sort((function(t,e){return J(t,e)})).map((function(t){return Object(j.jsx)(f,{data:n.districts[t],tableStatistics:o,districtName:t,regionHighlighted:m,setRegionHighlighted:N,stateCode:b,expandTable:C,getTableStatistic:H},t)})),A&&Object(j.jsx)("div",{className:"spacer-row",children:Object(j.jsxs)("div",{className:"spacer",children:[Object(j.jsx)("p",{children:"End of ".concat(M(s.w[b]),"'s districts")}),Object(j.jsx)("div",{className:"fold",onClick:G,children:Object(j.jsx)(v.k,{})})]})})]})}var k=function(t,e){var i,a,s,c;return!!o()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!o()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(c=e.data)||void 0===c?void 0:c.delta)&&(!(!o()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&o()(t.regionHighlighted.stateCode,t.stateCode)||o()(e.regionHighlighted.stateCode,e.stateCode))&&(!(!o()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&o()(t.regionHighlighted.districtName,t.districtName)||o()(e.regionHighlighted.districtName,e.districtName))&&(!!o()(t.expandTable,e.expandTable)&&(!!o()(t.getTableStatistic,e.getTableStatistic)&&!!o()(t.tableStatistics,e.tableStatistics))))))};e.default=Object(r.memo)(H,k)}}]);
//# sourceMappingURL=44.230d9a41.chunk.js.map