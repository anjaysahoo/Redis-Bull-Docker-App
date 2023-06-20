# Redis Bull App with SvelteKit

This is a simple SvelteKit application that uses the Redis-based [Bull](https://optimalbits.github.io/bull/) library for job processing. The application adds a job to the queue and processes jobs from the queue. It also includes a Dockerfile to containerize the application.

## Redis and Node.js

This application requires Redis and Node.js to be installed. The Dockerfile provided in the repository sets up the necessary environment for running the application. If you prefer to run the application outside of Docker, make sure you have Redis and Node.js installed on your system.

#### [Refer below repository for understanding how to run simple Node.js redis application.]
https://github.com/anjaysahoo/simple-redis-app

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

```shell
git clone https://github.com/your-repo/redis-bull-app.git
```

2. Install the dependencies:

```shell
cd redis-bull-app
npm install
```

## Usage

To start the SvelteKit application and process jobs from the Redis Bull queue, run the following command:

```shell
npm run dev
```

This will start the development server, and you can access the application in your browser at `http://localhost:5173`.


## Dockerizing the App

The provided Dockerfile allows you to containerize the SvelteKit application with Redis and Node.js. To build and run the Docker image, follow these steps:

1. Build the Docker image:

```shell
docker build -t redis-bull-app:1.0.0 .
```

2. Run the Docker container:

```shell
docker run -d -p 3000:3000 --name redis-bull-container redis-bull-app:1.0.0
```

This will create a Docker container named `redis-bull-container` and expose port 3000. You can access the application in your browser at `http://localhost:3000`.

## docker-compose.yml

Alternatively, you can use Docker Compose to simplify the containerization process. The provided `docker-compose.yml` file includes the necessary configuration. To build and run the Docker image using Docker Compose, follow these steps:

1. Build and start the Docker containers:

```shell
docker-compose up -d
```

This will build the Docker image and start the Redis Bull application in a container named `redis-bull-container`. You can access the application in your browser at `http://localhost:3000`.

## Additional Information

- The SvelteKit application is configured to use the `@sveltejs/adapter-node` adapter, which allows it to be served using Node.js.
- The [`page.server.ts`](https://github.com/anjaysahoo/redis-bull-docker-app/blob/main/redis-bull-app/src/routes/%2Bpage.server.ts) file contains the code for adding jobs to the queue and processing them.
- The Redis server and Node.js are installed in the Docker image to provide the necessary runtime environment for the application.
- The Dockerfile sets up the application by copying the build files and dependencies from the builder stage and then starts the Redis server and the Node.js server.

