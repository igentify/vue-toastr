!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vueToastr=e():t.vueToastr=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(15),i=o(r);n(36),e.default=i.default,t.exports=e.default},function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var o=n(27),r=n(22);t.exports=function(t){return o(r(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},function(t,e,n){t.exports=!n(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var o=n(2),r="__core-js_shared__",i=o[r]||(o[r]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e,n){var o=n(10)("wks"),r=n(11),i=n(2).Symbol;t.exports=function(t){return o[t]||(o[t]=i&&i[t]||(i||r)("Symbol."+t))}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={template:'<div class="toast-progress" v-bind:style="style"></div>',props:["data"],data:function(){return{intervalId:!1,hideEta:!1,style:{width:"100%"}}},mounted:function(){this.hideEta=(new Date).getTime()+this.data.timeout,this.setTimer()},destroyed:function(){clearInterval(this.intervalId)},methods:{setTimer:function(){var t=this;this.intervalId=setInterval(function(){t.updateProgress()},10)},updateProgress:function(){var t=this.hideEta-(new Date).getTime(),e=t/this.data.timeout*100;e=Math.floor(e),this.style.width=e+"%"}}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(37),i=o(r),s=n(13),u=o(s);e.default={components:{toastProgress:u.default},template:i.default,props:["data"],data:function(){return{progressbar:!1,intervalId:!1}},mounted:function(){},created:function(){"undefined"!=typeof this.data.timeout&&0!=this.data.timeout&&(0!=this.data.progressbar&&(this.progressbar=!0),this.setTimeout())},beforeDestroy:function(){this.clearIntervalID()},methods:{clearIntervalID:function(){0!=this.intervalId&&clearInterval(this.intervalId),this.intervalId=!1},onMouseOver:function(){"undefined"!=typeof this.data.onMouseOver&&this.data.onMouseOver(),this.data.closeOnHover||this.clearIntervalID()},onMouseOut:function(){"undefined"!=typeof this.data.onMouseOut&&this.data.onMouseOut(),this.data.closeOnHover||this.setTimeout()},setTimeout:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=this;this.intervalId=setTimeout(function(){t.close()},this.data.timeout)}),clicked:function(){"undefined"!=typeof this.data.onClicked&&this.data.onClicked(),this.cclose()},cclose:function(){"undefined"!=typeof this.data.clickClose&&0==this.data.clickClose||this.close()},close:function(){null!=this.$parent&&this.$parent.Close(this.data)}}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(17),i=o(r),s=n(38),u=o(s),a=n(14),c=o(a);e.default={template:u.default,name:"vueToastr",data:function(){for(var t=["toast-top-right","toast-bottom-right","toast-bottom-left","toast-top-left","toast-top-full-width","toast-bottom-full-width","toast-top-center","toast-bottom-center"],e={},n=0;n<=t.length-1;n++)e[t[n]]=new Object;return{positions:t,defaultPosition:"toast-top-right",defaultType:"success",defaultCloseOnHover:!0,defaultTimeout:5e3,defaultProgressBar:!0,list:e,index:0}},created:function(){},mounted:function(){},components:{toast:c.default},methods:{addToast:function(t){this.index++,t.index=this.index,this.$set(this.list[t.position],this.index,t),"undefined"!=typeof t.onCreated&&this.$nextTick(function(){t.onCreated()})},removeToast:function(t){var e=this.list[t.position][t.index];"undefined"!=typeof e&&(this.$delete(this.list[t.position],t.index),"undefined"!=typeof t.onClosed&&this.$nextTick(function(){t.onClosed()}))},Add:function(t){return this.AddData(this.processObjectData(t))},AddData:function(t){return"object"!==("undefined"==typeof t?"undefined":(0,i.default)(t))?(console.log("AddData accept only Object",t),!1):(this.addToast(t),t)},processObjectData:function(t){return"object"===("undefined"==typeof t?"undefined":(0,i.default)(t))&&"undefined"!=typeof t.msg?("undefined"==typeof t.position&&(t.position=this.defaultPosition),"undefined"==typeof t.type&&(t.type=this.defaultType),"undefined"==typeof t.timeout&&(t.timeout=this.defaultTimeout),"undefined"==typeof t.progressbar&&(t.progressBar=this.defaultProgressBar),"undefined"==typeof t.closeOnHover&&(t.closeOnHover=this.defaultCloseOnHover),t):{msg:t.toString(),position:this.defaultPosition,type:this.defaultType,timeout:this.defaultTimeout,closeOnHover:this.defaultCloseOnHover,progressBar:this.defaultProgressBar}},e:function(t,e){var n=this.processObjectData(t);return n.type="error","undefined"!=typeof e&&(n.title=e),this.AddData(n)},s:function(t,e){var n=this.processObjectData(t);return n.type="success","undefined"!=typeof e&&(n.title=e),this.AddData(n)},w:function(t,e){var n=this.processObjectData(t);return n.type="warning","undefined"!=typeof e&&(n.title=e),this.AddData(n)},i:function(t,e){var n=this.processObjectData(t);return n.type="info","undefined"!=typeof e&&(n.title=e),this.AddData(n)},Close:function(t){this.removeToast(t)}}},t.exports=e.default},function(t,e,n){t.exports={default:n(18),__esModule:!0}},function(t,e,n){"use strict";var o=n(16).default;e.default=function(t){return t&&t.constructor===o?"symbol":typeof t},e.__esModule=!0},function(t,e,n){n(35),n(34),t.exports=n(5).Symbol},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var o=n(29);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var o=n(19);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var o=n(1);t.exports=function(t){var e=o.getKeys(t),n=o.getSymbols;if(n)for(var r,i=n(t),s=o.isEnum,u=0;i.length>u;)s.call(t,r=i[u++])&&e.push(r);return e}},function(t,e,n){var o=n(2),r=n(5),i=n(21),s="prototype",u=function(t,e,n){var a,c,f,d=t&u.F,l=t&u.G,p=t&u.S,h=t&u.P,y=t&u.B,v=t&u.W,m=l?r:r[e]||(r[e]={}),g=l?o:p?o[e]:(o[e]||{})[s];l&&(n=e);for(a in n)c=!d&&g&&a in g,c&&a in m||(f=c?g[a]:n[a],m[a]=l&&"function"!=typeof g[a]?n[a]:y&&c?i(f,o):v&&g[a]==f?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[s]=t[s],e}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((m[s]||(m[s]={}))[a]=f))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,t.exports=u},function(t,e,n){var o=n(3),r=n(1).getNames,i={}.toString,s="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return r(t)}catch(t){return s.slice()}};t.exports.get=function(t){return s&&"[object Window]"==i.call(t)?u(t):r(o(t))}},function(t,e,n){var o=n(1),r=n(9);t.exports=n(6)?function(t,e,n){return o.setDesc(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var o=n(4);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e,n){var o=n(4);t.exports=Array.isArray||function(t){return"Array"==o(t)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var o=n(1),r=n(3);t.exports=function(t,e){for(var n,i=r(t),s=o.getKeys(i),u=s.length,a=0;u>a;)if(i[n=s[a++]]===e)return n}},function(t,e){t.exports=!0},function(t,e,n){t.exports=n(26)},function(t,e,n){var o=n(1).setDesc,r=n(8),i=n(12)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e})}},function(t,e){},function(t,e,n){"use strict";var o=n(1),r=n(2),i=n(8),s=n(6),u=n(24),a=n(32),c=n(7),f=n(10),d=n(33),l=n(11),p=n(12),h=n(30),y=n(25),v=n(23),m=n(28),g=n(20),b=n(3),x=n(9),O=o.getDesc,w=o.setDesc,S=o.create,_=y.get,j=r.Symbol,P=r.JSON,D=P&&P.stringify,T=!1,M=p("_hidden"),I=o.isEnum,k=f("symbol-registry"),C=f("symbols"),E="function"==typeof j,A=Object.prototype,N=s&&c(function(){return 7!=S(w({},"a",{get:function(){return w(this,"a",{value:7}).a}})).a})?function(t,e,n){var o=O(A,e);o&&delete A[e],w(t,e,n),o&&t!==A&&w(A,e,o)}:w,H=function(t){var e=C[t]=S(j.prototype);return e._k=t,s&&T&&N(A,t,{configurable:!0,set:function(e){i(this,M)&&i(this[M],t)&&(this[M][t]=!1),N(this,t,x(1,e))}}),e},B=function(t){return"symbol"==typeof t},F=function(t,e,n){return n&&i(C,e)?(n.enumerable?(i(t,M)&&t[M][e]&&(t[M][e]=!1),n=S(n,{enumerable:x(0,!1)})):(i(t,M)||w(t,M,x(1,{})),t[M][e]=!0),N(t,e,n)):w(t,e,n)},$=function(t,e){g(t);for(var n,o=v(e=b(e)),r=0,i=o.length;i>r;)F(t,n=o[r++],e[n]);return t},J=function(t,e){return void 0===e?S(t):$(S(t),e)},W=function(t){var e=I.call(this,t);return!(e||!i(this,t)||!i(C,t)||i(this,M)&&this[M][t])||e},G=function(t,e){var n=O(t=b(t),e);return!n||!i(C,e)||i(t,M)&&t[M][e]||(n.enumerable=!0),n},K=function(t){for(var e,n=_(b(t)),o=[],r=0;n.length>r;)i(C,e=n[r++])||e==M||o.push(e);return o},z=function(t){for(var e,n=_(b(t)),o=[],r=0;n.length>r;)i(C,e=n[r++])&&o.push(C[e]);return o},q=function(t){if(void 0!==t&&!B(t)){for(var e,n,o=[t],r=1,i=arguments;i.length>r;)o.push(i[r++]);return e=o[1],"function"==typeof e&&(n=e),!n&&m(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!B(e))return e}),o[1]=e,D.apply(P,o)}},L=c(function(){var t=j();return"[null]"!=D([t])||"{}"!=D({a:t})||"{}"!=D(Object(t))});E||(j=function(){if(B(this))throw TypeError("Symbol is not a constructor");return H(l(arguments.length>0?arguments[0]:void 0))},a(j.prototype,"toString",function(){return this._k}),B=function(t){return t instanceof j},o.create=J,o.isEnum=W,o.getDesc=G,o.setDesc=F,o.setDescs=$,o.getNames=y.get=K,o.getSymbols=z,s&&!n(31)&&a(A,"propertyIsEnumerable",W,!0));var Q={for:function(t){return i(k,t+="")?k[t]:k[t]=j(t)},keyFor:function(t){return h(k,t)},useSetter:function(){T=!0},useSimple:function(){T=!1}};o.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(t){var e=p(t);Q[t]=E?e:H(e)}),T=!0,u(u.G+u.W,{Symbol:j}),u(u.S,"Symbol",Q),u(u.S+u.F*!E,"Object",{create:J,defineProperty:F,defineProperties:$,getOwnPropertyDescriptor:G,getOwnPropertyNames:K,getOwnPropertySymbols:z}),P&&u(u.S+u.F*(!E||L),"JSON",{stringify:q}),d(j,"Symbol"),d(Math,"Math",!0),d(r.JSON,"JSON",!0)},function(t,e){},function(t,e){t.exports='<div v-bind:class="\'toast toast-\' + data.type" style="display: block" @click=clicked() v-on:mouseover=onMouseOver v-on:mouseout=onMouseOut> <toast-progress v-if=progressbar :data=data></toast-progress> <div class=toast-title v-html=data.title> </div> <div class=toast-message v-html=data.msg> </div> </div>'},function(t,e){t.exports='<div> <div v-bind:class="\'toast-container \' + position" v-for="(toasts, position) in list" :key=position> <toast :data=toast v-for="(toast, index) in toasts" :key=index> </toast> </div> </div>'}])});
//# sourceMappingURL=vue-toastr.js.map