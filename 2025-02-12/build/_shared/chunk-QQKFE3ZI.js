import{c as p}from"/2025-02-12/build/_shared/chunk-2NH4LW52.js";var d=p((y,g)=>{g.exports=s;s.displayName="xquery";s.aliases=[];function s(c){(function(r){r.languages.xquery=r.languages.extend("markup",{"xquery-comment":{pattern:/\(:[\s\S]*?:\)/,greedy:!0,alias:"comment"},string:{pattern:/(["'])(?:\1\1|(?!\1)[\s\S])*\1/,greedy:!0},extension:{pattern:/\(#.+?#\)/,alias:"symbol"},variable:/\$[-\w:]+/,axis:{pattern:/(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,lookbehind:!0,alias:"operator"},"keyword-operator":{pattern:/(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,lookbehind:!0,alias:"operator"},keyword:{pattern:/(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,lookbehind:!0},function:/[\w-]+(?::[\w-]+)*(?=\s*\()/,"xquery-element":{pattern:/(element\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"tag"},"xquery-attribute":{pattern:/(attribute\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"attr-name"},builtin:{pattern:/(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:ENTITIES|ENTITY|ID|IDREFS?|NCName|NMTOKENS?|NOTATION|Name|QName|anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|int|integer|language|long|negativeInteger|nonNegativeInteger|nonPositiveInteger|normalizedString|positiveInteger|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,lookbehind:!0},number:/\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,operator:[/[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}],punctuation:/[[\](){},;:/]/}),r.languages.xquery.tag.pattern=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/,r.languages.xquery.tag.inside["attr-value"].pattern=/=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+)/,r.languages.xquery.tag.inside["attr-value"].inside.punctuation=/^="|"$/,r.languages.xquery.tag.inside["attr-value"].inside.expression={pattern:/\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}/,inside:r.languages.xquery,alias:"language-xquery"};var o=function(e){return typeof e=="string"?e:typeof e.content=="string"?e.content:e.content.map(o).join("")},l=function(e){for(var a=[],t=0;t<e.length;t++){var n=e[t],u=!1;if(typeof n!="string"&&(n.type==="tag"&&n.content[0]&&n.content[0].type==="tag"?n.content[0].content[0].content==="</"?a.length>0&&a[a.length-1].tagName===o(n.content[0].content[1])&&a.pop():n.content[n.content.length-1].content==="/>"||a.push({tagName:o(n.content[0].content[1]),openedBraces:0}):a.length>0&&n.type==="punctuation"&&n.content==="{"&&(!e[t+1]||e[t+1].type!=="punctuation"||e[t+1].content!=="{")&&(!e[t-1]||e[t-1].type!=="plain-text"||e[t-1].content!=="{")?a[a.length-1].openedBraces++:a.length>0&&a[a.length-1].openedBraces>0&&n.type==="punctuation"&&n.content==="}"?a[a.length-1].openedBraces--:n.type!=="comment"&&(u=!0)),(u||typeof n=="string")&&a.length>0&&a[a.length-1].openedBraces===0){var i=o(n);t<e.length-1&&(typeof e[t+1]=="string"||e[t+1].type==="plain-text")&&(i+=o(e[t+1]),e.splice(t+1,1)),t>0&&(typeof e[t-1]=="string"||e[t-1].type==="plain-text")&&(i=o(e[t-1])+i,e.splice(t-1,1),t--),/^\s+$/.test(i)?e[t]=i:e[t]=new r.Token("plain-text",i,null,i)}n.content&&typeof n.content!="string"&&l(n.content)}};r.hooks.add("after-tokenize",function(e){e.language==="xquery"&&l(e.tokens)})})(c)}});export{d as a};
