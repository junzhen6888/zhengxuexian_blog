"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7481],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),h=a,d=c["".concat(u,".").concat(h)]||c[h]||m[h]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},55247:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i="\u7b2c\u4e03\u7ae0 \u96c6\u7fa4\u4e0e\u9ad8\u53ef\u7528",l={unversionedId:"prometheus/ClusterAndHA/README",id:"prometheus/ClusterAndHA/README",title:"\u7b2c\u4e03\u7ae0 \u96c6\u7fa4\u4e0e\u9ad8\u53ef\u7528",description:"* \u7b2c\u516b\u7ae0 \u96c6\u7fa4\u4e0e\u9ad8\u53ef\u7528",source:"@site/wiki/ops/prometheus/07-ClusterAndHA/README.md",sourceDirName:"prometheus/07-ClusterAndHA",slug:"/prometheus/ClusterAndHA/",permalink:"/zhengxuexian_blog/ops/prometheus/ClusterAndHA/",draft:!1,tags:[],version:"current",lastUpdatedBy:"zhengxuexian",lastUpdatedAt:1662026865,formattedLastUpdatedAt:"2022\u5e749\u67081\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"K8S \u4e2d\u7684 Grafana \u6570\u636e\u6301\u4e45\u5316",permalink:"/zhengxuexian_blog/ops/prometheus/Instrumenting/grafana-kubernetes-config-persistence"},next:{title:"MinIO \u642d\u5efa",permalink:"/zhengxuexian_blog/ops/prometheus/ClusterAndHA/7.1-minio-introduction"}},u={},s=[],p={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7b2c\u4e03\u7ae0-\u96c6\u7fa4\u4e0e\u9ad8\u53ef\u7528"},"\u7b2c\u4e03\u7ae0 \u96c6\u7fa4\u4e0e\u9ad8\u53ef\u7528"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u516b\u7ae0 \u96c6\u7fa4\u4e0e\u9ad8\u53ef\u7528",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/ClusterAndHA/7.1-minio-introduction"},"7.1 MinIO \u642d\u5efa")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/ClusterAndHA/7.2-minio-cluster"},"7.2 MinIO \u5206\u5e03\u5f0f\u96c6\u7fa4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/ClusterAndHA/7.3-minio-parameter-and-limit"},"7.3 MinIO \u53c2\u6570\u548c\u9650\u5236")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/ClusterAndHA/7.4-minio-benchmark"},"7.4 MniIO \u6027\u80fd\u5bf9\u6bd4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/ClusterAndHA/7.5-minio-mc-tool"},"7.5 MniIO \u5ba2\u6237\u7aef\u5de5\u5177 mc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/ClusterAndHA/7.6-thanos-introduction"},"7.6 Thanos \u662f\u4ec0\u4e48")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/ClusterAndHA/7.7-thanos-query"},"7.7 Thanos query")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/ClusterAndHA/7.8-thanos-sidecar"},"7.8 Thanos sidecar")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/ClusterAndHA/7.9-thanos-store"},"7.9 Thanos store")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/ClusterAndHA/7.10-thanos-compactor"},"7.10 Thanos Compactor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/ClusterAndHA/7.11-thanos-rule"},"7.11 Thanos rule")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/ClusterAndHA/7.12-thanos-history-query"},"7.12 Thanos \u5386\u53f2\u6570\u636e\u67e5\u8be2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/ClusterAndHA/7.13-cortex-introduction"},"7.13 Cortex  \u662f\u4ec0\u4e48")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/ClusterAndHA/7.14-kvass-introduction"},"7.14 Kvass  \u662f\u4ec0\u4e48")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zhengxuexian_blog/ops/prometheus/ClusterAndHA/END"},"\u5c0f\u7ed3"))))))}m.isMDXComponent=!0}}]);