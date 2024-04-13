### Skylla-bookshop

This project contains both the client and server of the application.

## Prerequisites

Before running the application, make sure you have the following installed on your machine:

- Node.js
- yarn

## Getting Started

Follow these steps to run the application:

1. **Install Dependencies**:

   - Open a terminal.
   - Navigate to the `client` directory:
     ```
     cd client
     ```
   - Install client-side dependencies:
     ```
     yarn install
     ```

2. **Start the application**:

   - Navigate to the `server` directory:
     ```
     cd ../server
     ```
   - Install server-side dependencies:
     ```
     yarn install
     ```
   - After installing dependencies, build the client application:
     ```
     yarn build
     ```
   - Start the server:
     ```
     yarn start
     ```

3. **View the Application**:
   - Once the server is running, open your web browser and go to `http://localhost:3000` to view the application.

## Running Tests

To run cypress tests, you can use the following commands:

- Navigate to the `client` directory:
  ```
  cd client
  ```
- Run tests:
  ```
  npx cypress open
  ```
