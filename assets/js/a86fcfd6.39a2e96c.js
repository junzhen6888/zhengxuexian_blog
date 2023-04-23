"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7474],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},p=Object.keys(e);for(o=0;o<p.length;o++)r=p[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)r=p[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=o.createContext({}),i=function(e){var t=o.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return o.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=i(r),d=n,g=m["".concat(a,".").concat(d)]||m[d]||s[d]||p;return r?o.createElement(g,l(l({ref:t},c),{},{components:r})):o.createElement(g,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,l=new Array(p);l[0]=m;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:n,l[1]=u;for(var i=2;i<p;i++)l[i]=r[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88457:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>u,toc:()=>i});var o=r(87462),n=(r(67294),r(3905));const p={},l="Prometheus \u8fd0\u7ef4\u5de5\u5177 Promtool \uff08\u4e09\uff09 Debug \u529f\u80fd",u={unversionedId:"prometheus/Troubleshoot/11.5-promtool-debug",id:"prometheus/Troubleshoot/11.5-promtool-debug",title:"Prometheus \u8fd0\u7ef4\u5de5\u5177 Promtool \uff08\u4e09\uff09 Debug \u529f\u80fd",description:"Promtool \u5728 debug \u65b9\u9762\u4e00\u4e2a\u6709 3 \u4e2a\u5b50\u547d\u4ee4\uff0c\u5206\u522b\u7528\u6765\u83b7\u53d6 profiling debug \u4fe1\u606f\u3001\u83b7\u53d6 metric debug \u4fe1\u606f\u3001\u83b7\u53d6\u6240\u6709 debug \u4fe1\u606f\u3001\u5bf9\u89c4\u5219\u6587\u4ef6\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u4f9d\u6b21\u770b\u4e00\u4e0b\u3002",source:"@site/wiki/ops/prometheus/11-Troubleshoot/11.5-promtool-debug.md",sourceDirName:"prometheus/11-Troubleshoot",slug:"/prometheus/Troubleshoot/11.5-promtool-debug",permalink:"/zhengxuexian_blog/ops/prometheus/Troubleshoot/11.5-promtool-debug",draft:!1,tags:[],version:"current",lastUpdatedBy:"zhengxuexian",lastUpdatedAt:1661407442,formattedLastUpdatedAt:"2022\u5e748\u670825\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prometheus \u8fd0\u7ef4\u5de5\u5177 Promtool \uff08\u4e8c\uff09Query \u529f\u80fd",permalink:"/zhengxuexian_blog/ops/prometheus/Troubleshoot/11.4-promtool-query"},next:{title:"Prometheus \u8fd0\u7ef4\u5de5\u5177 Promtool \uff08\u56db\uff09TSDB \u529f\u80fd",permalink:"/zhengxuexian_blog/ops/prometheus/Troubleshoot/11.6-promtool-tsdb"}},a={},i=[],c={toc:i};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"prometheus-\u8fd0\u7ef4\u5de5\u5177-promtool-\u4e09-debug-\u529f\u80fd"},"Prometheus \u8fd0\u7ef4\u5de5\u5177 Promtool \uff08\u4e09\uff09 Debug \u529f\u80fd"),(0,n.kt)("p",null,"Promtool \u5728 debug \u65b9\u9762\u4e00\u4e2a\u6709 3 \u4e2a\u5b50\u547d\u4ee4\uff0c\u5206\u522b\u7528\u6765\u83b7\u53d6 profiling debug \u4fe1\u606f\u3001\u83b7\u53d6 metric debug \u4fe1\u606f\u3001\u83b7\u53d6\u6240\u6709 debug \u4fe1\u606f\u3001\u5bf9\u89c4\u5219\u6587\u4ef6\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u4f9d\u6b21\u770b\u4e00\u4e0b\u3002"),(0,n.kt)("h1",{id:"\u83b7\u53d6-profiling-debug-\u4fe1\u606f"},"\u83b7\u53d6 profiling debug \u4fe1\u606f"),(0,n.kt)("p",null,"\u4f7f\u7528 \u8fd9\u4e2a\u547d\u4ee4\u6765\u83b7\u53d6 Prometheus \u7684 profiling \u6027\u80fd\u6570\u636e\u3002\u547d\u4ee4\u7684\u53c2\u6570\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"promtool debug pprof <server>\n")),(0,n.kt)("p",null,"\u4f7f\u7528\u8fd9\u4e2a\u547d\u4ee4\u6765\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u770b\u4e00\u4e0b\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[root@Erdong-Test ~]# ./promtool debug pprof 'http://127.0.0.1:9090'\ncollecting: http://127.0.0.1:9090/debug/pprof/threadcreate\ncollecting: http://127.0.0.1:9090/debug/pprof/profile?seconds=30\ncollecting: http://127.0.0.1:9090/debug/pprof/block\ncollecting: http://127.0.0.1:9090/debug/pprof/goroutine\ncollecting: http://127.0.0.1:9090/debug/pprof/heap\ncollecting: http://127.0.0.1:9090/debug/pprof/mutex\ncollecting: http://127.0.0.1:9090/debug/pprof/trace?seconds=30\nCompiling debug information complete, all files written in \"debug.tar.gz\".\n\n[root@Erdong-Test ~]# tar -zxf debug.tar.gz\n[root@Erdong-Test ~]# ll -h\n-rw-rw-rw- 1 root root  177 1\u6708   1 1970 block.pb\n-rw-rw-rw- 1 root root 5.9K 1\u6708   1 1970 cpu.pb\n-rw-rw-rw- 1 root root 7.4K 1\u6708   1 1970 goroutine.pb\n-rw-rw-rw- 1 root root 223K 1\u6708   1 1970 heap.pb\n-rw-rw-rw- 1 root root  177 1\u6708   1 1970 mutex.pb\n-rw-rw-rw- 1 root root  493 1\u6708   1 1970 threadcreate.pb\n-rw-rw-rw- 1 root root  73K 1\u6708   1 1970 trace.pb\n\n")),(0,n.kt)("p",null,"\u521b\u5efa\u597d\u7684\u6587\u4ef6\u540d\u662f debug.tar.gz \uff0c\u4f7f\u7528 tar \u547d\u4ee4\u89e3\u538b\u4ee5\u540e\u5c31\u4f1a\u5f97\u5230 block.pb \u3001cpu.pb\u3001goroutine.pb\u3001heap.pb\u3001mutex.pb\u3001threadcreate.pb\u3001trace.pb \u4e00\u5171 7 \u4e2a\u6587\u4ef6\u3002"),(0,n.kt)("p",null,"\u8fd9\u4e9b\u6587\u4ef6\u53ef\u4ee5\u4f7f\u7528 pprof \u5de5\u5177\u6765\u8fdb\u884c\u5206\u6790\u3002"),(0,n.kt)("h1",{id:"\u83b7\u53d6-metric-debug-\u4fe1\u606f"},"\u83b7\u53d6 metric debug \u4fe1\u606f"),(0,n.kt)("p",null,"Promtool \u7684 debug metrics \u5b50\u547d\u4ee4\u662f\u4e0b\u8f7d Prometheus \u63d0\u4f9b\u7684 Metric \u6307\u6807\u5e76\u4e14\u8fdb\u884c\u538b\u7f29\u3002\u8fd9\u4e2a\u547d\u4ee4\u5e73\u65f6\u5f88\u5c11\u4f7f\u7528\uff0c\u56e0\u4e3a\u4ece Prometheus \u7684\u7aef\u53e3\u4e2d\u5c31\u53ef\u4ee5\u76f4\u63a5\u83b7\u53d6\u8fd9\u4e9b Metric \u6570\u636e\u3002\u8fd9\u4e2a\u8c03\u8bd5\u547d\u4ee4\u5b58\u5728\u7684\u610f\u4e49\u662f\uff0c\u5f53\u81ea\u5df1\u65e0\u6cd5\u89e3\u51b3\u95ee\u9898\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u628a Metric \u5bfc\u51fa\u63d0\u4f9b\u7ed9\u5176\u4ed6\u5206\u6790\u4eba\u5458\u8fdb\u884c\u5206\u6790\u8c03\u8bd5\uff0c\u8fd9\u4e2a\u547d\u4ee4\u7684\u53c2\u6570\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"promtool debug metrics <server>\n\n")),(0,n.kt)("p",null,"\u6211\u4eec\u6765\u4f7f\u7528\u4e00\u4e0b\u8fd9\u4e2a\u547d\u4ee4"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[root@Erdong-Test ~]# ./promtool debug metrics \'http://127.0.0.1:9090\'\ncollecting: http://127.0.0.1:9090/metrics\nCompiling debug information complete, all files written in "debug.tar.gz".\n[root@Erdong-Test ~]# tar -zxf debug.tar.gz\ntar: metrics.txt\uff1a\u4e0d\u53ef\u4fe1\u7684\u65e7\u65f6\u95f4\u6233 1970-01-01 08:00:00\n[root@Erdong-Test ~]# tail metrics.txt\n# TYPE prometheus_web_federation_warnings_total counter\nprometheus_web_federation_warnings_total 0\n# HELP promhttp_metric_handler_requests_in_flight Current number of scrapes being served.\n# TYPE promhttp_metric_handler_requests_in_flight gauge\npromhttp_metric_handler_requests_in_flight 1\n# HELP promhttp_metric_handler_requests_total Total number of scrapes by HTTP status code.\n# TYPE promhttp_metric_handler_requests_total counter\npromhttp_metric_handler_requests_total{code="200"} 519347\npromhttp_metric_handler_requests_total{code="500"} 0\npromhttp_metric_handler_requests_total{code="503"} 0\n')),(0,n.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2a\u547d\u4ee4\u751f\u6210\u4e86\u4e00\u4e2a debug.tar.gz \u7684\u538b\u7f29\u6587\u4ef6\uff0c\u8fd9\u4e2a\u6587\u4ef6\u89e3\u538b\u540e\u662f metrics.txt \uff0c\u91cc\u9762\u5199\u6ee1\u4e86 metric \u3002\u5c06\u8fd9\u4e2a\u6587\u4ef6\u53d1\u7ed9\u5176\u4ed6\u4eba\uff0c\u5c31\u53ef\u4ee5\u77e5\u9053\u5f53\u524d Prometheus \u7684\u72b6\u6001\u3002"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u547d\u4ee4\u548c\u5982\u4e0b\u8fd9\u4e2a\u547d\u4ee4\u7684\u6548\u679c\u4e00\u81f4\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"curl 127.0.0.1:9090/metrics > metrics.txt\n")),(0,n.kt)("h1",{id:"\u83b7\u53d6\u6240\u6709-debug-\u4fe1\u606f"},"\u83b7\u53d6\u6240\u6709 debug \u4fe1\u606f"),(0,n.kt)("p",null,"Promtool \u7684 debug all \u5b50\u547d\u4ee4\u5c31\u662f\u5c06\u524d\u8fb9\u7684\u4e24\u4e2a\u5b50\u547d\u4ee4\u7684\u7ed3\u679c\u5408\u5728\u4e00\u8d77\uff0c\u7136\u540e\u8fdb\u884c\u6253\u5305\uff0c\u8fd9\u4e2a\u5b50\u547d\u4ee4\u7684\u4f7f\u7528\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"promtool debug all <server>\n")),(0,n.kt)("p",null,"\u5c1d\u8bd5\u6267\u884c\u4e00\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[root@Erdong-Test ~]# ./promtool debug all 'http://127.0.0.1:9090'\ncollecting: http://127.0.0.1:9090/debug/pprof/profile?seconds=30\ncollecting: http://127.0.0.1:9090/debug/pprof/block\ncollecting: http://127.0.0.1:9090/debug/pprof/goroutine\ncollecting: http://127.0.0.1:9090/debug/pprof/heap\ncollecting: http://127.0.0.1:9090/debug/pprof/mutex\ncollecting: http://127.0.0.1:9090/debug/pprof/threadcreate\ncollecting: http://127.0.0.1:9090/debug/pprof/trace?seconds=30\ncollecting: http://127.0.0.1:9090/metrics\nCompiling debug information complete, all files written in \"debug.tar.gz\".\n\n[root@Erdong-Test ~]#  tar -zxf debug.tar.gz\ntar: cpu.pb\uff1a\u4e0d\u53ef\u4fe1\u7684\u65e7\u65f6\u95f4\u6233 1970-01-01 08:00:00\ntar: block.pb\uff1a\u4e0d\u53ef\u4fe1\u7684\u65e7\u65f6\u95f4\u6233 1970-01-01 08:00:00\ntar: goroutine.pb\uff1a\u4e0d\u53ef\u4fe1\u7684\u65e7\u65f6\u95f4\u6233 1970-01-01 08:00:00\ntar: heap.pb\uff1a\u4e0d\u53ef\u4fe1\u7684\u65e7\u65f6\u95f4\u6233 1970-01-01 08:00:00\ntar: mutex.pb\uff1a\u4e0d\u53ef\u4fe1\u7684\u65e7\u65f6\u95f4\u6233 1970-01-01 08:00:00\ntar: threadcreate.pb\uff1a\u4e0d\u53ef\u4fe1\u7684\u65e7\u65f6\u95f4\u6233 1970-01-01 08:00:00\ntar: trace.pb\uff1a\u4e0d\u53ef\u4fe1\u7684\u65e7\u65f6\u95f4\u6233 1970-01-01 08:00:00\ntar: metrics.txt\uff1a\u4e0d\u53ef\u4fe1\u7684\u65e7\u65f6\u95f4\u6233 1970-01-01 08:00:00\n[root@Erdong-Test ~]# ls\nblock.pb  debug.tar.gz  heap.pb      mutex.pb         trace.pb\ncpu.pb    goroutine.pb  metrics.txt  threadcreate.pb\n")),(0,n.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u548c\u524d\u8fb9\u7684\u6267\u884c\u95ee\u4f60\u5bb6\u662f\u4e00\u6837\u7684\u3002"),(0,n.kt)("h1",{id:"\u6d4b\u8bd5\u89c4\u5219\u6587\u4ef6"},"\u6d4b\u8bd5\u89c4\u5219\u6587\u4ef6"),(0,n.kt)("p",null,"Promtool \u8fd8\u53ef\u4ee5\u5bf9\u89c4\u5219\u6587\u4ef6\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\uff0c\u547d\u4ee4\u7528\u6cd5\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"promtool test rules <test-rule-file>...\n")),(0,n.kt)("p",null,"\u6211\u4eec\u968f\u4fbf\u627e\u4e00\u4e2a\u544a\u8b66\u89c4\u5219\u6587\u4ef6\u6267\u884c\u770b\u4e00\u4e0b\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[root@Erdong-Test ~]# ./promtool test rules promtsdb.rules.yaml\nUnit Testing:  promtsdb.rules.yaml\n  FAILED:\nyaml: unmarshal errors:\n  line 1: field groups not found in type main.unitTestFile\n\n")),(0,n.kt)("p",null,"\u51fa\u73b0\u4e86\u62a5\u9519\u3002\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u5c31\u9700\u8981\u53bb\u67e5\u627e\u9519\u8bef\u7684\u539f\u56e0\u4e86\u3002\u524d\u8fb9\u6211\u4eec\u9047\u5230\u8fc7 Promtool \u7684 check rules \u5b50\u547d\u4ee4\uff0c\u8fd9\u4e24\u4e2a\u547d\u4ee4\u90fd\u662f\u5bf9\u89c4\u5219\u6587\u4ef6\u8fdb\u884c\u68c0\u67e5\u7684\uff0c\u4e0d\u540c\u70b9\u662f\uff0ccheck rules \u53ea\u6821\u9a8c\u6587\u4ef6\u7684\u8bed\u6cd5\u662f\u5426\u5b58\u5728\u9519\u8bef\uff0c\u800c test rules \u5219\u662f\u5bf9\u89c4\u5219\u6587\u4ef6\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\u3002"),(0,n.kt)("h1",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,n.kt)("p",null,"\u4eca\u5929\u6211\u4eec\u67e5\u770b\u4e86 Promtool \u7684 debug \u90e8\u5206\uff0c\u660e\u5929\u6211\u4eec\u6765\u770b TSDB \u90e8\u5206\u3002"))}s.isMDXComponent=!0}}]);