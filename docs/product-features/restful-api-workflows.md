---
sidebar_position: 2
---

# RESTful API Workflows
### (including FHIR)

Perform authorization with an authorization server and subsequent complex queries based on supported events. API requests can share data from result to subsequent request, allowing complex logical request progressions.

- Supports all FHIR resource types as well as custom RESTful APIs. Custom APIs require some additional configuration in order to parse the API response.
- Perform a patient lookup query then additional FHIR API requests if a patient is found
- Share data between requests to obtain better data. For example you could retrieve an identifier or the start and end date from an Encounter for use in a request for charges during the encounter
- Basic and oAuth Authentication available

