# kapejuancafe-server

REST API built with Node TypeScript + Express + MongoDB

# Pre-requisite

To build and run this app locally you will need a few packages:

- Install [Node.js](https://nodejs.org/en)
- Install [MongoDB](https://docs.mongodb.com/manual/installation/)
- Install [Visual Studio Code](https://code.visualstudio.com)

# Folder Structure

```typescript
test
public
testcases
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

# Getting started with Unit Testing **_Jest_**

In this project, [Jest](https://facebook.github.io/jest/) as test framework

### Install core dependecies with Jest + TypeScript

To add TypeScript + Jest, install a few packages:

```
npm install -D jest ts-jest
```

`jest` is the testing framework, and `ts-jest` is a module to make typescript run on this test framework meaning it contains all the types/functions of jest.

### Configure Jest

Jest's configuration lives in `jest.config.js`, so let's open it up and add the following code:

```js
module.exports = {
  globals: {
    'ts-jest': {
      tsconfigFile: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': './node_modules/ts-jest/preprocessor.js',
  },
  testMatch: ['**/test/**/*.test.(ts|js)'],
  testEnvironment: 'node',
};
```

Basically we are telling Jest that we want it to consume all files that match the pattern `"**/test/**/*.test.(ts|js)"` (all `.test.ts`/`.test.js` files in the `test` folder), but we want to preprocess the `.ts` files first.
This preprocess step is very flexible, but in our case, we just want to compile our TypeScript to JavaScript using our `tsconfig.json`.
This all happens in memory when you run the tests, so there are no output `.js` test files for you to manage.

### Running tests

Simply run `npm run test`.
Note this will also generate a coverage report.

### Writing tests

Writing tests for web apps has entire books dedicated to it and best practices are strongly influenced by personal style, so I'm deliberately avoiding discussing how or when to write tests in this guide.
However, if prescriptive guidance on testing is something that you're interested in, [let me know](https://www.surveymonkey.com/r/LN2CV82), I'll do some homework and get back to you.
