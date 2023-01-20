# vinciway-common
This is a shared package that contains overlapping, common and shared elements for the following projects:
- vinciway-api
- vinciway-webapp
- kue-builder
- kue-viewer

## Updating the packages
Updating the third party libraries is the most important part of the system maintenance. For all the related projects to work correctly you should aim to achieve general consistency of the package versions.
In the past, we faced a few issues that may re-occur, so we took notes:
- `axios` we suggest to keep it consistent across all projects, if you update it, make sure you update `axios-mock-adapter` to correspond to the version installed. Make sure you launch all the tests on every integration stage. We didn't decide to go to version 1.x as it caused too many issues with instantiating (.create()), request headers and axios mock.
- `jest` is known for making it more and more difficult with every new version released; when updating we encountered issues with files importing and AMD modules which were ultimately resolved.
- `uuid` is causing import issues, and it is necessary to manually swap for CJS during mapping in Jest. [This worked for us](https://stackoverflow.com/a/73203803/2170368).
- `nanoid` is causing some import issues with webpack

## Content

The package stores items that are common to at least two of the above projects. Please read the detailed description of its content below:

### config

Contains shared, predefined configuration which should not often change.

- `blocks.ts`
configuration for blocks, primarily in Builder and Viewer
- `card_widgets.ts`
configuration for the block widgets (card widgets) in Builder and Viewer

### helpers

Contain files which automate or simplify re-occurring code operations. 
- `dummy.ts` is a set of generators of dummy IDs and mocks
- `utils.ts` contains a set of useful functions used in multiple projects

### intf

Contains interfaces and types

### locale

Contains the base translations.

### models

Contains collection data models which are an abstraction layer on top of the database collections stored in the `vinciway-api/src/data/collections` files. Models act as a bridge between data ORM and payloads, therefore sometimes are populated or bare, depending on the operation type.

### properties

Stored properties used in all related systems. All the shared properties and types got `common_` prefix for distinction.

### routes

This directory contains the core apps communication journey mechanism.

#### Routes

Routes represent all the API routes that should be accessible by the web application and other systems. Because both: Builder and Viewer aren't the standalone apps, we consider the API to act as a BFF (Backend For Front-End) creating a sole link to `vinciway-webapp` and back. 

Every route file contains the specific route configuration which is then used:
- in the API project, to initialise the route
- in the API middleware to automatically determine necessity for authentication and perform incoming payload validation
- in the API integration tests to not repeat manually the request setup
- in the WebApp to define where the front-end should make a request
- in the WebApp to define validation rules before making a request
- in the WebApp simulator to mock the API routes and let WebApp to be launched and tested fast and as an independent system (also offline)

Every route must contain `to_backend.ts` payload, and may contain `from_backend.ts` payload. That depends on the endpoint nature and function.

#### Payloads

Payloads are data chunks requested by routes (endpoints) and sometimes returned by them. Payload consistency and order are one of the most important concepts of this whole system. Note that it is rarely 1:1 relationship between models and payloads.

When building payloads and microservices, we are using the following principles:
- keep it isolated, _atomic_ - means small with high pressure on single responsibility
- if you return a payload, keep it to minimum what is necessary, never send too many or unnecessary data

Each payload allows to pass the validation rules which are checked in both: API and WebApp during the request processing. At the moment we try to set rules to all `toBackEnd` payloads and add them in the future to all `fromBackEnd` payloads.

Make sure you are correctly export all the types, classes and fragments created in routes and payloads, and that you correctly understand the differences between payloads and models.

### SCSS

Contains common styles which are the source for further UI builds in the appropriate subsystems.

### index.ts

Contains all the exports. Make sure you keep it up to date, and you maintain already established file exporting conventions. 

## CI/CD

todo

## Deployment

todo