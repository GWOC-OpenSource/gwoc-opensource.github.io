"use strict";(self.webpackChunkgwoc_open_source=self.webpackChunkgwoc_open_source||[]).push([[4334],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return h}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(o),h=n,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return o?r.createElement(m,s(s({ref:t},u),{},{components:o})):r.createElement(m,s({ref:t},u))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=o[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7768:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),s=["components"],i={sidebar_position:8},c="Cloud-Native Storage Orchestrator: Rook",l={unversionedId:"CNCF Projects/5.8_Rook",id:"CNCF Projects/5.8_Rook",isDocsHomePage:!1,title:"Cloud-Native Storage Orchestrator: Rook",description:"Introduction",source:"@site/docs/CNCF Projects/5.8_Rook.md",sourceDirName:"CNCF Projects",slug:"/CNCF Projects/5.8_Rook",permalink:"/docs/CNCF Projects/5.8_Rook",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Vitess",permalink:"/docs/CNCF Projects/5.7_Vitess"},next:{title:"Jaeger",permalink:"/docs/CNCF Projects/5.9_Jaeger"}},u=[{value:"Introduction",id:"introduction",children:[{value:"Operator Pattern",id:"operator-pattern",children:[],level:3},{value:"Rook for Ceph",id:"rook-for-ceph",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,o=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cloud-native-storage-orchestrator-rook"},"Cloud-Native Storage Orchestrator: Rook"),(0,a.kt)("img",{src:"https://github.com/mayankkuthar/Reference-Images/blob/main/rook.PNG?raw=true"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Kubernetes* (or K8s)-based cloud-native apps are extensively deployed in production environments, posing a problem: how do you integrate a conventional storage system into a Kubernetes cluster? As a solution, CNCF offer Rook."),(0,a.kt)("p",null,"Rook is an open source cloud-native storage orchestrator that makes storage software self-managing, self-scaling, and self-healing.\n",(0,a.kt)("strong",{parentName:"p"},"Ceph",(0,a.kt)("em",{parentName:"strong"},", EdgeFS, Cassandra"),", CockroachDB*, NFS, and YugabyteDB")," are among the storage systems supported by Rook."),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/39026182/134729966-98a82c0c-90a9-4396-8b40-c581c7cea196.png"}),(0,a.kt)("h3",{id:"operator-pattern"},"Operator Pattern"),(0,a.kt)("p",null,"The Rook framework's core is the Rook operator. Operator is a Kubernetes controller that manages apps and their components using CRs (Custom Resource)."),(0,a.kt)("p",null,"The Kubernetes controller keeps an eye on the condition of your cluster resource and attempts to get it closer to the intended state. Each controller is in charge of a certain resource, and the reconciliation loop\nis used to implement it. The reconciliation is initiated when the monitored resource is created, modified, or destroyed."),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/39026182/134730601-2e5cfaff-e5d1-4202-947f-0970d52fd75e.png"}),(0,a.kt)("h3",{id:"rook-for-ceph"},"Rook for Ceph"),(0,a.kt)("p",null,"The Rook operator is a straightforward container that contains everything required to set up and manage a storage cluster. Ceph daemon pods such as MONs, OSDs, MGR, and others are started and monitored by the operator.\nIt also keeps an eye on the daemon to make sure the cluster is running well. When required, Ceph MONs are begun or failed over. As the cluster expands or decreases, other modifications are performed."),(0,a.kt)("p",null,"Rook-Ceph provides block, filesystem, and object storage for apps, much like native Ceph."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ceph CSI (Container Storage Interface) is a standard that allows containerized workloads on Container Orchestration Systems like Kubernetes to access arbitrary block and file storage systems. Ceph CSI is a Rook integration that allows for two scenarios:"),(0,a.kt)("li",{parentName:"ul"},"RBD (block storage): This driver is tuned for RWO pod access, which means that only one pod may access the storage at a time."),(0,a.kt)("li",{parentName:"ul"},"CephFS (filesystem): This driver enables RWX to access the same storage from one or more pods."),(0,a.kt)("li",{parentName:"ul"},"Rook enables the creation of new buckets and access to existing buckets through two custom resources: Object Bucket Claim (OBC) and Object Bucket Access (OBA) for object storage (OB). RGW allows applications to access the objects.")),(0,a.kt)("p",null,"There are three ways to configure Ceph for Ceph cluster maintainers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Toolbox + Ceph CLI: Using a Rook Toolbox pod to run Ceph commands is recommended."),(0,a.kt)("li",{parentName:"ul"},"The native Ceph dashboard is the second preferred approach. This approach has the same priority as Ceph CLI configuration."),(0,a.kt)("li",{parentName:"ul"},"Ceph.conf overrides ConfigMap for advanced settings. Some parameters are difficult to change through CLI or dashboard. Ceph CLI, for example, does not allow us to remove MONs directly. Overriding configMap is the only option.")),(0,a.kt)("p",null,"Programmers can develop their own plugin by using the Kubernetes client API to access ConfigMap or Toolbox pod to manipulate a Rook-Ceph cluster."),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/39026182/134731376-82cae425-6452-4ed9-a4fa-0ed8c16ddbe7.png"}))}d.isMDXComponent=!0}}]);