(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[43],{281:function(t,e,i){"use strict";i.r(e);var a=i(82),s=i(7),d=i(22),c=i(85),l=i.n(c),n=i(84),o=i.n(n),r=i(2),j=i(89),b=i(18),u=function(t){var e,i=t.statistic,a=t.data,c=t.isPerLakh,n=t.lastUpdated,o=Object(d.i)(a,i,{expiredDate:n,normalizedByPopulationPer:c?"lakh":null}),r=o.total,u=o.delta,h=Object(j.useSpring)({total:r,delta:u,config:s.s}),m=s.w[i];return Object(b.jsxs)("div",{className:"cell statistic",children:[(null===m||void 0===m||null===(e=m.tableConfig)||void 0===e?void 0:e.showDelta)&&Object(b.jsx)(j.animated.div,{className:l()("delta","is-".concat(i)),title:u,children:h.delta.to((function(t){return t>0?"\u2191"+Object(d.e)(t,m.format):t<0?"\u2193"+Object(d.e)(Math.abs(t),m.format):""}))}),Object(b.jsx)(j.animated.div,{className:"total",title:r,children:h.total.to((function(t){return Object(d.e)(t,m.format,i)}))})]})},h=function(t,e){var i,a,s,d;return!!o()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!o()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(d=e.data)||void 0===d?void 0:d.delta)&&!!o()(t.isPerLakh,e.isPerLakh))},m=Object(r.memo)(u,h),v=i(113),g=i(90),O=i(94),x=i(285);function N(t){var e,i=t.stateCode,a=t.districtName,s=t.data,d=t.tableStatistics,c=t.isPerLakh,n=t.regionHighlighted,o=t.setRegionHighlighted,j=(t.expandTable,t.lastUpdated),u=Object(x.a)().t,h=Object(r.useCallback)((function(){n.districtName!==a&&o(Object(O.a)(n,(function(t){t.stateCode=i,t.districtName=a})))}),[n,a,o,i]);return Object(b.jsxs)("div",{className:l()("row","district",{"is-highlighted":(null===n||void 0===n?void 0:n.districtName)===a}),onMouseEnter:h,children:[Object(b.jsxs)("div",{className:"cell",children:[Object(b.jsx)("div",{className:"state-name",children:u(a)}),(null===s||void 0===s||null===(e=s.meta)||void 0===e?void 0:e.notes)&&Object(b.jsx)(v.a,{data:s.meta.notes,children:Object(b.jsx)(g.m,{size:16})})]}),d.map((function(t){return Object(b.jsx)(m,{statistic:t,data:s,isPerLakh:c,lastUpdated:j},t)}))]})}var p=function(t,e){var i,a,s,d,c,l;return!!o()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!o()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(d=e.data)||void 0===d?void 0:d.delta)&&(!!o()(null===(c=t.data)||void 0===c?void 0:c.last_updated,null===(l=e.data)||void 0===l?void 0:l.last_updated)&&(!!o()(t.isPerLakh,e.isPerLakh)&&(!(!o()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(o()(t.regionHighlighted.districtName,t.districtName)||o()(e.regionHighlighted.districtName,e.districtName)))&&(!!o()(t.expandTable,e.expandTable)&&!!o()(t.tableStatistics,e.tableStatistics))))))},C=Object(r.memo)(N,p),f=i(173),k=i(5),H=i(191);function P(t){var e,i,c=this,n=t.data,o=t.tableStatistics,j=t.stateCode,u=t.districtName,h=t.isPerLakh,N=t.regionHighlighted,p=t.setRegionHighlighted,P=t.expandTable,S=t.lastUpdated,w=Object(r.useState)(!1),L=Object(a.a)(w,2),D=L[0],T=L[1],U=Object(H.a)("districtSortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),z=Object(a.a)(U,2),A=z[0],E=z[1],y=Object(k.g)(),R=Object(x.a)().t,_=Object(r.useRef)(),B=Object(r.useCallback)((function(t){E(Object(O.a)(A,(function(e){e.isAscending=!A.isAscending,e.sortColumn=t})))}),[A,E]),M=Object(r.useCallback)((function(t,e){if("districtName"!==A.sortColumn){var i,a=s.w[A.sortColumn],c=A.delta&&(null===a||void 0===a||null===(i=a.tableConfig)||void 0===i?void 0:i.showDelta)?"delta":"total",l=Object(d.i)(n.districts[t],A.sortColumn,{expiredDate:S,normalizedByPopulationPer:h?"lakh":null})[c],o=Object(d.i)(n.districts[e],A.sortColumn,{expiredDate:S,normalizedByPopulationPer:h?"lakh":null},S)[c];return A.isAscending?l-o:o-l}return A.isAscending?t.localeCompare(e):e.localeCompare(t)}),[A,n,h,S]),F=Object(r.useCallback)((function(){j?N.stateCode!==j&&p(Object(O.a)(N,(function(t){t.stateCode=j,t.districtName=null}))):u&&(N.districtName===u&&N.stateCode===n.stateCode||p(Object(O.a)(N,(function(t){t.stateCode=n.stateCode,t.districtName=u}))))}),[n.stateCode,u,N,p,j]),I=Object(r.useCallback)((function(){n.districts&&T(!D)}),[D,n]),J=R(u);u===s.E&&(J="".concat(R(s.E)," [").concat(R(s.v[n.stateCode]),"]"));var V=Object(r.useCallback)((function(t){y.push("state/".concat(t))}),[y]),q=Object(r.useCallback)((function(){T(!1),_.current.scrollIntoView({block:"start"})}),[]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:l()("row",{"is-total":"TT"===j},{"is-highlighted":j&&(null===N||void 0===N?void 0:N.stateCode)===j||u&&(null===N||void 0===N?void 0:N.districtName)===u&&(null===N||void 0===N?void 0:N.stateCode)===n.stateCode}),onMouseEnter:F,onClick:I,ref:_,children:[Object(b.jsxs)("div",{className:"cell",children:[Object(b.jsx)("div",{className:"state-name fadeInUp",children:R(s.v[j])||J}),(null===n||void 0===n||null===(e=n.meta)||void 0===e?void 0:e.notes)&&Object(b.jsx)(v.a,{data:n.meta.notes,children:Object(b.jsx)(g.m,{size:16})})]}),o.map((function(t){return Object(b.jsx)(m,{data:n,statistic:t,isPerLakh:h,lastUpdated:S},t)}))]}),D&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"state-meta",children:[Object(b.jsxs)("div",{className:"state-meta-top",children:[(null===n||void 0===n||null===(i=n.meta)||void 0===i?void 0:i.last_updated)&&Object(b.jsxs)("p",{className:"last-updated",children:[Object(b.jsx)(g.e,{}),Object(d.a)("".concat(Object(d.d)(n.meta.last_updated)," ").concat(R("ago")))]}),Object(b.jsxs)("div",{className:"state-page",onClick:V.bind(this,j),children:[Object(b.jsx)(g.j,{}),Object(b.jsx)("span",{children:R("See more details on {{state}}",{state:j})})]})]}),n.districts&&s.E in n.districts&&Object(b.jsx)("div",{className:"state-meta-bottom",children:Object(b.jsxs)("div",{className:l()("disclaimer"),children:[Object(b.jsx)(g.a,{}),Object(b.jsx)("span",{children:R("District-wise data not available in state bulletin")})]})})]}),Object(b.jsxs)("div",{className:l()("row","heading"),children:[Object(b.jsxs)("div",{className:"cell heading",onClick:B.bind(this,"districtName"),children:[Object(b.jsx)("div",{className:"district-name",children:R("District")}),"districtName"===A.sortColumn&&Object(b.jsx)("div",{className:l()("sort-icon",{invert:!A.isAscending}),children:Object(b.jsx)(g.g,{size:10})})]}),o.map((function(t){return Object(b.jsx)(f.a,{statistic:t,sortData:A,setSortData:E,handleSort:B.bind(c,t)},t)}))]})]}),D&&Object.keys(n.districts||{}).sort((function(t,e){return M(t,e)})).map((function(t){return Object(b.jsx)(C,{data:n.districts[t],tableStatistics:o,districtName:t,regionHighlighted:N,setRegionHighlighted:p,stateCode:j,isPerLakh:h,expandTable:P,lastUpdated:S},t)})),D&&Object(b.jsx)("div",{className:"spacer-row",children:Object(b.jsxs)("div",{className:"spacer",children:[Object(b.jsx)("p",{children:"End of ".concat(R(s.v[j]),"'s districts")}),Object(b.jsx)("div",{className:"fold",onClick:q,children:Object(b.jsx)(g.i,{})})]})})]})}var S=function(t,e){var i,a,s,d;return!!o()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!o()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(d=e.data)||void 0===d?void 0:d.delta)&&(!!o()(t.isPerLakh,e.isPerLakh)&&(!(!o()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&o()(t.regionHighlighted.stateCode,t.stateCode)||o()(e.regionHighlighted.stateCode,e.stateCode))&&(!(!o()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&o()(t.regionHighlighted.districtName,t.districtName)||o()(e.regionHighlighted.districtName,e.districtName))&&(!!o()(t.expandTable,e.expandTable)&&!!o()(t.tableStatistics,e.tableStatistics))))))};e.default=Object(r.memo)(P,S)}}]);
//# sourceMappingURL=43.8cf27cbb.chunk.js.map