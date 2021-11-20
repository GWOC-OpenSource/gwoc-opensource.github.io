"use strict";(self.webpackChunkgwoc_open_source=self.webpackChunkgwoc_open_source||[]).push([[5830],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2301:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:27},l="Open Telemetry",p={unversionedId:"CNCF Projects/5.27_OpenTelemetry",id:"CNCF Projects/5.27_OpenTelemetry",isDocsHomePage:!1,title:"Open Telemetry",description:"It is a set of APIs, SDKs, tooling and integrations which are designed for creating and manageming of telemetry data such as traces, metrics, and logs. This project provides a vendor-agnostic implementation that can be configured to send telemetry data to any backend of your choice. It has support for a variety of popular open-source projects including Jaeger and Prometheus.",source:"@site/docs/CNCF Projects/5.27_OpenTelemetry.md",sourceDirName:"CNCF Projects",slug:"/CNCF Projects/5.27_OpenTelemetry",permalink:"/docs/CNCF Projects/5.27_OpenTelemetry",tags:[],version:"current",sidebarPosition:27,frontMatter:{sidebar_position:27},sidebar:"tutorialSidebar",previous:{title:"KubeEdge",permalink:"/docs/CNCF Projects/5.26_KubeEdge"},next:{title:"SPIFFE",permalink:"/docs/CNCF Projects/5.28_Spiffe"}},c=[{value:"What does OpenTelemetry provide you with?",id:"what-does-opentelemetry-provide-you-with",children:[],level:2},{value:"What is Observability?",id:"what-is-observability",children:[],level:2},{value:"How does OpenTelemetry work?",id:"how-does-opentelemetry-work",children:[],level:2},{value:"Benefits of OpenTelemetry",id:"benefits-of-opentelemetry",children:[],level:2},{value:"What is OpenTelemetry used for?",id:"what-is-opentelemetry-used-for",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"open-telemetry"},"Open Telemetry"),(0,o.kt)("p",null,"It is a set of APIs, SDKs, tooling and integrations which are designed for creating and manageming of telemetry data such as traces, metrics, and logs. This project provides a vendor-agnostic implementation that can be configured to send telemetry data to any backend of your choice. It has support for a variety of popular open-source projects including Jaeger and Prometheus."),(0,o.kt)("p",null,"Telemetry data is very important for powering observability products. Usually until now, telemetry data was provided by open-source projects or commercial vendors. But due to the lack of standardization, there was a lack of data portability and also it burdened the user to maintain the instrumentation."),(0,o.kt)("img",{width:"400",height:"250",src:"https://opentelemetry.io/img/logos/opentelemetry-stacked-color.png"}),(0,o.kt)("p",null,"By adopting open telemetry we can solve all the problems given above as it gives us a single, vendor-agnostic solution which also has a broad industry support and it is also being used by the cloud providers themselves ,the end to end users and also its venders."),(0,o.kt)("h2",{id:"what-does-opentelemetry-provide-you-with"},"What does OpenTelemetry provide you with?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A single, vendor-agnostic instrumentation library per language with support for both automatic and manual instrumentation."),(0,o.kt)("li",{parentName:"ul"},"A single collector binary which can be deployed in a variety of ways which also incude an agent or gateway."),(0,o.kt)("li",{parentName:"ul"},"An end-to-end implementation which helps in generating, emitting, collecting, processing and exporting telemetry data."),(0,o.kt)("li",{parentName:"ul"},"You will have a full control over your data which also has the ability to send data to multiple destinations in parallel via configuration."),(0,o.kt)("li",{parentName:"ul"},"Open-standard semantic conventions to ensure vendor-agnostic data collection"),(0,o.kt)("li",{parentName:"ul"},"The ability to support multiple context propagation formats in parallel to assist with migrating as standards evolve."),(0,o.kt)("li",{parentName:"ul"},"It has a support for a wide variety of open-source and commercial protocols, format and context propagation mechanisms as well as it can provide shims to the OpenTracing and OpenCensus projects, it is very easy to adopt OpenTelemetry")),(0,o.kt)("h2",{id:"what-is-observability"},"What is Observability?"),(0,o.kt)("p",null,"It is the practice of measuring the state of a system by its outputs. It is a term which originated in the control theory, it is concerned with describing and understanding how the self-regulating systems operate. Now a days a lot of organizations have increased its use and are adding it to distributed IT systems which helps them to understand and improve their performance. Observability alse uses telemetry data to gain a deep visibility into these systems and help teams to answer multitude of questions about the systems behavior."),(0,o.kt)("h2",{id:"how-does-opentelemetry-work"},"How does OpenTelemetry work?"),(0,o.kt)("p",null,"Observability is generally achieved by utilizing 4 fundamental data groups known as the M.E.L.T"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Metrics")," provide time-based numerical measurements on elements of the application ecosystems.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Events")," track individual actions, producing a time-stamped inventory of data related to operations that are defined by the user. You can use events to\nconfirm that a particular action occurred at a particular time.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Logging")," : It is used for collecting application generated text added to troubleshoot.There is a lot of suspicion regarding the effectiveness of log data in the context of microservices , as it is very difficult to scale and it is often considered as overly expensive. We can consider logs as essentially just lines of text a system produces when certain code blocks get executed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Tracing")," :It provides an understanding of how requests flow through the system. It can be used for understand interacting parts and their behaviors."))),(0,o.kt)("h2",{id:"benefits-of-opentelemetry"},"Benefits of OpenTelemetry"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Observability helps achieve business objectives"),(0,o.kt)("li",{parentName:"ul"},"OpenTelemetry simplifies observability integration"),(0,o.kt)("li",{parentName:"ul"},"Broad Language Support -> Java , C# , Go , JavaScript , Python , Rust , C++ , Erlang/Elixir"),(0,o.kt)("li",{parentName:"ul"},"Integrates With Popular Frameworks and Libraries -> MySQL , Redis , Django , Kafka , Jetty , Akka , RabbitMQ ,Spring , Quarkus , Flask , net/http , gorilla/mux , WSGI , JDBC , PostgreSQL")),(0,o.kt)("h2",{id:"what-is-opentelemetry-used-for"},"What is OpenTelemetry used for?"),(0,o.kt)("p",null,"It can be used to solve common issues encountered at organizations running cloud-native applications across distributed systems."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Monitor the health of microservices applications")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Attribute resource usage to different user groups")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create prioritized requests among shared resources"))))}d.isMDXComponent=!0}}]);