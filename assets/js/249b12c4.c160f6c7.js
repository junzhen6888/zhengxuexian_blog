"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3853],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),a=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=a(e.components);return o.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},i=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),i=a(r),d=n,h=i["".concat(u,".").concat(d)]||i[d]||m[d]||l;return r?o.createElement(h,s(s({ref:t},c),{},{components:r})):o.createElement(h,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=i;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var a=2;a<l;a++)s[a]=r[a];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}i.displayName="MDXCreateElement"},23393:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>a});var o=r(87462),n=(r(67294),r(3905));const l={},s="Prometheus \u6545\u969c\u6c47\u603b\uff08\u4e00\uff09",p={unversionedId:"prometheus/Troubleshoot/11.2-prometheus-problem-sets-1",id:"prometheus/Troubleshoot/11.2-prometheus-problem-sets-1",title:"Prometheus \u6545\u969c\u6c47\u603b\uff08\u4e00\uff09",description:"\u65e5\u5fd7\u8be6\u60c5",source:"@site/wiki/ops/prometheus/11-Troubleshoot/11.2-prometheus-problem-sets-1.md",sourceDirName:"prometheus/11-Troubleshoot",slug:"/prometheus/Troubleshoot/11.2-prometheus-problem-sets-1",permalink:"/zhengxuexian_blog/ops/prometheus/Troubleshoot/11.2-prometheus-problem-sets-1",draft:!1,tags:[],version:"current",lastUpdatedBy:"zhengxuexian",lastUpdatedAt:1661407442,formattedLastUpdatedAt:"2022\u5e748\u670825\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"11.10-pprof",permalink:"/zhengxuexian_blog/ops/prometheus/Troubleshoot/11.10-pprof"},next:{title:"Prometheus \u8fd0\u7ef4\u5de5\u5177 Promtool \uff08\u4e00\uff09Check \u529f\u80fd",permalink:"/zhengxuexian_blog/ops/prometheus/Troubleshoot/11.3-promtool-check"}},u={},a=[],c={toc:a};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"prometheus-\u6545\u969c\u6c47\u603b\u4e00"},"Prometheus \u6545\u969c\u6c47\u603b\uff08\u4e00\uff09"),(0,n.kt)("h1",{id:"1-out-of-bounds"},"1. out of bounds"),(0,n.kt)("p",null,"\u65e5\u5fd7\u8be6\u60c5"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'level=warn ts=2021-01-19T09:16:01.434Z caller=scrape.go:1378 component="scrape manager" scrape_pool=promtsdb target=http://127.0.0.1:9090/metrics msg="Error on ingesting samples that are too old or are too far into the future" num_dropped=580\nlevel=warn ts=2021-01-19T09:16:01.434Z caller=scrape.go:1145 component="scrape manager" scrape_pool=promtsdb target=http://127.0.0.1:9090/metrics msg="Append failed" err="out of bounds"\nlevel=warn ts=2021-01-19T09:16:01.434Z caller=scrape.go:1094 component="scrape manager" scrape_pool=promtsdb target=http://127.0.0.1:9090/metrics msg="Appending scrape report failed" err="out of bounds"\n\n')),(0,n.kt)("p",null,"\u539f\u56e0\uff1aPrometheus \u673a\u5668\u957f\u65f6\u95f4\u65ad\u7535\u6216\u8005\u5728\u6253\u5305 Prometheus \u955c\u50cf\u65f6\u5c06\u4e00\u90e8\u5206\u6570\u636e\u6253\u5305\u5230\u955c\u50cf\u4e2d\uff0c\u5bfc\u81f4 Prometheus \u7684\u90e8\u5206\u6570\u636e\u4e0e\u5f53\u524d\u65f6\u95f4\u76f8\u5dee\u8f83\u5927\u3002"),(0,n.kt)("p",null,"\u5904\u7406\u65b9\u6cd5 1 \uff1a\u65b0\u5efa\u6570\u636e\u76ee\u5f55\uff0c\u5728 Prometheus \u542f\u52a8\u65f6\u6307\u5b9a\u65b0\u7684\u6570\u636e\u76ee\u5f55\u3002"),(0,n.kt)("p",null,"\u5904\u7406\u65b9\u6cd5 2 \uff1a\u6e05\u7a7a\u6570\u636e\u76ee\u5f55\uff0c\u5e76\u4e14\u91cd\u542f Prometheus \u670d\u52a1\u3002"),(0,n.kt)("p",null,"\u53c2\u8003\u8d44\u6599\uff1a\n\u53c2\u8003 Issue ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/prometheus/prometheus/issues/3930"},"#3930")," \u3002"),(0,n.kt)("h1",{id:"2-cpu-user-counter-jumped-backwards"},"2. CPU User counter jumped backwards"),(0,n.kt)("p",null,"\u65e5\u5fd7\u8be6\u60c5"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'level=warn ts=2021-03-08T20:24:12.523Z caller=cpu_linux.go:255 collector=cpu msg="CPU User counter jumped backwards" cpu=22 old_value=296678.2 new_value=296676.19\nlevel=warn ts=2021-03-08T20:24:12.623Z caller=cpu_linux.go:267 collector=cpu msg="CPU System counter jumped backwards" cpu=22 old_value=137405.56 new_value=137405.28\nlevel=warn ts=2021-03-08T20:24:12.623Z caller=cpu_linux.go:247 collector=cpu msg="CPU Idle counter jumped backwards, possible hotplug event, resetting CPU stats" cpu=23 old_value=1.089999957e+07 new_value=1.089999731e+07\nlevel=warn ts=2021-03-08T20:32:31.229Z caller=cpu_linux.go:247 collector=cpu msg="CPU Idle counter jumped backwards, possible hotplug event, resetting CPU stats" cpu=0 old_value=1.087819428e+07 new_value=1.087816568e+07\nlevel=warn ts=2021-03-08T20:32:31.229Z caller=cpu_linux.go:247 collector=cpu msg="CPU Idle counter jumped backwards, possible hotplug event, resetting CPU stats" cpu=1 old_value=1.090932216e+07 new_value=1.090929192e+07\nlevel=warn ts=2021-03-08T20:32:31.229Z caller=cpu_linux.go:247 collector=cpu msg="CPU Idle counter jumped backwards, possible hotplug event, resetting CPU stats" cpu=2 old_value=1.097667619e+07 new_value=1.09766428e+07\nlevel=warn ts=2021-03-08T20:32:31.229Z caller=cpu_linux.go:247 collector=cpu msg="CPU Idle counter jumped backwards, possible hotplug event, resetting CPU stats" cpu=3 old_value=1.102438945e+07 new_value=1.102435437e+07\n\n')),(0,n.kt)("p",null,"\u539f\u56e0\uff1anode-exporter 1.0.0 \u7248\u672c\u7684\u95ee\u9898\uff0c\u5728\u4e0b\u4e00\u4e2a\u7248\u672c\uff0c\u5c06\u8be5\u4fe1\u606f\u8c03\u6574\u4e3a\u4e86 debug \u7ea7\u522b\u3002"),(0,n.kt)("p",null,"\u89e3\u51b3\u529e\u6cd5\uff1a \u5347\u7ea7 node-exporter \u7248\u672c\u5230 1.1.0+ "),(0,n.kt)("p",null,"\u53c2\u8003\u94fe\u63a5"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter/issues/1903"},"https://github.com/prometheus/node_exporter/issues/1903")))}m.isMDXComponent=!0}}]);