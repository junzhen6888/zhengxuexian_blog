"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9643],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43598:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={last_update:{author:"\u90d1\u5b66\u8d24"}},l="1.5 \u6570\u636e\u6a21\u578b",i={unversionedId:"prometheus/Basic/1.5-data-model",id:"prometheus/Basic/1.5-data-model",title:"1.5 \u6570\u636e\u6a21\u578b",description:"Prometheus \u5b58\u50a8\u7684\u662f\u65f6\u5e8f\u6570\u636e, \u5373\u6309\u7167\u76f8\u540c\u65f6\u5e8f(\u76f8\u540c\u7684\u540d\u5b57\u548c\u6807\u7b7e)\uff0c\u4ee5\u65f6\u95f4\u7ef4\u5ea6\u5b58\u50a8\u8fde\u7eed\u7684\u6570\u636e\u7684\u96c6\u5408\u3002\u9664\u4e86\u5b58\u50a8\u65f6\u95f4\u5e8f\u5217\u5916\uff0cPrometheus \u8fd8\u53ef\u4ee5\u6839\u636e\u67e5\u8be2\u7ed3\u679c\u751f\u6210\u4e34\u65f6\u7684\u65f6\u95f4\u5e8f\u5217\u3002",source:"@site/wiki/ops/prometheus/01-Basic/1.5-data-model.md",sourceDirName:"prometheus/01-Basic",slug:"/prometheus/Basic/1.5-data-model",permalink:"/zhengxuexian_blog/ops/prometheus/Basic/1.5-data-model",draft:!1,tags:[],version:"current",lastUpdatedBy:"\u90d1\u5b66\u8d24",lastUpdatedAt:1661930328,formattedLastUpdatedAt:"2022\u5e748\u670831\u65e5",frontMatter:{last_update:{author:"\u90d1\u5b66\u8d24"}},sidebar:"tutorialSidebar",previous:{title:"1.4 \u672f\u8bed\u89e3\u91ca",permalink:"/zhengxuexian_blog/ops/prometheus/Basic/1.4-glossary"},next:{title:"1.6 Prometheus \u7684 Metric \u6570\u636e\u7c7b\u578b",permalink:"/zhengxuexian_blog/ops/prometheus/Basic/1.6-metric-types"}},p={},u=[{value:"Metric \u540d\u5b57\u548c\u6807\u7b7e",id:"metric-\u540d\u5b57\u548c\u6807\u7b7e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"15-\u6570\u636e\u6a21\u578b"},"1.5 \u6570\u636e\u6a21\u578b"),(0,a.kt)("p",null,"Prometheus \u5b58\u50a8\u7684\u662f\u65f6\u5e8f\u6570\u636e, \u5373\u6309\u7167\u76f8\u540c\u65f6\u5e8f(\u76f8\u540c\u7684\u540d\u5b57\u548c\u6807\u7b7e)\uff0c\u4ee5\u65f6\u95f4\u7ef4\u5ea6\u5b58\u50a8\u8fde\u7eed\u7684\u6570\u636e\u7684\u96c6\u5408\u3002\u9664\u4e86\u5b58\u50a8\u65f6\u95f4\u5e8f\u5217\u5916\uff0cPrometheus \u8fd8\u53ef\u4ee5\u6839\u636e\u67e5\u8be2\u7ed3\u679c\u751f\u6210\u4e34\u65f6\u7684\u65f6\u95f4\u5e8f\u5217\u3002"),(0,a.kt)("h2",{id:"metric-\u540d\u5b57\u548c\u6807\u7b7e"},"Metric \u540d\u5b57\u548c\u6807\u7b7e"),(0,a.kt)("p",null,"\u65f6\u5e8f(time series) \u662f\u7531\u540d\u5b57(Metric)\uff0c\u4ee5\u53ca\u4e00\u7ec4 key/value \u6807\u7b7e\u5b9a\u4e49\u7684\uff0c\u5177\u6709\u76f8\u540c\u7684\u540d\u5b57\u4ee5\u53ca\u6807\u7b7e\u5c5e\u4e8e\u76f8\u540c\u65f6\u5e8f\u3002"),(0,a.kt)("p",null,"\u65f6\u5e8f\u7684 Metric \u7531 ASCII \u5b57\u7b26\uff0c\u6570\u5b57\uff0c\u4e0b\u5212\u7ebf\uff0c\u4ee5\u53ca\u5192\u53f7\u7ec4\u6210\uff0c\u5b83\u5fc5\u987b\u6ee1\u8db3\u6b63\u5219\u8868\u8fbe\u5f0f ",(0,a.kt)("inlineCode",{parentName:"p"},"[a-zA-Z_:][a-zA-Z0-9_:]*"),", \u5176\u540d\u5b57\u5e94\u8be5\u5177\u6709\u8bed\u4e49\u5316\uff0c\u4e00\u822c\u8868\u793a\u4e00\u4e2a\u53ef\u4ee5\u5ea6\u91cf\u7684\u6307\u6807\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"http_requests_total"),", \u53ef\u4ee5\u8868\u793a http \u8bf7\u6c42\u7684\u603b\u6570\u3002"),(0,a.kt)("p",null,"\u65f6\u5e8f\u7684\u6807\u7b7e\u53ef\u4ee5\u4f7f Prometheus \u7684\u6570\u636e\u66f4\u52a0\u4e30\u5bcc\uff0c\u80fd\u591f\u533a\u5206\u5177\u4f53\u4e0d\u540c\u7684\u5b9e\u4f8b\uff0c\u4f8b\u5982 \u6240\u6709\u7684 HTTP \u8bf7\u6c42\u90fd\u53ef\u4ee5\u4f7f\u7528 POST \u53d1\u9001\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/tracks")," \u3002"),(0,a.kt)("p",null,"\u6807\u7b7e\u540d\u79f0\u7531 ASCII \u5b57\u7b26\uff0c\u6570\u5b57\uff0c\u4ee5\u53ca\u4e0b\u5212\u7ebf\u7ec4\u6210\uff0c \u5fc5\u987b\u7b26\u5408\u8bed\u6cd5 ",(0,a.kt)("inlineCode",{parentName:"p"},"[a-zA-Z_][a-zA-Z0-9_]*")," ,\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"__")," \u5f00\u5934\u5c5e\u4e8e Prometheus \u5185\u90e8\u4fdd\u7559\uff0c\u6807\u7b7e\u7684\u503c\u53ef\u4ee5\u662f\u4efb\u4f55 Unicode \u5b57\u7b26\uff0c\u652f\u6301\u4e2d\u6587\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u5b9e\u9645\u7684\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u5305\u62ec:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a float64 \u7c7b\u578b\u7684\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u6beb\u79d2\u7cbe\u5ea6\u7684\u65f6\u95f4\u6233")),(0,a.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u5ea6\u91cf\u540d\u79f0\u548c\u4e00\u7ec4\u6807\u7b7e\uff0c\u65f6\u95f4\u5e8f\u5217\u901a\u5e38\u4f7f\u7528\u4ee5\u4e0b\u7b26\u53f7\u6807\u8bc6:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<metric name>{<label nameA>=<label valueA>, <label nameB>=<label valueB>,...}\n")),(0,a.kt)("p",null,'\u4f8b\u5982\uff0c\u4e00\u4e2a Metric \u540d\u4e3a api_http_requests_total \u7684\u65f6\u95f4\u5e8f\u5217\u548c\u6807\u7b7e method="POST"\u548c handler="/messages" \u53ef\u4ee5\u8fd9\u6837\u5199:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'api_http_requests_total{method="POST", handler="/messages"}\n')))}c.isMDXComponent=!0}}]);