# Integration Layer

If you want to build the whole project, run the two following commands. Otherwise, see further explanations.

```bash
npm run build
npm run install
```

## Facade

Following the facade design pattern, all the api is described here with the routing.

```bash
npm run build:facade
npm run install:facade
```

## Display

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
