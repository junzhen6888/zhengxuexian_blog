"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2341],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=i(r),d=n,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||p;return r?a.createElement(k,l(l({ref:t},m),{},{components:r})):a.createElement(k,l({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,l=new Array(p);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var i=2;i<p;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},30926:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const p={},l="PostgreSQL Server Exporter",o={unversionedId:"prometheus/Exporter/3.15-postgresql-exporter",id:"prometheus/Exporter/3.15-postgresql-exporter",title:"PostgreSQL Server Exporter",description:"\u6700\u8fd1\u51e0\u5e74\uff0c\u5728\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\uff0c PostgreSQL \u5927\u653e\u5f02\u5f69\uff0c\u4f7f\u7528\u5ea6\u6781\u901f\u4e0a\u5347\u3002\u4eca\u5929\u6211\u4eec\u6765\u770b\u770b PostgreSQL \u7684\u76d1\u63a7\u3002",source:"@site/wiki/ops/prometheus/03-Exporter/3.15-postgresql-exporter.md",sourceDirName:"prometheus/03-Exporter",slug:"/prometheus/Exporter/3.15-postgresql-exporter",permalink:"/zhengxuexian_blog/ops/prometheus/Exporter/3.15-postgresql-exporter",draft:!1,tags:[],version:"current",lastUpdatedBy:"zhengxuexian",lastUpdatedAt:1661407442,formattedLastUpdatedAt:"2022\u5e748\u670825\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MySQL Server Exporter",permalink:"/zhengxuexian_blog/ops/prometheus/Exporter/3.14-mysql-server-exporter"},next:{title:"Microsoft SQL Server Exporter",permalink:"/zhengxuexian_blog/ops/prometheus/Exporter/3.16-mssql-server-exporter"}},s={},i=[],m={toc:i};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"postgresql-server-exporter"},"PostgreSQL Server Exporter"),(0,n.kt)("p",null,"\u6700\u8fd1\u51e0\u5e74\uff0c\u5728\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\uff0c PostgreSQL \u5927\u653e\u5f02\u5f69\uff0c\u4f7f\u7528\u5ea6\u6781\u901f\u4e0a\u5347\u3002\u4eca\u5929\u6211\u4eec\u6765\u770b\u770b PostgreSQL \u7684\u76d1\u63a7\u3002"),(0,n.kt)("p",null,"\u9488\u5bf9 PostgreSQL \u6570\u636e\u5e93 Prometheus Community \u63d0\u4f9b\u4e86\u4e00\u4e2a PostgreSQL Server Exporter \u6765\u91c7\u96c6\u76d1\u63a7\u6307\u6807\uff0c\u5b98\u65b9\u4ed3\u5e93\u5730\u5740\u662f ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/postgres_exporter"},"https://github.com/prometheus-community/postgres_exporter")," \uff0cPostgreSQL Server Exporter \u5df2\u7ecf\u5728 PostgreSQL \u7684 9.4\u30019.5\u30019.6\u300110\u300111\u300112\u300113 \u7248\u672c\u4e0a\u6d4b\u8bd5\u8fc7\u4e86\u3002\u5f53\u524d\u6700\u65b0\u7248\u672c\u662f v0.10.0 \uff0c\u53d1\u5e03\u4e8e 2021 \u5e747 \u6708 8 \u65e5\u3002"),(0,n.kt)("h1",{id:"\u5b89\u88c5\u8fd0\u884c"},"\u5b89\u88c5\u8fd0\u884c"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'# Start an example database\ndocker run --net=host -it --rm -e POSTGRES_PASSWORD=password postgres\n# Connect to it\ndocker run \\\n  --net=host \\\n  -e DATA_SOURCE_NAME="postgresql://postgres:password@localhost:5432/postgres?sslmode=disable" \\\n  quay.io/prometheuscommunity/postgres-exporter:v0.10.0\n\n')),(0,n.kt)("p",null,"PostgreSQL Server Exporter \u5728\u542f\u52a8\u7684\u65f6\u5019\u6709\u5f88\u591a\u53c2\u6570\u53ef\u4ee5\u9009\u62e9\uff0c\u5177\u4f53\u79d1\u5b66\u7684\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"help \u5c55\u793a\u5e2e\u52a9\u4fe1\u606f\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 --help-long \u548c --help-man \u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"web.listen-address \u542f\u52a8\u540e\u7a0b\u5e8f\u76d1\u542c\u7684 web \u7aef\u53e3\uff0c\u66b4\u9732\u76d1\u63a7\u6570\u636e\u4e5f\u662f\u8fd9\u4e2a\u7aef\u53e3\uff0c\u9ed8\u8ba4\u662f :9187 \u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"web.telemetry-path \u66b4\u9732\u6307\u6807\u7684\u8def\u5f84\uff0c\u9ed8\u8ba4\u662f  /metrics.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"disable-default-metrics \u5173\u95ed\u9ed8\u8ba4\u91c7\u96c6\u5230\u6307\u6807\uff0c\u53ea\u4f7f\u7528\u901a\u8fc7  --extend.query-path \u6307\u5b9a\u7684 queries.yaml \u6587\u4ef6\u91cc\u5b9a\u4e49\u7684\u6307\u6807\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"disable-settings-metrics \u5982\u679c\u4e0d\u60f3\u83b7\u53d6 pg_settings \u7684\u76d1\u63a7\u6307\u6807\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u53c2\u6570\u6765\u5173\u95ed\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"auto-discover-databases \u5728\u670d\u52a1\u5668\u4e0a\u52a8\u6001\u53d1\u73b0\u6570\u636e\u5e93\u5b9e\u4f8b\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"extend.query-path \u81ea\u5b9a\u4e49\u67e5\u8be2\u6307\u6807\u7684\u6587\u4ef6\u8def\u5f84\uff0c\u8fd9\u4e2a\u6587\u4ef6\u4f7f\u7528 YAML \u683c\u5f0f\u6765\u7f16\u5199\uff0c\u542f\u52a8\u524d\u8981\u6821\u9a8c\u6587\u4ef6\u683c\u5f0f\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"dumpmaps \u8fd9\u4e2a\u53c2\u6570\u4e0d\u4f1a\u8fd0\u884c Exporter \uff0c\u53ea\u4f1a\u6253\u5370\u5185\u90e8\u7684\u6307\u6807\u6620\u5c04\u5173\u7cfb\u3002\u7528\u6765 debug \u81ea\u5b9a\u4e49\u7684\u67e5\u8be2\u6587\u4ef6\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"constantLabels \u8bbe\u7f6e\u6240\u6709\u6307\u6807\u7684 Label\uff0c\u4e00\u822c\u7528\u4e00\u4e2a\u5217\u8868\u7684\u65b9\u5f0f\uff0c\u901a\u8fc7 label=value \u8fd9\u6837\u4e00\u5bf9\u4e00\u5bf9\u7684\u8bbe\u7f6e\uff0c\u4e2d\u95f4\u7528\u9017\u53f7\u5206\u9694\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"version \u6253\u5370 Exporter \u7684\u7248\u672c\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"exclude-databases \u542f\u7528 autoDiscoverDatabases \u65f6\u4e0d\u8981\u6536\u96c6\u7684\u6570\u636e\u5e93\u5217\u8868\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"include-databases \u542f\u7528 autoDiscoverDatabases \u65f6\u4ec5\u91c7\u96c6\u8fd9\u4e2a\u6570\u636e\u5e93\u5217\u8868\u91cc\u7684\u6570\u636e\u5e93\u5b9e\u4f8b\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"log.level \u8bbe\u7f6e\u65e5\u5fd7\u57fa\u672c\uff0c\u4e00\u5171\u6709 4 \u4e2d\uff0c debug, info, warn, error\uff0c\u9009\u62e9\u5176\u4e00\u5c31\u53ef\u4ee5\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"log.format \u8bbe\u7f6e\u65e5\u5fd7\u7684\u683c\u5f0f\uff0c logfmt \u6216\u8005 json.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"web.config.file  \u4f7f\u7528 TLS \u6216\u8005 basic authentication \u7684\u65f6\u5019\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u8fd9\u4e2a\u6587\u4ef6\u7684\u6401\u7f6e\u9075\u5faa exporter-toolkit \u4ed3\u5e93\u7684\u89c4\u8303\u3002"))),(0,n.kt)("p",null,"PostgreSQL Server Exporter  \u5728\u542f\u52a8\u7684\u65f6\u5019\u6709\u5f88\u591a\u9009\u9879\u53ef\u4ee5\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e\uff0c\u5982\u679cExporter \u662f\u4ee5\u4e8c\u8fdb\u5236\u8fd0\u884c\u5728\u673a\u5668\u4e0a\u7684\u8bdd\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528\u73af\u5883\u53d8\u91cf\uff0c\u56e0\u4e3a\u73af\u5883\u53d8\u91cf\u7684\u7ba1\u7406\u975e\u5e38\u7e41\u7410\u3002\u5982\u679c\u662f\u5bb9\u5668\u955c\u50cf\u7684\u8bdd\uff0c\u73af\u5883\u53d8\u91cf\u7684\u7ba1\u7406\u4f1a\u597d\u4e00\u4e9b\u3002\u53ef\u4ee5\u4f7f\u7528\u7684\u73af\u5883\u53d8\u91cf\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DATA_SOURCE_NAME the default legacy format. Accepts URI form and key=value form arguments. The URI may contain the username and password to connect with.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DATA_SOURCE_URI an alternative to DATA_SOURCE_NAME which exclusively accepts the hostname without a username and password component. For example, my_pg_hostname or my_pg_hostname?sslmode=disable.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DATA_SOURCE_URI_FILE The same as above but reads the URI from a file.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DATA_SOURCE_USER When using DATA_SOURCE_URI, this environment variable is used to specify the username.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DATA_SOURCE_USER_FILE The same, but reads the username from a file.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DATA_SOURCE_PASS When using DATA_SOURCE_URI, this environment variable is used to specify the password to connect with.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DATA_SOURCE_PASS_FILE The same as above but reads the password from a file.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"PG_EXPORTER_WEB_LISTEN_ADDRESS Address to listen on for web interface and telemetry. Default is :9187.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"PG_EXPORTER_WEB_TELEMETRY_PATH Path under which to expose metrics. Default is /metrics.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"PG_EXPORTER_DISABLE_DEFAULT_METRICS Use only metrics supplied from queries.yaml. Value can be true or false. Default is false.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"PG_EXPORTER_DISABLE_SETTINGS_METRICS Use the flag if you don't want to scrape pg_settings. Value can be true or false. Default is false.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"PG_EXPORTER_AUTO_DISCOVER_DATABASES Whether to discover the databases on a server dynamically. Value can be true or false. Default is false.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"PG_EXPORTER_EXTEND_QUERY_PATH Path to a YAML file containing custom queries to run. Check out queries.yaml for examples of the format.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"PG_EXPORTER_CONSTANT_LABELS Labels to set in all metrics. A list of label=value pairs, separated by commas.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"PG_EXPORTER_EXCLUDE_DATABASES A comma-separated list of databases to remove when autoDiscoverDatabases is enabled. Default is empty string.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"PG_EXPORTER_INCLUDE_DATABASES A comma-separated list of databases to only include when autoDiscoverDatabases is enabled. Default is empty string, means allow all.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"PG_EXPORTER_METRIC_PREFIX A prefix to use for each of the default metrics exported by postgres-exporter. Default is pg"))),(0,n.kt)("p",null,"\u53e6\u5916\u4ee5 ",(0,n.kt)("inlineCode",{parentName:"p"},"PG_")," \u5f00\u5934\u7684\u73af\u5883\u53d8\u91cf\u5728\u4f7f\u7528\u7684\u65f6\u5019\u4f1a\u8986\u76d6\u547d\u4ee4\u884c\u53c2\u6570\uff0c\u4f18\u5148\u7ea7\u8f83\u9ad8\u3002"),(0,n.kt)("h1",{id:"\u6dfb\u52a0\u65b0\u7684\u76d1\u63a7\u6307\u6807"},"\u6dfb\u52a0\u65b0\u7684\u76d1\u63a7\u6307\u6807"),(0,n.kt)("p",null,"\u5982\u679c\u5c06\u6765\u6dfb\u52a0\u989d\u5916\u7684\u76d1\u63a7\u6307\u6807\uff0c Exporter \u5c06\u5c1d\u8bd5\u52a8\u6001\u6dfb\u52a0\u5e76\u5bfc\u51fa\u5b83\u4eec\uff0c\u4f46\u8fd9\u4e9b\u6307\u6807\u7684\u7c7b\u578b\u4f1a\u88ab\u6807\u8bb0\u4e3a \u201cuntyped\u201d\u3002\u901a\u8fc7\u590d\u5236\u8fd9\u4e9b\u8868\u5e76\u4f7f\u7528\u4ee5\u4e0b Python \u4ee3\u7801\u7247\u6bb5\uff0c\u53ef\u4ee5\u4ece Postgres \u6587\u6863\u4e2d\u8f7b\u677e\u521b\u5efa\u5176\u4ed6\u5176\u4ed6\u6307\u6807\u7684\u6620\u5c04:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'x = """tab separated raw text of a documentation table"""\nfor l in StringIO(x):\n    column, ctype, description = l.split(\'\\t\')\n    print """"{0}" : {{ prometheus.CounterValue, prometheus.NewDesc("pg_stat_database_{0}", "{2}", nil, nil) }}, """.format(column.strip(), ctype, description.strip())\n\n')),(0,n.kt)("p",null,"\u9002\u5f53\u7684\u8c03\u6574\u65b0\u751f\u4ea7\u7684 Prometheus \u76d1\u63a7\u6307\u6807\u7c7b\u578b\u7684\u503c\uff0c\u8fd9\u6837\u53ef\u4ee5\u660e\u786e\u6307\u6807\u7684\u7c7b\u578b\uff0c\u5e76\u4e14\u6709\u5229\u4e8e\u67e5\u8be2\u548c\u8ba1\u7b97\u3002"),(0,n.kt)("p",null,"\u6269\u5c55\u3002query-path\u547d\u4ee4\u884c\u53c2\u6570\u6307\u5b9a\u4e00\u4e2a\u5305\u542b\u8981\u8fd0\u884c\u7684\u5176\u4ed6\u67e5\u8be2\u7684YAML\u6587\u4ef6\u3002\u5728queries.yaml\u4e2d\u63d0\u4f9b\u4e86\u4e00\u4e9b\u793a\u4f8b\u3002"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--extend.query-path")," \u547d\u4ee4\u884c\u53c2\u6570\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u4ee5\u8fd0\u884c\u7684 YAML \u6587\u4ef6\uff0c\u8fd9\u4e2a\u6587\u4ef6\u53ef\u4ee5\u81ea\u5b9a\u4e49\u8981\u91c7\u96c6\u7684\u76d1\u63a7\u6307\u6807\uff0c\u8fd9\u4e2a\u6587\u4ef6\u7684\u5199\u6cd5\u53ef\u4ee5\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/postgres_exporter/blob/master/queries.yaml"},"queries.yaml")," \u3002"),(0,n.kt)("h1",{id:"\u5173\u95ed\u9ed8\u8ba4\u6307\u6807\u91c7\u96c6"},"\u5173\u95ed\u9ed8\u8ba4\u6307\u6807\u91c7\u96c6"),(0,n.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u7684\u662f Exporter \u975e\u5b98\u65b9\u652f\u6301\u7684 Postgres \u7248\u672c\uff0c\u6bd4\u5982 8.2.15 \u7248\u672c\u7684 Postgres \uff0c\u6216\u8005  Postgres \u7684\u53d8\u4f53\uff0c\u6bd4\u5982 Greenplum \uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"--disable-default-metrics")," \u53c2\u6570\u5173\u95ed\u6240\u6709\u7684\u9ed8\u8ba4\u6307\u6807\u91c7\u96c6\uff0c\u8fd9\u6837\u6240\u6709\u7684\u5185\u7f6e\u6307\u6807\u90fd\u4e0d\u4f1a\u51fa\u73b0\u4e86\u3002\u8fd9\u4e2a\u65f6\u5019\u9700\u8981\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"--extend.query-path")," \u6307\u5b9a queries.yaml \u6587\u4ef6\u6765\u6307\u5b9a\u8981\u91c7\u96c6\u5230\u6307\u6807\u3002\u5426\u5219\u53ea\u4f1a\u91c7\u96c6\u5230 Exporter \u81ea\u8eab\u7684\u6307\u6807\uff0c\u91c7\u96c6\u4e0d\u5230\u6570\u636e\u5e93\u7684\u6307\u6807\u4e86\u3002 "),(0,n.kt)("h1",{id:"\u6253\u5f00\u81ea\u52a8\u53d1\u73b0\u6570\u636e\u5e93\u5b9e\u4f8b"},"\u6253\u5f00\u81ea\u52a8\u53d1\u73b0\u6570\u636e\u5e93\u5b9e\u4f8b"),(0,n.kt)("p",null,"\u4e3a\u4e86\u4ece\u6570\u636e\u5e93\u670d\u52a1\u5668\u4e0a\u7684\u6240\u6709\u6570\u636e\u5e93\u4e2d\u83b7\u53d6\u76d1\u63a7\u6307\u6807\u6570\u636e\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"--auto-discover-databases")," \u547d\u4ee4\u884c\u53c2\u6570\u52a8\u6001\u53d1\u73b0\u6570\u636e\u5e93 DSN\u3002",(0,n.kt)("inlineCode",{parentName:"p"},"SELECT datname FROM pg_database WHERE datallowconn = true AND datistemplate = false and datname != current_database()")," \u5c06\u5bf9\u6240\u6709\u914d\u7f6e\u7684DSN\u8fd0\u884c\uff0c\u5f53\u7ed3\u679c\u4e3a\u771f\u65f6\uff0c\u4ece\u7ed3\u679c\u4e2d\u521b\u5efa\u4e00\u7ec4\u65b0\u7684DSN\uff0c\u4e3a\u5176\u6293\u53d6\u76d1\u63a7\u6307\u6807\u3002"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u53ef\u4ee5\u642d\u914d ",(0,n.kt)("inlineCode",{parentName:"p"},"--exclude-databases")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"--include-databases")," \u4e24\u4e2a\u53c2\u6570\u4f7f\u7528\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"--exclude-databases")," \u53ef\u4ee5\u53bb\u6389\u4e0d\u60f3\u8981\u7684\u6570\u636e\u5e93\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"--include-databases")," \u53ef\u4ee5\u4fdd\u7559\u53ea\u60f3\u8981\u7684\u6570\u636e\u3002"),(0,n.kt)("h1",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,n.kt)("p",null,"PostgreSQL Server Exporter \u53ef\u4ee5\u7075\u6d3b\u591a\u53d8\u7684\u91c7\u96c6 Postgres \u6570\u636e\u5e93\u7684\u76d1\u63a7\u6307\u6807\u3002"))}u.isMDXComponent=!0}}]);