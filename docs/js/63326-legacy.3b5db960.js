(self["webpackChunk_onkz481_solo_ui_document"]=self["webpackChunk_onkz481_solo_ui_document"]||[]).push([[63326],{63326:function(){(function(e){var s=/\/(?![/*])|\/\/.*[\r\n]|\/\*[^*]*(?:\*(?!\/)[^*]*)*\*\//.source,r=/@(?!")|"(?:[^\r\n\\"]|\\.)*"|@"(?:[^\\"]|""|\\[\s\S])*"(?!")/.source+"|"+/'(?:(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'|(?=[^\\](?!')))/.source;function o(e,o){for(var a=0;a<o;a++)e=e.replace(/<self>/g,(function(){return"(?:"+e+")"}));return e.replace(/<self>/g,"[^\\s\\S]").replace(/<str>/g,"(?:"+r+")").replace(/<comment>/g,"(?:"+s+")")}var a=o(/\((?:[^()'"@/]|<str>|<comment>|<self>)*\)/.source,2),c=o(/\[(?:[^\[\]'"@/]|<str>|<comment>|<self>)*\]/.source,1),u=o(/\{(?:[^{}'"@/]|<str>|<comment>|<self>)*\}/.source,2),t=o(/<(?:[^<>'"@/]|<comment>|<self>)*>/.source,1),n=/@/.source+/(?:await\b\s*)?/.source+"(?:"+/(?!await\b)\w+\b/.source+"|"+a+")(?:"+/[?!]?\.\w+\b/.source+"|(?:"+t+")?"+a+"|"+c+")*"+/(?![?!\.(\[]|<(?!\/))/.source,l=/@(?![\w()])/.source+"|"+n,i="(?:"+/"[^"@]*"|'[^'@]*'|[^\s'"@>=]+(?=[\s>])/.source+"|[\"'][^\"'@]*(?:(?:"+l+")[^\"'@]*)+[\"'])",g=/(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*<tagAttrValue>|(?=[\s/>])))+)?/.source.replace(/<tagAttrValue>/,i),p=/(?!\d)[^\s>\/=$<%]+/.source+g+/\s*\/?>/.source,d=/\B@?/.source+"(?:"+/<([a-zA-Z][\w:]*)/.source+g+/\s*>/.source+"(?:"+/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+p+"|"+o(/<\1/.source+g+/\s*>/.source+"(?:"+/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+p+"|<self>)*"+/<\/\1\s*>/.source,2)+")*"+/<\/\1\s*>/.source+"|"+/</.source+p+")";e.languages.cshtml=e.languages.extend("markup",{});var m=e.languages.insertBefore("csharp","string",{html:{pattern:RegExp(d),greedy:!0,inside:e.languages.cshtml}},{csharp:e.languages.extend("csharp",{})}),h={pattern:/\S[\s\S]*/,alias:"language-csharp",inside:m},f={pattern:RegExp(/(^|[^@])/.source+n),lookbehind:!0,greedy:!0,alias:"variable",inside:{keyword:/^@/,csharp:h}};e.languages.cshtml.tag.pattern=RegExp(/<\/?/.source+p),e.languages.cshtml.tag.inside["attr-value"].pattern=RegExp(/=\s*/.source+i),e.languages.insertBefore("inside","punctuation",{value:f},e.languages.cshtml.tag.inside["attr-value"]),e.languages.insertBefore("cshtml","prolog",{"razor-comment":{pattern:/@\*[\s\S]*?\*@/,greedy:!0,alias:"comment"},block:{pattern:RegExp(/(^|[^@])@/.source+"(?:"+[u,/(?:code|functions)\s*/.source+u,/(?:for|foreach|lock|switch|using|while)\s*/.source+a+/\s*/.source+u,/do\s*/.source+u+/\s*while\s*/.source+a+/(?:\s*;)?/.source,/try\s*/.source+u+/\s*catch\s*/.source+a+/\s*/.source+u+/\s*finally\s*/.source+u,/if\s*/.source+a+/\s*/.source+u+"(?:"+/\s*else/.source+"(?:"+/\s+if\s*/.source+a+")?"+/\s*/.source+u+")*",/helper\s+\w+\s*/.source+a+/\s*/.source+u].join("|")+")"),lookbehind:!0,greedy:!0,inside:{keyword:/^@\w*/,csharp:h}},directive:{pattern:/^([ \t]*)@(?:addTagHelper|attribute|implements|inherits|inject|layout|model|namespace|page|preservewhitespace|removeTagHelper|section|tagHelperPrefix|using)(?=\s).*/m,lookbehind:!0,greedy:!0,inside:{keyword:/^@\w+/,csharp:h}},value:f,"delegate-operator":{pattern:/(^|[^@])@(?=<)/,lookbehind:!0,alias:"operator"}}),e.languages.razor=e.languages.cshtml})(Prism)}}]);
//# sourceMappingURL=63326-legacy.3b5db960.js.map