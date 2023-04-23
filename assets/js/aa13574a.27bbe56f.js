"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1172],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=c(r),v=o,y=m["".concat(l,".").concat(v)]||m[v]||p[v]||a;return r?n.createElement(y,u(u({ref:t},i),{},{components:r})):n.createElement(y,u({ref:t},i))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,u[1]=s;for(var c=2;c<a;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70082:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},u="Consul key/value \u5907\u4efd\u548c\u8fd8\u539f",s={unversionedId:"prometheus/ServiceDiscovery/8.3-consul-kv-backup-restore",id:"prometheus/ServiceDiscovery/8.3-consul-kv-backup-restore",title:"Consul key/value \u5907\u4efd\u548c\u8fd8\u539f",description:"Prometheus \u53ef\u4ee5\u4f7f\u7528 Consul \u7684 key/value \u7684\u6765\u5b58\u50a8\u914d\u7f6e\u6587\u4ef6\uff0c\u5b58\u50a8\u4ee5\u540e\uff0cConsul \u7684 key/value \u7f3a\u7701\u662f\u6ca1\u6709\u7528\u6237\u9a8c\u8bc1\u7684\uff0c\u5f88\u5bb9\u6613\u88ab\u5176\u4ed6\u4eba\u4fee\u6539\uff0c\u5bfc\u81f4\u6570\u636e\u5f02\u5e38\u6216\u8005\u4e22\u5931\u3002",source:"@site/wiki/ops/prometheus/08-ServiceDiscovery/8.3-consul-kv-backup-restore.md",sourceDirName:"prometheus/08-ServiceDiscovery",slug:"/prometheus/ServiceDiscovery/8.3-consul-kv-backup-restore",permalink:"/zhengxuexian_blog/ops/prometheus/ServiceDiscovery/8.3-consul-kv-backup-restore",draft:!1,tags:[],version:"current",lastUpdatedBy:"zhengxuexian",lastUpdatedAt:1662026865,formattedLastUpdatedAt:"2022\u5e749\u67081\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u4e8e Consul \u670d\u52a1\u53d1\u73b0",permalink:"/zhengxuexian_blog/ops/prometheus/ServiceDiscovery/8.2-consul-sd"},next:{title:"\u57fa\u4e8e DNS \u7684\u670d\u52a1\u53d1\u73b0",permalink:"/zhengxuexian_blog/ops/prometheus/ServiceDiscovery/8.4-dns-sd"}},l={},c=[],i={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"consul-keyvalue-\u5907\u4efd\u548c\u8fd8\u539f"},"Consul key/value \u5907\u4efd\u548c\u8fd8\u539f"),(0,o.kt)("p",null,"Prometheus \u53ef\u4ee5\u4f7f\u7528 Consul \u7684 key/value \u7684\u6765\u5b58\u50a8\u914d\u7f6e\u6587\u4ef6\uff0c\u5b58\u50a8\u4ee5\u540e\uff0cConsul \u7684 key/value \u7f3a\u7701\u662f\u6ca1\u6709\u7528\u6237\u9a8c\u8bc1\u7684\uff0c\u5f88\u5bb9\u6613\u88ab\u5176\u4ed6\u4eba\u4fee\u6539\uff0c\u5bfc\u81f4\u6570\u636e\u5f02\u5e38\u6216\u8005\u4e22\u5931\u3002"),(0,o.kt)("p",null,"\u9488\u5bf9\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5907\u4efd\u6765\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u51cf\u8f7b\u8fd9\u4e2a\u95ee\u9898\u5e26\u6765\u7684\u5f71\u54cd\u3002"),(0,o.kt)("p",null,"Consul \u672c\u8eab\u652f\u6301\u5c06 key/value \u91cc\u7684\u5185\u5bb9\u5907\u4efd\u6210 json \u6587\u4ef6\uff0c\u4ee5\u53ca\u5c06\u5907\u4efd\u597d\u7684 json \u6587\u4ef6\u5bfc\u5165\u5230 key/value \u91cc\u3002"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765"),(0,o.kt)("p",null,"\u5bfc\u51fa\n",(0,o.kt)("a",{parentName:"p",href:"https://www.consul.io/commands/kv/export"},"https://www.consul.io/commands/kv/export")),(0,o.kt)("p",null,"\u5bfc\u5165"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.consul.io/commands/kv/import"},"https://www.consul.io/commands/kv/import")))}p.isMDXComponent=!0}}]);