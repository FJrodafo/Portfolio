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
# NOTE: Do NOT include secrets inside the image. Use .dockerignore to exclude .env files and provide environment variables at runtime.
COPY . .

# Build the app
RUN npm run build

# Set the environment to production
ENV NODE_ENV=production

# Expose the port the application listens on
EXPOSE 3000

# Run the web service on container startup.
CMD [ "npm", "start" ]
