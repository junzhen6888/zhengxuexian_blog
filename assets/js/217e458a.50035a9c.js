"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6967],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},p=Object.keys(e);for(o=0;o<p.length;o++)r=p[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)r=p[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),s=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,x=c["".concat(i,".").concat(m)]||c[m]||u[m]||p;return r?o.createElement(x,a(a({ref:t},d),{},{components:r})):o.createElement(x,a({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,a=new Array(p);a[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<p;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},17503:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const p={},a="Node Exporter",l={unversionedId:"prometheus/Exporter/3.2-node-exporter",id:"prometheus/Exporter/3.2-node-exporter",title:"Node Exporter",description:"Node Exporter \u662f\u4e00\u4e2a\u76d1\u63a7\u786c\u4ef6\u548c\u64cd\u4f5c\u7cfb\u7edf\u7684\u7ec4\u4ef6\uff0c\u4f7f\u7528 Golang \u8fdb\u884c\u7f16\u5199\uff0c\u652f\u6301 *NIX \u5185\u6838\u7684\u64cd\u4f5c\u7cfb\u7edf\u3002\u4e0d\u652f\u6301 Windows \u64cd\u4f5c\u7cfb\u7edf\u3002\u6700\u65e9\u7684\u65f6\u5019\u5173\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u53ea\u6709\u8fd9\u4e2a\uff0c\u540e\u6765\u5b98\u65b9\u7684\u793e\u533a\u7ef4\u62a4\u4e86\u4e00\u4e2a Windows \u7684 Exporter \uff0c\u518d\u540e\u6765\u8fd9\u4e2a\u793e\u533a\u7684 Exporter \u4e5f\u5212\u5f52\u5230\u5b98\u65b9\u6765\u7ef4\u62a4\u4e86\u3002",source:"@site/wiki/ops/prometheus/03-Exporter/3.2-node-exporter.md",sourceDirName:"prometheus/03-Exporter",slug:"/prometheus/Exporter/3.2-node-exporter",permalink:"/zhengxuexian_blog/ops/prometheus/Exporter/3.2-node-exporter",draft:!1,tags:[],version:"current",lastUpdatedBy:"zhengxuexian",lastUpdatedAt:1661407442,formattedLastUpdatedAt:"2022\u5e748\u670825\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Graphite Exporter",permalink:"/zhengxuexian_blog/ops/prometheus/Exporter/3.19-graphite-exporter"},next:{title:"Collectd Exporter",permalink:"/zhengxuexian_blog/ops/prometheus/Exporter/3.20-collectd-exporter"}},i={},s=[],d={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"node-exporter"},"Node Exporter"),(0,n.kt)("p",null,"Node Exporter \u662f\u4e00\u4e2a\u76d1\u63a7\u786c\u4ef6\u548c\u64cd\u4f5c\u7cfb\u7edf\u7684\u7ec4\u4ef6\uff0c\u4f7f\u7528 Golang \u8fdb\u884c\u7f16\u5199\uff0c\u652f\u6301 *NIX \u5185\u6838\u7684\u64cd\u4f5c\u7cfb\u7edf\u3002\u4e0d\u652f\u6301 Windows \u64cd\u4f5c\u7cfb\u7edf\u3002\u6700\u65e9\u7684\u65f6\u5019\u5173\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u53ea\u6709\u8fd9\u4e2a\uff0c\u540e\u6765\u5b98\u65b9\u7684\u793e\u533a\u7ef4\u62a4\u4e86\u4e00\u4e2a Windows \u7684 Exporter \uff0c\u518d\u540e\u6765\u8fd9\u4e2a\u793e\u533a\u7684 Exporter \u4e5f\u5212\u5f52\u5230\u5b98\u65b9\u6765\u7ef4\u62a4\u4e86\u3002"),(0,n.kt)("p",null,"Node Exporter \u7684\u5b98\u65b9\u5730\u5740\u662f ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter"},"https://github.com/prometheus/node_exporter")," \u3002\u5f53\u524d\u6700\u65b0\u7248\u672c\u662f v1.2.2 \uff082021.08.06 \u53d1\u5e03\uff09\uff0c\u5efa\u8bae\u5927\u5bb6\u5728\u4f7f\u7528\u65f6\u9009\u7528\u6700\u65b0\u7248\u672c\uff0c\u5e76\u4e14\u505a\u597d\u7248\u672c\u5347\u7ea7\u7684\u51c6\u5907\u3002"),(0,n.kt)("p",null,"Node Exporter \u542f\u52a8\u4f1a\u901a\u8fc7 9100 \u7aef\u53e3\u6765\u8fdb\u884c\u76d1\u63a7\u6570\u636e\u7684\u66b4\u9732\uff0c\u8fd9\u4e2a\u7aef\u53e3\u4e5f\u53ef\u4ee5\u5728\u542f\u52a8\u7684\u65f6\u5019\u901a\u8fc7\u53c2\u6570\u6307\u5b9a\u6765\u4fee\u6539\u3002"),(0,n.kt)("h1",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,n.kt)("p",null,"Node Exporter \u652f\u6301\u591a\u79cd\u5b89\u88c5\u8fd0\u884c\u65b9\u5f0f\uff0c\u6bd4\u5982\u4e8c\u8fdb\u5236\u8fd0\u884c\u3001\u88f8Docker\u8fd0\u884c \u3001 \u653e\u5728 Kubernetes \u4e2d\u8fd0\u884c\u3002"),(0,n.kt)("p",null,"\u8fd9\u91cc\u6211\u63d0\u4f9b\u4e00\u4e0b \u4e8c\u8fdb\u5236\u8fd0\u884c\u548c \u88f8 Docker \u8fd0\u884c\u7684\u811a\u672c"),(0,n.kt)("p",null,"\u4f7f\u7528\u8fd9\u4e2a\u811a\u672c\u53ef\u4ee5\u4ee5\u4e8c\u8fdb\u5236\u7684\u65b9\u5f0f\u8fd0\u884c Node Exporter \uff0c\u5e76\u4e14\u63d0\u4f9b\u65e5\u5fd7\u548c pid \u6587\u4ef6\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"#!/bin/bash\n# version 1.0\nBASEPATH=/usr/local/prometheus/node_exporter\nLOG=$BASEPATH/logs\nnohup $BASEPATH/current/node_exporter --collector.textfile.directory=/tmp/metrics  --web.listen-address=:9100  >> $LOG/node_exporter.log  2>&1 & echo $! > $BASEPATH/run/node_exporter.pid\n\n")),(0,n.kt)("p",null,"\u53e6\u5916\u4e5f\u53ef\u4ee5\u5199\u6210 SystemD \u7684\u5b88\u62a4\u8fdb\u7a0b\u3002",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/node_exporter.service")," \u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Description=Node Exporter\nAfter=network.target\n\n[Service]\nExecStart=/usr/local/bin/node_exporter --collector.textfile.directory=/tmp/metrics --web.listen-address=:9100\nUser=root\n\n[Install]\nWantedBy=multi-user.target\n")),(0,n.kt)("p",null,"\u7f16\u5199\u597d\u8fd9\u4e2a\u6587\u4ef6\u4ee5\u540e\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"systemctl start node_exporter"),"  \u6765\u542f\u52a8\u670d\u52a1\uff0c\u5e76\u4e14\u4f7f\u7528  ",(0,n.kt)("inlineCode",{parentName:"p"},"systemctl enable node_exporter")," \u6765\u8bbe\u7f6e\u5f00\u673a\u81ea\u8d77\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528\u88f8 Docker \u542f\u52a8 Node Exporter \u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u811a\u672c"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'#!/bin/bash\n\ndocker run -d --name Node-Exporter -m 1g -u root \\\n    --pid="host" \\\n    --network host quay.io/prometheus/node-exporter:latest \\\n    --web.listen-address=:9100 \\\n    --collector.textfile.directory=/tmp \\\n    --path.rootfs=/host \\\n')),(0,n.kt)("h1",{id:"\u6536\u96c6\u6307\u6807"},"\u6536\u96c6\u6307\u6807"),(0,n.kt)("p",null,"Node Exporter  \u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"--collector.<name>")," \u7684\u542f\u52a8\u53c2\u6570\u6765\u6253\u5f00\u4e00\u4e9b\u6307\u6807\u7684\u6536\u96c6\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"--no-collector.<name>")," \u7684\u542f\u52a8\u53c2\u6570\u6765\u5173\u95ed\u4e00\u4e9b\u6307\u6807\u7684\u6536\u96c6\u3002\u7531\u4e8e\u6709\u4e00\u4e9b\u6307\u6807\u662f\u9ed8\u8ba4\u5f00\u542f\u7684\uff08\u5f53\u524d\u5927\u7ea6  \u7c7b\uff09\uff0c\u6240\u4ee5\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"--collector.disable-defaults")," \u53c2\u6570\u5148\u5173\u95ed\u6240\u6709\u7684 \u9ed8\u8ba4\u91c7\u96c6\u6307\u6807\uff0c\u7136\u540e\u518d\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"--collector.<name>")," \u53c2\u6570\u6765\u9010\u4e2a\u6253\u5f00\u8981\u91c7\u96c6\u7684\u6307\u6807\u3002"),(0,n.kt)("p",null,"Node Exporter \u5728\u6bcf\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u53d1\u884c\u7248\u4e0a\u5bf9\u6307\u6807\u7684\u6536\u96c6\u7c7b\u578b\u7684\u652f\u6301\u4e5f\u4e0d\u540c\u3002"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u5217\u8868\u662f Node Exporter \u542f\u52a8\u7684\u65f6\u5019\u7f3a\u7701\u6253\u5f00\u7684\u9009\u9879\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter#enabled-by-default"},"https://github.com/prometheus/node_exporter#enabled-by-default")),(0,n.kt)("p",null,"\u8fd9\u4e2a\u5217\u8868\u662f Node Exporter \u542f\u52a8\u7684\u65f6\u5019\u7f3a\u7701\u5173\u95ed\u7684\u9009\u9879\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter#disabled-by-default"},"https://github.com/prometheus/node_exporter#disabled-by-default")),(0,n.kt)("p",null,"\u8fd9\u4e24\u4e2a\u5408\u8d77\u6765\u662f Node Exporter \u53ef\u4ee5\u91c7\u96c6\u7684\u6240\u6709\u6307\u6807\u3002\u7ecf\u8fc7\u8fd9\u51e0\u5e74\u7684\u53d1\u5c55\uff0c Node Exporter \u5728\u7c7b Unix \u5185\u6838\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u5df2\u7ecf\u91c7\u96c6\u4e86\u5f88\u4e30\u5bcc\u7684\u6307\u6807\u3002"),(0,n.kt)("p",null,"Node Exporter \u6dfb\u52a0\u8ba4\u8bc1\n",(0,n.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_31977125/article/details/108528488"},"https://blog.csdn.net/qq_31977125/article/details/108528488")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/zhengxuexian_blog/ops/prometheus/Exporter/3.1-pushgateway"},"\u2190 PushGateway")," | ",(0,n.kt)("a",{parentName:"p",href:"/zhengxuexian_blog/ops/prometheus/Exporter/3.2-node-exporter"},"Node Exporter")," | ",(0,n.kt)("a",{parentName:"p",href:"/zhengxuexian_blog/ops/prometheus/Exporter/3.3-windows-exporter"},"Windows Exporeter \u2192")))}u.isMDXComponent=!0}}]);