# Integration Layer

## Requirements

* Node.js >= v4
* npm >= v3.3.x
* CouchDB 1.6.1

## Setup

Clone the project and then run the following command in order to get a working build environment.

```bash
npm install
```

Also don't forget to start your CouchDB server.

## Configuration

The default configuration can be found in _config.dist.json_. You can override it by creating a local _config.json_.

## Build

If you want to build the whole project, run the two following commands. Otherwise, see further explanations.

```bash
npm run build
npm run install
```

### Facade

Following the facade design pattern, all the api is described here with the routing.

```bash
npm run build:facade
npm run install:facade
```

### Display

```bash
npm run build:service-display
npm run install:service-display
```

### Document

Responsible for the storage of documents, CRUD operations.

```bash
npm run build:service-document
npm run install:service-document
```

### Notification

Provide push notifications for document consumers.

```bash
npm run build:service-notification
npm run install:service-notification
```

### Redirection

```bash
npm run build:service-redirection
npm run install:service-redirection
```

### Remote browser

```bash
npm run build:service-remote-browser
npm run install:service-remote-browser
```

### Types

Provide list of types and json schema

```bash
npm run build:facade
npm run install:facade
```
