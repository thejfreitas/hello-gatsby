(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[851],{648:function(n,t,e){var r=e(7854),o=e(1694),i=e(614),a=e(4326),u=e(5112)("toStringTag"),c=r.Object,l="Arguments"==a(function(){return arguments}());n.exports=o?a:function(n){var t,e,r;return void 0===n?"Undefined":null===n?"Null":"string"==typeof(e=function(n,t){try{return n[t]}catch(e){}}(t=c(n),u))?e:l?a(t):"Object"==(r=a(t))&&i(t.callee)?"Arguments":r}},6091:function(n,t,e){var r=e(6530).PROPER,o=e(7293),i=e(1361);n.exports=function(n){return o((function(){return!!i[n]()||"​᠎"!=="​᠎"[n]()||r&&i[n].name!==n}))}},3111:function(n,t,e){var r=e(1702),o=e(4488),i=e(1340),a=e(1361),u=r("".replace),c="["+a+"]",l=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),s=function(n){return function(t){var e=i(o(t));return 1&n&&(e=u(e,l,"")),2&n&&(e=u(e,f,"")),e}};n.exports={start:s(1),end:s(2),trim:s(3)}},1694:function(n,t,e){var r={};r[e(5112)("toStringTag")]="z",n.exports="[object z]"===String(r)},1340:function(n,t,e){var r=e(7854),o=e(648),i=r.String;n.exports=function(n){if("Symbol"===o(n))throw TypeError("Cannot convert a Symbol value to a string");return i(n)}},1361:function(n){n.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},8702:function(n,t,e){"use strict";var r=e(2109),o=e(3111).end,i=e(6091)("trimEnd"),a=i?function(){return o(this)}:"".trimEnd;r({target:"String",proto:!0,name:"trimEnd",forced:i},{trimEnd:a,trimRight:a})},4875:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return Bn}});var r=e(7294),o=e(396);var i=e(181);function a(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i=[],a=!0,u=!1;try{for(e=e.call(n);!(a=(r=e.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==e.return||e.return()}finally{if(u)throw o}}return i}}(n,t)||(0,i.Z)(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e(8702);function u(){return(u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var c=["children","options"],l=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((function(n,t){return n[t.toLowerCase()]=t,n}),{for:"htmlFor"}),f={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},s=["style","script"],p=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,g=/mailto:/i,d=/\n{2,}$/,m=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,y=/^ *> ?/gm,h=/^ {2,}\n/,v=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,k=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,x=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,_=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,b=/^(?:\n *)*\n/,E=/\r\n?/g,S=/^\[\^([^\]]+)](:.*)\n/,H=/^\[\^([^\]]+)]/,w=/\f/g,I=/^\s*?\[(x|\s)\]/,A=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,M=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,O=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,C=/&([a-z]+);/g,L=/^<!--[\s\S]*?(?:-->)/,T=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,G=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,$=/^\{.*\}$/,R=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,z=/^<([^ >]+@[^ >]+)>/,X=/^<([^ >]+:\/[^ >]+)>/,j=/ *\n+$/,W=/(?:^|\n)( *)$/,N=/-([a-z])?/gi,U=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,B=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,P=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,D=/^\[([^\]]*)\] ?\[([^\]]*)\]/,Z=/(\[|\])/g,F=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,q=/\t/g,V=/^ *\| */,Q=/(^ *\||\| *$)/g,J=/ *$/,K=/^ *:-+: *$/,Y=/^ *:-+ *$/,nn=/^ *-+: *$/,tn=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,en=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,rn=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,on=/^\\([^0-9A-Za-z\s])/,an=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,un=/^\n+/,cn=/^([ \t]*)/,ln=/\\([^0-9A-Z\s])/gi,fn=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),sn=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),pn=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),gn="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",dn=new RegExp("^\\[("+gn+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),mn=new RegExp("^!\\[("+gn+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),yn=[m,x,k,A,M,L,sn,pn,U],hn=[].concat(yn,[/^[^\n]+(?:  \n|\n{2,})/,O,G]);function vn(n){return n.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function kn(n){return nn.test(n)?"right":K.test(n)?"center":Y.test(n)?"left":null}function xn(n,t,e){var r=e.t;e.t=!0;var o=t(n.trim(),e);e.t=r;var i=[[]];return o.forEach((function(n,t){"tableSeparator"===n.type?0!==t&&t!==o.length-1&&i.push([]):("text"!==n.type||null!=o[t+1]&&"tableSeparator"!==o[t+1].type||(n.content=n.content.replace(J,"")),i[i.length-1].push(n))})),i}function _n(n,t,e){e.o=!0;var r=xn(n[1],t,e),o=n[2].replace(Q,"").split("|").map(kn),i=function(n,t,e){return n.trim().split("\n").map((function(n){return xn(n,t,e)}))}(n[3],t,e);return e.o=!1,{align:o,cells:i,header:r,type:"table"}}function bn(n,t){return null==n.align[t]?{}:{textAlign:n.align[t]}}function En(n){return function(t,e){return e.o?n.exec(t):null}}function Sn(n){return function(t,e){return e.o||e.u?n.exec(t):null}}function Hn(n){return function(t,e){return e.o||e.u?null:n.exec(t)}}function wn(n){return function(t){return n.exec(t)}}function In(n,t,e){if(t.o||t.u)return null;if(e&&!e.endsWith("\n"))return null;var r="";n.split("\n").every((function(n){return!yn.some((function(t){return t.test(n)}))&&(r+=n+"\n",n.trim())}));var o=r.trimEnd();return""==o?null:[r,o]}function An(n){try{if(decodeURIComponent(n).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(n){return null}return n}function Mn(n){return n.replace(ln,"$1")}function On(n,t,e){var r=e.o||!1,o=e.u||!1;e.o=!0,e.u=!0;var i=n(t,e);return e.o=r,e.u=o,i}function Cn(n,t,e){var r=e.o||!1,o=e.u||!1;e.o=!1,e.u=!0;var i=n(t,e);return e.o=r,e.u=o,i}function Ln(n,t,e){return e.o=!1,n(t+"\n\n",e)}var Tn,Gn,$n=function(n,t,e){return{content:On(t,n[1],e)}};function Rn(){return{}}function zn(){return null}function Xn(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.filter(Boolean).join(" ")}function jn(n,t,e){for(var r=n,o=t.split(".");o.length&&void 0!==(r=r[o[0]]);)o.shift();return r||e}function Wn(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.overrides=t.overrides||{},t.slugify=t.slugify||vn,t.namedCodesToUnicode=t.namedCodesToUnicode?u({},f,t.namedCodesToUnicode):f;var e=t.createElement||r.createElement;function o(n,r){for(var o=jn(t.overrides,"".concat(n,".props"),{}),i=arguments.length,a=new Array(i>2?i-2:0),c=2;c<i;c++)a[c-2]=arguments[c];return e.apply(void 0,[function(n,t){var e=jn(t,n);return e?"function"==typeof e||"object"==typeof e&&"render"in e?e:jn(t,"".concat(n,".component"),n):n}(n,t.overrides),u({},r,o,{className:Xn(null==r?void 0:r.className,o.className)||void 0})].concat(a))}function i(n){var e=!1;t.forceInline?e=!0:t.forceBlock||(e=!1===F.test(n));for(var i=gn(ln(e?n:"".concat(n.trimEnd().replace(un,""),"\n\n"),{o:e}));"string"==typeof i[i.length-1]&&!i[i.length-1].trim();)i.pop();if(null===t.wrapper)return i;var a,u=t.wrapper||(e?"span":"div");if(i.length>1||t.forceWrapper)a=i;else{if(1===i.length)return"string"==typeof(a=i[0])?o("span",{key:"outer"},a):a;a=null}return r.createElement(u,{key:"outer"},a)}function c(n){var t=n.match(p);return t?t.reduce((function(n,t,e){var o,a=t.indexOf("=");if(-1!==a){var u=(o=t.slice(0,a),-1!==o.indexOf("-")&&null===o.match(T)&&(o=o.replace(N,(function(n,t){return t.toUpperCase()}))),o).trim(),c=function(n){var t=n[0];return('"'===t||"'"===t)&&n.length>=2&&n[n.length-1]===t?n.slice(1,-1):n}(t.slice(a+1).trim()),f=l[u]||u,s=n[f]=function(n,t){return"style"===n?t.split(/;\s?/).reduce((function(n,t){var e=t.slice(0,t.indexOf(":"));return n[e.replace(/(-[a-z])/g,(function(n){return n[1].toUpperCase()}))]=t.slice(e.length+1).trim(),n}),{}):"href"===n?An(t):(t.match($)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(u,c);"string"==typeof s&&(O.test(s)||G.test(s))&&(n[f]=r.cloneElement(i(s.trim()),{key:e}))}else"style"!==t&&(n[l[t]||t]=!0);return n}),{}):void 0}var Q=[],J={},K={blockQuote:{i:Hn(m),l:Tn.HIGH,_:function(n,t,e){return{content:t(n[0].replace(y,""),e)}},p:function(n,t,e){return o("blockquote",{key:e.g},t(n.content,e))}},breakLine:{i:wn(h),l:Tn.HIGH,_:Rn,p:function(n,t,e){return o("br",{key:e.g})}},breakThematic:{i:Hn(v),l:Tn.HIGH,_:Rn,p:function(n,t,e){return o("hr",{key:e.g})}},codeBlock:{i:Hn(x),l:Tn.MAX,_:function(n){return{content:n[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},p:function(n,t,e){return o("pre",{key:e.g},o("code",{className:n.lang?"lang-".concat(n.lang):""},n.content))}},codeFenced:{i:Hn(k),l:Tn.MAX,_:function(n){return{content:n[3],lang:n[2]||void 0,type:"codeBlock"}}},codeInline:{i:Sn(_),l:Tn.LOW,_:function(n){return{content:n[2]}},p:function(n,t,e){return o("code",{key:e.g},n.content)}},footnote:{i:Hn(S),l:Tn.MAX,_:function(n){return Q.push({footnote:n[2],identifier:n[1]}),{}},p:zn},footnoteReference:{i:En(H),l:Tn.HIGH,_:function(n){return{content:n[1],target:"#".concat(t.slugify(n[1]))}},p:function(n,t,e){return o("a",{key:e.g,href:An(n.target)},o("sup",{key:e.g},n.content))}},gfmTask:{i:En(I),l:Tn.HIGH,_:function(n){return{completed:"x"===n[1].toLowerCase()}},p:function(n,t,e){return o("input",{checked:n.completed,key:e.g,readOnly:!0,type:"checkbox"})}},heading:{i:Hn(A),l:Tn.HIGH,_:function(n,e,r){return{content:On(e,n[2],r),id:t.slugify(n[2]),level:n[1].length}},p:function(n,t,e){return n.tag="h".concat(n.level),o(n.tag,{id:n.id,key:e.g},t(n.content,e))}},headingSetext:{i:Hn(M),l:Tn.MAX,_:function(n,t,e){return{content:On(t,n[1],e),level:"="===n[2]?1:2,type:"heading"}}},htmlComment:{i:wn(L),l:Tn.HIGH,_:function(){return{}},p:zn},image:{i:Sn(mn),l:Tn.HIGH,_:function(n){return{alt:n[1],target:Mn(n[2]),title:n[3]}},p:function(n,t,e){return o("img",{key:e.g,alt:n.alt||void 0,title:n.title||void 0,src:An(n.target)})}},link:{i:En(dn),l:Tn.LOW,_:function(n,t,e){return{content:Cn(t,n[1],e),target:Mn(n[2]),title:n[3]}},p:function(n,t,e){return o("a",{key:e.g,href:An(n.target),title:n.title},t(n.content,e))}},linkAngleBraceStyleDetector:{i:En(X),l:Tn.MAX,_:function(n){return{content:[{content:n[1],type:"text"}],target:n[1],type:"link"}}},linkBareUrlDetector:{i:function(n,t){return t.m?null:En(R)(n,t)},l:Tn.MAX,_:function(n){return{content:[{content:n[1],type:"text"}],target:n[1],title:void 0,type:"link"}}},linkMailtoDetector:{i:En(z),l:Tn.MAX,_:function(n){var t=n[1],e=n[1];return g.test(e)||(e="mailto:"+e),{content:[{content:t.replace("mailto:",""),type:"text"}],target:e,type:"link"}}},list:{i:function(n,t,e){var r=W.exec(e);return!r||!t.h&&t.o?null:pn.exec(n=r[1]+n)},l:Tn.HIGH,_:function(n,t,e){var r=n[2],o=r.length>1,i=o?+r:void 0,a=n[0].replace(d,"\n").match(sn),u=!1;return{items:a.map((function(n,r){var o=fn.exec(n)[0].length,i=new RegExp("^ {1,"+o+"}","gm"),c=n.replace(i,"").replace(fn,""),l=r===a.length-1,f=-1!==c.indexOf("\n\n")||l&&u;u=f;var s,p=e.o,g=e.h;e.h=!0,f?(e.o=!1,s=c.replace(j,"\n\n")):(e.o=!0,s=c.replace(j,""));var d=t(s,e);return e.o=p,e.h=g,d})),ordered:o,start:i}},p:function(n,t,e){return o(n.ordered?"ol":"ul",{key:e.g,start:n.start},n.items.map((function(n,r){return o("li",{key:r},t(n,e))})))}},newlineCoalescer:{i:Hn(b),l:Tn.LOW,_:Rn,p:function(){return"\n"}},paragraph:{i:In,l:Tn.LOW,_:$n,p:function(n,t,e){return o("p",{key:e.g},t(n.content,e))}},ref:{i:En(B),l:Tn.MAX,_:function(n){return J[n[1]]={target:n[2],title:n[4]},{}},p:zn},refImage:{i:Sn(P),l:Tn.MAX,_:function(n){return{alt:n[1]||void 0,ref:n[2]}},p:function(n,t,e){return o("img",{key:e.g,alt:n.alt,src:An(J[n.ref].target),title:J[n.ref].title})}},refLink:{i:En(D),l:Tn.MAX,_:function(n,t,e){return{content:t(n[1],e),fallbackContent:t(n[0].replace(Z,"\\$1"),e),ref:n[2]}},p:function(n,t,e){return J[n.ref]?o("a",{key:e.g,href:An(J[n.ref].target),title:J[n.ref].title},t(n.content,e)):o("span",{key:e.g},t(n.fallbackContent,e))}},table:{i:Hn(U),l:Tn.HIGH,_:_n,p:function(n,t,e){return o("table",{key:e.g},o("thead",null,o("tr",null,n.header.map((function(r,i){return o("th",{key:i,style:bn(n,i)},t(r,e))})))),o("tbody",null,n.cells.map((function(r,i){return o("tr",{key:i},r.map((function(r,i){return o("td",{key:i,style:bn(n,i)},t(r,e))})))}))))}},tableSeparator:{i:function(n,t){return t.t?V.exec(n):null},l:Tn.HIGH,_:function(){return{type:"tableSeparator"}},p:function(){return" | "}},text:{i:wn(an),l:Tn.MIN,_:function(n){return{content:n[0].replace(C,(function(n,e){return t.namedCodesToUnicode[e]?t.namedCodesToUnicode[e]:n}))}},p:function(n){return n.content}},textBolded:{i:Sn(tn),l:Tn.MED,_:function(n,t,e){return{content:t(n[2],e)}},p:function(n,t,e){return o("strong",{key:e.g},t(n.content,e))}},textEmphasized:{i:Sn(en),l:Tn.LOW,_:function(n,t,e){return{content:t(n[2],e)}},p:function(n,t,e){return o("em",{key:e.g},t(n.content,e))}},textEscaped:{i:Sn(on),l:Tn.HIGH,_:function(n){return{content:n[1],type:"text"}}},textStrikethroughed:{i:Sn(rn),l:Tn.LOW,_:$n,p:function(n,t,e){return o("del",{key:e.g},t(n.content,e))}}};!0!==t.disableParsingRawHTML&&(K.htmlBlock={i:wn(O),l:Tn.HIGH,_:function(n,t,e){var r,o=a(n[3].match(cn),2)[1],i=new RegExp("^".concat(o),"gm"),u=n[3].replace(i,""),l=(r=u,hn.some((function(n){return n.test(r)}))?Ln:On),f=n[1].toLowerCase(),p=-1!==s.indexOf(f);e.m=e.m||"a"===f;var g=p?n[3]:l(t,u,e);return e.m=!1,{attrs:c(n[2]),content:g,noInnerParse:p,tag:p?f:n[1]}},p:function(n,t,e){return o(n.tag,u({key:e.g},n.attrs),n.noInnerParse?n.content:t(n.content,e))}},K.htmlSelfClosing={i:wn(G),l:Tn.HIGH,_:function(n){return{attrs:c(n[2]||""),tag:n[1]}},p:function(n,t,e){return o(n.tag,u({},n.attrs,{key:e.g}))}});var Y,nn,ln=function(n){var t=Object.keys(n);function e(r,o){for(var i=[],a="";r;)for(var u=0;u<t.length;){var c=t[u],l=n[c],f=l.i(r,o,a);if(f){var s=f[0];r=r.substring(s.length);var p=l._(f,e,o);null==p.type&&(p.type=c),i.push(p),a=s;break}u++}return i}return t.sort((function(t,e){var r=n[t].l,o=n[e].l;return r!==o?r-o:t<e?-1:1})),function(n,t){return e(function(n){return n.replace(E,"\n").replace(w,"").replace(q,"    ")}(n),t)}}(K),gn=(Y=K,nn=function(n,t,e){return Y[n.type].p(n,t,e)},function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Array.isArray(t)){for(var r=e.g,o=[],i=!1,a=0;a<t.length;a++){e.g=a;var u=n(t[a],e),c="string"==typeof u;c&&i?o[o.length-1]+=u:null!==u&&o.push(u),i=c}return e.g=r,o}return nn(t,n,e)}),yn=i(n);return Q.length?o("div",null,yn,o("footer",{key:"footer"},Q.map((function(n){return o("div",{id:t.slugify(n.identifier),key:n.identifier},n.identifier,gn(ln(n.footnote,{o:!0})))})))):yn}(Gn=Tn||(Tn={}))[Gn.MAX=0]="MAX",Gn[Gn.HIGH=1]="HIGH",Gn[Gn.MED=2]="MED",Gn[Gn.LOW=3]="LOW",Gn[Gn.MIN=4]="MIN";var Nn=function(n){var t=n.children,e=n.options,o=function(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t.indexOf(e=i[r])>=0||(o[e]=n[e]);return o}(n,c);return r.cloneElement(Wn(t,e),o)},Un=e(8398);function Bn(n){var t=n.data.markdownRemark,e=(0,o.d)(t.frontmatter.featuredImage);return r.createElement(Un.Z,{headerText:t.frontmatter.title},r.createElement("h1",null,t.frontmatter.title),t.frontmatter.intro&&r.createElement("p",null,r.createElement(Nn,null,t.frontmatter.intro)),e&&r.createElement(o.G,{image:e,alt:t.frontmatter.featuredImageAltText}),r.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}))}}}]);
//# sourceMappingURL=component---src-templates-post-js-5dedf1c21bc80ff151e9.js.map