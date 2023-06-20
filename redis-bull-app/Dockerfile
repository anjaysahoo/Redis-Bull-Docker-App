# Below line are used to create ./build folder,
# which is used to copy the build files from the builder stage.
# This is done to reduce the size of the final image.
FROM node:16.19.0-alpine3.16 AS builder
WORKDIR /redis-bull-docker
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm ci --omit dev


# Below line are used to create the final image.
# Using lightweight Linux distribution based on Alpine Linux.
FROM alpine

# Install Redis and Nodejs.
RUN apk add --no-cache \
        redis \
        nodejs


# Copy the build files from the builder stage.
WORKDIR /redis-bull-docker
COPY --from=builder /redis-bull-docker/build ./build
COPY --from=builder /redis-bull-docker/node_modules ./node_modules
COPY package.json .

# It will start the redis server and then start the node server.
CMD sh -c "redis-server & sleep 5 && node build"
