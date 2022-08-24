"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7707],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=c(r),d=o,h=l["".concat(i,".").concat(d)]||l[d]||m[d]||a;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=l;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},94954:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"docker\u90e8\u7f72prometheus",description:"docker\u90e8\u7f72prometheus",sidebar_position:7,last_update:{author:"\u90d1\u5b66\u8d24"}},s="docker\u90e8\u7f72prometheus",p={unversionedId:"Docker/docker\u90e8\u7f72prometheus",id:"Docker/docker\u90e8\u7f72prometheus",title:"docker\u90e8\u7f72prometheus",description:"docker\u90e8\u7f72prometheus",source:"@site/wiki\\ops\\Docker\\7.docker\u90e8\u7f72prometheus.md",sourceDirName:"Docker",slug:"/Docker/docker\u90e8\u7f72prometheus",permalink:"/zhengxuexian_blog/ops/Docker/docker\u90e8\u7f72prometheus",draft:!1,tags:[],version:"current",lastUpdatedBy:"\u90d1\u5b66\u8d24",lastUpdatedAt:1661218389,formattedLastUpdatedAt:"2022\u5e748\u670823\u65e5",sidebarPosition:7,frontMatter:{title:"docker\u90e8\u7f72prometheus",description:"docker\u90e8\u7f72prometheus",sidebar_position:7,last_update:{author:"\u90d1\u5b66\u8d24"}},sidebar:"tutorialSidebar",previous:{title:"docker\u90e8\u7f72grafana",permalink:"/zhengxuexian_blog/ops/Docker/docker\u90e8\u7f72grafana"},next:{title:"docker\u90e8\u7f72grafana",permalink:"/zhengxuexian_blog/ops/Docker/docker\u90e8\u7f72redis"}},i={},c=[{value:"prometheus\u955c\u50cf\u542f\u52a8",id:"prometheus\u955c\u50cf\u542f\u52a8",level:2},{value:"\u547d\u4ee4\u8be6\u89e3\uff1a",id:"\u547d\u4ee4\u8be6\u89e3",level:3},{value:"prometheus\u6210\u529f\u68c0\u67e5",id:"prometheus\u6210\u529f\u68c0\u67e5",level:3},{value:"prometheus\u76d1\u63a7\u914d\u7f6e",id:"prometheus\u76d1\u63a7\u914d\u7f6e",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker\u90e8\u7f72prometheus"},"docker\u90e8\u7f72prometheus"),(0,o.kt)("h2",{id:"prometheus\u955c\u50cf\u542f\u52a8"},"prometheus\u955c\u50cf\u542f\u52a8"),(0,o.kt)("p",null,"  docker pull prometheus",(0,o.kt)("br",{parentName:"p"}),"\n",'docker run -d --name prometheus --restart=always -p 9091:9090 -e "TZ=Asia/Shanghai" prom/prometheus'),(0,o.kt)("h3",{id:"\u547d\u4ee4\u8be6\u89e3"},"\u547d\u4ee4\u8be6\u89e3\uff1a"),(0,o.kt)("p",null,"-d \uff1a\u540e\u53f0\u8fd0\u884c\u6b64\u5bb9\u5668",(0,o.kt)("br",{parentName:"p"}),"\n","--name \uff1a\u542f\u8fd0\u5bb9\u5668\u5206\u914d\u540d\u5b57prometheus",(0,o.kt)("br",{parentName:"p"}),"\n","--restart=always \u670d\u52a1\u5b95\u673a\u540e\uff0c\u4f1a\u81ea\u52a8\u91cd\u542f",(0,o.kt)("br",{parentName:"p"}),"\n",'-e "TZ=Asia/Shanghai" \u8bbe\u7f6e\u65f6\u95f4\u4e3a\u4e0a\u6d77\u65f6\u95f4',(0,o.kt)("br",{parentName:"p"}),"\n","-p \uff1a\u6620\u5c04\u7aef\u53e3\uff0c9091\u7aef\u53e3\u4e3a\u5bbf\u4e3b\u673aprometheus\u7ba1\u7406\u7aef\u53e3\uff0c9090\u662fprometheus\u5bb9\u5668\u7684\u5185\u90e8\u7aef\u53e3",(0,o.kt)("br",{parentName:"p"}),"\n","prom/prometheus\uff1a\u901a\u8fc7\u8fd9\u4e2a\u5bb9\u5668\u6765\u8fd0\u884c\u7684\uff0c\u672c\u5730\u4e0d\u5b58\u5728\u7684\u8bdd\uff0c\u9ed8\u8ba4\u4f1a\u4ecedocker\u5b98\u65b9\u4ed3\u5e93pull\u4e0b\u6765"),(0,o.kt)("h3",{id:"prometheus\u6210\u529f\u68c0\u67e5"},"prometheus\u6210\u529f\u68c0\u67e5"),(0,o.kt)("p",null,"\u5bb9\u5668\u90e8\u7f72\u6210\u529f\u5373\u53ef\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7\u6d4f\u89c8\u5668\u53bb\u8bbf\u95eeprometheus\u7684\u7ba1\u7406\u7aef\u4e86",(0,o.kt)("br",{parentName:"p"}),"\n","\u6d4f\u89c8\u5668\u8f93\u5165\uff1a",(0,o.kt)("a",{parentName:"p",href:"http://180.76.115.65:9091/%EF%BC%8C%E7%9C%8B%E5%88%B0%E4%B8%8B%E5%9B%BE%E5%8D%B3%E6%88%90%E5%8A%9F"},"http://180.76.115.65:9091/\uff0c\u770b\u5230\u4e0b\u56fe\u5373\u6210\u529f")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(84320).Z,width:"1193",height:"624"})),(0,o.kt)("h2",{id:"prometheus\u76d1\u63a7\u914d\u7f6e"},"prometheus\u76d1\u63a7\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker exec -it prometheus-dsp sh  #\u8fdb\u5165prometheus\u7684\u5bb9\u5668\u5185\ncd /etc/prometheus/\nvi prometheus.yml\n\n# A scrape configuration containing exactly one endpoint to scrape:\n# Here it\'s Prometheus itself.\nscrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: "prometheus"\n\n    # metrics_path defaults to \'/metrics\'\n    # scheme defaults to \'http\'.\n\n    static_configs:\n      - targets: ["localhost:9090"]\n\n  - job_name: "jmeter1"                                                                       \n    static_configs:             \n      - targets: ["180.76.182.90:9270"]\n\n  - job_name: "myWindowx"                                                                          \n    static_configs:                      \n      - targets: ["117.61.77.8:9182"]\n\n  - job_name: "baiduyun90"                                                                       \n    static_configs:                      \n      - targets: ["180.76.182.90:9100"]\n\n  - job_name: "90-cadvisor"               \n    static_configs:                      \n      - targets: ["180.76.182.90:8080"]\n\n')),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(98657).Z,width:"1881",height:"395"})),(0,o.kt)("p",null,"\u76d1\u63a7\u6570\u636e\u6536\u96c6\u8fc7\u7a0b\uff0c\u53ef\u80fd\u4f1a\u9047\u5230\u9632\u706b\u5899\u7684\u963b\u788d\uff0c\u7279\u522b\u662f\u4e91\u670d\u52a1\u5668\uff0c\u9700\u8981\u628a\u5bf9\u5e94\u7aef\u53e3\u6253\u5f00"))}m.isMDXComponent=!0},84320:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/2022-08-09-11-07-03-8887617a881679bfca2ca56ff8d70b27.png"},98657:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/2022-08-21-22-26-36-448d19711e0659975a911404f6ac08a4.png"}}]);