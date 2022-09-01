"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6130],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,x=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(x,p(p({ref:t},i),{},{components:r})):n.createElement(x,p({ref:t},i))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91121:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},p="Statsd Exporter",s={unversionedId:"prometheus/Exporter/3.27-statsd-exporter",id:"prometheus/Exporter/3.27-statsd-exporter",title:"Statsd Exporter",description:"StatsD Exporter \u63a5\u6536 StatsD \u98ce\u683c\u7684\u6307\u6807\u7136\u540e\u8f6c\u6362\u6210 Prometheus \u683c\u5f0f\u7684\u6307\u6807\u5410\u7ed9 Prometheus \u3002 \u8fd9\u4e2a\u7ec4\u4ef6\u662f Prometheus \u5b98\u65b9\u7ef4\u62a4\u7684\uff0c\u4ed3\u5e93\u5730\u5740\u662f\uff1a https://github.com/prometheus/statsd_exporter \uff0c\u6700\u65b0\u7248\u672c\u662f v0.22.4 \uff0c\u53d1\u5e03\u4e8e 2021 \u5e74 11 \u6708 26 \u65e5\u3002",source:"@site/wiki/ops/prometheus/03-Exporter/3.27-statsd-exporter.md",sourceDirName:"prometheus/03-Exporter",slug:"/prometheus/Exporter/3.27-statsd-exporter",permalink:"/zhengxuexian_blog/ops/prometheus/Exporter/3.27-statsd-exporter",draft:!1,tags:[],version:"current",lastUpdatedBy:"zhengxuexian",lastUpdatedAt:1661407442,formattedLastUpdatedAt:"2022\u5e748\u670825\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HAProxy Exporter",permalink:"/zhengxuexian_blog/ops/prometheus/Exporter/3.26-haproxy-exporter"},next:{title:"Memcached Exporter",permalink:"/zhengxuexian_blog/ops/prometheus/Exporter/3.28-memcached-exporter"}},u={},l=[],i={toc:l};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"statsd-exporter"},"Statsd Exporter"),(0,o.kt)("p",null,"StatsD Exporter \u63a5\u6536 StatsD \u98ce\u683c\u7684\u6307\u6807\u7136\u540e\u8f6c\u6362\u6210 Prometheus \u683c\u5f0f\u7684\u6307\u6807\u5410\u7ed9 Prometheus \u3002 \u8fd9\u4e2a\u7ec4\u4ef6\u662f Prometheus \u5b98\u65b9\u7ef4\u62a4\u7684\uff0c\u4ed3\u5e93\u5730\u5740\u662f\uff1a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus/statsd_exporter"},"https://github.com/prometheus/statsd_exporter")," \uff0c\u6700\u65b0\u7248\u672c\u662f v0.22.4 \uff0c\u53d1\u5e03\u4e8e 2021 \u5e74 11 \u6708 26 \u65e5\u3002"),(0,o.kt)("p",null,"StatsD Exporter \u662f StatsD \u7684\u4e34\u65f6\u66ff\u4ee3\u54c1\u3002\u8be5 Exporter \u901a\u8fc7\u914d\u7f6e\u7684\u6620\u5c04\u89c4\u5219\u5c06 StatsD \u6307\u6807\u8f6c\u6362\u4e3a Prometheus \u6307\u6807\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u5efa\u8bae StatsD Exporter \u662f\u4e00\u4e2a\u77ed\u671f\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5728\u957f\u671f\u8303\u56f4\u5185\u8fd8\u662f\u91c7\u7528 Prometheus \u76f4\u63a5\u91c7\u96c6\u6bd4\u8f83\u597d\u3002StatsD \u670d\u52a1\u901a\u5e38\u662f\u96c6\u4e2d\u8fd0\u884c\uff0c\u4f46\u662f Exporter \u6700\u597d\u662f\u4f5c\u4e3a Sidecar \u8fd0\u884c\u3002"),(0,o.kt)("h1",{id:"\u4ece\u73b0\u6709\u7684statsd\u8bbe\u7f6e\u8f6c\u6362"},"\u4ece\u73b0\u6709\u7684StatsD\u8bbe\u7f6e\u8f6c\u6362"),(0,o.kt)("p",null,"\u5728 Kubernetes \u4e2d\uff0c\u53ef\u4ee5\u5c06\u5b83\u6dfb\u52a0\u5230 Pod \u4e2d\uff0c\u901a\u8fc7\u5c06 StatsD Exporter \u4f5c\u4e3a Sidecar \u6dfb\u52a0\u5230\u5e94\u7528\u7a0b\u5e8f\u5b9e\u4f8b\u4e2d\u6765\u5f15\u5165\u5b83\u3002\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"--statsd.relay.address")," \u8f6c\u53d1\u6307\u6807\u5230\u73b0\u6709\u7684 StatsD UDP \u63a5\u53e3\u3002\u8f6c\u53d1\u672a\u4fee\u6539\u7684 statsd \u4e8b\u4ef6\uff0c\u4ee5\u4efb\u4f55\u683c\u5f0f\u4fdd\u5b58\u539f\u59cb\u5ea6\u91cf\u540d\u79f0\u548c\u6807\u8bb0\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-------------+    +----------+                  +------------+\n| Application +---\x3e| Exporter +-----------------\x3e|  StatsD    |\n+-------------+    +----------+                  +------------+\n                          ^\n                          |                      +------------+\n                          +----------------------+ Prometheus |\n                                                 +------------+\n\n")),(0,o.kt)("h1",{id:"\u4ece-statsd-\u4f20\u9001"},"\u4ece StatsD \u4f20\u9001"),(0,o.kt)("p",null,"\u8981\u4ece\u73b0\u6709\u7684 StatsD \u73af\u5883\u5c06\u6307\u6807\u4f20\u8f93\u5230 Prometheus\uff0c\u9700\u8981\u914d\u7f6e StatsD \u7684 repeater \u540e\u7aef\uff0c\u5c06\u6240\u6709\u63a5\u6536\u5230\u7684\u6307\u6807\u91cd\u590d\u5230  statsd_exporter \u8fdb\u7a0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+----------+                         +-------------------+                        +--------------+\n|  StatsD  |---(UDP/TCP repeater)---\x3e|  statsd_exporter  |<---(scrape /metrics)---|  Prometheus  |\n+----------+                         +-------------------+                        +--------------+\n\n")),(0,o.kt)("p",null,"\u8fd9\u6837\u53ef\u4ee5\u4ee5\u6700\u5c0f\u7684\u6210\u672c\u5bfc\u51fa\uff0c\u4f46\u662f\u4e0d\u4e3a\u6bcf\u4e2a\u5b9e\u4f8b\u63d0\u4f9b Sidecar \u6a21\u5f0f\u3002"),(0,o.kt)("h1",{id:"\u6269\u5c55\u6807\u7b7e"},"\u6269\u5c55\u6807\u7b7e"),(0,o.kt)("p",null,"\u8fd9\u4e2a Exporter \u652f\u6301 Librato\u3001fluxdb\u3001DogStatsD \u548c Signalfx \u98ce\u683c\u7684\u6807\u7b7e\uff0c\u8fd9\u4e9b\u6807\u7b7e\u5c06\u88ab\u8f6c\u6362\u4e3a Prometheus \u7684 label \u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e Influxdb \u6837\u5f0f\u7684\u6807\u8bb0\uff0c\u5b83\u4eec\u5fc5\u987b\u5728\u6307\u6807\u540d\u79f0\u540e\u9644\u52a0\u4e00\u4e2a\u5206\u9694\u9017\u53f7\uff0c\u5982\u4e0b\u6240\u793a:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"metric.name,tagName=val,tag2Name=val2:0|c\n")),(0,o.kt)("p",null,"\u5176\u4ed6\u4e0d\u540c\u7684\u6837\u5f0f\u90fd\u6709\u4e0d\u540c\u7684\u89c4\u5b9a\u3002"))}c.isMDXComponent=!0}}]);