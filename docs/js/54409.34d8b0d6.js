(self["webpackChunk_onkz481_solo_ui_document"]=self["webpackChunk_onkz481_solo_ui_document"]||[]).push([[54409],{54409:function(){(function(n){n.languages.django={comment:/^\{#[\s\S]*?#\}$/,tag:{pattern:/(^\{%[+-]?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%][+-]?|[+-]?[}%]\}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},filter:{pattern:/(\|)\w+/,lookbehind:!0,alias:"function"},test:{pattern:/(\bis\s+(?:not\s+)?)(?!not\b)\w+/,lookbehind:!0,alias:"function"},function:/\b[a-z_]\w+(?=\s*\()/i,keyword:/\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,number:/\b\d+(?:\.\d+)?\b/,boolean:/[Ff]alse|[Nn]one|[Tt]rue/,variable:/\b\w+\b/,punctuation:/[{}[\](),.:;]/};var o=/\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}|\{#[\s\S]*?#\}/g,e=n.languages["markup-templating"];n.hooks.add("before-tokenize",(function(n){e.buildPlaceholders(n,"django",o)})),n.hooks.add("after-tokenize",(function(n){e.tokenizePlaceholders(n,"django")})),n.languages.jinja2=n.languages.django,n.hooks.add("before-tokenize",(function(n){e.buildPlaceholders(n,"jinja2",o)})),n.hooks.add("after-tokenize",(function(n){e.tokenizePlaceholders(n,"jinja2")}))})(Prism)}}]);
//# sourceMappingURL=54409.34d8b0d6.js.map