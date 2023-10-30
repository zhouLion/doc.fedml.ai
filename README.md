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

# Installation, Build, and Start

```
npm install 
npm run build
npm run start
```
Note: please the above commands are the same as we use in CI/CD. Please make sure you 
