!function(n){var e={};function t(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(r,i,function(e){return n[e]}.bind(null,i));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=5)}([function(n,e,t){var r=t(1);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(3)(r,i);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(2)(!1)).push([n.i,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0 auto;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  display: grid;\n}\n\n.wrapper {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-areas:\n  "input"\n  "slider"\n  "switch";\n  grid-template-rows: 1fr 4fr 1fr;\n  background-color: rgb(211, 211, 211);\n  overflow: hidden;\n  margin: 0 auto;\n}\n\n/* Input */\n\n.form {\n  grid-area: input;\n  width: 50%;\n  height: 100%;\n  margin: 0 auto;\n  justify-self: center;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.form input {\n  width: 100%;\n  height: 30px;\n  padding-left: 5%;\n  border-radius: 10px;\n  outline:none;\n  margin: 20px 0;\n}\n\n.form button {\n  width: 5%;\n  height: 30px;\n  z-index: 50;\n  position: absolute;\n  top: 20px;\n  left: 0;\n  cursor: pointer;\n  background-color: inherit;\n  border: 0;\n}\n\n.form-button-iconImg {\n  height: 20px;\n  width: 30px;\n}\n\n/* Slider */\n\nul.slider {\n  grid-area: slider;\n  list-style: none;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(15, 1fr);\n  grid-template-rows: 1fr;\n  position: relative;\n  overflow-y: hidden;\n  white-space: nowrap;\n  will-change: transform;\n  user-select: none;\n  cursor: pointer;\n  overflow-x: hidden;\n}\n\nul.slider li {\n  background-color: rgb(234, 236, 193);\n  width: 21vw;\n  height: 95%;\n  justify-self: center;\n  align-self: center;\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  display: inline-block;\n  margin: 2em 2em;\n  transition: 1s;\n  transform: scale(0.98);\n}\n\nul.slider li:hover {\n  translate: translate(35px, 15px);\n  box-shadow: 10px 0 -10px gray;\n  background-color: rgb(70, 70, 70);\n  transform: scale(1.02);\n}\n\nul.slider li:nth-child(n+5) {\n  display: none;\n}\n\n.clipImg {\n  position: absolute;\n  height: 40%;\n  width: 100%;\n}\n\nul.slider a {\n  position: absolute;\n  display: grid;\n  width: 100%;\n  height: 10%;\n  top: 20%;\n  background-color: rgb(207, 218, 179);\n  opacity: 0.8;\n  justify-content: center;\n  z-index: 50;\n  text-decoration: none\n}\n\nul.slider a h4 {\n  color: black;\n  display: grid;\n  align-self: center;\n}\n\n.authorContainer {\n  position: absolute;\n  width: 100%;\n  height: 10%;\n  top: 45%;\n  justify-content: center;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 1fr;\n}\n\nimg.authorImg {\n  position: relative;\n  width: 100%;\n  height: 70%;\n  padding: 0 40%;\n}\n\n.authorText {\n  width: 100%;\n  padding-left: 18%;\n  font-weight: bold;\n}\n\n.uploadDateContainer {\n  position: absolute;\n  width: 100%;\n  height: 10%;\n  top:55%;\n  justify-content: center;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n}\n\nimg.uploadDateIcon {\n  position: relative;\n  width: 100%;\n  height: 60%;\n  padding: 0 30%;\n}\n\n.uploadDateText {\n  width: 100%;\n  padding-left: 20%;\n}\n\n.viewCountContainer {\n  position: absolute;\n  width: 100%;\n  height: 10%;\n  top: 65%;\n  justify-content: center;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n}\n\nimg.viewCountIcon {\n  position: relative;\n  width: 100%;\n  height: 40%;\n  padding: 0 30%;\n}\n\n.viewCountText {\n  width: 100%;\n  padding-left: 20%;\n}\n\n.description {\n  position: absolute;\n  display: grid;\n  width: 100%;\n  height: 30%;\n  top: 75%;\n  text-align: center;\n  font-size: 12px;\n}\n\n.emptyResponse {\n  position: absolute;\n  z-index: 200;\n  display: grid;\n  width: 100%;\n  height: 40%;\n  background-color: rgb(94, 94, 94);\n  justify-content: center;\n  align-content: center;\n  font-size: 50px;\n  top: 30%;\n  bottom: 70%;\n  display: none;\n}\n\n/* Switch */\n\n.switch {\n  grid-area: switch;\n  width: 10%;\n  height: 100%;\n  margin: 0 auto;\n  list-style: none;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  display: none;\n}\n\n.switch-Button {\n  width: 25px;\n  height: 25px;\n  background-color: rgb(78, 74, 33);\n  border-radius: 50%;\n  align-self: center;\n  margin: 0 auto;\n  color: white;\n}\n\n.count-Page {\n  display: grid;\n  justify-content: center;\n  align-content: center;\n}\n\n.two-Step-Back {\n  display: none;\n}\n.one-Step-Back {\n  display: none;\n}\n\n/* 1400px */\n@media (max-width: 1440px) {\n\n  ul.slider {\n    grid-template-columns: repeat(3 if);\n    grid-template-rows: 1fr;\n  }\n  ul.slider li {\n    width: 30vw;\n  }\n  ul.slider li:nth-child(4) {\n    display: none;\n  }\n\n}\n\n/* 1024px */\n\n@media (max-width: 1024px) {\n  .wrapper {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 160px 3fr 1fr;\n  }\n\n  .form {\n    width: 70%;\n  }\n\n  .form input {\n  width: 100%;\n  height: 80px;\n  padding-left: 12%;\n  border-radius: 20px;\n  font-size: 36px;\n  font-weight: bold;\n  margin: 40px 0;\n  }\n\n  .form button {\n    width: 60px;\n    height: 60px;\n    top: 50px;\n    left: 0;\n  }\n\n  .form-button-iconImg {\n    height: 50px;\n    width: 60px;\n  }\n\n  ul.slider {\n    grid-template-columns: 1fr;\n  }\n  ul.slider li {\n    font-size: 30px;\n    width: 95%;\n  }\n\n  ul.slider li .description {\n    font-size: 26px;\n  }\n\n  ul.slider li:nth-child(3),\n  ul.slider li:nth-child(2) {\n    display: none;\n  }\n  .switch {\n    width: 70%;\n    margin: 0 auto;\n    margin-bottom: 90px;\n    box-sizing: border-box;\n  }\n\n  .switch-Button {\n    width: 85px;\n    height: 85px;\n  }\n\n  .count-Page {\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    font-size: 40px;\n  }\n\n}\n\n\n',""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var i=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(o).concat([i]).join("\n")}var s;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<n.length;i++){var s=n[i];null!=s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),e.push(s))}},e}},function(n,e,t){var r,i,o={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),a=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),l=null,c=0,d=[],u=t(4);function p(n,e){for(var t=0;t<n.length;t++){var r=n[t],i=o[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(b(r.parts[s],e))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(b(r.parts[s],e));o[r.id]={id:r.id,refs:1,parts:a}}}}function f(n,e){for(var t=[],r={},i=0;i<n.length;i++){var o=n[i],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):t.push(r[s]={id:s,parts:[a]})}return t}function h(n,e){var t=a(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),d.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(n.insertAt.before,t);t.insertBefore(e,i)}}function m(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=d.indexOf(n);e>=0&&d.splice(e,1)}function y(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return t.nc}();r&&(n.attrs.nonce=r)}return g(e,n.attrs),h(n,e),e}function g(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function b(n,e){var t,r,i,o;if(e.transform&&n.css){if(!(o="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=o}if(e.singleton){var s=c++;t=l||(l=y(e)),r=x.bind(null,t,s,!1),i=x.bind(null,t,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",g(e,n.attrs),h(n,e),e}(e),r=function(n,e,t){var r=t.css,i=t.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=u(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,t,e),i=function(){m(t),t.href&&URL.revokeObjectURL(t.href)}):(t=y(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){m(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else i()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=f(n,e);return p(t,e),function(n){for(var r=[],i=0;i<t.length;i++){var s=t[i];(a=o[s.id]).refs--,r.push(a)}n&&p(f(n,e),e);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete o[a.id]}}}};var v,w=(v=[],function(n,e){return v[n]=e,v.filter(Boolean).join("\n")});function x(n,e,t,r){var i=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=w(e,i);else{var o=document.createTextNode(i),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(o,s[e]):n.appendChild(o)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var i,o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(n,e,t){"use strict";t.r(e);class r{constructor(){this.observers=[]}subscribe(n){this.observers.push(n)}unsubscribe(n){this.observers=this.observers.filter(e=>e!==n)}notify(n){this.observers.forEach(e=>e(n))}}function i(n){const{snippet:e}=n,t=document.createElement("li"),r=function(n){const e=document.createElement("img");return e.className="clipImg",e.setAttribute("src",n),e.setAttribute("alt","img"),e}(e.thumbnails.high.url);t.appendChild(r);const i=function(n){const e=document.createElement("a");return e.setAttribute("href",`https://www.youtube.com/watch?v=${n}`),e}(n.id.videoId);t.appendChild(i);const o=function(n){const e=document.createElement("h4");return e.innerHTML=n,e}(e.title);i.appendChild(o);const s=function(){const n=document.createElement("div");return n.className="authorContainer",n}();t.appendChild(s);const a=function(){const n=document.createElement("img");return n.className="authorImg",n.setAttribute("src","src/icon/author.png"),n.setAttribute("alt","img"),n}(e.channelTitle);s.appendChild(a);const l=function(n){const e=document.createElement("p");return e.innerHTML=n,e.className="authorText",e}(e.channelTitle);s.appendChild(l);const c=function(){const n=document.createElement("div");return n.className="uploadDateContainer",n}();t.appendChild(c);const d=function(){const n=document.createElement("img");return n.className="uploadDateIcon",n.setAttribute("src","src/icon/calendar.png"),n.setAttribute("alt","img"),n}();c.appendChild(d);const u=function(n){const e=document.createElement("p"),t=new Date(n);return e.innerHTML=`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`,e.className="uploadDateText",e}(e.publishedAt);c.appendChild(u);const p=function(){const n=document.createElement("div");return n.className="viewCountContainer",n}();t.appendChild(p);const f=function(){const n=document.createElement("img");return n.className="viewCountIcon",n.setAttribute("src","src/icon/views.png"),n.setAttribute("alt","img"),n}();p.appendChild(f);const h=function(){const n=document.createElement("p");return n.innerHTML="many views",n.className="viewCountText",n}();p.appendChild(h);const m=function(n){const e=document.createElement("p");return e.innerHTML=n,e.className="description",e}(e.description);return t.appendChild(m),t}const o=document.createElement("li");o.className="switch-Button two-Step-Back";var s=o;const a=document.createElement("li");a.className="switch-Button one-Step-Back";var l=a;const c=document.createElement("li");c.className="switch-Button count-Page";var d=c;const u=document.createElement("li");u.className="switch-Button one-Step-Front";var p=u;let f=1;function h(){f+=1}function m(){f-=1}function y(){d.innerHTML=f,1===f&&(s.style.display="none",l.style.display="none"),2===f&&(s.style.display="none",l.style.display="block"),f>2&&(s.style.display="block",l.style.display="block")}const g=document.createElement("ul");g.className="switch",g.appendChild(s),g.appendChild(l),g.appendChild(d),g.appendChild(p),d.innerHTML=f;const b=document.createElement("div");b.setAttribute("id","emptyResponse"),b.className="emptyResponse",b.innerHTML="There are not clips more. Please, restart your browser and repeat request!";var v=b;t(0);var w=class{constructor({searchQueryObserver:n,handleSubmit:e}){this.searchQueryObserver=n,this.handleSubmit=e,this.renderList=function(){let n;return(e=[])=>{const t=document.getElementById("wrapper");if(n)for(let e=n.children.length-1;e>=0;e-=1)n.removeChild(n.children[e]);else(n=document.createElement("ul")).className="slider",n.setAttribute("id","slider");e.map(i).forEach(e=>{n.appendChild(e)}),t.appendChild(n),t.appendChild(v),t.appendChild(g)}}()}render(n){const e=document.createElement("div");e.setAttribute("class","wrapper"),e.setAttribute("id","wrapper"),document.body.appendChild(e);const t=function({id:n,searchQueryObserver:e,handleSubmit:t=(()=>{})}){const r=document.createElement("form");r.setAttribute("class","form"),r.setAttribute("name","form"),r.setAttribute("id","form");const i=document.createElement("button");i.setAttribute("type","submit"),i.setAttribute("id","button"),r.appendChild(i);const o=document.createElement("i");o.className="fas fa-search",i.appendChild(o);const s=document.createElement("img");s.setAttribute("src","src/icon/search-solid.png"),s.setAttribute("class","form-button-iconImg"),i.appendChild(s);const a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("value",""),a.setAttribute("id","input"),r.appendChild(a),r.querySelector("input").addEventListener("input",n=>e.notify(n.target.value)),r.querySelector("button").addEventListener("click",t);const l=document.getElementsByClassName("wrapper");return 2===l.length&&document.body.removeChild(l[1]),r}({id:"search",searchQueryObserver:this.searchQueryObserver,handleSubmit:this.handleSubmit});n?this.renderList(n):(e.appendChild(t),this.renderList())}};(new class{constructor(n={items:[],searchQuery:"",newUrl:""}){this.state=n}start(){const n="AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y",e=15;let t="";const o=`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${n}&maxResults=${e}&order=viewCount&pageToken=${t}&q=${this.state.searchQuery}`,a=new r;let c;const u=this;a.subscribe(async n=>{this.state={...this.state,searchQuery:n}}),(c=new w({searchQueryObserver:a,handleSubmit:async n=>{n.preventDefault();try{f=1,g.style.display="grid",l.style.display="none",s.style.display="none",d.innerHTML=f;const n=await fetch(`${o}${encodeURIComponent(this.state.searchQuery)}`),e=await n.json();e.items.length||(b.style.display="none",x.style.display="grid"),t=`${e.nextPageToken}`,this.state.items=e.items,c.render(this.state.items)}catch(n){console.log(n)}}})).render();const b=document.getElementById("slider"),v=b.getElementsByTagName("li"),x=document.getElementById("emptyResponse");function C(){const n=window,e=document,t=e.documentElement,r=e.getElementsByTagName("body")[0];return n.innerWidth||t.clientWidth||r.clientWidth}function E(){if(v.length-(4*f-1)<21&&(async()=>{u.state.newUrl=`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${n}&maxResults=${e}&order=viewCount&pageToken=${t}&q=${u.state.searchQuery}`;const r=await fetch(`${u.state.newUrl}${encodeURIComponent(u.state.searchQuery)}`),o=await r.json();o.items.length||(b.style.display="none",x.style.display="grid"),t=`${o.nextPageToken}`,u.state.items=o.items,u.state.items.map(i).forEach(n=>{if(b.appendChild(n),C()>1440){for(let n=4*f;n<v.length;n+=1)v[n].style.display="none";if(C()<=1440&&C()>1024)for(let n=3*f;n<v.length;n+=1)v[n].style.display="none";if(C()<=1024)for(let n=f;n<v.length;n+=1)v[n].style.display="none"}})})(),C()>1440){for(let n=0;n<v.length;n+=1)v[n].style.display="none";for(let n=4*f-1;n>4*f-5;n-=1)v[n].style.display="block"}if(C()<=1440&&C()>1024){for(let n=0;n<v.length;n+=1)v[n].style.display="none";for(let n=3*f-1;n>3*f-4;n-=1)v[n].style.display="block"}if(C()<=1024){for(let n=0;n<v.length;n+=1)v[n].style.display="none";v[f-1].style.display="block"}}s.addEventListener("click",()=>{m(),m(),y(),E()}),l.addEventListener("click",()=>{m(),y(),E()}),p.addEventListener("click",()=>{h(),y(),E()});let L,k,A=!1,T=!1,j=!1;b.addEventListener("mousedown",n=>{if(A=!0,L=n.pageX-b.offsetLeft,k=b.scrollLeft,C()>1440){b.style.width="1800px";for(let n=4*f-1;n<4*f+4;n+=1)v[n].style.display="block"}if(C()<=1440&&C()>1024){b.style.width="1300px";for(let n=3*f;n<3*f+3;n+=1)v[n].style.display="block"}C()<=1024&&(b.style.width="850px")}),b.addEventListener("mouseleave",()=>{A=!1}),b.addEventListener("mouseup",()=>{if(A=!1,T&&(h(),T=!1,E()),j&&(m(),j=!1),C()>1440){for(let n=0;n<v.length;n+=1)v[n].style.display="none";for(let n=4*f-1;n>4*f-5;n-=1)v[n].style.display="block"}if(C()<=1440&&C()>1024){for(let n=0;n<v.length;n+=1)v[n].style.display="none";for(let n=3*f-1;n>3*f-4;n-=1)v[n].style.display="block"}if(C()<=1024){for(let n=0;n<v.length;n+=1)v[n].style.display="none";v[f-1].style.display="block"}b.style.width="100%",d.innerHTML=f,y()}),b.addEventListener("mousemove",n=>{if(!A)return;n.preventDefault();const e=4*(n.pageX-b.offsetLeft-L);if(b.scrollLeft=k-e,e<-750&&(T=!0),e>750&&f>1&&(j=!0),T&&C()>1440)for(let n=f-1;n<4*f;n+=1)v[n].style.display="none";if(T&&C()<=1440&&C()>1024)for(let n=f-1;n<3*f;n+=1)v[n].style.display="none";T||j||(e<-500&&(T=!0),e>500&&f>1&&(j=!0),T&&C()<=1024&&(v[f-1].style.display="none",v[f].style.display="block"),j&&C()<=1024&&(v[f-2].style.display="block",v[f-1].style.display="none"))})}}).start()}]);
//# sourceMappingURL=app.bundle.js.map