---
description: Docusaurus provides a set of scripts to help you generate, serve, and deploy your website.
---

# Command Line Interface (CLI)

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




### `fedml login [OPTIONS] <API_KEY>`

Compiles your site for production.

#### Options {#options-1}

| Name | Default | Description |
| --- | --- | --- |
| `--client` or `-c` | `true` | bind as a client in FEDML Nexus AI Cloud |
| `--server` or `-s` | `false` | bind as a server in FEDML Nexus AI Cloud |
| `--version` or `-v` | `false` | The backend environment of FEDML Nexus AI Cloud. It supports values: `local`, `dev`, `test`, `release`. This is normally used by FEDML team for internal development. |

#### Arguments {#argument-1}
| Name | Default | Description |
| --- | --- | --- |
| `--api_key` or `-c` |  | You can find your API Key at https://nexus.fedml.ai. Click your avatar on top-right area and then click "Profile". |

#### Examples {#example-1}

Login as a client in FEDML Nexus AI Cloud:
```
fedml login -c <API_KEY>
```


### `fedml env`

Do sanity check of the FEDML library's current running environment information, including versions of the library, OS, CPU/GPU hardwares and network connectivity (HTTPS, S3, MQTT). 

#### Options {#options}

| Name | Default | Description |
| --- | --- | --- |
| `--version` or `-v` | `release` | The backend environment of FEDML Nexus AI Cloud. It supports values: `local`, `dev`, `test`, `release`. This is normally used by FEDML team for internal development. |

:::info

If the environment setup is correct, `fedml env` will print a message similar as follows:

```

======== FedML (https://fedml.ai) ========
FedML version: 0.8.8a153
FedML ENV version: release
Execution path:/Users/chaoyanghe/sourcecode/FedML-inc/FedML-all-in-one-dev/FedML/python/fedml/__init__.py

======== Running Environment ========
OS: macOS-13.4-arm64-arm-64bit
Hardware: arm64
Python version: 3.9.15 | packaged by conda-forge | (main, Nov 22 2022, 08:48:25) 
[Clang 14.0.6 ]
PyTorch version: 2.0.1
MPI4py is installed

======== CPU Configuration ========
The CPU usage is : 35%
Available CPU Memory: 24.8 G / 64.0G

======== GPU Configuration ========
No GPU devices

======== Network Connection Checking ========
The connection to https://open.fedml.ai is OK.

The connection to S3 Object Storage is OK.

The connection to mqtt.fedml.ai (port:1883) is OK.
```
:::