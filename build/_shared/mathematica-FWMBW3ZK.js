import{b as f}from"/fnc/build/_shared/chunk-2NH4LW52.js";function i(e,a){var n;return n=e.next(),n==='"'?(a.tokenize=$,a.tokenize(e,a)):n==="("&&e.eat("*")?(a.commentLevel++,a.tokenize=v,a.tokenize(e,a)):(e.backUp(1),e.match(m,!0,!1)||e.match(A,!0,!1)?"number":e.match(/(?:In|Out)\[[0-9]*\]/,!0,!1)?"atom":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::usage)/,!0,!1)?"meta":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/,!0,!1)?"string.special":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/,!0,!1)||e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)||e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/,!0,!1)||e.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)?"variableName.special":e.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/,!0,!1)?"character":e.match(/(?:\[|\]|{|}|\(|\))/,!0,!1)?"bracket":e.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/,!0,!1)?"variableName.constant":e.match(Z,!0,!1)?"keyword":e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/,!0,!1)?"operator":(e.next(),"error"))}function $(e,a){for(var n,r=!1,t=!1;(n=e.next())!=null;){if(n==='"'&&!t){r=!0;break}t=!t&&n==="\\"}return r&&!t&&(a.tokenize=i),"string"}function v(e,a){for(var n,r;a.commentLevel>0&&(r=e.next())!=null;)n==="("&&r==="*"&&a.commentLevel++,n==="*"&&r===")"&&a.commentLevel--,n=r;return a.commentLevel<=0&&(a.tokenize=i),"comment"}var u,o,c,z,l,m,A,Z,p,h=f(()=>{u="[a-zA-Z\\$][a-zA-Z0-9\\$]*",o="(?:\\d+)",c="(?:\\.\\d+|\\d+\\.\\d*|\\d+)",z="(?:\\.\\w+|\\w+\\.\\w*|\\w+)",l="(?:`(?:`?"+c+")?)",m=new RegExp("(?:"+o+"(?:\\^\\^"+z+l+"?(?:\\*\\^[+-]?\\d+)?))"),A=new RegExp("(?:"+c+l+"?(?:\\*\\^[+-]?\\d+)?)"),Z=new RegExp("(?:`?)(?:"+u+")(?:`(?:"+u+"))*(?:`?)");p={name:"mathematica",startState:function(){return{tokenize:i,commentLevel:0}},token:function(e,a){return e.eatSpace()?null:a.tokenize(e,a)},languageData:{commentTokens:{block:{open:"(*",close:"*)"}}}}});h();export{p as mathematica};
