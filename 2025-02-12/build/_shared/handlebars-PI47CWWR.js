import{c as C}from"/2025-02-12/build/_shared/chunk-2NH4LW52.js";var D=C((U,T)=>{function u(e){return e?typeof e=="string"?e:e.source:null}function P(e){return s("(",e,")*")}function H(e){return s("(",e,")?")}function s(...e){return e.map(t=>u(t)).join("")}function M(...e){return"("+e.map(t=>u(t)).join("|")+")"}function p(e){let n={"builtin-name":["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]},t={literal:["true","false","undefined","null"]},m=/""|"[^"]+"/,d=/''|'[^']+'/,o=/\[\]|\[[^\]]+\]/,c=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,A=/(\.|\/)/,r=M(m,d,o,c),R=s(H(/\.|\.\/|\//),r,P(s(A,r))),I=s("(",o,"|",c,")(?==)"),a={begin:R,lexemes:/[\w.\/]+/},_=e.inherit(a,{keywords:t}),E={begin:/\(/,end:/\)/},O={className:"attr",begin:I,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,_,E]}}},b={begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},i={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,b,O,_,E],returnEnd:!0},g=e.inherit(a,{className:"name",keywords:n,starts:e.inherit(i,{end:/\)/})});E.contains=[g];let N=e.inherit(a,{keywords:n,className:"name",starts:e.inherit(i,{end:/\}\}/})}),S=e.inherit(a,{keywords:n,className:"name"}),l=e.inherit(a,{className:"name",keywords:n,starts:e.inherit(i,{end:/\}\}/})});return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[N],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[S]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[N]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[S]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[l]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[l]}]}}T.exports=p});export default D();
