import{a as u}from"/fnc/build/_shared/chunk-R66E6AZX.js";import{c as a}from"/fnc/build/_shared/chunk-2NH4LW52.js";var d=a((g,s)=>{var o=u();s.exports=e;e.displayName="json5";e.aliases=[];function e(n){n.register(o),function(r){var t=/("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;r.languages.json5=r.languages.extend("json",{property:[{pattern:RegExp(t.source+"(?=\\s*:)"),greedy:!0},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,alias:"unquoted"}],string:{pattern:t,greedy:!0},number:/[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/})}(n)}});export{d as a};
