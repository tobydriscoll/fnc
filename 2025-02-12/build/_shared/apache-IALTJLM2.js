import{c as t}from"/2025-02-12/build/_shared/chunk-2NH4LW52.js";var c=t((l,a)=>{function i(e){let s={className:"number",begin:/[$%]\d+/},r={className:"number",begin:/\d+/},n={className:"number",begin:/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/},o={className:"number",begin:/:\d{1,5}/};return{name:"Apache config",aliases:["apacheconf"],case_insensitive:!0,contains:[e.HASH_COMMENT_MODE,{className:"section",begin:/<\/?/,end:/>/,contains:[n,o,e.inherit(e.QUOTE_STRING_MODE,{relevance:0})]},{className:"attribute",begin:/\w+/,relevance:0,keywords:{nomarkup:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},starts:{end:/$/,relevance:0,keywords:{literal:"on off all deny allow"},contains:[{className:"meta",begin:/\s\[/,end:/\]$/},{className:"variable",begin:/[\$%]\{/,end:/\}/,contains:["self",s]},n,r,e.QUOTE_STRING_MODE]}}],illegal:/\S/}}a.exports=i});export default c();
