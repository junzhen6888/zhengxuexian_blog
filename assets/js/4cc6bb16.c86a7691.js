"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8243],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(k,u(u({ref:t},p),{},{components:r})):n.createElement(k,u({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67505:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},u="Azure \u76d1\u63a7",l={unversionedId:"prometheus/CCSP/10.5-azure-metrics",id:"prometheus/CCSP/10.5-azure-metrics",title:"Azure \u76d1\u63a7",description:"\u672c\u6587\u7684 Azure \u76d1\u63a7\u4e3b\u8981\u63cf\u8ff0 Azure \u4e2d\u56fd\u7684\u76d1\u63a7\u65b9\u5f0f\uff0c\u5176\u4ed6\u56fd\u5bb6\u7684 Azure \u6216\u8005 Azure \u5168\u7403\u53ef\u4ee5\u53c2\u8003\uff0c\u5e76\u4e14\u67e5\u8be2\u5b98\u65b9\u6587\u6863\u8fdb\u884c\u76f8\u5e94\u7684\u914d\u7f6e\u66f4\u6539\u3002",source:"@site/wiki/ops/prometheus/10-CCSP/10.5-azure-metrics.md",sourceDirName:"prometheus/10-CCSP",slug:"/prometheus/CCSP/10.5-azure-metrics",permalink:"/zhengxuexian_blog/ops/prometheus/CCSP/10.5-azure-metrics",draft:!1,tags:[],version:"current",lastUpdatedBy:"zhengxuexian",lastUpdatedAt:1661407442,formattedLastUpdatedAt:"2022\u5e748\u670825\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u817e\u8baf\u4e91",permalink:"/zhengxuexian_blog/ops/prometheus/CCSP/10.4-tencentcloud-metrics"},next:{title:"",permalink:"/zhengxuexian_blog/ops/prometheus/CCSP/10.6-aws-cloudwatch-2"}},i={},s=[{value:"\u5e94\u7528\u6ce8\u518c",id:"\u5e94\u7528\u6ce8\u518c",level:2},{value:"\u6388\u6743",id:"\u6388\u6743",level:2}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"azure-\u76d1\u63a7"},"Azure \u76d1\u63a7"),(0,a.kt)("p",null,"\u672c\u6587\u7684 Azure \u76d1\u63a7\u4e3b\u8981\u63cf\u8ff0 Azure \u4e2d\u56fd\u7684\u76d1\u63a7\u65b9\u5f0f\uff0c\u5176\u4ed6\u56fd\u5bb6\u7684 Azure \u6216\u8005 Azure \u5168\u7403\u53ef\u4ee5\u53c2\u8003\uff0c\u5e76\u4e14\u67e5\u8be2\u5b98\u65b9\u6587\u6863\u8fdb\u884c\u76f8\u5e94\u7684\u914d\u7f6e\u66f4\u6539\u3002"),(0,a.kt)("p",null,"\u91c7\u96c6\u7ec4\u4ef6\u91c7\u7528 RobustPerception \u7684 azure_metrics_exporter \uff0c\u8fd9\u4e2a Exporter \u4e5f\u5728\u6301\u7eed\u7ef4\u62a4\u4e2d\uff0c\u7ef4\u62a4\u8005\u662f Prometheus \u7684\u4f5c\u8005 Brian Brazil \uff0c\u4e5f\u7b97\u662f\u67d0\u79cd\u610f\u4e49\u4e0a\u7684\u5b98\u65b9\uff0c\u6bd4\u8f83\u9760\u8c31\u3002\u552f\u4e00\u7684\u95ee\u9898\u662f\u5df2\u7ecf\u6709 1 \u5e74\u6ca1\u6709\u66f4\u65b0\u3002GitHub \u5730\u5740\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/RobustPerception/azure_metrics_exporter"},"https://github.com/RobustPerception/azure_metrics_exporter")),(0,a.kt)("p",null,"\u4f7f\u7528 Azure metrics exporter \u6765\u76d1\u63a7 Azure \u9700\u8981\u51c6\u5907\u5982\u4e0b\u6b65\u9aa4\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u5f00\u901a Azure Monitor "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"Azure \u4e2d\u6ce8\u518c\u5e94\u7528"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:3},(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e Azure metrics exporter"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:4},(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e Prometheus "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:5},(0,a.kt)("li",{parentName:"ol"},"Grafana \u753b\u56fe")))),(0,a.kt)("h1",{id:"\u5f00\u901a-azure-monitor"},"\u5f00\u901a Azure Monitor"),(0,a.kt)("p",null,"\u8981\u76d1\u63a7 Azure \u7684\u4e91\u670d\u52a1\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u9700\u8981\u501f\u52a9\u81ea\u8eab\u7684\u4e91\u670d\u52a1 Azure Monitor \uff0c\nAzure Monitor \u662f Azure \u4e2d\u7684\u4e00\u9879\u5b8c\u6574\u7684\u76d1\u89c6\u670d\u52a1\uff0c\u63d0\u4f9b\u4e86\u4e00\u6574\u5957\u7528\u4e8e\u76d1\u89c6 Azure \u8d44\u6e90\u4ee5\u53ca\u5176\u4ed6\u4e91\u548c\u672c\u5730\u8d44\u6e90\u7684\u529f\u80fd\u3002\u6240\u4ee5\u4e3a\u4e86\u76d1\u63a7\u4e0a\u8fb9\u7684\u8fd0\u884c\u7684\u670d\u52a1\u8d44\u6e90\uff0c\u6211\u4eec\u9700\u8981\u6253\u5f00 Azure Monitor \u670d\u52a1\u3002\u8be6\u7ec6\u7684\u5f00\u901a\u6b65\u9aa4\u53ef\u4ee5\u53c2\u8003\u5b98\u7f51\uff0c\u8fd9\u91cc\u5c31\u4e0d\u8fc7\u591a\u7684\u63cf\u8ff0\u4e86\u3002"),(0,a.kt)("h1",{id:"azure-\u4e2d\u6ce8\u518c\u5e94\u7528"},"Azure \u4e2d\u6ce8\u518c\u5e94\u7528"),(0,a.kt)("p",null,"Azure Monitor \u6253\u5f00\u4ee5\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 Azure Monitor \u4e2d\u770b\u5230\u5404\u4e2a\u8d44\u6e90\u7684\u76d1\u63a7\u6307\u6807\uff0c\u4f46\u662f\u6bcf\u6b21\u90fd\u53ea\u80fd\u5728\u63a7\u5236\u53f0\u4e0a\u67e5\u770b\uff0c\u6211\u4eec\u9700\u8981\u628a\u76d1\u63a7\u6570\u636e\u4fdd\u5b58\u5230\u6211\u4eec\u7684 Prometheus \u4e2d\uff0c\u5728\u7edf\u4e00\u7684\u76d1\u63a7\u7cfb\u7edf\u91cc\u67e5\u770b\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u9700\u8981\u5728 Azure \u95e8\u6237\u4e2d\u6ce8\u518c\u4e00\u4e2a\u5e94\u7528\uff0c\u4ee5\u4fbf Microsoft \u6807\u8bc6\u5e73\u53f0\u53ef\u4e3a\u8be5\u5e94\u7528\u7a0b\u5e8f\u53ca\u5176\u7528\u6237\u63d0\u4f9b\u8eab\u4efd\u9a8c\u8bc1\u548c\u6388\u6743\u670d\u52a1\u3002"),(0,a.kt)("p",null,"\u6ce8\u518c\u5e94\u7528\u7a0b\u5e8f\u4f1a\u5728\u5e94\u7528\u4e0e Microsoft \u6807\u8bc6\u5e73\u53f0\u4e4b\u95f4\u5efa\u7acb\u4fe1\u4efb\u5173\u7cfb\u3002 \u4fe1\u4efb\u662f\u5355\u5411\u7684\uff1a\u5e94\u7528\u4fe1\u4efb Microsoft \u6807\u8bc6\u5e73\u53f0\uff0c\u4f46\u6807\u8bc6\u5e73\u53f0\u5e76\u4e0d\u4fe1\u4efb\u5e94\u7528\u3002"),(0,a.kt)("p",null,"Azure \u91cc\u8fdb\u884c\u6ce8\u518c\u4e00\u4e2a\u76d1\u63a7\u53ef\u4ee5\u7684\u5e94\u7528\u4e3b\u8981\u662f 2 \u90e8\u5206\uff0c\u5e94\u7528\u6ce8\u518c\u548c\u6388\u6743\u3002"),(0,a.kt)("h2",{id:"\u5e94\u7528\u6ce8\u518c"},"\u5e94\u7528\u6ce8\u518c"),(0,a.kt)("p",null,"\u767b\u9646 Azure \u95e8\u6237\uff0c\u8fdb\u5165\u63a7\u5236\u53f0\uff0c\u5982\u679c\u53ef\u4ee5\u770b\u5230\u591a\u4e2a\u8d26\u53f7\uff0c\u90a3\u4e48\u9009\u62e9\u8981\u6ce8\u518c\u5e94\u7528\u7684\u8d26\u53f7\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u5728\u63a7\u5236\u53f0\u9875\u9762\u5bfb\u627e Azure \u6d3b\u52a8\u76ee\u5f55\uff08Azure Active Directory\uff09\uff0c\u6253\u5f00\u8fdb\u5165\u3002"),(0,a.kt)("p",null,"\u5728\u53f3\u4fa7\u7ba1\u7406\u680f\u4e0b\u6709\u4e00\u4e2a\u5e94\u7528\u6ce8\u518c\uff08App registrations\uff09\u7684\u83dc\u5355\uff0c\u70b9\u51fb\u6253\u5f00\u3002"),(0,a.kt)("p",null,"\u5728\u9875\u9762\u7684\u4e0a\u65b9\u6709\u4e00\u4e2a\u6ce8\u518c\u65b0\u5e94\u7528\uff08New application registration\uff09\u7684\u6309\u94ae\uff0c\u70b9\u51fb\u6309\u94ae\u8fdb\u884c\u5e94\u7528\u521b\u5efa\u3002"),(0,a.kt)("p",null,"\u521b\u5efa\u8fc7\u7a0b\u4e2d\u9700\u8981\u8f93\u5165\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)("p",null,"\u540d\u79f0\uff08Name\uff09\uff1a\u5e94\u7528\u7684\u7528\u6237\u4f1a\u770b\u5230\u8fd9\u4e2a\u540d\u5b57\uff0c\u540e\u671f\u53ef\u4ee5\u4fee\u6539\u3002\n\u652f\u6301\u7684\u8d26\u6237\u7c7b\u578b\uff08Supported account types\uff09\uff1a\u652f\u6301\u4e24\u79cd\u8d26\u6237\u7c7b\u578b\uff0c\u5206\u522b\u662f\u5f53\u524d\u8d26\u6237\u548c\u5168\u5c40\u8d26\u53f7\uff0c\u9009\u62e9\u5f53\u524d\u5e94\u7528\u53ea\u80fd\u5728\u8fd9\u4e2a\u8d26\u6237\u4e2d\u770b\u5230\uff0c\u9009\u62e9\u5168\u5c40\u8d26\u53f7\u4efb\u610f\u8d26\u53f7\u90fd\u80fd\u770b\u5230\u8fd9\u4e2a\u5e94\u7528\u3002\u3010PS\uff1a\u5b98\u65b9\u6587\u6863\u4e0d\u8fd9\u4e48\u8bf4\uff0c\u4f46\u662f\u662f\u8fd9\u4e2a\u610f\u601d\u3011\n\u91cd\u5b9a\u5411 URI\uff08Redirect URI\uff09\uff1a\u8fd9\u4e2a\u9009\u9879\u662f\u53ef\u9009\u7684\uff0c\u6211\u4eec\u8fd9\u91cc\u4e0d\u586b\uff0c\u4e0d\u586b\u4e0d\u4f1a\u5f71\u54cd\u540e\u7eed\u7684\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u586b\u5199\u597d\u4ee5\u540e\u70b9\u51fb\u6ce8\u518c\uff08Register\uff09\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u6ce8\u518c\u5b8c\u6210\u540e\uff0cAzure \u63a7\u5236\u53f0\u9875\u9762\u4f1a\u663e\u793a\u5e94\u7528\u6ce8\u518c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u603b\u89c8")," \u9875\u9762\u3002 \u5728\u8fd9\u4e2a\u9875\u9762\u53ef\u4ee5\u770b\u5230\u5e94\u7528\u7a0b\u5e8fID \uff08Application ID / client ID\uff09\uff0c\u4e5f\u88ab\u79f0\u4e3a\u5ba2\u6237\u7aef ID\uff0c\u5b83\u53ef\u552f\u4e00\u5730\u6807\u8bc6 Microsoft \u6807\u8bc6\u5e73\u53f0\u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,a.kt)("p",null,"\u53e6\u5916\u8fd9\u4e2a\u9875\u9762\u8fd8\u53ef\u4ee5\u770b\u5230 Directory ID \u6216\u8005 tenant ID \uff0c\u8fd9\u4e24\u4e2a ID \u5148\u8bb0\u4e0b\u6765\uff0c\u540e\u8fb9\u4f1a\u7528\u5230\uff0c\u5fd8\u8bb0\u4e86\u4e5f\u53ef\u4ee5\u5230\u8fd9\u4e2a\u9875\u9762\u6765\u67e5\u770b\u3002"),(0,a.kt)("p",null,"\u5e94\u7528\u521b\u5efa\u597d\u4ee5\u540e\uff0c\u6211\u4eec\u9700\u8981\u4e3a\u8fd9\u4e2a\u5e94\u7528\u521b\u5efa\u4e00\u4e2a\u5bc6\u7801\uff0c\u6216\u8005\u53eb\u51ed\u8bc1\u3002"),(0,a.kt)("p",null,"\u70b9\u51fb\u5e94\u7528\u9875\u9762\u53f3\u4fa7\u7684 \u51ed\u8bc1\u548c\u79d8\u94a5\uff08Certificates & secrets\uff09\uff0c\u8fd9\u91cc\u8fd9\u6837\u521b\u5efa\u79d8\u94a5\uff08\u8bc1\u4e66\uff09\u65b9\u5f0f\u7684\uff0c\u4e5f\u53ef\u4ee5\u521b\u5efa\u5bc6\u7801\u65b9\u5f0f\u7684\uff0c\u6211\u4eec\u8fd9\u91cc\u9009\u62e9\u521b\u5efa\u5bc6\u7801\uff0c\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"New client secret")," \uff0c\u586b\u5199\u8fd9\u4e2a\u79d8\u94a5\u7684\u63cf\u8ff0\uff0c\u7136\u540e\u9009\u62e9\u8fc7\u671f\u65f6\u95f4\uff0c\u8fc7\u671f\u65f6\u95f4\u53ef\u4ee5\u662f 1 \u5e74\u30012 \u5e74\u6216\u8005\u6c38\u4e0d\u8fc7\u671f\uff0c\u7136\u540e\u70b9\u51fb \u6dfb\u52a0 \uff08add\uff09 \u5c31\u597d\u3002\u6c38\u4e0d\u8fc7\u671f\u5e76\u4e0d\u662f\u771f\u7684\u6c38\u8fdc\u4e0d\u4f1a\u8fc7\u671f\uff0c\u800c\u4e14\u662f\u8fc7\u671f\u65f6\u95f4\u88ab\u8bbe\u7f6e\u5728\u4e86\u5927\u7ea6 300 \u5e74\u4ee5\u540e\uff0c\u6211\u8fd9\u91cc\u770b\u5230\u7684\u662f 2299.12.31 \u3002"),(0,a.kt)("p",null,"\u6210\u529f\u4ee5\u540e\u4f1a\u770b\u5230\u8fd9\u4e2a\u63cf\u8ff0\u7684\u540e\u8fb9\u6709\u51e0\u4e2a\u503c\uff0c\u5206\u522b\u662f Expires \u3001Value \u3001ID \uff0c\u5c06\u5176\u4e2d\u7684 Value \u8bb0\u5f55\u4e0b\u6765\uff0c\u5207\u8bb0\u5207\u8bb0\uff0c\u4e00\u5b9a\u8981\u8bb0\u5f55\u597d\u4e86\u3002\u8fd9\u4e2a Value \u5c31\u662f\u6211\u4eec\u521b\u5efa\u7684\u5bc6\u7801\uff0c\u8fd9\u4e2a Value \u7684\u663e\u793a\u65f6\u95f4\u6bd4\u8f83\u77ed\uff0c\u51e0\u5206\u949f\u7684\u6837\u5b50\uff0c\u5982\u679c\u6ca1\u6709\u8bb0\u5f55\u4e0b\u6765\uff0c\u4ee5\u540e\u5c31\u770b\u4e0d\u5230\u4e86\uff0c\u53ea\u80fd\u5220\u4e86\u91cd\u65b0\u521b\u5efa\u4e00\u4e2a\u5bc6\u7801\u3002"),(0,a.kt)("p",null,"\u8fd9\u6837\u6211\u4eec\u5c31\u6536\u96c6\u5230\u4e86\u540e\u8fb9\u8981\u914d\u7f6e\u9700\u8981\u7684 4 \u4e2a\u53c2\u6570\u4e2d\u7684 3 \u4e2a\u3002"),(0,a.kt)("p",null,"client_id\nclient_secret\ntenant_id "),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u5c31\u9700\u8981\u6388\u6743\u4e86\u3002"),(0,a.kt)("h2",{id:"\u6388\u6743"},"\u6388\u6743"),(0,a.kt)("p",null,"\u4e0a\u8fb9\u521b\u5efa\u597d\u5e94\u7528\u4ee5\u540e\uff0c\u6211\u4eec\u83b7\u5f97\u4e86\u9700\u8981\u7684 ID\uff0c\u4f46\u662f\u8fd9\u4e2a\u5e94\u7528\u73b0\u5728\u662f\u6ca1\u6709\u6743\u9650\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5bf9\u8fd9\u4e2a\u5e94\u7528\u8fdb\u884c\u6388\u6743\uff0c\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"\u9996\u5148\u767b\u9646\u8ba2\u9605\u670d\u52a1\u7684\u63a7\u5236\u53f0\uff0c\u5728\u8ba2\u9605\u9875\u9762\u7684\u5de6\u4fa7\uff0c\u6709\u4e00\u4e2a\u8bbf\u95ee\u63a7\u5236\uff08Access control (IAM)\uff09\uff0c\u70b9\u51fb\u8fd9\u4e2a\u83dc\u5355\u3002"),(0,a.kt)("p",null,"\u5728\u6253\u5f00\u7684\u9875\u9762\u67e5\u627e \u89d2\u8272\u7ba1\u7406 \uff08Role assignment\uff09\uff0c\u70b9\u51fb\u65b0\u5efa\uff0c\u5728\u65b0\u5efa\u91cc\u9009\u62e9\u6dfb\u52a0\u89d2\u8272 \uff08Add role assignment\uff09\u3002"),(0,a.kt)("p",null,"\u5728\u6dfb\u52a0\u89d2\u8272\u9875\u9762\u8fdb\u884c\u6388\u6743\uff0c\u5728\u8fd9\u4e2a\u5c0f\u9875\u9762\u91cc\uff0cRole \u4e00\u680f\u9009 \u201cMonitoring Reader\u201d\uff0c\u5728\u641c\u7d22\u680f\u91cc\u641c\u7d22\u627e\u5230\u4e0a\u8fb9\u521b\u5efa\u7684\u5e94\u7528\uff0c\u5e76\u4e14\u9009\u4e2d\u3002\u5176\u4ed6\u9879\u4fdd\u6301\u9ed8\u8ba4\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u70b9\u51fb\u4fdd\u5b58\uff0c\u6388\u6743\u5c31\u5b8c\u6210\u4e86\u3002"),(0,a.kt)("p",null,"\u8bb0\u5f55\u4e0b\u8fd9\u4e2a\u8ba2\u9605\u7684 subscription_id \uff0c\u6211\u4eec\u9700\u8981\u7684\u914d\u7f6e\u53c2\u6570\u5c31\u6536\u96c6\u5168\u4e86\u3002"),(0,a.kt)("h1",{id:"\u914d\u7f6e-azure-metrics-exporter"},"\u914d\u7f6e Azure metrics exporter"),(0,a.kt)("p",null,"\u5b98\u65b9\u6ca1\u6709\u63d0\u4f9b\u7f16\u8bd1\u597d\u7684\u4e8c\u8fdb\u5236\u6267\u884c\u6587\u4ef6\uff0c\u53ef\u4ee5\u81ea\u884c\u7f16\u8bd1\uff0c\u6216\u8005\u4ece docker images \u91cc\u62f7\u8d1d\u4e00\u4e2a\u51fa\u6765\u3002"),(0,a.kt)("p",null,"\u4e0b\u8f7d docker images , images ID  \u662f 71b159cb4cb3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker pull robustperception/azure_metrics_exporter:latest              \n")),(0,a.kt)("p",null,"\u51c6\u5907\u597d\u955c\u50cf\u6587\u4ef6\u4ee5\u540e\u5c31\u53ef\u4ee5\u51c6\u5907\u914d\u7f6e\u6587\u4ef6\u4e86\uff0c\u914d\u7f6e\u6587\u4ef6\u91c7\u7528 Yaml \u683c\u5f0f\u8fdb\u884c\u63cf\u8ff0\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a\u7f3a\u7701\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"azure_metrics_exporter \u7f3a\u7701\u7684\u914d\u7f6e\u6587\u4ef6\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'active_directory_authority_url: "https://login.microsoftonline.com/"\nresource_manager_url: "https://management.azure.com/"\ncredentials:\n  subscription_id: <secret>\n  client_id: <secret>\n  client_secret: <secret>\n  tenant_id: <secret>\n\ntargets:\n  - resource: "azure_resource_id"\n    metrics:\n    - name: "BytesReceived"\n    - name: "BytesSent"\n  - resource: "azure_resource_id"\n    aggregations:\n    - Minimum\n    - Maximum\n    - Average\n    metrics:\n    - name: "Http2xx"\n    - name: "Http5xx"\n  - resource: "azure_resource_id"\n    metric_namespace: "Azure.VM.Windows.GuestMetrics"\n    metrics:\n    - name: \'Process\\Thread Count\'\n\nresource_groups:\n  - resource_group: "webapps"\n    resource_types:\n    - "Microsoft.Compute/virtualMachines"\n    resource_name_include_re:\n    - "testvm.*"\n    resource_name_exclude_re:\n    - "testvm12"\n    metrics:\n    - name: "CPU Credits Consumed"\n\nresource_tags:\n  - resource_tag_name: "group"\n    resource_tag_value: "tomonitor"\n    resource_types:\n      - "Microsoft.Compute/virtualMachines"\n    metrics:\n      - name: "CPU Credits Consumed"\n')),(0,a.kt)("p",null,"\u5b98\u65b9\u5bf9\u914d\u7f6e\u6587\u4ef6\u7684\u63cf\u8ff0\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"azure_resource_id and subscription_id can be found under properties in the Azure portal for your application/service.\n\nazure_resource_id should start with /resourceGroups... (/subscriptions/xxxxxxxx-xxxx-xxxx-xxx-xxxxxxxxx must be removed from the begining of azure_resource_id property value)\n\ntenant_id is found under Azure Active Directory > Properties and is listed as Directory ID.\n\nThe client_id and client_secret are obtained by registering an application under 'Azure Active Directory'.\n\nclient_id is the application_id of your application and the client_secret is generated by selecting your application/service under Azure Active Directory, selecting 'keys', and generating a new key.\n\nIf you want to scrape metrics from Azure national clouds (e.g. AzureChinaCloud, AzureGermanCloud), you should provide active_directory_authority_url and resource_manager_url parameters. active_directory_authority_url is AzureAD url for getting access token. resource_manager_url is Azure API management url. If you won't provide active_directory_authority_url and resource_manager_url parameters, azure-metrics-exporter scrapes metrics from global cloud. \n")),(0,a.kt)("p",null,"\u5176\u4e2d\u914d\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"active_directory_authority_url")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"resource_manager_url")," \u7f3a\u7701\u914d\u7f6e\u7684\u662f Azure \u5168\u7403\u7684\u5730\u5740\uff0c\u4f7f\u7528\u5176\u4ed6\u56fd\u5bb6\u533a\u57df\u7684\u5efa\u8bae\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://www.azurespeed.com/Information/AzureEnvironments"},"Azure Environments")," \u67e5\u627e\u5bf9\u5e94\u7684\u73af\u5883\u6765\u8fdb\u884c\u914d\u7f6e\uff0c\u8fd9\u6837\u53ef\u80fd\u4f1a\u5feb\u4e00\u4e9b\uff0c\u4e2d\u56fd\u533a\u5efa\u8bae\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"AzureChinaCloud")," \u91cc\u7684 URL\u3002"),(0,a.kt)("p",null,"subscription_id\u3001client_id\u3001client_secret\u3001tenant_id \u8fd9 4 \u4e2a\u53c2\u6570\u5728\u4e0a\u8fb9\u5df2\u7ecf\u6536\u96c6\u597d\u4e86\uff0c\u586b\u5165\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u5fae\u8f6f\u914d\u7f6e\u76d1\u63a7\n",(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/sickles/article/details/81156659"},"https://blog.csdn.net/sickles/article/details/81156659")),(0,a.kt)("p",null,"\u5bf9\u8c61\u5b58\u50a8\u76d1\u63a7\u6307\u6807\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.azure.cn/zh-cn/storage/common/monitor-storage-reference#metrics-dimensions"},"https://docs.azure.cn/zh-cn/storage/common/monitor-storage-reference#metrics-dimensions")),(0,a.kt)("p",null,"\u5168\u90e8\u6307\u6807\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.azure.cn/zh-cn/azure-monitor/essentials/metrics-supported"},"https://docs.azure.cn/zh-cn/azure-monitor/essentials/metrics-supported")),(0,a.kt)("p",null,"\u8d44\u6e90\u7c7b\u578b\u5217\u8868 "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.azure.cn/zh-cn/azure-resource-manager/management/azure-services-resource-providers"},"https://docs.azure.cn/zh-cn/azure-resource-manager/management/azure-services-resource-providers")),(0,a.kt)("p",null,"\u65e0\u6cd5\u76d1\u63a7\u5230\u6240\u6709\u6307\u6807\uff0c\u8be6\u89c1\u95ee\u9898 1 \u3002"),(0,a.kt)("h1",{id:"\u914d\u7f6e-prometheus"},"\u914d\u7f6e Prometheus"),(0,a.kt)("p",null,"Azure metric exporter \u914d\u7f6e\u597d\u4ee5\u540e\u662f\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u6765\u67e5\u770b\u91c7\u96c6\u5230\u7684\u6570\u636e\u7684\u3002\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u9700\u8981\u914d\u7f6e Prometheus \uff0c\u8ba9\u76d1\u63a7\u6570\u636e\u5b58\u50a8\u8d77\u6765\uff0c\u65b9\u4fbf\u67e5\u8be2\u548c\u544a\u8b66\u3002"),(0,a.kt)("p",null,"\u5728 Prometheus \u4e2d\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff0c\u6dfb\u52a0\u597d\u4ee5\u540e\u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\u6216\u8005\u91cd\u542f Prometheus \u670d\u52a1\u4f7f\u5f97\u914d\u7f6e\u751f\u6548\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  - job_name: azure-metrics\n    scrape_interval: 60s\n    scrape_timeout: 60s\n    static_configs:\n      - targets: \n          - 192.168.1.1:9109\n")),(0,a.kt)("p",null,"\u914d\u7f6e\u4e2d\u914d\u7f6e\u4e86 Prometheus \u6bcf\u9694 60 \u79d2\u4f1a\u4ece Exporter \u83b7\u53d6\u4e00\u6b21\u6570\u636e\u5b58\u50a8\u5230 TSDB\uff0c\u8d85\u65f6\u65f6\u95f4\u4e3a 60 \u79d2\u3002Azure API \u5bf9\u4e8e\u76d1\u63a7\u6709\u4e00\u4e2a\u62c9\u53d6\u6570\u636e\u9891\u7387\u7684\u9650\u5236\uff0c\u9ed8\u8ba4\u662f\u6bcf\u5c0f\u65f6 12000 \u6b21\u8bf7\u6c42\uff0c\u8d85\u8fc7\u8fd9\u4e2a\u9650\u5236\u4ee5\u540e\u4f1a\u88ab\u9650\u5236\uff0c\u5728\u914d\u7f6e\u7684\u65f6\u5019\u9700\u8981\u8ba1\u7b97\u6240\u6709\u7684\u8bf7\u6c42\u662f\u5426\u4f1a\u8d85\u51fa\u9650\u5236\u3002"),(0,a.kt)("p",null,"\u6253\u5f00 Prometheus \u7684 Graph \u9875\u9762\uff0c\u8f93\u5165\u8981\u91c7\u96c6\u7684 Metric \uff0c\u4e00\u5207\u6b63\u5e38\u7684\u8bdd\uff0c\u662f\u53ef\u4ee5\u770b\u5230\u8981\u91c7\u96c6\u7684\u6307\u6807\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/request-limits-and-throttling"},"API \u8bfb\u8bf7\u6c42\u6bcf\u5c0f\u65f6\u9650\u5236 12000 \u6b21")),(0,a.kt)("h1",{id:"grafana-\u753b\u56fe"},"Grafana \u753b\u56fe"),(0,a.kt)("p",null,"\u5728 Prometheus \u4e2d\u914d\u7f6e\u597d\u91c7\u96c6\u4ee5\u540e\uff0c\u867d\u7136\u5728 Prometheus Graph \u9875\u9762\u53ef\u4ee5\u770b\u5230\u91c7\u96c6\u7684\u6307\u6807\uff0c\u4f46\u662f\u5e76\u4e0d\u80fd\u957f\u4e45\u5b58\u50a8\uff0c\u6211\u4eec\u8fd8\u662f\u5728 Grafana \u4e2d\u8fdb\u884c\u753b\u56fe\u3002"),(0,a.kt)("p",null,"Grafana \u642d\u5efa\u548c Prometheus \u6570\u636e\u6e90\u7684\u914d\u7f6e\u5c31\u4e0d\u5728\u8fd9\u91cc\u8bb2\u89e3\u4e86\uff0c\u6211\u4eec\u8bb2\u63a5\u4e0b\u6765\u7684\u753b\u56fe\u90e8\u5206\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u753b\u56fe\uff0c\u6211\u4eec\u9700\u8981\u9996\u5148\u628a\u8981\u91c7\u96c6\u7684\u6307\u6807\u5217\u5230\u4e00\u4e2a\u8868\u91cc\uff0c\u5e76\u4e14\u628a\u5404\u4e2a\u6307\u6807\u7684\u6570\u636e\u7c7b\u578b\u4e5f\u5907\u6ce8\u4e0a\uff0c\u5bf9\u4e8e Azure \u7684\u76d1\u63a7\uff0c\u6211\u4eec\u4f7f\u7528\u4e0b\u9762\u7684\u8868\u683c\u6765\u8fdb\u884c\u68b3\u7406\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Metric \u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5355\u4f4d"),(0,a.kt)("th",{parentName:"tr",align:null},"Aggregation Type"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"availability_percent_average"),(0,a.kt)("td",{parentName:"tr",align:null},"gauge"),(0,a.kt)("td",{parentName:"tr",align:null},"Percent"),(0,a.kt)("td",{parentName:"tr",align:null},"Average"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u6027")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"egress_bytes_total"),(0,a.kt)("td",{parentName:"tr",align:null},"gauge"),(0,a.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,a.kt)("td",{parentName:"tr",align:null},"Total"),(0,a.kt)("td",{parentName:"tr",align:null},"\u51fa\u6d41\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"..."),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,"\u68b3\u7406\u597d\u4ee5\u540e\u9009\u62e9\u5408\u9002\u7684 Panel \u7c7b\u578b\u5c06\u6570\u636e\u753b\u51fa\u6765\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u89c9\u5f97\u81ea\u5df1\u753b\u56fe\u6bd4\u8f83\u9ebb\u70e6\uff0c\u4e5f\u53ef\u4ee5\u5230 Grafana Dashboards \u4e0a\u53bb\u641c\u7d22\u522b\u4eba\u753b\u597d\u7684 Dashboard \uff0c\u4f46\u662f Azure \u76f8\u5173\u7684 Dashboards \u6bd4\u8f83\u5c11\uff0c\u57fa\u4e8e Prometheus \u7684\u66f4\u5c11\uff0c\u5927\u6982\u7387\u7684\u60c5\u51b5\u4e0b\u8fd8\u662f\u9700\u8981\u81ea\u5df1\u753b\u7684\u3002"),(0,a.kt)("h1",{id:"\u9047\u5230\u7684\u95ee\u9898"},"\u9047\u5230\u7684\u95ee\u9898"),(0,a.kt)("p",null,"1\u3001\u53ea\u80fd\u76d1\u63a7\u5230 account \u6307\u6807\uff0c\u65e0\u6cd5\u76d1\u63a7\u5230 blob \u3001queue \u7b49\u6307\u6807\u3002\n\u5f53\u524d\u7248\u672c\u65e0\u6cd5\u76d1\u63a7\u6240\u6709\u6307\u6807\uff0c\u56e0\u4e3a apiversion \u7248\u672c\u7684\u9650\u5236\uff0c"),(0,a.kt)("p",null,"exporter \u5728\u83b7\u53d6 aipversion \u7684\u65f6\u5019\u83b7\u53d6\u7684\u662f 2018-02-01 "),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RobustPerception/azure_metrics_exporter/blob/HEAD/azure.go"},"https://github.com/RobustPerception/azure_metrics_exporter/blob/HEAD/azure.go"),"  \u7684 401 ~ 424 \u884c\u662f\u7528\u6765\u8fd4\u56de\u6307\u5b9a\u7684\u8d44\u6e90\u7ec4\u548c\u8d44\u6e90\u7684\uff0c"),(0,a.kt)("p",null,"\u5728\u8fd9\u4e00\u6bb5\uff0c\u6307\u5b9a\u4e86 apiVersion \u4e3a 2018-02-01"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'...\n// Returns all resources for given resource group and types\nfunc (ac *AzureClient) listFromResourceGroup(resourceGroup string, resourceTypes []string) ([]AzureResource, error) {\n    apiVersion := "2018-02-01"\n\n...\n')),(0,a.kt)("p",null,"azure \u7684\u6700\u65b0apiversion \u7248\u672c\u4e3a 2019-06-01 \uff0c"),(0,a.kt)("p",null,"\u5728 2018-02-01 \u7248\u672c\u4e0a\u9488\u5bf9\u7684 Storage  \u7684 Resource Type \u53ea\u6709 Storage Accounts\uff0c"),(0,a.kt)("p",null,"\u5728 2019-06-01 \u7248\u672c\u4e0a\u9488\u5bf9\u7684 Storage  \u7684 Resource Type \u6709 Storage Accounts \u3001Blob Services \u3001File Services \u3001Queue Services\u3001Table Services \u7b49\u63a5\u53e3\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\u65e0\u6cd5\u76d1\u63a7\u5230 Blob \u3001File\u3001Queue\u3001Table \u7b49\u6570\u636e\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/templates/microsoft.storage/2018-02-01/storageaccounts?tabs=json"},"https://docs.microsoft.com/en-us/azure/templates/microsoft.storage/2018-02-01/storageaccounts?tabs=json"),"\n2\u3001\u65e0\u6cd5\u76d1\u63a7\u5230\u90e8\u5206\u8d1f\u8f7d\u5747\u8861\u7684\u6307\u6807"),(0,a.kt)("p",null,"\u8d1f\u8f7d\u5747\u8861\u6709\u4e24\u79cd SKU \uff0c\u5206\u522b\u662f\u6807\u51c6\u7248\u548c\u57fa\u7840\u7248\uff0c\u4e24\u8005\u5728\u529f\u80fd\u3001\u89c4\u6a21\u3001\u552e\u4ef7\u65b9\u9762\u6709\u533a\u522b\uff0c\u5bf9\u4e8e\u76d1\u63a7\u6765\u8bf4\uff0c\u6211\u4eec\u4f7f\u7528 Azure Metric Exporter \u4e3b\u8981\u662f\u83b7\u53d6\u6307\u6807\u6570\u636e\u3002\u6807\u51c6\u7248\u63d0\u4f9b\u57fa\u4e8e Azure Monitor \u7684\u76d1\u63a7\u6307\u6807\uff0c\u57fa\u7840\u7248\u53ea\u63d0\u4f9b\u57fa\u4e8e Azure Log \u7684\u65e5\u5fd7\u3002\u6240\u4ee5\u65e0\u6cd5\u83b7\u53d6\u57fa\u7840\u7248\u7684\u76d1\u63a7\u6307\u6807\u3002\u53e6\u5916\u6587\u6863\u91cc\u63d0\u5230SKU \u662f\u4e0d\u53ef\u53d8\u7684\uff0c\u65e0\u6cd5\u66f4\u6539\u73b0\u6709\u8d44\u6e90\u7684 SKU\u3002\u6240\u4ee5\u53ea\u6709\u8fc1\u79fb\u624d\u80fd\u53d8\u66f4SKU\uff0c\u5982\u679c\u9700\u8981\u5347\u7ea7\u53ef\u4ee5\u53c2\u8003\u5347\u7ea7\u6587\u6863\u3002"),(0,a.kt)("p",null,"SKU \u5bf9\u6bd4\u6587\u6863\uff1a\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/azure/load-balancer/skus"},"https://docs.microsoft.com/zh-cn/azure/load-balancer/skus")),(0,a.kt)("p",null,"\u5347\u7ea7\u6587\u6863\uff1a\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/azure/virtual-network/virtual-network-public-ip-address-upgrade?tabs=option-upgrade-powershell%2Coption-migrate-powershell"},"https://docs.microsoft.com/zh-cn/azure/virtual-network/virtual-network-public-ip-address-upgrade?tabs=option-upgrade-powershell%2Coption-migrate-powershell")))}c.isMDXComponent=!0}}]);