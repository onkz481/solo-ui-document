(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d23154d"],{efa7:function(n,a){(function(n){var a=/\{[^\r\n\[\]{}]*\}/,e={"quoted-string":{pattern:/"(?:[^"\\]|\\.)*"/,alias:"operator"},"command-param-id":{pattern:/(\s)\w+:/,lookbehind:!0,alias:"property"},"command-param-value":[{pattern:a,alias:"selector"},{pattern:/([\t ])\S+/,lookbehind:!0,greedy:!0,alias:"operator"},{pattern:/\S(?:.*\S)?/,alias:"operator"}]};function t(n){for(var a="[]{}",e=[],t=0;t<n.length;t++){var r=n[t],i=a.indexOf(r);if(-1!==i)if(i%2===0)e.push(i+1);else if(e.pop()!==i)return!1}return 0===e.length}function r(n){return"string"===typeof n?n:Array.isArray(n)?n.map(r).join(""):r(n.content)}n.languages.naniscript={comment:{pattern:/^([\t ]*);.*/m,lookbehind:!0},define:{pattern:/^>.+/m,alias:"tag",inside:{value:{pattern:/(^>\w+[\t ]+)(?!\s)[^{}\r\n]+/,lookbehind:!0,alias:"operator"},key:{pattern:/(^>)\w+/,lookbehind:!0}}},label:{pattern:/^([\t ]*)#[\t ]*\w+[\t ]*$/m,lookbehind:!0,alias:"regex"},command:{pattern:/^([\t ]*)@\w+(?=[\t ]|$).*/m,lookbehind:!0,alias:"function",inside:{"command-name":/^@\w+/,expression:{pattern:a,greedy:!0,alias:"selector"},"command-params":{pattern:/\s*\S[\s\S]*/,inside:e}}},"generic-text":{pattern:/(^[ \t]*)[^#@>;\s].*/m,lookbehind:!0,alias:"punctuation",inside:{"escaped-char":/\\[{}\[\]"]/,expression:{pattern:a,greedy:!0,alias:"selector"},"inline-command":{pattern:/\[[\t ]*\w[^\r\n\[\]]*\]/,greedy:!0,alias:"function",inside:{"command-params":{pattern:/(^\[[\t ]*\w+\b)[\s\S]+(?=\]$)/,lookbehind:!0,inside:e},"command-param-name":{pattern:/^(\[[\t ]*)\w+/,lookbehind:!0,alias:"name"},"start-stop-char":/[\[\]]/}}}}},n.languages.nani=n.languages["naniscript"],n.hooks.add("after-tokenize",(function(n){var a=n.tokens;a.forEach((function(n){if("string"!==typeof n&&"generic-text"===n.type){var a=r(n);t(a)||(n.type="bad-line",n.content=a)}}))}))})(Prism)}}]);
//# sourceMappingURL=chunk-2d23154d.67f62aec.js.map