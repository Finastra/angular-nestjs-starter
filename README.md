<h1 align="center">Angular NestJS Starter</h1>

<p align="center">
  <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular Logo" height="120"/>
  <img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" height="120" alt="Nx Logo">
  <img src="https://nestjs.com/img/logo-small.svg" height="120" alt="Nest Logo" />
  <br>
  <br>
  <blockquote align="center"><h3>Angular & NestJS starter for enterprise-grade full-stack projects, built under a clean architecture that helps to scale and maintain a fast workflow.</h3></blockquote>
</p>

<p align="center">
  <a href="https://github.com/Finastra/angular-nestjs-starter/actions?query=workflow%3ABuild">
  <img src="https://github.com/Finastra/angular-nestjs-starter/workflows/Build/badge.svg" alt="Build status" />
  </a>
  <a href="./LICENSE.md"><img src="https://img.shields.io/github/license/finastra/angular-nestjs-starter" alt="Repo License" /></a>
  <a href="https://github.com/Finastra/angular-nestjs-starter/issues">
    <img src="https://img.shields.io/badge/PRs-welcome-green" alt="PRs welcome"/>
  </a>
  <a href="https://gitpod.io/#https://github.com/Finastra/angular-nestjs-starter">
    <img src="https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod">
  </a>
  <a href="https://github.com/facebook/jest">
    <img src="https://jestjs.io/img/jest-badge.svg" alt="unit tests with Jest" />
  </a>
  <a href="https://twitter.com/FinastraFS">
    <img src="https://img.shields.io/twitter/follow/FinastraFS.svg?style=social&label=Follow">
  </a>
</p>

<br>

## 🚀 Quick Start

```
npm start
```

Or in two separate commands :

```
npm run dev

npm run start:server
```

<br>

## 🌟 Features

<h3>
Client
<img src="https://angular.io/assets/images/logos/angular/angular.svg" height="15" alt="Angular Logo" />
</h3>

- Strict mode
- Lazy loading
- Smart and pure components pattern
- Self-contained components and encapsulated modules
- Components types (e.g. component, features)
- Amazing directory structure
- Unit tests with Jest instead of Karma & Jasmine
- Dark mode
- Migration from TSLint to ESLint
- GitHub Actions workflows for unit tests and build
  <!-- - Dynamic titles and content meta tags -->
  <!-- - PWA -->
  <!-- - i18n -->

<h3>
Server
<img src="https://nestjs.com/img/logo-small.svg" height="15" alt="Nest Logo" />
</h3>

- Smart Logging (human-readable or JSON if console is not interactive)
- Proxy
- Auth ready

<br>

## 🛠️ Make some initial tweaks

- Change application title:

  - Go to [apps/client/src/index.html](./apps/client/src/index.html) and inside the `title` tag, replace "AngularNestjsStarter" with your app name.\
  - Go to [apps/client/src/app/app.component.ts](./apps/client/src/app/app.component.ts) and change the property `appName`

- Change your favicon:

  Go to [apps/client/src](./apps/client/src/favicon.ico) and replace the current `favicon.ico`

- Start hacking:

  - Go to [libs/features/home/src/lib/home.component.html](./libs/features/home/src/lib/home.component.html) and replace content with your own !

- Enable auth:
  - Go to [apps/server/src/main.ts](./apps/server/src/main.ts) and uncomment
  - Go to [apps/server/src/app/app.module.ts](./apps/server/src/app/app.module.ts) and uncomment

<br>

## Environement variables

| Variable         | Default value                                     |
| :--------------- | :------------------------------------------------ |
| `OIDC_CLIENT_ID` |                                                   |
| `CLIENT_SECRET`  |                                                   |
| `SESSION_SECRET` | Generated uiid                                    |
| `FFDC`           | `https://api.fusionfabric.cloud`                  |
| `PORT`           | `3000`                                            |
| `OIDC_ISSUER`    | `https://api.fusionfabric.cloud/login/v1/sandbox` |
| `OIDC_SCOPES`    | `openid profile`                                  |
| `OIDC_ORIGIN`    | `http://localhost:3000`                           |

> Duplicate the `.env.template` and rename it to .env 👌🏼

<br>

## 🧙‍♂️ Commands

| Command        | Description                                                |
| :------------- | :--------------------------------------------------------- |
| `nx`           | See available commands                                     |
| `dev`          | Builds client in watch mode                                |
| `start:server` | Builds the server in watch mode                            |
| `start`        | Builds the client and then starts the server in watch mode |
| `build:prod`   | Builds both client and server in production mode           |
| `test:cov`     | Run test and outptus coverage                              |

<br>

_Below are some more advanced commands that might speed up your development flow:_

### Generate a new features

Run `ng g @nrwl/angular:lib my-feature --directory=features` to generate a features library.

### Generate a new cdk

The Component Dev Kit (CDK) is a set of components shared accross you project.

Start by creating your cdk lib by running `ng g @nrwl/angular:lib foo --directory=cdk --simpleModuleName`.

And then run `ng g component foo --project=cdk-foo --flat` to generate a new component.

### Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@finastra/mylib`.

### Running unit tests

Run `npm t` to execute the unit tests via [Jest](https://jestjs.io).

Run `npm run test:cov` to execute the unit tests and output coverage.

Run `nx affected:test` to execute the unit tests affected by a change.

### Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

<br>

## Further help

- [Finastra's Developer Portal](https://developer.fusionfabric.cloud/documentation)
- [Finastra's Design System](https://design.fusionfabric.cloud)
- [Angular Documentation](https://angular.io/docs)
- [NestJS Documentation](https://docs.nestjs.com/)
- [Nx Documentation](https://nx.dev/angular)

<br>

[![Brought to you by Finastra](https://raw.githubusercontent.com/Finastra/finastra-nodejs-libs/develop/media/spread-knowledge-readme-banner%402x.png)](https://www.finastra.com/)
