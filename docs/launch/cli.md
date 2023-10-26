---
sidebar_position: 7
---

# Command Line Interfaces (CLIs)

## FedML Launch CLI Overview

Launch jobs on the FedML® Launch platform (open.fedml.ai).


```bash
❯ fedml launch -h
fedml launch [OPTIONS] YAML_FILE
  Launch job at the FedML® Nexus AI platform

Options:
  -h, --help          Show this message and exit.
  -c, --cluster TEXT  If a cluster name is specified, you labelled the
                      searched resource by launch with the cluster name. So
                      later you can reuse the same cluster resource without
                      warmup after the first launch. The cluster can be
                      stopped by CLI: fedml cluster stop, or it would be
                      automatically stopped after 15-minute idle time.
  -k, --api_key TEXT  user api key.
  -v, --version TEXT  version of FedML® Nexus AI Platform. It should be dev,
                      test or release. Default is release.
```

More about the launch CLI can be found [here](../open-source/cli/fedml-launch)