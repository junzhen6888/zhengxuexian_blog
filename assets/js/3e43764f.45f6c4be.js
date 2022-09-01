"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,p(p({ref:t},c),{},{components:n})):r.createElement(h,p({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var i=2;i<a;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={},p="Json Exporter",l={unversionedId:"prometheus/Exporter/3.34-json-exporter",id:"prometheus/Exporter/3.34-json-exporter",title:"Json Exporter",description:"JSON (JavaScript Object Notation, JS \u5bf9\u8c61\u7b80\u8c31) \u662f\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u6570\u636e\u4ea4\u6362\u683c\u5f0f\u3002\u8fd9\u662f\u6211\u4eec\u7ecf\u5e38\u4f7f\u7528\u7684\u4e00\u79cd\u683c\u5f0f\uff0c\u9488\u5bf9\u8fd9\u79cd\u683c\u5f0f Prometheus \u793e\u533a\u5f00\u53d1\u63d0\u4f9b\u4e86 JSON Exporter \u901a\u8fc7 JSONPath \u6765\u83b7\u53d6\u8fdc\u7aef\u7684 JSON \u6570\u636e\u3002\u5b98\u65b9\u4ed3\u5e93\u5730\u5740\u662f https://github.com/prometheus-community/json_exporter \uff0c\u6700\u65b0\u7248\u672c\u662f v0.3.0 \uff0c\u53d1\u5e03\u4e8e 2021 \u5e74 2 \u6708 12 \u65e5\u3002",source:"@site/wiki/ops/prometheus/03-Exporter/3.34-json-exporter.md",sourceDirName:"prometheus/03-Exporter",slug:"/prometheus/Exporter/3.34-json-exporter",permalink:"/zhengxuexian_blog/ops/prometheus/Exporter/3.34-json-exporter",draft:!1,tags:[],version:"current",lastUpdatedBy:"zhengxuexian",lastUpdatedAt:1661407442,formattedLastUpdatedAt:"2022\u5e748\u670825\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Varnish Exporter",permalink:"/zhengxuexian_blog/ops/prometheus/Exporter/3.33-varnish-exporter"},next:{title:"BIND Exporter",permalink:"/zhengxuexian_blog/ops/prometheus/Exporter/3.35-bind-exporter"}},s={},i=[],c={toc:i};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"json-exporter"},"Json Exporter"),(0,o.kt)("p",null,"JSON (JavaScript Object Notation, JS \u5bf9\u8c61\u7b80\u8c31) \u662f\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u6570\u636e\u4ea4\u6362\u683c\u5f0f\u3002\u8fd9\u662f\u6211\u4eec\u7ecf\u5e38\u4f7f\u7528\u7684\u4e00\u79cd\u683c\u5f0f\uff0c\u9488\u5bf9\u8fd9\u79cd\u683c\u5f0f Prometheus \u793e\u533a\u5f00\u53d1\u63d0\u4f9b\u4e86 JSON Exporter \u901a\u8fc7 JSONPath \u6765\u83b7\u53d6\u8fdc\u7aef\u7684 JSON \u6570\u636e\u3002\u5b98\u65b9\u4ed3\u5e93\u5730\u5740\u662f ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/json_exporter"},"https://github.com/prometheus-community/json_exporter")," \uff0c\u6700\u65b0\u7248\u672c\u662f v0.3.0 \uff0c\u53d1\u5e03\u4e8e 2021 \u5e74 2 \u6708 12 \u65e5\u3002"),(0,o.kt)("p",null,"JSON Exporter \u901a\u8fc7 JSONPath \u6765\u83b7\u53d6\u8fdc\u7aef\u7684 JSON \u6570\u636e\uff0c\u8981\u67e5\u770b\u8fd9\u4e2a\u5bfc\u51fa\u5668\u652f\u6301\u7684 JSON Path \u914d\u7f6e\uff0c\u8bf7\u8bbf\u95ee\u8fd9\u91cc ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/jsonpath/"},"https://kubernetes.io/docs/reference/kubectl/jsonpath/")," \u3002"),(0,o.kt)("p",null,"\u67e5\u770b\u793a\u4f8b\u5bfc\u51fa\u5668\u914d\u7f6e\u3001Prometheus \u914d\u7f6e\u548c\u9884\u671f\u6570\u636e\u683c\u5f0f\u7684\u793a\u4f8b\u76ee\u5f55\u3002"),(0,o.kt)("p",null,"\u914d\u7f6e\u8bed\u6cd5\u5728 0.3.x \u7248\u672c\u4e2d\u5df2\u7ecf\u66f4\u6539\u3002\u5982\u679c\u4ece0.2.x \u8fc1\u79fb\uff0c\u90a3\u4e48\u8bf7\u4f7f\u7528\u4e0a\u9762\u63d0\u5230\u7684 JSONPath \u6307\u5bfc\u6b63\u786e\u7684\u914d\u7f6e\u8bed\u6cd5\u3002"),(0,o.kt)("h1",{id:"\u5b89\u88c5\u8fd0\u884c"},"\u5b89\u88c5\u8fd0\u884c"),(0,o.kt)("p",null,"\u6211\u4eec\u6765\u770b\u4e2a\u4f8b\u5b50\uff0c\u5047\u8bbe\u8981\u91c7\u96c6\u7684 JSON \u6570\u636e\u6587\u4ef6 data.json \u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "counter": 1234,\n    "values": [\n        {\n            "id": "id-A",\n            "count": 1,\n            "some_boolean": true,\n            "state": "ACTIVE"\n        },\n        {\n            "id": "id-B",\n            "count": 2,\n            "some_boolean": true,\n            "state": "INACTIVE"\n        },\n        {\n            "id": "id-C",\n            "count": 3,\n            "some_boolean": false,\n            "state": "ACTIVE"\n        }\n    ],\n    "location": "mars"\n}\n\n')),(0,o.kt)("p",null,"\u90a3\u4e48 JSON Exporter \u7684\u914d\u7f6e\u6587\u4ef6config.yml \u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"---\nmetrics:\n- name: example_global_value\n  path: \"{ .counter }\"\n  help: Example of a top-level global value scrape in the json\n  labels:\n    environment: beta # static label\n    location: \"planet-{.location}\"          # dynamic label\n\n- name: example_value\n  type: object\n  help: Example of sub-level value scrapes from a json\n  path: '{.values[?(@.state == \"ACTIVE\")]}'\n  labels:\n    environment: beta # static label\n    id: '{.id}'          # dynamic label\n  values:\n    active: 1      # static value\n    count: '{.count}' # dynamic value\n    boolean: '{.some_boolean}'\n\nheaders:\n  X-Dummy: my-test-header\n")),(0,o.kt)("p",null,"\u6211\u4eec\u6765\u542f\u52a8\u4e00\u4e2a\u7b80\u5355\u7684 Web \u670d\u52a1 ",(0,o.kt)("inlineCode",{parentName:"p"},"python -m SimpleHTTPServer 8000 &")),(0,o.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019 JSON Exporter \u7684\u542f\u52a8\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./json_exporter --config.file examples/config.yml\n")),(0,o.kt)("p",null,"JSON Exporter \u542f\u52a8\u4ee5\u540e\u9ed8\u8ba4\u4f1a\u5728 7979 \u66b4\u9732\u81ea\u5df1\u7684\u76d1\u63a7\u6570\u636e\uff0c\u548c\u5176\u5b83 Exporter \u4e00\u6837\uff0c\u53ef\u4ee5\u901a\u8fc7 Curl \u6765\u67e5\u770b\u6307\u6807\u5185\u5bb9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ curl "http://localhost:7979/probe?target=http://localhost:8000/examples/data.json" | grep ^example\n\n\nexample_global_value{environment="beta",location="planet-mars"} 1234\nexample_value_active{environment="beta",id="id-A"} 1\nexample_value_active{environment="beta",id="id-C"} 1\nexample_value_boolean{environment="beta",id="id-A"} 1\nexample_value_boolean{environment="beta",id="id-C"} 0\nexample_value_count{environment="beta",id="id-A"} 1\nexample_value_count{environment="beta",id="id-C"} 3\n\n')),(0,o.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u53ef\u4ee5\u914d\u7f6e Prometheus \u6765\u6536\u96c6\u6570\u636e\uff0cPrometheus \u7684\u914d\u7f6e\u6587\u4ef6 prometheus.yml \u5185\u5bb9\u53ef\u4ee5\u53c2\u8003 "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"scrape_configs:\n\n  ## gather metrics of prometheus itself\n- job_name: prometheus\n  static_configs:\n    - targets:\n      - localhost:9090\n\n  ## gather the metrics of json_exporter application itself\n- job_name: json_exporter\n  static_configs:\n    - targets:\n      - localhost:7979 ## Location of the json exporter's real <hostname>:<port>\n\n  ## gather the metrics from third party json sources, via the json exporter\n- job_name: json\n  metrics_path: /probe\n  static_configs:\n    - targets:\n      - http://host-1.foobar.com/dummy/data.json\n      - http://host-2:8000/other-examples/data.json\n      - http://localhost:8000/examples/data.json ## Used from the example steps in Readme\n  relabel_configs:\n    - source_labels: [__address__]\n      target_label: __param_target\n    - source_labels: [__param_target]\n      target_label: instance\n    - target_label: __address__\n      replacement: localhost:7979 ## Location of the json exporter's real <hostname>:<port>\n\n")),(0,o.kt)("h1",{id:"\u901a\u8fc7-http-post-\u53d1\u9001-body-\u5185\u5bb9"},"\u901a\u8fc7 HTTP POST \u53d1\u9001 body \u5185\u5bb9"),(0,o.kt)("p",null,"\u5982\u679c\u5728\u914d\u7f6e\u4e2d\u8bbe\u7f6e\u4e86 body \u53c2\u6570\uff0c\u5b83\u5c06\u4f5c\u4e3a\u522e\u64e6\u8bf7\u6c42\u4e2d\u7684 body \u5185\u5bb9\u7531Exporter \u53d1\u9001\u3002\u5728\u672c\u4f8b\u4e2d\uff0cHTTP\u65b9\u6cd5\u4e5f\u5c06\u88ab\u8bbe\u7f6e\u4e3a\u201cPOST\u201d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'body:\n  content: |\n    My static information: {"time_diff": "1m25s", "anotherVar": "some value"}\n')),(0,o.kt)("p",null,"Body \u5185\u5bb9\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2aGo\u6a21\u677f,\u6a21\u677f\u4e2d\u53ef\u4ee5\u4f7f\u7528 Sprig \u5e93\u4e2d\u7684\u6240\u6709\u51fd\u6570\u3002\u5728\u5448\u73b0\u6a21\u677f\u65f6\uff0cprometheus \u5728\u522e\u64e6\u67e5\u8be2\u4e2d\u53d1\u9001\u7ed9 Exporter \u7684\u6240\u6709\u67e5\u8be2\u53c2\u6570\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u503c\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u6a21\u677f\u51fd\u6570\u7684\u4f8b\u5b50"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'body:\n  content: |\n    {"time_diff": "{{ duration `95` }}","anotherVar": "{{ randInt 12 30 }}"}\n  templatize: true\n')),(0,o.kt)("p",null,"\u4f7f\u7528\u67e5\u8be2\u53c2\u6570\u8d4b\u503c\u7684\u6a21\u677f\u51fd\u6570\u793a\u4f8b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'body:\n  content: |\n    {"time_diff": "{{ duration `95` }}","anotherVar": "{{ .myVal | first }}"}\n  templatize: true\n')),(0,o.kt)("p",null,'\u4f7f\u7528 curl \u8bf7\u6c42 "http://exporter:7979/probe?target=http://scrape_target:8080/test/data.json&myVal=something",'),(0,o.kt)("p",null,"\u4f1a\u5bfc\u81f4\u5c06\u4e0b\u9762\u7684 body \u4f5c\u4e3aHTTP POST\u6709\u6548\u8d1f\u8f7d\u53d1\u9001\u5230 http://scrape_target:8080/test/data.json:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{"time_diff": "1m35s","anotherVar": "something"}.\n')))}m.isMDXComponent=!0}}]);