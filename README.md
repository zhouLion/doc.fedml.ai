# Introduction

This documentation website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Document Structure

- `docs/platform` provides docs for our MLOps platform
- `docs/launch` provides docs for FEDML®Launch
- `docs/train` provides docs for FEDML®Train
- `docs/deploy` provides docs for FEDML®Deploy
- `docs/federate` provides docs for FEDML®Federate (reusing our existing contents from federated learning)

# How to edit and release?

- Create a new branch for your local edit
- Edit md files under docs folder
- Build and debug with introduction in Section "Installation"
- Visit http://localhost:3000/ to preview the content change
- GitHub PR (Pull Request) and ask _**Chaoyang**_ or _**Al**_ to review and merge

# Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build


```
npm install 
npm run build
npm run start
```

