"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3688],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),b=o(n),d=r,s=b["".concat(u,".").concat(d)]||b[d]||c[d]||p;return n?a.createElement(s,i(i({ref:t},m),{},{components:n})):a.createElement(s,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<p;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},40437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const p={title:"linux\u5e38\u7528\u547d\u4ee4\u56db",description:"Linux\u5e38\u7528\u547d\u4ee4\u56db",sidebar_position:4,last_update:{author:"\u90d1\u5b66\u8d24"}},i="linux\u5e38\u7528\u547d\u4ee4\u56db",l={unversionedId:"Linux/linux\u5e38\u7528\u547d\u4ee4\u56db",id:"Linux/linux\u5e38\u7528\u547d\u4ee4\u56db",title:"linux\u5e38\u7528\u547d\u4ee4\u56db",description:"Linux\u5e38\u7528\u547d\u4ee4\u56db",source:"@site/wiki\\ops\\Linux\\4.linux\u5e38\u7528\u547d\u4ee4\u56db.md",sourceDirName:"Linux",slug:"/Linux/linux\u5e38\u7528\u547d\u4ee4\u56db",permalink:"/zhengxuexian_blog/ops/Linux/linux\u5e38\u7528\u547d\u4ee4\u56db",draft:!1,tags:[],version:"current",lastUpdatedBy:"\u90d1\u5b66\u8d24",lastUpdatedAt:1660268203,formattedLastUpdatedAt:"2022\u5e748\u670812\u65e5",sidebarPosition:4,frontMatter:{title:"linux\u5e38\u7528\u547d\u4ee4\u56db",description:"Linux\u5e38\u7528\u547d\u4ee4\u56db",sidebar_position:4,last_update:{author:"\u90d1\u5b66\u8d24"}},sidebar:"tutorialSidebar",previous:{title:"linux\u5e38\u7528\u547d\u4ee4\u4e09",permalink:"/zhengxuexian_blog/ops/Linux/linux\u5e38\u7528\u547d\u4ee4\u4e09"},next:{title:"linux\u5e38\u7528\u547d\u4ee4\u4e94",permalink:"/zhengxuexian_blog/ops/Linux/linux\u5e38\u7528\u547d\u4ee4\u4e94"}},u={},o=[{value:"YUM \u8f6f\u4ef6\u5305\u5347\u7ea7\u5668 - \uff08Fedora, RedHat\u53ca\u7c7b\u4f3c\u7cfb\u7edf\uff09",id:"yum-\u8f6f\u4ef6\u5305\u5347\u7ea7\u5668---fedora-redhat\u53ca\u7c7b\u4f3c\u7cfb\u7edf",level:2},{value:"DEB \u5305 (Debian, Ubuntu \u4ee5\u53ca\u7c7b\u4f3c\u7cfb\u7edf)",id:"deb-\u5305-debian-ubuntu-\u4ee5\u53ca\u7c7b\u4f3c\u7cfb\u7edf",level:2},{value:"APT \u8f6f\u4ef6\u5de5\u5177 (Debian, Ubuntu \u4ee5\u53ca\u7c7b\u4f3c\u7cfb\u7edf)",id:"apt-\u8f6f\u4ef6\u5de5\u5177-debian-ubuntu-\u4ee5\u53ca\u7c7b\u4f3c\u7cfb\u7edf",level:2},{value:"\u67e5\u770b\u6587\u4ef6\u5185\u5bb9",id:"\u67e5\u770b\u6587\u4ef6\u5185\u5bb9",level:2}],m={toc:o};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linux\u5e38\u7528\u547d\u4ee4\u56db"},"linux\u5e38\u7528\u547d\u4ee4\u56db"),(0,r.kt)("h2",{id:"yum-\u8f6f\u4ef6\u5305\u5347\u7ea7\u5668---fedora-redhat\u53ca\u7c7b\u4f3c\u7cfb\u7edf"},"YUM \u8f6f\u4ef6\u5305\u5347\u7ea7\u5668 - \uff08Fedora, RedHat\u53ca\u7c7b\u4f3c\u7cfb\u7edf\uff09"),(0,r.kt)("p",null,"yum install package_name             #\u4e0b\u8f7d\u5e76\u5b89\u88c5\u4e00\u4e2arpm\u5305",(0,r.kt)("br",{parentName:"p"}),"\n","yum localinstall package_name.rpm    #\u5c06\u5b89\u88c5\u4e00\u4e2arpm\u5305\uff0c\u4f7f\u7528\u4f60\u81ea\u5df1\u7684\u8f6f\u4ef6\u4ed3\u5e93\u4e3a\u4f60\u89e3\u51b3\u6240\u6709\u4f9d\u8d56\u5173\u7cfb",(0,r.kt)("br",{parentName:"p"}),"\n","yum update package_name.rpm    #\u66f4\u65b0\u5f53\u524d\u7cfb\u7edf\u4e2d\u6240\u6709\u5b89\u88c5\u7684rpm\u5305",(0,r.kt)("br",{parentName:"p"}),"\n","yum update package_name        #\u66f4\u65b0\u4e00\u4e2arpm\u5305",(0,r.kt)("br",{parentName:"p"}),"\n","yum remove package_name        #\u5220\u9664\u4e00\u4e2arpm\u5305",(0,r.kt)("br",{parentName:"p"}),"\n","yum list                   #\u5217\u51fa\u5f53\u524d\u7cfb\u7edf\u4e2d\u5b89\u88c5\u7684\u6240\u6709\u5305",(0,r.kt)("br",{parentName:"p"}),"\n","yum search package_name     #\u5728rpm\u4ed3\u5e93\u4e2d\u641c\u5bfb\u8f6f\u4ef6\u5305",(0,r.kt)("br",{parentName:"p"}),"\n","yum clean packages          #\u6e05\u7406rpm\u7f13\u5b58\u5220\u9664\u4e0b\u8f7d\u7684\u5305",(0,r.kt)("br",{parentName:"p"}),"\n","yum clean headers           #\u5220\u9664\u6240\u6709\u5934\u6587\u4ef6",(0,r.kt)("br",{parentName:"p"}),"\n","yum clean all                #\u5220\u9664\u6240\u6709\u7f13\u5b58\u7684\u5305\u548c\u5934\u6587\u4ef6"),(0,r.kt)("h2",{id:"deb-\u5305-debian-ubuntu-\u4ee5\u53ca\u7c7b\u4f3c\u7cfb\u7edf"},"DEB \u5305 (Debian, Ubuntu \u4ee5\u53ca\u7c7b\u4f3c\u7cfb\u7edf)"),(0,r.kt)("p",null,"dpkg -i package.deb     #\u5b89\u88c5/\u66f4\u65b0\u4e00\u4e2a deb \u5305",(0,r.kt)("br",{parentName:"p"}),"\n","dpkg -r package_name    #\u4ece\u7cfb\u7edf\u5220\u9664\u4e00\u4e2a deb \u5305",(0,r.kt)("br",{parentName:"p"}),"\n","dpkg -l                 #\u663e\u793a\u7cfb\u7edf\u4e2d\u6240\u6709\u5df2\u7ecf\u5b89\u88c5\u7684 deb \u5305",(0,r.kt)("br",{parentName:"p"}),"\n",'dpkg -l | grep httpd    #\u663e\u793a\u6240\u6709\u540d\u79f0\u4e2d\u5305\u542b "httpd" \u5b57\u6837\u7684deb\u5305',(0,r.kt)("br",{parentName:"p"}),"\n","dpkg -s package_name    #\u83b7\u5f97\u5df2\u7ecf\u5b89\u88c5\u5728\u7cfb\u7edf\u4e2d\u4e00\u4e2a\u7279\u6b8a\u5305\u7684\u4fe1\u606f",(0,r.kt)("br",{parentName:"p"}),"\n","dpkg -L package_name    #\u663e\u793a\u7cfb\u7edf\u4e2d\u5df2\u7ecf\u5b89\u88c5\u7684\u4e00\u4e2adeb\u5305\u6240\u63d0\u4f9b\u7684\u6587\u4ef6\u5217\u8868",(0,r.kt)("br",{parentName:"p"}),"\n","dpkg --contents package.deb    #\u663e\u793a\u5c1a\u672a\u5b89\u88c5\u7684\u4e00\u4e2a\u5305\u6240\u63d0\u4f9b\u7684\u6587\u4ef6\u5217\u8868",(0,r.kt)("br",{parentName:"p"}),"\n","dpkg -S /bin/ping              #\u786e\u8ba4\u6240\u7ed9\u7684\u6587\u4ef6\u7531\u54ea\u4e2adeb\u5305\u63d0\u4f9b"),(0,r.kt)("h2",{id:"apt-\u8f6f\u4ef6\u5de5\u5177-debian-ubuntu-\u4ee5\u53ca\u7c7b\u4f3c\u7cfb\u7edf"},"APT \u8f6f\u4ef6\u5de5\u5177 (Debian, Ubuntu \u4ee5\u53ca\u7c7b\u4f3c\u7cfb\u7edf)"),(0,r.kt)("p",null,"apt-get install package_name      #\u5b89\u88c5/\u66f4\u65b0\u4e00\u4e2a deb \u5305",(0,r.kt)("br",{parentName:"p"}),"\n","apt-cdrom install package_name    #\u4ece\u5149\u76d8\u5b89\u88c5/\u66f4\u65b0\u4e00\u4e2a deb \u5305",(0,r.kt)("br",{parentName:"p"}),"\n","apt-get update      #\u5347\u7ea7\u5217\u8868\u4e2d\u7684\u8f6f\u4ef6\u5305",(0,r.kt)("br",{parentName:"p"}),"\n","apt-get upgrade     #\u5347\u7ea7\u6240\u6709\u5df2\u5b89\u88c5\u7684\u8f6f\u4ef6",(0,r.kt)("br",{parentName:"p"}),"\n","apt-get remove package_name     #\u4ece\u7cfb\u7edf\u5220\u9664\u4e00\u4e2adeb\u5305",(0,r.kt)("br",{parentName:"p"}),"\n","apt-get check     #\u786e\u8ba4\u4f9d\u8d56\u7684\u8f6f\u4ef6\u4ed3\u5e93\u6b63\u786e",(0,r.kt)("br",{parentName:"p"}),"\n","apt-get clean     #\u4ece\u4e0b\u8f7d\u7684\u8f6f\u4ef6\u5305\u4e2d\u6e05\u7406\u7f13\u5b58",(0,r.kt)("br",{parentName:"p"}),"\n","apt-cache search searched-package    #\u8fd4\u56de\u5305\u542b\u6240\u8981\u641c\u7d22\u5b57\u7b26\u4e32\u7684\u8f6f\u4ef6\u5305\u540d\u79f0"),(0,r.kt)("h2",{id:"\u67e5\u770b\u6587\u4ef6\u5185\u5bb9"},"\u67e5\u770b\u6587\u4ef6\u5185\u5bb9"),(0,r.kt)("p",null,"cat file1      #\u4ece\u7b2c\u4e00\u4e2a\u5b57\u8282\u5f00\u59cb\u6b63\u5411\u67e5\u770b\u6587\u4ef6\u7684\u5185\u5bb9",(0,r.kt)("br",{parentName:"p"}),"\n","tac file1      #\u4ece\u6700\u540e\u4e00\u884c\u5f00\u59cb\u53cd\u5411\u67e5\u770b\u4e00\u4e2a\u6587\u4ef6\u7684\u5185\u5bb9",(0,r.kt)("br",{parentName:"p"}),"\n","more file1     #\u67e5\u770b\u4e00\u4e2a\u957f\u6587\u4ef6\u7684\u5185\u5bb9",(0,r.kt)("br",{parentName:"p"}),"\n","less file1     #\u7c7b\u4f3c\u4e8e 'more' \u547d\u4ee4\uff0c\u4f46\u662f\u5b83\u5141\u8bb8\u5728\u6587\u4ef6\u4e2d\u548c\u6b63\u5411\u64cd\u4f5c\u4e00\u6837\u7684\u53cd\u5411\u64cd\u4f5c",(0,r.kt)("br",{parentName:"p"}),"\n","head -2 file1    #\u67e5\u770b\u4e00\u4e2a\u6587\u4ef6\u7684\u524d\u4e24\u884c",(0,r.kt)("br",{parentName:"p"}),"\n","tail -2 file1    #\u67e5\u770b\u4e00\u4e2a\u6587\u4ef6\u7684\u6700\u540e\u4e24\u884c",(0,r.kt)("br",{parentName:"p"}),"\n","tail -f /var/log/messages     #\u5b9e\u65f6\u67e5\u770b\u88ab\u6dfb\u52a0\u5230\u4e00\u4e2a\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9"))}c.isMDXComponent=!0}}]);