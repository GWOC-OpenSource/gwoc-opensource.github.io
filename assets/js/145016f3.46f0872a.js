"use strict";(self.webpackChunkgwoc_open_source=self.webpackChunkgwoc_open_source||[]).push([[5863],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9075:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:7},l="Vitess",u={unversionedId:"CNCF Projects/5.7_Vitess",id:"CNCF Projects/5.7_Vitess",isDocsHomePage:!1,title:"Vitess",description:"VITESS",source:"@site/docs/CNCF Projects/5.7_Vitess.md",sourceDirName:"CNCF Projects",slug:"/CNCF Projects/5.7_Vitess",permalink:"/docs/CNCF Projects/5.7_Vitess",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Prometheus",permalink:"/docs/CNCF Projects/5.6_Prometheus"},next:{title:"Cloud-Native Storage Orchestrator: Rook",permalink:"/docs/CNCF Projects/5.8_Rook"}},c=[{value:"<strong>Features</strong>",id:"features",children:[],level:2},{value:"<strong>Supported Databases</strong>",id:"supported-databases",children:[],level:2}],p={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vitess"},"Vitess"),(0,o.kt)("img",{src:"https://vitess.io/img/logos/vitess.png"}),(0,o.kt)("h1",{align:"center"}," VITESS"),(0,o.kt)("p",{align:"center"},"A database clustering system for horizontal scaling of MySQL"),(0,o.kt)("p",{align:"justify"},"Vitess is a database solution for deploying, scaling and managing large clusters of open-source database instances. It currently supports MySQL, Percona and MariaDB. It\u2019s architected to run as effectively in a public or private cloud architecture as it does on dedicated hardware. It combines and extends many important SQL features with the scalability of a NoSQL database. Vitess can help you with the following problems:",(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Scaling a SQL database by allowing you to shard it, while keeping application changes to a minimum."),(0,o.kt)("li",{parentName:"ul"},"Migrating from baremetal to a private or public cloud."),(0,o.kt)("li",{parentName:"ul"},"Deploying and managing a large number of SQL database instances.")),(0,o.kt)("p",null,"Vitess includes compliant JDBC and Go database drivers using a native query protocol. Additionally, it implements the MySQL server protocol which is compatible with virtually any other language."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Vitess served all YouTube database traffic for over five years.")," Many enterprises have now adopted Vitess for their production needs. YouTube is not the only major tech firm using Vitess internally. Other notable adopters include Slack Technologies Inc., HubSpot Inc., Pinterest Inc. and Square Inc., etc")),(0,o.kt)("h2",{id:"features"},(0,o.kt)("strong",{parentName:"h2"},"Features")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Performance",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Connection pooling - Multiplex front-end application queries onto a pool of MySQL connections to optimize performance."),(0,o.kt)("li",{parentName:"ul"},"Query de-duping \u2013 Reuse results of an in-flight query for any identical requests received while the in-flight query was still executing."),(0,o.kt)("li",{parentName:"ul"},"Transaction manager \u2013 Limit number of concurrent transactions and manage timeouts to optimize overall throughput. "))),(0,o.kt)("li",{parentName:"ul"},"Protection",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Query rewriting and sanitization \u2013 Add limits and avoid non-deterministic updates."),(0,o.kt)("li",{parentName:"ul"},"Query blacklisting \u2013 Customize rules to prevent potentially problematic queries from hitting your database."),(0,o.kt)("li",{parentName:"ul"},"Query killer \u2013 Terminate queries that take too long to return data."),(0,o.kt)("li",{parentName:"ul"},"Table ACLs \u2013 Specify access control lists (ACLs) for tables based on the connected user."))),(0,o.kt)("li",{parentName:"ul"},"Monitoring",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Performance analysis tools let you monitor, diagnose, and analyze your database performance."))),(0,o.kt)("li",{parentName:"ul"},"Topology Management Tools",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Cluster management tools (handles reparenting)"),(0,o.kt)("li",{parentName:"ul"},"Web-based management GUI"),(0,o.kt)("li",{parentName:"ul"},"Designed to work in multiple data centers / regions"))),(0,o.kt)("li",{parentName:"ul"},"Sharding",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Virtually seamless dynamic re-sharding"),(0,o.kt)("li",{parentName:"ul"},"Vertical and Horizontal sharding support"),(0,o.kt)("li",{parentName:"ul"},"Multiple sharding schemes, with the ability to plug-in custom ones")))),(0,o.kt)("h2",{id:"supported-databases"},(0,o.kt)("strong",{parentName:"h2"},"Supported Databases")),(0,o.kt)("p",null,"Vitess deploys, scales and manages clusters of open-source SQL database instances. Currently, Vitess supports the MySQL, Percona and MariaDB databases."),(0,o.kt)("p",null,"The VTGate proxy server advertises its version as MySQL 5.7."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"References-")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Vitess Docs - ",(0,o.kt)("a",{parentName:"li",href:"https://vitess.io/docs/overview/whatisvitess/"},"https://vitess.io/docs/overview/whatisvitess/")),(0,o.kt)("li",{parentName:"ul"},"Google Open Source - ",(0,o.kt)("a",{parentName:"li",href:"https://opensource.google/projects/vitess"},"https://opensource.google/projects/vitess"))))}m.isMDXComponent=!0}}]);