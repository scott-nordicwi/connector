"use strict";(self.webpackChunkconnector=self.webpackChunkconnector||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Product Overview","href":"/","docId":"intro"},{"type":"category","label":"Configuration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Workflows","href":"/product-configuration/workflows","docId":"product-configuration/workflows"},{"type":"link","label":"Connections & Authentication","href":"/product-configuration/connections-&-authentication","docId":"product-configuration/connections-&-authentication"},{"type":"link","label":"Payload Processing","href":"/product-configuration/payload-processing","docId":"product-configuration/payload-processing"},{"type":"link","label":"Chaining APIs","href":"/product-configuration/chaining-apis","docId":"product-configuration/chaining-apis"},{"type":"link","label":"Event Driven","href":"/product-configuration/event-driven","docId":"product-configuration/event-driven"}],"href":"/category/configuration"},{"type":"category","label":"Deployment","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Application Installation","href":"/product-deployment/application-installation","docId":"product-deployment/application-installation"},{"type":"link","label":"Application Training","href":"/product-deployment/application-training","docId":"product-deployment/application-training"}],"href":"/category/deployment"},{"type":"category","label":"Support","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Maintenance","href":"/product-support/product-maintenance","docId":"product-support/product-maintenance"},{"type":"link","label":"Troubleshooting","href":"/product-support/product-troubleshooting","docId":"product-support/product-troubleshooting"}],"href":"/category/support"},{"type":"category","label":"Features","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"SMART on FHIR Integration","href":"/product-features/smart-on-fhir-integration","docId":"product-features/smart-on-fhir-integration"},{"type":"link","label":"RESTful API Workflows","href":"/product-features/restful-api-workflows","docId":"product-features/restful-api-workflows"},{"type":"link","label":"HL7 v2","href":"/product-features/hl7-v2","docId":"product-features/hl7-v2"},{"type":"link","label":"Modular Add-ons","href":"/product-features/modular-add-ons","docId":"product-features/modular-add-ons"}],"href":"/category/features"},{"type":"category","label":"Timetable","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Roadmap","href":"/product-timetable/product-roadmap","docId":"product-timetable/product-roadmap"},{"type":"link","label":"Release Schedule","href":"/product-timetable/application-release-schedule","docId":"product-timetable/application-release-schedule"}],"href":"/category/timetable"},{"type":"category","label":"Implementation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"EPIC","href":"/product-implementation/epic","docId":"product-implementation/epic"},{"type":"link","label":"Consulting","href":"/product-implementation/consulting","docId":"product-implementation/consulting"}],"href":"/category/implementation"},{"type":"category","label":"Advanced","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Configuration Guide","href":"/product-advanced/configuration-guide","docId":"product-advanced/configuration-guide"}],"href":"/category/advanced"}]},"docs":{"intro":{"id":"intro","title":"Product Overview","description":"Interoperability","sidebar":"tutorialSidebar"},"product-advanced/configuration-guide":{"id":"product-advanced/configuration-guide","title":"Configuration Guide","description":"Introduction","sidebar":"tutorialSidebar"},"product-configuration/chaining-apis":{"id":"product-configuration/chaining-apis","title":"Chaining APIs","description":"Data retrieved from an API request is parsed into a machine-readable object and provided back to the Workflow, which  makes available all data to downstream processes and orchestrates those processes.","sidebar":"tutorialSidebar"},"product-configuration/connections-&-authentication":{"id":"product-configuration/connections-&-authentication","title":"Connections & Authentication","description":"The Connector is capable of connecting to an EHR instance via a registered application with that EHR. Configurable fields allow you to input the required data from the registered application, such as a client ID, and utilize that for the authentication and API calls.","sidebar":"tutorialSidebar"},"product-configuration/event-driven":{"id":"product-configuration/event-driven","title":"Event Driven","description":"The application will operate without user intervention based on received events. For example:","sidebar":"tutorialSidebar"},"product-configuration/payload-processing":{"id":"product-configuration/payload-processing","title":"Payload Processing","description":"Data retrieved from a request or event is parsed into a standard model and extractable via a Payload configuration.","sidebar":"tutorialSidebar"},"product-configuration/workflows":{"id":"product-configuration/workflows","title":"Workflows","description":"Chain processes together to generate a complete output and deliver the output to various storage and operational services. Workflows typically consist of multiple web service requests that build a custom data payload (or business object), which is then transmitted to an operational service that requires the data. Operational services are typically the existing software our clients seek to integrate healthcare data into. Workflows can also store data to a database along the way or as a final outcome","sidebar":"tutorialSidebar"},"product-deployment/application-installation":{"id":"product-deployment/application-installation","title":"Application Installation","description":"The Healthcare Connector technology can be implemented on AWS and Azure using a deployment template and subsequent configuration for connectivity. The connector is hosted entirely on the cloud and is capable of integrations with our client\u2019s cloud and on-premise software and databases.","sidebar":"tutorialSidebar"},"product-deployment/application-training":{"id":"product-deployment/application-training","title":"Application Training","description":"The Healthcare Connector supports interactions with our clients\' existing software via SDK, allowing clients to treat the connector as a microservice within their software ecosystem. The SDK communicates the the Healthcare Connector via API calls. SDK libraries are not available in all languages; Nordic can provide an SDK in a given software language upon request.","sidebar":"tutorialSidebar"},"product-features/hl7-v2":{"id":"product-features/hl7-v2","title":"HL7 v2","description":"Receive and process HL7 v2 messages sent via HTTPS from your healthcare partners. A configuration-based approach allows you to define what data to consume from the message and Workflows allow you to perform additional actions based on the contents, such as to complete FHIR API requests and to store and transmit the parsed payload","sidebar":"tutorialSidebar"},"product-features/modular-add-ons":{"id":"product-features/modular-add-ons","title":"Modular Add-ons","description":"The Healthcare Connector is built to support modular concepts overlaying the above data interoperability features. For example, a monitoring dashboard could be deployed to provide detailed analysis of the application\u2019s utilization and traffic, or a Bulk FHIR module could be deployed to allow retrieval and parsing of bulk FHIR data.","sidebar":"tutorialSidebar"},"product-features/restful-api-workflows":{"id":"product-features/restful-api-workflows","title":"RESTful API Workflows","description":"(including FHIR)","sidebar":"tutorialSidebar"},"product-features/smart-on-fhir-integration":{"id":"product-features/smart-on-fhir-integration","title":"SMART on FHIR Integration","description":"You can automate SMART on FHIR launches through standard management of the authentication handshake with robust error handling and logging. Once the SMART launch completes the software is able to perform additional actions such as:","sidebar":"tutorialSidebar"},"product-implementation/consulting":{"id":"product-implementation/consulting","title":"Consulting","description":"Nordic has deep experience assisting our clients end-to-end with FHIR, SMART on FHIR, and HL7 implementation processes. From registering the application to implementing connectivity and data mapping, the Nordic team will advise our clients and their healthcare partners on the most appropriate approach for long-term success.","sidebar":"tutorialSidebar"},"product-implementation/epic":{"id":"product-implementation/epic","title":"EPIC","description":"Nordic is available to assist with a healthcare system implementation. For Epic healthcare organizations, the software is implemented using a Home - Epic on FHIR  or Home - App Orchard application that is registered by the client. Cerner and other EHR vendors follow similar processes.","sidebar":"tutorialSidebar"},"product-support/product-maintenance":{"id":"product-support/product-maintenance","title":"Maintenance","description":"The Nordic team provides product support and maintenance as part of our software licensing agreement. Nordic provides warranty- level support and will support our software and make changes to ensure identified bugs are mitigated based on a Service Level Agreement with our clients.","sidebar":"tutorialSidebar"},"product-support/product-troubleshooting":{"id":"product-support/product-troubleshooting","title":"Troubleshooting","description":"Additionally, Nordic can provide configuration and integration troubleshooting support to our clients at an hourly rate.","sidebar":"tutorialSidebar"},"product-timetable/application-release-schedule":{"id":"product-timetable/application-release-schedule","title":"Release Schedule","description":"Nordic will make available Connector releases on a Quarterly basis. Upgrades to application code will be performed by Nordic staff during the Beta phase. Nordic will work with the client to identify a suitable upgrade date/time for Test and Production environments.","sidebar":"tutorialSidebar"},"product-timetable/product-roadmap":{"id":"product-timetable/product-roadmap","title":"Roadmap","description":"The Health Data Connector is a beta product and feature additions will be prioritized based on client demands. The immediate roadmap for the Connector is as follows:","sidebar":"tutorialSidebar"}}}')}}]);