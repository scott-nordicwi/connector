---
sidebar_position: 5
---

# Event Driven

The application will operate without user intervention based on received events. For example:

 - If a SMART on FHIR launch occurs the application can retrieve additional FHIR APIs, parse the data, log the user in to a client-owned Identity Management service, and finalize the user’s redirect location (the website they will see) based on the parsed data and/or login process. This allows a dynamic SMART launch that works seamlessly for multiple user types.

 - If an HL7 v2 message is received the system can parse the data for patient information and make additional API calls to supplement a “complete” data payload (as defined by the client). This payload is then delivered to a downstream service or database for later use.