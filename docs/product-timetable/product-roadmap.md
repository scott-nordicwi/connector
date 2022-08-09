---
sidebar_position: 1
---

# Roadmap

The Health Data Connector is a beta product and feature additions will be prioritized based on client demands. The immediate roadmap for the Connector is as follows:

Q1 2022:

*Committed scope*
- Support AWS deployment for all roadmap concepts. Also support the following AWS technologies:
  - API gateway
  - Lambda
  - EC2
  - MongoDB for configuration and data storage
  - EventBridge for outbound event transmission
  - IAM for service account and administrative access
- Support SMART on FHIR connectivity
- Support RESTful API integration capabilities and workflows
  - A “workflow” is the capability to ingest response data from an API and utilize it for additional API calls, or to parse it into a final payload alongside other API data
- Required authentication concepts:
  - OAuth2
  - Basic
- Support SDK integration via .NET to trigger RESTful API workflows or a standalone SMART launch
- Support JSON-based configuration of SMART on FHIR and RESTful API workflows allowing no-code connectivity with Epic health systems
- Support HL7v2 inbound messaging capabilities

2022 Roadmap (Q2-4):

*Scope not committed for Development. Some concepts to be prioritized or de-scoped depending on client demand.*

- Front-end administration web site allowing configuration of in-scope administrative and connectivity concepts
- HL7 v2 outbound message transmission
  - Supported message types to be determined based on client demand
- X12 messaging capabilities
  - Supported message types to be determined based on client demand
- Mutual TLS authentication
- Flat file data ingestion capabilities
- Azure deployment capabilities across in-scope concepts
- AWS and Azure marketplace listings

