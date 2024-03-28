# kapejuancafe-server

REST API built with Node TypeScript + Express + MongoDB

# Pre-requisite

To build and run this app locally you will need a few packages:

- Install [Node.js](https://nodejs.org/en)
- Install [MongoDB](https://docs.mongodb.com/manual/installation/)
- Install [Visual Studio Code](https://code.visualstudio.com)

# Folder Structure

```typescript
src
└───app.ts
└───server.ts
└───api
└───configs
└───constants
└───controllers  # Application routes / endpoints
└───interfaces
└───logger       # application logs
└───middlewares
└───models       # MongoDB Models
└───routes
└───services
└───utils
```

# Getting Started with TypeScript

Typescript itself is simple to add to any project with `npm`

```
npm install -D typescript
```

If you're using **Visual Studio Code** then you are good to go! **_Visual Studio Code_** will detect and use the _TypeScript_ version you have installed in your `node_modules` folder.

# Getting Started with ESLint

ESLint is a code linter which mainly helps catch quickly minor code quality and style issues

### ESlint

Like most linters, ESLint has a wide set of configurable rules as well as support for custom rule sets.

All rules are configured throught `.eslintrc` configuration file.

In this project, we are using a fairly basic set of rules with no additional custom rules

### Running ESLint

Like the rest of our build steps, we use npm scripts to invoke ESLint.
To run ESLint you can call the main build script or just the ESLint task.

```
npm run build   // runs full build including ESLint
npm run lint    // runs only ESLint
```

Notice that ESLint is not a part of the main watch task.

If you are interested in seeing ESLint feedback as soon as possible, I strongly recommend the [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
