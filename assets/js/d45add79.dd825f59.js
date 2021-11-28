"use strict";(self.webpackChunkgwoc_open_source=self.webpackChunkgwoc_open_source||[]).push([[4570],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=o,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(k,s(s({ref:t},c),{},{components:a})):n.createElement(k,s({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),s=["components"],i={sidebar_position:11},l="Amazon S3",p={unversionedId:"Miscellaneous/M.11_Amazon_S3",id:"Miscellaneous/M.11_Amazon_S3",isDocsHomePage:!1,title:"Amazon S3",description:"Amazon Web Services (AWS), is subsidiary of Amazon. It is similar to Google Cloud Platform, Microsoft Azure etc. They provide cloud computing facilities and APIs to individuals, companies and governments as well. Amazon S3 (Amazon Simple Storage Service) is an object storage service provided by Amazon.",source:"@site/docs/Miscellaneous/M.11_Amazon_S3.md",sourceDirName:"Miscellaneous",slug:"/Miscellaneous/M.11_Amazon_S3",permalink:"/docs/Miscellaneous/M.11_Amazon_S3",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Android",permalink:"/docs/Miscellaneous/M.10_Android_In_Opensource"},next:{title:"Deplying Project to Heroku",permalink:"/docs/Miscellaneous/M.12_Deploying_to_heroku"}},c=[{value:"What is it? Why would people need it?",id:"what-is-it-why-would-people-need-it",children:[],level:2},{value:"Benefits",id:"benefits",children:[],level:2},{value:"Features of S3",id:"features-of-s3",children:[],level:2},{value:"How does it work?",id:"how-does-it-work",children:[],level:2},{value:"Accessing Amazon S3",id:"accessing-amazon-s3",children:[],level:2},{value:"Hands-On Amazon S3",id:"hands-on-amazon-s3",children:[{value:"To sign in as an AWS user",id:"to-sign-in-as-an-aws-user",children:[],level:3},{value:"Let&#39;s <em>create</em> your first bucket!",id:"lets-create-your-first-bucket",children:[],level:3},{value:"To <em>upload</em> an object to your bucket :",id:"to-upload-an-object-to-your-bucket-",children:[],level:3},{value:"To <em>delete</em> an <em>object</em>:",id:"to-delete-an-object",children:[],level:3},{value:"To <em>delete bucket</em>:",id:"to-delete-bucket",children:[],level:3}],level:2}],m={toc:c};function u(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"amazon-s3"},"Amazon S3"),(0,r.kt)("p",{align:"center",width:"100%"},(0,r.kt)("img",{width:"700",height:"250",src:"https://user-images.githubusercontent.com/30996989/133883882-d5b85730-0f84-46ad-a653-96473a9f86bb.png"})),(0,r.kt)("p",null,"Amazon Web Services (AWS), is subsidiary of Amazon. It is similar to Google Cloud Platform, Microsoft Azure etc. They provide cloud computing facilities and APIs to individuals, companies and governments as well. Amazon S3 (Amazon Simple Storage Service) is an object storage service provided by Amazon."),(0,r.kt)("h2",{id:"what-is-it-why-would-people-need-it"},"What is it? Why would people need it?"),(0,r.kt)("p",null,"Amazon S3 offers industry-leading scalability, data availability, security and also performance. Therefore it would mean that customers of all sizes and from various industries can use this service to store and protect any amount of data for a range of use cases. Moreover, the easy-to-use management features enables to organize data and configure finely-tuned access controls quiet effortlessly. It is designed for maximum durability."),(0,r.kt)("h2",{id:"benefits"},"Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Industry leading performance, scalability, availability, and durability")),(0,r.kt)("p",null,"With Amazon S3, it is possible to scale the storage resources up or down to meet the fluctuating demands. All this is done without upfront investments or procurement cycles. Amazon S3 is designed for 99.999999999% (11 9\u2019s) of data durability because it automatically creates and stores copies of all S3 objects across multiple systems. "),(0,r.kt)("p",null,"You may read more on ",(0,r.kt)("em",{parentName:"p"},"Durability and Data Protection"),"  ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/faqs/##Durability_.26_Data_Protection"},"here"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wide range of cost-efficient storage classes")),(0,r.kt)("p",null,"Whats better than saving overall cost and have amazing performance at the same time! Yes, this is very much possible with the help of ",(0,r.kt)("em",{parentName:"p"},"S3 Storage Classes"),". It supports different data access levels at corresponding rates. The data usage pattern can be analyzed using ",(0,r.kt)("em",{parentName:"p"},"S3 Storage Class Analysis"),". There are several other features such as :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"S3 Lifecycle")," policy : To configure and execute transfer of storage classes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"S3 Intelligent-Tiering")," : To store data with changing or unknown patterns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"S3 Outpost")," : - To meet data residency requirements, and store data on-premise. "))),(0,r.kt)("p",null,"You may read more on ",(0,r.kt)("em",{parentName:"p"},"S3 Storage Classes"),"  ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/storage-classes/"},"here"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unmatched security, compliance, and audit capabilities")),(0,r.kt)("p",null,"It is possible to secure data from unauthorized access with encryption features and access management tools. In a nut shell, S3 is the only object storage service that allows blocking of public access to all of the objects at the bucket or the account level with the help of ",(0,r.kt)("em",{parentName:"p"},"S3 Block Public Access"),". "),(0,r.kt)("p",null,"You may read more on ",(0,r.kt)("em",{parentName:"p"},"S3 security"),"  ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/features/##Access_management_and_security"},"here"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Easily manage data and access controls")),(0,r.kt)("p",null,"S3 comes with robust capabilities for managing access, cost, replication and data protection. The Access Points in S3 makes it easy to manage data access with specific permission using a shared data set."),(0,r.kt)("p",null,"You may read more on ",(0,r.kt)("em",{parentName:"p"},"S3 Storage Management")," features ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/features/##Storage_management_and_monitoring"},"here"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Query-in-place and process on-request")),(0,r.kt)("p",null,"One could run big data analytics on S3 objects with query-in-place service. Following are some of the important features in process requesting and querying :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Amazon Athena")," : To query S3 data with standard SQL expressions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Amazon Redshift")," : To analyze data stored across the AWS data warehouse.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"S3 Select")," : To retrieve subsets of object data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"S3 Object Lambda")," : Add own code to S3 GET requests. ","\\"))),(0,r.kt)("p",null,"You may rad more on ",(0,r.kt)("em",{parentName:"p"},"query in place"),"  ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/features/##Query_in_place"},"here"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Most supported cloud storage service")),(0,r.kt)("p",null,"It is possible to store and protect data in Amazon S3 by working with a partner from the ",(0,r.kt)("em",{parentName:"p"},"AWS Partner Network(APN)"),"."),(0,r.kt)("p",null,"APN is one of the largest community of technology and consulting cloud services providers. They recognizes migration partners that transfer data to Amazon S3 and storage partners that offer S3-integrated solutions for primary storage, backup and restore, archive, and disaster recovery. ","\\"),(0,r.kt)("p",null,"You may read more on ",(0,r.kt)("em",{parentName:"p"},"APN"),"  ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/backup-recovery/partner-solutions/?partner-solutions-cards.sort-by=item.additionalFields.partnerNameLower&partner-solutions-cards.sort-order=asc&awsf.partner-solutions-filter-partner-type-storage=*all&awsf.partner-solutions-filter-partner-usecase-storage=*all&awsf.partner-solutions-filter-partner-location-storage=*all"},"here")),(0,r.kt)("h2",{id:"features-of-s3"},"Features of S3"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"S3 Object Lambda")),(0,r.kt)("p",null,"Add own code to process data retrieved from S3 before returning it to an application."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30996989/133885265-13cbecbb-b756-42e9-91a8-152d8865912a.PNG",alt:"S3 Object Lambda"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"S3 Storage Lens")),(0,r.kt)("p",null,"Gain organization-wide visibility into storage usage, activity trends, and receive actionable recommendations."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30996989/133885312-65a49144-2b20-49fe-96c5-5d6229066500.PNG",alt:"S3 Storage Lens"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"S3 Intelligent-Tiering")),(0,r.kt)("p",null,"Optimize storage costs"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30996989/133885354-4096da1d-bc00-4841-8263-a10b631e4e49.PNG",alt:"S3 Intelligent-Tiering"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"S3 Access Points")),(0,r.kt)("p",null,"Easily manage access for shared data sets"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30996989/133885373-29f1883e-5e39-40a6-b026-036f5ac91de5.PNG",alt:"S3 Access Points"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"S3 Batch Operations")),(0,r.kt)("p",null,"Manage tens to billions of objects at scale"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30996989/133885403-57a26fae-f2cb-48aa-bb9e-9dcdd08f5eec.PNG",alt:"S3 Batch Operations"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"S3 Block Public Access")),(0,r.kt)("p",null,"Block all public accesses to S3 data"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30996989/133885427-24c8bd41-332f-437c-a3b6-1c4e48e018db.PNG",alt:"S3 Block Public Access"}),"\n(Source for all images: ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"https://aws.amazon.com/s3/"),")"),(0,r.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,r.kt)("p",null,"In order to store data objects in Amazon S3, buckets are to be created. Here, the ",(0,r.kt)("em",{parentName:"p"},"object")," could be just any file and any metadata that describes the files. The ",(0,r.kt)("em",{parentName:"p"},"bucket")," is the container for storing these files. "),(0,r.kt)("p",null,"Let's look at some of the basics of Amazons S3:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Buckets")),(0,r.kt)("p",null,"Every object is contained in the bucket, it needs to have a name and also an AWS Region assigned to it. For examples, suppose an object named images/some_image.png needs to be stored, the first create a bucket name ",(0,r.kt)("em",{parentName:"p"},"EXAMPLE-BUCKET")," in the US West (Oregon) Region. Next, upload some_image.png onto the bucket. Now this file would be accessible via a URL such as ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://EXAMPLE-BUCKET.s3.us-west-2-amazonaws.com/images/some_image.png"},"https://EXAMPLE-BUCKET.s3.us-west-2-amazonaws.com/images/some_image.png")),". Keep in mind that once a bucket has been named, it cannot be renamed. "),(0,r.kt)("p",null,"Following are the bucket naming rules :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Must be between 3 and 63 characters long.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bucket names can consist only of lowercase letters, numbers, dots (.), and hyphens (-).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Must begin and end with a letter or number.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Must not be formatted as an IP address (for example, 192.168.5.4).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Must not start with the prefix xn--.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Must not end with the suffix -s3alias. This suffix is reserved for access point alias names.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Must be unique within a partition. A partition is a grouping of Regions. AWS currently has three partitions: aws (Standard Regions), aws-cn (China Regions), and aws-us-gov (AWS GovCloud ","[US]"," Regions).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Buckets used with Amazon S3 Transfer Acceleration can't have dots (.) in their names."))),(0,r.kt)("p",null,"More on buckets :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Buckets help in organizing S3 namespace at the highest level")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Helps identify the account responsible for storage and data transfer charges.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Provides access control options.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Serves as the unit of aggregation for usage reporting."))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Objects")),(0,r.kt)("p",null,"Its the fundamental entity and consist of object data and also their metadata. The metadata could be a set of name-value pairs that describe the object. It is also possible to specify custom metadata at the time that the object is stores. An object is always uniquely indentified within a bucket by a ",(0,r.kt)("em",{parentName:"p"},"key(name)")," and ",(0,r.kt)("em",{parentName:"p"},"version ID"),"."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Keys")),(0,r.kt)("p",null,"Object key (or key name) is the unique identifier for an object stored within a bucket. Each and every object stored in the bucket has exactly one key. ","\\"),(0,r.kt)("p",null,"Every object in Amazon S3 can be uniquely addressed through the combination of the web service endpoint, bucket name, key, and optionally, a version. For example, in the URL ",(0,r.kt)("inlineCode",{parentName:"p"},"https://DOC-EXAMPLE-BUCKET.s3.us-west-2.amazonaws.com/photos/puppy.jpg"),", DOC-EXAMPLE-BUCKET is the name of the bucket and /photos/puppy.jpg is the key."),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"S3 Versioning")),(0,r.kt)("p",null,"S3 Versioning is used to keep multiple variants of an object in the same bucket. With this feature, one could preserve, retrieve and restore every version of every object stored in the bucket. Its then possible to easily recover from both unintended user actions and application failures."),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Version ID")),(0,r.kt)("p",null,"When S3 Versioning is enabled, a unique version ID is generated for each object in the bucket. If some objects were already existing in the bucket before versioning was enabled, then those objects would be assigned 'null' as their version IDs. If modifications are done on these already existing files, then a new version ID is assigned to the new version of those objects."),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Bucket policy")),(0,r.kt)("p",null,"A bucket policy is a resource-based AWS Identity and Access Management (IAM) policy that can be used to grant access permissions to the bucket and the objects in it. Only the bucket owner can associate a policy with a bucket. The permissions attached to the bucket apply to all of the objects in the bucket that are owned by the bucket owner. Bucket policies are limited to 20 KB in size."),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Access control lists (ACLs)")),(0,r.kt)("p",null,"ACLs are access control mechanism that predates resource based policies. ACLs can be used to grant read and write permissions for individual buckets and objects to authorized users. Each bucket and object has an ACL attached to it as a sub-resource. The ACL defines which AWS accounts or groups are granted access and the type of access.\nIt is always better to use bucket policies and access point policies than ACLs."),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"S3 Access Points")),(0,r.kt)("p",null,"Amazon S3 Access Points are named network endpoints with dedicated access policies that describe how data can be accessed using that endpoint. Access Points simplify managing data access at scale for shared datasets in Amazon S3. Access Points are named network endpoints attached to buckets that you can use to perform S3 object operations, such as ",(0,r.kt)("em",{parentName:"p"},"GetObject")," and ",(0,r.kt)("em",{parentName:"p"},"PutObject"),"."),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Regions")),(0,r.kt)("p",null,"It is necessary to choose a geographical AWS Region while creating a buckets. These regions are locations of servers where you want to host the bucket. It is ideal to choose a location that is close to the area where to want to provide a service. It helps to optimize latency, minimize costs, or address regulatory requirements."),(0,r.kt)("h2",{id:"accessing-amazon-s3"},"Accessing Amazon S3"),(0,r.kt)("p",null,"There exists multiple means for connecting to Amazon S3. These includes :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"AWS Management Console")),(0,r.kt)("p",null,"This is a web based interface and could be accessed through the AWS website."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"AWS CLI")),(0,r.kt)("p",null,"Download the AWS Command Line, and then you could use this for provising commands to a broad set of AWS service. The AWS CLI is supported in Linux, Windows and macOS."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"AWS SDK")),(0,r.kt)("p",null,"AWS provides SDKs (software development kits) that consist of libraries and sample code for various programming languages and platforms (Java, Python, Ruby, .NET, iOS, Android, and so on). The AWS SDKs provide a convenient way to create programmatic access to S3 and AWS. Amazon S3 is a REST service. Its possible to send requests to Amazon S3 using the AWS SDK libraries which wrap the underlying Amazon S3 REST API and simplify your programming tasks."),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Amazon S3 REST API")),(0,r.kt)("p",null,"The architecture of Amazon S3 is designed to be programming language-neutral, using AWS-supported interfaces to store and retrieve objects.S3 and AWS is accessible programmatically by using the Amazon S3 REST API. The REST API is an HTTP interface to Amazon S3. With the REST API, the standard HTTP requests can be used to create, fetch, and delete buckets and objects."),(0,r.kt)("h2",{id:"hands-on-amazon-s3"},"Hands-On Amazon S3"),(0,r.kt)("p",null,"To start working with Amazon S3, you need to have already set up an AWS account. Once you've an account ready to use, you need to create an IAM user. Following are the steps to create an administrator user for yourself and add the user to an administrators group :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign-in to the IAM console as the account owner by choosing ",(0,r.kt)("em",{parentName:"p"},"Root user")," and entering your AWS account email address. Enter your password in the next page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the navigation pane, choose Users and then choose Add user.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For User name, enter ",(0,r.kt)("em",{parentName:"p"},"Administrator"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the check box next to ",(0,r.kt)("em",{parentName:"p"},"AWS Management Console")," access. Then select Custom password, and then enter your new password in the text box.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose Next: Permissions")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("em",{parentName:"p"},"Set permissions"),", ",(0,r.kt)("em",{parentName:"p"},"choose Add user to group"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose Create group.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Create group dialog box, for Group name enter Administrators.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose Filter policies, and then select AWS managed - job function to filter the table contents.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the policy list, select the check box for Administrator Access. Then choose Create group.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Back in the list of groups, select the check box for your new group. Choose Refresh if necessary to see the group in the list.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose Next: Tags.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose Next: Review to see the list of group memberships to be added to the new user. When you are ready to proceed, choose Create user."))),(0,r.kt)("p",null,"Now that you've completed the previous steps, proceed to sign-in as an IAM user. Before you sign in as an IAM user, you can verify the sign-in link for IAM users in the IAM console. On the IAM Dashboard, under IAM users sign-in link, you can see the sign-in link for your AWS account. The URL for your sign-in link contains your AWS account ID without dashes (\u2010). Copy the sign-in link. "),(0,r.kt)("h3",{id:"to-sign-in-as-an-aws-user"},"To sign in as an AWS user"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign out of the AWS Management Console.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter your sign-in link.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the IAM user name and password that you just created."))),(0,r.kt)("h3",{id:"lets-create-your-first-bucket"},"Let's ",(0,r.kt)("em",{parentName:"h3"},"create")," your first bucket!"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the Amazon S3 console at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://console.aws.amazon.com/s3/"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose ",(0,r.kt)("em",{parentName:"p"},"Create Bucket"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Name the bucket (Keep in mind the naming conventions we had discussed previously)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose a ",(0,r.kt)("em",{parentName:"p"},"Region")," (preferrably one that's close to your geographical location)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Leave the rest of the fields as default")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("em",{parentName:"p"},"Create Bucket")))),(0,r.kt)("p",null,"Congratulations! Now you've created a bucket! \u2728"),(0,r.kt)("h3",{id:"to-upload-an-object-to-your-bucket-"},"To ",(0,r.kt)("em",{parentName:"h3"},"upload")," an object to your bucket :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("em",{parentName:"p"},"Buckets")," list, choose the name of the bucket that you just created.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("em",{parentName:"p"},"Objects")," tab, choose ",(0,r.kt)("em",{parentName:"p"},"Upload"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("em",{parentName:"p"},"Files and folders"),", choose ",(0,r.kt)("em",{parentName:"p"},"Add files"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose a file to upload, and then choose ",(0,r.kt)("em",{parentName:"p"},"Open"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("em",{parentName:"p"},"Upload")))),(0,r.kt)("h3",{id:"to-delete-an-object"},"To ",(0,r.kt)("em",{parentName:"h3"},"delete")," an ",(0,r.kt)("em",{parentName:"h3"},"object"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Buckets list, ",(0,r.kt)("em",{parentName:"p"},"choose")," the name of the ",(0,r.kt)("em",{parentName:"p"},"bucket")," that you want to delete an object from.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("em",{parentName:"p"},"check box")," to the left of the names of the objects that you want to delete.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose ",(0,r.kt)("em",{parentName:"p"},"Actions")," and choose ",(0,r.kt)("em",{parentName:"p"},"Delete")," from the list of options that appears.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Alternatively, choose ",(0,r.kt)("em",{parentName:"p"},"Delete")," from the options in the upper right.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type permanently delete if asked to confirm that you want to delete these objects.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("em",{parentName:"p"},"Delete objects")," in the bottom right and Amazon S3 deletes the specified objects."))),(0,r.kt)("h3",{id:"to-delete-bucket"},"To ",(0,r.kt)("em",{parentName:"h3"},"delete bucket"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Buckets list, select the bucket you want to delete.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("em",{parentName:"p"},"Delete"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To confirm deletion, in ",(0,r.kt)("em",{parentName:"p"},"Delete bucket"),", type the name of the bucket.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To delete your bucket, choose ",(0,r.kt)("em",{parentName:"p"},"Delete bucket"),"."))),(0,r.kt)("p",null,"Awesome! You've now learnt the basics of Amazon S3! More on AWS features could be found at ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/index.html"},"AWS Documentation"),". Happy learning! \u2728"))}u.isMDXComponent=!0}}]);