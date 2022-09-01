"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5161],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=i(n),d=l,h=k["".concat(u,".").concat(d)]||k[d]||m[d]||a;return n?r.createElement(h,p(p({ref:t},s),{},{components:n})):r.createElement(h,p({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,p=new Array(a);p[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,p[1]=o;for(var i=2;i<a;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},12890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var r=n(87462),l=(n(67294),n(3905));const a={},p="Prometheus \u57fa\u7840\u67e5\u8be2",o={unversionedId:"prometheus/PromQL/5.1-querying-basics",id:"prometheus/PromQL/5.1-querying-basics",title:"Prometheus \u57fa\u7840\u67e5\u8be2",description:"Prometheus \u63d0\u4f9b\u4e86\u4e00\u4e2a\u540d\u4e3a PromQL (Prometheus query language) \u7684\u51fd\u6570\u5f0f\u67e5\u8be2\u8bed\u8a00\uff0c\u5b83\u5141\u8bb8\u7528\u6237\u5b9e\u65f6\u9009\u62e9\u548c\u805a\u5408\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u3002\u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u53ef\u4ee5\u663e\u793a\u4e3a\u56fe\u5f62\uff0c\u5728 Prometheus \u7684\u8868\u8fbe\u5f0f\u6d4f\u89c8\u5668\u4e2d\u4f5c\u4e3a\u8868\u683c\u6570\u636e\u67e5\u770b\uff0c\u6216\u8005\u7531\u5916\u90e8\u7cfb\u7edf\u901a\u8fc7 HTTP API \u4f7f\u7528\u3002",source:"@site/wiki/ops/prometheus/05-PromQL/5.1-querying-basics.md",sourceDirName:"prometheus/05-PromQL",slug:"/prometheus/PromQL/5.1-querying-basics",permalink:"/zhengxuexian_blog/ops/prometheus/PromQL/5.1-querying-basics",draft:!1,tags:[],version:"current",lastUpdatedBy:"zhengxuexian",lastUpdatedAt:1662026865,formattedLastUpdatedAt:"2022\u5e749\u67081\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7b2c\u4e94\u7ae0",permalink:"/zhengxuexian_blog/ops/prometheus/PromQL/"},next:{title:"Prometheus \u67e5\u8be2\u64cd\u4f5c\u7b26",permalink:"/zhengxuexian_blog/ops/prometheus/PromQL/5.2-querying-operators"}},u={},i=[{value:"\u5b57\u7b26\u4e32\u7c7b\u578b",id:"\u5b57\u7b26\u4e32\u7c7b\u578b",level:2},{value:"\u6d6e\u70b9\u7c7b\u578b",id:"\u6d6e\u70b9\u7c7b\u578b",level:2},{value:"\u77ac\u65f6\u5411\u91cf",id:"\u77ac\u65f6\u5411\u91cf",level:2},{value:"\u8303\u56f4\u5411\u91cf",id:"\u8303\u56f4\u5411\u91cf",level:2},{value:"\u65f6\u95f4\u8303\u56f4",id:"\u65f6\u95f4\u8303\u56f4",level:3},{value:"offset \u504f\u79fb\u91cf\u4fee\u9970\u7b26",id:"offset-\u504f\u79fb\u91cf\u4fee\u9970\u7b26",level:2},{value:"@ \u4fee\u9970\u7b26",id:"-\u4fee\u9970\u7b26",level:2},{value:"\u8fc7\u671f\u6570\u636e",id:"\u8fc7\u671f\u6570\u636e",level:2},{value:"\u907f\u514d\u6162\u67e5\u8be2\u548c\u91cd\u8f7d",id:"\u907f\u514d\u6162\u67e5\u8be2\u548c\u91cd\u8f7d",level:2}],s={toc:i};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"prometheus-\u57fa\u7840\u67e5\u8be2"},"Prometheus \u57fa\u7840\u67e5\u8be2"),(0,l.kt)("p",null,"Prometheus \u63d0\u4f9b\u4e86\u4e00\u4e2a\u540d\u4e3a PromQL (Prometheus query language) \u7684\u51fd\u6570\u5f0f\u67e5\u8be2\u8bed\u8a00\uff0c\u5b83\u5141\u8bb8\u7528\u6237\u5b9e\u65f6\u9009\u62e9\u548c\u805a\u5408\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u3002\u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u53ef\u4ee5\u663e\u793a\u4e3a\u56fe\u5f62\uff0c\u5728 Prometheus \u7684\u8868\u8fbe\u5f0f\u6d4f\u89c8\u5668\u4e2d\u4f5c\u4e3a\u8868\u683c\u6570\u636e\u67e5\u770b\uff0c\u6216\u8005\u7531\u5916\u90e8\u7cfb\u7edf\u901a\u8fc7 HTTP API \u4f7f\u7528\u3002"),(0,l.kt)("h1",{id:"\u67e5\u8be2\u8868\u8fbe\u5f0f\u8bed\u8a00\u6570\u636e\u7c7b\u578b"},"\u67e5\u8be2\u8868\u8fbe\u5f0f\u8bed\u8a00\u6570\u636e\u7c7b\u578b"),(0,l.kt)("p",null,"\u5728 Prometheus \u7684\u8868\u8fbe\u5f0f\u8bed\u8a00\u4e2d\uff0c\u8868\u8fbe\u5f0f\u6216\u5b50\u8868\u8fbe\u5f0f\u53ef\u4ee5\u88ab\u8ba1\u7b97\u4e3a\u4ee5\u4e0b\u56db\u79cd\u7c7b\u578b\u4e4b\u4e00:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Instant vector \u77ac\u65f6\u5411\u91cf\u662f\u4e00\u7ec4\u65f6\u95f4\u5e8f\u5217\uff0c\u5305\u542b\u6bcf\u4e2a\u65f6\u95f4\u5e8f\u5217\u7684\u5355\u4e2a\u6837\u672c\uff0c\u6240\u6709\u6570\u503c\u5171\u4eab\u76f8\u540c\u7684\u65f6\u95f4\u6233"),(0,l.kt)("li",{parentName:"ul"},"Range vector \u8303\u56f4\u5411\u91cf\u662f\u4e00\u7ec4\u65f6\u95f4\u5e8f\u5217\uff0c\u5305\u542b\u6bcf\u4e2a\u65f6\u95f4\u5e8f\u5217\u968f\u65f6\u95f4\u53d8\u5316\u7684\u4e00\u7cfb\u5217\u6570\u636e\u70b9"),(0,l.kt)("li",{parentName:"ul"},"Scalar \u6807\u91cf\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u6570\u5b57\u6d6e\u70b9\u503c"),(0,l.kt)("li",{parentName:"ul"},"String \u7b80\u5355\u7684\u5b57\u7b26\u4e32\u503c\uff0c\u76ee\u524d\u672a\u4f7f\u7528")),(0,l.kt)("p",null,"\u6839\u636e\u7528\u4f8b\u7684\u4e0d\u540c(\u4f8b\u5982\uff0c\u5f53\u56fe\u5f62\u5316\u548c\u663e\u793a\u8868\u8fbe\u5f0f\u7684\u8f93\u51fa\u65f6)\uff0c\u53ea\u6709\u4e00\u4e9b\u7c7b\u578b\u662f\u5408\u6cd5\u7684\uff0c\u4f5c\u4e3a\u7528\u6237\u6307\u5b9a\u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u3002\u4f8b\u5982\uff0c\u8fd4\u56de\u5373\u65f6\u5411\u91cf\u7684\u8868\u8fbe\u5f0f\u662f\u552f\u4e00\u53ef\u4ee5\u76f4\u63a5\u7ed8\u5236\u56fe\u5f62\u7684\u7c7b\u578b\u3002"),(0,l.kt)("h1",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("h2",{id:"\u5b57\u7b26\u4e32\u7c7b\u578b"},"\u5b57\u7b26\u4e32\u7c7b\u578b"),(0,l.kt)("p",null,"\u5b57\u7b26\u4e32\u53ef\u4ee5\u6307\u5b9a\u4e3a\u5355\u5f15\u53f7\u3001\u53cc\u5f15\u53f7\u6216\u53cd\u5f15\u53f7\u4e2d\u7684\u6587\u5b57\u3002"),(0,l.kt)("p",null,"PromQL \u9075\u5faa\u4e0e Go \u76f8\u540c\u7684\u8f6c\u4e49\u89c4\u5219\u3002\u5728\u5355\u5f15\u53f7\u6216\u53cc\u5f15\u53f7\u4e2d\uff0c\u53cd\u659c\u6760\u5f00\u59cb\u8f6c\u4e49\u5e8f\u5217\uff0c\u8f6c\u4e49\u5e8f\u5217\u540e\u9762\u53ef\u80fd\u8ddf\u7740 a, b, f, n, r, t, v\u6216\\\u3002\u53ef\u4ee5\u4f7f\u7528\u516b\u8fdb\u5236(\\nnn)\u6216\u5341\u516d\u8fdb\u5236(\\xnn\uff0c \\unnnn\u548c\\ unnnnnnn)\u6765\u63d0\u4f9b\u7279\u5b9a\u7684\u5b57\u7b26\u3002"),(0,l.kt)("p",null,"\u53cd\u5f15\u53f7\u5185\u4e0d\u5904\u7406\u8f6c\u4e49\u3002\u4e0e Go \u4e0d\u540c\u7684\u662f\uff0cPrometheus \u4e0d\u4f1a\u4e22\u5f03\u53cd\u5f15\u53f7\u5185\u7684\u6362\u884c\u7b26\u3002"),(0,l.kt)("p",null,"\u4f8b\u5b50:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\"this is a string\"\n'these are unescaped: \\n \\\\ \\t'\n`these are not unescaped: \\n ' \" \\t`\n")),(0,l.kt)("h2",{id:"\u6d6e\u70b9\u7c7b\u578b"},"\u6d6e\u70b9\u7c7b\u578b"),(0,l.kt)("p",null,"\u6807\u91cf\u6d6e\u70b9\u503c\u53ef\u4ee5\u5199\u6210\u6587\u5b57\u6574\u6570\u6216\u6d6e\u70b9\u6570\u7684\u683c\u5f0f(\u4e3a\u4e86\u66f4\u597d\u7684\u53ef\u8bfb\u6027\uff0c\u53ea\u5305\u542b\u7a7a\u683c):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[-+]?(\n      [0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?\n    | 0[xX][0-9a-fA-F]+\n    | [nN][aA][nN]\n    | [iI][nN][fF]\n)\n")),(0,l.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"23\n-2.43\n3.4e-9\n0x8f\n-Inf\nNaN\n")),(0,l.kt)("h1",{id:"\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u9009\u62e9\u5668"},"\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u9009\u62e9\u5668"),(0,l.kt)("h2",{id:"\u77ac\u65f6\u5411\u91cf"},"\u77ac\u65f6\u5411\u91cf"),(0,l.kt)("p",null,"\u77ac\u65f6\u5411\u91cf\u5141\u8bb8\u5728\u7ed9\u5b9a\u7684\u65f6\u95f4\u6233\u4e2d\u9009\u62e9\u4e00\u7ec4\u65f6\u95f4\u5e8f\u5217\u548c\u6bcf\u4e2a\u65f6\u95f4\u5e8f\u5217\u7684\u5355\u4e2a\u6570\u503c:\u5728\u6700\u7b80\u5355\u7684\u5f62\u5f0f\u4e2d\uff0c\u53ea\u6307\u5b9a\u4e00\u4e2a\u6307\u6807\u540d\u79f0\u3002\u8fd9\u5c06\u5f97\u5230\u4e00\u4e2a\u5305\u542b\u6240\u6709\u65f6\u95f4\u5e8f\u5217\u5143\u7d20\u7684\u77ac\u65f6\u5411\u91cf\uff0c\u8fd9\u4e9b\u5143\u7d20\u5177\u6709\u8fd9\u4e2a\u6307\u6807\u540d\u79f0\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982 http_requests_total \u8fd9\u4e2a\u6307\u6807\u540d\u79f0\u7684\u65f6\u95f4\u5e8f\u5217:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http_requests_total\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5728\u82b1\u62ec\u53f7({})\u4e2d\u6dfb\u52a0\u9017\u53f7\u5206\u9694\u7684\u6807\u7b7e\u5339\u914d\u5668\u5217\u8868\u6765\u8fdb\u4e00\u6b65\u7b5b\u9009\u8fd9\u4e9b\u65f6\u95f4\u5e8f\u5217\u3002"),(0,l.kt)("p",null,"\u8fd9\u6b21\u4f9d\u7136\u9009\u62e9 http_requests_total \u6307\u6807\u540d\u79f0\u7684\u65f6\u95f4\u5e8f\u5217\uff0c\u8fd9\u4e9b\u65f6\u95f4\u5e8f\u5217\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"job")," \u6807\u7b7e\uff08label\uff09\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"prometheus"),"\uff0cgroup \u6807\u7b7e\uff08label\uff09\u8bbe\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"canary"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'http_requests_total{job="prometheus",group="canary"}\n')),(0,l.kt)("p",null,"\u5728\u5339\u914d\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u4f7f\u7528\u5426\u5b9a\u5339\u914d\u6807\u7b7e\u503c\uff0c\u6216\u8005\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u6807\u7b7e\u503c\u3002\u5b58\u5728\u4ee5\u4e0b\u7684\u6807\u7b7e\u5339\u914d\u64cd\u4f5c\u7b26:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"=: \u9009\u62e9\u4e0e\u63d0\u4f9b\u7684\u5b57\u7b26\u4e32\u5b8c\u5168\u76f8\u7b49\u7684\u6807\u7b7e\u3002"),(0,l.kt)("li",{parentName:"ul"},"!=: \u9009\u62e9\u4e0d\u7b49\u4e8e\u63d0\u4f9b\u7684\u5b57\u7b26\u4e32\u7684\u6807\u7b7e\u3002"),(0,l.kt)("li",{parentName:"ul"},"=~: \u9009\u62e9\u4e0e\u63d0\u4f9b\u7684\u5b57\u7b26\u4e32\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u7684\u6807\u7b7e\u3002"),(0,l.kt)("li",{parentName:"ul"},"~:  \u9009\u62e9\u4e0e\u63d0\u4f9b\u7684\u5b57\u7b26\u4e32\u4e0d\u5339\u914d\u7684\u6807\u7b7e\u3002")),(0,l.kt)("p",null,"\u4f8b\u5982\u4e0b\u5217\u7684\u8bed\u53e5\u53ef\u4ee5\u67e5\u8be2 http_requests_total \u65f6\u95f4\u5e8f\u5217\u6570\u636e\uff0c\u5c06\u73af\u5883\u53d8\u91cf\u4e3a staging, testing,  development \u7684\u6570\u636e\u67e5\u8be2\u51fa\u6765 \uff0c\u5e76\u4e14\u6392\u9664\u6389 HTTP \u65b9\u6cd5\u4e3a GET \u7684\u6570\u636e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'http_requests_total{environment=~"staging|testing|development",method!="GET"}\n')),(0,l.kt)("p",null,"\u5339\u914d\u7a7a\u6807\u7b7e\u503c\u7684\u6807\u7b7e\u5339\u914d\u5668\u4e5f\u4f1a\u9009\u62e9\u5b8c\u5168\u6ca1\u6709\u7279\u5b9a\u6807\u7b7e\u96c6\u7684\u6240\u6709\u65f6\u95f4\u5e8f\u5217\u3002\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u5b8c\u5168\u951a\u5b9a\u3002\u5bf9\u4e8e\u76f8\u540c\u7684\u6807\u7b7e\u540d\uff0c\u53ef\u4ee5\u6709\u591a\u4e2a\u5339\u914d\u5668\u3002"),(0,l.kt)("p",null,"\u5411\u91cf\u67e5\u8be2\u5fc5\u987b\u6307\u5b9a\u4e0e\u7a7a\u5b57\u7b26\u4e32\u4e0d\u5339\u914d\u7684\u540d\u79f0\u6216\u81f3\u5c11\u4e00\u4e2a\u6807\u7b7e\uff0c\u4e0d\u80fd\u5339\u914d\u5230\u5e76\u4e14\u53ea\u5339\u914d\u5230\u7a7a\u7684\u5b57\u7b26\u4e32\u3002\u6bd4\u5982\u4e0b\u9762\u7684\u8868\u8fbe\u5f0f\u662f\u9519\u8bef\u7684:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# \u9519\u8bef\u7684\u67e5\u8be2\n{job=~".*"} \n')),(0,l.kt)("p",null,"\u76f8\u53cd\uff0c\u4e0b\u9762\u8fd9\u4e9b\u8868\u8fbe\u5f0f\u662f\u6709\u6548\u7684\uff0c\u56e0\u4e3a\u5b83\u4eec\u90fd\u6709\u4e0d\u5339\u914d\u7a7a\u6807\u7b7e\u503c\u7684\u9009\u62e9\u5668\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# \u6b63\u786e\u7684\u67e5\u8be2\n{job=~".+"}              \n{job=~".*",method="get"} \n')),(0,l.kt)("p",null,"\u901a\u8fc7\u5339\u914d\u5185\u90e8\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"__name__"),"\u6807\u7b7e(\u53cc\u4e0b\u5212\u7ebf\u5f00\u5934\u7684\u540d\u79f0\u90fd\u662f\u5185\u90e8\u4fdd\u7559\u7684\u6307\u6807\u540d\u79f0)\uff0c\u6807\u7b7e\u4e5f\u53ef\u4ee5\u5e94\u7528\u4e8e\u6307\u6807\u540d\u79f0\u3002\u4f8b\u5982\uff0c\u8868\u8fbe\u5f0fhttp_requests_total\u7b49\u4ef7\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},'{__name__="http_requests_total"}'),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"="),"\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"!="),"\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"=~"),"\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"!~"),"\u8fd9\u4e9b\u90fd\u53ef\u4ee5\u4f7f\u7528\u3002\u4e0b\u9762\u7684\u8868\u8fbe\u5f0f\u9009\u62e9\u6240\u6709\u540d\u79f0\u4ee5job\u5f00\u5934\u7684\u6307\u6807"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{__name__=~"job:.*"}\n\n')),(0,l.kt)("p",null,"\u6307\u6807\u540d\u79f0\u4e0d\u80fd\u662fbool\u3001on\u3001ignore\u3001group_left\u548c group_right \u8fd9\u4e9b\u5173\u952e\u5b57\u4e4b\u4e00\u3002\u4e0b\u9762\u7684\u8868\u8fbe\u5f0f\u662f\u9519\u8bef\u7684:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u9519\u8bef\u7684\u67e5\u8be2\non{}\n")),(0,l.kt)("p",null,"\u89e3\u51b3\u8fd9\u4e2a\u9650\u5236\u7684\u65b9\u6cd5\u662f\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"__name__"),"\u6807\u7b7e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# \u6b63\u786e\u7528\u6cd5\n{__name__="on"}\n')),(0,l.kt)("h2",{id:"\u8303\u56f4\u5411\u91cf"},"\u8303\u56f4\u5411\u91cf"),(0,l.kt)("p",null,"\u8303\u56f4\u5411\u91cf\u7684\u5de5\u4f5c\u65b9\u5f0f\u7c7b\u4f3c\u4e8e\u77ac\u65f6\u5411\u91cf\uff0c\u9664\u4e86\u5b83\u4eec\u4ece\u5f53\u524d\u77ac\u95f4\u9009\u62e9\u8fd4\u56de\u7684\u6570\u636e\u8303\u56f4\u3002\u4ece\u8bed\u6cd5\u4e0a\u8bb2\uff0c\u5728\u5411\u91cf\u9009\u62e9\u5668\u7684\u672b\u5c3e\u7528\u65b9\u62ec\u53f7([])\u9644\u52a0\u4e00\u4e2a\u65f6\u95f4\u6301\u7eed\u65f6\u95f4\uff0c\u4ee5\u6307\u5b9a\u6bcf\u4e2a\u7ed3\u679c\u8303\u56f4\u5411\u91cf\u5143\u7d20\u5e94\u8be5\u83b7\u53d6\u7684\u65f6\u95f4\u503c\u3002"),(0,l.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u9009\u62e9\u6307\u6807\u540d\u79f0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"http_requests_total")," \u4e14 ",(0,l.kt)("inlineCode",{parentName:"p"},"job")," label \u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"prometheus")," \u7684\u6240\u6709\u65f6\u95f4\u5e8f\u5217\u5728\u8fc7\u53bb5\u5206\u949f\u5185\u8bb0\u5f55\u7684\u6240\u6709\u503c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'http_requests_total{job="prometheus"}[5m]\n')),(0,l.kt)("h3",{id:"\u65f6\u95f4\u8303\u56f4"},"\u65f6\u95f4\u8303\u56f4"),(0,l.kt)("p",null,"\u65f6\u95f4\u957f\u5ea6\u6307\u5b9a\u4e3a\u4e00\u4e2a\u6570\u5b57\uff0c\u540e\u9762\u7d27\u8ddf\u7740\u4e0b\u5217\u5355\u4f4d\u4e4b\u4e00:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ms - milliseconds \u6beb\u79d2"),(0,l.kt)("li",{parentName:"ul"},"s - seconds \u79d2"),(0,l.kt)("li",{parentName:"ul"},"m - minutes \u5206\u949f"),(0,l.kt)("li",{parentName:"ul"},"h - hours \u5c0f\u65f6"),(0,l.kt)("li",{parentName:"ul"},"d - days \u5929\uff0c\u5047\u8bbe\u4e00\u5929\u603b\u662f 24h\u3002\u4e3a\u4ec0\u4e48\u8981\u5047\u8bbe\uff0c\u56e0\u4e3a\u6211\u4eec\u73b0\u5728\u662f\u4f5c\u4e3a\u8ba1\u91cf\u5355\u4f4d\u6765\u8fdb\u884c\u63cf\u8ff0\uff0c\u5982\u679c\u6309\u7167\u81ea\u7136\u5730\u7403\u65e5\u6216\u8005\u5176\u4ed6\u5404\u79cd\u5386\u6cd5\uff0c\u4e00\u5929\u4e0d\u4e00\u5b9a\u662f\u5b8c\u6574\u7684\uff0c\u6b63\u6b63\u597d\u597d\u7684 24 h \u3002"),(0,l.kt)("li",{parentName:"ul"},"w - weeks  \u5468\uff0c\u5047\u8bbe\u4e00\u5468\u603b\u662f 7 \u5929\u3002\u540c\u7406\u4e0a\u4e00\u6761\u3002"),(0,l.kt)("li",{parentName:"ul"},"y - years  \u5e74\uff0c\u5047\u8bbe\u4e00\u5e74\u603b\u662f 365 \u5929\u3002\u95f0\u5e74\u662f 366 \u5929\u561b\uff0c\u6240\u4ee5\u8fd9\u4e2a\u65f6\u95f4\u8ba1\u91cf\u5355\u4f4d\u662f\u4e0d\u5206\u5e73\u5e74\u548c\u95f0\u5e74\u7684\u3002")),(0,l.kt)("p",null,"\u65f6\u95f4\u6301\u7eed\u8303\u56f4\u53ef\u4ee5\u901a\u8fc7\u8fde\u63a5\u6765\u7ec4\u5408\u3002\u5355\u4f4d\u5fc5\u987b\u6309\u4ece\u5927\u5230\u5c0f\u7684\u987a\u5e8f\u6392\u5217\u3002\u4e00\u4e2a\u7ed9\u5b9a\u7684\u5355\u4f4d\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u53ea\u80fd\u51fa\u73b0\u4e00\u6b21\u3002\n\u6bd4\u5982"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1h\n2h20m\n5m\n15s\n")),(0,l.kt)("h2",{id:"offset-\u504f\u79fb\u91cf\u4fee\u9970\u7b26"},"offset \u504f\u79fb\u91cf\u4fee\u9970\u7b26"),(0,l.kt)("p",null,"offset \u504f\u79fb\u91cf\u4fee\u9970\u7b26\u5141\u8bb8\u66f4\u6539\u67e5\u8be2\u4e2d\u5355\u4e2a\u77ac\u65f6\u5411\u91cf\u548c\u8303\u56f4\u5411\u91cf\u7684\u65f6\u95f4\u504f\u79fb\u91cf\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u8868\u8fbe\u5f0f\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"http_requests_total")," \u76f8\u5bf9\u4e8e\u5f53\u524d\u67e5\u8be2\u8ba1\u7b97\u65f6\u95f4\u8fc7\u53bb5\u5206\u949f\u7684\u503c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http_requests_total offset 5m\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c\u504f\u79fb\u91cf\u4fee\u9970\u7b26\u603b\u662f\u9700\u8981\u7d27\u8ddf\u5728\u5411\u91cf\u540e\u9762\uff0c\u6bd4\u5982\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# \u6b63\u786e\u5199\u6cd5\nsum(http_requests_total{method="GET"} offset 5m) \n\n# \u9519\u8bef\u5199\u6cd5\nsum(http_requests_total{method="GET"}) offset 5m \n')),(0,l.kt)("p",null,"\u5bf9\u4e8e\u8303\u56f4\u5411\u91cf\u4e5f\u662f\u4e00\u6837\u7684\u3002\u6bd4\u5982\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\u5c06\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"http_requests_total")," \u4e00\u5468\u524d\u76845\u5206\u949f\u901f\u7387:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rate(http_requests_total[5m] offset 1w)\n")),(0,l.kt)("p",null,"\u4e3a\u4e86\u4e0e\u65f6\u95f4\u524d\u79fb\u7684\u65f6\u95f4\u6bd4\u8f83\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u8d1f\u504f\u79fb:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rate(http_requests_total[5m] offset -1w)\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u7279\u6027\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"--enable-feature=promql-negative-offset"),"\u6807\u5fd7\u6765\u542f\u7528\u3002"),(0,l.kt)("h2",{id:"-\u4fee\u9970\u7b26"},"@ \u4fee\u9970\u7b26"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@")," \u4fee\u9970\u7b26\u5141\u8bb8\u5728\u67e5\u8be2\u4e2d\u66f4\u6539\u5355\u4e2a\u77ac\u65f6\u5411\u91cf\u548c\u8303\u56f4\u5411\u91cf\u7684\u8ba1\u7b97\u65f6\u95f4\u3002\u63d0\u4f9b\u7ed9",(0,l.kt)("inlineCode",{parentName:"p"},"@")," \u4fee\u9970\u7b26\u7684\u65f6\u95f4\u662f\u4e00\u4e2aunix\u65f6\u95f4\u6233\uff0c\u7528\u6d6e\u70b9\u6570\u503c\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\u4e0b\u9762\u8fd9\u4e2a \u4f8b\u5b50\u5c31\u4f1a\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"http_requests_total")," \u57282021-01-04T07:40:00+00:00 \u7684\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http_requests_total @ 1609746000\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c\u504f\u79fb\u91cf\u4fee\u9970\u7b26\u603b\u662f\u9700\u8981\u7d27\u8ddf\u5728\u5411\u91cf\u540e\u9762\uff0c\u6bd4\u5982\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# \u6b63\u786e\u5199\u6cd5\nsum(http_requests_total{method="GET"} @ 1609746000)\n\n# \u9519\u8bef\u5199\u6cd5\nsum(http_requests_total{method="GET"}) @ 1609746000\n')),(0,l.kt)("p",null,"\u5bf9\u4e8e\u8303\u56f4\u5411\u91cf\u4e5f\u662f\u4e00\u6837\u7684\u3002\u6bd4\u5982\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\u5c06\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"http_requests_total"),"  \u6307\u5b9a\u65f6\u95f4\u7684\u503c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rate(http_requests_total[5m] @ 1609746000)\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@")," \u4fee\u9970\u7b26\u5728int64\u8303\u56f4\u5185\u652f\u6301\u4e0a\u8ff0\u6d6e\u70b9\u503c\u7684\u6240\u6709\u8868\u793a\u3002\u5b83\u8fd8\u53ef\u4ee5\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"offset"),"\u4fee\u9970\u7b26\u4e00\u8d77\u4f7f\u7528\uff0c\u5176\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"offset"),"\u662f\u76f8\u5bf9\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"@"),"\u4fee\u9970\u7b26\u65f6\u95f4\u5e94\u7528\u7684\uff0c\u800c\u4e0d\u7ba1\u54ea\u4e2a\u4fee\u9970\u7b26\u5148\u5199\u3002\u8fd9\u4e24\u4e2a\u67e5\u8be2\u5c06\u4ea7\u751f\u76f8\u540c\u7684\u7ed3\u679c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# offset after @\nhttp_requests_total @ 1609746000 offset 5m\n# offset before @\nhttp_requests_total offset 5m @ 1609746000\n")),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e2a\u4fee\u9970\u7b26\u662f\u7981\u7528\u7684\uff0c\u56e0\u4e3a\u5b83\u7834\u574f\u4e86 PromQL \u4e0d\u80fd\u63d0\u524d\u67e5\u770b\u793a\u4f8b\u7684\u8bc4\u4f30\u65f6\u95f4\u7684\u4e0d\u53d8\u6761\u4ef6\u3002\u5b83\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"--enable-feature=promql-at-modifier"),"\u6807\u5fd7\u6765\u542f\u7528\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"start()"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"end()"),"\u4e5f\u53ef\u4ee5\u4f5c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"@"),"\u4fee\u9970\u7b26\u7684\u503c\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u8303\u56f4\u67e5\u8be2\uff0c\u5b83\u4eec\u5206\u522b\u89e3\u6790\u5230\u8303\u56f4\u67e5\u8be2\u7684\u5f00\u59cb\u548c\u7ed3\u675f\uff0c\u5e76\u5bf9\u6240\u6709\u6b65\u9aa4\u4fdd\u6301\u76f8\u540c\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u5373\u65f6\u67e5\u8be2\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"start()"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"end()"),"\u90fd\u89e3\u6790\u4e3a\u8ba1\u7b97\u65f6\u95f4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http_requests_total @ start()\nrate(http_requests_total[5m] @ end())\n")),(0,l.kt)("h1",{id:"\u5b50\u67e5\u8be2"},"\u5b50\u67e5\u8be2"),(0,l.kt)("p",null,"\u5b50\u67e5\u8be2\u5141\u8bb8\u60a8\u9488\u5bf9\u7ed9\u5b9a\u7684\u8303\u56f4\u548c\u5206\u8fa8\u7387\u8fd0\u884c\u5373\u65f6\u67e5\u8be2\u3002\u5b50\u67e5\u8be2\u7684\u7ed3\u679c\u662f\u4e00\u4e2a\u8303\u56f4\u5411\u91cf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8bed\u6cd5: <instant_query> '[' <range> ':' [<resolution>] ']' [ @ <float_literal> ] [ offset <duration> ]\n\n<resolution>\u8fd9\u4e2a\u9009\u9879\u662f\u53ef\u9009\u7684\u3002\u9ed8\u8ba4\u503c\u662f\u5168\u5c40\u8ba1\u7b97\u95f4\u9694\u3002\n\n")),(0,l.kt)("h1",{id:"\u64cd\u4f5c\u7b26"},"\u64cd\u4f5c\u7b26"),(0,l.kt)("p",null,"Prometheus \u652f\u6301\u8bb8\u591a\u4e8c\u8fdb\u5236\u548c\u805a\u5408\u64cd\u4f5c\u7b26\u3002\u8fd9\u4e9b\u5728\u8868\u8fbe\u5f0f\u8bed\u8a00\u64cd\u4f5c\u7b26\u9875\u9762\u4e2d\u6709\u8be6\u7ec6\u63cf\u8ff0\u3002"),(0,l.kt)("h1",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,l.kt)("p",null,"Prometheus \u652f\u6301\u51e0\u4e2a\u5bf9\u6570\u636e\u8fdb\u884c\u64cd\u4f5c\u7684\u51fd\u6570\u3002\u8868\u8fbe\u5f0f\u8bed\u8a00\u51fd\u6570\u9875\u9762\u8be6\u7ec6\u63cf\u8ff0\u4e86\u8fd9\u4e9b\u51fd\u6570\u3002"),(0,l.kt)("h1",{id:"\u6ce8\u91ca"},"\u6ce8\u91ca"),(0,l.kt)("p",null,"PromQL\u652f\u6301\u4ee5 # \u5f00\u5934\u7684\u884c\u6ce8\u91ca\u3002\u4f8b\u5b50:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," # This is a comment\n")),(0,l.kt)("h1",{id:"promql-\u67e5\u8be2\u7684\u7f3a\u9677"},"PromQL \u67e5\u8be2\u7684\u7f3a\u9677"),(0,l.kt)("h2",{id:"\u8fc7\u671f\u6570\u636e"},"\u8fc7\u671f\u6570\u636e"),(0,l.kt)("p",null,"\u5728\u6267\u884c\u67e5\u8be2\u8bed\u53e5\u65f6\uff0c\u62bd\u6837\u6570\u636e\u6240\u5728\u7684\u65f6\u95f4\u6233\u5c06\u72ec\u7acb\u4e8e\u5f53\u524d\u7684\u5b9e\u9645\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u8fdb\u884c\u9009\u62e9\u3002\u8fd9\u4e3b\u8981\u662f\u4e3a\u4e86\u652f\u6301\u50cf\u805a\u5408(sum\u3001avg\u7b49)\u8fd9\u6837\u7684\u60c5\u51b5\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u591a\u4e2a\u805a\u5408\u65f6\u95f4\u5e8f\u5217\u4e0d\u80fd\u5728\u65f6\u95f4\u4e0a\u7cbe\u786e\u5bf9\u9f50\u3002\u7531\u4e8e\u5b83\u4eec\u7684\u72ec\u7acb\u6027\uff0cPrometheus \u9700\u8981\u5728\u8fd9\u4e9b\u65f6\u95f4\u6233\u4e0a\u4e3a\u6bcf\u4e2a\u76f8\u5173\u7684\u65f6\u95f4\u5e8f\u5217\u5206\u914d\u4e00\u4e2a\u503c\u3002\u5b83\u53ea\u9700\u8981\u5728\u8fd9\u4e2a\u65f6\u95f4\u6233\u4e4b\u524d\u83b7\u53d6\u6700\u65b0\u7684\u6837\u672c\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u6307\u6807\u83b7\u53d6\u6216\u89c4\u5219\u8bc4\u4f30\u4e0d\u518d\u8fd4\u56de\u4ee5\u524d\u5b58\u5728\u7684\u65f6\u95f4\u5e8f\u5217\u6570\u636e\uff0c\u5219\u8be5\u65f6\u95f4\u5e8f\u5217\u5c06\u88ab\u6807\u8bb0\u4e3a\u9648\u65e7\u3002\u5982\u679c\u5220\u9664\u4e86\u76ee\u6807\uff0c\u90a3\u4e48\u4e4b\u524d\u8fd4\u56de\u7684\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u5f88\u5feb\u5c31\u4f1a\u88ab\u6807\u8bb0\u4e3a\u8fc7\u65f6\u7684\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u5728\u4e00\u4e2a\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u88ab\u6807\u8bb0\u4e3a\u8fc7\u65f6\u4e4b\u540e\uff0c\u5728\u4e00\u4e2a\u91c7\u6837\u65f6\u95f4\u6233\u4e0a\u8ba1\u7b97\u67e5\u8be2\uff0c\u5219\u4e0d\u4f1a\u4e3a\u8be5\u65f6\u95f4\u5e8f\u5217\u8fd4\u56de\u503c\u3002\u5982\u679c\u968f\u540e\u5728\u8be5\u65f6\u95f4\u5e8f\u5217\u4e2d\u6444\u5165\u4e86\u65b0\u7684\u6570\u636e\uff0c\u5b83\u4eec\u5c06\u88ab\u6b63\u5e38\u9000\u56de\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u5728\u91c7\u6837\u65f6\u95f4\u62335\u5206\u949f\u524d\u6ca1\u6709\u627e\u5230\u6570\u636e(\u9ed8\u8ba4\u60c5\u51b5\u4e0b)\uff0c\u5219\u8be5\u65f6\u95f4\u5e8f\u5217\u5728\u6b64\u65f6\u95f4\u70b9\u4e0a\u6ca1\u6709\u8fd4\u56de\u503c\u3002\u8fd9\u5b9e\u9645\u4e0a\u610f\u5473\u7740\uff0c\u5f53\u6700\u65b0\u6536\u96c6\u7684\u6837\u672c\u65f6\u95f4\u8d85\u8fc75\u5206\u949f\uff0c\u6216\u8005\u88ab\u6807\u8bb0\u4e3a\u9648\u65e7\u65f6\uff0c\u65f6\u95f4\u5e8f\u5217\u5c31\u4f1a\u4ece\u56fe\u8868\u4e2d\u201c\u6d88\u5931\u201d\u3002"),(0,l.kt)("p",null,"\u5728\u65f6\u95f4\u5e8f\u5217\u4e2d\u5305\u542b\u65f6\u95f4\u6233\u7684\u65f6\u95f4\u5e8f\u5217\u5c06\u4e0d\u4f1a\u88ab\u6807\u8bb0\u4e3a\u8fc7\u65f6\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ea\u5e94\u75285\u5206\u949f\u9608\u503c\u3002"),(0,l.kt)("h2",{id:"\u907f\u514d\u6162\u67e5\u8be2\u548c\u91cd\u8f7d"},"\u907f\u514d\u6162\u67e5\u8be2\u548c\u91cd\u8f7d"),(0,l.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u67e5\u8be2\u9700\u8981\u64cd\u4f5c\u5927\u91cf\u7684\u6570\u636e\uff0c\u628a\u8fd9\u4e2a\u67e5\u8be2\u7ed3\u679c\u7ed8\u5236\u6210\u56fe\u5f62\u53ef\u80fd\u4f1a\u8d85\u65f6\uff0c\u4e5f\u6709\u53ef\u80fd\u4f7fPrometheus \u670d\u52a1\u6216\u8005\u6d4f\u89c8\u5668\u5d29\u6e83\u3002\u56e0\u6b64\uff0c\u5728\u6267\u884c\u5bf9\u672a\u77e5\u6570\u636e\u7684\u67e5\u8be2\u65f6\uff0c\u5c3d\u91cf\u6216\u8005\u5e94\u5f53\u9996\u5148\u5728 Prometheus \u7684\u8868\u8fbe\u5f0f\u6d4f\u89c8\u5668\u7684\u8868\u683c\u89c6\u56fe\u4e2d\u5f00\u59cb\u6267\u884c\u67e5\u8be2\u8fc7\u7a0b\uff0c\u4e5f\u5c31\u662f\u5148\u67e5\u8be2\u4e00\u4e2a\u77ac\u65f6\u503c\uff0c\u76f4\u5230\u7ed3\u679c\u96c6\u770b\u8d77\u6765\u5408\u7406\u4e3a\u6b62(\u6700\u591a\u662f\u6570\u767e\u4e2a\uff0c\u800c\u4e0d\u662f\u6570\u5343\u4e2a\u65f6\u95f4\u5e8f\u5217)\u3002\u5f53\u7ecf\u8fc7\u5145\u5206\u5730\u8fc7\u6ee4\u6216\u805a\u5408\u6570\u636e\u65f6\uff0c\u8fbe\u5230\u4e00\u4e2a\u5408\u7406\u7684\u60c5\u51b5\u65f6\uff0c\u5207\u6362\u5230\u56fe\u5f62\u6a21\u5f0f\u8fdb\u884c\u7ed8\u56fe\u3002\u5982\u679c\u8868\u8fbe\u5f0f\u4ecd\u7136\u9700\u8981\u5f88\u957f\u65f6\u95f4\u624d\u80fd\u5f97\u5230\u7ed3\u679c\uff0c\u90a3\u4e48\u53ef\u4ee5\u901a\u8fc7\u76f8\u5173\u89c4\u5219\u8fdb\u884c\u9884\u5904\u7406\u6570\u636e\u4ee5\u540e\u8f7d\u6267\u884c\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e0e Prometheus \u7684\u67e5\u8be2\u8bed\u8a00\u7279\u522b\u76f8\u5173\uff0c\u5728\u8fd9\u79cd\u8bed\u8a00\u4e2d\uff0c\u50cf api_http_requests_total \u8fd9\u6837\u7684\u6307\u6807\u540d\u79f0\u9009\u62e9\u5668\u53ef\u4ee5\u6269\u5c55\u5230\u6570\u5343\u4e2a\u5e26\u6709\u4e0d\u540c\u6807\u7b7e\u7684\u65f6\u95f4\u5e8f\u5217\u3002\u8fd8\u8981\u8bb0\u4f4f\uff0c\u5728\u591a\u4e2a\u65f6\u95f4\u5e8f\u5217\u4e0a\u805a\u5408\u7684\u8868\u8fbe\u5f0f\u5c06\u5728\u670d\u52a1\u5668\u4e0a\u751f\u6210\u8d1f\u8f7d\uff0c\u5373\u4f7f\u8f93\u51fa\u53ea\u662f\u5c11\u91cf\u7684\u65f6\u95f4\u5e8f\u5217\u3002\u8fd9\u7c7b\u4f3c\u4e8e\u5728\u5173\u7cfb\u6570\u636e\u5e93\u4e2d\u5bf9\u4e00\u5217\u7684\u6240\u6709\u503c\u6c42\u548c\uff0c\u5373\u4f7f\u8f93\u51fa\u503c\u53ea\u662f\u4e00\u4e2a\u6570\u5b57\uff0c\u4e5f\u662f\u5f88\u6162\u7684\u3002"))}m.isMDXComponent=!0}}]);