import{b as u}from"fncbook.com/build/_shared/chunk-2NH4LW52.js";function a(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}function S(e,r){if(e.eatSpace())return null;if(r.inComment)return e.match(N)?(r.inComment=!1,"comment"):(e.skipToEnd(),"comment");if(e.match("//"))return e.skipToEnd(),"comment";if(e.match(C))return"comment";if(e.match(w))return r.inComment=!0,"comment";if(e.match(/^-?[0-9\.]/,!1)&&(e.match(h)||e.match(D)))return"number";if(e.match(E))return"string";if(r.startDef&&e.match(i))return"def";if(r.endDef&&e.match(k))return r.endDef=!1,"def";if(e.match(y))return"keyword";if(e.match(s)){var t=r.lastToken,n=(e.match(/^\s*(.+?)\b/,!1)||[])[1];return t===":"||t==="implements"||n==="implements"||n==="="?"builtin":"type"}return e.match(m)?"builtin":e.match(d)?"atom":e.match(i)?"variable":e.match(g)?"operator":(e.next(),null)}var l,m,o,s,c,y,f,d,p,b,v,A,g,h,D,i,k,E,C,w,N,T,O=u(()=>{l=["Clamp","Constructor","EnforceRange","Exposed","ImplicitThis","Global","PrimaryGlobal","LegacyArrayClass","LegacyUnenumerableNamedProperties","LenientThis","NamedConstructor","NewObject","NoInterfaceObject","OverrideBuiltins","PutForwards","Replaceable","SameObject","TreatNonObjectAsNull","TreatNullAs","EmptyString","Unforgeable","Unscopeable"],m=a(l),o=["unsigned","short","long","unrestricted","float","double","boolean","byte","octet","Promise","ArrayBuffer","DataView","Int8Array","Int16Array","Int32Array","Uint8Array","Uint16Array","Uint32Array","Uint8ClampedArray","Float32Array","Float64Array","ByteString","DOMString","USVString","sequence","object","RegExp","Error","DOMException","FrozenArray","any","void"],s=a(o),c=["attribute","callback","const","deleter","dictionary","enum","getter","implements","inherit","interface","iterable","legacycaller","maplike","partial","required","serializer","setlike","setter","static","stringifier","typedef","optional","readonly","or"],y=a(c),f=["true","false","Infinity","NaN","null"],d=a(f),p=["callback","dictionary","enum","interface"],b=a(p),v=["typedef"],A=a(v),g=/^[:<=>?]/,h=/^-?([1-9][0-9]*|0[Xx][0-9A-Fa-f]+|0[0-7]*)/,D=/^-?(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][+-]?[0-9]+)?|[0-9]+[Ee][+-]?[0-9]+)/,i=/^_?[A-Za-z][0-9A-Z_a-z-]*/,k=/^_?[A-Za-z][0-9A-Z_a-z-]*(?=\s*;)/,E=/^"[^"]*"/,C=/^\/\*.*?\*\//,w=/^\/\*.*/,N=/^.*?\*\//;T={name:"webidl",startState:function(){return{inComment:!1,lastToken:"",startDef:!1,endDef:!1}},token:function(e,r){var t=S(e,r);if(t){var n=e.current();r.lastToken=n,t==="keyword"?(r.startDef=b.test(n),r.endDef=r.endDef||A.test(n)):r.startDef=!1}return t},languageData:{autocomplete:l.concat(o).concat(c).concat(f)}}});O();export{T as webIDL};
