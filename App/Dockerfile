# syntax=docker/dockerfile:1

# Use the official lightweight Node.js 22.14-slim image.
# https://hub.docker.com/_/node
FROM node:22.14-slim

# Create and change to the app directory.
WORKDIR /App

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json and package-lock.json are copied.
COPY package*.json ./

# Install all dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# Build the app
RUN npm run build

# Run the web service on container startup.
CMD [ "npm", "start" ]
