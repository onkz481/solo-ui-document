(self["webpackChunk_onkz481_solo_ui_document"]=self["webpackChunk_onkz481_solo_ui_document"]||[]).push([[49724],{49724:function(){!function(e){var a="(?:\\b[a-zA-Z]\\w*|[|\\\\[\\]])+";e.languages.phpdoc=e.languages.extend("javadoclike",{parameter:{pattern:RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:"+a+"\\s+)?)\\$\\w+"),lookbehind:!0}}),e.languages.insertBefore("phpdoc","keyword",{"class-name":[{pattern:RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)"+a),lookbehind:!0,inside:{keyword:/\b(?:array|bool|boolean|callback|double|false|float|int|integer|mixed|null|object|resource|self|string|true|void)\b/,punctuation:/[|\\[\]()]/}}]}),e.languages.javadoclike.addSupport("php",e.languages.phpdoc)}(Prism)}}]);
//# sourceMappingURL=49724.d0972355.js.map