import{b as r}from"fncbook.com/build/_shared/chunk-2NH4LW52.js";var o,p,d=r(()=>{o={"+":"inserted","-":"deleted","@":"meta"},p={name:"diff",token:function(n){var e=n.string.search(/[\t ]+?$/);if(!n.sol()||e===0)return n.skipToEnd(),("error "+(o[n.string.charAt(0)]||"")).replace(/ $/,"");var i=o[n.peek()]||n.skipToEnd();return e===-1?n.skipToEnd():n.pos=e,i}}});d();export{p as diff};
