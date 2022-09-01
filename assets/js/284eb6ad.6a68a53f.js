"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1468],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,k=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,o(o({ref:t},i),{},{components:n})):a.createElement(k,o({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={},o="\u67e5\u8be2 Prometheus \u7ba1\u7406\u5458\u63a5\u53e3",p={unversionedId:"prometheus/PromQL/5.7-querying-http-admin-api",id:"prometheus/PromQL/5.7-querying-http-admin-api",title:"\u67e5\u8be2 Prometheus \u7ba1\u7406\u5458\u63a5\u53e3",description:"Prometheus \u6709\u5f88\u591a\u63a5\u53e3\u53ef\u4ee5\u67e5\u8be2\u81ea\u5df1\u7684\u72b6\u6001\uff0c\u8fd9\u4e9b\u63a5\u53e3\u53ef\u4ee5\u7528\u5728\u4e0d\u540c\u7684\u573a\u666f\u91cc\u3002",source:"@site/wiki/ops/prometheus/05-PromQL/5.7-querying-http-admin-api.md",sourceDirName:"prometheus/05-PromQL",slug:"/prometheus/PromQL/5.7-querying-http-admin-api",permalink:"/zhengxuexian_blog/ops/prometheus/PromQL/5.7-querying-http-admin-api",draft:!1,tags:[],version:"current",lastUpdatedBy:"zhengxuexian",lastUpdatedAt:1662026865,formattedLastUpdatedAt:"2022\u5e749\u67081\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prometheus HTTP API \u67e5\u8be2",permalink:"/zhengxuexian_blog/ops/prometheus/PromQL/5.6-querying-http-api"},next:{title:"\u5c0f\u7ed3",permalink:"/zhengxuexian_blog/ops/prometheus/PromQL/END"}},u={},s=[{value:"\u67e5\u770b\u914d\u7f6e",id:"\u67e5\u770b\u914d\u7f6e",level:2},{value:"\u67e5\u770b Prometheus \u53c2\u6570",id:"\u67e5\u770b-prometheus-\u53c2\u6570",level:2},{value:"\u8fd0\u884c\u4fe1\u606f",id:"\u8fd0\u884c\u4fe1\u606f",level:2},{value:"\u6784\u5efa\u4fe1\u606f",id:"\u6784\u5efa\u4fe1\u606f",level:2},{value:"TSDB \u72b6\u6001",id:"tsdb-\u72b6\u6001-1",level:2},{value:"WAL Reply \u72b6\u6001",id:"wal-reply-\u72b6\u6001",level:2}],i={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u67e5\u8be2-prometheus-\u7ba1\u7406\u5458\u63a5\u53e3"},"\u67e5\u8be2 Prometheus \u7ba1\u7406\u5458\u63a5\u53e3"),(0,r.kt)("p",null,"Prometheus \u6709\u5f88\u591a\u63a5\u53e3\u53ef\u4ee5\u67e5\u8be2\u81ea\u5df1\u7684\u72b6\u6001\uff0c\u8fd9\u4e9b\u63a5\u53e3\u53ef\u4ee5\u7528\u5728\u4e0d\u540c\u7684\u573a\u666f\u91cc\u3002"),(0,r.kt)("h2",{id:"\u67e5\u770b\u914d\u7f6e"},"\u67e5\u770b\u914d\u7f6e"),(0,r.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u63a5\u53e3\u53ef\u4ee5\u770b\u5230 Prometheus \u5f53\u524d\u52a0\u8f7d\u751f\u6548\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/v1/status/config\n")),(0,r.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u4f1a\u4ee5 YAML \u683c\u5f0f\u8fd4\u56de\uff0c\u5e76\u4e14\u7531\u4e8e YAML \u5e93\u6587\u4ef6\u7684\u9650\u5236\uff0c\u539f\u59cb\u6587\u4ef6\u4e2d\u6240\u6709\u6ce8\u91ca\u7684\u5185\u5bb9\u90fd\u4e0d\u4f1a\u51fa\u73b0\u5728\u8fd9\u4e2a\u6587\u4ef6\u91cc\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ curl http://localhost:9090/api/v1/status/config\n{\n  "status": "success",\n  "data": {\n    "yaml": "<content of the loaded config file in YAML>",\n  }\n}\n')),(0,r.kt)("h2",{id:"\u67e5\u770b-prometheus-\u53c2\u6570"},"\u67e5\u770b Prometheus \u53c2\u6570"),(0,r.kt)("p",null,"Prometheus \u542f\u52a8\u4ee5\u540e\u4f1a\u6709\u5f88\u591a\u53c2\u6570\u4ee5\u6307\u5b9a\u503c\u6216\u8005\u7f3a\u7701\u503c\u7684\u65b9\u5f0f\u751f\u6548\uff0c\u8fd9\u4e2a\u63a5\u53e3\u53ef\u4ee5\u67e5\u770b Prometheus \u7684\u8fd9\u4e9b\u53c2\u6570\u548c\u5bf9\u5e94\u7684\u503c\u3002\u8fd9\u4e2a\u63a5\u53e3\u5728 v2.2 \u7248\u672c\u4ee5\u540e\u624d\u6709\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/v1/status/flags\n")),(0,r.kt)("p",null,"\u6574\u4f53\u7684\u7ed3\u679c\u4ee5 JSON \u683c\u5f0f\u8fd4\u56de\uff0c\u542f\u52a8\u7684\u53c2\u6570\u4ee5 key/value \u5f62\u5f0f\u5c55\u793a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ curl http://localhost:9090/api/v1/status/flags\n{\n  "status": "success",\n  "data": {\n    "alertmanager.notification-queue-capacity": "10000",\n    "alertmanager.timeout": "10s",\n    "log.level": "info",\n    "query.lookback-delta": "5m",\n    "query.max-concurrency": "20",\n    ...\n  }\n}\n')),(0,r.kt)("h2",{id:"\u8fd0\u884c\u4fe1\u606f"},"\u8fd0\u884c\u4fe1\u606f"),(0,r.kt)("p",null,"Prometheus \u5728\u542f\u52a8\u540e\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u63a5\u53e3\u6765\u67e5\u770b\u4ed6\u7684\u8fd0\u884c\u4fe1\u606f\uff0c\u6bd4\u5982\u542f\u52a8\u65f6\u95f4\u3001\u6700\u540e\u4e00\u6b21\u52a0\u8f7d\u914d\u7f6e\u7684\u65f6\u95f4\u3001Go \u8fdb\u7a0b\u7684\u6570\u91cf\u7b49\u7b49\u8fd9\u4e9b\u4fe1\u606f\u3002\u8fd9\u4e2a\u63a5\u53e3\u8981\u5728 v2.14 \u7248\u672c\u4ee5\u540e\u624d\u4f1a\u6709\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/v1/status/runtimeinfo\n\n")),(0,r.kt)("p",null,"\u6574\u4f53\u7684\u7ed3\u679c\u4ee5 JSON \u683c\u5f0f\u8fd4\u56de\uff0c\u8fd0\u884c\u7684\u4ee5 key/value \u5f62\u5f0f\u5c55\u793a\uff0c\u6bcf\u79cd\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e5f\u4e0d\u540c\u3002\u53e6\u5916\u8fd9\u4e2a\u63a5\u53e3\u8fd4\u56de\u7684\u5185\u5bb9\u968f\u7740 Prometheus \u7248\u672c\u7684\u4e0d\u540c\u4f1a\u6709\u4e00\u5b9a\u7684\u5dee\u5f02\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ curl http://localhost:9090/api/v1/status/runtimeinfo\n{\n    "status":"success",\n    "data":{\n        "startTime":"2021-11-09T15:27:20.210039183Z",\n        "CWD":"/prometheus",\n        "reloadConfigSuccess":true,\n        "lastConfigTime":"2021-11-11T10:38:18Z",\n        "corruptionCount":0,\n        "goroutineCount":209,\n        "GOMAXPROCS":40,\n        "GOGC":"",\n        "GODEBUG":"",\n        "storageRetention":"10d"\n    }\n}\n')),(0,r.kt)("h2",{id:"\u6784\u5efa\u4fe1\u606f"},"\u6784\u5efa\u4fe1\u606f"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u63a5\u53e3\u4f1a\u8fd4\u56de Prometheus \u7684\u6784\u5efa\u4fe1\u606f\uff0c\u5305\u62ec\u5f53\u524d\u7248\u672c\u3001Git Commit ID\u3001Git \u5206\u652f\u540d\u79f0\u3001\u6784\u5efa\u65f6\u95f4\u3001\u6784\u5efa\u4eba\u3001Go \u7684\u7248\u672c\u7b49\u4fe1\u606f\uff0c\u8fd9\u4e2a\u63a5\u53e3\u662f\u5728 v2.14 \u4ee5\u540e\u624d\u6709\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/v1/status/buildinfo\n")),(0,r.kt)("p",null,"\u6240\u6709\u7684\u7ed3\u675f\u4f1a\u4ee5 JSON \u7684 \u683c\u5f0f\u8fd4\u56de\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ curl http://localhost:9090/api/v1/status/buildinfo\n{\n    "status":"success",\n    "data":{\n        "version":"2.29.1",\n        "revision":"dcb07e8eac34b5ea37cd229545000b857f1c1637",\n        "branch":"HEAD",\n        "buildUser":"root@364730518a4e",\n        "buildDate":"20210811-14:48:27",\n        "goVersion":"go1.16.7"\n    }\n}\n')),(0,r.kt)("h1",{id:"tsdb-\u72b6\u6001"},"TSDB \u72b6\u6001"),(0,r.kt)("h2",{id:"tsdb-\u72b6\u6001-1"},"TSDB \u72b6\u6001"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u63a5\u53e3\u4f1a\u8fd4\u56de\u5173\u4e8e Prometheus TSDB \u7684\u5404\u79cd\u57fa\u6570\u7edf\u8ba1\u4fe1\u606f\uff0c\u4ece v2.15 \u5f00\u59cb\u8fd9\u4e2a\u63a5\u53e3\u624d\u6b63\u5f0f\u542f\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/v1/status/tsdb\n")),(0,r.kt)("p",null,"\u63a5\u53e3\u8fd4\u56de\u7684\u4fe1\u606f\u4f1a\u5305\u542b\u4ee5\u4e0b\u6307\u6807"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"headStats: \u63d0\u4f9b\u4e86 TSDB \u6570\u636e\u5757\u7684 head \u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"numSeries: serie \u7684\u6570\u91cf."),(0,r.kt)("li",{parentName:"ul"},"chunkCount: chunk \u7684\u6570\u91cf."),(0,r.kt)("li",{parentName:"ul"},"minTime: \u5f53\u524d\u6700\u5c0f\u65f6\u95f4\u6233\uff0c\u5355\u4f4d\u662f\u6beb\u79d2."),(0,r.kt)("li",{parentName:"ul"},"maxTime: \u5f53\u524d\u6700\u5927\u65f6\u95f4\u6233\uff0c\u5355\u4f4d\u662f\u6beb\u79d2."),(0,r.kt)("li",{parentName:"ul"},"seriesCountByMetricName: \u8fd9\u5c06\u63d0\u4f9b\u6307\u6807\u540d\u79f0\u53ca\u5176 serie \u8ba1\u6570\u7684\u5217\u8868\u3002"),(0,r.kt)("li",{parentName:"ul"},"labelValueCountByLabelName: \u8fd9\u5c06\u63d0\u4f9b Label \u540d\u79f0\u53ca\u5176\u503c\u8ba1\u6570\u7684\u5217\u8868\u3002"),(0,r.kt)("li",{parentName:"ul"},"memoryInBytesByLabelName : \u8fd9\u5c06\u63d0\u4f9b\u4e00\u4e2a Label \u540d\u79f0\u5217\u8868\u548c\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\u3002\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\u662f\u901a\u8fc7\u5c06\u7ed9\u5b9a Label \u540d\u79f0\u7684\u6240\u6709\u503c\u7684\u957f\u5ea6\u76f8\u52a0\u6765\u8ba1\u7b97\u7684\u3002"),(0,r.kt)("li",{parentName:"ul"},"seriesCountByLabelPair : \u8fd9\u5c06\u63d0\u4f9b Label \u503c\u5bf9\u53ca\u5176 serie \u8ba1\u6570\u7684\u5217\u8868")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ curl http://localhost:9090/api/v1/status/tsdb\n{\n  "status": "success",\n  "data": {\n    "headStats": {\n      "numSeries": 508,\n      "chunkCount": 937,\n      "minTime": 1591516800000,\n      "maxTime": 1598896800143,\n    },\n    "seriesCountByMetricName": [\n      {\n        "name": "net_conntrack_dialer_conn_failed_total",\n        "value": 20\n      },\n      {\n        "name": "prometheus_http_request_duration_seconds_bucket",\n        "value": 20\n      }\n    ],\n    "labelValueCountByLabelName": [\n      {\n        "name": "__name__",\n        "value": 211\n      },\n      {\n        "name": "event",\n        "value": 3\n      }\n    ],\n    "memoryInBytesByLabelName": [\n      {\n        "name": "__name__",\n        "value": 8266\n      },\n      {\n        "name": "instance",\n        "value": 28\n      }\n    ],\n    "seriesCountByLabelValuePair": [\n      {\n        "name": "job=prometheus",\n        "value": 425\n      },\n      {\n        "name": "instance=localhost:9090",\n        "value": 425\n      }\n    ]\n  }\n}\n\n')),(0,r.kt)("h2",{id:"wal-reply-\u72b6\u6001"},"WAL Reply \u72b6\u6001"),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u6bd4\u8f83\u65b0\u7684\u63a5\u53e3\uff0c\u4ece v2.28 \u624d\u5f00\u59cb\u4f7f\u7528\uff0c\u8fd9\u4e2a\u63a5\u53e3\u4f1a\u8fd4\u56de TSDB WALReply \u7684\u72b6\u6001\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/v1/status/walreplay\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ curl http://localhost:9090/api/v1/status/walreplay\n{\n    "status":"success",\n    "data":{\n        "min":11704,\n        "max":11708,\n        "current":11708,\n        "state": "in progress"\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"read : \u5230\u76ee\u524d\u4e3a\u6b62 Replay \u7684\u7247\u6bb5\u6570"),(0,r.kt)("li",{parentName:"ul"},"total: \u9700\u8981 replayed \u7684\u603b\u6570"),(0,r.kt)("li",{parentName:"ul"},"progress: repay \u7684\u8fdb\u5ea6\uff0c0 - 100% \u3002"),(0,r.kt)("li",{parentName:"ul"},"state: repay \u7684\u72b6\u6001\uff0c\u53ef\u80fd\u4f1a\u4ece\u5728\u8fd9\u51e0\u79cd\uff0cwaiting\u3001in progress\u3001done \u3002\u4e5f\u6709\u53ef\u80fd\u4e0d\u663e\u793a\u72b6\u6001\u4fe1\u606f\u3002 waiting  \u662f\u7b49\u5f85\u542f\u52a8\u3002 in progress \u662f\u8fdb\u884c\u4e2d\uff0cdone \u662f\u7ed3\u675f\u3001\u5b8c\u6210\u3002")),(0,r.kt)("h1",{id:"prometheus-\u7ba1\u7406\u5458\u63a5\u53e3"},"Prometheus \u7ba1\u7406\u5458\u63a5\u53e3"),(0,r.kt)("p",null,"Prometheus \u73b0\u5728\u6709 \u4e00\u4e9b\u63a5\u53e3\u662f\u4e13\u95e8\u7ed9\u7ba1\u7406\u5458\u4f7f\u7528\u7684\uff0c\u8fd9\u4e9b\u63a5\u53e3\u9ed8\u8ba4\u662f\u4e0d\u5f00\u542f\u7684\uff0c\u9700\u8981\u5728\u542f\u52a8\u7684\u65f6\u5019\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"--web.enable-admin-api")," \u6765\u6253\u5f00\u3002\u8fd9\u4e9b\u63a5\u53e3\u5206\u4e3a\u64cd\u4f5c\u7c7b\u548c\u67e5\u8be2\u7c7b\u3002"),(0,r.kt)("h1",{id:"\u5feb\u7167"},"\u5feb\u7167"),(0,r.kt)("p",null,"\u5feb\u7167\u63a5\u53e3\u53ef\u4ee5\u9488\u5bf9\u5f53\u524d\u7684\u6570\u636e\u521b\u5efa\u4e00\u4e2a\u5feb\u7167\uff0c\u8fd9\u4e2a\u521b\u5efa\u597d\u7684\u5feb\u7167\u4f1a\u5b58\u50a8\u5728 TSDB \u7684\u6570\u636e\u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshots/<datetime>-<rand>")," \uff0c\u5e76\u4e14\u5c06\u521b\u5efa\u597d\u7684\u76ee\u5f55\u901a\u8fc7 HTTP \u7684 response \u8fd4\u56de\u3002\u5b83\u53ef\u4ee5\u9009\u62e9\u6027\u5730\u8df3\u8fc7\u53ea\u51fa\u73b0\u5728\u5934\u5757\u4e2d\u3001\u8fd8\u6ca1\u6709\u538b\u7f29\u5230\u78c1\u76d8\u7684\u5feb\u7167\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST /api/v1/admin/tsdb/snapshot\nPUT /api/v1/admin/tsdb/snapshot\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u63a5\u53e3\u6709\u4e00\u4e2a URL \u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"skip_head=<bool>")," \uff0c\u8fd9\u4e2a\u53c2\u6570\u662f\u53ef\u9009\u7684\uff0c\u901a\u8fc7\u8fd9\u4e2a\u53c2\u6570\u53ef\u4ee5\u8df3\u8fc7\u5934\u5757\u4e2d\u7684\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ curl -X POST http://localhost:9090/api/v1/admin/tsdb/snapshot\n{\n  "status": "success",\n  "data": {\n    "name": "20171210T211224Z-2be650b6d019eb54"\n  }\n}\n')),(0,r.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u54cd\u5e94\u6211\u4eec\u53ef\u4ee5\u77e5\u9053\u5feb\u7167\u4f1a\u5b58\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"<data-dir>/snapshots/20171210T211224Z-2be650b6d019eb54")," \u3002"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u63a5\u53e3\u5728 v2.1 \u7248\u672c\u4ee5\u540e\u624d\u53ef\u4ee5\u4f7f\u7528\uff0c\u5728 v2.9 \u7248\u672c\u4ee5\u540e\u624d\u652f\u6301 PUT \u6a21\u5f0f\u3002"),(0,r.kt)("h1",{id:"\u5220\u9664-series"},"\u5220\u9664 Series"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u63a5\u53e3\u4f1a\u5220\u9664\u65f6\u95f4\u8303\u56f4\u5185\u4e00\u7cfb\u5217\u9009\u62e9\u7684\u6570\u636e\u3002\u6267\u884c\u64cd\u4f5c\u4ee5\u540e\uff0c\u5b9e\u9645\u6570\u636e\u4ecd\u7136\u5b58\u5728\u4e8e\u78c1\u76d8\u4e0a\uff0c\u5e76\u6ca1\u6709\u88ab\u5220\u9664\uff0c\u5728\u4ee5\u540e\u7684\u538b\u7f29\u4e2d\u4f1a\u88ab\u6e05\u7406\u3002\u5982\u679c\u60f3\u8981\u7acb\u5373\u6e05\u7406\u90a3\u4e48\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Clean Tombstones")," \u6765\u7acb\u5373\u5220\u9664\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u63a5\u53e3\u6267\u884c\u6210\u529f\uff0c\u8fd4\u56de\u7684 HTTP \u4ee3\u7801\u662f  204 \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST /api/v1/admin/tsdb/delete_series\nPUT /api/v1/admin/tsdb/delete_series\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u63a5\u53e3\u6709\u4e09\u4e2a URL \u53c2\u6570\u53ef\u4ee5\u4f7f\u7528\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"match[]=<series_selector> \uff1a\u9009\u62e9\u8981\u5220\u9664\u7684 Series \u7684\u91cd\u590d\u6807\u7b7e\u5339\u914d\u5668\u53c2\u6570\u3002\u53ca\u8981\u5220\u9664\u7684\u6307\u6807\uff0c\u8fd9\u4e2a\u53c2\u6570\u662f\u4e2a\u5fc5\u8981\u53c2\u6570\uff0c\u6700\u5c11\u63d0\u4ea4\u4e00\u4e2a\u624d\u53ef\u4ee5\u3002"),(0,r.kt)("li",{parentName:"ul"},"start=<rfc3339 | unix_timestamp> \uff1a \u5f00\u59cb\u65f6\u95f4\u6233\u3002\u7f3a\u7701\u662f\u6700\u5c0f\u7684\u65f6\u95f4\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},"end=<rfc3339 | unix_timestamp> \uff1a\u7ed3\u675f\u65f6\u95f4\u6233\u3002\u7f3a\u7701\u662f\u6700\u5927\u7684\u65f6\u95f4\u503c\u3002")),(0,r.kt)("p",null,"\u4e0d\u540c\u65f6\u63d0\u5230\u5f00\u59cb\u548c\u7ed3\u675f\u65f6\u95f4\u5c06\u6e05\u9664\u6570\u636e\u5e93\u4e2d\u5339\u914d\u5e8f\u5217\u7684\u6240\u6709\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ curl -X POST \\\n  -g 'http://localhost:9090/api/v1/admin/tsdb/delete_series?match[]=up&match[]=process_start_time_seconds{job=\"prometheus\"}'\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u63a5\u53e3\u5728 v2.1 \u7248\u672c\u4ee5\u540e\u624d\u53ef\u4ee5\u4f7f\u7528\uff0c\u5728 v2.9 \u7248\u672c\u4ee5\u540e\u624d\u652f\u6301 PUT \u6a21\u5f0f\u3002"),(0,r.kt)("h1",{id:"\u6e05\u7406-tombstones"},"\u6e05\u7406 Tombstones"),(0,r.kt)("p",null,"CleanTombstones \u4f1a\u5c06\u8981\u5220\u9664\u7684\u6570\u636e\u4ece\u78c1\u76d8\u4e0a\u5220\u9664\uff0c\u5e76\u6e05\u9664\u73b0\u6709\u7684 Tombstones \u3002\u8fd9\u53ef\u4ee5\u5728\u5220\u9664\u5e8f\u5217\u540e\u4f7f\u7528\uff0c\u4ee5\u91ca\u653e\u7a7a\u95f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST /api/v1/admin/tsdb/clean_tombstones\nPUT /api/v1/admin/tsdb/clean_tombstones\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u63a5\u53e3\u6ca1\u6709\u53c2\u6570\uff0c\u4e5f\u6ca1\u6709 HTTP \u7684 body \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ curl -X POST http://localhost:9090/api/v1/admin/tsdb/clean_tombstones\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u63a5\u53e3\u5728 v2.1 \u7248\u672c\u4ee5\u540e\u624d\u53ef\u4ee5\u4f7f\u7528\uff0c\u5728 v2.9 \u7248\u672c\u4ee5\u540e\u624d\u652f\u6301 PUT \u6a21\u5f0f\u3002"),(0,r.kt)("h1",{id:"\u5065\u5eb7\u68c0\u67e5"},"\u5065\u5eb7\u68c0\u67e5"),(0,r.kt)("p",null,"Prometheus \u63d0\u4f9b\u4e86\u4e00\u4e2a\u63a5\u53e3\uff0c\u8fd9\u4e2a\u63a5\u53e3\u4f1a\u5728 Prometheus \u5904\u4e8e\u5065\u5eb7\u72b6\u6001\u7684\u65f6\u5019\u8fd4\u56de 200 \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /-/healthy\n")),(0,r.kt)("h1",{id:"\u670d\u52a1\u51c6\u5907\u68c0\u67e5"},"\u670d\u52a1\u51c6\u5907\u68c0\u67e5"),(0,r.kt)("p",null,"Prometheus \u63d0\u4f9b\u4e86\u4e00\u4e2a\u63a5\u53e3\uff0c\u8fd9\u4e2a\u63a5\u53e3\u4f1a\u5728 Prometheus \u5904\u4e8e\u53ef\u4ee5\u63d0\u4f9b\u670d\u52a1\u7684\u65f6\u5019\u8fd4\u56de 200 \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /-/ready\n")),(0,r.kt)("h1",{id:"\u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e"},"\u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e"),(0,r.kt)("p",null,"Prometheus \u63d0\u4f9b\u4e86\u4e00\u4e2a\u63a5\u53e3\uff0c\u8fd9\u4e2a\u63a5\u53e3\u4f1a\u5728\u91cd\u65b0\u52a0\u8f7d Prometheus \u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u8fd9\u4e2a\u65f6\u5019\u5728 Prometheus \u6570\u636e\u6587\u4ef6\u7279\u522b\u5927\u7684\u65f6\u5019\u7279\u522b\u6709\u7528\uff0cTSDB \u592a\u5927\u4ee5\u540e\u91cd\u65b0\u542f\u52a8 Prometheus Server \u4f1a\u8017\u8d39\u5927\u91cf\u7684\u65f6\u95f4\uff0c\u800c\u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u4f1a\u7279\u522b\u5feb \u3002"),(0,r.kt)("p",null,"\u60f3\u8981\u4f7f\u7528\u8fd9\u4e2a\u63a5\u53e3\u9700\u8981\u5728\u542f\u52a8 Prometheus \u7684\u65f6\u5019\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"--web.enable-lifecycle")," \u53c2\u6570\u6765\u6253\u5f00\u8fd9\u4e2a\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u6216\u8005\uff0c\u53ef\u4ee5\u901a\u8fc7\u5411 Prometheus \u8fdb\u7a0b\u53d1\u9001 ",(0,r.kt)("inlineCode",{parentName:"p"},"SIGHUP")," \u4fe1\u53f7\u6765\u89e6\u53d1\u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PUT  /-/reload\nPOST /-/reload\n")),(0,r.kt)("h1",{id:"\u9000\u51fa"},"\u9000\u51fa"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u63a5\u53e3\u4f1a\u89e6\u53d1 Prometheus \u8fdb\u884c\u4f18\u96c5\u5173\u95ed\u5b83\u81ea\u5df1\u3002\u8fd9\u4e2a\u63a5\u53e3\u9ed8\u8ba4\u7981\u7528\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"--web.enable-lifecycle")," \u53c2\u6570\u6765\u6253\u5f00\u8fd9\u4e2a\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u6216\u8005\uff0c\u53ef\u4ee5\u901a\u8fc7\u5411 Prometheus \u8fdb\u7a0b\u53d1\u9001 ",(0,r.kt)("inlineCode",{parentName:"p"},"SIGTERM")," \u4fe1\u53f7\u6765\u89e6\u53d1\u4f18\u96c5\u7684\u5173\u95ed\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PUT  /-/quit\nPOST /-/quit\n\n")))}m.isMDXComponent=!0}}]);