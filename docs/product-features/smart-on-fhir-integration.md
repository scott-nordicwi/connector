---
sidebar_position: 1
---

# SMART on FHIR Integration

You can automate [SMART on FHIR launches](http://www.hl7.org/fhir/smart-app-launch/) through standard management of the authentication handshake with robust error handling and logging. Once the SMART launch completes the software is able to perform additional actions such as:

- Integrating directly with Okta/Auth0, Active Directory, custom databases, or other services to authenticate and log in the user who initiated the SMART launch
- Retrieve specific FHIR resources automatically and parse them into a consistent format
- Redirect the user, (as part of the SMART launch redirect series), to a specific webpage using results from  API queries executed during the launch. For example you could show a unique web page based on the coverage status or medical history of a client
- Provide received data to the “final” redirect location as query parameters on the URL. This feature allows our clients to pre-populate a form using data retrieved during a workflow.

