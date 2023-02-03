# Customize Ghost theme

This is my first sample for Ghost theme.[here](https://www.freecodecamp.org/news/how-to-build-a-ghost-cms-theme/)

## Prerequisite

Setting up the Ghost theme development environment in Windows and macOS is a straightforward process. But it's best if you've installed the npm or yarn package manager. If you don't have Node.js, npm, and yarn, yolu'll need to install them – Node.js comes with preinstalled npm and yarn.

## Install Ghost CMS 

Setting up the Ghost theme development environment in Windows and macOS is a straightforward process. But it's best if you've installed the npm or yarn package manager. If you don't have Node.js, npm, and yarn, yolu'll need to install them – Node.js comes with preinstalled npm and yarn.

To install Ghost CMS globally and locally, follow these basic steps:

### Install ghost-CLI locally

First have to install `ghost-cli` globally on your local machine.

```
npm install ghost-cli@latest -g
OR
yarn global add ghost-cli@latest
```

Next, run `ghost local` command in your terminal.[^1]
```
ghost install local
```

To start local development server, run the `ghost start` command in your terminal.[^2]

### Setup environment using a Docker Image

To start the setup, you'll need the `docker-compose.yml` file in your root project folder. Then run the `docker-compose up` command in your terminal.

```
version: '3.8'
services:
  blog:
    image: ghost
    restart: always
    ports:
      - 8080:2368
    volumes:
      - ./custom-ghost-theme:/var/lib/ghost/content/themes/custom-ghost-theme/
    environment:
      url: http://localhost:8080
      NODE_ENV: development
```

## Create theme using `create-ghost-theme`

Install `create-ghost-theme` cli first from [here](https://www.npmjs.com/package/create-ghost-theme)

Run terminal inside your custom theme directory and `yarn start` to run as development.

If you wanna update theme automatically during development, you have to run ghost in development method using `ghost start -D`.

To make production, use `yarn build` command.

## Build theme production

[^1]: Some cases, ghost command is not recognized in your terminal. ATM, you have to register ***yarn bin*** or ***npm bin*** path to your environment variables. Also you have to run ghost install local command in your empty directory cuz it happens error if directory is not empty

[^2]: If you get an error when running ghost start in Ubuntu, run the following command: `ghost start --no-setup-linux-user`.
