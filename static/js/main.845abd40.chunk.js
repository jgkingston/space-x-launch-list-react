(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),l=n.n(c),o=(n(11),n(2)),i=n(1),u=function(e){return e.json()},s=function(e){var t=function(e){return Object.keys(e).map(function(t){return t+"="+e[t]}).join("&")}(e);return fetch("https://api.spacexdata.com/v3/launches?".concat(t)).then(u)},m=(n(12),{limit:10,offset:0,order:"asc",sort:"flight_number"}),f=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),u=Object(i.a)(l,2),f=u[0],d=u[1],b=Object(a.useState)(void 0),h=Object(i.a)(b,2),E=h[0],g=h[1],p=Object(a.useState)(m),k=Object(i.a)(p,2),w=k[0],j=k[1];function v(e){j(function(t){return Object(o.a)({},t,{offset:e})})}return Object(a.useEffect)(function(){d(!0),s(w).then(function(e){c(e),d(!1),e.length<10&&g(w.offset+e.length)})},[w.offset,w.order]),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{style:{backgroundColor:"#0b0b0b",padding:16}},r.a.createElement("a",{href:"https://www.spacex.com/",target:"_blank"},r.a.createElement("img",{src:"./spacex_logo_white.png"}))),r.a.createElement("main",{style:{backgroundColor:"#eee",padding:16}},r.a.createElement("h1",{style:{fontSize:30,fontWeight:500,textTransform:"uppercase"}},"Launches"),r.a.createElement("div",{style:{boxShadow:"0 2px 5px 0 rgba(0,0,0,0.25",backgroundColor:"#FFF"}},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"row-flight-number"},r.a.createElement("a",{className:"sort-by",onClick:function(){j(function(e){return Object(o.a)({},e,{order:"asc"===e.order?"desc":"asc"})})}},"Flight Number")),r.a.createElement("th",null,"Launch Year"),r.a.createElement("th",null,"Rocket Name"),r.a.createElement("th",{className:"row-details"},"Details"))),r.a.createElement("tbody",null,n.map(function(e){return r.a.createElement("tr",{key:e.flight_number,className:e.links.presskit?"clickable-row":void 0,"data-href":e.links.presskit,onClick:function(e){var t=e.currentTarget.getAttribute("data-href");t&&window.open(t)}},r.a.createElement("td",null,e.flight_number),r.a.createElement("td",null,e.launch_year),r.a.createElement("td",null,e.rocket.rocket_name),r.a.createElement("td",null,e.details))})),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:4},r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{disabled:f||w.offset<w.limit,onClick:function(){return v(w.offset-w.limit)}},"Previous"),r.a.createElement("button",{disabled:f||!!E&&w.offset>=E-w.limit,onClick:function(){return v(w.offset+w.limit)}},"Next")))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[5,1,2]]]);
//# sourceMappingURL=main.845abd40.chunk.js.map