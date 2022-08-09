"use strict";(self.webpackChunkconnector=self.webpackChunkconnector||[]).push([[733],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9121:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:3},s="HL7 v2",c={unversionedId:"product-features/hl7-v2",id:"product-features/hl7-v2",title:"HL7 v2",description:"Receive and process HL7 v2 messages sent via HTTPS from your healthcare partners. A configuration-based approach allows you to define what data to consume from the message and Workflows allow you to perform additional actions based on the contents, such as to complete FHIR API requests and to store and transmit the parsed payload",source:"@site/docs/product-features/hl7-v2.md",sourceDirName:"product-features",slug:"/product-features/hl7-v2",permalink:"/product-features/hl7-v2",draft:!1,editUrl:"https://github.com/melfadly22/connector/tree/main/docs/product-features/hl7-v2.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"RESTful API Workflows",permalink:"/product-features/restful-api-workflows"},next:{title:"Modular Add-ons",permalink:"/product-features/modular-add-ons"}},l={},i=[],p={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hl7-v2"},"HL7 v2"),(0,o.kt)("p",null,"Receive and process HL7 v2 messages sent via HTTPS from your healthcare partners. A configuration-based approach allows you to define what data to consume from the message and Workflows allow you to perform additional actions based on the contents, such as to complete FHIR API requests and to store and transmit the parsed payload"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Capable of support for all message types"),(0,o.kt)("li",{parentName:"ul"},"Configurable message parsing based on message sender"),(0,o.kt)("li",{parentName:"ul"},"ACK responses with appropriate success and error indicators"),(0,o.kt)("li",{parentName:"ul"},"mTLS capable")))}u.isMDXComponent=!0}}]);