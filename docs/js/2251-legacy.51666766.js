(self["webpackChunk_onkz481_solo_ui_document"]=self["webpackChunk_onkz481_solo_ui_document"]||[]).push([[2251],{2251:function(e,n,t){var r="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(e){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,r={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof i?new i(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var r,i;switch(t=t||{},a.util.type(n)){case"Object":if(i=a.util.objId(n),t[i])return t[i];for(var o in r={},t[i]=r,n)n.hasOwnProperty(o)&&(r[o]=e(n[o],t));return r;case"Array":return i=a.util.objId(n),t[i]?t[i]:(r=[],t[i]=r,n.forEach((function(n,a){r[a]=e(n,t)})),r);default:return n}},getLanguage:function(e){for(;e;){var t=n.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(n,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var i=(r=r||a.languages)[e],o={};for(var l in i)if(i.hasOwnProperty(l)){if(l==n)for(var u in t)t.hasOwnProperty(u)&&(o[u]=t[u]);t.hasOwnProperty(l)||(o[l]=i[l])}var s=r[e];return r[e]=o,a.languages.DFS(a.languages,(function(n,t){t===s&&n!=e&&(this[n]=o)})),o},DFS:function e(n,t,r,i){i=i||{};var o=a.util.objId;for(var l in n)if(n.hasOwnProperty(l)){t.call(n,l,n[l],r||l);var u=n[l],s=a.util.type(u);"Object"!==s||i[o(u)]?"Array"!==s||i[o(u)]||(i[o(u)]=!0,e(u,t,l,i)):(i[o(u)]=!0,e(u,t,null,i))}}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,o=0;i=r.elements[o++];)a.highlightElement(i,!0===n,r.callback)},highlightElement:function(n,t,r){var i=a.util.getLanguage(n),o=a.languages[i];a.util.setLanguage(n,i);var l=n.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&a.util.setLanguage(l,i);var u={element:n,language:i,grammar:o,code:n.textContent};function s(e){u.highlightedCode=e,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a.hooks.run("after-highlight",u),a.hooks.run("complete",u),r&&r.call(u.element)}if(a.hooks.run("before-sanity-check",u),(l=u.element.parentElement)&&"pre"===l.nodeName.toLowerCase()&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!u.code)return a.hooks.run("complete",u),void(r&&r.call(u.element));if(a.hooks.run("before-highlight",u),u.grammar)if(t&&e.Worker){var c=new Worker(a.filename);c.onmessage=function(e){s(e.data)},c.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else s(a.highlight(u.code,u.grammar,u.language));else s(a.util.encode(u.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};if(a.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new u;return s(a,a.head,e),l(e,a,n,a.head,0),function(e){for(var n=[],t=e.head.next;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,i=0;r=t[i++];)r(n)}},Token:i};function i(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function o(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function l(e,n,t,r,u,g){for(var h in t)if(t.hasOwnProperty(h)&&t[h]){var f=t[h];f=Array.isArray(f)?f:[f];for(var d=0;d<f.length;++d){if(g&&g.cause==h+","+d)return;var p=f[d],v=p.inside,m=!!p.lookbehind,y=!!p.greedy,k=p.alias;if(y&&!p.pattern.global){var x=p.pattern.toString().match(/[imsuy]*$/)[0];p.pattern=RegExp(p.pattern.source,x+"g")}for(var b=p.pattern||p,w=r.next,A=u;w!==n.tail&&!(g&&A>=g.reach);A+=w.value.length,w=w.next){var E=w.value;if(n.length>e.length)return;if(!(E instanceof i)){var L,S=1;if(y){if(!(L=o(b,A,e,m))||L.index>=e.length)break;var _=L.index,O=L.index+L[0].length,P=A;for(P+=w.value.length;_>=P;)P+=(w=w.next).value.length;if(A=P-=w.value.length,w.value instanceof i)continue;for(var C=w;C!==n.tail&&(P<O||"string"==typeof C.value);C=C.next)S++,P+=C.value.length;S--,E=e.slice(A,P),L.index-=A}else if(!(L=o(b,0,E,m)))continue;_=L.index;var j=L[0],N=E.slice(0,_),z=E.slice(_+j.length),M=A+E.length;g&&M>g.reach&&(g.reach=M);var W=w.prev;if(N&&(W=s(n,W,N),A+=N.length),c(n,W,S),w=s(n,W,new i(h,v?a.tokenize(j,v):j,k,j)),z&&s(n,w,z),S>1){var I={cause:h+","+d,reach:M};l(e,n,t,w.prev,A,I),g&&I.reach>g.reach&&(g.reach=I.reach)}}}}}}function u(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function s(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function c(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;n.next=r,r.prev=n,e.length-=a}if(e.Prism=a,i.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var r="";return n.forEach((function(n){r+=e(n,t)})),r}var i={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},o=n.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(i.classes,o):i.classes.push(o)),a.hooks.run("wrap",i);var l="";for(var u in i.attributes)l+=" "+u+'="'+(i.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+l+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),r=t.language,i=t.code,o=t.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),o&&e.close()}),!1),a):a;var g=a.util.currentScript();function h(){a.manual||a.highlightAll()}if(g&&(a.filename=g.src,g.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var f=document.readyState;"loading"===f||"interactive"===f&&g&&g.defer?document.addEventListener("DOMContentLoaded",h):window.requestAnimationFrame?window.requestAnimationFrame(h):window.setTimeout(h,16)}return a}(r);e.exports&&(e.exports=a),"undefined"!=typeof t.g&&(t.g.Prism=a)}}]);
//# sourceMappingURL=2251-legacy.51666766.js.map