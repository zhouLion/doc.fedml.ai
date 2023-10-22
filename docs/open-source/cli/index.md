---
sidebar_position: 1
description: FEDML provides a set of CLIs to help you develop, launch, train, and deploy your model. 
---

# CLI Overview

FEDML provides a set of CLIs to help you develop, launch, train, and deploy your model. To get the latest version of the CLI, run `fedml -h` or `fedml --help`:

```
Usage: fedml [OPTIONS] COMMAND [ARGS]...

Options:
  -h, --help  Show this message and exit.

Commands:
  login     Login the FedML® Nexus AI Platform
  logout    Logout from the FedML® Nexus AI Platform
  launch    Launch job at the FedML® Nexus AI platform
  cluster   Manage clusters on FedML® Nexus AI Platform
  run       Manage runs on the FedML® Nexus AI Platform.
  device    Bind/unbind devices to the FedML® Nexus AI Platform
  model     Deploy and infer models.
  build     Build packages for the FedML® Nexus AI Platform
  logs      Display logs for ongoing runs
  train     Manage training resources on FedML® Nexus AI Platform
  federate  Manage federated learning resources on FedML® Nexus AI Platform
  env       Get environment info such as versions, hardware, and networking
  network   Check the Nexus AI backend network connectivity
  version   Display FEDML library version
```

:::tip
Before you run CLIs, it's better to do sanity check of the environment setup by running `fedml env`. You will get versions of the library, OS, CPU/GPU hardwares and network connectivity.
:::

All CLI commands and their usages are as follows:





