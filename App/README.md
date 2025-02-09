## Index

1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Download the code](#download-the-code)
4. [Set up the project](#set-up-the-project)
5. [Install dependencies](#install-dependencies)
6. [Final steps](#final-steps)
7. [Using Docker](#using-docker)
    * [Run with Docker Compose](#run-with-docker-compose)
    * [Build Docker image on your own](#build-docker-image-on-your-own)
8. [Available Scripts](#available-scripts)
    * [`npm start`](#npm-start)
    * [`npm test`](#npm-test)
    * [`npm run build`](#npm-run-build)
    * [`npm run eject`](#npm-run-eject)

## Introduction

My professional minimalist portfolio, made with [React](https://react.dev/), powered by [Vercel](https://vercel.com/)!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/FJrodafo/Portfolio/tree/main/App)

## Project Structure

<details>
<summary>Click me</summary>

```
App/
├── build/
│   └── ...
├── node_modules/
│   └── ...
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   └── *.woff2
│   │   ├── icons/
│   │   │   └── *.svg
│   │   ├── images/
│   │   │   ├── .../
│   │   │   │   └── *.png
│   │   │   └── profile.jpg
│   │   ├── styles/
│   │   │   └── *.css
│   │   └── translations/
│   │       └── .../
│   │           └── *.json
│   ├── components/
│   │   ├── context/
│   │   │   └── .../
│   │   │       └── *.jsx
│   │   ├── layout/
│   │   │   └── .../
│   │   │       └── *.jsx
│   │   └── sections/
│   │       └── .../
│   │           └── *.jsx
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .env
├── docker-compose.yaml
├── Dockerfile
├── package-lock.json
└── package.json
```
</details>

## Download the code

Open your directory where you save your repositories and clone it with the following command:

```shell
# GitHub
git clone https://github.com/FJrodafo/Portfolio.git
```

```shell
# GitLab
git clone https://gitlab.com/FJrodafo/Portfolio.git
```

```shell
# Bitbucket
git clone https://bitbucket.org/fjrodafo/portfolio.git
```

## Set up the project

This project needs a `.env` into the `App` directory with some data related to your EmailJS service (Make sure you have an EmailJS account created, you can create one in the [EmailJS](https://www.emailjs.com/) official website):

```conf
REACT_APP_EMAILJS_SERVICE_ID=your_service_code
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_code
REACT_APP_EMAILJS_USER_ID=your_user_code
```

## Install dependencies

As well, this project must be initialized and the necessary dependencies installed with the following command (Make sure you are in the `App` directory):

```shell
npm install
```

## Final steps

If you have the `.env` file into the `App` directory correctly configurated and Node v18 or higher installed on your machine, then you are good to go!

To check if you already have Node installed on your machine, run `node -v` in your terminal. Otherwise, you will need to install Node v18 or higher or, as a last option, check out the [Docker](#run-with-docker) alternative.

Finally, if you have Node installed, run the following command to run the app in the development mode (Make sure you are in the `App` directory):

```shell
npm start
# Press 'Ctrl + C' to exit
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Using Docker

### Run with Docker Compose

Make sure to create and configurate the `.env` file correctly into the `App` directory before running Docker commands...

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

### Build Docker image on your own

If you don't have Node v18 or higher installed on your machine, you can build a Docker image by running the [Dockerfile](./Dockerfile) (Make sure to create and configurate the `.env` file correctly into the `App` directory before building the docker image).

Open a terminal and run the following command (Make sure you are in the `App` directory):

```shell
docker build -t portfolio .
```

After the build completes, you can run your container with the following command:

```shell
docker run -dp 127.0.0.1:3000:3000 portfolio
```

> [!IMPORTANT]
> 
> Please note that when using Docker, port 3000 on localhost will be occupied by the Discord application for its proper functioning.
> 
> If you already have applications that use port 3000, you will need to adjust certain parameters before creating the Docker container so that it can run correctly on a free port.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

<link rel="stylesheet" href="./README.css">
<a class="scrollup" href="#top">&#x1F53C</a>