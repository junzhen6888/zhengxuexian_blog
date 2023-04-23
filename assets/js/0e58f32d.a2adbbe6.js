"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8066],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),f=o,v=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return t?n.createElement(v,i(i({ref:r},c),{},{components:t})):n.createElement(v,i({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},45454:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const a={},i="\u7b2c\u516b\u7ae0 \u670d\u52a1\u53d1\u73b0",l={unversionedId:"prometheus/ServiceDiscovery/README",id:"prometheus/ServiceDiscovery/README",title:"\u7b2c\u516b\u7ae0 \u670d\u52a1\u53d1\u73b0",description:"* \u7b2c\u4e5d\u7ae0 \u670d\u52a1\u53d1\u73b0",source:"@site/wiki/ops/prometheus/08-ServiceDiscovery/README.md",sourceDirName:"prometheus/08-ServiceDiscovery",slug:"/prometheus/ServiceDiscovery/",permalink:"/zhengxuexian_blog/ops/prometheus/ServiceDiscovery/",draft:!1,tags:[],version:"current",lastUpdatedBy:"zhengxuexian",lastUpdatedAt:1662026865,formattedLastUpdatedAt:"2022\u5e749\u67081\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5c0f\u7ed3",permalink:"/zhengxuexian_blog/ops/prometheus/ClusterAndHA/END"},next:{title:"\u57fa\u4e8e\u6587\u4ef6\u7684\u670d\u52a1\u53d1\u73b0",permalink:"/zhengxuexian_blog/ops/prometheus/ServiceDiscovery/8.1-file-sd"}},p={},s=[],c={toc:s};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7b2c\u516b\u7ae0-\u670d\u52a1\u53d1\u73b0"},"\u7b2c\u516b\u7ae0 \u670d\u52a1\u53d1\u73b0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7b2c\u4e5d\u7ae0 \u670d\u52a1\u53d1\u73b0",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/ServiceDiscovery/8.1-file-sd"},"8.1  \u9759\u6001\u6587\u4ef6\u670d\u52a1\u53d1\u73b0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/ServiceDiscovery/8.2-consul-sd"},"8.2  Consul \u670d\u52a1\u53d1\u73b0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/ServiceDiscovery/8.3-consul-kv-backup-restore"},"8.3  Consul key/value \u5907\u4efd\u548c\u8fd8\u539f")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/ServiceDiscovery/8.4-dns-sd"},"8.4  DNS \u670d\u52a1\u53d1\u73b0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/ServiceDiscovery/8.5-kubernetes-sd"},"8.5  Kubernetes \u670d\u52a1\u53d1\u73b0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/ServiceDiscovery/END"},"\u5c0f\u7ed3"))))))}u.isMDXComponent=!0}}]);