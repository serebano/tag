!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/bitbox/",t(0)}([function(e,t,r){r(31),e.exports=r(19)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(27);Object.defineProperty(t,"wellKnownSymbols",{enumerable:!0,get:function(){return n(o).default}});var i=r(23);Object.defineProperty(t,"nextTick",{enumerable:!0,get:function(){return n(i).default}});var u=r(26);Object.defineProperty(t,"toPrimitive",{enumerable:!0,get:function(){return n(u).default}});var a=r(24);Object.defineProperty(t,"toArray",{enumerable:!0,get:function(){return n(a).default}});var f=r(25);Object.defineProperty(t,"toJSON",{enumerable:!0,get:function(){return n(f).default}});var s=r(22);Object.defineProperty(t,"is",{enumerable:!0,get:function(){return n(s).default}})},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return new Proxy(new u(e,t),{get:function(e,r){return Reflect.has(e,r)?s.default.create(Reflect.get(e,r)):t?void 0:(0,s.default)(r)},set:function(e,t,r){if(y.is.box(r))return Reflect.set(e,t,r)}})}function u(e,t,r){return e instanceof u?e:y.is.func(e)?new u(e(i(t,r),l)):y.is.map(this)?Object.keys(e||{}).reduce(function(n,o){var i=Reflect.get(e,o);if(y.is.object(i))i=Array.from(s.default.create(i,t,r));else if(y.is.array(i))i=Array.from(i);else if(y.is.box(i))i=Array.from(i);else{if(!y.is.func(i))throw new Error("[mapping] Invalid mapping { "+o+": "+("undefined"==typeof i?"undefined":a(i))+" }");i=[i]}return Reflect.set(n,o,i),n},this):new(Function.prototype.bind.apply(u,[null].concat(Array.prototype.slice.call(arguments))))}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=r(4),s=o(f),c=r(8),l=n(c),y=r(1);t.default=u},function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(e){if(!s.is.func(e))throw new TypeError("[bitbox.observe] First argument must be a function");for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=i(e,r);return u(o),o}function i(e,t){var r={observer:e,args:t,keys:[],paths:[],changes:[],changed:0,run:function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return r.keys?u(r,t,!0):r.observer.apply(r,n(t))},skip:function(){return f.queue.delete(r)},on:function(){return r.keys=[],r.paths=[],u(r),r},off:function(){r.keys&&(r.keys.forEach(function(e){e.delete(r)}),delete r.keys,f.queue.delete(r))}};return r}function u(e,t,r){var n=void 0;try{f.state.currentObserver=e,n=e.observer.apply(void 0,t?e.args.concat(t):e.args)}finally{f.state.currentObserver=void 0,r||(e.changes=[]),r||e.changed++}return n}function a(){f.queue.forEach(function(e){return u(e)}),f.queue.clear(),f.state.queued=!1}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o,t.runObserver=u,t.runObservers=a;var f=r(6),s=r(1)},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,f.default)(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var u=r(8);Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})});var a=r(9),f=o(a),s=r(7),c=(o(s),r(2)),l=o(c),y=r(5),d=o(y),p=r(3),h=o(p),b=n(u);i.map=l.default,i.observable=d.default,i.observe=h.default,i.create=f.default,i.operators=b},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e=e||{},!d.is.complexObject(e))throw new TypeError("[bitbox.observable] target must be an object or undefined");return p.proxies.get(e)||i(e)}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=void 0;return r=y.default.has(e.constructor)?y.default.get(e.constructor)(e,t,a,f):u(e,t),p.proxies.set(e,r),p.proxies.set(r,r),p.observers.set(e,new Map),r}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return new Proxy(e,{get:function(e,r,n){if("$"===r)return e;var o=Reflect.get(e,r,n);if(d.is.symbol(r)&&d.wellKnownSymbols.has(r))return o;var u=d.is.complexObject(o)&&o,f=u&&p.proxies.get(o);return p.state.currentObserver&&(a(e,r,t),u)?f||i(o,t.concat(r)):f||o},set:function(e,r,n,o){return"length"!==r&&n===Reflect.get(e,r,o)||(f(e,r,t),f(e,p.enumerate,t)),"object"===("undefined"==typeof n?"undefined":c(n))&&n&&(n=n.$||n),Reflect.set(e,r,n,o)},deleteProperty:function(e,r){return Reflect.has(e,r)&&(f(e,r,t),f(e,p.enumerate,t)),Reflect.deleteProperty(e,r)},ownKeys:function(e){return a(e,p.enumerate,t),Reflect.ownKeys(e)}})}function a(e,t,r){if(p.state.currentObserver){var n=p.observers.get(e);n.has(t)||n.set(t,new Set);var o=n.get(t);o.has(p.state.currentObserver)||(o.add(p.state.currentObserver),p.state.currentObserver.keys.push(o),p.state.currentObserver.paths.push(r.concat(String(t))))}}function f(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=p.observers.get(e).get(t);n&&n.constructor===Set?n.forEach(function(e){e.changes.push(r.concat(String(t))),s(e,r)}):n&&(n.changes.push(r.concat(String(t))),s(n,r))}function s(e){p.state.queued||((0,d.nextTick)(h.runObservers),p.state.queued=!0),p.queue.add(e)}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var l=r(18),y=n(l),d=r(1),p=r(6),h=r(3)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.queue=new Set,t.proxies=new WeakMap,t.observers=new WeakMap,t.enumerate=Symbol("enumerate"),t.state={queued:!1,currentObserver:void 0}},function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(e,t){return new Proxy(t,{get:function(t,r){if(Reflect.has(t,r)){Reflect.get(t,r);return i(e,Reflect.get(t,r))}},set:function(t,r,n){if(Reflect.has(t,r))return i(e,Reflect.get(t,r),n)}})}function i(e,t){for(var r=arguments.length,s=Array(r>2?r-2:0),c=2;c<r;c++)s[c-2]=arguments[c];return Array.from(t).reduce(function(t,r,c,l){if(f.is.box(r))return i(t,r);if(f.is.func(r))return r(t);if(f.is.array(r)&&(r=i(e,r)),f.is.object(r))return o(t,r);if(s.length&&(!l.length||c===l.length-1)){if(!f.is.string(r)&&!f.is.number(r))throw new Error('[resolve] Invalid key type "'+("undefined"==typeof r?"undefined":a(r))+'" for method "'+s[0].name+'" ['+l.join(".")+"]");var y=s[0],d=s.slice(1);return!f.is.func(y)||f.is.box(y)?Reflect.set(t,r,u(e)(y)):y.apply(void 0,[t,r].concat(n(d.map(u(e)))))}return Reflect.get(t,r)},e||{})}function u(e){return function(t){return f.is.box(t)?i(e,t):t}}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=r(1);t.default=i},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function i(e){return function(t){return function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return e(Object.assign({args:n},t))}}}function u(e,t){return function(r){return function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return e(Object.assign({args:o},r),t)}}}function a(e){return function(t){return new Proxy(e)}}function f(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduce(function(e,r,n){return n===t.length-1?D.is.box(r)?(0,F.default)(r):D.is.func(r)?r(e):r:D.is.box(r)?[].concat(o(e),[(0,F.default)(r)]):D.is.func(r)?[].concat(o(e),[r.apply(void 0,o(e))]):[].concat(o(e),[r])},[])}}function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return Object.assign.apply(Object,t)}}function c(e){return function(t){return t.join(e)}}function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return e.concat.apply(e,t)}}function y(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return e.push.apply(e,t)}}function d(e){return function(e){return e.pop()}}function p(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return e.unshift.apply(e,t)}}function h(e){return function(e){return e.shift()}}function b(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return e.slice.apply(e,t)}}function v(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return e.splice.apply(e,t)}}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;return function(t){return JSON.stringify(null,e)}}function g(e){return function(t){return t.split(e)}}function _(e){return e.toUpperCase()}function w(e){return e.toLowerCase()}function j(e){return Object.keys(e)}function O(e){return e+1}function S(e){return e-1}function P(e){return!e}function x(e){return function(t){return t===e}}function A(e){return function(t){return t>e}}function M(e){return function(t){return t<e}}function E(e){return function(t){return("undefined"==typeof t?"undefined":T(t))===e}}Object.defineProperty(t,"__esModule",{value:!0}),t.resolve=t.map=t.observable=t.observe=t.print=t.delay=void 0;var T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R=r(20);Object.defineProperty(t,"delay",{enumerable:!0,get:function(){return n(R).default}});var k=r(21);Object.defineProperty(t,"print",{enumerable:!0,get:function(){return n(k).default}});var B=r(3);Object.defineProperty(t,"observe",{enumerable:!0,get:function(){return n(B).default}});var U=r(5);Object.defineProperty(t,"observable",{enumerable:!0,get:function(){return n(U).default}});var I=r(2);Object.defineProperty(t,"map",{enumerable:!0,get:function(){return n(I).default}});var q=r(7);Object.defineProperty(t,"resolve",{enumerable:!0,get:function(){return n(q).default}}),t.action=i,t.set=u,t.proxy=a,t.compute=f,t.assign=s,t.join=c,t.concat=l,t.push=y,t.pop=d,t.unshift=p,t.shift=h,t.slice=b,t.splice=v,t.stringify=m,t.split=g,t.toUpper=_,t.toLower=w,t.keys=j,t.inc=O,t.dec=S,t.toggle=P,t.eq=x,t.gt=A,t.lt=M,t.type=E;var F=n(q),D=r(1)},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function i(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function u(e){return Array.isArray(e)?e:Array.from(e)}function a(e){return f(!p.is.func(e)&&!p.is.object(e)||p.is.map(e)?e.map(j):[l.default.apply(void 0,arguments)])}function f(e){function t(){}var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e,o=p.is.object(e[0])&&e[0];t.toString=function(){return"function "+s+"(object) { [bitbox api] }"};var s=new Proxy(t,{apply:function(t,o,a){var s;if(r&&(e=n.slice(0)),a.length&&p.is.complexObject(a[0])){var c=u(a),l=c[0],y=c.slice(1);return d.default.apply(void 0,[l,e].concat(i(y)))}if(a.length>1&&p.is.func(a[0])){var h=a.shift();return f(e.concat(h.apply(void 0,i(a))))}return a.length&&(s=e).push.apply(s,i(a.map(j))),f(e)},get:function(t,i){return r&&(e=n.slice(0)),o&&Reflect.has(o,i)?a(Reflect.get(o,i)):"$"===i?e:"apply"===i?Reflect.get(t,i):"toJSON"===i?function(){return(0,p.toJSON)(e)}:"displayName"===i?(0,p.toPrimitive)(e):i!==Symbol.isConcatSpreadable&&(i===Symbol.iterator?w(e):i===Symbol.toPrimitive?m(e):i===Symbol.toStringTag?g:(e.push(p.is.undefined(b)||i!==v?i:b),b=void 0,v=void 0,r?f(e,!1):s))},has:function(e,t){return!0}});return s}Object.defineProperty(t,"__esModule",{value:!0}),t.symbol=void 0;var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=r(2),l=o(c),y=r(7),d=o(y),p=r(1),h=r(8),b=(n(h),t.symbol={path:Symbol("bitbox.path")},void 0),v=void 0,m=function(e){return b=e,function(){return v=(0,p.toPrimitive)(e)}},g=function(){return"bitbox"},_=["string","number","function","symbol","object"],w=function(e){return Array.prototype[Symbol.iterator].bind(e)},j=function(e){if(_.includes("undefined"==typeof e?"undefined":s(e)))return e;throw new Error('Invalid key "'+String(e)+'" type "'+("undefined"==typeof e?"undefined":s(e))+'"')};t.default=a},function(e,t,r){"use strict";function n(){}function o(e){try{return e.then}catch(e){return v=e,m}}function i(e,t){try{return e(t)}catch(e){return v=e,m}}function u(e,t,r){try{e(t,r)}catch(e){return v=e,m}}function a(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._45=0,this._81=0,this._65=null,this._54=null,e!==n&&h(e,this)}function f(e,t,r){return new e.constructor(function(o,i){var u=new a(n);u.then(o,i),s(e,new p(t,r,u))})}function s(e,t){for(;3===e._81;)e=e._65;return a._10&&a._10(e),0===e._81?0===e._45?(e._45=1,void(e._54=t)):1===e._45?(e._45=2,void(e._54=[e._54,t])):void e._54.push(t):void c(e,t)}function c(e,t){b(function(){var r=1===e._81?t.onFulfilled:t.onRejected;if(null===r)return void(1===e._81?l(t.promise,e._65):y(t.promise,e._65));var n=i(r,e._65);n===m?y(t.promise,v):l(t.promise,n)})}function l(e,t){if(t===e)return y(e,new TypeError("A promise cannot be resolved with itself."));if(t&&("object"==typeof t||"function"==typeof t)){var r=o(t);if(r===m)return y(e,v);if(r===e.then&&t instanceof a)return e._81=3,e._65=t,void d(e);if("function"==typeof r)return void h(r.bind(t),e)}e._81=1,e._65=t,d(e)}function y(e,t){e._81=2,e._65=t,a._97&&a._97(e,t),d(e)}function d(e){if(1===e._45&&(s(e,e._54),e._54=null),2===e._45){for(var t=0;t<e._54.length;t++)s(e,e._54[t]);e._54=null}}function p(e,t,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=r}function h(e,t){var r=!1,n=u(e,function(e){r||(r=!0,l(t,e))},function(e){r||(r=!0,y(t,e))});r||n!==m||(r=!0,y(t,v))}var b=r(11),v=null,m={};e.exports=a,a._10=null,a._97=null,a._61=n,a.prototype.then=function(e,t){if(this.constructor!==a)return f(this,e,t);var r=new a(n);return s(this,new p(e,t,r)),r}},function(e,t){(function(t){"use strict";function r(e){a.length||(u(),f=!0),a[a.length]=e}function n(){for(;s<a.length;){var e=s;if(s+=1,a[e].call(),s>c){for(var t=0,r=a.length-s;t<r;t++)a[t]=a[t+s];a.length-=s,s=0}}a.length=0,s=0,f=!1}function o(e){var t=1,r=new y(e),n=document.createTextNode("");return r.observe(n,{characterData:!0}),function(){t=-t,n.data=t}}function i(e){return function(){function t(){clearTimeout(r),clearInterval(n),e()}var r=setTimeout(t,0),n=setInterval(t,50)}}e.exports=r;var u,a=[],f=!1,s=0,c=1024,l="undefined"!=typeof t?t:self,y=l.MutationObserver||l.WebKitMutationObserver;u="function"==typeof y?o(n):i(n),r.requestFlush=u,r.makeRequestCallFromTimer=i}).call(t,function(){return this}())},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.obj=t.app=t.map3=t.map2=t.map1=void 0;var o=r(4),i=n(o),u=t.map1=function(e,t){var r=e.state,n=t.observable;return{state:r(n),foo:r(function(e){return{bar:e.name,items:e.items||(e.items=[])}})(n)}},a=t.map2=function(e){var t=e.state,r=e.foo;return{count:t.count,foo:r.bar,items:r.items,x:t.name}},f=t.map3=(0,o.map)(a,u),s=t.app=(0,i.default)(f),c=t.obj={state:{count:0,items:[]}};s.count(c,s.count(o.inc)),(0,i.default)(function(e){return[s.items((0,o.concat)(1,2,3))(e),s.items(o.concat,1,2,3)(e),s.items(e).concat(1,2,3)]},print)(c)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return f.is.complexObject(e)&&a.proxies.get(e)===e}Object.defineProperty(t,"__esModule",{value:!0}),t.observe=t.observable=void 0;var i=r(5);Object.defineProperty(t,"observable",{enumerable:!0,get:function(){return n(i).default}});var u=r(3);Object.defineProperty(t,"observe",{enumerable:!0,get:function(){return n(u).default}}),t.isObservable=o;var a=r(6),f=r(1)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Map.prototype,n=Symbol("Map master key"),o=["has","get"],i=["forEach","keys","values","entries",Symbol.iterator],u=["set","delete","clear"].concat(o,i);t.default=function(e,t,a,f){e.$raw={};var s=function(t){e.$raw[t]=function(){r[t].apply(e,arguments)}},c=!0,l=!1,y=void 0;try{for(var d,p=u[Symbol.iterator]();!(c=(d=p.next()).done);c=!0){var h=d.value;s(h)}}catch(e){l=!0,y=e}finally{try{!c&&p.return&&p.return()}finally{if(l)throw y}}var b=function(n){e[n]=function(e){return a(this,e,t),r[n].apply(this,arguments)}},v=!0,m=!1,g=void 0;try{for(var _,w=o[Symbol.iterator]();!(v=(_=w.next()).done);v=!0){var j=_.value;b(j)}}catch(e){m=!0,g=e}finally{try{!v&&w.return&&w.return()}finally{if(m)throw g}}var O=function(o){e[o]=function(){return a(this,n,t),r[o].apply(this,arguments)}},S=!0,P=!1,x=void 0;try{for(var A,M=i[Symbol.iterator]();!(S=(A=M.next()).done);S=!0){var E=A.value;O(E)}}catch(e){P=!0,x=e}finally{try{!S&&M.return&&M.return()}finally{if(P)throw x}}return e.set=function(e,o){return this.get(e)!==o&&(f(this,e,t),f(this,n,t)),r.set.apply(this,arguments)},e.delete=function(e){return this.has(e)&&(f(this,e,t),f(this,n,t)),r.delete.apply(this,arguments)},e.clear=function(){return this.size&&f(this,n,t),r.clear.apply(this,arguments)},e}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Set.prototype,n=Symbol("Set master value"),o=["has"],i=["forEach","keys","values","entries",Symbol.iterator],u=["add","delete","clear"].concat(o,i);t.default=function(e,t,a,f){e.$raw={};var s=function(t){e.$raw[t]=function(){r[t].apply(e,arguments)}},c=!0,l=!1,y=void 0;try{for(var d,p=u[Symbol.iterator]();!(c=(d=p.next()).done);c=!0){var h=d.value;s(h)}}catch(e){l=!0,y=e}finally{try{!c&&p.return&&p.return()}finally{if(l)throw y}}var b=function(n){e[n]=function(e){return a(this,e,t),r[n].apply(this,arguments)}},v=!0,m=!1,g=void 0;try{for(var _,w=o[Symbol.iterator]();!(v=(_=w.next()).done);v=!0){var j=_.value;b(j)}}catch(e){m=!0,g=e}finally{try{!v&&w.return&&w.return()}finally{if(m)throw g}}var O=function(o){e[o]=function(){return a(this,n,t),r[o].apply(this,arguments)}},S=!0,P=!1,x=void 0;try{for(var A,M=i[Symbol.iterator]();!(S=(A=M.next()).done);S=!0){var E=A.value;O(E)}}catch(e){P=!0,x=e}finally{try{!S&&M.return&&M.return()}finally{if(P)throw x}}return e.add=function(e){return this.has(e)||(f(this,e,t),f(this,n,t)),r.add.apply(this,arguments)},e.delete=function(e){return this.has(e)&&(f(this,e,t),f(this,n,t)),r.delete.apply(this,arguments)},e.clear=function(){return this.size&&f(this,n,t),r.clear.apply(this,arguments)},e}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=WeakMap.prototype,n=["has","get"],o=["set","delete"].concat(n);t.default=function(e,t,i,u){e.$raw={};var a=function(t){e.$raw[t]=function(){r[t].apply(e,arguments)}},f=!0,s=!1,c=void 0;try{for(var l,y=o[Symbol.iterator]();!(f=(l=y.next()).done);f=!0){var d=l.value;a(d)}}catch(e){s=!0,c=e}finally{try{!f&&y.return&&y.return()}finally{if(s)throw c}}var p=function(n){e[n]=function(e){return i(this,e,t),r[n].apply(this,arguments)}},h=!0,b=!1,v=void 0;try{for(var m,g=n[Symbol.iterator]();!(h=(m=g.next()).done);h=!0){var _=m.value;p(_)}}catch(e){b=!0,v=e}finally{try{!h&&g.return&&g.return()}finally{if(b)throw v}}return e.set=function(e,n){return this.get(e)!==n&&u(this,e,t),r.set.apply(this,arguments)},e.delete=function(e){return this.has(e)&&u(this,e,t),r.delete.apply(this,arguments)},e}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=WeakSet.prototype,n=["has"],o=["add","delete"].concat(n);t.default=function(e,t,i,u){e.$raw={};var a=function(t){e.$raw[t]=function(){r[t].apply(e,arguments)}},f=!0,s=!1,c=void 0;try{for(var l,y=o[Symbol.iterator]();!(f=(l=y.next()).done);f=!0){var d=l.value;a(d)}}catch(e){s=!0,c=e}finally{try{!f&&y.return&&y.return()}finally{if(s)throw c}}var p=function(n){e[n]=function(e){return i(this,e,t),r[n].apply(this,arguments)}},h=!0,b=!1,v=void 0;try{for(var m,g=n[Symbol.iterator]();!(h=(m=g.next()).done);h=!0){var _=m.value;p(_)}}catch(e){b=!0,v=e}finally{try{!h&&g.return&&g.return()}finally{if(b)throw v}}return e.add=function(e){return this.has(e)||u(this,e,t),r.add.apply(this,arguments)},e.delete=function(e){return this.has(e)&&u(this,e,t),r.delete.apply(this,arguments)},e}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(14),i=n(o),u=r(15),a=n(u),f=r(16),s=n(f),c=r(17),l=n(c);t.default=new Map([[Map,i.default],[Set,a.default],[WeakMap,s.default],[WeakSet,l.default],[Date,!0],[RegExp,!0]])},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(4);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var u=o(i),a=r(12),f=n(a);t.default=u.default,"undefined"!=typeof window&&Object.assign(window,u.default,f,{bitbox:u.default})},function(e,t){"use strict";function r(e,t){return function(){var r=this,n=arguments;setTimeout(function(){e.apply(r,n)},t)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t){"use strict";function r(e){"string"!=typeof e&&(e=JSON.stringify(e,void 0,"\t"));var t=[],r="color:green",n="color:darkorange",o="color:blue",i="color:magenta",u="color:red";e=e.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,function(e){var a=n;return/^"/.test(e)?a=/:$/.test(e)?u:r:/true|false/.test(e)?a=o:/null/.test(e)&&(a=i),t.push(a),t.push(""),"%c"+e+"%c"}),t.unshift(e),console.log.apply(console,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=r(13),u=r(9),a=r(2),f=n(a),s={func:function(e){return"function"==typeof e},box:function(e){return s.func(e)&&Reflect.has(e,u.symbol.path)},map:function(e){return e instanceof f.default},observable:function(e){return(0,i.isObservable)(e)},object:function(e){return"object"===("undefined"==typeof e?"undefined":o(e))&&null!==e&&!Array.isArray(e)},complexObject:function(e){return"object"===("undefined"==typeof e?"undefined":o(e))&&null!==e},array:function(e){return Array.isArray(e)},promise:function(e){return e instanceof Promise},string:function(e){return"string"==typeof e},number:function(e){return"number"==typeof e},symbol:function(e){return"symbol"===("undefined"==typeof e?"undefined":o(e))},undefined:function(e){return"undefined"==typeof e},null:function(e){return null===e}};t.default=s},function(e,t){"use strict";function r(e){u=e,i?i():o=o.then(e)}function n(){u&&u()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=Promise.resolve(),i=void 0,u=void 0;if("undefined"!=typeof MutationObserver){var a=0,f=new MutationObserver(n),s=document.createTextNode(String(a));f.observe(s,{characterData:!0}),i=function(){a=(a+1)%2,s.textContent=a}}},function(e,t,r){"use strict";function n(e){return e.map(function(e){return o.is.object(e)?Object.keys(e).reduce(function(t,r){return t[r]=o.is.box(e[r])?e[r].toArray():e[r],t},{}):e})}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1);t.default=n},function(e,t,r){"use strict";function n(e){return(e||[]).map(function(e){return o.is.array(e)?n(e.filter(function(e){return!o.is.object(e)})):o.is.object(e)?Object.keys(e).reduce(function(t,r){return t[r]=o.is.box(e[r])?e[r].toJSON():n(e[r]),t},{}):o.is.func(e)?e.toString():e})}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1);t.default=n},function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".",r=arguments[2],u=e.map(function(u,a){if(i.is.object(u)){var f=Object.keys(u);return f.length?"{\n"+f.map(function(e){return""+" ".repeat(4)+e+": "+o([].concat(n(u[e])),t)}).join(",\n")+"\n}":"{}"}return i.is.func(u)?r?"function "+(u.displayName||u.name):(i.is.func(e[a-1])?"":"(")+(u.displayName||u.name||String(u))+(i.is.func(e[a+1])?", ":")"):i.is.array(u)?"["+o(u,t,!0)+"]":(a>0?t:"")+u}).join("");return u}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=r(1)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=new Set,o=!0,i=!1,u=void 0;try{for(var a,f=Object.getOwnPropertyNames(Symbol)[Symbol.iterator]();!(o=(a=f.next()).done);o=!0){var s=a.value,c=Symbol[s];"symbol"===("undefined"==typeof c?"undefined":r(c))&&n.add(c)}}catch(e){i=!0,u=e}finally{try{!o&&f.return&&f.return()}finally{if(i)throw u}}t.default=n},function(e,t){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function n(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=n()?Object.assign:function(e,t){for(var n,a,f=r(e),s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var c in n)i.call(n,c)&&(f[c]=n[c]);if(o){a=o(n);for(var l=0;l<a.length;l++)u.call(n,a[l])&&(f[a[l]]=n[a[l]])}}return f}},function(e,t,r){"use strict";function n(e){var t=new o(o._61);return t._81=1,t._65=e,t}var o=r(10);e.exports=o;var i=n(!0),u=n(!1),a=n(null),f=n(void 0),s=n(0),c=n("");o.resolve=function(e){if(e instanceof o)return e;if(null===e)return a;if(void 0===e)return f;if(e===!0)return i;if(e===!1)return u;if(0===e)return s;if(""===e)return c;if("object"==typeof e||"function"==typeof e)try{var t=e.then;if("function"==typeof t)return new o(t.bind(e))}catch(e){return new o(function(t,r){r(e)})}return n(e)},o.all=function(e){var t=Array.prototype.slice.call(e);return new o(function(e,r){function n(u,a){if(a&&("object"==typeof a||"function"==typeof a)){if(a instanceof o&&a.then===o.prototype.then){for(;3===a._81;)a=a._65;return 1===a._81?n(u,a._65):(2===a._81&&r(a._65),void a.then(function(e){n(u,e)},r))}var f=a.then;if("function"==typeof f){var s=new o(f.bind(a));return void s.then(function(e){n(u,e)},r)}}t[u]=a,0===--i&&e(t)}if(0===t.length)return e([]);for(var i=t.length,u=0;u<t.length;u++)n(u,t[u])})},o.reject=function(e){return new o(function(t,r){r(e)})},o.race=function(e){return new o(function(t,r){e.forEach(function(e){o.resolve(e).then(t,r)})})},o.prototype.catch=function(e){return this.then(null,e)}},function(e,t,r){"use strict";function n(){s=!1,a._10=null,a._97=null}function o(e){function t(t){(e.allRejections||u(l[t].error,e.whitelist||f))&&(l[t].displayId=c++,e.onUnhandled?(l[t].logged=!0,e.onUnhandled(l[t].displayId,l[t].error)):(l[t].logged=!0,i(l[t].displayId,l[t].error)))}function r(t){l[t].logged&&(e.onHandled?e.onHandled(l[t].displayId,l[t].error):l[t].onUnhandled||(console.warn("Promise Rejection Handled (id: "+l[t].displayId+"):"),console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id '+l[t].displayId+".")))}e=e||{},s&&n(),s=!0;var o=0,c=0,l={};a._10=function(e){2===e._81&&l[e._72]&&(l[e._72].logged?r(e._72):clearTimeout(l[e._72].timeout),delete l[e._72])},a._97=function(e,r){0===e._45&&(e._72=o++,l[e._72]={displayId:null,error:r,timeout:setTimeout(t.bind(null,e._72),u(r,f)?100:2e3),logged:!1})}}function i(e,t){console.warn("Possible Unhandled Promise Rejection (id: "+e+"):");var r=(t&&(t.stack||t))+"";r.split("\n").forEach(function(e){console.warn("  "+e)})}function u(e,t){return t.some(function(t){return e instanceof t})}var a=r(10),f=[ReferenceError,TypeError,RangeError],s=!1;t.disable=n,t.enable=o},function(e,t,r){"use strict";"undefined"==typeof Promise&&(r(30).enable(),window.Promise=r(29)),r(32),Object.assign=r(28)},function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!=typeof e&&(e=String(e)),e}function n(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return v.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function u(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function a(e){var t=new FileReader,r=u(t);return t.readAsArrayBuffer(e),r}function f(e){var t=new FileReader,r=u(t);return t.readAsText(e),r}function s(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}function c(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(v.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(v.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(v.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(v.arrayBuffer&&v.blob&&g(e))this._bodyArrayBuffer=c(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!v.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!_(e))throw new Error("unsupported BodyInit type");
this._bodyArrayBuffer=c(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return f(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(s(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function y(e){var t=e.toUpperCase();return w.indexOf(t)>-1?t:e}function d(e,t){t=t||{};var r=t.body;if(e instanceof d){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=y(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function p(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function h(e){var t=new o;return e.split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t}function b(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var v={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(v.arrayBuffer)var m=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],g=function(e){return e&&DataView.prototype.isPrototypeOf(e)},_=ArrayBuffer.isView||function(e){return e&&m.indexOf(Object.prototype.toString.call(e))>-1};o.prototype.append=function(e,n){e=t(e),n=r(n);var o=this.map[e];this.map[e]=o?o+","+n:n},o.prototype.delete=function(e){delete this.map[t(e)]},o.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,n){this.map[t(e)]=r(n)},o.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),n(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),n(e)},v.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];d.prototype.clone=function(){return new d(this,{body:this._bodyInit})},l.call(d.prototype),l.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},b.error=function(){var e=new b(null,{status:0,statusText:""});return e.type="error",e};var j=[301,302,303,307,308];b.redirect=function(e,t){if(j.indexOf(t)===-1)throw new RangeError("Invalid status code");return new b(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=d,e.Response=b,e.fetch=function(e,t){return new Promise(function(r,n){var o=new d(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:h(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;r(new b(t,e))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&v.blob&&(i.responseType="blob"),o.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send("undefined"==typeof o._bodyInit?null:o._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)}]);
//# sourceMappingURL=main.94943b39.js.map