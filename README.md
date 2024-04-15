### Skylla-bookshop

This project contains both the client and server of the application.

## Prerequisites

Before running the application, make sure you have the following installed on your machine:

- Docker (if running via Docker)
- Node.js (if running locally)
- yarn (if running locally)

## Getting Started

### Running Locally

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
  yarn build-client
  ```
- Start the server:
  ```
  yarn start
  ```

3. **View the Application**:

- Once the server is running, open your web browser and go to `http://localhost:3000` to view the application.

### Running with Docker

To run the application using Docker, follow these steps:

1. **Build the Docker Image**:

- Open a terminal at the root of the project directory.
- Build the Docker image:
  ```
  docker build -t skylla-bookshop .
  ```

2. **Run the Docker Container**:

- Run the application within a Docker container:
  ```
  docker run -p 3000:3000 --name skylla-bookshop-container skylla-bookshop
  ```

3. **View the Application**:

- Open your web browser and navigate to `http://localhost:3000` to see the application running from the Docker container.

4. **Stop and Remove the Container** (when done):

- To stop the Docker container:
  ```
  docker stop skylla-bookshop-container
  ```
- To remove the container:
  ```
  docker rm skylla-bookshop-container
  ```

## Running Tests

To run cypress tests, you can use the following commands:

- Make sure the app is runnig on `http://localhost:3000`
- Navigate to the `client` directory:
  ```
  cd client
  ```
- Run tests:
  ```
  npx cypress open
  ```
