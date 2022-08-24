"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8241],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(t),g=l,k=c["".concat(o,".").concat(g)]||c[g]||d[g]||r;return t?a.createElement(k,i(i({ref:n},u),{},{components:t})):a.createElement(k,i({ref:n},u))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=c;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},12423:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=t(87462),l=(t(67294),t(3905));const r={},i="signal.h",p={unversionedId:"C/lib \u6807\u51c6\u5e93/signal.h",id:"C/lib \u6807\u51c6\u5e93/signal.h",title:"signal.h",description:"\u7b80\u4ecb",source:"@site/wiki\\dev\\C\\lib \u6807\u51c6\u5e93\\signal.h.md",sourceDirName:"C/lib \u6807\u51c6\u5e93",slug:"/C/lib \u6807\u51c6\u5e93/signal.h",permalink:"/zhengxuexian_blog/dev/C/lib \u6807\u51c6\u5e93/signal.h",draft:!1,tags:[],version:"current",lastUpdatedBy:"zhengxuexian",lastUpdatedAt:1660268203,formattedLastUpdatedAt:"2022\u5e748\u670812\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"math.h",permalink:"/zhengxuexian_blog/dev/C/lib \u6807\u51c6\u5e93/math.h"},next:{title:"stdarg.h",permalink:"/zhengxuexian_blog/dev/C/lib \u6807\u51c6\u5e93/stdarg.h"}},o={},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"signal()",id:"signal",level:2},{value:"\u4fe1\u53f7\u76f8\u5173\u7684\u5b8f",id:"\u4fe1\u53f7\u76f8\u5173\u7684\u5b8f",level:2},{value:"raise()",id:"raise",level:2}],u={toc:s};function d(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"signalh"},"signal.h"),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"signal.h"),"\u63d0\u4f9b\u4e86\u4fe1\u53f7\uff08\u5373\u5f02\u5e38\u60c5\u51b5\uff09\u7684\u5904\u7406\u5de5\u5177\u3002\u6240\u8c13\u201c\u4fe1\u53f7\u201d\uff08signal\uff09\uff0c\u53ef\u4ee5\u7406\u89e3\u6210\u7cfb\u7edf\u4e0e\u7a0b\u5e8f\u4e4b\u95f4\u7684\u77ed\u6d88\u606f\uff0c\u4e3b\u8981\u7528\u6765\u8868\u793a\u8fd0\u884c\u65f6\u9519\u8bef\uff0c\u6216\u8005\u53d1\u751f\u4e86\u5f02\u5e38\u4e8b\u4ef6\u3002"),(0,l.kt)("p",null,"\u5934\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"signal.h"),"\u5b9a\u4e49\u4e86\u4e00\u7cfb\u5217\u5b8f\uff0c\u8868\u793a\u4e0d\u540c\u7684\u4fe1\u53f7\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SIGABRT\uff1a\u5f02\u5e38\u4e2d\u6b62\uff08\u53ef\u80fd\u7531\u4e8e\u8c03\u7528\u4e86 abort() \u65b9\u6cd5\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"SIGFPE\uff1a\u7b97\u672f\u8fd0\u7b97\u53d1\u751f\u4e86\u9519\u8bef\uff08\u53ef\u80fd\u662f\u9664\u4ee5 0 \u6216\u8005\u6ea2\u51fa\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"SIGILL\uff1a\u65e0\u6548\u6307\u4ee4\u3002"),(0,l.kt)("li",{parentName:"ul"},"SIGINT\uff1a\u4e2d\u65ad\u3002"),(0,l.kt)("li",{parentName:"ul"},"SIGSEGV\uff1a\u65e0\u6548\u5185\u5b58\u8bbf\u95ee\u3002"),(0,l.kt)("li",{parentName:"ul"},"SIGTERM\uff1a\u7ec8\u6b62\u8bf7\u6c42\u3002")),(0,l.kt)("p",null,"\u4e0a\u9762\u6bcf\u4e2a\u5b8f\u7684\u503c\u90fd\u662f\u4e00\u4e2a\u6b63\u6574\u6570\u5e38\u91cf\u3002"),(0,l.kt)("h2",{id:"signal"},"signal()"),(0,l.kt)("p",null,"\u5934\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"signal.h"),"\u8fd8\u5b9a\u4e49\u4e86\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"signal()"),"\u51fd\u6570\uff0c\u7528\u6765\u6307\u5b9a\u67d0\u79cd\u4fe1\u53f7\u7684\u5904\u7406\u51fd\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"signal(SIGINT, handler);\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"signal()"),"\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u67d0\u79cd\u4fe1\u53f7\u7684\u5b8f\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5904\u7406\u8fd9\u4e2a\u4fe1\u53f7\u7684\u51fd\u6570\u6307\u9488",(0,l.kt)("inlineCode",{parentName:"p"},"handler"),"\u3002"),(0,l.kt)("p",null,"\u4fe1\u53f7\u5904\u7406\u51fd\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"handler"),"\u63a5\u53d7\u4e00\u4e2a int \u7c7b\u578b\u7684\u53c2\u6570\uff0c\u8868\u793a\u4fe1\u53f7\u7c7b\u578b\u3002\u5b83\u7684\u539f\u578b\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"void (*func)(int);\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"handler"),"\u51fd\u6570\u4f53\u5185\u90e8\u53ef\u4ee5\u6839\u636e\u8fd9\u4e2a\u6574\u6570\uff0c\u5224\u65ad\u5230\u5e95\u63a5\u53d7\u5230\u4e86\u54ea\u79cd\u4fe1\u53f7\uff0c\u56e0\u4e3a\u591a\u4e2a\u4fe1\u53f7\u53ef\u4ee5\u5171\u7528\u540c\u4e00\u4e2a\u5904\u7406\u51fd\u6570\u3002\u4e00\u65e6\u5904\u7406\u51fd\u6570\u6267\u884c\u5b8c\u6210\uff0c\u7a0b\u5e8f\u4f1a\u4ece\u4fe1\u53f7\u53d1\u751f\u70b9\u6062\u590d\u6267\u884c\u3002\u4f46\u662f\uff0c\u5982\u679c\u9047\u5230 SIGABRT \u4fe1\u53f7\uff0c\u5904\u7406\u51fd\u6570\u6267\u884c\u5b8c\u6210\uff0c\u7cfb\u7edf\u4f1a\u8ba9\u7a0b\u5e8f\u4e2d\u6b62\u3002"),(0,l.kt)("p",null,"\u5f53\u7cfb\u7edf\u5411\u7a0b\u5e8f\u53d1\u9001\u4fe1\u53f7\u65f6\uff0c\u7a0b\u5e8f\u53ef\u4ee5\u5ffd\u7565\u4fe1\u53f7\uff0c\u5373\u4e0d\u6307\u5b9a\u5904\u7406\u51fd\u6570\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"signal()"),"\u7684\u8fd4\u56de\u503c\u662f\u524d\u4e00\u4e2a\u5904\u7406\u51fd\u6570\u7684\u6307\u9488\uff0c\u5e38\u5e38\u628a\u5b83\u4fdd\u5b58\u5728\u53d8\u91cf\u4e4b\u4e2d\uff0c\u5f53\u65b0\u7684\u5904\u7406\u51fd\u6570\u6267\u884c\u5b8c\uff0c\u518d\u6062\u590d\u4ee5\u524d\u7684\u5904\u7406\u51fd\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"void (*orig_handler)(int);\norig_handler = signal(SIGINT, handler);\n// SIGINT \u4fe1\u53f7\u53d1\u751f\u4e4b\u540e\nsignal(SIGINT, orig_handler);\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"signal()"),"\u4e3a\u4fe1\u53f7",(0,l.kt)("inlineCode",{parentName:"p"},"SIGINT"),"\u6307\u5b9a\u4e86\u65b0\u7684\u5904\u7406\u51fd\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"handler"),"\uff0c\u628a\u539f\u6765\u7684\u5904\u7406\u51fd\u6570\u4fdd\u5b58\u5728\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"orig_handler"),"\u91cc\u9762\u3002\u7b49\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"handler"),"\u8fd9\u4e2a\u51fd\u6570\u7528\u8fc7\u4e4b\u540e\uff0c\u518d\u6062\u590d\u539f\u6765\u7684\u5904\u7406\u51fd\u6570\u3002"),(0,l.kt)("h2",{id:"\u4fe1\u53f7\u76f8\u5173\u7684\u5b8f"},"\u4fe1\u53f7\u76f8\u5173\u7684\u5b8f"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"signal.h"),"\u8fd8\u63d0\u4f9b\u4e86\u4fe1\u53f7\u76f8\u5173\u7684\u5b8f\u3002"),(0,l.kt)("p",null,"\uff081\uff09SIG_DFL"),(0,l.kt)("p",null,"SIG_DFL \u8868\u793a\u9ed8\u8ba4\u7684\u5904\u7406\u51fd\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"signal(SIGINT, SIG_DFL);\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0cSIGINT \u7684\u5904\u7406\u51fd\u6570\u662f\u9ed8\u8ba4\u5904\u7406\u51fd\u6570\uff0c\u7531\u5f53\u524d\u5b9e\u73b0\u51b3\u5b9a\u3002"),(0,l.kt)("p",null,"\uff082\uff09SIG_IGN"),(0,l.kt)("p",null,"SIG_IGN \u8868\u793a\u5ffd\u7565\u8be5\u4fe1\u53f7\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"signal(SIGINT, SIG_IGN);\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u8868\u793a\u4e0d\u5bf9 SIGINT \u4fe1\u53f7\u8fdb\u884c\u5904\u7406\u3002\u7531\u4e8e\u7a0b\u5e8f\u8fd0\u884c\u65f6\u6309\u4e0b Ctrl + c \u662f\u53d1\u51fa SIGINT \u4fe1\u53f7\uff0c\u6240\u4ee5\u4f7f\u7528\u8be5\u8bed\u53e5\u540e\uff0c\u7a0b\u5e8f\u65e0\u6cd5\u7528 Ctrl + c \u7ec8\u6b62\u3002"),(0,l.kt)("p",null,"\uff083\uff09SIG_ERR"),(0,l.kt)("p",null,"SIG_ERR \u662f\u4fe1\u53f7\u5904\u7406\u51fd\u6570\u53d1\u751f\u9519\u8bef\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"signal()"),"\u7684\u8fd4\u56de\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'if (signal(SIGINT, handler) == SIG_ERR) {\n  perror("signal(SIGINT, handler) failed");\n  // ...\n}\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u53ef\u4ee5\u5224\u65ad",(0,l.kt)("inlineCode",{parentName:"p"},"handler"),"\u5904\u7406 SIGINT \u65f6\uff0c\u662f\u5426\u53d1\u751f\u9519\u8bef\u3002"),(0,l.kt)("h2",{id:"raise"},"raise()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"raise()"),"\u51fd\u6570\u7528\u6765\u5728\u7a0b\u5e8f\u4e2d\u53d1\u51fa\u4fe1\u53f7\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"int raise(int sig);\n")),(0,l.kt)("p",null,"\u5b83\u63a5\u53d7\u4e00\u4e2a\u4fe1\u53f7\u503c\u4f5c\u4e3a\u53c2\u6570\uff0c\u8868\u793a\u53d1\u51fa\u8be5\u4fe1\u53f7\u3002\u5b83\u7684\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u6574\u6570\uff0c\u53ef\u4ee5\u7528\u6765\u5224\u65ad\u4fe1\u53f7\u53d1\u51fa\u662f\u5426\u6210\u529f\uff0c0 \u8868\u793a\u6210\u529f\uff0c\u975e 0 \u8868\u793a\u5931\u8d25\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'void handler(int sig) {\n  printf("Handler called for signal %d\\n", sig);\n}\n\nsignal(SIGINT, handler);\nraise(SIGINT);\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"raise()"),"\u89e6\u53d1 SIGINT \u4fe1\u53f7\uff0c\u5bfc\u81f4 handler \u51fd\u6570\u6267\u884c\u3002"))}d.isMDXComponent=!0}}]);