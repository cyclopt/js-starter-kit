# js-starter-kit

[![Build Status](https://travis-ci.org/cyclopt/js-starter-kit.svg?branch=master)](https://travis-ci.org/cyclopt/js-starter-kit) [![Build status](https://ci.appveyor.com/api/projects/status/cxxf8d19pr9qotd0?svg=true)](https://ci.appveyor.com/project/kyrcha/js-starter-kit)

[Running version of the app in Heroku](https://cyclopt-js-starter-kit.herokuapp.com/)

This project is a JavaScript web application starter kit. The goal of the project is to have a starting point and have decisions made for you in order to battle jsfatigue.

The kit uses React-Redux in the front-end and json-server as a back-end. For task automation it uses npm-scripts. The front-end was scaffolded using [create-react-app](https://github.com/facebook/create-react-app).

The basic fodler structure is:
- `back-end`: this folder contains back-end code (express and database related stuff should be added here).
- `front-end`: this directory holds the front-end react based code and was created using create-react-app. The ultimate guide for modifying this can be found [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md)
- `scripts`: this folder contains scripts for needed for various tasks.

Some of the main dependencies of the kit and their utiliy are found in the following table:

**Back-end**

| Dependency | Description |
| --- | --- |
| bunyan | Logger (we don't use console.log :)) |

| DevDependency | Description |
| --- | --- |
| babel-cli | Babel Command line interface |
| babel-core | Babel Core for transpiling the new JavaScript to old |
| babel-loader | Adds Babel support to Webpack |
| babel-preset-env | |
| babel-preset-latest | Babel preset for running all the latest standardized JavaScript features |
| babel-register | Register Babel to transpile our tests |
| chalk | Colored command line output |
| compression | gzip http output |
| debug | |
| eslint | Lints JavaScript |
| eslint-plugin-import | Advanced linting of ES6 imports |
| eslint-watch | Add watch functionality to ESLint |
| express | Serves development and production builds |
| extract-text-webpack-plugin | |
| jest | Testing framework |
| json-schema-faker | Declare a JSON schema for generating fake data |
| json-server | Serve a JSON API locally |
| nock | Mock HTTP requests via Node |
| nodemon | Monitor changes | 
| npm-run-all | Display results of multiple commands on single command line |
| rimraf | Delete files | 
| superagent | AJAX client |
| supertest | Test AJAX requests |

**Front-end**

| Dependency | Description |
| --- | --- |
| axios | For AJAX requests  |
| bulma | Our CSS Framework of choice |
| prop-types | React prop-types |
| react | React library |
| react-dom | React library for DOM rendering |
| react-redux | Redux library for connecting React components to Redux |
| react-router-dom | React library for routing in the browser |
| react-scripts | Scripts for react related tasks (come with CRA) |
| react-spinkit | Loaders |
| redux | Library for unidirectional data flows |
| redux-thunk | Async redux library |
| toastr | Display messages to the user |

| DevDependency | Description |
| --- | --- |
| enzyme | Simplified JavaScript Testing utilities for React (by AirBnB) |
| enzyme-adapter-react-16 | Needed by react 16 for enzyme to work |
| nock | Mock HTTP requests for testing |
| nodemon | Monitors file changes and restarts app (used for watching and building) |
| react-test-renderer | Needed by react 16 for enzyme to work |
| redux-immutable-state-invariant | Warn when Redux state is mutated (useful in dev mode) |
| redux-mock-store | Mock Redux store for testing |

## CI/CD

Continuous Integration/Continuous Deployment (CI/CD) is made through [travis-ci](https://travis-ci.org) on [Heroku](https://heroku.com). A running version of the app can be found [here](heroku). Also a build is triggered in [appveyor](https://www.appveyor.com). In the feature we will also add support for [circle-ci](http://circleci.com).

## Local installation and running

Clone the repository:

    git clone https://github.com/cyclopt/js-starter-kit

Install the dependencies (both for the back-end and the front-end):

    npm install

The command `npm install` will also run after this:

    npm install --prefix ./front-end

### Development

Open two terminals. To start the back-end server run:

    npm run start:dev:back-end

This will:
  - generate new mock data
  - display a start message
  - do a security check with npm audit
  - lint the files in watch mode
  - run the tests in watch mode
  - run the server

Navigate to http://localhost:4000 to see that it is running.

Then start the front-end in the other terminal:

    npm run start:dev:front-end

Navigate to http://localhost:3000 to see that it is running.

In both cases we are wathcing the tests so one can do out of the box Test-Driven Development (TDD).

### Testing

To just test both the front-end and the back-end run:

    npm test

### Production version

To start locally the producion version of the app, run:

    npm start:prod

It will build the front-end and start the back-end serving also the built front-end.

The command `npm start` builds also the back-end with `babel`.

## References

Ideas for this kit are taken from:

- Cory House courses:
  - https://github.com/coryhouse/pluralsight-redux-starter
  - https://github.com/coryhouse/javascript-development-environment
