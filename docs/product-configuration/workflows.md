---
sidebar_position: 1
---

# Workflows

Chain processes together to generate a complete output and deliver the output to various storage and operational services. Workflows typically consist of multiple web service requests that build a custom data payload (or business object), which is then transmitted to an operational service that requires the data. Operational services are typically the existing software our clients seek to integrate healthcare data into. Workflows can also store data to a database along the way or as a final outcome

- A workflow is typically event-driven, meaning it is triggered via one of the following concepts
  - On a scheduled basis
  - Via receipt of an API call or Service Bus message to the integration service requesting workflow execution
  - Upon receipt of inbound data such as an HL7 message or a SMART launch execution

- A workflow typically has a “return payload”, which defines the data to be transmitted downstream. This payload contains the details required for downstream business processes.

- Workflows can also result in outbound data transmission to a 3rd party allowing, for example, data writes to a 3rd party, or outbound HL7 messaging.