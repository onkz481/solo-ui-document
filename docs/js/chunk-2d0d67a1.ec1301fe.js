(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d67a1"],{"735d":function(n,a){(function(n){var a=n.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};function e(a,e){var t="doc-comment",o=n.languages[a];if(o){var r=o[t];if(!r){var i={};i[t]={pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"},o=n.languages.insertBefore(a,"comment",i),r=o[t]}if(r instanceof RegExp&&(r=o[t]={pattern:r}),Array.isArray(r))for(var p=0,s=r.length;p<s;p++)r[p]instanceof RegExp&&(r[p]={pattern:r[p]}),e(r[p]);else e(r)}}function t(n,a){"string"===typeof n&&(n=[n]),n.forEach((function(n){e(n,(function(n){n.inside||(n.inside={}),n.inside.rest=a}))}))}Object.defineProperty(a,"addSupport",{value:t}),a.addSupport(["java","javascript","php"],a)})(Prism)}}]);
//# sourceMappingURL=chunk-2d0d67a1.ec1301fe.js.map