"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8419],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72769:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"JMeter\u4f7f\u7528\u5efa\u8bae",description:"JMeter\u4f7f\u7528\u5efa\u8bae",sidebar_position:6,last_update:{author:"\u90d1\u5b66\u8d24"}},i="JMeter\u4f7f\u7528\u5efa\u8bae",l={unversionedId:"jmeter\u538b\u6d4b\u5efa\u8bae",id:"jmeter\u538b\u6d4b\u5efa\u8bae",title:"JMeter\u4f7f\u7528\u5efa\u8bae",description:"JMeter\u4f7f\u7528\u5efa\u8bae",source:"@site/perf\\jmeter\\6.jmeter\u538b\u6d4b\u5efa\u8bae.md",sourceDirName:".",slug:"/jmeter\u538b\u6d4b\u5efa\u8bae",permalink:"/zhengxuexian_blog/jmeter/jmeter\u538b\u6d4b\u5efa\u8bae",draft:!1,tags:[],version:"current",lastUpdatedBy:"\u90d1\u5b66\u8d24",lastUpdatedAt:1661218389,formattedLastUpdatedAt:"2022\u5e748\u670823\u65e5",sidebarPosition:6,frontMatter:{title:"JMeter\u4f7f\u7528\u5efa\u8bae",description:"JMeter\u4f7f\u7528\u5efa\u8bae",sidebar_position:6,last_update:{author:"\u90d1\u5b66\u8d24"}},sidebar:"tutorialSidebar",previous:{title:"JMeter\u547d\u4ee4\u884c\u8be6\u89e3",permalink:"/zhengxuexian_blog/jmeter/jmeter\u547d\u4ee4\u884c\u8be6\u89e3"}},p={},c=[{value:"\u538b\u6d4b\u5efa\u8bae",id:"\u538b\u6d4b\u5efa\u8bae",level:2}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jmeter\u4f7f\u7528\u5efa\u8bae"},"JMeter\u4f7f\u7528\u5efa\u8bae"),(0,a.kt)("h2",{id:"\u538b\u6d4b\u5efa\u8bae"},"\u538b\u6d4b\u5efa\u8bae"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u975eGUI\u6a21\u5f0f\uff08\u4e5f\u5c31\u662fCLI\uff0cCommand Line Interface\uff0c\u547d\u4ee4\u884c\u754c\u9762\uff09\uff1ajmeter -n -t test.jmx -l result.jtl  "),(0,a.kt)("li",{parentName:"ol"},"\u5c3d\u91cf\u4e0d\u4f7f\u7528Listener\uff08\u76d1\u542c\u5668\uff09\uff0c \u5982\u679c\u4f7f\u7528-l\u53c2\u6570\uff0c\u5b83\u4eec\u90fd\u53ef\u4ee5\u88ab\u5220\u9664\u6216\u7981\u7528  "),(0,a.kt)("li",{parentName:"ol"},"\u8f93\u51fa\u6570\u636e\u5c3d\u91cf\u6700\u5c0f\u5316\uff0c\u53ea\u4fdd\u5b58\u81ea\u5df1\u5173\u6ce8\u548c\u9700\u8981\u7684\u6570\u636e  "),(0,a.kt)("li",{parentName:"ol"},"\u5c3d\u91cf\u4e0d\u4f7f\u7528\u65ad\u8a00\uff0c\u65ad\u8a00\u4f1a\u589e\u52a0\u63a5\u53e3\u7684\u54cd\u5e94\u65f6\u95f4  "),(0,a.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5\u9700\u8981\u5927\u91cf\u6570\u636e\uff0c\u5c3d\u91cf\u91c7\u53d6\u6709\u89c4\u5f8b\u7684\u968f\u673a\u6570\u636e\uff0c\u51cf\u5c11\u56e0\u4e3a\u53c2\u6570\u5316\u800c\u589e\u52a0\u8d44\u6e90\u5f00\u9500  "),(0,a.kt)("li",{parentName:"ol"},"\u538b\u6d4b\u673a\u5c3d\u91cf\u8ddf\u5e94\u7528\u670d\u52a1\u5668\u5904\u4e8e\u540c\u4e00\u7f51\u7aef\uff0c\u51cf\u5c11\u7f51\u7edc\u5f00\u9500\u5bf9\u63a5\u53e3\u54cd\u5e94\u7684\u5f71\u54cd  "),(0,a.kt)("li",{parentName:"ol"},"\u538b\u6d4b\u96c6\u7fa4\u5c3d\u91cf\u8ddf\u7ebf\u4e0a\u4fdd\u6301\u4e00\u81f4\uff0c\u670d\u52a1\u5668\u914d\u7f6e\u4e00\u81f4\uff0c\u8f6f\u4ef6\u7684\u5927\u5c0f\u7248\u672c\u53f7\u4fdd\u6301\u4e00\u81f4    "),(0,a.kt)("li",{parentName:"ol"},"\u6570\u636e\u5e93\u670d\u52a1\u5668\u5c3d\u91cf\u8ddf\u5e94\u7528\u670d\u52a1\u90e8\u7f72\u5728\u4e0d\u540c\u670d\u52a1\u5668\u4e0a   ")),(0,a.kt)("h2",{id:""}))}s.isMDXComponent=!0}}]);