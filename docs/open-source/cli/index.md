---
sidebar_position: 1
description: TensorOpera provides a set of CLIs to help you develop, launch, train, and deploy your model. 
---

# CLI Overview

TensorOpera provides a set of CLIs to help you develop, launch, train, and deploy your model. To get the latest version of the CLI, run `fedml -h` or `fedml --help`:

```
Usage: fedml [OPTIONS] COMMAND [ARGS]...

Options:
  -h, --help  Show this message and exit.

Commands:
  login     Login the TensorOpera AI Platform.
  logout    Logout from the TensorOpera AI Platform.
  launch    Launch job at the TensorOpera AI platform.
  cluster   Manage clusters on TensorOpera AI Platform.
  run       Manage runs on the TensorOpera AI Platform.
  device    Bind/unbind devices to the TensorOpera AI Platform.
  model     Deploy and infer models.
  build     Build packages for the TensorOpera AI Platform.
  logs      Display logs for ongoing runs.
  train     Manage training resources on TensorOpera AI Platform.
  federate  Manage federated learning resources on TensorOpera AI Platform.
  env       Get environment info such as versions, hardware, and networking.
  network   Check the TensorOpera AI backend network connectivity.
  version   Display TensorOpera library version.
```

:::tip
Before you run any CLI command, it's better to do a sanity check of your environment setup by running `fedml env`. You will get versions of the library, OS, CPU/GPU hardwares and network connectivity.
:::

All CLI commands and their usages are as follows:





