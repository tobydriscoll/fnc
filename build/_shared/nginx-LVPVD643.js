import{c as r}from"/fnc/build/_shared/chunk-2NH4LW52.js";var s=r((E,a)=>{function t(e){let n={className:"variable",variants:[{begin:/\$\d+/},{begin:/\$\{/,end:/\}/},{begin:/[$@]/+e.UNDERSCORE_IDENT_RE}]},i={endsWithParent:!0,keywords:{$pattern:"[a-z/_]+",literal:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},relevance:0,illegal:"=>",contains:[e.HASH_COMMENT_MODE,{className:"string",contains:[e.BACKSLASH_ESCAPE,n],variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/}]},{begin:"([a-z]+):/",end:"\\s",endsWithParent:!0,excludeEnd:!0,contains:[n]},{className:"regexp",contains:[e.BACKSLASH_ESCAPE,n],variants:[{begin:"\\s\\^",end:"\\s|\\{|;",returnEnd:!0},{begin:"~\\*?\\s+",end:"\\s|\\{|;",returnEnd:!0},{begin:"\\*(\\.[a-z\\-]+)+"},{begin:"([a-z\\-]+\\.)+\\*"}]},{className:"number",begin:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{className:"number",begin:"\\b\\d+[kKmMgGdshdwy]*\\b",relevance:0},n]};return{name:"Nginx config",aliases:["nginxconf"],contains:[e.HASH_COMMENT_MODE,{begin:e.UNDERSCORE_IDENT_RE+"\\s+\\{",returnBegin:!0,end:/\{/,contains:[{className:"section",begin:e.UNDERSCORE_IDENT_RE}],relevance:0},{begin:e.UNDERSCORE_IDENT_RE+"\\s",end:";|\\{",returnBegin:!0,contains:[{className:"attribute",begin:e.UNDERSCORE_IDENT_RE,starts:i}],relevance:0}],illegal:"[^\\s\\}]"}}a.exports=t});export default s();
