# cf-test

## Documentation for ReactJS:

Introduction: <br />
This documentation explains the implementation of the front-end part of the Gigler survey application using ReactJS. This documentation provides a step-by-step guide on how to set up the application and how to run it.

Prerequisites: <br />
Before starting with the setup of the ReactJS application, make sure you have the following software installed on your system:
- Node.js (latest version)
- NPM (latest version)

Installation: <br />
To install and run the ReactJS application, follow the below steps:
- Open your terminal or command prompt.
- Navigate to the project directory `cd cf-test/fe`
- Install the npm packages: `npm install`
- Run the following command to start the ReactJS application: `npm start`

This will start the application on http://localhost:3000. You can access this URL on your web browser.

Features: <br />
The Gigler survey application has the following features:
- DONE - The application presents 5 randomly selected questions to the user from different categories.
- IN PROGRESS - The user can write answers for the questions presented.
- IN PROGRESS - The user can submit their response to the survey.

Environment variables: <br />
Add the following variables before starting the project:
- `REACT_APP_API_URL=http://localhost:5000`

## Documentation for NestJS:

Introduction: <br />
This documentation explains the implementation of the back-end part of the Gigler survey application using NestJS. This documentation provides a step-by-step guide on how to set up the application and how to run it.

Prerequisites: <br />
Before starting with the setup of the NestJS application, make sure you have the following software installed on your system:
- Node.js (latest version)
- NPM (latest version)
- Nest JS (latest version): `npm i -g @nestjs/cli`

Installation: <br />
To install and run the NestJS application, follow the below steps:
Open your terminal or command prompt.

- Navigate to the project directory: `cd cf-test/be`
- Start the server `npm run start:dev`

This will start the application on http://localhost:5000. You can access this URL on your web browser.

Features: <br />
The Gigler survey application has the following features:
- The application presents 5 randomly selected questions to the user from different categories.

Folder structure: <br />
- `db`: Contains `mysql` database configuration. Used `typeorm`
- `controllers`: To handle incoming and returning HTTP responses to the client
- `services`: To implement the actual functionality of an application
- `modules`: To organize related code into separate, self-contained units

Helpful commands: <br />
- `npm run migration:create`: To create migration in `db/migrations` folder
- `npm run migration:run`: To execute migrations.
- `npm run seed:run`: To run seed file. Currently, this command doesnot work due to `typeorm` issues

