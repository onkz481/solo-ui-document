(self["webpackChunk_onkz481_solo_ui_document"]=self["webpackChunk_onkz481_solo_ui_document"]||[]).push([[48929],{48929:function(){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,o,a,r){if(t.language===o){var u=t.tokenStack=[];t.code=t.code.replace(a,(function(e){if("function"==typeof r&&!r(e))return e;for(var a,c=u.length;-1!==t.code.indexOf(a=n(o,c));)++c;return u[c]=e,a})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,o){if(t.language===o&&t.tokenStack){t.grammar=e.languages[o];var a=0,r=Object.keys(t.tokenStack);!function u(c){for(var i=0;i<c.length&&!(a>=r.length);i++){var l=c[i];if("string"==typeof l||l.content&&"string"==typeof l.content){var s=r[a],g=t.tokenStack[s],f="string"==typeof l?l:l.content,p=n(o,s),k=f.indexOf(p);if(k>-1){++a;var _=f.substring(0,k),h=new e.Token(o,e.tokenize(g,t.grammar),"language-"+o,g),m=f.substring(k+p.length),d=[];_&&d.push.apply(d,u([_])),d.push(h),m&&d.push.apply(d,u([m])),"string"==typeof l?c.splice.apply(c,[i,1].concat(d)):l.content=d}}else l.content&&u(l.content)}return c}(t.tokens)}}}})}(Prism)}}]);
//# sourceMappingURL=48929.4955b590.js.map