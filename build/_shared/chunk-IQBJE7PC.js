import{a as ce,c as N,d as Z,f as J}from"/fnc/build/_shared/chunk-GUCIBHGO.js";import{c as L,e as ue}from"/fnc/build/_shared/chunk-2NH4LW52.js";var _e=L((ar,Ce)=>{Ce.exports={trueFunc:function(){return!0},falseFunc:function(){return!1}}});var I=L(v=>{"use strict";Object.defineProperty(v,"__esModule",{value:!0});function Pt(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="-"||e==="_"}v.isIdentStart=Pt;function Lt(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="-"||e==="_"}v.isIdent=Lt;function Ft(e){return e>="a"&&e<="f"||e>="A"&&e<="F"||e>="0"&&e<="9"}v.isHex=Ft;function jt(e){for(var t=e.length,r="",i=0;i<t;){var n=e.charAt(i);if(v.identSpecialChars[n])r+="\\"+n;else if(n==="_"||n==="-"||n>="A"&&n<="Z"||n>="a"&&n<="z"||i!==0&&n>="0"&&n<="9")r+=n;else{var a=n.charCodeAt(0);if((a&63488)===55296){var s=e.charCodeAt(i++);if((a&64512)!==55296||(s&64512)!==56320)throw Error("UCS-2(decode): illegal sequence");a=((a&1023)<<10)+(s&1023)+65536}r+="\\"+a.toString(16)+" "}i++}return r}v.escapeIdentifier=jt;function Mt(e){for(var t=e.length,r="",i=0,n;i<t;){var a=e.charAt(i);a==='"'?a='\\"':a==="\\"?a="\\\\":(n=v.strReplacementsRev[a])!==void 0&&(a=n),r+=a,i++}return'"'+r+'"'}v.escapeStr=Mt;v.identSpecialChars={"!":!0,'"':!0,"#":!0,$:!0,"%":!0,"&":!0,"'":!0,"(":!0,")":!0,"*":!0,"+":!0,",":!0,".":!0,"/":!0,";":!0,"<":!0,"=":!0,">":!0,"?":!0,"@":!0,"[":!0,"\\":!0,"]":!0,"^":!0,"`":!0,"{":!0,"|":!0,"}":!0,"~":!0};v.strReplacementsRev={"\n":"\\n","\r":"\\r","	":"\\t","\f":"\\f","\v":"\\v"};v.singleQuoteEscapeChars={n:`
`,r:"\r",t:"	",f:"\f","\\":"\\","'":"'"};v.doubleQuotesEscapeChars={n:`
`,r:"\r",t:"	",f:"\f","\\":"\\",'"':'"'}});var Pe=L(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});var x=I();function $t(e,t,r,i,n,a){var s=e.length,o="";function c(f,p){var m="";for(t++,o=e.charAt(t);t<s;){if(o===f)return t++,m;if(o==="\\"){t++,o=e.charAt(t);var g=void 0;if(o===f)m+=f;else if((g=p[o])!==void 0)m+=g;else if(x.isHex(o)){var k=o;for(t++,o=e.charAt(t);x.isHex(o);)k+=o,t++,o=e.charAt(t);o===" "&&(t++,o=e.charAt(t)),m+=String.fromCharCode(parseInt(k,16));continue}else m+=o}else m+=o;t++,o=e.charAt(t)}return m}function l(){var f="";for(o=e.charAt(t);t<s;){if(x.isIdent(o))f+=o;else if(o==="\\"){if(t++,t>=s)throw Error("Expected symbol but end of file reached.");if(o=e.charAt(t),x.identSpecialChars[o])f+=o;else if(x.isHex(o)){var p=o;for(t++,o=e.charAt(t);x.isHex(o);)p+=o,t++,o=e.charAt(t);o===" "&&(t++,o=e.charAt(t)),f+=String.fromCharCode(parseInt(p,16));continue}else f+=o}else return f;t++,o=e.charAt(t)}return f}function u(){o=e.charAt(t);for(var f=!1;o===" "||o==="	"||o===`
`||o==="\r"||o==="\f";)f=!0,t++,o=e.charAt(t);return f}function d(){var f=h();if(t<s)throw Error('Rule expected but "'+e.charAt(t)+'" found.');return f}function h(){var f=E();if(!f)return null;var p=f;for(o=e.charAt(t);o===",";){if(t++,u(),p.type!=="selectors"&&(p={type:"selectors",selectors:[f]}),f=E(),!f)throw Error('Rule expected after ",".');p.selectors.push(f)}return p}function E(){u();var f={type:"ruleSet"},p=O();if(!p)return null;for(var m=f;p&&(p.type="rule",m.rule=p,m=p,u(),o=e.charAt(t),!(t>=s||o===","||o===")"));)if(n[o]){var g=o;if(t++,u(),p=O(),!p)throw Error('Rule expected after "'+g+'".');p.nestingOperator=g}else p=O(),p&&(p.nestingOperator=null);return f}function O(){for(var f=null;t<s;)if(o=e.charAt(t),o==="*")t++,(f=f||{}).tagName="*";else if(x.isIdentStart(o)||o==="\\")(f=f||{}).tagName=l();else if(o===".")t++,f=f||{},(f.classNames=f.classNames||[]).push(l());else if(o==="#")t++,(f=f||{}).id=l();else if(o==="["){t++,u();var p={name:l()};if(u(),o==="]")t++;else{var m="";if(i[o]&&(m=o,t++,o=e.charAt(t)),t>=s)throw Error('Expected "=" but end of file reached.');if(o!=="=")throw Error('Expected "=" but "'+o+'" found.');p.operator=m+"=",t++,u();var g="";if(p.valueType="string",o==='"')g=c('"',x.doubleQuotesEscapeChars);else if(o==="'")g=c("'",x.singleQuoteEscapeChars);else if(a&&o==="$")t++,g=l(),p.valueType="substitute";else{for(;t<s&&o!=="]";)g+=o,t++,o=e.charAt(t);g=g.trim()}if(u(),t>=s)throw Error('Expected "]" but end of file reached.');if(o!=="]")throw Error('Expected "]" but "'+o+'" found.');t++,p.value=g}f=f||{},(f.attrs=f.attrs||[]).push(p)}else if(o===":"){t++;var k=l(),P={name:k};if(o==="("){t++;var _="";if(u(),r[k]==="selector")P.valueType="selector",_=h();else{if(P.valueType=r[k]||"string",o==='"')_=c('"',x.doubleQuotesEscapeChars);else if(o==="'")_=c("'",x.singleQuoteEscapeChars);else if(a&&o==="$")t++,_=l(),P.valueType="substitute";else{for(;t<s&&o!==")";)_+=o,t++,o=e.charAt(t);_=_.trim()}u()}if(t>=s)throw Error('Expected ")" but end of file reached.');if(o!==")")throw Error('Expected ")" but "'+o+'" found.');t++,P.value=_}f=f||{},(f.pseudos=f.pseudos||[]).push(P)}else break;return f}return d()}R.parseCssSelector=$t});var Le=L(ee=>{"use strict";Object.defineProperty(ee,"__esModule",{value:!0});var y=I();function V(e){var t="";switch(e.type){case"ruleSet":for(var r=e.rule,i=[];r;)r.nestingOperator&&i.push(r.nestingOperator),i.push(V(r)),r=r.rule;t=i.join(" ");break;case"selectors":t=e.selectors.map(V).join(", ");break;case"rule":e.tagName&&(e.tagName==="*"?t="*":t=y.escapeIdentifier(e.tagName)),e.id&&(t+="#"+y.escapeIdentifier(e.id)),e.classNames&&(t+=e.classNames.map(function(n){return"."+y.escapeIdentifier(n)}).join("")),e.attrs&&(t+=e.attrs.map(function(n){return"operator"in n?n.valueType==="substitute"?"["+y.escapeIdentifier(n.name)+n.operator+"$"+n.value+"]":"["+y.escapeIdentifier(n.name)+n.operator+y.escapeStr(n.value)+"]":"["+y.escapeIdentifier(n.name)+"]"}).join("")),e.pseudos&&(t+=e.pseudos.map(function(n){return n.valueType?n.valueType==="selector"?":"+y.escapeIdentifier(n.name)+"("+V(n.value)+")":n.valueType==="substitute"?":"+y.escapeIdentifier(n.name)+"($"+n.value+")":n.valueType==="numeric"?":"+y.escapeIdentifier(n.name)+"("+n.value+")":":"+y.escapeIdentifier(n.name)+"("+y.escapeIdentifier(n.value)+")":":"+y.escapeIdentifier(n.name)}).join(""));break;default:throw Error('Unknown entity type: "'+e.type+'".')}return t}ee.renderEntity=V});var Fe=L(te=>{"use strict";Object.defineProperty(te,"__esModule",{value:!0});var Nt=Pe(),Ut=Le(),zt=function(){function e(){this.pseudos={},this.attrEqualityMods={},this.ruleNestingOperators={},this.substitutesEnabled=!1}return e.prototype.registerSelectorPseudos=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var a=n[i];this.pseudos[a]="selector"}return this},e.prototype.unregisterSelectorPseudos=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var a=n[i];delete this.pseudos[a]}return this},e.prototype.registerNumericPseudos=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var a=n[i];this.pseudos[a]="numeric"}return this},e.prototype.unregisterNumericPseudos=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var a=n[i];delete this.pseudos[a]}return this},e.prototype.registerNestingOperators=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var a=n[i];this.ruleNestingOperators[a]=!0}return this},e.prototype.unregisterNestingOperators=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var a=n[i];delete this.ruleNestingOperators[a]}return this},e.prototype.registerAttrEqualityMods=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var a=n[i];this.attrEqualityMods[a]=!0}return this},e.prototype.unregisterAttrEqualityMods=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var a=n[i];delete this.attrEqualityMods[a]}return this},e.prototype.enableSubstitutes=function(){return this.substitutesEnabled=!0,this},e.prototype.disableSubstitutes=function(){return this.substitutesEnabled=!1,this},e.prototype.parse=function(t){return Nt.parseCssSelector(t,0,this.pseudos,this.attrEqualityMods,this.ruleNestingOperators,this.substitutesEnabled)},e.prototype.render=function(t){return Ut.renderEntity(t).trim()},e}();te.CssSelectorParser=zt});var Be=e=>crypto.getRandomValues(new Uint8Array(e)),He=(e,t,r)=>{let i=(2<<Math.log(e.length-1)/Math.LN2)-1,n=-~(1.6*i*t/e.length);return(a=t)=>{let s="";for(;;){let o=r(n),c=n;for(;c--;)if(s+=e[o[c]&i]||"",s.length===a)return s}}},Y=(e,t=21)=>He(e,t,Be),Kt=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,r)=>(r&=63,r<36?t+=r.toString(36):r<62?t+=(r-26).toString(36).toUpperCase():r>62?t+="-":t+="_",t),"");function de(e,t){return t?.note&&(e.note=t.note),t?.url&&(e.url=t.url),t?.ruleId&&(e.ruleId=t.ruleId),t?.fatal&&(e.fatal=!0),e}function C(e,t,r){return de(e.message(t,r?.node,r?.source),{...r,fatal:!0})}function pe(e,t,r){return de(e.message(t,r?.node,r?.source),r)}var fe="abcdefghijklmnopqrstuvwxyz",he=fe+fe.toUpperCase(),Ve="0123456789",Qe=Y(he,1),We=Y(he+Ve,9);function Ze(){return Qe()+We()}function Je(e){if(!e)return;let t=e.replace(/[\t\n\r ]+/g," ").replace(/['‘’"“”]+/g,"").trim().toLowerCase(),r=me(t);return{identifier:t,label:e,html_id:r}}function me(e){if(e)return e.toLowerCase().replace(/[^a-z0-9-]/g,"-").replace(/^([0-9-])/,"id-$1").replace(/-[-]+/g,"-").replace(/(?:^[-]+)|(?:[-]+$)/g,"")}function Ye(e,t,r){e.label&&(t.label&&r&&pe(r,`label "${t.label}" replaced with "${e.label}"`,{node:t}),t.label=e.label,delete e.label),e.identifier&&(t.identifier=e.identifier,delete e.identifier),e.html_id&&(t.html_id=e.html_id,delete e.html_id),e.indexEntries&&(t.indexEntries||(t.indexEntries=[]),t.indexEntries.push(...e.indexEntries),delete e.indexEntries)}function ge(e,t){if(!e.children)return[e];let r=e.children.map(i=>ge(i,t)).flat();return e.type===t?(e&&e.children==null&&delete e.children,r):(e.children=r,[e])}function Ge(e,t){e.children&&(e.children=e.children.map(r=>ge(r,t)).flat())}function Xe(e,t){e.children=[{type:"text",value:t}]}function F(e){return e?Array.isArray(e)?e.map(t=>!t||typeof t=="string"?t||"":"value"in t?t.value:"children"in t&&t.children?F(t.children):"").join(""):F([e]):""}function U(e){return structuredClone(e)}function qe(e){return{attention:"Attention",caution:"Caution",danger:"Danger",error:"Error",important:"Important",hint:"Hint",note:"Note",seealso:"See Also",tip:"Tip",warning:"Warning"}[e]||`Unknown Admonition "${e}"`}function Ke(e,t,r){if(!t||t?.length===0)return"";let i=(r-e.length-4)/2,n="".padEnd(Math.ceil(i),"%"),a="".padEnd(Math.floor(i),"%");return`${`${n}  ${e}  ${a}
`}${t.join(`
`)}
`}function Ie(e){var t;if(!e.data)return[];let r=(t=e.data.tags)!==null&&t!==void 0?t:[];return Object.entries(e.data).forEach(([i,n])=>{(n===!0||typeof n=="string"&&n.toLowerCase()==="true")&&r.push(i)}),r.map(i=>i.toLowerCase())}function Re(e){if(e!=null)return e.replace(/\.index$/,"").replace(/\./g,"/")}var ve={}.hasOwnProperty;function z(e,t){let r=t||{};function i(n,...a){let s=i.invalid,o=i.handlers;if(n&&ve.call(n,e)){let c=String(n[e]);s=ve.call(o,c)?o[c]:i.unknown}if(s)return s.call(this,n,...a)}return i.handlers=r.handlers||{},i.invalid=r.invalid,i.unknown=r.unknown,i}var et=z("operator",{unknown:at,invalid:xe,handlers:{"=":tt,"^=":nt,"$=":it,"*=":ot,"~=":rt}});function ye(e,t){let r=-1;for(;++r<e.attrs.length;)if(!et(e.attrs[r],t))return!1;return!0}function xe(e,t){return t[e.name]!==null&&t[e.name]!==void 0}function tt(e,t){return xe(e,t)&&String(t[e.name])===e.value}function rt(e,t){let r=t[e.name];return r==null?!1:Array.isArray(r)&&r.includes(e.value)?!0:String(r)===e.value}function nt(e,t){let r=t[e.name];return Boolean(e.value&&typeof r=="string"&&r.slice(0,e.value.length)===e.value)}function it(e,t){let r=t[e.name];return Boolean(e.value&&typeof r=="string"&&r.slice(-e.value.length)===e.value)}function ot(e,t){let r=t[e.name];return Boolean(e.value&&typeof r=="string"&&r.includes(e.value))}function at(e){throw new Error("Unknown operator `"+e.operator+"`")}function be(e,t){return e.tagName==="*"||e.tagName===t.type}var st=new Set([9,10,12,13,32]),we="0".charCodeAt(0),lt="9".charCodeAt(0);function Ee(e){if(e=e.trim().toLowerCase(),e==="even")return[2,0];if(e==="odd")return[2,1];let t=0,r=0,i=a(),n=s();if(t<e.length&&e.charAt(t)==="n"&&(t++,r=i*(n??1),o(),t<e.length?(i=a(),o(),n=s()):i=n=0),n===null||t<e.length)throw new Error(`n-th rule couldn't be parsed ('${e}')`);return[r,i*n];function a(){return e.charAt(t)==="-"?(t++,-1):(e.charAt(t)==="+"&&t++,1)}function s(){let c=t,l=0;for(;t<e.length&&e.charCodeAt(t)>=we&&e.charCodeAt(t)<=lt;)l=l*10+(e.charCodeAt(t)-we),t++;return t===c?null:l}function o(){for(;t<e.length&&st.has(e.charCodeAt(t));)t++}}var G=ue(_e(),1);function Ae(e){let t=e[0],r=e[1]-1;if(r<0&&t<=0)return G.default.falseFunc;if(t===-1)return a=>a<=r;if(t===0)return a=>a===r;if(t===1)return r<0?G.default.trueFunc:a=>a>=r;let i=Math.abs(t),n=(r%i+i)%i;return t>1?a=>a>=r&&a%i===n:a=>a<=r&&a%i===n}function D(e){return Ae(Ee(e))}function A(e){return Array.isArray(e.children)}var ut=D.default||D,ct=z("name",{unknown:St,invalid:At,handlers:{any:X,blank:Se,empty:Se,"first-child":ft,"first-of-type":dt,has:pt,"last-child":ht,"last-of-type":mt,matches:X,not:gt,"nth-child":vt,"nth-last-child":yt,"nth-of-type":bt,"nth-last-of-type":xt,"only-child":wt,"only-of-type":Et,root:Ct,scope:_t}});q.needsIndex=["any","first-child","first-of-type","last-child","last-of-type","matches","not","nth-child","nth-last-child","nth-of-type","nth-last-of-type","only-child","only-of-type"];function q(e,t,r,i,n){let a=e.pseudos,s=-1;for(;++s<a.length;)if(!ct(a[s],t,r,i,n))return!1;return!0}function Se(e,t){return A(t)?t.children.length===0:!("value"in t)}function ft(e,t,r,i,n){return b(n,e),n.nodeIndex===0}function dt(e,t,r,i,n){return b(n,e),n.typeIndex===0}function pt(e,t,r,i,n){let a={type:"root",children:A(t)?t.children:[]},s={...n,found:!1,shallow:!1,one:!0,scopeNodes:[t],results:[],rootQuery:j(e.value)};return S(s,a),s.results.length>0}function ht(e,t,r,i,n){return b(n,e),typeof n.nodeCount=="number"&&n.nodeIndex===n.nodeCount-1}function mt(e,t,r,i,n){return b(n,e),typeof n.typeCount=="number"&&n.typeIndex===n.typeCount-1}function X(e,t,r,i,n){let a={...n,found:!1,shallow:!1,one:!0,scopeNodes:[t],results:[],rootQuery:j(e.value)};return S(a,t),a.results[0]===t}function gt(e,t,r,i,n){return!X(e,t,r,i,n)}function vt(e,t,r,i,n){let a=B(e);return b(n,e),typeof n.nodeIndex=="number"&&a(n.nodeIndex)}function yt(e,t,r,i,n){let a=B(e);return b(n,e),typeof n.nodeCount=="number"&&typeof n.nodeIndex=="number"&&a(n.nodeCount-n.nodeIndex-1)}function xt(e,t,r,i,n){let a=B(e);return b(n,e),typeof n.typeIndex=="number"&&typeof n.typeCount=="number"&&a(n.typeCount-1-n.typeIndex)}function bt(e,t,r,i,n){let a=B(e);return b(n,e),typeof n.typeIndex=="number"&&a(n.typeIndex)}function wt(e,t,r,i,n){return b(n,e),n.nodeCount===1}function Et(e,t,r,i,n){return b(n,e),n.typeCount===1}function Ct(e,t,r,i){return t&&!i}function _t(e,t,r,i,n){return t&&n.scopeNodes.includes(t)}function At(){throw new Error("Invalid pseudo-selector")}function St(e){throw e.name?new Error("Unknown pseudo-selector `"+e.name+"`"):new Error("Unexpected pseudo-element or empty pseudo-class")}function b(e,t){if(e.shallow)throw new Error("Cannot use `:"+t.name+"` without parent")}function B(e){let t=e._cachedFn;return t||(t=ut(e.value),e._cachedFn=t),t}function ke(e,t,r,i,n){if(e.id)throw new Error("Invalid selector: id");if(e.classNames)throw new Error("Invalid selector: class");return Boolean(t&&(!e.tagName||be(e,t))&&(!e.attrs||ye(e,t))&&(!e.pseudos||q(e,t,r,i,n)))}var kt=[];function j(e){return e===null?{type:"selectors",selectors:[]}:e.type==="ruleSet"?{type:"selectors",selectors:[e]}:e}function S(e,t){t&&Oe(e,[],t,void 0,void 0)}function Oe(e,t,r,i,n){let a={directChild:void 0,descendant:void 0,adjacentSibling:void 0,generalSibling:void 0};return a=Ot(e,H(t,e.rootQuery.selectors),r,i,n),A(r)&&!e.shallow&&!(e.one&&e.found)&&Tt(e,a,r),a}function Tt(e,t,r){let i=H(t.descendant,t.directChild),n,a=-1,s={count:0,types:new Map},o={count:0,types:new Map};for(;++a<r.children.length;)Te(s,r.children[a]);for(a=-1;++a<r.children.length;){let l=r.children[a].type.toUpperCase();e.nodeIndex=o.count,e.typeIndex=o.types.get(l)||0,e.nodeCount=s.count,e.typeCount=s.types.get(l);let u=H(i,n),d=Oe(e,u,r.children[a],a,r);if(n=H(d.generalSibling,d.adjacentSibling),e.one&&e.found)break;Te(o,r.children[a])}}function Ot(e,t,r,i,n){let a={directChild:void 0,descendant:void 0,adjacentSibling:void 0,generalSibling:void 0},s=-1;for(;++s<t.length;){let o=t[s];if(e.one&&e.found)break;if(e.shallow&&o.rule.rule)throw new Error("Expected selector without nesting");if(ke(o.rule,r,i,n,e)){let c=o.rule.rule;if(c){let l={type:"ruleSet",rule:c},u=c.nestingOperator==="+"?"adjacentSibling":c.nestingOperator==="~"?"generalSibling":c.nestingOperator===">"?"directChild":"descendant";K(a,u,l)}else e.found=!0,e.results.includes(r)||e.results.push(r)}o.rule.nestingOperator===null?K(a,"descendant",o):o.rule.nestingOperator==="~"&&K(a,"generalSibling",o)}return a}function H(e,t){return e&&t&&e.length>0&&t.length>0?[...e,...t]:e&&e.length>0?e:t&&t.length>0?t:kt}function K(e,t,r){let i=e[t];i?i.push(r):e[t]=[r]}function Te(e,t){let r=t.type.toUpperCase(),i=(e.types.get(r)||0)+1;e.count++,e.types.set(r,i)}var je=ue(Fe(),1),Q=new je.CssSelectorParser;Q.registerAttrEqualityMods("~","^","$","*");Q.registerSelectorPseudos("any","matches","not","has");Q.registerNestingOperators(">","+","~");function Me(e){if(typeof e!="string")throw new TypeError("Expected `string` as selector, not `"+e+"`");return Q.parse(e)}function jr(e,t){let r=re(e,t);return r.one=!0,r.shallow=!0,S(r,t||void 0),r.results.length>0}function Mr(e,t){let r=re(e,t);return r.one=!0,S(r,t||void 0),r.results[0]||null}function T(e,t){let r=re(e,t);return S(r,t||void 0),r.results}function re(e,t){return{rootQuery:j(Me(e)),results:[],scopeNodes:t?A(t)&&(t.type==="RootNode"||t.type==="root")?t.children:[t]:[],one:!1,shallow:!1,found:!1,typeIndex:void 0,nodeIndex:void 0,typeCount:void 0,nodeCount:void 0}}var Dt=[],W=function(e,t,r){let i=ce(r||t),n=!t||t.cascade===void 0||t.cascade===null?!0:t.cascade;return a(e);function a(s,o,c){let l=s.children||Dt,u=-1,d=0;if(i(s,o,c))return null;if(l.length>0){for(;++u<l.length;)a(l[u],u,s)&&(l[d++]=l[u]);if(n&&!d)return null;l.length=d}return s}};var Bt=["abstract","summary","keypoints","dedication","epigraph","data_availability","acknowledgments"],Br=["title","subtitle","short_title","description","thumbnail","thumbnailOptimized","banner","bannerOptimized","tags","authors","reviewers","editors","contributors","venue","github","keywords","affiliations","funding","copyright","options","parts",...Bt],$e={author:"authors",reviewer:"reviewers",editor:"editors",contributor:"contributors",affiliation:"affiliations",export:"exports",download:"downloads",jupyter:"thebe",part:"parts",ack:"acknowledgments",acknowledgements:"acknowledgments",acknowledgment:"acknowledgments",acknowledgement:"acknowledgments",availability:"data_availability",dataAvailability:"data_availability","data-availability":"data_availability",quote:"epigraph",plain_language_summary:"summary","plain-language-summary":"summary",plainLanguageSummary:"summary",lay_summary:"summary","lay-summary":"summary",keyPoints:"keypoints",key_points:"keypoints","key-points":"keypoints",image:"thumbnail",identifier:"identifiers"};function M(e){if(!e)return[];if(typeof e=="string")return M([e]);let t=[];return e.map(r=>r.toLowerCase()).forEach(r=>{t.push(r),Object.entries($e).forEach(([i,n])=>{(r===i||r===n)&&(t.includes(n)||t.unshift(n),t.includes(i)||t.push(i))})}),t}function Ne(e,t){let r=M(t);return r.length===0?[]:T("block",e).filter(n=>{var a,s,o;let c=(!((a=n.data)===null||a===void 0)&&a.tags&&Array.isArray(n.data.tags)?n.data.tags:[]).map(u=>u?.toLowerCase()),l=(o=(s=n.data)===null||s===void 0?void 0:s.part)===null||o===void 0?void 0:o.toLowerCase();return r.map(u=>l===u||c.includes(u)).reduce((u,d)=>u||d,!1)})}function Ht(e,t){if(!e)return[];let r=M(t);if(r.length===0)return[];let i=[];return r.forEach(n=>{Object.entries(e).forEach(([a,s])=>{n===a.toLowerCase()&&i.push(...s.mdast.children)})}),i}function Vt(e,t,r){var i;let n={type:"block",children:e};return r?.removePartData||((i=n.data)!==null&&i!==void 0||(n.data={}),n.data.part=t),n}function Ue(e,t){let r=W(e,t);return r||(r=W(e,{cascade:!1},t)),r}function ze(e,t,r){var i;let n=M(t);if(n.length===0)return;let a=!1,s=[],o=[];if((i=e.children)===null||i===void 0||i.forEach((l,u)=>{var d;if(a&&l.type==="paragraph"&&(o.push(U(l)),l.type="__part_delete__"),(l.type!=="__part_delete__"||u===e.children.length-1)&&(a=!1,o.length>0&&(s.push(Vt(o,n[0],r)),o=[],T("__part_heading__",e).forEach(h=>{h.type="__part_delete__"}))),l.type==="block"){if(!((d=l.data)===null||d===void 0)&&d.part||e.type!=="root")return;let h=ze(l,n);h&&s.push(...h.children)}else l.type==="heading"&&n.includes(F(l).toLowerCase())&&(a=!0,l.type="__part_heading__")}),T("__part_heading__",e).forEach(l=>{l.type="heading"}),s.length===0)return;let c={type:"root",children:s};return Ue(e,"__part_delete__"),c}function Qt(e,t,r){let i=M(t);if(i.length===0)return;let n=Ht(r?.frontmatterParts,t),a=Ne(e,t);if(n.length===0&&a.length===0)return r?.requireExplicitPart?void 0:ze(e,i);let o={type:"root",children:U(n.length>0?n:a).map(c=>{var l;return(l=c.data)!==null&&l!==void 0||(c.data={}),c.data.part=i[0],c.data.tags&&Array.isArray(c.data.tags)&&c.data.tags.reduce((u,d)=>u||i.includes(d.toLowerCase()),!1)&&(c.data.tags=c.data.tags.filter(u=>!i.includes(u.toLowerCase())),c.data.tags.length===0&&delete c.data.tags),r?.removePartData&&delete c.data.part,r?.keepVisibility||delete c.visibility,c})};return a.forEach(c=>{c.type="__delete__"}),Ue(e,"__delete__"),o}var ne;(function(e){e.validConfigStructure="valid-config-structure",e.siteConfigExists="site-config-exists",e.projectConfigExists="project-config-exists",e.validSiteConfig="valid-site-config",e.validProjectConfig="valid-project-config",e.configHasNoDeprecatedFields="config-has-no-deprecated-fields",e.frontmatterIsYaml="frontmatter-is-yaml",e.validPageFrontmatter="valid-page-frontmatter",e.validFrontmatterExportList="valid-frontmatter-export-list",e.docxRenders="docx-renders",e.jatsRenders="jats-renders",e.mdRenders="md-renders",e.mecaIncludesJats="meca-includes-jats",e.mecaExportsBuilt="meca-exports-built",e.mecaFilesCopied="meca-files-copied",e.pdfBuildCommandsAvailable="pdf-build-commands-available",e.pdfBuildsWithoutErrors="pdf-builds-without-errors",e.pdfBuilds="pdf-builds",e.texRenders="tex-renders",e.exportExtensionCorrect="export-extension-correct",e.exportArticleExists="export-article-exists",e.texParses="tex-parses",e.jatsParses="jats-parses",e.mystFileLoads="myst-file-loads",e.selectedFileIsProcessed="selected-file-is-processed",e.directiveRegistered="directive-registered",e.directiveKnown="directive-known",e.directiveArgumentCorrect="directive-argument-correct",e.directiveOptionsCorrect="directive-options-correct",e.directiveBodyCorrect="directive-body-correct",e.roleRegistered="role-registered",e.roleKnown="role-known",e.roleBodyCorrect="role-body-correct",e.tocContentsExist="toc-contents-exist",e.encounteredLegacyTOC="encountered-legacy-toc",e.validTOCStructure="valid-toc-structure",e.validTOC="valid-toc",e.tocWritten="toc-written",e.imageDownloads="image-downloads",e.imageExists="image-exists",e.imageFormatConverts="image-format-converts",e.imageCopied="image-copied",e.imageFormatOptimizes="image-format-optimizes",e.mathLabelLifted="math-label-lifted",e.mathEquationEnvRemoved="math-equation-env-removed",e.mathEqnarrayReplaced="math-eqnarray-replaced",e.mathAlignmentAdjusted="math-alignment-adjusted",e.mathRenders="math-renders",e.referenceTemplateFills="reference-template-fills",e.identifierIsUnique="identifier-is-unique",e.referenceTargetResolves="reference-target-resolves",e.referenceSyntaxValid="reference-syntax-valid",e.referenceTargetExplicit="reference-target-explicit",e.footnoteReferencesDefinition="footnote-references-definition",e.intersphinxReferencesResolve="intersphinx-references-resolve",e.mystLinkValid="myst-link-valid",e.sphinxLinkValid="sphinx-link-valid",e.rridLinkValid="rrid-link-valid",e.rorLinkValid="ror-link-valid",e.wikipediaLinkValid="wikipedia-link-valid",e.doiLinkValid="doi-link-valid",e.linkResolves="link-resolves",e.linkTextExists="link-text-exists",e.notebookAttachmentsResolve="notebook-attachments-resolve",e.notebookOutputCopied="notebook-output-copied",e.mdastSnippetImports="mdast-snippet-imports",e.includeContentFilters="include-content-filters",e.includeContentLoads="include-content-loads",e.gatedNodesJoin="gated-nodes-join",e.glossaryUsesDefinitionList="glossary-uses-definition-list",e.blockMetadataLoads="block-metadata-loads",e.indexEntriesResolve="index-entries-resolve",e.citationIsUnique="citation-is-unique",e.bibFileExists="bib-file-exists",e.citationRenders="citation-renders",e.codeMetadataLifted="code-metadata-lifted",e.codeMetatagsValid="code-metatags-valid",e.codeLangDefined="code-lang-defined",e.codeMetadataLoads="code-metadata-loads",e.inlineCodeMalformed="inline-code-malformed",e.inlineExpressionRenders="inline-expression-renders",e.staticFileCopied="static-file-copied",e.exportFileCopied="export-file-copied",e.sourceFileCopied="source-file-copied",e.templateFileCopied="template-file-copied",e.staticActionFileCopied="static-action-file-copied",e.pluginLoads="plugin-loads",e.pluginExecutionFailed="plugin-execution-failed",e.containerChildrenValid="container-children-valid",e.mystJsonValid="myst-json-valid"})(ne||(ne={}));function Wt(e,t){var r;let i=(r=typeof t=="number"?t:Array.isArray(t)?t?.length:Object.keys(t??{}).length)!==null&&r!==void 0?r:0;return e.replace("%s",String(i)).replace(/\((?:([a-z0-9A-Z-]*)\|)?([a-z0-9A-Z-]*)\)/g,i===1?"$1":"$2")}function Zt(e,{single:t,pair:r,triple:i,see:n,seealso:a},s,o){if(e.trim().length===0)return;let c=e.split(/(?<!\\):/).map(l=>l.trim().replace("\\:",":"));if(c.length>2)C(s,`Too many colons encountered in index line "${e}"`,{node:o,note:'Index entry must follow pattern "type: entry; sub entry"'});else if(c.length===2){let[l,u]=c;l==="single"?t.push(u):l==="pair"?r.push(u):l==="triple"?i.push(u):l==="see"?n.push(u):l==="seealso"?a.push(u):C(s,`Unknown index entry type "${l}"`,{node:o,note:"Allowed types include: single, pair, triple, see, and seealso"})}else t.push(...c[0].split(/(?<!\\),/).map(l=>l.trim().replace("\\,",",")))}function $(e){let t=e.startsWith("!"),r=e.replace(/^!/,"").replace(/^\\!/,"!").split(/(?<!\\);/).map(i=>i.trim().replace("\\;",";")).filter(i=>i!=="");return{emphasis:t,splitEntry:r}}function w(e,t,r,i){return{entry:e,subEntry:t?{value:t,kind:i??"entry"}:void 0,emphasis:r}}function Jt({single:e,pair:t,triple:r,see:i,seealso:n},a,s){let o=[];e.forEach(l=>{let{emphasis:u,splitEntry:d}=$(l);if(d.length!==1&&d.length!==2)C(a,`Unable to parse index "single" entry "${l}"`,{node:s,note:'Single index entry must follow pattern "entry" or "entry; sub entry"'});else{let[h,E]=d;o.push(w(h,E,u))}}),t.forEach(l=>{let{emphasis:u,splitEntry:d}=$(l);if(d.length!==2)C(a,`Unable to parse index "pair" entry "${l}"`,{node:s,note:'Pair index entry must follow pattern "entry; sub entry"'});else{let[h,E]=d;o.push(w(h,E,u)),o.push(w(E,h,u))}}),r.forEach(l=>{let{emphasis:u,splitEntry:d}=$(l);d.length!==3?C(a,`Unable to parse index "triple" entry "${l}"`,{node:s,note:'Triple index entry must follow pattern "entry one; entry two; entry three"'}):(o.push(w(d[0],d[1],u)),o.push(w(d[1],d[0],u)),o.push(w(d[1],d[2],u)),o.push(w(d[2],d[1],u)),o.push(w(d[0],d[2],u)),o.push(w(d[2],d[0],u)))});let c=(l,u)=>{let{emphasis:d,splitEntry:h}=$(l);if(h.length!==2)C(a,`Unable to parse index "${u}" entry "${l}"`,{node:s,note:'See index entry must follow pattern "entry; sub entry"'});else{let[E,O]=h;o.push(w(E,O,d,u))}};return i.forEach(l=>{c(l,"see")}),n.forEach(l=>{c(l,"seealso")}),o.length===0&&C(a,"No entries parsed from index directive",{node:s}),o}function De(e){return!["crossReference","cite","footnoteDefinition","footnoteReference"].includes(e.type)}var Yt=new Set(["comment","mystComment"]);function Gt(e,t,r){let i=!1,n,a=[];return J(e,s=>{if(i&&s.type==="heading"||r&&a.length>=r)return N;if(s.identifier===t&&s.type==="heading"&&(i=!0,n=s.html_id||s.identifier),i)return Yt.has(s.type)||a.push(s),Z}),{htmlId:n,nodes:a}}function Xt(e,t,r){var i,n;let a=!1,s=[];return J(e,o=>{if(a&&o.type==="definitionTerm"){if(s.length>1)return N}else if(a&&o.type!=="definitionDescription")return N;if(o.identifier===t&&o.type==="definitionTerm"&&(s.push(o),a=!0),a)return o.type==="definitionDescription"&&s.push(o),Z}),{htmlId:((i=s?.[0])===null||i===void 0?void 0:i.html_id)||((n=s?.[0])===null||n===void 0?void 0:n.identifier),nodes:[{type:"definitionList",key:"dl",children:s.slice(0,r)}]}}function qt(e,t,r){if(r===0)return{nodes:[]};let i=T(`[identifier=${t}],[key=${t}]`,e).find(n=>De(n));if(!i)return{nodes:[]};switch(i.type){case"heading":return Gt(e,t,r);case"definitionTerm":return Xt(e,t,r);default:return{htmlId:i.html_id||i.identifier,nodes:[i]}}}var ie;(function(e){e.content="notebook-content",e.code="notebook-code"})(ie||(ie={}));var oe;(function(e){e.removeStderr="remove-stderr",e.removeStdout="remove-stdout",e.hideCell="hide-cell",e.hideInput="hide-input",e.hideOutput="hide-output",e.removeCell="remove-cell",e.removeInput="remove-input",e.removeOutput="remove-output"})(oe||(oe={}));var ae;(function(e){e.string="string",e.number="number",e.boolean="boolean",e.parsed="parsed"})(ae||(ae={}));var se;(function(e){e.heading="heading",e.equation="equation",e.subequation="subequation",e.figure="figure",e.table="table",e.code="code"})(se||(se={}));var le;(function(e){e.admonition="admonition",e.attention="attention",e.caution="caution",e.danger="danger",e.error="error",e.important="important",e.hint="hint",e.note="note",e.seealso="seealso",e.tip="tip",e.warning="warning"})(le||(le={}));export{Kt as a,C as b,pe as c,Ze as d,Je as e,me as f,Ye as g,Ge as h,Xe as i,F as j,U as k,qe as l,Ke as m,Ie as n,Re as o,Wt as p,z as q,jr as r,Mr as s,T as t,Bt as u,Br as v,$e as w,Ne as x,Qt as y,Zt as z,Jt as A,ne as B,De as C,qt as D,ie as E,ae as F,se as G,le as H};
