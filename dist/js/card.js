!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){t(1),e.exports=t(6)},function(e,n,t){Nova.booting(function(e,n){e.component("nova-current-environment-card",t(2))})},function(e,n,t){var r=t(3)(t(4),t(5),!1,null,null,null);e.exports=r.exports},function(e,n){e.exports=function(e,n,t,r,o,s){var c,a=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(c=e,a=e.default);var u,f="function"==typeof a?a.options:a;if(n&&(f.render=n.render,f.staticRenderFns=n.staticRenderFns,f._compiled=!0),t&&(f.functional=!0),o&&(f._scopeId=o),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},f._ssrRegister=u):r&&(u=r),u){var l=f.functional,d=l?f.render:f.beforeCreate;l?(f._injectStyles=u,f.render=function(e,n){return u.call(n),d(e,n)}):f.beforeCreate=d?[].concat(d,u):[u]}return{esModule:c,exports:a,options:f}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:["card"],data:function(){return{currentEnvName:"..."}},created:function(){var e=this;Nova.request().get("/nova-vendor/nova-current-environment-card/environment").then(function(n){e.currentEnvName=n.data})},mounted:function(){},computed:{envClass:function(){return this.currentEnvName?"env-"+this.currentEnvName.toLowerCase():""}}}},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("card",{staticClass:"flex flex-col relative nova-current-environment-card",class:e.envClass},[t("div",{staticClass:"px-3 py-3"},[t("h3",{staticClass:"text-base text-80 font-bold"},[e._v(e._s(e.__("Current Environment")))]),e._v(" "),t("p",{staticClass:"text-3xl text-center pt-8 capitalize"},[e._v("\n            "+e._s(e.currentEnvName)+"\n        ")])])])},staticRenderFns:[]}},function(e,n){}]);