(self["webpackChunk_onkz481_solo_ui_document"]=self["webpackChunk_onkz481_solo_ui_document"]||[]).push([[54884],{54884:function(){(function(n){var e=n.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};function a(e,a){var t="doc-comment",o=n.languages[e];if(o){var r=o[t];if(!r){var i={};i[t]={pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"},o=n.languages.insertBefore(e,"comment",i),r=o[t]}if(r instanceof RegExp&&(r=o[t]={pattern:r}),Array.isArray(r))for(var s=0,p=r.length;s<p;s++)r[s]instanceof RegExp&&(r[s]={pattern:r[s]}),a(r[s]);else a(r)}}function t(n,e){"string"===typeof n&&(n=[n]),n.forEach((function(n){a(n,(function(n){n.inside||(n.inside={}),n.inside.rest=e}))}))}Object.defineProperty(e,"addSupport",{value:t}),e.addSupport(["java","javascript","php"],e)})(Prism)}}]);
//# sourceMappingURL=54884-legacy.ff2e041a.js.map