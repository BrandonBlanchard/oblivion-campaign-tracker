(this.webpackJsonpoblivion=this.webpackJsonpoblivion||[]).push([[0],{136:function(e,t,r){},247:function(e,t,r){},248:function(e,t,r){},266:function(e,t,r){},269:function(e,t,r){},270:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(15),c=r.n(i),l=r(10),o=r(19),s=r.n(o),u=r(29),d=r(13),m=r.n(d),f=(r(136),r(23)),p=r(7),y=r(17),h=r(95),E=r.n(h),v="Guardian",g="Corruptor",w="both",b=[[{id:0,tier:0,win:[1],loss:[1],order:0,alliance:w,name:"Doomed Patrol",summary:"page #"},{id:1,tier:0,win:[2],loss:[2],order:1,alliance:w,name:"Rising Tensions",summary:"page #"},{id:2,tier:0,win:[3,4],loss:[3,4],order:2,alliance:w,name:"Border War",summary:"page #"}],[{id:3,tier:1,win:[5],loss:[6],order:0,alliance:v,name:"A War for Peace",summary:"page #"},{id:4,tier:1,win:[10],loss:[11],order:1,alliance:g,name:"Fueling the fire",summary:"page #"}],[{id:5,tier:2,win:[8],loss:[9],order:0,alliance:v,name:"Seeds of Hope",summary:"page #"},{id:6,tier:2,win:[9],loss:[7],order:1,alliance:v,name:"The Sanguine Trail",summary:"page #"},{id:10,tier:2,win:[12],loss:[13],order:1,alliance:g,name:"Reckless Assault",summary:"page #"},{id:11,tier:2,win:[13],loss:[14],order:0,alliance:g,name:"Burial at Sea",summary:"page #"}],[{id:7,tier:3,win:[666],loss:[666],order:2,alliance:v,name:"Dark Days",summary:"page #"},{id:8,tier:3,win:[666],loss:[666],order:0,alliance:v,name:"Toward the light",summary:"page #"},{id:9,tier:3,win:[666],loss:[666],order:1,alliance:v,name:"Left Behind",summary:"page #"},{id:12,tier:3,win:[666],loss:[666],order:2,alliance:g,name:"The End is Nigh",summary:"page #"},{id:13,tier:3,win:[666],loss:[666],order:1,alliance:g,name:"Clouded Visions",summary:"page #"},{id:14,tier:3,win:[666],loss:[666],order:0,alliance:g,name:"The Last Ride",summary:"page #"}],[{id:666,tier:4,win:[],loss:[],order:0,alliance:w,name:"Gateway to Oblivion",summary:"page 666"}]],k=b.reduce((function(e,t){return[].concat(Object(y.a)(e),Object(y.a)(t))})),O=E()(k,(function(e){return e.id})),x=function(e){var t=e.width,r=e.height,n=r/10,i=t/2,c=r/2;return a.a.createElement(a.a.Fragment,null,a.a.createElement(p.Layer,{name:"background-layer"},a.a.createElement(p.Circle,{x:i,y:n,radius:n,stroke:"#662423",strokeWidth:1}),a.a.createElement(p.Circle,{x:i,y:3*n,radius:n,stroke:"#662423",strokeWidth:1}),a.a.createElement(p.Circle,{x:i,y:5*n,radius:n,stroke:"#662423",strokeWidth:1}),a.a.createElement(p.Circle,{x:i,y:7*n,radius:n,stroke:"#662423",strokeWidth:1}),a.a.createElement(p.Circle,{x:i,y:9*n,radius:n,stroke:"#662423",strokeWidth:1}),a.a.createElement(p.RegularPolygon,{x:i,y:5*n,sides:3,radius:n,stroke:"#662423",strokeWidth:1,rotation:180}),a.a.createElement(p.Line,{points:[i,4.5*n,i,3.5*n],stroke:"#662423"}),a.a.createElement(p.Circle,{x:i,y:3.5*n,radius:10,stroke:"#662423",strokeWidth:1,fill:"#000"})),a.a.createElement(p.Layer,null,a.a.createElement(p.Circle,{x:i,y:c,radius:2*n,stroke:"#343434",strokeWidth:1}),a.a.createElement(p.Circle,{x:i,y:c-n/2,radius:3.5*n,stroke:"#343434",strokeWidth:1}),a.a.createElement(p.Circle,{x:i,y:-2*n,radius:6*n,stroke:"#343434",strokeWidth:1}),a.a.createElement(p.Circle,{x:i,y:12*n,radius:6*n,stroke:"#343434",strokeWidth:1}),a.a.createElement(p.RegularPolygon,{sides:4,radius:n,x:i,y:6*n,stroke:"#343434"})))},j=function(e){return{type:"SET_PLAYERS",players:e}},_=function(e){var t=e.id,r=e.tier,i=e.name,c=e.x,l=e.y,o=e.radius,s=e.dispatch,u=o-.5*o,d=o/16,m={x:-o,y:.8*-o};return Object(n.useEffect)((function(){s(function(e,t,r){return{type:"SET_NODE",id:e,x:t,y:r}}(t,c,l))}),[c,l,t]),a.a.createElement(p.Group,{x:c,y:l},a.a.createElement(p.Circle,{x:0,y:0,radius:o,stroke:"#fff",strokeWidth:1.5,fill:"#000"}),a.a.createElement(p.Text,{x:m.x,y:m.y,width:2*o,padding:8,text:i,align:"center",fill:"#fff",fontSize:.34*o,fontFamily:"Times New Roman"}),function(e,t,r,n){for(var i=2*n,c=[],l=t-i*e/2+n,o=0;o<e;o+=1){var s=l+o*(i+2);c.push(a.a.createElement(p.RegularPolygon,{key:"".concat(s,"-").concat(r),x:s,y:r,radius:n,sides:4,stroke:"#fff",fill:"#fff",strokeWidth:1}))}return c}(r,0,u,d))},S=function(e){var t=e.x,r=e.y,n=e.radius,i=e.nodes,c=e.dispatch;return i.map((function(e,i){var l=e.name,o=e.id,s=(e.summary,e.tier);return a.a.createElement(_,{key:o,id:o,x:t+0,y:2*(r+1.28*n)*i+n,radius:n,tier:s+1,name:l,dispatch:c})}))},W=r(96),L=r.n(W),T=function(e){var t=e.x,r=e.y,n=(e.tier,e.radius),i=e.nodes,c=e.width,l=e.height,o=e.dispatch,s=L()(i,["alliance","order"]),u=c/2,d=[t+-u,r+l/2],m=[t+u,r+l/2];return s.map((function(e,t,r){return function(e,t,r,n,i,c,l){var o=l.length>1?(c+1)/(l.length+1):.5,s=Math.min(e[0],t[0]),u=Math.max(e[0],t[0]),d=Math.min(e[1],e[1]),m=(u-s)*o+s,f=(Math.min(t[1],e[1])-d)*o+d;return a.a.createElement(_,{key:n.id,id:n.id,x:m,y:f,node:n.tier,name:n.name,radius:r,tier:n.tier+1,dispatch:i})}(m,d,n,e,o,t,r)}))},C=function(e){return e.playerData.all},D=function(e){return e.playerData.selected},N=function(e){var t=C(e),r=D(e);return m()(t.filter((function(e){return e.name===r})),[0],null)},P=function e(t,r,n,a){var i=1===t[a]?"win":"loss",c=a+1;if(a>=t.length)return null;var l=function(e,t,r){return m()(e,[t]).reduce((function(e,t){var n=O[t];return n.alliance===r||n.alliance===w?n:e}),null)}(n,i,r);if(null===l)return null;var o=e(t,r,l,c);return null!==o?[l].concat(Object(y.a)(o)):[l]},R=function(e){var t=e.nodePositionsMap,r=e.player,n=r.alliance,i=r.outcomes,c=n===v?"#ffd700":"#CC4441",l=b[0].filter((function(e){return 0===e.id}))[0],o=P(i,n,l,0);if(null===o)return a.a.createElement(a.a.Fragment,null);var s=[l].concat(Object(y.a)(o)).reduce((function(e,r){var n=m()(t,[r.id],null);if(!n)return e;var a=n.x,i=n.y;return e.push(a),e.push(i),e}),[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(p.Line,{points:s,stroke:"#000",strokeWidth:8}),a.a.createElement(p.Line,{points:s,stroke:c,strokeWidth:2}))},A=function(e){var t=Object(l.b)(),r=e.container,i=Object(l.c)((function(e){return e.nodeProperties.positions})),c=Object(l.c)(N),o=Object(n.useState)(0),s=Object(f.a)(o,2),u=s[0],d=s[1],m=Object(n.useState)(0),y=Object(f.a)(m,2),h=y[0],E=y[1],v=Object(n.useState)(0),g=Object(f.a)(v,2),w=g[0],k=g[1];Object(n.useEffect)((function(){var e=function(){return function(e,t,r,n){if(n.current){var a=n.current.clientWidth;e(a),t(1.223*a),r(a/25)}}(d,E,k,r)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);var O=h/5,j=b[0],_=b.slice(1,5);return r.current?a.a.createElement(p.Stage,{width:u,height:h+100},a.a.createElement(x,{width:u,height:h}),a.a.createElement(p.Layer,null,c&&a.a.createElement(R,{player:c,nodePositionsMap:i})),a.a.createElement(p.Layer,null,a.a.createElement(S,{nodes:j,x:u/2,y:0,radius:w,dispatch:t}),_.map((function(e,r){return a.a.createElement(T,{key:"tier_".concat(r),nodes:e,x:u/2,y:O*(r+1),radius:w,width:u,height:O,dispatch:t})})))):a.a.createElement(a.a.Fragment,null)},F=r(98),M=(r(247),function(e){var t=e.players,r=(e.selected,Object(l.b)()),n=(Object(l.c)(N),Object(l.c)(D)),i=function(e){return e.map((function(e){return{value:e,label:e.name}}))}(t),c=m()(i.filter((function(e){return e.label===n})),[0],null);return a.a.createElement("div",{className:"player-selector"},a.a.createElement(F.a,{options:i,onChange:function(e){r({type:"SET_SELECTED_PLAYER",player:e.label})},value:c}))}),B=(r(248),function(e){var t=e.count;return a.a.createElement("div",{className:"omen-draw"},a.a.createElement("div",{className:"omen-draw__label"},"Omen Draws"),a.a.createElement("div",{className:"omen-draw__count"},t))}),G=(r(249),function(){var e=Object(u.a)(s.a.mark((function e(t){var r,n,a,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new TextDecoder("utf8"),e.next=3,fetch(t);case 3:if((n=e.sent).ok){e.next=6;break}return e.abrupt("return",null);case 6:return a=n.body.getReader(),e.next=9,a.read();case 9:return i=e.sent,c=r.decode(i.value),e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),X=function(e){var t=e.split(","),r=t.slice(0,3),n=Object(f.a)(r,3),a=n[0],i=n[1],c=n[2],l=t.slice(2,t.length-1).map((function(e){return"0"===e?0:"1"===e?1:null})).filter((function(e){return null!==e}));return{name:a,alliance:i===v?v:g,cards:parseFloat(c),outcomes:l}},Y=function(e){var t=Object(l.b)(),r=Object(n.useRef)(null),i=Object(l.c)(C),c=Object(l.c)(D),o=Object(l.c)(N),d=m()(o,["cards"],0);return Object(n.useEffect)((function(){new Promise(function(){var e=Object(u.a)(s.a.mark((function e(r,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(){var e=Object(u.a)(s.a.mark((function e(t,r){var n,a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("https://docs.google.com/spreadsheets/d/e/2PACX-1vQtcua0U23LP0GMcFjvc6bF-0Y7paHNG8LWO4AqcMXkN0wH-rlnvQ5xtAo_GV_yGBdSMOAWYDXJK0BF/pub?output=csv");case 2:null===(n=e.sent)&&t([]),a=n.split("\n").slice(1),i=a.map(X),console.log(i),t(i);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}());case 2:a=e.sent,t(j(a)),r();case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}())}),[]),a.a.createElement("div",{className:"tracker-container"},a.a.createElement("div",{className:"player-selection-container"},a.a.createElement("div",null,i&&a.a.createElement(M,{players:i,selected:c})),a.a.createElement("div",null,o&&a.a.createElement(B,{count:d}))),a.a.createElement("div",{className:"tracker-container__campaign",ref:r},a.a.createElement(A,{container:r})))},V=(r(266),function(e){var t=Object(n.useRef)();return a.a.createElement("div",{className:"App",ref:t},a.a.createElement("header",{className:"App-header"}),a.a.createElement(Y,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=r(22),H=r(1),I=r(30),J=r.n(I),U={nodeProperties:{positions:{}},playerData:{selected:null,all:[]}},Q=function(e,t){var r={x:t.x,y:t.y,id:t.id},n=e.positions,a=J()({},n,Object(H.a)({},t.id,r));return J()({},e,{positions:a})},q=function(e,t){var r=t.players;return J()({},e,{all:r})},K=function(e,t){var r=t.player;return J()({},e,{selected:r})},$=Object(z.b)({nodeProperties:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U.nodeProperties,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NODE":return Q(e,t);default:return e}},playerData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U.playerData,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SELECTED_PLAYER":return K(e,t);case"SET_PLAYERS":return q(e,t);default:return e}}}),Z=Object(z.c)($,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r(269);c.a.render(a.a.createElement(l.a,{store:Z},a.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},99:function(e,t,r){e.exports=r(270)}},[[99,1,2]]]);
//# sourceMappingURL=main.22fbfe97.chunk.js.map