"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9127],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>y});var o=t(67294);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,p=function(e,r){if(null==e)return{};var t,o,p={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var l=o.createContext({}),u=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},i=function(e){var r=u(e.components);return o.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},x=o.forwardRef((function(e,r){var t=e.components,p=e.mdxType,n=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),x=u(t),y=p,m=x["".concat(l,".").concat(y)]||x[y]||c[y]||n;return t?o.createElement(m,a(a({ref:r},i),{},{components:t})):o.createElement(m,a({ref:r},i))}));function y(e,r){var t=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var n=t.length,a=new Array(n);a[0]=x;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:p,a[1]=s;for(var u=2;u<n;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}x.displayName="MDXCreateElement"},4836:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var o=t(87462),p=(t(67294),t(3905));const n={},a="HAProxy Exporter",s={unversionedId:"prometheus/Exporter/3.26-haproxy-exporter",id:"prometheus/Exporter/3.26-haproxy-exporter",title:"HAProxy Exporter",description:"HAProxy Exporter \u662f\u4e00\u4e2a\u7b80\u5355\u7684\u670d\u52a1\uff0c\u5b83\u6293\u53d6HAProxy\u7edf\u8ba1\u6570\u636e\u5e76\u901a\u8fc7HTTP\u5bfc\u51fa\u5b83\u4eec\u4f9bPrometheus\u4f7f\u7528\u3002\u5b98\u65b9\u5730\u5740\u662f https://github.com/prometheus/haproxy_exporter \uff0c\u5f53\u524d\u6700\u65b0\u7248\u672c\u662f v0.13.0 \uff0c\u53d1\u5e03\u65f6\u95f4\u662f 2021 \u5e7411 \u6708 26 \u65e5\u3002",source:"@site/wiki/ops/prometheus/03-Exporter/3.26-haproxy-exporter.md",sourceDirName:"prometheus/03-Exporter",slug:"/prometheus/Exporter/3.26-haproxy-exporter",permalink:"/zhengxuexian_blog/ops/prometheus/Exporter/3.26-haproxy-exporter",draft:!1,tags:[],version:"current",lastUpdatedBy:"zhengxuexian",lastUpdatedAt:1661407442,formattedLastUpdatedAt:"2022\u5e748\u670825\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kong \u6307\u6807\u91c7\u96c6",permalink:"/zhengxuexian_blog/ops/prometheus/Exporter/3.25-kong-metrics"},next:{title:"Statsd Exporter",permalink:"/zhengxuexian_blog/ops/prometheus/Exporter/3.27-statsd-exporter"}},l={},u=[],i={toc:u};function c(e){let{components:r,...t}=e;return(0,p.kt)("wrapper",(0,o.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"haproxy-exporter"},"HAProxy Exporter"),(0,p.kt)("p",null,"HAProxy Exporter \u662f\u4e00\u4e2a\u7b80\u5355\u7684\u670d\u52a1\uff0c\u5b83\u6293\u53d6HAProxy\u7edf\u8ba1\u6570\u636e\u5e76\u901a\u8fc7HTTP\u5bfc\u51fa\u5b83\u4eec\u4f9bPrometheus\u4f7f\u7528\u3002\u5b98\u65b9\u5730\u5740\u662f ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/prometheus/haproxy_exporter"},"https://github.com/prometheus/haproxy_exporter")," \uff0c\u5f53\u524d\u6700\u65b0\u7248\u672c\u662f v0.13.0 \uff0c\u53d1\u5e03\u65f6\u95f4\u662f 2021 \u5e7411 \u6708 26 \u65e5\u3002"),(0,p.kt)("p",null,"\u81ea HAProxy 2.0.0 \u4ee5\u6765\uff0c\u4ed6\u7684\u5b98\u65b9\u6e90\u4ee3\u7801\u5305\u62ec\u4e00\u4e2a Prometheus \u5bfc\u51fa\u6a21\u5757\uff0c\u5b83\u53ef\u4ee5\u5728\u6784\u5efa\u671f\u95f4\u7528\u4e00\u4e2a\u6807\u5fd7\u6784\u5efa\u5230\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e2a\u4e0d\u9700\u8981\u5bfc\u51fa\u5668\u7684Prometheus\u7aef\u70b9\u3002"),(0,p.kt)("h1",{id:"\u5b89\u88c5\u8fd0\u884c"},"\u5b89\u88c5\u8fd0\u884c"),(0,p.kt)("p",null,"HAProxy Exporter \u8fd0\u884c\u4e5f\u975e\u5e38\u7b80\u5355\uff0c\u76f4\u63a5\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\u5c31\u53ef\u4ee5\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"./haproxy_exporter [flags]\n")),(0,p.kt)("p",null,"\u6216\u8005\u4f7f\u7528 Docker \u5bb9\u5668\u6765\u8fd0\u884c "),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'docker run -p 9101:9101 quay.io/prometheus/haproxy-exporter:v0.13.0 --haproxy.scrape-uri="http://user:pass@haproxy.example.com/haproxy?stats;csv"\n\n')),(0,p.kt)("h1",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,p.kt)("p",null,"\u5982\u679c\u4f60\u8bbe\u7f6e\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"stats uri /baz")," \uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"--haproxy.scrape-uri")," \u53c2\u6570\u7ed9 HAProxy \u7edf\u8ba1\u7aef\u53e3\u6307\u5b9a\u81ea\u5b9a\u4e49\u7684 URL \u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'haproxy_exporter --haproxy.scrape-uri="http://localhost:5000/baz?stats;csv"\n')),(0,p.kt)("p",null,"\u6216\u8005\u83b7\u53d6\u8fdc\u7aef\u7684 HAProxy \uff0c"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'haproxy_exporter --haproxy.scrape-uri="http://haproxy.example.com/haproxy?stats;csv"\n')),(0,p.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u4e2a\u53c2\u6570\u6700\u540e\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},":csv")," \u662f\u5fc5\u987b\u7684\uff0c\u6574\u4e2a\u53c2\u6570\u7684\u503c\u9700\u8981\u7528\u53cc\u5f15\u53f7\u5f15\u8d77\u6765\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u8fd9\u4e2a\u7edf\u8ba1\u63a5\u53e3\u6709 basic auth\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u7684\u65b9\u5f0f\u6765\u6307\u5b9a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'haproxy_exporter  --haproxy.scrape-uri="http://user:pass@haproxy.example.com/haproxy?stats;csv"\n')),(0,p.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5728\u83b7\u53d6\u6307\u6807\u7684\u65f6\u5019\u4f7f\u7528 HTTPS \u7684 URL \uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u542f\u7528\u8bc1\u4e66\u9a8c\u8bc1\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"--no-haproxy.ssl-verify")," \u53c2\u6570\u5173\u6389\u8bc1\u4e66\u9a8c\u8bc1\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'haproxy_exporter --no-haproxy.ssl-verify --haproxy.scrape-uri="https://haproxy.example.com/haproxy?stats;csv"\n')),(0,p.kt)("p",null,"\u9664\u4e86\u4f7f\u7528 HTTP \u7684\u65b9\u5f0f\u83b7\u53d6\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528 stats socket \u3002\u5728 HAProxy \u4e2d\u542f\u7528 stats socket \u5982\u4e0b:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"stats socket /run/haproxy/admin.sock mode 660 level admin\n")),(0,p.kt)("p",null,"\u914d\u7f6e\u7684\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"haproxy_exporter --haproxy.scrape-uri=unix:/run/haproxy/admin.sock\n")),(0,p.kt)("p",null,"HAProxy Exporter \u4e5f\u652f\u6301  TLS \u548c basic authentication \uff0c\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"--web.config.file")," \u53c2\u6570\uff0c\u683c\u5f0f\u63cf\u8ff0\u5728  exporter-toolkit \u4ed3\u5e93\u91cc\u3002"),(0,p.kt)("h1",{id:"haproxy-\u6784\u5efa\u76d1\u63a7\u63d2\u4ef6"},"HAProxy \u6784\u5efa\u76d1\u63a7\u63d2\u4ef6"),(0,p.kt)("p",null,"\u5728 HAProxy 2.0.0\u7248\u672c\u4e2d\uff0c\u5305\u542b\u4e00\u4e2aPrometheus \u76d1\u63a7\u6570\u636e\u5bfc\u51fa\u6a21\u5757\uff0c\u53ef\u4ee5\u5728\u6784\u5efa\u65f6\u5c06\u5176\u6784\u5efa\u5230\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\u3002\u8fd9\u662f\u901a\u8fc7\u4f20\u9012\u53c2\u6570\u6765\u5b9e\u73b0\u7684\uff0c\u8fd9\u4e2a\u53c2\u6570\u53d6\u51b3\u4e8eHAProxy\u7684\u7248\u672c:"),(0,p.kt)("p",null,"\u5728 HAProxy 2.0.x - 2.3.x \uff0c\u4f7f\u7528 EXTRA_OBJS \u53c2\u6570\u6765\u8fdb\u884c make \u6784\u5efa\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'make TARGET=linux-glibc EXTRA_OBJS="contrib/prometheus-exporter/service-prometheus.o"\n')),(0,p.kt)("p",null,"\u5728 HAProxy 2.4.x \u7248\u672c \uff0c\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"USE_PROMEX")," \u53c2\u6570\u6765\u8fdb\u884c make \u6784\u5efa\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"make TARGET=linux-glibc USE_PROMEX=1\n")),(0,p.kt)("p",null,"\u6784\u5efa\u6210\u529f\u4ee5\u540e\uff0c\u63a5\u53ef\u4ee5\u5728 HAProxy \u7684\u914d\u7f6e\u6587\u4ef6  haproxy.cfg \u4e2d\u4f7f\u7528\u4e0b\u9762\u7684\u8fd9\u4e2a\u6765\u914d\u7f6e\u6253\u5f00\u76d1\u63a7\u6570\u636e\u5bfc\u51fa\u4e86"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"frontend stats\n    bind *:8404\n    http-request use-service prometheus-exporter if { path /metrics }\n    stats enable\n    stats uri /stats\n    stats refresh 10s\n")),(0,p.kt)("h1",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,p.kt)("p",null,"HAProxy \u63d0\u4f9b\u4e86 2 \u79cd\u66b4\u9732\u76d1\u63a7\u6570\u636e\u7684\u65b9\u5f0f\uff0c\u91c7\u7528\u54ea\u4e00\u79cd\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u6765\u8fdb\u884c\u9009\u62e9\u3002"))}c.isMDXComponent=!0}}]);