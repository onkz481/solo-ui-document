(self["webpackChunk_onkz481_solo_ui_document"]=self["webpackChunk_onkz481_solo_ui_document"]||[]).push([[87442],{87442:function(){(function(a){a.languages.latte={comment:/^\{\*[\s\S]*/,"latte-tag":{pattern:/(^\{(?:\/(?=[a-z]))?)(?:[=_]|[a-z]\w*\b(?!\())/i,lookbehind:!0,alias:"important"},delimiter:{pattern:/^\{\/?|\}$/,alias:"punctuation"},php:{pattern:/\S(?:[\s\S]*\S)?/,alias:"language-php",inside:a.languages.php}};var t=a.languages.extend("markup",{});a.languages.insertBefore("inside","attr-value",{"n-attr":{pattern:/n:[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+))?/,inside:{"attr-name":{pattern:/^[^\s=]+/,alias:"important"},"attr-value":{pattern:/=[\s\S]+/,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],php:{pattern:/\S(?:[\s\S]*\S)?/,inside:a.languages.php}}}}}},t.tag),a.hooks.add("before-tokenize",(function(e){if("latte"===e.language){var n=/\{\*[\s\S]*?\*\}|\{[^'"\s{}*](?:[^"'/{}]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|\/\*(?:[^*]|\*(?!\/))*\*\/)*\}/g;a.languages["markup-templating"].buildPlaceholders(e,"latte",n),e.grammar=t}})),a.hooks.add("after-tokenize",(function(t){a.languages["markup-templating"].tokenizePlaceholders(t,"latte")}))})(Prism)}}]);
//# sourceMappingURL=87442-legacy.2a94c3b4.js.map