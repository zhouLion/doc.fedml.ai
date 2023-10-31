# Raspberry Pi

A step-by-step installation guide of FedML on Raspberry Pi.

:::tip
For Raspberry Pi devices, it is recommended to run FedML using Docker.
:::

## Install Docker (Prerequisite)
:::note
You can move to the next step if you have Docker already installed.
:::
1. Update and upgrade your apt-get package tool

```
sudo apt-get update && sudo apt-get upgrade
```

2. Download the Docker installation script
```
curl -fsSL https://get.docker.com -o get-docker.sh
```

3. Execute the installation script
```
sudo sh get-docker.sh
```

4. Add a non-root user to the Docker group
```
sudo usermod -aG docker [your-user]
```

## Run FedML with Docker
- Pull the FedML RPI Docker image
```
docker pull fedml/fedml:latest-raspberrypi4-64-py37
```

- Run Docker with "fedml login"
```
docker run -t -i fedml/fedml:latest-raspberrypi4-64-py37 /bin/bash

root@8bc0de2ce0e0:/usr/src/app# fedml login $USERID

```

:::info
Note please change the value of $USERID to your own.
:::

## Install with pip

```
pip install fedml
source ~/.profile  ## run this command if '/home/user/.local/bin' is not on PATH' after installation
```
