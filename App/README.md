# Portfolio

My professional minimalist portfolio!

## Index

1. [Introduction](#introduction)
2. [Attribution](#attribution)
3. [Project Structure](#project-structure)
4. [Download the code](#download-the-code)
5. [Set up the project](#set-up-the-project)
6. [Install dependencies](#install-dependencies)
7. [Final steps](#final-steps)
8. [Using Docker](#using-docker)
    1. [Run with Docker Compose (Recommended)](#run-with-docker-compose-recommended)
    2. [Build Docker image manually](#build-docker-image-manually)
9. [Learn More](#learn-more)
10. [Deploy on Vercel](#deploy-on-vercel)

## Introduction

My professional minimalist portfolio, made with [Next.js](https://nextjs.org), bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), powered by [&#x25B2;Vercel](https://vercel.com/)!

## Attribution

Icons from [Boxicons](https://boxicons.com/) and [IconScout](https://iconscout.com/).

## Project Structure

<details>
<summary>Click me</summary>

```
App/
├── .next/
│   └── ...
├── .vercel/
│   └── ...
├── node_modules/
│   └── ...
├── public/
│   ├── fonts/
│   │   └── *.woff2
│   ├── icons/
│   │   ├── .../
│   │   │   └── *.svg
│   │   └── *.svg
│   ├── images/
│   │   ├── .../
│   │   │   └── *.png
│   │   └── *.jpg
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── send/
│   │   │       └── route.js
│   │   ├── layout.jsx
│   │   └── page.jsx
│   ├── components/
│   │   ├── context/
│   │   │   └── .../
│   │   │       └── *.jsx
│   │   ├── layout/
│   │   │   └── .../
│   │   │       └── *.jsx
│   │   ├── sections/
│   │   │   └── .../
│   │   │       └── *.jsx
│   ├── styles/
│   │   └── *.css
│   └── translations/
│       └── *.json
├── .dockerignore
├── .env.example
├── .gitattributes
├── .gitignore
├── docker-compose.yaml
├── Dockerfile
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
└── package.json
```
</details>

## Download the code

Open your directory where you save your repositories and clone it with the following command:

```shell
# From GitHub
git clone https://github.com/FJrodafo/Portfolio.git
```

## Set up the project

This project needs a `.env` file into the `App` directory based on `.env.example` with your environment variables related to your email service (Make sure you have an Resend account created, you can create one in the [Resend](https://resend.com/) official website):

```conf
RESEND_API_KEY=your_resend_api_key
```

> [!IMPORTANT]
> 
> This same environment variable must be configured in the Vercel website if the application is to be deployed on that service.

## Install dependencies

As well, this project must be initialized and the necessary dependencies installed with the following command (Make sure you are in the `App` directory):

```shell
npm install
```

## Final steps

If you have Node v22.14 or higher installed on your machine, then you are good to go!

To check if you already have Node installed on your machine, run `node -v` in your terminal. Otherwise, you will need to install Node v22.14 or higher or, as a last option, check out the [Docker](#using-docker) alternative.

Finally, if you have Node installed, type the following command to run the development server (Make sure you are in the `App` directory):

```shell
npm run dev
# Press 'Ctrl + C' to exit
```

Open [http://localhost:3000](http://localhost:3000) in your favorite browser to see the result (The page auto-updates as you edit the project files).

## Using Docker

This project can be run using Docker without installing Node.js locally.

> [!CAUTION]
> 
> Do not include a `.env` file in the Docker image. Environment variables, such as `RESEND_API_KEY`, must be provided at runtime.

### Run with Docker Compose (Recommended)

Make sure to create and configurate the `.env` file correctly into the `App` directory with your environment variables (This file is used only at runtime, is ignored by Git and Docker, and is not included in the image):

```conf
RESEND_API_KEY=your_resend_api_key
```

Build the container:

```shell
docker compose build
```

Run the container:

```shell
docker compose up -d
```

Stop the container:

```shell
docker compose down
```

Open [http://localhost:3000](http://localhost:3000) in your favorite browser to see the result.

> [!IMPORTANT]
> 
> If you already have applications that use port 3000, you will need to change the host port before creating the Docker container so that it can run correctly on a free port.

### Build Docker image manually

If you prefer not to use Docker Compose, you can build and run the image manually.

If you don't have Node v22.14 or higher installed on your machine, you can build a Docker image by running the [Dockerfile](./Dockerfile).

Open a terminal and run the following command (Make sure you are in the `App` directory):

```shell
docker build -t portfolio .
```

After the build completes, you can run your container with the following command:

```shell
docker run -dp 3000:3000 --env-file .env portfolio
```

Open [http://localhost:3000](http://localhost:3000) in your favorite browser to see the result.

> [!IMPORTANT]
> 
> If you already have applications that use port 3000, you will need to change the host port before creating the Docker container so that it can run correctly on a free port.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/FJrodafo/Portfolio/tree/main/App)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.