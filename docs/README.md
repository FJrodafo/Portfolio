# Portfolio

My professional minimalist portfolio!

[![▲Vercel](https://img.shields.io/website?url=https://fjrodafo-portfolio.vercel.app/&style=flat&label=▲Vercel&labelColor=000000&color=000000)](https://fjrodafo-portfolio.vercel.app/)
[![GitHub Stars](https://img.shields.io/github/stars/FJrodafo/Portfolio?style=social&logo=github&logoColor=000000&label=Stars&labelColor=ffffff&color=ffffff)](https://github.com/FJrodafo/Portfolio/stargazers)

[![PageSpeed Insights](https://img.shields.io/badge/PageSpeed_Insights-100-00cc66?style=flat&logo=pagespeedinsights&labelColor=ffffff)](https://pagespeed.web.dev/analysis/https-fjrodafo-portfolio-vercel-app/2j32p67s81?form_factor=desktop)

[![Docker Pulls](https://img.shields.io/docker/pulls/fjrodafo/portfolio?style=flat&logo=docker&logoColor=ffffff&label=Pulls&labelColor=2560FF&color=2560FF)](https://hub.docker.com/r/fjrodafo/portfolio)
[![Image Size](https://img.shields.io/docker/image-size/fjrodafo/portfolio?style=flat&logo=docker&logoColor=ffffff&label=Size&labelColor=2560FF&color=2560FF)](https://hub.docker.com/r/fjrodafo/portfolio)

## Index

1. [Introduction](#introduction)
2. [Download the code](#download-the-code)
3. [Set up the project](#set-up-the-project)
4. [Install dependencies](#install-dependencies)
5. [Final steps](#final-steps)
6. [Using Docker](#using-docker)
    1. [Run with Docker Compose (Recommended)](#run-with-docker-compose-recommended)
    2. [Build Docker image manually](#build-docker-image-manually)
7. [Learn More](#learn-more)
8. [Deploy on Vercel](#deploy-on-vercel)
9. [Credits](#credits)

## Introduction

My professional minimalist portfolio made with [Next.js](https://nextjs.org), bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), powered by [&#x25B2;Vercel](https://vercel.com/)!

<details>
<summary>Project structure</summary>

    /
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
    ├── .env
    ├── docker-compose.yaml
    ├── Dockerfile
    ├── jsconfig.json
    ├── next.config.mjs
    ├── package-lock.json
    └── package.json
</details>

## Download the code

Open your directory where you save your repositories and clone it with the following command:

```shell
# From GitHub
git clone https://github.com/FJrodafo/Portfolio.git
```

## Set up the project

This project needs a `.env` file based on `.env.example` with your environment variables related to your email service (Make sure you have an Resend account created, you can create one in the [Resend](https://resend.com/) official website):

```conf
RESEND_API_KEY=your_resend_api_key
```

> [!IMPORTANT]
> 
> This same environment variable must be configured in the Vercel website if the application is to be deployed on that service.

## Install dependencies

As well, this project must be initialized and the necessary dependencies installed with the following command:

```shell
npm install
```

## Final steps

If you have Node v22.14 or higher installed on your machine, then you are good to go!

To check if you already have Node installed on your machine, run `node -v` in your terminal. Otherwise, you will need to install Node v22.14 or higher or, as a last option, check out the [Docker](#using-docker) alternative.

Finally, if you have Node installed, type the following command to run the development server:

```shell
npm run dev
# Press 'Ctrl + C' to exit
```

Open [http://localhost:3000](http://localhost:3000) in your favorite browser to see the result (The page auto-updates as you edit the project files).

## Using Docker

This project can be run using Docker without installing Node.js locally.

You can find a Docker image of this project ready to be pulled on [GitHub Packages](https://github.com/FJrodafo/Portfolio/pkgs/container/portfolio) or [Docker Hub](https://hub.docker.com/r/fjrodafo/portfolio) website!

Pull the image with the following commands:

```shell
# Docker Hub
docker pull fjrodafo/portfolio:1.0.0
```

```shell
# GitHub Packages
docker pull ghcr.io/fjrodafo/portfolio:1.0.0
```

> [!CAUTION]
> 
> Do not include a `.env` file in the Docker image. Environment variables, such as `RESEND_API_KEY`, must be provided at runtime.

### Run with Docker Compose (Recommended)

Make sure to create and configurate the `.env` file correctly with your environment variables (This file is used only at runtime, is ignored by Git and Docker, and is not included in the image):

```conf
RESEND_API_KEY=****
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

If you don't have Node v22.14 or higher installed on your machine, you can build a Docker image by running the [Dockerfile](https://github.com/FJrodafo/Portfolio/blob/main/Dockerfile).

Open a terminal and run the following command:

```shell
docker build -t portfolio .
```

After the build completes, you can run your container with the following command:

```shell
docker run -dp 3000:3000 --env-file .env portfolio
```

You can even specify the environment variable value directly with the following command:

```shell
docker run -dp 3000:3000 -e RESEND_API_KEY=your_resend_api_key portfolio
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

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/FJrodafo/Portfolio/tree/main)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Credits

Icons from [Boxicons](https://boxicons.com/) and [IconScout](https://iconscout.com/).
