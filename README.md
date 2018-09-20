# js-starter-kit

[Running version of the app in Heroku]()

This project is a JavaScript web application starter kit. The goal of the project is to have a starting point and have decisions made for you in order to battle jsfatigue.

The kit uses React-Redux in the front-end and json-server as a back-end. For task automation it uses npm-scripts. The front-end was scaffolded using [create-react-app](https://github.com/facebook/create-react-app).

The basic fodler structure is:
- `back-end`: this folder contains back-end code (express and database related stuff should be added here).
- `front-end`: this directory holds the front-end react based code and was created using create-react-app. The ultimate guide for modifying this can be found [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md)
- `scripts`: this folder contains scripts for needed for various tasks.

Some of the main dependencies of the kit and their utiliy are found in the following table:

| Dependency | Description |
| --- | --- |
|  |  |
|  |  |

Continuous Integration/Continuous Deployment (CI/CD) is made through [travis-ci](https://travis-ci.org) on [Heroku](https://heroku.com). A running version of the app can be found [here](heroku). Also a build is triggered in [appveyor](https://www.appveyor.com). In the feature we will also add support for [circle-ci](http://circleci.com).

Ideas for this kit are taken from:

- Cory House courses:
  - https://github.com/coryhouse/pluralsight-redux-starter
  - https://github.com/coryhouse/javascript-development-environment

## Local installation and running

Clone the repository:

    git clone https://github.com/cyclopt/js-starter-kit

Install the dependencies (both for the back-end and the front-end):

    npm install
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

    npm start

It will build the front-end and start the back-end serving also the built front-end.
