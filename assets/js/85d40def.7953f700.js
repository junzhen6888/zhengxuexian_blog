"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4029],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>m});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),h=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=h(e.components);return t.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},l=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=h(n),m=a,d=l["".concat(i,".").concat(m)]||l[m]||c[m]||o;return n?t.createElement(d,s(s({ref:r},u),{},{components:n})):t.createElement(d,s({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=l;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var h=2;h<o;h++)s[h]=n[h];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}l.displayName="MDXCreateElement"},9597:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>h});var t=n(87462),a=(n(67294),n(3905));const o={},s="Varnish Exporter",p={unversionedId:"prometheus/Exporter/3.33-varnish-exporter",id:"prometheus/Exporter/3.33-varnish-exporter",title:"Varnish Exporter",description:"Varnish \u662f\u4e00\u6b3e\u9ad8\u6027\u80fd\u7684\u5f00\u6e90 HTTP \u52a0\u901f\u5668\uff0c\u88ab\u5b89\u88c5\u5728web\u670d\u52a1\u5668\u4e4b\u524d\uff0c\u4ece\u800c\u7f13\u5b58web\u670d\u52a1\u5668\u7684\u5e94\u7528\u7a0b\u5e8f\u548c\u6570\u636e\uff0c\u6700\u540e\u76f8\u5e94\u5ba2\u6237\u7684\u8bf7\u6c42\u3002\u9488\u5bf9 Varnish \uff0cjonnenauha \u5f00\u6e90\u4e86\u4e00\u4e2a Exporter \u6765\u76d1\u63a7 Varnish \uff0c\u5b98\u65b9\u4ed3\u5e93\u5730\u5740\u662f https://github.com/jonnenauha/prometheusvarnishexporter \uff0c\u6700\u65b0\u7248\u672c\u662f 1.6.1 \uff0c\u53d1\u5e03\u4e8e 2021 \u5e74 12 \u6708 9 \u65e5\u3002",source:"@site/wiki/ops/prometheus/03-Exporter/3.33-varnish-exporter.md",sourceDirName:"prometheus/03-Exporter",slug:"/prometheus/Exporter/3.33-varnish-exporter",permalink:"/zhengxuexian_blog/ops/prometheus/Exporter/3.33-varnish-exporter",draft:!1,tags:[],version:"current",lastUpdatedBy:"zhengxuexian",lastUpdatedAt:1661407442,formattedLastUpdatedAt:"2022\u5e748\u670825\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ProxySQL Exporter",permalink:"/zhengxuexian_blog/ops/prometheus/Exporter/3.32-proxysql-exporter"},next:{title:"Json Exporter",permalink:"/zhengxuexian_blog/ops/prometheus/Exporter/3.34-json-exporter"}},i={},h=[],u={toc:h};function c(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"varnish-exporter"},"Varnish Exporter"),(0,a.kt)("p",null,"Varnish \u662f\u4e00\u6b3e\u9ad8\u6027\u80fd\u7684\u5f00\u6e90 HTTP \u52a0\u901f\u5668\uff0c\u88ab\u5b89\u88c5\u5728web\u670d\u52a1\u5668\u4e4b\u524d\uff0c\u4ece\u800c\u7f13\u5b58web\u670d\u52a1\u5668\u7684\u5e94\u7528\u7a0b\u5e8f\u548c\u6570\u636e\uff0c\u6700\u540e\u76f8\u5e94\u5ba2\u6237\u7684\u8bf7\u6c42\u3002\u9488\u5bf9 Varnish \uff0cjonnenauha \u5f00\u6e90\u4e86\u4e00\u4e2a Exporter \u6765\u76d1\u63a7 Varnish \uff0c\u5b98\u65b9\u4ed3\u5e93\u5730\u5740\u662f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jonnenauha/prometheus_varnish_exporter"},"https://github.com/jonnenauha/prometheus_varnish_exporter")," \uff0c\u6700\u65b0\u7248\u672c\u662f 1.6.1 \uff0c\u53d1\u5e03\u4e8e 2021 \u5e74 12 \u6708 9 \u65e5\u3002"),(0,a.kt)("p",null,"\u5728\u6bcf\u4e2a Prometheus \u6536\u96c6\u5e76\u516c\u5f00\u6240\u6709\u62a5\u544a\u7684\u6307\u6807\u65f6\uff0c\u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"varnishstat -j")," \u7684 JSON \u683c\u5f0f\u8f93\u51fa\u3002"),(0,a.kt)("p",null,"\u5177\u6709\u591a\u4e2a\u540e\u7aef\u6216 Varnish \u5b9a\u4e49\u7684\u6807\u8bc6\u7b26\u7684\u6307\u6807 (\u4f8b\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"VBE.*.happy SMA.*.c_bytes LCK.*.creat"),")\u548c\u5176\u4ed6\u5177\u6709\u7c7b\u4f3c\u7ed3\u6784\u7684\u6307\u6807(\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"MAIN.fetch_*"),") \u7ec4\u5408\u5728\u4e00\u4e2a\u5177\u6709\u53ef\u533a\u5206\u6807\u7b7e\u7684\u6307\u6807\u540d\u79f0\u4e0b\u3002\u5728\u6784\u5efa\u67e5\u8be2\u65f6\uff0c\u4e3a\u4e86\u8ba9 Varnish \u7528\u6237\u719f\u6089\uff0cVanish \u547d\u540d\u7ea6\u5b9a\u88ab\u5c3d\u53ef\u80fd\u5730\u4fdd\u7559\u4e0b\u6765\uff0c\u540c\u65f6\u5c1d\u8bd5\u9075\u5faa Prometheus \u7ea6\u5b9a\uff0c\u6bd4\u5982\u5c0f\u5199\u548c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"_"),"\u5206\u9694\u7b26\u3002"),(0,a.kt)("p",null,"Varnish \u5728\u5904\u7406\u8fd0\u884c\u65f6\u7684\u66f4\u6539\u65f6\uff0c\u6bd4\u5982\u901a\u8fc7 vlc \u91cd\u8f7d\u6dfb\u52a0\u65b0\u7684\u540e\u7aef\uff0c\u5728Varnish \u91cd\u65b0\u542f\u52a8\u4e4b\u524d\uff0c\u88ab\u5220\u9664\u7684\u540e\u7aef\u4f1a\u88ab ",(0,a.kt)("inlineCode",{parentName:"p"},"varnishstat")," \u62a5\u544a\u3002\u9ad8\u7ea7\u7528\u6237\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"-n -N"),"\uff0c\u5b83\u4eec\u88ab\u4f20\u9012\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"varnishstat"),"\u3002"),(0,a.kt)("p",null,"Varnish Exporter \u7684\u5f00\u53d1\u8005\u4eb2\u81ea\u6d4b\u8bd5\u4e86\u4ee5\u4e0b\u7248\u672c\u7684 Varnish\u662f\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\u7684\uff0c\u6bd4\u5982 6.0.0\uff0c5.2.1\uff0c5.1.2\uff0c4.1.1\uff0c4.1.0\uff0c4.0.3 \u548c 3.0.5\u3002\u5982\u679c Varnish \u9879\u76ee\u6ca1\u6709\u5220\u9664\u6216\u8005\u66f4\u6539\u7edf\u8ba1\u6570\u636e\uff0c\u90a3\u4e48\u5728 3.x \u4e2d\u7f3a\u5931\u7684\u7c7b\u522b\u5206\u7ec4\u4f1a\u88ab\u68c0\u6d4b\u5230\u5e76\u81ea\u52a8\u6dfb\u52a0\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"MAIN.")," \uff0c\u4f7f\u6807\u7b7e\u540d\u79f0\u8de8\u7248\u672c\u4fdd\u6301\u4e00\u81f4\uff0c"),(0,a.kt)("p",null,"\u5728\u8fd9\u4e00\u70b9\u4e0a\uff0cVarnish Exporter \u5f00\u53d1\u8005\u5bf9\u5411\u540e\u7684\u517c\u5bb9\u6027\u4e0d\u505a\u627f\u8bfa\u3002\u5982\u679c\u6307\u6807\u540d\u79f0\u6216\u6807\u7b7e\u88ab\u7ec6\u5316\uff0c\u6784\u5efa\u7684\u67e5\u8be2\u8bed\u53e5\u53ef\u80fd\u4f1a\u5728\u65b0\u7248\u672c\u4e0a\u4e2d\u65ad\uff0c\u9700\u8981\u91cd\u65b0\u6784\u5efa\u67e5\u8be2\u8bed\u53e5\u3002"),(0,a.kt)("h1",{id:"\u5b89\u88c5\u548c\u8fd0\u884c"},"\u5b89\u88c5\u548c\u8fd0\u884c"),(0,a.kt)("p",null,"Varnish Exporter \u53ef\u4ee5\u901a\u8fc7\u4e8c\u8fdb\u5236\u6765\u8fd0\u884c\uff0c\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jonnenauha/prometheus_varnish_exporter/releases"},"https://github.com/jonnenauha/prometheus_varnish_exporter/releases")," \u9875\u9762\u53ef\u4ee5\u4e0b\u8f7d\u5230\u6700\u65b0\u7248\u672c\uff0c\u5305\u62ec\u57fa\u4e8e\u5404\u79cd\u53d1\u884c\u7248\u64cd\u4f5c\u7cfb\u7edf\u3002"),(0,a.kt)("p",null,"Varnish Exporter \u7f3a\u7701\u4f1a\u901a\u8fc7 9131 \u7aef\u53e3\u6765\u66b4\u9732\u6307\u6807\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus_varnish_exporter -h")," \u53ef\u4ee5\u67e5\u770b Exporter \u652f\u6301\u7684\u9009\u9879\u3002"),(0,a.kt)("p",null,"Varnish Exporter \u91c7\u96c6\u76d1\u63a7\u9879\u662f\u901a\u8fc7\u673a\u5668\u4e0a\u7684 varnishstat \u547d\u4ee4\u6765\u83b7\u53d6\u7684\uff0c\u8981\u6d4b\u8bd5\u4e3b\u673a\u4e0a\u7684 varnishstat \u662f\u5426\u5b58\u5728\uff0c\u5e76\u9884\u89c8\u6240\u6709\u5bfc\u51fa\u6307\u6807\u7684\u8fd0\u884c\u60c5\u51b5\u53ef\u4ee5\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus_varnish_exporter -test")," \u6765\u67e5\u770b\uff0c\u5982\u679c\u6b63\u5e38\u53ef\u4ee5\u770b\u5230 JSON \u683c\u5f0f\u7684\u4fe1\u606f\u8f93\u51fa\u3002"),(0,a.kt)("p",null,"\u8fd0\u884c Varnish Exporter \u548c\u8fd0\u884c Node Exporter \u4e00\u6837\uff0c\u76f4\u63a5\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\u5c31\u53ef\u4ee5\u5728\u7f3a\u7701\u7684 9131 \u7aef\u53e3\u5f97\u5230 Prometheus \u683c\u5f0f\u7684\u76d1\u63a7\u6570\u636e\uff0c\u4e5f\u53ef\u4ee5\u6dfb\u52a0\u652f\u6301\u7684\u53c2\u6570\u6765\u8fdb\u884c\u4e00\u5b9a\u7684\u8c03\u6574\u3002"),(0,a.kt)("p",null,"Varnish Exporter \u652f\u6301\u4ece\u8fd0\u884c\u5728 docker \u5bb9\u5668\u4e2d\u7684 Varnish \u6293\u53d6\u76d1\u63a7\u6307\u6807\u662f\u4ece1.4.1\u5f00\u59cb\u7684\u3002\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker ps")," \u89e3\u6790 Varnish \u5bb9\u5668\u540d\u79f0\u5e76\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002\u8fd9\u5c06\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker exec")," \u5728\u6307\u5b9a\u7684\u5bb9\u5668\u4e2d\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"varnishstat"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"prometheus_varnish_exporter -docker-container-name <container_name>\n\n")),(0,a.kt)("h1",{id:"\u53ef\u89c6\u5316"},"\u53ef\u89c6\u5316"),(0,a.kt)("p",null,"\u4f5c\u8005\u63d0\u4f9b\u4e86\u4e00\u4e2a\u9884\u5148\u51c6\u5907\u597d\u7684 Grafana Dashboard \u4f9b\u5927\u5bb6\u8fdb\u884c\u53c2\u8003\uff0c\u6587\u4ef6\u5730\u5740\u662f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jonnenauha/prometheus_varnish_exporter/blob/master/dashboards/jonnenauha/dashboard.json"},"https://github.com/jonnenauha/prometheus_varnish_exporter/blob/master/dashboards/jonnenauha/dashboard.json")," \u3002"),(0,a.kt)("h1",{id:"varnish-4-\u548c-vcl-uuid"},"Varnish 4 \u548c VCL UUID"),(0,a.kt)("p",null,"\u4ece 1.2 \u7248\u5f00\u59cb\uff0c\u603b\u662f\u8bbe\u7f6e\u540e\u7aef\u548c\u670d\u52a1\u5668\u6807\u7b7e\u3002\u5bf9\u4e8e\u540e\u7aef\u76f8\u5173\u6307\u6807\u548c Varnish 4\uff0c\u670d\u52a1\u5668 tag \u5c06\u88ab\u8bbe\u7f6e\u4e3a\u540e\u7aef VCL UUID\u3002\u8bf7\u6ce8\u610f\uff0c\u53ef\u80fd\u540c\u65f6\u52a0\u8f7d\u4e86\u591a\u4e2aVCL \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u670d\u52a1\u5668 tag \u53ef\u80fd\u6ca1\u6709\u610f\u4e49\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u5c06\u6240\u6709\u52a0\u8f7d\u7684 VCL \u805a\u5408\u4e3a\u6bcf\u4e2a\u540e\u7aef\u6307\u6807\uff0c\u5efa\u8bae\u4f7f\u7528\u4ee5\u4e0bPrometheus\u8bb0\u5f55\u89c4\u5219:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"backend:varnish_backend_bereq_bodybytes:sum = sum(varnish_backend_bereq_bodybytes) without (server)\nbackend:varnish_backend_bereq_hdrbytes:sum = sum(varnish_backend_bereq_hdrbytes) without (server)\nbackend:varnish_backend_beresp_bodybytes:sum = sum(varnish_backend_beresp_bodybytes) without (server)\nbackend:varnish_backend_beresp_hdrbytes:sum = sum(varnish_backend_beresp_hdrbytes) without (server)\nbackend:varnish_backend_conn:sum = sum(varnish_backend_conn) without (server)\nbackend:varnish_backend_happy:sum = sum(varnish_backend_happy) without (server)\nbackend:varnish_backend_pipe_hdrbytes:sum = sum(varnish_backend_pipe) without (server)\nbackend:varnish_backend_pipe_in:sum = sum(varnish_backend_pipe_in) without (server)\nbackend:varnish_backend_pipe_out:sum = sum(varnish_backend_pipe_out) without (server)\nbackend:varnish_backend_req:sum = sum(varnish_backend_req) without (server)\n")))}c.isMDXComponent=!0}}]);