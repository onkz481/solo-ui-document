(self["webpackChunk_onkz481_solo_ui_document"]=self["webpackChunk_onkz481_solo_ui_document"]||[]).push([[42239],{42239:function(){!function(e){var n="(?:\\B-|\\b_|\\b)[A-Za-z][\\w-]*(?![\\w-])",t="(?:\\b(?:unsigned\\s+)?long\\s+long(?![\\w-])|\\b(?:unrestricted|unsigned)\\s+[a-z]+(?![\\w-])|(?!(?:unrestricted|unsigned)\\b)"+n+"(?:\\s*<(?:[^<>]|<[^<>]*>)*>)?)(?:\\s*\\?)?",i={};for(var r in e.languages["web-idl"]={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/"[^"]*"/,greedy:!0},namespace:{pattern:RegExp("(\\bnamespace\\s+)"+n),lookbehind:!0},"class-name":[{pattern:/(^|[^\w-])(?:iterable|maplike|setlike)\s*<(?:[^<>]|<[^<>]*>)*>/,lookbehind:!0,inside:i},{pattern:RegExp("(\\b(?:attribute|const|deleter|getter|optional|setter)\\s+)"+t),lookbehind:!0,inside:i},{pattern:RegExp("(\\bcallback\\s+"+n+"\\s*=\\s*)"+t),lookbehind:!0,inside:i},{pattern:RegExp("(\\btypedef\\b\\s*)"+t),lookbehind:!0,inside:i},{pattern:RegExp("(\\b(?:callback|dictionary|enum|interface(?:\\s+mixin)?)\\s+)(?!(?:interface|mixin)\\b)"+n),lookbehind:!0},{pattern:RegExp("(:\\s*)"+n),lookbehind:!0},RegExp(n+"(?=\\s+(?:implements|includes)\\b)"),{pattern:RegExp("(\\b(?:implements|includes)\\s+)"+n),lookbehind:!0},{pattern:RegExp(t+"(?=\\s*(?:\\.{3}\\s*)?"+n+"\\s*[(),;=])"),inside:i}],builtin:/\b(?:ArrayBuffer|BigInt64Array|BigUint64Array|ByteString|DOMString|DataView|Float32Array|Float64Array|FrozenArray|Int16Array|Int32Array|Int8Array|ObservableArray|Promise|USVString|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray)\b/,keyword:[/\b(?:async|attribute|callback|const|constructor|deleter|dictionary|enum|getter|implements|includes|inherit|interface|mixin|namespace|null|optional|or|partial|readonly|required|setter|static|stringifier|typedef|unrestricted)\b/,/\b(?:any|bigint|boolean|byte|double|float|iterable|long|maplike|object|octet|record|sequence|setlike|short|symbol|undefined|unsigned|void)\b/],boolean:/\b(?:false|true)\b/,number:{pattern:/(^|[^\w-])-?(?:0x[0-9a-f]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|NaN|Infinity)(?![\w-])/i,lookbehind:!0},operator:/\.{3}|[=:?<>-]/,punctuation:/[(){}[\].,;]/},e.languages["web-idl"])"class-name"!==r&&(i[r]=e.languages["web-idl"][r]);e.languages.webidl=e.languages["web-idl"]}(Prism)}}]);
//# sourceMappingURL=42239-legacy.514421a9.js.map