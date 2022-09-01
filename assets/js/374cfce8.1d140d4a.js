"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7307],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(r),h=a,f=m["".concat(p,".").concat(h)]||m[h]||c[h]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83633:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={last_update:{author:"\u90d1\u5b66\u8d24"}},i="\u7b2c\u4e00\u7ae0 \u8ba4\u8bc6 Prometheus",s={unversionedId:"prometheus/Basic/README",id:"prometheus/Basic/README",title:"\u7b2c\u4e00\u7ae0 \u8ba4\u8bc6 Prometheus",description:"\u7b2c\u4e00\u7ae0\u4e3b\u8981\u8bb2\u89e3 Prometheus \u7684\u57fa\u672c\u6982\u5ff5\uff0c\u4e00\u4e9b\u672f\u8bed\u89e3\u91ca\u7b49\u7b49\u3002",source:"@site/wiki/ops/prometheus/01-Basic/README.md",sourceDirName:"prometheus/01-Basic",slug:"/prometheus/Basic/",permalink:"/zhengxuexian_blog/ops/prometheus/Basic/",draft:!1,tags:[],version:"current",lastUpdatedBy:"\u90d1\u5b66\u8d24",lastUpdatedAt:1661930328,formattedLastUpdatedAt:"2022\u5e748\u670831\u65e5",frontMatter:{last_update:{author:"\u90d1\u5b66\u8d24"}},sidebar:"tutorialSidebar",previous:{title:"prometheus",permalink:"/zhengxuexian_blog/ops/category/prometheus"},next:{title:"1.1 Prometheus \u7b80\u4ecb",permalink:"/zhengxuexian_blog/ops/prometheus/Basic/1.1-prometheus-introduction"}},p={},u=[],l={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7b2c\u4e00\u7ae0-\u8ba4\u8bc6-prometheus"},"\u7b2c\u4e00\u7ae0 \u8ba4\u8bc6 Prometheus"),(0,a.kt)("p",null,"\u7b2c\u4e00\u7ae0\u4e3b\u8981\u8bb2\u89e3 Prometheus \u7684\u57fa\u672c\u6982\u5ff5\uff0c\u4e00\u4e9b\u672f\u8bed\u89e3\u91ca\u7b49\u7b49\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u7ae0 \u8ba4\u8bc6 Prometheus",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/Basic/1.1-prometheus-introduction"},"1.1 Prometheus \u4ecb\u7ecd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/Basic/1.2-prometheus-install"},"1.2 Prometheus \u5b89\u88c5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/Basic/1.3-tsdb-comparison"},"1.3 \u65f6\u5e8f\u6570\u636e\u5e93\u4e3a\u4ec0\u4e48\u9009 Prometheus")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/Basic/1.4-glossary"},"1.4 \u672f\u8bed\u89e3\u91ca")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/Basic/1.5-data-model"},"1.5 \u6570\u636e\u6a21\u578b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/Basic/1.6-metric-types"},"1.6 Metric \u7c7b\u578b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/Basic/1.7-job-and-instances"},"1.7 Job \u548c Instances")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/Basic/END"},"\u5c0f\u7ed3"))))))}c.isMDXComponent=!0}}]);