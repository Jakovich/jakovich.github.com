/*!
* inputmask.min.js
* https://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2016 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.2-43
*/
!function(a){"function"==typeof define&&define.amd?define(["inputmask.dependencyLib"],a):"object"==typeof exports?module.exports=a(require("./inputmask.dependencyLib.jquery")):a(window.dependencyLib||jQuery)}(function(a){function b(c,d){return this instanceof b?(a.isPlainObject(c)?d=c:(d=d||{},d.alias=c),this.el=void 0,this.opts=a.extend(!0,{},this.defaults,d),this.noMasksCache=d&&void 0!==d.definitions,this.userOptions=d||{},this.events={},void e(this.opts.alias,d,this.opts)):new b(c,d)}function c(a){var b=document.createElement("input"),c="on"+a,d=c in b;return d||(b.setAttribute(c,"return;"),d="function"==typeof b[c]),b=null,d}function d(b,c){var d=b.getAttribute("type"),e="INPUT"===b.tagName&&-1!==a.inArray(d,c.supportsInputType)||b.isContentEditable||"TEXTAREA"===b.tagName;if(!e&&"INPUT"===b.tagName){var f=document.createElement("input");f.setAttribute("type",d),e="text"===f.type,f=null}return e}function e(b,c,d){var f=d.aliases[b];return f?(f.alias&&e(f.alias,void 0,d),a.extend(!0,d,f),a.extend(!0,d,c),!0):(null===d.mask&&(d.mask=b),!1)}function f(b,c,d){function f(a,c){c=void 0!==c?c:b.getAttribute("data-inputmask-"+a),null!==c&&("string"==typeof c&&(0===a.indexOf("on")?c=window[c]:"false"===c?c=!1:"true"===c&&(c=!0)),d[a]=c)}var g,h,i,j,k=b.getAttribute("data-inputmask");if(k&&""!==k&&(k=k.replace(new RegExp("'","g"),'"'),h=JSON.parse("{"+k+"}")),h){i=void 0;for(j in h)if("alias"===j.toLowerCase()){i=h[j];break}}f("alias",i),d.alias&&e(d.alias,d,c);for(g in c){if(h){i=void 0;for(j in h)if(j.toLowerCase()===g.toLowerCase()){i=h[j];break}}f(g,i)}return a.extend(!0,c,d),c}function g(c,d){function e(b){function d(a,b,c,d){this.matches=[],this.isGroup=a||!1,this.isOptional=b||!1,this.isQuantifier=c||!1,this.isAlternator=d||!1,this.quantifier={min:1,max:1}}function e(b,d,e){var f=c.definitions[d];e=void 0!==e?e:b.matches.length;var g=b.matches[e-1];if(f&&!r){f.placeholder=a.isFunction(f.placeholder)?f.placeholder(c):f.placeholder;for(var h=f.prevalidator,i=h?h.length:0,j=1;j<f.cardinality;j++){var k=i>=j?h[j-1]:[],l=k.validator,m=k.cardinality;b.matches.splice(e++,0,{fn:l?"string"==typeof l?new RegExp(l):new function(){this.test=l}:new RegExp("."),cardinality:m?m:1,optionality:b.isOptional,newBlockMarker:void 0===g||g.def!==(f.definitionSymbol||d),casing:f.casing,def:f.definitionSymbol||d,placeholder:f.placeholder,mask:d}),g=b.matches[e-1]}b.matches.splice(e++,0,{fn:f.validator?"string"==typeof f.validator?new RegExp(f.validator):new function(){this.test=f.validator}:new RegExp("."),cardinality:f.cardinality,optionality:b.isOptional,newBlockMarker:void 0===g||g.def!==(f.definitionSymbol||d),casing:f.casing,def:f.definitionSymbol||d,placeholder:f.placeholder,mask:d})}else b.matches.splice(e++,0,{fn:null,cardinality:0,optionality:b.isOptional,newBlockMarker:void 0===g||g.def!==d,casing:null,def:c.staticDefinitionSymbol||d,placeholder:void 0!==c.staticDefinitionSymbol?d:void 0,mask:d}),r=!1}function f(a,b){a.isGroup&&(a.isGroup=!1,e(a,c.groupmarker.start,0),b!==!0&&e(a,c.groupmarker.end))}function g(a,b,c,d){b.matches.length>0&&(void 0===d||d)&&(c=b.matches[b.matches.length-1],f(c)),e(b,a)}function h(){if(t.length>0){if(m=t[t.length-1],g(k,m,o,!m.isAlternator),m.isAlternator){n=t.pop();for(var a=0;a<n.matches.length;a++)n.matches[a].isGroup=!1;t.length>0?(m=t[t.length-1],m.matches.push(n)):s.matches.push(n)}}else g(k,s,o)}function i(a){function b(a){return a===c.optionalmarker.start?a=c.optionalmarker.end:a===c.optionalmarker.end?a=c.optionalmarker.start:a===c.groupmarker.start?a=c.groupmarker.end:a===c.groupmarker.end&&(a=c.groupmarker.start),a}a.matches=a.matches.reverse();for(var d in a.matches){var e=parseInt(d);if(a.matches[d].isQuantifier&&a.matches[e+1]&&a.matches[e+1].isGroup){var f=a.matches[d];a.matches.splice(d,1),a.matches.splice(e+1,0,f)}void 0!==a.matches[d].matches?a.matches[d]=i(a.matches[d]):a.matches[d]=b(a.matches[d])}return a}for(var j,k,l,m,n,o,p,q=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,r=!1,s=new d,t=[],u=[];j=q.exec(b);)if(k=j[0],r)h();else switch(k.charAt(0)){case c.escapeChar:r=!0;break;case c.optionalmarker.end:case c.groupmarker.end:if(l=t.pop(),void 0!==l)if(t.length>0){if(m=t[t.length-1],m.matches.push(l),m.isAlternator){n=t.pop();for(var v=0;v<n.matches.length;v++)n.matches[v].isGroup=!1;t.length>0?(m=t[t.length-1],m.matches.push(n)):s.matches.push(n)}}else s.matches.push(l);else h();break;case c.optionalmarker.start:t.push(new d(!1,!0));break;case c.groupmarker.start:t.push(new d(!0));break;case c.quantifiermarker.start:var w=new d(!1,!1,!0);k=k.replace(/[{}]/g,"");var x=k.split(","),y=isNaN(x[0])?x[0]:parseInt(x[0]),z=1===x.length?y:isNaN(x[1])?x[1]:parseInt(x[1]);if(("*"===z||"+"===z)&&(y="*"===z?0:1),w.quantifier={min:y,max:z},t.length>0){var A=t[t.length-1].matches;j=A.pop(),j.isGroup||(p=new d(!0),p.matches.push(j),j=p),A.push(j),A.push(w)}else j=s.matches.pop(),j.isGroup||(p=new d(!0),p.matches.push(j),j=p),s.matches.push(j),s.matches.push(w);break;case c.alternatormarker:t.length>0?(m=t[t.length-1],o=m.matches.pop()):o=s.matches.pop(),o.isAlternator?t.push(o):(n=new d(!1,!1,!1,!0),n.matches.push(o),t.push(n));break;default:h()}for(;t.length>0;)l=t.pop(),f(l,!0),s.matches.push(l);return s.matches.length>0&&(o=s.matches[s.matches.length-1],f(o),u.push(s)),c.numericInput&&i(u[0]),u}function f(f,g){if(null===f||""===f)return void 0;if(1===f.length&&c.greedy===!1&&0!==c.repeat&&(c.placeholder=""),c.repeat>0||"*"===c.repeat||"+"===c.repeat){var h="*"===c.repeat?0:"+"===c.repeat?1:c.repeat;f=c.groupmarker.start+f+c.groupmarker.end+c.quantifiermarker.start+h+","+c.repeat+c.quantifiermarker.end}var i;return void 0===b.prototype.masksCache[f]||d===!0?(i={mask:f,maskToken:e(f),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:g},d!==!0&&(b.prototype.masksCache[c.numericInput?f.split("").reverse().join(""):f]=i,i=a.extend(!0,{},b.prototype.masksCache[c.numericInput?f.split("").reverse().join(""):f]))):i=a.extend(!0,{},b.prototype.masksCache[c.numericInput?f.split("").reverse().join(""):f]),i}function g(a){return a=a.toString()}var h;if(a.isFunction(c.mask)&&(c.mask=c.mask(c)),a.isArray(c.mask)){if(c.mask.length>1){c.keepStatic=null===c.keepStatic?!0:c.keepStatic;var i="(";return a.each(c.numericInput?c.mask.reverse():c.mask,function(b,c){i.length>1&&(i+=")|("),i+=g(void 0===c.mask||a.isFunction(c.mask)?c:c.mask)}),i+=")",f(i,c.mask)}c.mask=c.mask.pop()}return c.mask&&(h=void 0===c.mask.mask||a.isFunction(c.mask.mask)?f(g(c.mask),c.mask):f(g(c.mask.mask),c.mask)),h}function h(e,f,g){function i(a,b,c){b=b||0;var d,e,f,h=[],i=0,j=o();ha=void 0!==fa?fa.maxLength:void 0,-1===ha&&(ha=void 0);do{if(a===!0&&m().validPositions[i]){var k=m().validPositions[i];e=k.match,d=k.locator.slice(),h.push(c===!0?k.input:I(i,e))}else f=s(i,d,i-1),e=f.match,d=f.locator.slice(),(g.jitMasking===!1||j>i||isFinite(g.jitMasking)&&g.jitMasking>i)&&h.push(I(i,e));i++}while((void 0===ha||ha>i)&&(null!==e.fn||""!==e.def)||b>i);return""===h[h.length-1]&&h.pop(),m().maskLength=i+1,h}function m(){return f}function n(a){var b=m();b.buffer=void 0,a!==!0&&(b._buffer=void 0,b.validPositions={},b.p=0)}function o(a,b,c){var d=-1,e=-1,f=c||m().validPositions;void 0===a&&(a=-1);for(var g in f){var h=parseInt(g);f[h]&&(b||null!==f[h].match.fn)&&(a>=h&&(d=h),h>=a&&(e=h))}return-1!==d&&a-d>1||a>e?d:e}function p(b,c,d,e){if(e||g.insertMode&&void 0!==m().validPositions[b]&&void 0===d){var f,h=a.extend(!0,{},m().validPositions),i=o();for(f=b;i>=f;f++)delete m().validPositions[f];m().validPositions[b]=c;var j,k=!0,l=m().validPositions,p=!1;for(f=j=b;i>=f;f++){var q=h[f];if(void 0!==q)for(var r=j,s=-1;r<m().maskLength&&(null==q.match.fn&&l[f]&&(l[f].match.optionalQuantifier===!0||l[f].match.optionality===!0)||null!=q.match.fn);){if(null===q.match.fn||!g.keepStatic&&l[f]&&(void 0!==l[f+1]&&w(f+1,l[f].locator.slice(),f).length>1||void 0!==l[f].alternation)?r++:r=E(j),p===!1&&h[r]&&h[r].match.def===q.match.def){m().validPositions[r]=a.extend(!0,{},h[r]),m().validPositions[r].input=q.input,j=r,k=!0;break}if(u(r,q.match.def)){var t=C(r,q.input,!0,!0);if(k=t!==!1,j=t.caret||t.insert?o():r,p=!0,k)break}else{if(k=null==q.match.fn,s===r)break;s=r}}if(!k)break}if(!k)return m().validPositions=a.extend(!0,{},h),n(!0),!1}else m().validPositions[b]=c;return n(!0),!0}function q(b,c,d,e){function f(a){var b=m().validPositions[a];if(void 0!==b&&null===b.match.fn){var c=m().validPositions[a-1],d=m().validPositions[a+1];return void 0!==c&&void 0!==d}return!1}var h,i=b,j=a.extend(!0,{},m().validPositions),k=!1;for(m().p=b,h=c-1;h>=i;h--)void 0!==m().validPositions[h]&&(d===!0||!f(h)&&g.canClearPosition(m(),h,o(),e,g)!==!1)&&delete m().validPositions[h];for(n(!0),h=i+1;h<=o();){for(;void 0!==m().validPositions[i];)i++;var l=m().validPositions[i];if(i>h&&(h=i+1),void 0===m().validPositions[h]&&D(h)||void 0!==l)h++;else{var p=s(h);k===!1&&j[i]&&j[i].match.def===p.match.def?(m().validPositions[i]=a.extend(!0,{},j[i]),m().validPositions[i].input=p.input,delete m().validPositions[h],h++):u(i,p.match.def)?C(i,p.input||I(h),!0)!==!1&&(delete m().validPositions[h],h++,k=!0):D(h)||(h++,i--),i++}}n(!0)}function r(a,b){for(var c,d=a,e=o(),f=m().validPositions[e]||w(0)[0],h=void 0!==f.alternation?f.locator[f.alternation].toString().split(","):[],i=0;i<d.length&&(c=d[i],!c.match||(!g.greedy&&!b||c.match.optionalQuantifier===!0)&&(c.match.optionality!==!1&&c.match.newBlockMarker!==!1||c.match.optionalQuantifier===!0)||!(void 0===f.alternation||f.alternation!==c.alternation||void 0!==c.locator[f.alternation]&&B(c.locator[f.alternation].toString().split(","),h)));i++);return c}function s(a,b,c){return m().validPositions[a]||r(w(a,b?b.slice():b,c))}function t(a){return m().validPositions[a]?m().validPositions[a]:w(a)[0]}function u(a,b){for(var c=!1,d=w(a),e=0;e<d.length;e++)if(d[e].match&&d[e].match.def===b){c=!0;break}return c}function v(b,c){var d,e;return(m().tests[b]||m().validPositions[b])&&a.each(m().tests[b]||[m().validPositions[b]],function(a,b){var f=b.alternation?b.locator[b.alternation].toString().indexOf(c):-1;(void 0===e||e>f)&&-1!==f&&(d=b,e=f)}),d}function w(b,c,d){function e(c,d,f,h){function j(f,h,l){function q(b,c){var d=0===a.inArray(b,c.matches);return d||a.each(c.matches,function(a,e){return e.isQuantifier===!0&&(d=q(b,c.matches[a-1]))?!1:void 0}),d}function r(a,b){var c=v(a,b);return c?c.locator.slice(c.alternation+1):void 0}function s(a,c){return null===a.match.fn&&null!==c.match.fn?c.match.fn.test(a.match.def,m(),b,!1,g,!1):!1}if(k>1e4)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+m().mask;if(k===b&&void 0===f.matches)return n.push({match:f,locator:h.reverse(),cd:p}),!0;if(void 0!==f.matches){if(f.isGroup&&l!==f){if(f=j(c.matches[a.inArray(f,c.matches)+1],h))return!0}else if(f.isOptional){var t=f;if(f=e(f,d,h,l)){if(i=n[n.length-1].match,!q(i,t))return!0;o=!0,k=b}}else if(f.isAlternator){var u,w=f,x=[],y=n.slice(),z=h.length,A=d.length>0?d.shift():-1;if(-1===A||"string"==typeof A){var B,C=k,D=d.slice(),E=[];if("string"==typeof A)E=A.split(",");else for(B=0;B<w.matches.length;B++)E.push(B);for(var F=0;F<E.length;F++){if(B=parseInt(E[F]),n=[],d=r(k,B)||D.slice(),f=j(w.matches[B]||c.matches[B],[B].concat(h),l)||f,f!==!0&&void 0!==f&&E[E.length-1]<w.matches.length){var G=a.inArray(f,c.matches)+1;c.matches.length>G&&(f=j(c.matches[G],[G].concat(h.slice(1,h.length)),l),f&&(E.push(G.toString()),a.each(n,function(a,b){b.alternation=h.length-1})))}u=n.slice(),k=C,n=[];for(var H=0;H<u.length;H++){var I=u[H],J=!1;I.alternation=I.alternation||z;for(var K=0;K<x.length;K++){var L=x[K];if(("string"!=typeof A||-1!==a.inArray(I.locator[I.alternation].toString(),E))&&(I.match.def===L.match.def||s(I,L))){J=I.match.mask===L.match.mask,-1===L.locator[I.alternation].toString().indexOf(I.locator[I.alternation])&&(L.locator[I.alternation]=L.locator[I.alternation]+","+I.locator[I.alternation],L.alternation=I.alternation);break}}J||x.push(I)}}"string"==typeof A&&(x=a.map(x,function(b,c){if(isFinite(c)){var d,e=b.alternation,f=b.locator[e].toString().split(",");b.locator[e]=void 0,b.alternation=void 0;for(var g=0;g<f.length;g++)d=-1!==a.inArray(f[g],E),d&&(void 0!==b.locator[e]?(b.locator[e]+=",",b.locator[e]+=f[g]):b.locator[e]=parseInt(f[g]),b.alternation=e);if(void 0!==b.locator[e])return b}})),n=y.concat(x),k=b,o=n.length>0,d=D.slice()}else f=j(w.matches[A]||c.matches[A],[A].concat(h),l);if(f)return!0}else if(f.isQuantifier&&l!==c.matches[a.inArray(f,c.matches)-1])for(var M=f,N=d.length>0?d.shift():0;N<(isNaN(M.quantifier.max)?N+1:M.quantifier.max)&&b>=k;N++){var O=c.matches[a.inArray(M,c.matches)-1];if(f=j(O,[N].concat(h),O)){if(i=n[n.length-1].match,i.optionalQuantifier=N>M.quantifier.min-1,q(i,O)){if(N>M.quantifier.min-1){o=!0,k=b;break}return!0}return!0}}else if(f=e(f,d,h,l))return!0}else k++}for(var l=d.length>0?d.shift():0;l<c.matches.length;l++)if(c.matches[l].isQuantifier!==!0){var q=j(c.matches[l],[l].concat(f),h);if(q&&k===b)return q;if(k>b)break}}function f(b){var c=[];return a.isArray(b)||(b=[b]),b.length>0&&(void 0===b[0].alternation?(c=r(b.slice()).locator.slice(),0===c.length&&(c=b[0].locator.slice())):a.each(b,function(a,b){if(""!==b.def)if(0===c.length)c=b.locator.slice();else for(var d=0;d<c.length;d++)b.locator[d]&&-1===c[d].toString().indexOf(b.locator[d])&&(c[d]+=","+b.locator[d])})),c}function h(a){return a}var i,j=m().maskToken,k=c?d:0,l=c?c.slice():[0],n=[],o=!1,p=c?c.join(""):"";if(b>-1){if(void 0===c){for(var q,s=b-1;void 0===(q=m().validPositions[s]||m().tests[s])&&s>-1;)s--;void 0!==q&&s>-1&&(l=f(q),p=l.join(""),k=s)}if(m().tests[b]&&m().tests[b][0].cd===p)return h(m().tests[b]);for(var t=l.shift();t<j.length;t++){var u=e(j[t],l,[t]);if(u&&k===b||k>b)break}}return(0===n.length||o)&&n.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:"",placeholder:""},locator:[],cd:p}),void 0!==c&&m().tests[b]?a.extend(!0,[],n):(m().tests[b]=a.extend(!0,[],n),m().tests[b])}function x(){return void 0===m()._buffer&&(m()._buffer=i(!1,1),void 0===m().buffer&&m()._buffer.slice()),m()._buffer}function y(a){return(void 0===m().buffer||a===!0)&&(m().buffer=i(!0,o(),!0)),m().buffer}function z(a,b,c){var d;if(a===!0)n(),a=0,b=c.length;else for(d=a;b>d;d++)delete m().validPositions[d];for(d=a;b>d;d++)n(!0),c[d]!==g.skipOptionalPartCharacter&&C(d,c[d],!0,!0)}function A(a,c,d){switch(c.casing){case"upper":a=a.toUpperCase();break;case"lower":a=a.toLowerCase();break;case"title":var e=m().validPositions[d-1];a=0===d||e&&e.input===String.fromCharCode(b.keyCode.SPACE)?a.toUpperCase():a.toLowerCase()}return a}function B(b,c){for(var d=g.greedy?c:c.slice(0,1),e=!1,f=0;f<b.length;f++)if(-1!==a.inArray(b[f],d)){e=!0;break}return e}function C(c,d,e,f){function h(a){return ja?a.begin-a.end>1||a.begin-a.end===1&&g.insertMode:a.end-a.begin>1||a.end-a.begin===1&&g.insertMode}function i(b,d,e,f){var i=!1;return a.each(w(b),function(j,k){for(var l=k.match,r=d?1:0,s="",t=l.cardinality;t>r;t--)s+=G(b-(t-1));if(d&&(s+=d),y(!0),i=null!=l.fn?l.fn.test(s,m(),b,e,g,h(c)):d!==l.def&&d!==g.skipOptionalPartCharacter||""===l.def?!1:{c:l.placeholder||l.def,pos:b},i!==!1){var u=void 0!==i.c?i.c:d;u=u===g.skipOptionalPartCharacter&&null===l.fn?l.placeholder||l.def:u;var v=b,w=y();if(void 0!==i.remove&&(a.isArray(i.remove)||(i.remove=[i.remove]),a.each(i.remove.sort(function(a,b){return b-a}),function(a,b){q(b,b+1,!0)})),void 0!==i.insert&&(a.isArray(i.insert)||(i.insert=[i.insert]),a.each(i.insert.sort(function(a,b){return a-b}),function(a,b){C(b.pos,b.c,!1,f)})),i.refreshFromBuffer){var x=i.refreshFromBuffer;if(e=!0,z(x===!0?x:x.start,x.end,w),void 0===i.pos&&void 0===i.c)return i.pos=o(),!1;if(v=void 0!==i.pos?i.pos:b,v!==b)return i=a.extend(i,C(v,u,!0,f)),!1}else if(i!==!0&&void 0!==i.pos&&i.pos!==b&&(v=i.pos,z(b,v,y().slice()),v!==b))return i=a.extend(i,C(v,u,!0)),!1;return i!==!0&&void 0===i.pos&&void 0===i.c?!1:(j>0&&n(!0),p(v,a.extend({},k,{input:A(u,l,v)}),f,h(c))||(i=!1),!1)}}),i}function j(b,c,d,e){for(var f,h,i,j,k,l,p=a.extend(!0,{},m().validPositions),q=o();q>=0&&(j=m().validPositions[q],!j||void 0===j.alternation||(f=q,h=m().validPositions[f].alternation,s(f).locator[j.alternation]===j.locator[j.alternation]));q--);if(void 0!==h){f=parseInt(f);for(var r in m().validPositions)if(r=parseInt(r),j=m().validPositions[r],r>=f&&void 0!==j.alternation){var t;0===f?(t=[],a.each(m().tests[f],function(a,b){void 0!==b.locator[h]&&(t=t.concat(b.locator[h].toString().split(",")))})):t=m().validPositions[f].locator[h].toString().split(",");var u=void 0!==j.locator[h]?j.locator[h]:t[0];u.length>0&&(u=u.split(",")[0]);for(var w=0;w<t.length;w++){var x=[],y=0,z=0;if(u<t[w]){for(var A,B,D=r;D>=0;D--)if(A=m().validPositions[D],void 0!==A){var E=v(D,t[w]);m().validPositions[D].match.def!==E.match.def&&(m().validPositions[D].generatedInput!==!0&&x.push(m().validPositions[D].input),m().validPositions[D]=E,m().validPositions[D].input=I(D),null===m().validPositions[D].match.fn&&z++,A=E),B=A.locator[h],A.locator[h]=parseInt(t[w]);break}if(u!==A.locator[h]){for(k=r+1;k<o(void 0,!0)+1;k++)l=m().validPositions[k],l&&null!=l.match.fn?x.push(l.input):b>k&&y++,delete m().validPositions[k];for(n(!0),g.keepStatic=!g.keepStatic,i=!0;x.length>0;){var F=x.shift();if(F!==g.skipOptionalPartCharacter&&!(i=C(o(void 0,!0)+1,F,!1,e)))break}if(A.alternation=h,A.locator[h]=B,i){var G=o(b)+1;for(k=r+1;k<o()+1;k++)l=m().validPositions[k],(void 0===l||null==l.match.fn)&&b>k&&z++;b+=z-y,i=C(b>G?G:b,c,d,e)}if(g.keepStatic=!g.keepStatic,i)return i;n(),m().validPositions=a.extend(!0,{},p)}}}break}}return!1}function k(b,c){for(var d=m().validPositions[c],e=d.locator,f=e.length,g=b;c>g;g++)if(void 0===m().validPositions[g]&&!D(g,!0)){var h=w(g),i=h[0],j=-1;a.each(h,function(a,b){for(var c=0;f>c&&(void 0!==b.locator[c]&&B(b.locator[c].toString().split(","),e[c].toString().split(",")));c++)c>j&&(j=c,i=b)}),p(g,a.extend({},i,{input:i.match.placeholder||i.match.def}),!0)}}e=e===!0;var l=c;void 0!==c.begin&&(l=ja&&!h(c)?c.end:c.begin);for(var t=!1,u=a.extend(!0,{},m().validPositions),x=l-1;x>-1&&!m().validPositions[x];x--);var F;for(x++;l>x;x++)void 0===m().validPositions[x]&&(g.jitMasking===!1||g.jitMasking>x)&&((F=s(x,s(x-1).locator,x-1)).match.def===g.radixPointDefinitionSymbol||!D(x,!0)||a.inArray(g.radixPoint,y())<x&&F.match.fn&&F.match.fn.test(I(x),m(),x,!1,g))&&(t=i(x,F.match.placeholder||(null==F.match.fn?F.match.def:""!==I(x)?I(x):y()[x]),!0,f),t!==!1&&(m().validPositions[t.pos||x].generatedInput=!0));if(h(c)&&(Q(void 0,b.keyCode.DELETE,c),l=m().p),l<m().maskLength&&(t=i(l,d,e,f),(!e||f===!0)&&t===!1)){var H=m().validPositions[l];if(!H||null!==H.match.fn||H.match.def!==d&&d!==g.skipOptionalPartCharacter){if((g.insertMode||void 0===m().validPositions[E(l)])&&!D(l,!0)){var J=w(l).slice();""===J[J.length-1].match.def&&J.pop();var K=r(J,!0);K&&(K=K.match.placeholder||K.match.def,i(l,K,e,f));for(var L=l+1,M=E(l);M>=L;L++)if(t=i(L,d,e,f),t!==!1){k(l,L),l=L;break}}}else t={caret:E(l)}}return t===!1&&g.keepStatic&&(t=j(l,d,e,f)),t===!0&&(t={pos:l}),a.isFunction(g.postValidation)&&t!==!1&&!e&&f!==!0&&(t=g.postValidation(y(!0),t,g)?t:!1),void 0===t.pos&&(t.pos=l),t===!1&&(n(!0),m().validPositions=a.extend(!0,{},u)),t}function D(a,b){var c;if(b?(c=s(a).match,""===c.def&&(c=t(a).match)):c=t(a).match,null!=c.fn)return c.fn;if(b!==!0&&a>-1&&!g.keepStatic&&void 0===m().validPositions[a]){var d=w(a);return d.length>2}return!1}function E(a,b){var c=m().maskLength;if(a>=c)return c;for(var d=a;++d<c&&(b===!0&&(t(d).match.newBlockMarker!==!0||!D(d))||b!==!0&&!D(d)););return d}function F(a,b){var c,d=a;if(0>=d)return 0;for(;--d>0&&(b===!0&&t(d).match.newBlockMarker!==!0||b!==!0&&!D(d)&&(c=w(d),c.length<2||2===c.length&&""===c[1].match.def)););return d}function G(a){return void 0===m().validPositions[a]?I(a):m().validPositions[a].input}function H(b,c,d,e,f){if(e&&a.isFunction(g.onBeforeWrite)){var h=g.onBeforeWrite(e,c,d,g);if(h){if(h.refreshFromBuffer){var i=h.refreshFromBuffer;z(i===!0?i:i.start,i.end,h.buffer||c),c=y(!0)}void 0!==d&&(d=void 0!==h.caret?h.caret:d)}}b.inputmask._valueSet(c.join("")),void 0===d||void 0!==e&&"blur"===e.type||L(b,d),f===!0&&(la=!0,a(b).trigger("input"))}function I(a,b){if(b=b||t(a).match,void 0!==b.placeholder)return b.placeholder;if(null===b.fn){if(a>-1&&!g.keepStatic&&void 0===m().validPositions[a]){var c,d=w(a),e=[];if(d.length>2)for(var f=0;f<d.length;f++)if(d[f].match.optionality!==!0&&d[f].match.optionalQuantifier!==!0&&(null===d[f].match.fn||void 0===c||d[f].match.fn.test(c.match.def,m(),a,!0,g)!==!1)&&(e.push(d[f]),null===d[f].match.fn&&(c=d[f]),e.length>1&&new RegExp("[0-9a-bA-Z]").test(e[0].match.def)))return g.placeholder.charAt(a%g.placeholder.length)}return b.def}return g.placeholder.charAt(a%g.placeholder.length)}function J(c,d,e,f){function h(){var a=!1,b=x().slice(l,E(l)).join("").indexOf(k);if(-1!==b&&!D(l)){a=!0;for(var c=x().slice(l,l+b),d=0;d<c.length;d++)if(" "!==c[d]){a=!1;break}}return a}var i,j=f.slice(),k="",l=0;if(n(),m().p=E(-1),!e)if(g.autoUnmask!==!0){var p=x().slice(0,E(-1)).join(""),q=j.join("").match(new RegExp("^"+b.escapeRegex(p),"g"));q&&q.length>0&&(j.splice(0,q.length*p.length),l=E(l))}else l=E(l);a.each(j,function(b,d){if(void 0!==d){var f=new a.Event("keypress");f.which=d.charCodeAt(0),k+=d;var j=o(void 0,!0),p=m().validPositions[j],q=s(j+1,p?p.locator.slice():void 0,j);if(!h()||e||g.autoUnmask){var r=e?b:null==q.match.fn&&q.match.optionality&&j+1<m().p?j+1:m().p;i=S.call(c,f,!0,!1,e,r),l=r+1,k=""}else i=S.call(c,f,!0,!1,!0,j+1);if(!e&&a.isFunction(g.onBeforeWrite)&&(i=g.onBeforeWrite(f,y(),i.forwardPosition,g),i&&i.refreshFromBuffer)){var t=i.refreshFromBuffer;z(t===!0?t:t.start,t.end,i.buffer),n(!0),i.caret&&(m().p=i.caret)}}}),d&&H(c,y(),document.activeElement===c?E(o(0)):void 0,new a.Event("checkval"))}function K(b){if(b&&void 0===b.inputmask)return b.value;var c=[],d=m().validPositions;for(var e in d)d[e].match&&null!=d[e].match.fn&&c.push(d[e].input);var f=0===c.length?"":(ja?c.reverse():c).join("");if(a.isFunction(g.onUnMask)){var h=(ja?y().slice().reverse():y()).join("");f=g.onUnMask(h,f,g)||f}return f}function L(a,b,c,d){function e(a){if(d!==!0&&ja&&"number"==typeof a&&(!g.greedy||""!==g.placeholder)){var b=y().join("").length;a=b-a}return a}var f;if("number"!=typeof b)return a.setSelectionRange?(b=a.selectionStart,c=a.selectionEnd):window.getSelection?(f=window.getSelection().getRangeAt(0),(f.commonAncestorContainer.parentNode===a||f.commonAncestorContainer===a)&&(b=f.startOffset,c=f.endOffset)):document.selection&&document.selection.createRange&&(f=document.selection.createRange(),b=0-f.duplicate().moveStart("character",-a.inputmask._valueGet().length),c=b+f.text.length),{begin:e(b),end:e(c)};b=e(b),c=e(c),c="number"==typeof c?c:b;var h=parseInt(((a.ownerDocument.defaultView||window).getComputedStyle?(a.ownerDocument.defaultView||window).getComputedStyle(a,null):a.currentStyle).fontSize)*c;if(a.scrollLeft=h>a.scrollWidth?h:0,j||g.insertMode!==!1||b!==c||c++,a.setSelectionRange)a.selectionStart=b,a.selectionEnd=c;else if(window.getSelection){if(f=document.createRange(),void 0===a.firstChild||null===a.firstChild){var i=document.createTextNode("");a.appendChild(i)}f.setStart(a.firstChild,b<a.inputmask._valueGet().length?b:a.inputmask._valueGet().length),f.setEnd(a.firstChild,c<a.inputmask._valueGet().length?c:a.inputmask._valueGet().length),f.collapse(!0);var k=window.getSelection();k.removeAllRanges(),k.addRange(f)}else a.createTextRange&&(f=a.createTextRange(),f.collapse(!0),f.moveEnd("character",c),f.moveStart("character",b),f.select())}function M(b){var c,d,e=y(),f=e.length,g=o(),h={},i=m().validPositions[g],j=void 0!==i?i.locator.slice():void 0;for(c=g+1;c<e.length;c++)d=s(c,j,c-1),j=d.locator.slice(),h[c]=a.extend(!0,{},d);var k=i&&void 0!==i.alternation?i.locator[i.alternation]:void 0;for(c=f-1;c>g&&(d=h[c],(d.match.optionality||d.match.optionalQuantifier||k&&(k!==h[c].locator[i.alternation]&&null!=d.match.fn||null===d.match.fn&&d.locator[i.alternation]&&B(d.locator[i.alternation].toString().split(","),k.toString().split(","))&&""!==w(c)[0].def))&&e[c]===I(c,d.match));c--)f--;return b?{l:f,def:h[f]?h[f].match:void 0}:f}function N(a){for(var b=M(),c=a.length-1;c>b&&!D(c);c--);return a.splice(b,c+1-b),a}function O(b){if(a.isFunction(g.isComplete))return g.isComplete(b,g);if("*"===g.repeat)return void 0;var c=!1,d=M(!0),e=F(d.l);if(void 0===d.def||d.def.newBlockMarker||d.def.optionality||d.def.optionalQuantifier){c=!0;for(var f=0;e>=f;f++){var h=s(f).match;if(null!==h.fn&&void 0===m().validPositions[f]&&h.optionality!==!0&&h.optionalQuantifier!==!0||null===h.fn&&b[f]!==I(f,h)){c=!1;break}}}return c}function P(b){function c(b){if(a.valHooks&&(void 0===a.valHooks[b]||a.valHooks[b].inputmaskpatch!==!0)){var c=a.valHooks[b]&&a.valHooks[b].get?a.valHooks[b].get:function(a){return a.value},d=a.valHooks[b]&&a.valHooks[b].set?a.valHooks[b].set:function(a,b){return a.value=b,a};a.valHooks[b]={get:function(a){if(a.inputmask){if(a.inputmask.opts.autoUnmask)return a.inputmask.unmaskedvalue();var b=c(a);return-1!==o(void 0,void 0,a.inputmask.maskset.validPositions)||g.nullable!==!0?b:""}return c(a)},set:function(b,c){var e,f=a(b);return e=d(b,c),b.inputmask&&f.trigger("setvalue"),e},inputmaskpatch:!0}}}function d(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==o()||g.nullable!==!0?document.activeElement===this&&g.clearMaskOnLostFocus?(ja?N(y().slice()).reverse():N(y().slice())).join(""):h.call(this):"":h.call(this)}function e(b){i.call(this,b),this.inputmask&&a(this).trigger("setvalue")}function f(b){oa.on(b,"mouseenter",function(b){var c=a(this),d=this,e=d.inputmask._valueGet();e!==y().join("")&&c.trigger("setvalue")})}var h,i;if(!b.inputmask.__valueGet){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"==typeof"test".__proto__?function(a){return a.__proto__}:function(a){return a.constructor.prototype});var j=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b),"value"):void 0;j&&j.get&&j.set?(h=j.get,i=j.set,Object.defineProperty(b,"value",{get:d,set:e,configurable:!0})):"INPUT"!==b.tagName&&(h=function(){return this.textContent},i=function(a){this.textContent=a},Object.defineProperty(b,"value",{get:d,set:e,configurable:!0}))}else document.__lookupGetter__&&b.__lookupGetter__("value")&&(h=b.__lookupGetter__("value"),i=b.__lookupSetter__("value"),b.__defineGetter__("value",d),b.__defineSetter__("value",e));b.inputmask.__valueGet=h,b.inputmask._valueGet=function(a){return ja&&a!==!0?h.call(this.el).split("").reverse().join(""):h.call(this.el)},b.inputmask.__valueSet=i,b.inputmask._valueSet=function(a,b){i.call(this.el,null===a||void 0===a?"":b!==!0&&ja?a.split("").reverse().join(""):a)},void 0===h&&(h=function(){return this.value},i=function(a){this.value=a},c(b.type),f(b))}}function Q(c,d,e,f){function h(){if(g.keepStatic){n(!0);var b,d=[],e=a.extend(!0,{},m().validPositions);for(b=o();b>=0;b--){var f=m().validPositions[b];if(f&&(null!=f.match.fn&&d.push(f.input),delete m().validPositions[b],void 0!==f.alternation&&f.locator[f.alternation]===s(b).locator[f.alternation]))break}if(b>-1)for(;d.length>0;){m().p=E(o());var h=new a.Event("keypress");h.which=d.pop().charCodeAt(0),S.call(c,h,!0,!1,!1,m().p)}else m().validPositions=a.extend(!0,{},e)}}if((g.numericInput||ja)&&(d===b.keyCode.BACKSPACE?d=b.keyCode.DELETE:d===b.keyCode.DELETE&&(d=b.keyCode.BACKSPACE),ja)){var i=e.end;e.end=e.begin,e.begin=i}d===b.keyCode.BACKSPACE&&(e.end-e.begin<1||g.insertMode===!1)?(e.begin=F(e.begin),void 0===m().validPositions[e.begin]||m().validPositions[e.begin].input!==g.groupSeparator&&m().validPositions[e.begin].input!==g.radixPoint||e.begin--):d===b.keyCode.DELETE&&e.begin===e.end&&(e.end=D(e.end)?e.end+1:E(e.end)+1,void 0===m().validPositions[e.begin]||m().validPositions[e.begin].input!==g.groupSeparator&&m().validPositions[e.begin].input!==g.radixPoint||e.end++),q(e.begin,e.end,!1,f),f!==!0&&h();var j=o(e.begin);j<e.begin?m().p=E(j):f!==!0&&(m().p=e.begin)}function R(d){var e=this,f=a(e),h=d.keyCode,i=L(e);if(h===b.keyCode.BACKSPACE||h===b.keyCode.DELETE||l&&h===b.keyCode.BACKSPACE_SAFARI||d.ctrlKey&&h===b.keyCode.X&&!c("cut"))d.preventDefault(),Q(e,h,i),H(e,y(),m().p,d,ea!==y().join("")),e.inputmask._valueGet()===x().join("")?f.trigger("cleared"):O(y())===!0&&f.trigger("complete"),g.showTooltip&&(e.title=g.tooltip||m().mask);else if(h===b.keyCode.END||h===b.keyCode.PAGE_DOWN){d.preventDefault();var j=E(o());g.insertMode||j!==m().maskLength||d.shiftKey||j--,L(e,d.shiftKey?i.begin:j,j,!0)}else h===b.keyCode.HOME&&!d.shiftKey||h===b.keyCode.PAGE_UP?(d.preventDefault(),L(e,0,d.shiftKey?i.begin:0,!0)):(g.undoOnEscape&&h===b.keyCode.ESCAPE||90===h&&d.ctrlKey)&&d.altKey!==!0?(J(e,!0,!1,ea.split("")),f.trigger("click")):h!==b.keyCode.INSERT||d.shiftKey||d.ctrlKey?g.tabThrough===!0&&h===b.keyCode.TAB?(d.shiftKey===!0?(null===t(i.begin).match.fn&&(i.begin=E(i.begin)),i.end=F(i.begin,!0),i.begin=F(i.end,!0)):(i.begin=E(i.begin,!0),i.end=E(i.begin,!0),i.end<m().maskLength&&i.end--),i.begin<m().maskLength&&(d.preventDefault(),L(e,i.begin,i.end))):g.insertMode!==!1||d.shiftKey||(h===b.keyCode.RIGHT?setTimeout(function(){var a=L(e);L(e,a.begin)},0):h===b.keyCode.LEFT&&setTimeout(function(){var a=L(e);L(e,ja?a.begin+1:a.begin-1)},0)):(g.insertMode=!g.insertMode,L(e,g.insertMode||i.begin!==m().maskLength?i.begin:i.begin-1));g.onKeyDown.call(this,d,y(),L(e).begin,g),ma=-1!==a.inArray(h,g.ignorables)}function S(c,d,e,f,h){var i=this,j=a(i),k=c.which||c.charCode||c.keyCode;if(!(d===!0||c.ctrlKey&&c.altKey)&&(c.ctrlKey||c.metaKey||ma))return k===b.keyCode.ENTER&&ea!==y().join("")&&(ea=y().join(""),setTimeout(function(){j.trigger("change")},0)),!0;if(k){46===k&&c.shiftKey===!1&&","===g.radixPoint&&(k=44);var l,o=d?{begin:h,end:h}:L(i),p=String.fromCharCode(k);m().writeOutBuffer=!0;var q=C(o,p,f);if(q!==!1){var r=q.pos;if(n(!0),void 0!==q.caret)l=q.caret;else{var s=m().validPositions;l=!g.keepStatic&&(void 0!==s[r+1]&&w(r+1,s[r].locator.slice(),r).length>1||void 0!==s[r].alternation)?r+1:E(r)}m().p=l}if(e!==!1){var t=this;if(setTimeout(function(){g.onKeyValidation.call(t,k,q,g)},0),m().writeOutBuffer&&q!==!1){var u=y();H(i,u,g.numericInput&&void 0===q.caret?F(l):l,c,d!==!0),d!==!0&&setTimeout(function(){O(u)===!0&&j.trigger("complete")},0)}}if(g.showTooltip&&(i.title=g.tooltip||m().mask),c.preventDefault(),d)return q.forwardPosition=l,q}}function T(b){var c,d=this,e=b.originalEvent||b,f=a(d),h=d.inputmask._valueGet(!0),i=L(d);ja&&(c=i.end,i.end=i.begin,i.begin=c);var j=h.substr(0,i.begin),k=h.substr(i.end,h.length);j===(ja?x().reverse():x()).slice(0,i.begin).join("")&&(j=""),k===(ja?x().reverse():x()).slice(i.end).join("")&&(k=""),ja&&(c=j,j=k,k=c),window.clipboardData&&window.clipboardData.getData?h=j+window.clipboardData.getData("Text")+k:e.clipboardData&&e.clipboardData.getData&&(h=j+e.clipboardData.getData("text/plain")+k);var l=h;if(a.isFunction(g.onBeforePaste)){if(l=g.onBeforePaste(h,g),l===!1)return b.preventDefault();l||(l=h)}return J(d,!1,!1,ja?l.split("").reverse():l.toString().split("")),H(d,y(),E(o()),b,!0),O(y())===!0&&f.trigger("complete"),b.preventDefault()}function U(c){var d=this,e=d.inputmask._valueGet();if(y().join("")!==e){var f=L(d);if(e=e.replace(new RegExp("("+b.escapeRegex(x().join(""))+")*"),""),k){var g=e.replace(y().join(""),"");if(1===g.length){var h=new a.Event("keypress");return h.which=g.charCodeAt(0),S.call(d,h,!0,!0,!1,m().validPositions[f.begin-1]?f.begin:f.begin-1),!1}}if(f.begin>e.length&&(L(d,e.length),f=L(d)),y().length-e.length!==1||e.charAt(f.begin)===y()[f.begin]||e.charAt(f.begin+1)===y()[f.begin]||D(f.begin)){for(var i=o()+1,j=y().slice(i).join("");null===e.match(b.escapeRegex(j)+"$");)j=j.slice(1);e=e.replace(j,""),e=e.split(""),J(d,!0,!1,e),O(y())===!0&&a(d).trigger("complete");
}else c.keyCode=b.keyCode.BACKSPACE,R.call(d,c);c.preventDefault()}}function V(b){var c=this,d=c.inputmask._valueGet();J(c,!0,!1,(a.isFunction(g.onBeforeMask)?g.onBeforeMask(d,g)||d:d).split("")),ea=y().join(""),(g.clearMaskOnLostFocus||g.clearIncomplete)&&c.inputmask._valueGet()===x().join("")&&c.inputmask._valueSet("")}function W(a){var b=this,c=b.inputmask._valueGet();g.showMaskOnFocus&&(!g.showMaskOnHover||g.showMaskOnHover&&""===c)?b.inputmask._valueGet()!==y().join("")&&H(b,y(),E(o())):na===!1&&L(b,E(o())),g.positionCaretOnTab===!0&&setTimeout(function(){L(b,E(o()))},0),ea=y().join("")}function X(a){var b=this;if(na=!1,g.clearMaskOnLostFocus&&document.activeElement!==b){var c=y().slice(),d=b.inputmask._valueGet();d!==b.getAttribute("placeholder")&&""!==d&&(-1===o()&&d===x().join("")?c=[]:N(c),H(b,c))}}function Y(b){function c(b){if(""!==g.radixPoint){var c=m().validPositions;if(void 0===c[b]||c[b].input===I(b)){if(b<E(-1))return!0;var d=a.inArray(g.radixPoint,y());if(-1!==d){for(var e in c)if(e>d&&c[e].input!==I(e))return!1;return!0}}}return!1}var d=this;setTimeout(function(){if(document.activeElement===d){var b=L(d);if(b.begin===b.end)switch(g.positionCaretOnClick){case"none":break;case"radixFocus":if(c(b.begin)){L(d,g.numericInput?E(a.inArray(g.radixPoint,y())):a.inArray(g.radixPoint,y()));break}default:var e=b.begin,f=o(e,!0),h=E(f);if(h>e)L(d,D(e)||D(e-1)?e:E(e));else{var i=I(h);(""!==i&&y()[h]!==i||!D(h,!0)&&t(h).match.def===i)&&(h=E(h)),L(d,h)}}}},0)}function Z(a){var b=this;setTimeout(function(){L(b,0,E(o()))},0)}function $(c){var d=this,e=a(d),f=L(d),h=c.originalEvent||c,i=window.clipboardData||h.clipboardData,j=ja?y().slice(f.end,f.begin):y().slice(f.begin,f.end);i.setData("text",ja?j.reverse().join(""):j.join("")),document.execCommand&&document.execCommand("copy"),Q(d,b.keyCode.DELETE,f),H(d,y(),m().p,c,ea!==y().join("")),d.inputmask._valueGet()===x().join("")&&e.trigger("cleared"),g.showTooltip&&(d.title=g.tooltip||m().mask)}function _(b){var c=a(this),d=this;if(d.inputmask){var e=d.inputmask._valueGet(),f=y().slice();ea!==f.join("")&&setTimeout(function(){c.trigger("change"),ea=f.join("")},0),""!==e&&(g.clearMaskOnLostFocus&&(-1===o()&&e===x().join("")?f=[]:N(f)),O(f)===!1&&(setTimeout(function(){c.trigger("incomplete")},0),g.clearIncomplete&&(n(),f=g.clearMaskOnLostFocus?[]:x().slice())),H(d,f,void 0,b))}}function aa(a){var b=this;na=!0,document.activeElement!==b&&g.showMaskOnHover&&b.inputmask._valueGet()!==y().join("")&&H(b,y())}function ba(a){ea!==y().join("")&&ga.trigger("change"),g.clearMaskOnLostFocus&&-1===o()&&fa.inputmask._valueGet&&fa.inputmask._valueGet()===x().join("")&&fa.inputmask._valueSet(""),g.removeMaskOnSubmit&&(fa.inputmask._valueSet(fa.inputmask.unmaskedvalue(),!0),setTimeout(function(){H(fa,y())},0))}function ca(a){setTimeout(function(){ga.trigger("setvalue")},0)}function da(b){if(fa=b,ga=a(fa),g.showTooltip&&(fa.title=g.tooltip||m().mask),("rtl"===fa.dir||g.rightAlign)&&(fa.style.textAlign="right"),("rtl"===fa.dir||g.numericInput)&&(fa.dir="ltr",fa.removeAttribute("dir"),fa.inputmask.isRTL=!0,ja=!0),oa.off(fa),P(fa),d(fa,g)&&(oa.on(fa,"submit",ba),oa.on(fa,"reset",ca),oa.on(fa,"mouseenter",aa),oa.on(fa,"blur",_),oa.on(fa,"focus",W),oa.on(fa,"mouseleave",X),oa.on(fa,"click",Y),oa.on(fa,"dblclick",Z),oa.on(fa,"paste",T),oa.on(fa,"dragdrop",T),oa.on(fa,"drop",T),oa.on(fa,"cut",$),oa.on(fa,"complete",g.oncomplete),oa.on(fa,"incomplete",g.onincomplete),oa.on(fa,"cleared",g.oncleared),g.inputEventOnly!==!0&&(oa.on(fa,"keydown",R),oa.on(fa,"keypress",S)),oa.on(fa,"input",U)),oa.on(fa,"setvalue",V),""!==fa.inputmask._valueGet()||g.clearMaskOnLostFocus===!1||document.activeElement===fa){var c=a.isFunction(g.onBeforeMask)?g.onBeforeMask(fa.inputmask._valueGet(),g)||fa.inputmask._valueGet():fa.inputmask._valueGet();J(fa,!0,!1,c.split(""));var e=y().slice();ea=e.join(""),O(e)===!1&&g.clearIncomplete&&n(),g.clearMaskOnLostFocus&&document.activeElement!==fa&&(-1===o()?e=[]:N(e)),H(fa,e),document.activeElement===fa&&L(fa,E(o()))}}var ea,fa,ga,ha,ia,ja=!1,ka=!1,la=!1,ma=!1,na=!0,oa={on:function(c,d,e){var f=function(c){if(void 0===this.inputmask&&"FORM"!==this.nodeName){var d=a.data(this,"_inputmask_opts");d?new b(d).mask(this):oa.off(this)}else{if("setvalue"===c.type||!(this.disabled||this.readOnly&&!("keydown"===c.type&&c.ctrlKey&&67===c.keyCode||g.tabThrough===!1&&c.keyCode===b.keyCode.TAB))){switch(c.type){case"input":if(la===!0)return la=!1,c.preventDefault();break;case"keydown":ka=!1,la=!1;break;case"keypress":if(ka===!0)return c.preventDefault();ka=!0;break;case"click":if(k){var f=this;return setTimeout(function(){e.apply(f,arguments)},0),!1}}var h=e.apply(this,arguments);return h===!1&&(c.preventDefault(),c.stopPropagation()),h}c.preventDefault()}};c.inputmask.events[d]=c.inputmask.events[d]||[],c.inputmask.events[d].push(f),-1!==a.inArray(d,["submit","reset"])?null!=c.form&&a(c.form).on(d,f):a(c).on(d,f)},off:function(b,c){if(b.inputmask&&b.inputmask.events){var d;c?(d=[],d[c]=b.inputmask.events[c]):d=b.inputmask.events,a.each(d,function(c,d){for(;d.length>0;){var e=d.pop();-1!==a.inArray(c,["submit","reset"])?null!=b.form&&a(b.form).off(c,e):a(b).off(c,e)}delete b.inputmask.events[c]})}}};if(void 0!==e)switch(e.action){case"isComplete":return fa=e.el,O(y());case"unmaskedvalue":return fa=e.el,void 0!==fa&&void 0!==fa.inputmask?(f=fa.inputmask.maskset,g=fa.inputmask.opts,ja=fa.inputmask.isRTL):(ia=e.value,g.numericInput&&(ja=!0),ia=(a.isFunction(g.onBeforeMask)?g.onBeforeMask(ia,g)||ia:ia).split(""),J(void 0,!1,!1,ja?ia.reverse():ia),a.isFunction(g.onBeforeWrite)&&g.onBeforeWrite(void 0,y(),0,g)),K(fa);case"mask":fa=e.el,f=fa.inputmask.maskset,g=fa.inputmask.opts,ja=fa.inputmask.isRTL,ea=y().join(""),da(fa);break;case"format":return g.numericInput&&(ja=!0),ia=(a.isFunction(g.onBeforeMask)?g.onBeforeMask(e.value,g)||e.value:e.value).split(""),J(void 0,!1,!1,ja?ia.reverse():ia),a.isFunction(g.onBeforeWrite)&&g.onBeforeWrite(void 0,y(),0,g),e.metadata?{value:ja?y().slice().reverse().join(""):y().join(""),metadata:h({action:"getmetadata"},f,g)}:ja?y().slice().reverse().join(""):y().join("");case"isValid":g.numericInput&&(ja=!0),e.value?(ia=e.value.split(""),J(void 0,!1,!0,ja?ia.reverse():ia)):e.value=y().join("");for(var pa=y(),qa=M(),ra=pa.length-1;ra>qa&&!D(ra);ra--);return pa.splice(qa,ra+1-qa),O(pa)&&e.value===y().join("");case"getemptymask":return x().join("");case"remove":fa=e.el,ga=a(fa),f=fa.inputmask.maskset,g=fa.inputmask.opts,fa.inputmask._valueSet(K(fa)),oa.off(fa);var sa;Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?(sa=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(fa),"value"),sa&&fa.inputmask.__valueGet&&Object.defineProperty(fa,"value",{get:fa.inputmask.__valueGet,set:fa.inputmask.__valueSet,configurable:!0})):document.__lookupGetter__&&fa.__lookupGetter__("value")&&fa.inputmask.__valueGet&&(fa.__defineGetter__("value",fa.inputmask.__valueGet),fa.__defineSetter__("value",fa.inputmask.__valueSet)),fa.inputmask=void 0;break;case"getmetadata":if(a.isArray(f.metadata)){for(var ta,ua=o(void 0,!0),va=ua;va>=0;va--)if(m().validPositions[va]&&void 0!==m().validPositions[va].alternation){ta=m().validPositions[va].alternation;break}return void 0!==ta?f.metadata[m().validPositions[va].locator[ta]]:[]}return f.metadata}}b.prototype={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:a.noop,onincomplete:a.noop,oncleared:a.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyDown:a.noop,onBeforeMask:null,onBeforePaste:function(b,c){return a.isFunction(c.onBeforeMask)?c.onBeforeMask(b,c):b},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:a.noop,skipOptionalPartCharacter:" ",showTooltip:!1,tooltip:void 0,numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixPointDefinitionSymbol:void 0,groupSeparator:"",keepStatic:null,positionCaretOnTab:!1,tabThrough:!1,supportsInputType:["text","tel","password"],definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1}},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:null,canClearPosition:a.noop,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,positionCaretOnClick:"lvp"},masksCache:{},mask:function(c){var d=this;return"string"==typeof c&&(c=document.getElementById(c)||document.querySelectorAll(c)),c=c.nodeName?[c]:c,a.each(c,function(c,e){var i=a.extend(!0,{},d.opts);f(e,i,a.extend(!0,{},d.userOptions));var j=g(i,d.noMasksCache);void 0!==j&&(void 0!==e.inputmask&&e.inputmask.remove(),e.inputmask=new b,e.inputmask.opts=i,e.inputmask.noMasksCache=d.noMasksCache,e.inputmask.userOptions=a.extend(!0,{},d.userOptions),e.inputmask.el=e,e.inputmask.maskset=j,e.inputmask.isRTL=!1,a.data(e,"_inputmask_opts",i),h({action:"mask",el:e}))}),c&&c[0]?c[0].inputmask||this:this},option:function(b,c){return"string"==typeof b?this.opts[b]:"object"==typeof b?(a.extend(this.userOptions,b),this.el&&c!==!0&&this.mask(this.el),this):void 0},unmaskedvalue:function(a){return h({action:"unmaskedvalue",el:this.el,value:a},this.el&&this.el.inputmask?this.el.inputmask.maskset:g(this.opts,this.noMasksCache),this.opts)},remove:function(){return this.el?(h({action:"remove",el:this.el}),this.el.inputmask=void 0,this.el):void 0},getemptymask:function(){return h({action:"getemptymask"},this.maskset||g(this.opts,this.noMasksCache),this.opts)},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return h({action:"isComplete",el:this.el},this.maskset||g(this.opts,this.noMasksCache),this.opts)},getmetadata:function(){return h({action:"getmetadata"},this.maskset||g(this.opts,this.noMasksCache),this.opts)},isValid:function(a){return h({action:"isValid",value:a},this.maskset||g(this.opts,this.noMasksCache),this.opts)},format:function(a,b){return h({action:"format",value:a,metadata:b},this.maskset||g(this.opts,this.noMasksCache),this.opts)}},b.extendDefaults=function(c){a.extend(!0,b.prototype.defaults,c)},b.extendDefinitions=function(c){a.extend(!0,b.prototype.defaults.definitions,c)},b.extendAliases=function(c){a.extend(!0,b.prototype.defaults.aliases,c)},b.format=function(a,c,d){return b(c).format(a,d)},b.unmask=function(a,c){return b(c).unmaskedvalue(a)},b.isValid=function(a,c){return b(c).isValid(a)},b.remove=function(b){a.each(b,function(a,b){b.inputmask&&b.inputmask.remove()})},b.escapeRegex=function(a){var b=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return a.replace(new RegExp("(\\"+b.join("|\\")+")","gim"),"\\$1")},b.keyCode={ALT:18,BACKSPACE:8,BACKSPACE_SAFARI:127,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91,X:88};var i=navigator.userAgent,j=/mobile/i.test(i),k=/iemobile/i.test(i),l=/iphone/i.test(i)&&!k;return window.Inputmask=b,b});
/*!
* jquery.inputmask.min.js
* https://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2016 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.2-43
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery","inputmask"],a):"object"==typeof exports?module.exports=a(require("jquery"),require("./inputmask")):a(jQuery,window.Inputmask)}(function(a,b){return void 0===a.fn.inputmask&&(a.fn.inputmask=function(c,d){var e,f=this[0];if(void 0===d&&(d={}),"string"==typeof c)switch(c){case"unmaskedvalue":return f&&f.inputmask?f.inputmask.unmaskedvalue():a(f).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return f&&f.inputmask?f.inputmask.getemptymask():"";case"hasMaskedValue":return f&&f.inputmask?f.inputmask.hasMaskedValue():!1;case"isComplete":return f&&f.inputmask?f.inputmask.isComplete():!0;case"getmetadata":return f&&f.inputmask?f.inputmask.getmetadata():void 0;case"setvalue":a(f).val(d),f&&void 0===f.inputmask&&a(f).triggerHandler("setvalue");break;case"option":if("string"!=typeof d)return this.each(function(){return void 0!==this.inputmask?this.inputmask.option(d):void 0});if(f&&void 0!==f.inputmask)return f.inputmask.option(d);break;default:return d.alias=c,e=new b(d),this.each(function(){e.mask(this)})}else{if("object"==typeof c)return e=new b(c),void 0===c.mask&&void 0===c.alias?this.each(function(){return void 0!==this.inputmask?this.inputmask.option(c):void e.mask(this)}):this.each(function(){e.mask(this)});if(void 0===c)return this.each(function(){e=new b(d),e.mask(this)})}}),a.fn.inputmask});
/*!
* inputmask.phone.extensions.min.js
* https://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2016 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.2-43
*/
!function(a){"function"==typeof define&&define.amd?define(["inputmask.dependencyLib","inputmask"],a):"object"==typeof exports?module.exports=a(require("./inputmask.dependencyLib.jquery"),require("./inputmask")):a(window.dependencyLib||jQuery,window.Inputmask)}(function(a,b){return b.extendAliases({abstractphone:{countrycode:"",phoneCodes:[],mask:function(a){return a.definitions={"#":a.definitions[9]},a.phoneCodes.sort(function(a,b){return(a.mask||a)<(b.mask||b)?-1:1})},keepStatic:!1,onBeforeMask:function(a,b){var c=a.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(c.indexOf(b.countrycode)>1||-1===c.indexOf(b.countrycode))&&(c="+"+b.countrycode+c),c}}}),b});
/* Respond.js: min/max-width media query polyfill. (c) Scott Jehl. MIT Lic. j.mp/respondjs  */
(function( w ){

	"use strict";

	//exposed namespace
	var respond = {};
	w.respond = respond;

	//define update even in native-mq-supporting browsers, to avoid errors
	respond.update = function(){};

	//define ajax obj
	var requestQueue = [],
		xmlHttp = (function() {
			var xmlhttpmethod = false;
			try {
				xmlhttpmethod = new w.XMLHttpRequest();
			}
			catch( e ){
				xmlhttpmethod = new w.ActiveXObject( "Microsoft.XMLHTTP" );
			}
			return function(){
				return xmlhttpmethod;
			};
		})(),

		//tweaked Ajax functions from Quirksmode
		ajax = function( url, callback ) {
			var req = xmlHttp();
			if (!req){
				return;
			}
			req.open( "GET", url, true );
			req.onreadystatechange = function () {
				if ( req.readyState !== 4 || req.status !== 200 && req.status !== 304 ){
					return;
				}
				callback( req.responseText );
			};
			if ( req.readyState === 4 ){
				return;
			}
			req.send( null );
		},
		isUnsupportedMediaQuery = function( query ) {
			return query.replace( respond.regex.minmaxwh, '' ).match( respond.regex.other );
		};

	//expose for testing
	respond.ajax = ajax;
	respond.queue = requestQueue;
	respond.unsupportedmq = isUnsupportedMediaQuery;
	respond.regex = {
		media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
		keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
		comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
		urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
		findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
		only: /(only\s+)?([a-zA-Z]+)\s?/,
		minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
		maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
		minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
		other: /\([^\)]*\)/g
	};

	//expose media query support flag for external use
	respond.mediaQueriesSupported = w.matchMedia && w.matchMedia( "only all" ) !== null && w.matchMedia( "only all" ).matches;

	//if media queries are supported, exit here
	if( respond.mediaQueriesSupported ){
		return;
	}

	//define vars
	var doc = w.document,
		docElem = doc.documentElement,
		mediastyles = [],
		rules = [],
		appendedEls = [],
		parsedSheets = {},
		resizeThrottle = 30,
		head = doc.getElementsByTagName( "head" )[0] || docElem,
		base = doc.getElementsByTagName( "base" )[0],
		links = head.getElementsByTagName( "link" ),

		lastCall,
		resizeDefer,

		//cached container for 1em value, populated the first time it's needed
		eminpx,

		// returns the value of 1em in pixels
		getEmValue = function() {
			var ret,
				div = doc.createElement('div'),
				body = doc.body,
				originalHTMLFontSize = docElem.style.fontSize,
				originalBodyFontSize = body && body.style.fontSize,
				fakeUsed = false;

			div.style.cssText = "position:absolute;font-size:1em;width:1em";

			if( !body ){
				body = fakeUsed = doc.createElement( "body" );
				body.style.background = "none";
			}

			// 1em in a media query is the value of the default font size of the browser
			// reset docElem and body to ensure the correct value is returned
			docElem.style.fontSize = "100%";
			body.style.fontSize = "100%";

			body.appendChild( div );

			if( fakeUsed ){
				docElem.insertBefore( body, docElem.firstChild );
			}

			ret = div.offsetWidth;

			if( fakeUsed ){
				docElem.removeChild( body );
			}
			else {
				body.removeChild( div );
			}

			// restore the original values
			docElem.style.fontSize = originalHTMLFontSize;
			if( originalBodyFontSize ) {
				body.style.fontSize = originalBodyFontSize;
			}


			//also update eminpx before returning
			ret = eminpx = parseFloat(ret);

			return ret;
		},

		//enable/disable styles
		applyMedia = function( fromResize ){
			var name = "clientWidth",
				docElemProp = docElem[ name ],
				currWidth = doc.compatMode === "CSS1Compat" && docElemProp || doc.body[ name ] || docElemProp,
				styleBlocks	= {},
				lastLink = links[ links.length-1 ],
				now = (new Date()).getTime();

			//throttle resize calls
			if( fromResize && lastCall && now - lastCall < resizeThrottle ){
				w.clearTimeout( resizeDefer );
				resizeDefer = w.setTimeout( applyMedia, resizeThrottle );
				return;
			}
			else {
				lastCall = now;
			}

			for( var i in mediastyles ){
				if( mediastyles.hasOwnProperty( i ) ){
					var thisstyle = mediastyles[ i ],
						min = thisstyle.minw,
						max = thisstyle.maxw,
						minnull = min === null,
						maxnull = max === null,
						em = "em";

					if( !!min ){
						min = parseFloat( min ) * ( min.indexOf( em ) > -1 ? ( eminpx || getEmValue() ) : 1 );
					}
					if( !!max ){
						max = parseFloat( max ) * ( max.indexOf( em ) > -1 ? ( eminpx || getEmValue() ) : 1 );
					}

					// if there's no media query at all (the () part), or min or max is not null, and if either is present, they're true
					if( !thisstyle.hasquery || ( !minnull || !maxnull ) && ( minnull || currWidth >= min ) && ( maxnull || currWidth <= max ) ){
						if( !styleBlocks[ thisstyle.media ] ){
							styleBlocks[ thisstyle.media ] = [];
						}
						styleBlocks[ thisstyle.media ].push( rules[ thisstyle.rules ] );
					}
				}
			}

			//remove any existing respond style element(s)
			for( var j in appendedEls ){
				if( appendedEls.hasOwnProperty( j ) ){
					if( appendedEls[ j ] && appendedEls[ j ].parentNode === head ){
						head.removeChild( appendedEls[ j ] );
					}
				}
			}
			appendedEls.length = 0;

			//inject active styles, grouped by media type
			for( var k in styleBlocks ){
				if( styleBlocks.hasOwnProperty( k ) ){
					var ss = doc.createElement( "style" ),
						css = styleBlocks[ k ].join( "\n" );

					ss.type = "text/css";
					ss.media = k;

					//originally, ss was appended to a documentFragment and sheets were appended in bulk.
					//this caused crashes in IE in a number of circumstances, such as when the HTML element had a bg image set, so appending beforehand seems best. Thanks to @dvelyk for the initial research on this one!
					head.insertBefore( ss, lastLink.nextSibling );

					if ( ss.styleSheet ){
						ss.styleSheet.cssText = css;
					}
					else {
						ss.appendChild( doc.createTextNode( css ) );
					}

					//push to appendedEls to track for later removal
					appendedEls.push( ss );
				}
			}
		},
		//find media blocks in css text, convert to style blocks
		translate = function( styles, href, media ){
			var qs = styles.replace( respond.regex.comments, '' )
					.replace( respond.regex.keyframes, '' )
					.match( respond.regex.media ),
				ql = qs && qs.length || 0;

			//try to get CSS path
			href = href.substring( 0, href.lastIndexOf( "/" ) );

			var repUrls = function( css ){
					return css.replace( respond.regex.urls, "$1" + href + "$2$3" );
				},
				useMedia = !ql && media;

			//if path exists, tack on trailing slash
			if( href.length ){ href += "/"; }

			//if no internal queries exist, but media attr does, use that
			//note: this currently lacks support for situations where a media attr is specified on a link AND
				//its associated stylesheet has internal CSS media queries.
				//In those cases, the media attribute will currently be ignored.
			if( useMedia ){
				ql = 1;
			}

			for( var i = 0; i < ql; i++ ){
				var fullq, thisq, eachq, eql;

				//media attr
				if( useMedia ){
					fullq = media;
					rules.push( repUrls( styles ) );
				}
				//parse for styles
				else{
					fullq = qs[ i ].match( respond.regex.findStyles ) && RegExp.$1;
					rules.push( RegExp.$2 && repUrls( RegExp.$2 ) );
				}

				eachq = fullq.split( "," );
				eql = eachq.length;

				for( var j = 0; j < eql; j++ ){
					thisq = eachq[ j ];

					if( isUnsupportedMediaQuery( thisq ) ) {
						continue;
					}

					mediastyles.push( {
						media : thisq.split( "(" )[ 0 ].match( respond.regex.only ) && RegExp.$2 || "all",
						rules : rules.length - 1,
						hasquery : thisq.indexOf("(") > -1,
						minw : thisq.match( respond.regex.minw ) && parseFloat( RegExp.$1 ) + ( RegExp.$2 || "" ),
						maxw : thisq.match( respond.regex.maxw ) && parseFloat( RegExp.$1 ) + ( RegExp.$2 || "" )
					} );
				}
			}

			applyMedia();
		},

		//recurse through request queue, get css text
		makeRequests = function(){
			if( requestQueue.length ){
				var thisRequest = requestQueue.shift();

				ajax( thisRequest.href, function( styles ){
					translate( styles, thisRequest.href, thisRequest.media );
					parsedSheets[ thisRequest.href ] = true;

					// by wrapping recursive function call in setTimeout
					// we prevent "Stack overflow" error in IE7
					w.setTimeout(function(){ makeRequests(); },0);
				} );
			}
		},

		//loop stylesheets, send text content to translate
		ripCSS = function(){

			for( var i = 0; i < links.length; i++ ){
				var sheet = links[ i ],
				href = sheet.href,
				media = sheet.media,
				isCSS = sheet.rel && sheet.rel.toLowerCase() === "stylesheet";

				//only links plz and prevent re-parsing
				if( !!href && isCSS && !parsedSheets[ href ] ){
					// selectivizr exposes css through the rawCssText expando
					if (sheet.styleSheet && sheet.styleSheet.rawCssText) {
						translate( sheet.styleSheet.rawCssText, href, media );
						parsedSheets[ href ] = true;
					} else {
						if( (!/^([a-zA-Z:]*\/\/)/.test( href ) && !base) ||
							href.replace( RegExp.$1, "" ).split( "/" )[0] === w.location.host ){
							// IE7 doesn't handle urls that start with '//' for ajax request
							// manually add in the protocol
							if ( href.substring(0,2) === "//" ) { href = w.location.protocol + href; }
							requestQueue.push( {
								href: href,
								media: media
							} );
						}
					}
				}
			}
			makeRequests();
		};

	//translate CSS
	ripCSS();

	//expose update for re-running respond later on
	respond.update = ripCSS;

	//expose getEmValue
	respond.getEmValue = getEmValue;

	//adjust on resize
	function callMedia(){
		applyMedia( true );
	}

	if( w.addEventListener ){
		w.addEventListener( "resize", callMedia, false );
	}
	else if( w.attachEvent ){
		w.attachEvent( "onresize", callMedia );
	}
})(this);