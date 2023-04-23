"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},l="stdarg.h",o={unversionedId:"C/lib \u6807\u51c6\u5e93/stdarg.h",id:"C/lib \u6807\u51c6\u5e93/stdarg.h",title:"stdarg.h",description:"stdarg.h\u5b9a\u4e49\u4e8e\u51fd\u6570\u7684\u53ef\u53d8\u53c2\u6570\u76f8\u5173\u7684\u4e00\u4e9b\u65b9\u6cd5\u3002",source:"@site/wiki\\dev\\C\\lib \u6807\u51c6\u5e93\\stdarg.h.md",sourceDirName:"C/lib \u6807\u51c6\u5e93",slug:"/C/lib \u6807\u51c6\u5e93/stdarg.h",permalink:"/zhengxuexian_blog/dev/C/lib \u6807\u51c6\u5e93/stdarg.h",draft:!1,tags:[],version:"current",lastUpdatedBy:"zhengxuexian",lastUpdatedAt:1660268203,formattedLastUpdatedAt:"2022\u5e748\u670812\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"signal.h",permalink:"/zhengxuexian_blog/dev/C/lib \u6807\u51c6\u5e93/signal.h"},next:{title:"stdbool.h",permalink:"/zhengxuexian_blog/dev/C/lib \u6807\u51c6\u5e93/stdbool.h"}},s={},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stdargh"},"stdarg.h"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stdarg.h"),"\u5b9a\u4e49\u4e8e\u51fd\u6570\u7684\u53ef\u53d8\u53c2\u6570\u76f8\u5173\u7684\u4e00\u4e9b\u65b9\u6cd5\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"va_list \u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},"va_start()"),(0,a.kt)("li",{parentName:"ul"},"va_arg()\uff1a\u83b7\u53d6\u5f53\u524d\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},"va_end()\u3002")),(0,a.kt)("p",null,"va_copy()\uff1ait makes a copy of your va_list variable in the exact same state.\nva_copy() can be useful if you need to scan ahead through the arguments but need to also remember your current place."),(0,a.kt)("p",null,"\u63a5\u53d7\u53ef\u53d8\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\u7684\u4e00\u4e9b\u65b9\u6cd5\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"vprintf()"),(0,a.kt)("li",{parentName:"ul"},"vfprintf()"),(0,a.kt)("li",{parentName:"ul"},"vsprintf()"),(0,a.kt)("li",{parentName:"ul"},"vsnprintf()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <stdarg.h>\n\nint my_printf(int serial, const char *format, ...)\n{\n    va_list va;\n\n    // Do my custom work\n    printf("The serial number is: %d\\n", serial);\n\n    // Then pass the rest off to vprintf()\n    va_start(va, format);\n    int rv = vprintf(format, va);\n    va_end(va);\n\n    return rv;\n}\n\nint main(void)\n{\n    int x = 10;\n    float y = 3.2;\n\n    my_printf(3490, "x is %d, y is %f\\n", x, y);\n}\n')))}c.isMDXComponent=!0}}]);