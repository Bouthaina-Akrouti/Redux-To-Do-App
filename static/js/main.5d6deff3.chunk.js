(this["webpackJsonpto-do-app-redux"]=this["webpackJsonpto-do-app-redux"]||[]).push([[0],{18:function(e,t,n){e.exports=n(30)},23:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(5),c=n.n(o),i=(n(23),n(4)),l=(n(29),n(6)),s=n(12),u=n(13),p=n(16),m=n(14),d=n(17);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){n.setState({saisi:e.target.value})},n.add=function(){n.props.newItem(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n.state,{id:Math.round(1e3*Math.random()),completed:!1}))},n.state={saisi:""},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"nav"},a.a.createElement("h1",{className:"title"},"TO-DO-APP"),a.a.createElement("h6",{className:"add"},a.a.createElement("strong",null,"Add New To-Do")),a.a.createElement("input",{type:"text",className:"input",placeholder:"Enter new item",onChange:this.handleChange}),a.a.createElement("button",{className:"btn-add",onClick:this.add},"Add"))}}]),t}(r.Component),E=Object(i.b)(null,(function(e){return{newItem:function(t){return e({type:"ADD_ITEM",payload:t})}}}))(f);var b=Object(i.b)((function(e){return{items:e.item}}),(function(e){return{delete:function(t){return e(function(e){return{type:"DELETE_ITEM",payload:e}}(t))},complete:function(t){return e(function(e){return{type:"COMPLETED_ITEM",payload:e}}(t))}}}))((function(e){return a.a.createElement("div",{className:"App"},a.a.createElement(E,null),e.items.map((function(t){return a.a.createElement("div",{key:t.id,style:{display:"flex",alignItems:"center"},className:"items"},a.a.createElement("button",{onClick:function(){return e.complete(t.id)},className:"btn-complete"},t.completed?"UNDO":"COMPLETED"),a.a.createElement("img",{className:"img",src:"https://img.icons8.com/material/50/000000/trash.png",onClick:function(){return e.delete(t.id)}}),a.a.createElement("h2",{style:{textDecoration:t.completed?"line-through":"none"},className:"item"},t.saisi))})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=n(3),y=n(15);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=[],v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":return[].concat(Object(y.a)(e),[t.payload]);case"DELETE_ITEM":return e.filter((function(e){return e.id!==t.payload}));case"COMPLETED_ITEM":return e.map((function(e){return e.id===t.payload?j({},e,{completed:!e.completed}):e}));default:return e}},D=Object(h.b)({item:v}),P=Object(h.c)(D,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(a.a.createElement(i.a,{store:P},a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.5d6deff3.chunk.js.map