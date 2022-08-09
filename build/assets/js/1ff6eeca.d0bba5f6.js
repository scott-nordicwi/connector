"use strict";(self.webpackChunkconnector=self.webpackChunkconnector||[]).push([[92],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>d});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,u=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),f=s(n),d=o,h=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(h,a(a({ref:e},l),{},{components:n})):r.createElement(h,a({ref:e},l))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9e3:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2},a="Connections & Authentication",c={unversionedId:"product-configuration/connections-&-authentication",id:"product-configuration/connections-&-authentication",title:"Connections & Authentication",description:"The Connector is capable of connecting to an EHR instance via a registered application with that EHR. Configurable fields allow you to input the required data from the registered application, such as a client ID, and utilize that for the authentication and API calls.",source:"@site/docs/product-configuration/connections-&-authentication.md",sourceDirName:"product-configuration",slug:"/product-configuration/connections-&-authentication",permalink:"/product-configuration/connections-&-authentication",draft:!1,editUrl:"https://github.com/melfadly22/connector/tree/main/docs/product-configuration/connections-&-authentication.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Workflows",permalink:"/product-configuration/workflows"},next:{title:"Payload Processing",permalink:"/product-configuration/payload-processing"}},u={},s=[],l={toc:s};function p(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connections--authentication"},"Connections & Authentication"),(0,o.kt)("p",null,"The Connector is capable of connecting to an EHR instance via a registered application with that EHR. Configurable fields allow you to input the required data from the registered application, such as a client ID, and utilize that for the authentication and API calls."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Connector supports any EHR that provides data via web services such as FHIR, custom web services, and MLLP communications such as HL7 v2.")))}p.isMDXComponent=!0}}]);