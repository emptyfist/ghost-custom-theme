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

To start the setup, you'll need the docker-compose.yml file in your root project folder. Then run the docker-compose up command in your terminal.

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

In the volume section, you pass your file. In my case, I added a specific file in my Ghost theme folder.

```
version: '3.8'
services:
  blog:
    image: ghost
    restart: always
    ports:
      - 8080:2368
    volumes:
      - ./assets:/var/lib/ghost/content/themes/fastest/assets
      - ./partials:/var/lib/ghost/content/themes/fastest/partials
      - ./author.hbs:/var/lib/ghost/content/themes/fastest/author.hbs
      - ./default.hbs:/var/lib/ghost/content/themes/fastest/default.hbs
      - ./error-404.hbs:/var/lib/ghost/content/themes/fastest/error-404.hbs
      - ./error.hbs:/var/lib/ghost/content/themes/fastest/error.hbs
      - ./gulpfile.js:/var/lib/ghost/content/themes/fastest/gulpfile.js
      - ./index.hbs:/var/lib/ghost/content/themes/fastest/index.hbs
      - ./package-lock.json:/var/lib/ghost/content/themes/fastest/package-lock.json
      - ./package.json:/var/lib/ghost/content/themes/fastest/package.json
      - ./page.hbs:/var/lib/ghost/content/themes/fastest/page.hbs
      - ./post.hbs:/var/lib/ghost/content/themes/fastest/post.hbs
      - ./query.hbs:/var/lib/ghost/content/themes/fastest/query.hbs
      - ./tag.hbs:/var/lib/ghost/content/themes/fastest/tag.hbs
      - ./readme.md:/var/lib/ghost/content/themes/fastest/readme.md
    environment:
      url: http://localhost:8080
      NODE_ENV: development
```
<sub>fastest is your own custom theme folder. You should change this depends on your decision</sub>

## Run Ghost from this repository (Not recommended, following above steps either use locally or docker image)

There are some symbolic links exists in this repository and you have to install some node modules.

1. Make symbolic links as following(Only discribed for Windows)
```
mklink /D YourPathToGitRepo/src/current YourPathToGitRepo/src/versions/5.33.3
mklink /D YourPathToGitRepo/src/content/themes/YourThemeName YourPathToGitRepo/src/versions/5.33.3/content/themes/YourThemeName
```
2. Open src/config.development.json and change some fields
```
  ...
  "database": {
    "client": "sqlite3",
    "connection": {
      "filename": "PathToRepo\\src\\content\\data\\ghost-local.db"
    }
  },
  ...
  "paths": {
    "contentPath": "PathToRepo\\ghost-custom-theme\\src\\content"
  }
  ...
}

```

[^1]: Some cases, ghost command is not recognized in your terminal. ATM, you have to register ***yarn bin*** or ***npm bin*** path to your environment variables. Also you have to run ghost install local command in your empty directory cuz it happens error if directory is not empty

[^2]: If you get an error when running ghost start in Ubuntu, run the following command: `ghost start --no-setup-linux-user`.
