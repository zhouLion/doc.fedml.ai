# Document Structure
- `docs/platform` provides docs for our MLOps platform
- `docs/launch` provides docs for FEDML®Launch
- `docs/train` provides docs for FEDML®Train
- `docs/deploy` provides docs for FEDML®Deploy
- `docs/federate` provides docs for FEDML®Federate (reusing our existing contents from federated learning)


# How to edit and release?
- Create a new branch for your local edit
- Edit md files under docs folder
- Build with command `npm install` && `npm run start` (contact _**Quan**_ if this step doesn't work)
- Vist http://localhost:3000/ to preview the content change
- GitHub PR (Pull Request) and ask _**Chaoyang**_ or _**Al**_ to review and merge

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.


### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
