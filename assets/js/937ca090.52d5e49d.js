"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2334],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=i(r),h=o,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||u;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,a=new Array(u);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var i=2;i<u;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},79223:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>u,metadata:()=>l,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const u={last_update:{author:"\u90d1\u5b66\u8d24"}},a="1.1 Prometheus \u7b80\u4ecb",l={unversionedId:"prometheus/Basic/1.1-prometheus-introduction",id:"prometheus/Basic/1.1-prometheus-introduction",title:"1.1 Prometheus \u7b80\u4ecb",description:"Prometheus \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u7cfb\u7edf\u76d1\u63a7\u548c\u8b66\u62a5\u5de5\u5177\uff0c\u6700\u521d\u662f\u5728 SoundCloud \u4e0a\u6784\u5efa\u7684\u3002\u81ea2012\u5e74\u542f\u52a8\u4ee5\u6765\uff0c\u8bb8\u591a\u516c\u53f8\u548c\u7ec4\u7ec7\u90fd\u91c7\u7528\u4e86 Prometheus\uff0c\u8be5\u9879\u76ee\u62e5\u6709\u975e\u5e38\u6d3b\u8dc3\u7684\u5f00\u53d1\u4eba\u5458\u548c\u7528\u6237\u793e\u533a\u3002\u5b83\u73b0\u5728\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u5f00\u6e90\u9879\u76ee\uff0c\u72ec\u7acb\u4e8e\u4efb\u4f55\u516c\u53f8\u8fdb\u884c\u7ef4\u62a4\u3002\u4e3a\u4e86\u5f3a\u8c03\u8fd9\u4e00\u70b9\uff0c\u5e76\u9610\u660e\u8be5\u9879\u76ee\u7684\u6cbb\u7406\u7ed3\u6784\uff0cPrometheus \u4e8e2016\u5e74\u52a0\u5165 CNCF \uff08\u4e91\u539f\u751f\u8ba1\u7b97\u57fa\u91d1\u4f1a\uff09\uff0c\u6210\u4e3a\u7ee7 Kubernetes \u4e4b\u540e\u7684\u7b2c\u4e8c\u4e2a\u6258\u7ba1\u9879\u76ee\u30022018 \u5e74 8 \u6708 9 \u65e5\uff0cCNCF \u5ba3\u5e03\u5f00\u653e\u6e90\u4ee3\u7801\u76d1\u63a7\u5de5\u5177 Prometheus \u5df2\u4ece\u5b75\u5316\u72b6\u6001\u8fdb\u5165\u6bd5\u4e1a\u72b6\u6001\u3002",source:"@site/wiki/ops/prometheus/01-Basic/1.1-prometheus-introduction.md",sourceDirName:"prometheus/01-Basic",slug:"/prometheus/Basic/1.1-prometheus-introduction",permalink:"/zhengxuexian_blog/ops/prometheus/Basic/1.1-prometheus-introduction",draft:!1,tags:[],version:"current",lastUpdatedBy:"\u90d1\u5b66\u8d24",lastUpdatedAt:1661930328,formattedLastUpdatedAt:"2022\u5e748\u670831\u65e5",frontMatter:{last_update:{author:"\u90d1\u5b66\u8d24"}},sidebar:"tutorialSidebar",previous:{title:"\u7b2c\u4e00\u7ae0 \u8ba4\u8bc6 Prometheus",permalink:"/zhengxuexian_blog/ops/prometheus/Basic/"},next:{title:"1.2 Prometheus \u5b89\u88c5",permalink:"/zhengxuexian_blog/ops/prometheus/Basic/1.2-prometheus-install"}},s={},i=[{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",level:2},{value:"\u67b6\u6784",id:"\u67b6\u6784",level:2},{value:"Prometheus \u9002\u5408\u505a\u4ec0\u4e48",id:"prometheus-\u9002\u5408\u505a\u4ec0\u4e48",level:2},{value:"Prometheus \u4e0d\u9002\u5408\u505a\u4ec0\u4e48",id:"prometheus-\u4e0d\u9002\u5408\u505a\u4ec0\u4e48",level:2}],p={toc:i};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"11-prometheus-\u7b80\u4ecb"},"1.1 Prometheus \u7b80\u4ecb"),(0,o.kt)("p",null,"Prometheus \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u7cfb\u7edf\u76d1\u63a7\u548c\u8b66\u62a5\u5de5\u5177\uff0c\u6700\u521d\u662f\u5728 SoundCloud \u4e0a\u6784\u5efa\u7684\u3002\u81ea2012\u5e74\u542f\u52a8\u4ee5\u6765\uff0c\u8bb8\u591a\u516c\u53f8\u548c\u7ec4\u7ec7\u90fd\u91c7\u7528\u4e86 Prometheus\uff0c\u8be5\u9879\u76ee\u62e5\u6709\u975e\u5e38\u6d3b\u8dc3\u7684\u5f00\u53d1\u4eba\u5458\u548c\u7528\u6237\u793e\u533a\u3002\u5b83\u73b0\u5728\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u5f00\u6e90\u9879\u76ee\uff0c\u72ec\u7acb\u4e8e\u4efb\u4f55\u516c\u53f8\u8fdb\u884c\u7ef4\u62a4\u3002\u4e3a\u4e86\u5f3a\u8c03\u8fd9\u4e00\u70b9\uff0c\u5e76\u9610\u660e\u8be5\u9879\u76ee\u7684\u6cbb\u7406\u7ed3\u6784\uff0cPrometheus \u4e8e2016\u5e74\u52a0\u5165 CNCF \uff08\u4e91\u539f\u751f\u8ba1\u7b97\u57fa\u91d1\u4f1a\uff09\uff0c\u6210\u4e3a\u7ee7 Kubernetes \u4e4b\u540e\u7684\u7b2c\u4e8c\u4e2a\u6258\u7ba1\u9879\u76ee\u30022018 \u5e74 8 \u6708 9 \u65e5\uff0cCNCF \u5ba3\u5e03\u5f00\u653e\u6e90\u4ee3\u7801\u76d1\u63a7\u5de5\u5177 Prometheus \u5df2\u4ece\u5b75\u5316\u72b6\u6001\u8fdb\u5165\u6bd5\u4e1a\u72b6\u6001\u3002"),(0,o.kt)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,o.kt)("p",null,"Prometheus \u7684\u4e3b\u8981\u7279\u6027\u6709\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u591a\u7ef4\u6570\u636e\u6a21\u578b\uff0c\u5305\u542b\u7531 metric \u548c key/value \u6807\u8bc6\u7684\u65f6\u95f4\u5e8f\u5217\u6570\u636e"),(0,o.kt)("li",{parentName:"ul"},"PromQL\u662f\u4e00\u79cd\u7075\u6d3b\u7684\u67e5\u8be2\u8bed\u8a00"),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u4f9d\u8d56\u5206\u5e03\u5f0f\u5b58\u50a8\uff0c\u5355\u4e2a\u670d\u52a1\u5668\u8282\u70b9\u662f\u81ea\u6cbb\u7684"),(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8e HTTP \u534f\u8bae\u901a\u8fc7 pull \u5f62\u5f0f\u8fdb\u884c\u6536\u96c6\u65f6\u95f4\u5e8f\u5217\u6570\u636e"),(0,o.kt)("li",{parentName:"ul"},"push \u5f62\u5f0f\u7684\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u662f\u901a\u8fc7\u4e00\u4e2a\u4e2d\u95f4\u7f51\u5173\u6765\u652f\u6301\u7684"),(0,o.kt)("li",{parentName:"ul"},"targets \u53ef\u4ee5\u901a\u8fc7\u670d\u52a1\u53d1\u73b0\u6216\u9759\u6001\u914d\u7f6e\u53d1\u73b0\u7684"),(0,o.kt)("li",{parentName:"ul"},"\u591a\u79cd\u6a21\u5f0f\u7684\u56fe\u5f62\u548c\u4eea\u8868\u76d8\u652f\u6301")),(0,o.kt)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),(0,o.kt)("p",null,"Prometheus \u751f\u6001\u7cfb\u7edf\u7531\u591a\u4e2a\u7ec4\u4ef6\u7ec4\u6210\uff0c\u5176\u4e2d\u8bb8\u591a\u662f\u53ef\u9009\u7684:"),(0,o.kt)("p",null,"Prometheus Server\uff1a\u4e3b\u8981\u7684 Prometheus \u670d\u52a1\u5668\uff0c\u5b83\u6293\u53d6\u548c\u5b58\u50a8\u65f6\u95f4\u5e8f\u5217\u6570\u636e\nClient Libraries\uff1a\u7528\u4e8e\u68c0\u6d4b\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u7684\u5e93\uff0c\u4e3b\u8981\u7528\u4e8e\u5ba2\u6237\u7aef\u3002\nPush Gateway\uff1a\u652f\u6301\u77ed\u671f\u751f\u547d\u5468\u671f\u7684 Jobs\nExporter\uff1a\u4e3a HAProxy\u3001StatsD\u3001Graphite \u7b49\u670d\u52a1\u63d0\u4f9b\u6570\u636e\u3002\nAlert Manager\uff1a\u4e00\u4e2a\u544a\u8b66\u5904\u7406\u5de5\u5177\n\u5404\u79cd\u652f\u6301\u5de5\u5177"),(0,o.kt)("p",null,"\u5927\u591a\u6570\u7684 Prometheus \u7ec4\u4ef6\u662f\u7528 Go \u8bed\u8a00\u6765\u7f16\u5199\u7684\uff0c\u8fd9\u4f7f\u5f97\u4ed6\u4eec\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u6784\u5efa\u5e76\u4e14\u4f7f\u7528\u9759\u6001\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u6765\u90e8\u7f72\u3002"),(0,o.kt)("h2",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,o.kt)("p",null,"\u8fd9\u5f20\u56fe\u5c55\u793a\u4e86 Prometheus \u7684\u67b6\u6784\u53ca\u5176\u751f\u6001\u7cfb\u7edf\u7684\u4e00\u4e9b\u7ec4\u6210\u90e8\u5206:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://prometheus.io/assets/architecture.png",alt:"prometheus architrcture"}),"\n\u56fe\u7247\u6765\u81ea\u5b98\u65b9\u7f51\u7ad9"),(0,o.kt)("p",null,"Prometheus \u4ece\u5404\u79cd\u91c7\u96c6\u7aef\u7684 Job \u4e2d\u83b7\u53d6 Metric\uff0c\u8981\u4e48\u76f4\u63a5\u83b7\u53d6\uff0c\u8981\u4e48\u901a\u8fc7 Push Gateway \u83b7\u53d6\u77ed\u751f\u547d\u5468\u671f Job \u3002\u5b83\u5728\u672c\u5730\u5b58\u50a8\u6240\u6709\u6293\u53d6\u7684\u6570\u636e\uff0c\u5e76\u5bf9\u8fd9\u4e9b\u6570\u636e\u5904\u7406\u805a\u5408\u548c\u8bb0\u5f55\u4ee5\u751f\u6210\u65b0\u7684\u65f6\u95f4\u5e8f\u5217\uff0c\u6216\u8005\u751f\u6210\u8b66\u62a5\u6d88\u606f\u3002Grafana \u6216\u5176\u4ed6 API \u4f7f\u7528\u8005\u53ef\u4ee5\u4f7f\u7528 PromQL \u8bed\u6cd5\u6765\u67e5\u8be2\u4f7f\u7528\u6570\u636e\u3002"),(0,o.kt)("h2",{id:"prometheus-\u9002\u5408\u505a\u4ec0\u4e48"},"Prometheus \u9002\u5408\u505a\u4ec0\u4e48"),(0,o.kt)("p",null,"Prometheus \u53ef\u4ee5\u5f88\u597d\u5730\u8bb0\u5f55\u4efb\u4f55\u7eaf\u6570\u5b57\u7684\u65f6\u95f4\u5e8f\u5217\u3002\u5b83\u65e2\u9002\u5408\u4ee5\u673a\u5668\u4e3a\u4e2d\u5fc3\u7684\u76d1\u89c6\uff0c\u4e5f\u9002\u5408\u9ad8\u5ea6\u52a8\u6001\u7684\u9762\u5411\u670d\u52a1\u7684\u4f53\u7cfb\u7ed3\u6784\u7684\u76d1\u89c6\u3002\u5728\u5fae\u670d\u52a1\u7684\u4e16\u754c\u4e2d\uff0c\u5b83\u5bf9\u591a\u7ef4\u6570\u636e\u6536\u96c6\u548c\u67e5\u8be2\u7684\u652f\u6301\u662f\u4e00\u4e2a\u7279\u522b\u7684\u4f18\u52bf\u3002"),(0,o.kt)("p",null,"Prometheus \u662f\u4e3a\u53ef\u9760\u6027\u800c\u8bbe\u8ba1\u7684\uff0c\u5b83\u662f\u60a8\u5728\u505c\u673a\u671f\u95f4\u4f7f\u7528\u7684\u7cfb\u7edf\uff0c\u5141\u8bb8\u60a8\u5feb\u901f\u8bca\u65ad\u95ee\u9898\u3002\u6bcf\u53f0Prometheus \u670d\u52a1\u5668\u90fd\u662f\u72ec\u7acb\u7684\uff0c\u4e0d\u4f9d\u8d56\u4e8e\u7f51\u7edc\u5b58\u50a8\u6216\u5176\u4ed6\u8fdc\u7a0b\u670d\u52a1\u3002\u5f53\u60a8\u7684\u57fa\u7840\u8bbe\u65bd\u7684\u5176\u4ed6\u90e8\u5206\u88ab\u7834\u574f\u65f6\uff0c\u60a8\u53ef\u4ee5\u4f9d\u8d56\u5b83\uff0c\u5e76\u4e14\u60a8\u4e0d\u9700\u8981\u8bbe\u7f6e\u5e7f\u6cdb\u7684\u57fa\u7840\u8bbe\u65bd\u6765\u4f7f\u7528\u5b83\u3002"),(0,o.kt)("h2",{id:"prometheus-\u4e0d\u9002\u5408\u505a\u4ec0\u4e48"},"Prometheus \u4e0d\u9002\u5408\u505a\u4ec0\u4e48"),(0,o.kt)("p",null,"Prometheus \u7684\u503c\u662f\u5f88\u53ef\u9760\u7684\u3002\u60a8\u603b\u662f\u53ef\u4ee5\u67e5\u770b\u6709\u5173\u7cfb\u7edf\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u5373\u4f7f\u5728\u51fa\u73b0\u6545\u969c\u7684\u60c5\u51b5\u4e0b\u4e5f\u662f\u5982\u6b64\u3002\u5982\u679c\u60a8\u9700\u8981100%\u7684\u51c6\u786e\u6027\uff0c\u4f8b\u5982\u6309\u8bf7\u6c42\u8ba1\u8d39\uff0cPrometheus\u4e0d\u662f\u4e00\u4e2a\u597d\u7684\u9009\u62e9\uff0c\u56e0\u4e3a\u6536\u96c6\u7684\u6570\u636e\u53ef\u80fd\u4e0d\u591f\u8be6\u7ec6\u548c\u5b8c\u6574\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6700\u597d\u4f7f\u7528\u5176\u4ed6\u7cfb\u7edf\u6765\u6536\u96c6\u548c\u5206\u6790\u7528\u4e8e\u8ba1\u8d39\u7684\u6570\u636e\uff0c\u5e76\u4f7f\u7528 Prometheus \u6765\u5b8c\u6210\u5269\u4e0b\u7684\u76d1\u89c6\u5de5\u4f5c\u3002"),(0,o.kt)("p",null,"\u5e76\u4e14 Prometheus \u5e76\u4e0d\u9002\u5408\u76d1\u63a7\u5b57\u7b26\u4e32\u7c7b\u7684\u76d1\u63a7\u6307\u6807\u3002"),(0,o.kt)("p",null,"\u5173\u4e8e\u65e5\u5fd7\u7c7b\u7684\u76d1\u63a7\uff0c\u8bf7\u4f7f\u7528\u5176\u4ed6\u65e5\u5fd7\u7cfb\u7edf\uff0c\u6bd4\u5982 Grafana \u7684 Loki \uff0c\u53ef\u4ee5\u5728 Grafana \u4e2d\u8fdb\u884c\u5c55\u793a\u3002Loki \u76ee\u524d\u8fd8\u5728\u6d4b\u8bd5\u9636\u6bb5\uff0c\u53ef\u4ee5\u8fdb\u884c\u5c1d\u8bd5\uff0c\u8bf7\u5728\u7a33\u5b9a\u540e\u518d\u7528\u4e8e\u751f\u4ea7\u7cfb\u7edf\u3002"))}m.isMDXComponent=!0}}]);