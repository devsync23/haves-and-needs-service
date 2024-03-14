# Haves and Needs Backend

## Description
Haves and Needs is a backend service for a web application where users can post items they have and want to get rid of, or post requests for items they are in need of. Users can fulfill each other's requests by browsing available items and offering to provide what's needed.

This application is built using Node.js and Express, with MongoDB as the database backend.

## Installation
1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.

## MongoDB Setup
1. Install MongoDB if you haven't already. You can download it from [here](https://www.mongodb.com/try/download/community).
2. Install MongoDB Compass for visualizing the data. You can download it from [here](https://www.mongodb.com/try/download/compass).
3. Start MongoDB server by running `mongod` in your terminal.
4. Open MongoDB Compass and connect to the MongoDB server running locally (`mongodb://localhost:27017`).

## Startup Instructions
1. Make sure MongoDB server is running.
2. Navigate to the project directory.
3. Run `npm start` to start the server.
4. You should see a message indicating that the server is running on a specific port.

## Directory Structure
```
src
├── fulfillments
|   └── TODO
├── haves
|   └── TODO
├── middleware
│   └── auth.ts
├── needs
|   └── TODO
└── users
    ├── user.controller.ts
    ├── user.model.ts
    └── user.types.d.ts
├── constants.ts
├── db.ts
├── index.d.ts
├── index.ts
└── router.ts
```
- **fulfillments/**: Manages the "fulfillments" functionality of the application.
- **haves/**: Manages the "haves" functionality of the application.
- **middleware/**: Contains middleware functions, including authentication.
- **needs/**: Manages the "needs" functionality of the application.
- **users/**: Manages user-related operations, including controllers, models, and types.
- **constants.ts**: Contains constant values used throughout the application.
- **db.ts**: Responsible for establishing a connection to MongoDB.
- **index.d.ts**: TypeScript declaration file for the main application file.
- **index.ts**: Entry point of the application where Express app is initialized.
- **router.ts**: Defines route definitions for the application.

## Usage
- Once the server is running, you can interact with it through HTTP requests to the defined endpoints.
- Refer to the router.ts file for available routes and their corresponding controllers.

@TODO add API documentation

## Contributors
- [Your Name](https://github.com/your-username)

## License
This project is licensed under the [MIT License](LICENSE).