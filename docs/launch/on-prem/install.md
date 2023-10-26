---
sidebar_position: 1
---

# Launch on On-premise Cluster

## Step 1: Bind the machines on Platform

#### Log into the platform, head to the `Compute / My Servers` Page and copy the fedml login command:

![OnPremDevices.jpg](static/image/bind_my_servers.png)

## Step 2: SSH into your on-prem devices and do the following individually for each device:

Install the fedml library if not installed already:

```bash
pip install fedml
```

Run the login command copied from the platform:

```bash
fedml login 3b24dd2f****************206e8669
```

It should something similar as below: 

```bash
(fedml) alay@a6000:~$ fedml login 3b24dd2f9b3e478084c517bc206e8669 -v dev

 Welcome to FedML.ai!
 Start to login the current device to the MLOps (https://open.fedml.ai)...

(fedml) alay@a6000:~$ Found existing installation: fedml 0.8.7
Uninstalling fedml-0.8.7:
  Successfully uninstalled fedml-0.8.7
  Looking in indexes: https://test.pypi.org/simple/, https://pypi.org/simple
Collecting fedml==0.8.8a156
  Obtaining dependency information for fedml==0.8.8a156 from https://test-files.pythonhosted.org/packages/e8/44/06b4773fe095760c8dd4933c2f75ee7ea9594938038fb8293afa22028906/fedml-0.8.8a156-py2.py3-none-any.whl.metadata
  Downloading https://test-files.pythonhosted.org/packages/e8/44/06b4773fe095760c8dd4933c2f75ee7ea9594938038fb8293afa22028906/fedml-0.8.8a156-py2.py3-none-any.whl.metadata (4.8 kB)
Requirement already satisfied: numpy>=1.21 in ./.pyenv/versions/fedml/lib/python3.10/site-packages (from fedml==0.8.8a156
.
.
.
.

Congratulations, your device is connected to the FedML MLOps platform successfully!
Your FedML Edge ID is 201610, unique device ID is 0xffdc89fad658@Linux.Edge.Device

```

Head back to the `Compute / My Servers` page on platform and verify that the devices are bounded to the FedML® AI Nexus Platform:

![OnPremDevicesBind.png](static/image/binded_servers.png)


## Step 3: Create a cluster of your servers bound to the FedML® AI Nexus Platform:









