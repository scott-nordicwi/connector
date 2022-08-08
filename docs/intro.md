---
sidebar_position: 1
slug: / 
---

# Tutorial Intro

Health Data Connector **Functionality Overview**.

## General Overview

The Health Data Connector is a highly configurable web client that can ingest the results of a given API call, compare against configured requirements, and take action as a result of the comparison. This is accomplished through object-oriented structure and a strict separation of responsibilities. Nearly all behavior of the application is based on JSON configurations, for example:

- When an HL7 message is received a Payload definition determines how it is parsed, a Trigger determines if the parsed data is utilized down stream, and a Workflow determines where the parsed data is sent to as well as what additional actions the service might take as a result of the provided data (e.g. subsequent FHIR API calls)
- When a SMART on FHIR launch occurs the system issues manages the launch handshake and issues an Event. The event is evaluated for applicable Triggers, which result in downstream actions such as FHIR API Requests and Payload generation. Data from downstream requests informs the final redirect for the SMART on FHIR launch, allowing a complete JSON configuration of the SMART launch sequence that can SSO the user and redirect them to the desired page based on a number of factors (user registration status, downstream API results, FHIR data such as address or gender, etc)
- A client’s software uses the standard SDK to issue a Workflow trigger. The Workflow makes FHIR API calls in a logical order to enable appropriate patient or resource identification then downstream data collection. A final data payload is returned back to the software per the client’s specification.

### Objects / Data Models

- User
  - Human and service
- Organization
  - Holds client-specific information for admin and billing purposes
  - Manage users, contact info
- Event
  - Contains the data from an inbound interaction
  - Ties inbound data to downstream processing. All inbound requests (via API endpoints) issue an event which is evaluated for Triggers and passed to a Workflow. The event issued from a given API endpoint is hardcoded to that endpoint.
  - Events pass the data from the API into a Trigger for further processing
- API
  - An HTTPs request Builder and Manager that returns the raw response
  - Used as part of an Application and requires a Connection.
    - Name (e.g. Encounter)
    - Type (FHIR, REST, SOAP)
    - URI (e.g /fhir/r4/api/Encounter)
    - Query Config - Utilize Numotion filter configuration concept
      - Key:value store such as
      - parameter for the url might be subject: {{patient.id }}”, or “date: {{today}}” or “category: vital-signs”
    - Header Config
    - Body Config
- Application
  - An application stores the connection capabilities for a given “app store”. It is not deployed alone; a Connection utilizes an application for client connectivity.
  - Name (e.g. App Orchard Backend PRD)
  - Type
    - External
    - Internal
  - Authentication Type
    - Basic
    - Authorization_code
    - client_credentials
    - Service Bus
  - Scope (available APIs)
  - Client ID (just one per-application)
- Connection
  - Fields:
    - Name
    - Base URL
    - Application
  - A connection applies the connectivity provided by an Application with a client endpoint, allowing client-specific customization.
- Payload
  - Identifies data (and path to the data) to be extracted from the provided payload and defines how and what data should be returned
- Request
  - A combination of a connection with an API and executed as part of a Workflow
  - Identifies the query to execute or receive as an input
  - Identifies the Payloads that should process the data
  - Tests inbound data against configuration
- Workflow
  - A Workflow configures the Request(s) that are part of a specific series or workflow. Payloads are requested from a Connection. It allows for an order of events such as: 
    - payload 0 executes and returns no data - the series ends
    - Payload 0 executes and returns data - the data matches a Workflow parameter which executes payload 1. The process continues until the Series completes a final action, typical with an internal connection, such as storing data to a DB or transmitting it to an endpoint.
  - Connection
  - Events (triggering)
  - Available/Selected APIs (based on application’s Scope parameter)
    - If format=’fhir’
      - Call type - Read, Search, Create
    - Else method - GET, PUT, POST, DELETE, etc. (for non-FHIR APIs)
    - API request configuration (query parameters)
      - From inbound data or defaults
      - Use a “reliesOn” parameter and allow user to select a list of APIs that are configured for this series.
      - Use a basic dict lookup for now, e.g. subject={receivedData[“Patient”][“id”]}
  - Story:
    - I’m configuring a series and select the Patient API. I then select the Observation API. I want all observations for the identified Patient based on the initial API call, so I will select the “subject” check box then select the “From retrieved FHIR data”

### Routes

- Routes will include:
  - User, login, organization management
  - Inbound data and SDK
  - Configuration object CRUD
  - General navigation
- Home (UI)
- Smart
  - Launch
  - Redirect
- HL7
- Sdk
  - Authenticate (client)
    - Logs in a service user
    - Openid? Quil solution
  - fetchPayload
- API (full CRUD)
- Application (full CRUD)
- Connections (UI) (full CRUD)
- Payloads (UI) (full CRUD)
- Event
- Request (full CRUD)
- Workflow (UI) (full CRUD)
- Login (UI)
- Register (UI)
- Organization (full CRUD)

### Services / Business Logic

 - Overall service to monitor for Triggers and engage a Workflow
 - API response parser to payload
 - Server-side session management
 - Database interaction

### Deployment

 - ARM Template: - API response parser to payload
   - Azure Web App deployment for the server itself
   - Databases - what’s our initial config?
     - Firely sdk to sql?
     - FHIR server for raw storage (direct cosmos or through API?)
     - Configuration / app administrative storage
- DevOps
  - Pipeline and release processes
- Are there tools we can utilize to keep ARM templates up to date?
- Could we use Terraform or another 3rd party service to support this deployment?

### Notes

- SDK
  - Used in someone else’s code to interact with the service
    - Connection with the instance and authentication
    - Trigger a Workflow
    - Attach to an endpoint listener to perform auth with the server and verify authenticity of the inbound message
- Authentication concepts
  - Leave it until later. No need for security of endpoints right now.
- Public server vs private implementations
  - Provide a publicly accessible instance with limited functionalities as a sales/demo tool

### Initial Project Consepts

- Make a SMART launch work based on a JSON configuration
  - Verify signature of JWTs against openId
  - Build out data model further
    - State should contain state for a request not involving FHIR APIs in series, e.g. SMART
    - RequestSeries should contain FHIR API calls in series with data flow between
  - LaunchInstance
    - GUID ID (PK)
    - State
    - ```
    1 serverSideSession[state] = {
    2            "iss": request.args.get("iss"),
    3            "token_endpoint": token_endpoint,
    4            "launch": launch,
    5            "user_type":userType,
    6            "org_id": orgId,
    7            "type": "standalone"
    8        }
    - dateTime
    - Requestor == Connection.id foreign key
  - Connection:
    - Type == smartOnFhir, fhir
    - Id
      - Where the messages are sent
    - State
    - Base_url - needed for outbound requests. More secure to use in place of a URL from SMART
    - Grant_type
    - Scope
      - All variable
      - Future - suggest based on base_url
    - argsToFetch (“code”, “state” at redirect, etc)
    - SMART:
      - Proxy url - where should the request end up?
      - Open ID
    - Application
  - Application
    - Name
    - Type
    - authType
    - clientID
    - redirectUri

- Make a backend FHIR req work based on a JSON configuration, then retrieve data from the fhir resource based on a JSON configuration and make it available for downstream use
  - RequestSeries
    - Sequential processing of APIs
      - A list of APIs N steps long. All APIs in a step can be run based on data from prior steps.
  - APIs
    - The url
    - Query parameters - pre-programmed for the connection? (Demo a few)
      - Can we use the metadata statement to identify query params automatically?
    - Body - optional, required for POST or PUT
    - The method - selectable by user?
  - Payloads
    - Mapping of FHIR fields to output JSON data model “Payload”
      - For Each and Filter concepts
      - Initially we could program it / in conjunction with client
      - What about putting a key/value pair in a key in dot notation? 
        - If “:” in str then split(“:”)