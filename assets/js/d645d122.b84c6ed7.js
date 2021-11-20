"use strict";(self.webpackChunkgwoc_open_source=self.webpackChunkgwoc_open_source||[]).push([[9856],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),g=c(n),p=r,h=g["".concat(s,".").concat(p)]||g[p]||u[p]||o;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5919:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return g}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],d={sidebar_position:26},s="KubeEdge",c={unversionedId:"CNCF Projects/5.26_KubeEdge",id:"CNCF Projects/5.26_KubeEdge",isDocsHomePage:!1,title:"KubeEdge",description:"KubeEdge is an open source system extending native containerized application orchestration and device management to hosts at the Edge. It is built upon Kubernetes and provides core infrastructure support for networking, application deployment and metadata synchronization between cloud and edge. Kubeedge is licensed under Apache 2.0. and free for personal or commercial use. It also supports MQ Telemetry Transport (MQTT) which enables edge devices to access through edge nodes and allows developers to author custom logic and enable resource constrained device communication at the Edge.",source:"@site/docs/CNCF Projects/5.26_KubeEdge.md",sourceDirName:"CNCF Projects",slug:"/CNCF Projects/5.26_KubeEdge",permalink:"/docs/CNCF Projects/5.26_KubeEdge",tags:[],version:"current",sidebarPosition:26,frontMatter:{sidebar_position:26},sidebar:"tutorialSidebar",previous:{title:"Flux",permalink:"/docs/CNCF Projects/5.25_Flux"},next:{title:"Open Telemetry",permalink:"/docs/CNCF Projects/5.27_OpenTelemetry"}},l=[{value:"Challenges of Building Edge Computing Based on Kubernetes:",id:"challenges-of-building-edge-computing-based-on-kubernetes",children:[],level:2},{value:"Advantages by using KubeEdge:",id:"advantages-by-using-kubeedge",children:[],level:2},{value:"KubeEdge Architecture",id:"kubeedge-architecture",children:[{value:"In the Cloud Layer:",id:"in-the-cloud-layer",children:[],level:3},{value:"On the Edge Layer:",id:"on-the-edge-layer",children:[],level:3}],level:2},{value:"Where KubeEdge is heading:",id:"where-kubeedge-is-heading",children:[{value:"Contributing:",id:"contributing",children:[],level:3},{value:"References:",id:"references",children:[],level:3}],level:2}],u={toc:l};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kubeedge"},"KubeEdge"),(0,o.kt)("p",null,"KubeEdge is an open source system extending native containerized application orchestration and device management to hosts at the Edge. It is built upon ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," and provides core infrastructure support for networking, application deployment and metadata synchronization between cloud and edge. Kubeedge is licensed under Apache 2.0. and free for personal or commercial use. It also supports MQ Telemetry Transport (MQTT) which enables edge devices to access through edge nodes and allows developers to author custom logic and enable resource constrained device communication at the Edge.\nKubeEdge goal is to make an open platform to enable Edge computing, extending native containerized application orchestration capabilities to hosts at Edge, which built upon kubernetes and provides fundamental infrastructure support for network, app deployment and metadata synchronization between cloud and edge. KubeEdge can be applied on IoT, lightweight edge, multi-access edge computing (MEC) and enterprise edge and more."),(0,o.kt)("p",null,"KubeEdge was donated to CNCF in March 2019 and in September 2020, the project was promoted to an incubation-level hosted project and now currently have 4,000+ stars, 1,100+ forks, and more than 680 + contributors."),(0,o.kt)("img",{src:"https://kubeedge.io/img/kubeedge-horizontal-color.png"}),(0,o.kt)("h2",{id:"challenges-of-building-edge-computing-based-on-kubernetes"},"Challenges of Building Edge Computing Based on Kubernetes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Resource constraints")," - A gateway device requires 128 MB of memory and Kubernetes require atleast 1 GB of memory but the resources of edge nodes are limited."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Poor network connection")," - A gateway device requires 128 MB of memory and cloud accesses the edge over public networks, which are in limited bandwidth and that brings high latency."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Poor support for device access and management")," - Lack of edge device abstraction and poor support for edge device access protocols.")),(0,o.kt)("h2",{id:"advantages-by-using-kubeedge"},"Advantages by using KubeEdge:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Kubernetes-native support")," - Managing edge applications and edge devices in the cloud with fully compatible Kubernetes APIs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cloud-Edge Reliable Collaboration")," - Ensure reliable messages delivery without loss over unstable cloud-edge network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Edge Autonomy")," - Ensure edge nodes run autonomously and the applications in edge run normally, when the cloud-edge network is unstable or edge is offline and restarted."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Edge Devices Management")," - Managing edge devices through Kubernetes native APIs implemented by CRD."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Extremely Lightweight Edge Agent")," - Extremely lightweight Edge Agent(EdgeCore) to run on resource constrained edge.(only requiring about 70 MB of memory).")),(0,o.kt)("p",null,"With KubeEdge it is easy to get and deploy existing complicated machine learning, image recognition, event processing and other high level applications to the Edge. With business logic running at the Edge, much larger volumes of data can be secured & processed locally where the data is produced. With data processed at the Edge, the responsiveness is increased dramatically and data privacy is protected."),(0,o.kt)("h2",{id:"kubeedge-architecture"},"KubeEdge Architecture"),(0,o.kt)("p",null,"The KubeEdge architecture consists of cloud, edge, and device layers"),(0,o.kt)("img",{src:"https://github.com/kubeedge/kubeedge/blob/master/docs/images/kubeedge_arch.png?raw=true"}),(0,o.kt)("p",null,"The control plane is on the cloud and the Edge nodes are at the edge. "),(0,o.kt)("h3",{id:"in-the-cloud-layer"},"In the Cloud Layer:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubeedge.io/en/docs/architecture/cloud/cloudhub"},"CloudHub"),": CloudHub is a communication interface module in the Cloud component. It acts as a caching mechanism to ensure changes in the Cloud part are sent to the Edge caching mechanism (EdgeHub)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubeedge.io/en/docs/architecture/cloud/edge_controller"},"EdgeController"),": EdgeController is an extended kubernetes controller which manages edge nodes and pods metadata so that the data can be targeted to a specific edge node."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubeedge.io/en/docs/architecture/cloud/device_controller"},"DeviceController"),": DeviceController is an extended kubernetes controller which manages devices so that the device metadata/status data can be synced between edge and cloud.")),(0,o.kt)("p",null,"At the cloud layer, the green box on the left represents a Kubernetes master. It is a native Kubernetes control plane without any changes."),(0,o.kt)("h3",{id:"on-the-edge-layer"},"On the Edge Layer:"),(0,o.kt)("p",null,"The edge layer enables application and device management"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubeedge.io/en/docs/architecture/edge/edgehub"},"EdgeHub"),": EdgeHub is a communication interface module to the Cloud component. It is the web socket client responsible for interacting with Cloud Service for the edge computing (like Edge Controller as in the KubeEdge Architecture)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubeedge.io/en/docs/architecture/edge/edged"},"Edged"),": Edged is an agent that runs on edge nodes and manages containerized applications."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubeedge.io/en/docs/architecture/edge/eventbus"},"EventBus"),": EventBus handles the internal edge communications using Message Queuing Telemetry Transport (MQTT). "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubeedge.io/en/docs/architecture/edge/servicebus"},"ServiceBus"),": ServiceBus is a HTTP client to interact with HTTP servers (REST), offering HTTP client capabilities to components of cloud to reach HTTP servers running at edge."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubeedge.io/en/docs/architecture/edge/devicetwin"},"DeviceTwin"),": DeviceTwin is responsible for storing device status and syncing device status to the cloud. It also provides query interfaces for applications."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubeedge.io/en/docs/architecture/edge/metamanager"},"MetaManager"),": MetaManager works as the message processor between edged and edgehub. It is also responsible for storing/retrieving metadata to/from a lightweight database (SQLite).")),(0,o.kt)("h2",{id:"where-kubeedge-is-heading"},"Where KubeEdge is heading:"),(0,o.kt)("p",null,"KubeEdge is in the very early stage of adoption, but it is gaining popularity due to its flexible approach to making edge computing communications secure, reliable, and autonomous so that they won't be affected by network latency."),(0,o.kt)("p",null,"KubeEdge is a flexible, vendor-neutral, lightweight, heterogeneous edge computing platform. This enables it to support use cases such as data analysis, video analytics, machine learning, and more and because it is vendor-neutral, KubeEdge allows big cloud players to use it."),(0,o.kt)("h3",{id:"contributing"},"Contributing:"),(0,o.kt)("p",null,"If anyone interested in being a contributor and want to get involved in developing the KubeEdge code, can see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeedge/kubeedge/blob/master/CONTRIBUTING.md"},"CONTRIBUTING")," for details on submitting patches and the contribution workflow."),(0,o.kt)("h3",{id:"references"},"References:"),(0,o.kt)("p",null,"KubeEdege Docs: ",(0,o.kt)("a",{parentName:"p",href:"https://kubeedge.io/en/docs/"},"https://kubeedge.io/en/docs/"),"\nKubeEdge Github: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeedge/kubeedge"},"https://github.com/kubeedge/kubeedge"),"\nCNCF Blog: ",(0,o.kt)("a",{parentName:"p",href:"https://www.cncf.io/blog/2021/07/05/kubeedge-cloud-native-edge-computing/"},"https://www.cncf.io/blog/2021/07/05/kubeedge-cloud-native-edge-computing/")))}g.isMDXComponent=!0}}]);