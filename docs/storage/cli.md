---
sidebar_position: 2
---

# Command Line Interfaces (CLIs)

## FEDML Storage CLI Overview

Store and manage data on the FEDML® Nexus AI Platform.  This documentation covers details and examples of how to use these storage commands from a command line interface.


```bash
❯ fedml storage -h
fedml storage [OPTIONS] COMMAND [ARGS]...
  Manage storage on FedML® Nexus AI Platform

Options:
  -h, --help          Show this message and exit.
  -k, --api_key TEXT  user api key.
  -v, --version TEXT  specify version of FedML® Nexus AI Platform. It should
                      be dev, test or release

Commands:
  delete             Delete data stored on FedML® Nexus AI Platform
  download           Download data stored on FedML® Nexus AI Platform
  get-metadata       Get metadata of data object stored on FedML® Nexus...
  get-user-metadata  Get user-defined metadata of data object stored on...
  list               List data stored on FedML® Nexus AI Platform
  upload             Upload data on FedML® Nexus AI Platform

```

More about the `storage` CLI can be found [here](../open-source/cli/fedml-storage)