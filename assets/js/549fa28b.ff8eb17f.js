"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3632],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>x});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=s(r),x=o,d=m["".concat(l,".").concat(x)]||m[x]||u[x]||i;return r?n.createElement(d,p(p({ref:t},c),{},{components:r})):n.createElement(d,p({ref:t},c))}));function x(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,p=new Array(i);p[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var s=2;s<i;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12144:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={},p="oVirt Exporter",a={unversionedId:"prometheus/Exporter/3.5-ovirt-exporter",id:"prometheus/Exporter/3.5-ovirt-exporter",title:"oVirt Exporter",description:"oVirt \u662f\u4e00\u6b3e\u514d\u8d39\u5f00\u6e90\u865a\u62df\u5316\u8f6f\u4ef6\uff0c\u662f RedHat \u5546\u4e1a\u7248\u672c\u865a\u62df\u5316\u8f6f\u4ef6 RHEV \u7684\u5f00\u6e90\u7248\u672c\u3002",source:"@site/wiki/ops/prometheus/03-Exporter/3.5-ovirt-exporter.md",sourceDirName:"prometheus/03-Exporter",slug:"/prometheus/Exporter/3.5-ovirt-exporter",permalink:"/zhengxuexian_blog/ops/prometheus/Exporter/3.5-ovirt-exporter",draft:!1,tags:[],version:"current",lastUpdatedBy:"zhengxuexian",lastUpdatedAt:1661407442,formattedLastUpdatedAt:"2022\u5e748\u670825\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5bb9\u5668\u4fe1\u606f\u76d1\u63a7",permalink:"/zhengxuexian_blog/ops/prometheus/Exporter/3.4-cadvisor"},next:{title:"BlackBox \u7f51\u7edc\u63a2\u6d4b",permalink:"/zhengxuexian_blog/ops/prometheus/Exporter/3.6-blackbox-exporter"}},l={},s=[],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ovirt-exporter"},"oVirt Exporter"),(0,o.kt)("p",null,"oVirt \u662f\u4e00\u6b3e\u514d\u8d39\u5f00\u6e90\u865a\u62df\u5316\u8f6f\u4ef6\uff0c\u662f RedHat \u5546\u4e1a\u7248\u672c\u865a\u62df\u5316\u8f6f\u4ef6 RHEV \u7684\u5f00\u6e90\u7248\u672c\u3002"),(0,o.kt)("p",null,"oVirt \u57fa\u4e8e kvm\uff0c\u5e76\u6574\u5408\u4f7f\u7528\u4e86 libvirt\u3001gluster\u3001patternfly\u3001ansible \u7b49\u4e00\u7cfb\u5217\u4f18\u79c0\u7684\u5f00\u6e90\u8f6f\u4ef6\uff0coVirt \u7684\u5b9a\u4f4d\u662f\u66ff\u4ee3 vmware vsphere\uff0coVirt \u76ee\u524d\u5df2\u7ecf\u6210\u4e3a\u4e86\u4f01\u4e1a\u865a\u62df\u5316\u73af\u5883\u53ef\u9009\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u53e6\u5916\u76f8\u6bd4 OpenStack \u7684\u5e9e\u5927\u548c\u590d\u6742\uff0coVirt \u5728\u4f01\u4e1a\u79c1\u6709\u4e91\u5efa\u8bbe\u4e2d\u5177\u5907\u90e8\u7f72\u548c\u7ef4\u62a4\u4f7f\u7528\u7b80\u5355\u7684\u4f18\u52bf\u3002"),(0,o.kt)("p",null,"oVirt \u662f\u4e00\u4e2a\u57fa\u4e8e x86 \u67b6\u6784\u4e0a\u7684 KVM \u865a\u62df\u5316\u6280\u672f\u7684\u5f00\u6e90 IaaS \u4e91\u670d\u52a1\u89e3\u51b3\u65b9\u6848\u3002\u5728\u67b6\u6784\u8bbe\u8ba1\u4e0a\u5b83\u4f7f\u7528\u4e86 Node/Engine \u5206\u79bb\u7ed3\u6784\uff0c\u4ee5\u65b9\u4fbf\u529f\u80fd\u7684\u5212\u5206\u4e0e\u7ba1\u7406\u3002"),(0,o.kt)("p",null,"oVirt \u53ef\u4ee5\u901a\u8fc7 Prometheus \u6765\u76d1\u63a7\u7ec4\u4ef6\u7684\u8fd0\u884c\uff0c\u4f7f\u7528\u7684 exporter \u4e3a ovirt_exporter \uff0cGitHub \u5730\u5740\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/czerwonk/ovirt_exporter"},"https://github.com/czerwonk/ovirt_exporter")),(0,o.kt)("p",null,"\u53ef\u4ee5\u5728 GitHub \u4e0a\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u4e0b\u8f7d\u597d\u4ee5\u540e\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u542f\u52a8\u811a\u672c\u6765\u542f\u52a8\u3002\u5b89\u88c5\u5b9e\u9645\u914d\u7f6e\u4fee\u6539\u90e8\u7f72\u8def\u5f84\u3001URL\u3001\u8d26\u53f7\u548c\u5bc6\u7801\u3002"),(0,o.kt)("p",null,"[root@Erdong-Prom ~]","# cat /usr/lib/systemd/system/ovirt-exporter.service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[Unit]\nDescription=oVirt Exporter\nAfter=network.target\n\n[Service]\nExecStart=/erdong/ovirt-exporter/ovirt_exporter -api.url=https://ovirt.erdong.site/ovirt-engine/api/ -api.username=admin@internal -api.password=xxxxxx -api.insecure-cert -web.listen-address=:9105\nUser=root\nRestart=always\nRestartSec=5\n\n[Install]\nWantedBy=multi-user.target\n\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 \u5bb9\u5668\u6765\u8fd0\u884c ovirt_expoter \uff0c\u4e0b\u8f7d\u955c\u50cf\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker pull czerwonk/ovirt_exporter:v0.9\n")))}u.isMDXComponent=!0}}]);