import{b as i}from"/fnc/build/_shared/chunk-2NH4LW52.js";function o(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}function s(e,n){e.sol()&&(n.label=!0,n.commandMode=0);var r=e.peek();return r==" "||r=="	"?(n.label=!1,n.commandMode==0?n.commandMode=1:(n.commandMode<0||n.commandMode==2)&&(n.commandMode=0)):r!="."&&n.commandMode>0&&(r==":"?n.commandMode=-1:n.commandMode=2),(r==="("||r==="	")&&(n.label=!1),r===";"?(e.skipToEnd(),"comment"):e.match(/^[-+]?\d+(\.\d+)?([eE][-+]?\d+)?/)?"number":r=='"'?e.skipTo('"')?(e.next(),"string"):(e.skipToEnd(),"error"):e.match(t)||e.match($)?"operator":e.match(c)?null:l.test(r)?(e.next(),"bracket"):n.commandMode>0&&e.match(m)?"controlKeyword":e.match(f)?"builtin":e.match(a)?"variable":r==="$"||r==="^"?(e.next(),"builtin"):r==="@"?(e.next(),"string.special"):/[\w%]/.test(r)?(e.eatWhile(/[\w%]/),"variable"):(e.next(),"error")}var $,t,c,l,a,d,u,f,m,b,p=i(()=>{$=new RegExp("^[\\+\\-\\*/&#!_?\\\\<>=\\'\\[\\]]"),t=new RegExp("^(('=)|(<=)|(>=)|('>)|('<)|([[)|(]])|(^$))"),c=new RegExp("^[\\.,:]"),l=new RegExp("[()]"),a=new RegExp("^[%A-Za-z][A-Za-z0-9]*"),d=["break","close","do","else","for","goto","halt","hang","if","job","kill","lock","merge","new","open","quit","read","set","tcommit","trollback","tstart","use","view","write","xecute","b","c","d","e","f","g","h","i","j","k","l","m","n","o","q","r","s","tc","tro","ts","u","v","w","x"],u=["\\$ascii","\\$char","\\$data","\\$ecode","\\$estack","\\$etrap","\\$extract","\\$find","\\$fnumber","\\$get","\\$horolog","\\$io","\\$increment","\\$job","\\$justify","\\$length","\\$name","\\$next","\\$order","\\$piece","\\$qlength","\\$qsubscript","\\$query","\\$quit","\\$random","\\$reverse","\\$select","\\$stack","\\$test","\\$text","\\$translate","\\$view","\\$x","\\$y","\\$a","\\$c","\\$d","\\$e","\\$ec","\\$es","\\$et","\\$f","\\$fn","\\$g","\\$h","\\$i","\\$j","\\$l","\\$n","\\$na","\\$o","\\$p","\\$q","\\$ql","\\$qs","\\$r","\\$re","\\$s","\\$st","\\$t","\\$tr","\\$v","\\$z"],f=o(u),m=o(d);b={name:"mumps",startState:function(){return{label:!1,commandMode:0}},token:function(e,n){var r=s(e,n);return n.label?"tag":r}}});p();export{b as mumps};
