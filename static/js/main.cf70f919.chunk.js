(this["webpackJsonpsorting-algorithms-examples"]=this["webpackJsonpsorting-algorithms-examples"]||[]).push([[0],{37:function(e,n,t){e.exports=t(82)},81:function(e,n,t){},82:function(e,n,t){"use strict";t.r(n);var a=t(0),s=t.n(a),r=t(7),l=t.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(1),o=t(15),u=t(8),c=function(){function e(){return Math.random().toString(16).slice(-4)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},g=function(e,n,t,a,s){var r=e.slice(n,t+1).concat({value:Number.MAX_VALUE}),l=e.slice(t+1,a+1).concat({value:Number.MAX_VALUE});s.push({classes:"sorting--selected",index:n,merging:!0,mergignValue:null,multiple:!0,toIndex:t+1}),s.push({classes:"sorting--selected-right",index:t+1,merging:!0,mergignValue:null,multiple:!0,toIndex:a+1});for(var i=0,o=0,u=n;u<=a;u++)r[i].value<=l[o].value?(s.push({index:i+n,classes:"sorting--smallest"}),s.push({index:u,mergingValue:r[i].value}),e[u]=r[i],i++):(s.push({index:o+t+1,classes:"sorting--smallest"}),s.push({index:u,mergingValue:l[o].value}),e[u]=l[o],o++);return s.push({classes:"",index:n,merging:!1,multiple:!0,toIndex:a+1}),s},m=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.length-1,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(!(t>=a)){var r=Math.floor((t+a)/2);return e(n,t,r,s),e(n,r+1,a,s),g(n,t,r,a,s)}},d=function(e,n,t,a){a.push({index:n,toIndex:t+1,multiple:!0,classes:"sorting--selected"});for(var s=n,r=n;r<=t-1;r++)if(e[r].value<=e[t].value){a.push({index:s,toIndex:r,classes:"sorting--selected"});var l=e[s];e[s]=e[r],e[r]=l,s++}a.push({index:s,toIndex:t,classes:"sorting--selected"});var i=e[s];return e[s]=e[t],e[t]=i,a.push({index:n,toIndex:t+1,multiple:!0,classes:""}),s},h=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.length-1,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(!(t>=a)){var r=d(n,t,a,s);return e(n,t,r-1,s),e(n,r+1,a,s),s}},v=Object(a.createContext)([]),b=function(e){var n=Object(a.useState)([]),t=Object(i.a)(n,2),r=t[0],l=t[1],o=Object(a.useState)(10),g=Object(i.a)(o,2),d=g[0],b=g[1],p=Object(a.useState)(0),f=Object(i.a)(p,2),x=f[0],E=f[1],j=Object(a.useState)(99),O=Object(i.a)(j,2),N=O[0],S=O[1],C=Object(a.useState)(!1),w=Object(i.a)(C,2),y=w[0],k=w[1],I=Object(a.useState)(1),V=Object(i.a)(I,2),M=V[0],R=V[1],B=Object(a.useState)(!1),F=Object(i.a)(B,2),T=F[0],A=F[1];Object(a.useEffect)((function(){Q()}),[d,x,N]);var Q=function(){for(var e,n,t=[],a=0;a<d;a++)t.push({id:c(),value:(e=x,n=N,e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e),classes:"",merging:!1,mergignValue:null});l(t)},P=function(e){A(!0),e.forEach((function(e,n){var t=e.classes,a=e.index,s=e.toIndex,i=e.multiple,o=e.merging,c=e.mergingValue;setTimeout((function(){var e=Object(u.a)(r);if(i)for(var n=a;n<s;n++)e[n].merging=o,!1===o&&(e[n].value=e[n].mergingValue),e[n].mergingValue=c,e[n].classes=t;else if(o&&(e[a].merging=o),c&&(e[a].mergingValue=c),void 0!==t&&(e[a].classes=t),void 0!==s){var g=e[s].value;e[s].value=e[a].value,e[a].value=g}l(e)}),n*(500/M))})),setTimeout((function(){A(!1)}),e.length*(500/M))};return s.a.createElement(v.Provider,{value:{generateRandomNumbers:Q,handleInsertionSort:function(){var e=function(e){for(var n=[],t=1;t<e.length;t++){n.push({index:t-1,classes:""}),n.push({index:t,classes:"sorting--selected"});for(var a=e[t],s=t-1;s>=0&&e[s].value>a.value;)n.push({index:s+1,classes:"sorting--selected"}),n.push({index:s,classes:"sorting--checking"}),n.push({index:s,classes:"sorting--smallest"}),e[s+1]=e[s],n.push({index:s+1,classes:""}),n.push({index:s,toIndex:s+1,classes:""}),s--;n.push({index:s+1,classes:""}),e[s+1]=a}return n}(Object(u.a)(r));P(e)},handleMergeSort:function(){var e=Object(u.a)(r),n=m(e);P(n)},handleSelectionSort:function(){var e=function(e){for(var n=[],t=0;t<e.length-1;t++){t>0&&n.push({index:t-1,classes:""}),n.push({index:t,classes:"sorting--selected"});for(var a=t,s=t+1;s<e.length;s++)n.push({index:s,classes:"sorting--checking"}),e[s].value<e[a].value?(a!==t&&n.push({index:a,classes:""}),a=s,n.push({index:s,classes:"sorting--smallest"})):n.push({index:s,classes:""});a!==t&&n.push({index:a,toIndex:t,classes:""});var r=e[t];e[t]=e[a],e[a]=r}return n.push({index:e.length-2,classes:""}),n}(Object(u.a)(r));P(e)},handleQuicksort:function(){var e=Object(u.a)(r),n=h(e);P(n)},numbers:r,onChangeQuantity:function(e){var n=e.target;+n.value<2||""===n.value?b(2):+n.value>99?b(99):b(n.value)},onChangeRangeFrom:function(e){var n=e.target;+n.value<0||""===n.value?E(0):E(n.value)},onChangeRangeTo:function(e){var n=e.target;S(n.value)},onChangeSpeed:function(e){var n=e.target;R(n.value)},quantity:d,rangeFrom:x,rangeTo:N,setNumbers:l,setShowBars:k,showBars:y,speed:M,sorting:T}},e.children)},p=v,f=function(){var e=Object(a.useContext)(p);return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{onDragEnd:function(n){if(n.destination){var t=function(e,n,t){var a=Array.from(e),s=a.splice(n,1),r=Object(i.a)(s,1)[0];return a.splice(t,0,r),a}(e.numbers,n.source.index,n.destination.index);e.setNumbers(t)}}},s.a.createElement(o.c,{droppableId:"droppable",direction:"horizontal"},(function(n){return s.a.createElement("div",Object.assign({className:"numbers-container",ref:n.innerRef},n.droppableProps),e.numbers.map((function(n,t){return s.a.createElement(o.b,{key:n.id,draggableId:n.id,index:t},(function(t,a){return s.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{className:n.classes}),n.merging&&s.a.createElement("div",{className:"number number--merge-value"},n.mergingValue),s.a.createElement("div",{className:a.isDragging?"number number--dragging":"number"},n.value),e.showBars&&s.a.createElement("div",{className:a.isDragging?"number-bar number-bar--dragging":"number-bar",style:{height:"".concat(2*n.value,"px")}}))}))})),n.placeholder)}))))},x=function(){var e=Object(a.useContext)(p),n=e.generateRandomNumbers,t=e.handleInsertionSort,r=e.handleMergeSort,l=e.handleSelectionSort,i=e.handleQuicksort,o=e.setShowBars,u=e.showBars,c=e.sorting;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"buttons-container"},s.a.createElement("button",{className:"button",onClick:function(){return o(!u)}},u?"Hide":"Show"," bars"),s.a.createElement("button",{className:"button",onClick:n,disabled:c},"Generate random numbers")),s.a.createElement("div",{className:"buttons-container"},s.a.createElement("button",{className:"button",onClick:l,disabled:c},"Selection sort"),s.a.createElement("button",{className:"button",onClick:t,disabled:c},"Insertion sort"),s.a.createElement("button",{className:"button",onClick:r,disabled:c},"Merge sort"),s.a.createElement("button",{className:"button",onClick:i,disabled:c},"Quicksort")))},E=function(){var e=Object(a.useContext)(p);return s.a.createElement("div",{className:"buttons-container buttons-container--configuration"},s.a.createElement("div",null,"Sorting"),s.a.createElement("input",{className:"config-number",disabled:e.sorting,max:"99",min:"2",onChange:e.onChangeQuantity,step:"1",style:{width:"".concat(17*(""+e.quantity).length,"px")},type:"number",value:e.quantity}),s.a.createElement("div",null,"numbers from"),s.a.createElement("input",{className:"config-number",disabled:e.sorting,min:"0",onChange:e.onChangeRangeFrom,step:"1",style:{width:"".concat(17*(""+e.rangeFrom).length,"px")},type:"number",value:e.rangeFrom}),s.a.createElement("div",null,"to"),s.a.createElement("input",{className:"config-number",disabled:e.sorting,min:"0",onChange:e.onChangeRangeTo,step:"1",style:{width:"".concat(17*(""+e.rangeTo).length,"px")},type:"number",value:e.rangeTo}),s.a.createElement("div",null,"at"),s.a.createElement("input",{className:"config-number",disabled:e.sorting,min:"1",onChange:e.onChangeSpeed,step:"1",style:{width:"".concat(17*(""+e.speed).length,"px")},type:"number",value:e.speed}),s.a.createElement("div",null,"x speed."))},j=function(){return s.a.createElement(b,null,s.a.createElement("div",{className:"page-container"},s.a.createElement("h1",null,"Sorting Algorithms Examples"),s.a.createElement(E,null),s.a.createElement(f,null),s.a.createElement(x,null)))};t(81);l.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.cf70f919.chunk.js.map