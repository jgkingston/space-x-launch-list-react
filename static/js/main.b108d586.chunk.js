(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(4),c=n.n(l),o=(n(11),n(2)),i=n(1),u=function(e){return e.json()},s=function(e){var t=function(e){return Object.keys(e).map(function(t){return t+"="+e[t]}).join("&")}(e);return fetch("https://api.spacexdata.com/v3/launches?".concat(t)).then(u)},m=(n(12),{limit:10,offset:0,order:"asc",sort:"flight_number"}),f=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(void 0),u=Object(i.a)(c,2),f=u[0],d=u[1],b=Object(a.useState)(m),h=Object(i.a)(b,2),p=h[0],E=h[1];function w(e){E(function(t){return Object(o.a)({},t,{offset:e})})}return Object(a.useEffect)(function(){s(p).then(function(e){l(e),e.length<10&&d(p.offset+e.length)})},[p.offset,p.order]),r.a.createElement("div",{style:{padding:16}},r.a.createElement("div",{style:{borderRadius:4,boxShadow:"0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",overflowY:"scroll"}},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"row-flight-number"},r.a.createElement("a",{className:"sort-by",onClick:function(){E(function(e){return Object(o.a)({},e,{order:"asc"===e.order?"desc":"asc"})})}},"Flight Number")),r.a.createElement("th",null,"Launch Year"),r.a.createElement("th",null,"Rocket Name"),r.a.createElement("th",{className:"row-details"},"Details"))),r.a.createElement("tbody",null,n.map(function(e){return r.a.createElement("tr",{key:e.flight_number,className:e.links.presskit?"clickable-row":void 0,"data-href":e.links.presskit,onClick:function(e){var t=e.currentTarget.getAttribute("data-href");t&&window.open(t)}},r.a.createElement("td",null,e.flight_number),r.a.createElement("td",null,e.launch_year),r.a.createElement("td",null,e.rocket.rocket_name),r.a.createElement("td",null,e.details))})),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:4},r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{disabled:p.offset<p.limit,onClick:function(){return w(p.offset-p.limit)}},"Previous"),r.a.createElement("button",{disabled:!!f&&p.offset>=f-p.limit,onClick:function(){return w(p.offset+p.limit)}},"Next"))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[5,1,2]]]);
//# sourceMappingURL=main.b108d586.chunk.js.map