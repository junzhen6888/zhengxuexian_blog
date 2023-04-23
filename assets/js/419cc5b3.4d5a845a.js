"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[540],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return r?n.createElement(k,p(p({ref:t},s),{},{components:r})):n.createElement(k,p({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var u=2;u<l;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},87357:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={last_update:{author:"\u90d1\u5b66\u8d24"}},p="Prometheus \u542f\u52a8\u65f6\u88ab\u7981\u6b62\u7684\u529f\u80fd\u7279\u6027",i={unversionedId:"prometheus/Server/2.10-feature-flags",id:"prometheus/Server/2.10-feature-flags",title:"Prometheus \u542f\u52a8\u65f6\u88ab\u7981\u6b62\u7684\u529f\u80fd\u7279\u6027",description:"Prometheus \u6709\u4e00\u4e9b\u529f\u80fd\u7279\u6027\u5728\u670d\u52a1\u542f\u52a8\u7684\u65f6\u5019\u662f\u9ed8\u8ba4\u7981\u6b62\u7684\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u529f\u80fd\u7279\u6027\u662f\u5bf9 Prometheus \u6709\u7834\u574f\u6027\u6216\u662f\u5b9e\u9a8c\u6027\u8d28\u7684\uff0c\u5728\u672a\u6765\u7684\u7248\u672c\u5347\u7ea7\u4e2d\u8fd9\u4e9b\u7279\u6027\u4f1a\u53d1\u751f\u53d8\u5316\u3002\u5982\u679c\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u8fd9\u4e9b\u53d8\u5316\u4f1a\u5728\u6bcf\u4e2a\u7248\u672c\u7684\u53d1\u884c\u6ce8\u8bb0\u4e2d\u8fdb\u884c\u6807\u6ce8\u548c\u63cf\u8ff0\u3002",source:"@site/wiki/ops/prometheus/02-Server/2.10-feature-flags.md",sourceDirName:"prometheus/02-Server",slug:"/prometheus/Server/2.10-feature-flags",permalink:"/zhengxuexian_blog/ops/prometheus/Server/2.10-feature-flags",draft:!1,tags:[],version:"current",lastUpdatedBy:"\u90d1\u5b66\u8d24",lastUpdatedAt:1661930328,formattedLastUpdatedAt:"2022\u5e748\u670831\u65e5",frontMatter:{last_update:{author:"\u90d1\u5b66\u8d24"}},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u59cb",permalink:"/zhengxuexian_blog/ops/prometheus/Server/2.1-getting-started"},next:{title:"2.11-storage",permalink:"/zhengxuexian_blog/ops/prometheus/Server/2.11-storage"}},o={},u=[],s={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prometheus-\u542f\u52a8\u65f6\u88ab\u7981\u6b62\u7684\u529f\u80fd\u7279\u6027"},"Prometheus \u542f\u52a8\u65f6\u88ab\u7981\u6b62\u7684\u529f\u80fd\u7279\u6027"),(0,a.kt)("p",null,"Prometheus \u6709\u4e00\u4e9b\u529f\u80fd\u7279\u6027\u5728\u670d\u52a1\u542f\u52a8\u7684\u65f6\u5019\u662f\u9ed8\u8ba4\u7981\u6b62\u7684\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u529f\u80fd\u7279\u6027\u662f\u5bf9 Prometheus \u6709\u7834\u574f\u6027\u6216\u662f\u5b9e\u9a8c\u6027\u8d28\u7684\uff0c\u5728\u672a\u6765\u7684\u7248\u672c\u5347\u7ea7\u4e2d\u8fd9\u4e9b\u7279\u6027\u4f1a\u53d1\u751f\u53d8\u5316\u3002\u5982\u679c\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u8fd9\u4e9b\u53d8\u5316\u4f1a\u5728\u6bcf\u4e2a\u7248\u672c\u7684\u53d1\u884c\u6ce8\u8bb0\u4e2d\u8fdb\u884c\u6807\u6ce8\u548c\u63cf\u8ff0\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5728 Prometheus \u542f\u52a8\u7684\u65f6\u5019\u5728\u547d\u4ee4\u884c\u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--enable-feature")," \u53c2\u6570\u6765\u5f00\u542f\u8fd9\u4e9b\u529f\u80fd\u7279\u6027\uff0c\u5982\u679c\u5b9e\u9a8c\u6027\u7684\u529f\u80fd\u7279\u6027\u5728\u9a8c\u8bc1\u7a33\u5b9a\u4e4b\u540e\uff0c\u4f1a\u5728\u672a\u6765\u7684\u7248\u672c\u4e2d\u9ed8\u8ba4\u5f00\u542f\u8be5\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u57fa\u4e8e Prometheus  v2.37.0 \u8fdb\u884c\u8fd9\u4e9b\u529f\u80fd\u7279\u6027\u7684\u63cf\u8ff0\u3002"),(0,a.kt)("h1",{id:"\u5728\u5916\u90e8\u7684-label-\u4e2d\u5c55\u793a\u73af\u5883\u53d8\u91cf"},"\u5728\u5916\u90e8\u7684 label \u4e2d\u5c55\u793a\u73af\u5883\u53d8\u91cf"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enable-feature=expand-external-labels")),(0,a.kt)("p",null,"\u6839\u636e\u5f53\u524d\u73af\u5883\u53d8\u91cf\u7684\u503c\u66ff\u6362 ",(0,a.kt)("inlineCode",{parentName:"p"},"${var}")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"$var")," \u5728  ",(0,a.kt)("inlineCode",{parentName:"p"},"external_labels")," \u4e2d\u7684\u503c \u3002\u5bf9\u672a\u5b9a\u4e49\u53d8\u91cf\u7684\u5f15\u7528\u5c06\u88ab\u66ff\u6362\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"$")," \u5b57\u7b26\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"$$")," \u8fdb\u884c\u8f6c\u4e49\u3002"),(0,a.kt)("h1",{id:"\u8fdc\u7a0b\u5199-receiver"},"\u8fdc\u7a0b\u5199 Receiver"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enable-feature=remote-write-receiver")),(0,a.kt)("p",null,"\u8fdc\u7a0b\u5199\u63a5\u6536\u7aef\u5141\u8bb8 Prometheus  \u63a5\u53d7\u6765\u81ea\u5176\u4ed6 Prometheus \u670d\u52a1\u7aef\u7684\u8fdc\u7a0b\u5199\u8bf7\u6c42\u3002\u5bf9\u4e8e\u8fd9\u4e2a\u7279\u6027\u4e0d\u5efa\u8bae\u4f7f\u7528  ",(0,a.kt)("inlineCode",{parentName:"p"},"--enable-feature"),"  \u53c2\u6570\u6765\u5f00\u542f\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--web.enable-remote-write-receiver")," \u6765\u4ee3\u66ff\uff0c\u53e6\u5916\u5728\u4e4b\u540e\u7684\u53d1\u7248\u53d1\u5e03\u8fc7\u7a0b\u4e2d\uff0c\u8fd9\u4e2a\u529f\u80fd\u7279\u6027\u53ef\u80fd\u4f1a\u88ab\u653e\u5f03\u3002"),(0,a.kt)("h1",{id:"exemplar-\u5b58\u50a8"},"Exemplar \u5b58\u50a8"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enable-feature=exemplar-storage")," "),(0,a.kt)("p",null,"OpenMetrics \u5f15\u5165\u4e86\u5c06 Exemplar \u6dfb\u52a0\u5230\u7279\u5b9a\u6307\u6807\u7684\u80fd\u529b\u3002Exemplar \u662f\u5bf9 MetricSet \u4e4b\u5916\u7684\u6570\u636e\u7684\u5f15\u7528\uff0c\u6bd4\u8f83\u5e38\u89c1\u7684\u7528\u4f8b\u662f\u7a0b\u5e8f\u8ddf\u8e2a\u7684ID\u3002"),(0,a.kt)("p",null,"Exemplar \u5b58\u50a8\u662f\u4f5c\u4e3a\u4e00\u4e2a\u56fa\u5b9a\u5927\u5c0f\u7684\u5faa\u73af\u7f13\u51b2\u533a\u6765\u5b9e\u73b0\u7684\uff0c\u5b83\u5c06\u6240\u6709 series \u7684 Exemplar \u5b58\u50a8\u5728\u5185\u5b58\u4e2d\u3002\u542f\u52a8\u670d\u52a1\u7684\u65f6\u5019\u6253\u5f00\u8be5\u7279\u6027\u4f1a\u5c06 Prometheus \u6240\u6293\u53d6\u7684 Exemplar \u5b58\u50a8\u3002\u5757\u5b58\u50a8\u6216\u8005 Exemplar \u7684\u914d\u7f6e\u6587\u4ef6\u53ef\u4ee5\u7528\u6765\u63a7\u5236\u5faa\u73af\u7f13\u51b2\u533a\u7684\u5927\u5c0f\u3002\u4e00\u4e2a\u53ea\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"traceID=<jaeger-trace-id>")," \u7684 Exemplar \u5728\u5185\u5b58\u4e2d\u4f7f\u7528\u4e86\u5927\u7ea6 100 \u5b57\u8282\u7684 Exemplar \u5b58\u50a8\u7a7a\u95f4\u3002\u5982\u679c Exemplar \u5b58\u50a8\u88ab\u542f\u7528\uff0c\u6211\u4eec\u8fd8\u5c06 Exemplar \u9644\u52a0\u5230 WAL \u4ee5\u5b9e\u73b0\u672c\u5730\u6301\u4e45\u6027(\u7528\u4e8eWAL\u6301\u7eed\u65f6\u95f4)\u3002"),(0,a.kt)("h1",{id:"\u5173\u95ed\u7684\u65f6\u5019\u521b\u5efa\u5185\u5b58\u5feb\u7167"},"\u5173\u95ed\u7684\u65f6\u5019\u521b\u5efa\u5185\u5b58\u5feb\u7167"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enable-feature=memory-snapshot-on-shutdown")),(0,a.kt)("p",null,"\u8fd9\u5c06\u5728\u5173\u95ed\u65f6\u83b7\u53d6\u5185\u5b58\u4e2d\u6570\u636e\u5757\u7684\u5feb\u7167\u4ee5\u53ca series \u4fe1\u606f\uff0c\u5e76\u5c06\u5176\u5b58\u50a8\u5728\u78c1\u76d8\u4e0a\u3002\u5f00\u542f\u8fd9\u4e2a\u529f\u80fd\u4ee5\u540e\u53ef\u4ee5\u51cf\u5c11 Prometheus \u7684\u542f\u52a8\u65f6\u95f4\uff0c\u56e0\u4e3a\u53ef\u4ee5\u7528\u8fd9\u4e2a\u5feb\u7167\u548c m-mapped chunk \u6062\u590d\u5185\u5b58\u72b6\u6001\uff0c\u800c\u4e0d\u9700\u8981 WAL \u91cd\u653e\u3002"),(0,a.kt)("h1",{id:"\u83b7\u53d6\u989d\u5916\u7684\u6307\u6807"},"\u83b7\u53d6\u989d\u5916\u7684\u6307\u6807"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enable-feature=extra-scrape-metrics")),(0,a.kt)("p",null,"\u542f\u7528\u8fd9\u4e2a\u529f\u80fd\u7279\u6027\u4ee5\u540e\uff0c\u5bf9\u4e8e\u6bcf\u4e2a\u5b9e\u4f8b\u7684\u6570\u636e\u6293\u53d6\uff0cPrometheus \u4f1a\u5728\u4ee5\u4e0b\u989d\u5916\u7684\u65f6\u95f4\u5e8f\u5217\u4e2d\u5b58\u50a8\u4e00\u4e2a sample:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"scrape_timeout_seconds")," : \u4e3a\u76ee\u6807\u914d\u7f6e\u7684 scrape_timeout , \u8fd9\u5141\u8bb8\u60a8\u901a\u8fc7\u4f7f\u7528 scrape_duration_seconds \u548c scrape_timeout_seconds \u6765\u6d4b\u91cf\u6bcf\u4e2a\u76ee\u6807\uff0c\u4ee5\u4e86\u89e3\u5b83\u4eec\u8ddd\u79bb\u8d85\u65f6\u95f4\u7684\u8ddd\u79bb\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"scrape_sample_limit")," : \u4e3a\u76ee\u6807\u914d\u7f6e\u7684 sample_limit \uff0c\u8fd9\u6837\u53ef\u4ee5\u5224\u65ad\u6bcf\u4e2a\u76ee\u6807\u8ddd\u79bb\u8fbe\u5230\u9650\u5236\u8fd8\u6709\u591a\u5c11\u4f59\u91cf\uff0c\u67e5\u8be2\u8bed\u53e5\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"scrape_samples_post_metric_relabel / scrape_sample_limit"),"\u3002"))),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u5982\u679c\u6ca1\u6709\u914d\u7f6e\u9650\u5236\uff0c\u5219 scrape_sample_limit \u7f3a\u7701\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\uff0c\u8fd9\u610f\u5473\u7740\u4e0a\u9762\u7684\u67e5\u8be2\u56e0\u4e3a\u6ca1\u6709\u9650\u5236\u7684\u76ee\u6807\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"+Inf")," (\u56e0\u4e3a\u6211\u4eec\u9664\u4ee5\u96f6)\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u53ea\u60f3\u67e5\u8be2\u5177\u6709 sample \u9650\u5236\u7684\u76ee\u6807\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u67e5\u8be2:scrape_samples_post_metric_relabeling / (scrape_sample_limit > 0)\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scrape_body_size_bytes")," : \u5982\u679c\u6570\u636e\u83b7\u53d6\u6210\u529f\uff0c\u90a3\u4e48\u8fd9\u4e2a\u6570\u636e\u662f\u6700\u8fd1\u83b7\u53d6\u7684\u672a\u538b\u7f29\u7684\u6570\u636e\u5927\u5c0f\u3002\u56e0\u4e3abody_size_limit \u8d85\u8fc7\u9650\u5236\u800c\u5bfc\u81f4\u7684\u83b7\u53d6\u6570\u636e\u5931\u8d25\u90a3\u4e48\u4f1a\u8fd4\u56de\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"-1"),"\uff0c\u5176\u4ed6\u60c5\u51b5\u7684\u83b7\u53d6\u6570\u636e\u5931\u8d25\u8fd4\u56de\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"\u3002")),(0,a.kt)("h1",{id:"\u65b0\u7684\u670d\u52a1\u53d1\u73b0\u7ba1\u7406"},"\u65b0\u7684\u670d\u52a1\u53d1\u73b0\u7ba1\u7406"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enable-feature=new-service-discovery-manager")),(0,a.kt)("p",null,"\u542f\u7528\u8fd9\u4e2a\u529f\u80fd\u7279\u6027\u540e\uff0cPrometheus \u5c06\u4f7f\u7528\u4e00\u4e2a\u65b0\u7684\u670d\u52a1\u53d1\u73b0\u7ba1\u7406\u5668\uff0c\u8be5\u7ba1\u7406\u5668\u5728\u91cd\u65b0\u52a0\u8f7d\u65f6\u4e0d\u4f1a\u91cd\u542f\u672a\u4fee\u6539\u7684\u53d1\u73b0\u3002\u8fd9\u4f7f\u5f97\u91cd\u65b0\u52a0\u8f7d\u66f4\u5feb\uff0c\u51cf\u5c11\u4e86\u670d\u52a1\u53d1\u73b0\u6e90\u7684\u538b\u529b\u3002"),(0,a.kt)("p",null,"Prometheus \u5f00\u53d1\u56e2\u961f\u9f13\u52b1\u7528\u6237\u6d4b\u8bd5\u65b0\u7684\u670d\u52a1\u53d1\u73b0\u7ba1\u7406\u5668\uff0c\u5e76\u62a5\u544a\u4e0a\u6e38\u7684\u4efb\u4f55\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u5728\u672a\u6765\u7684\u7248\u672c\u4e2d\uff0c\u8fd9\u4e2a\u65b0\u7684\u670d\u52a1\u53d1\u73b0\u7ba1\u7406\u5668\u4f1a\u53d8\u6210\u9ed8\u8ba4\u7684\u670d\u52a1\u53d1\u73b0\u7ba1\u7406\u5668\uff0c\u8fd9\u4e2a\u529f\u80fd\u7279\u6027\u7684\u6807\u8bb0\u4f1a\u88ab\u5220\u9664\u3002"),(0,a.kt)("h1",{id:"prometheus-agent"},"Prometheus agent"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enable-feature=agent")),(0,a.kt)("p",null,"\u542f\u7528\u540e\uff0cPrometheus \u8fd0\u884c\u5728\u4ee3\u7406\u6a21\u5f0f\u3002\u4ee3\u7406\u6a21\u5f0f\u4ec5\u9650\u4e8e\u53d1\u73b0\u3001\u83b7\u53d6\u6570\u636e\u548c\u8fdc\u7a0b\u5199\u3002\u8fd9\u4e2a\u6a21\u5f0f\u7684\u4e3b\u8981\u7528\u9014\u662f\u7528\u6765\u4ece\u4e2d\u5fc3\u8fdc\u7a0b\u7aef\u67e5\u8be2\u6570\u636e\uff0c\u5e76\u4e14\u4e0d\u9700\u8981\u5728\u672c\u5730\u67e5\u8be2\u6570\u636e\u3002"),(0,a.kt)("h1",{id:"\u6bcf\u4e00\u6b65\u7684\u7edf\u8ba1\u6570\u636e"},"\u6bcf\u4e00\u6b65\u7684\u7edf\u8ba1\u6570\u636e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enable-feature=promql-per-step-stats")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u529f\u80fd\u7279\u6027\u542f\u7528\u4ee5\u540e\uff0c\u5728\u67e5\u8be2\u8bf7\u6c42\u4e2d\u4f20\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"stats=all")," \u53c2\u6570\u5c06\u8fd4\u56de\u6bcf\u4e00\u6b65\u7684\u7edf\u8ba1\u6570\u636e\u3002\u76ee\u524d\u8fd9\u4e2a\u529f\u80fd\u4ec5\u9650\u4e8etotalqueryablesample\u3002"),(0,a.kt)("p",null,"\u5f53\u5728\u5f15\u64ce\u6216\u67e5\u8be2\u4e2d\u7981\u7528\u8fd9\u4e2a\u529f\u80fd\u4ee5\u540e\uff0c\u5c31\u4e0d\u4f1a\u8ba1\u7b97\u6bcf\u4e00\u6b65\u7684\u7edf\u8ba1\u6570\u636e\u3002"),(0,a.kt)("h1",{id:"go-\u6700\u5927\u8fdb\u7a0b\u81ea\u52a8\u5339\u914d"},"Go \u6700\u5927\u8fdb\u7a0b\u81ea\u52a8\u5339\u914d"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--enable-feature=auto-gomaxprocs")),(0,a.kt)("p",null,"\u6253\u5f00\u8fd9\u4e2a\u529f\u80fd\u7279\u6027\u4ee5\u540e\uff0cGOMAXPROCS \u53d8\u91cf\u4f1a\u81ea\u52a8\u8bbe\u7f6e\u4e3a\u5339\u914d Linux \u7684\u5bb9\u5668 CPU \u7684\u914d\u989d\u3002\u8fd9\u4e2a\u7279\u6027\u5f53 Prometheus \u5728\u5bb9\u5668\u4e2d\u8fd0\u884c\u7684\u65f6\u5019\u4f1a\u6bd4\u8f83\u6709\u7528\u3002"))}m.isMDXComponent=!0}}]);