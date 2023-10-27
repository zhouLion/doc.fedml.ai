# Docker

## Running FedML using Docker
All FedML Docker images are hosted at the [FedML Docker Hub](https://hub.docker.com/repository/docker/fedml/fedml).

We recommend using FedML in a Docker environment as it circumvents complex and tedious installation debugging. Currently, we maintain docker images for x86_64 architectures. However, to accomodate your own purposes, you can also build a Docker image with support for the following architectures as well: `arm, raspberrypi, nvidia jetson` using the corresponding Dockerfile located in the installation directory of the [GitHub repository](https://github.com/FedML-AI/FedML/tree/master/installation/build_fedml_docker).

:::info
Please remember to change the `LOCAL_WORKSPACE` environmental variable in the following commands.
:::

### FedML Standard Docker Image

The FedML standard docker image can support to run on CPU an GPU devices. It deviated from the Nvidia official image which is large size.
So the FedML standard docker image will be a large image. Now it is about 17GB in size. Up to now, the FedML standard docker image can run on the Linux platform.
If you want to run on the MacOS platform, you should use the FedML light docker image which can be running on multiple architectures, e.g. X86, ARM, etc.

**(1) Pull the standard Docker image and prepare the docker environment**
```
FEDML_DOCKER_IMAGE=fedml/fedml:latest-torch1.13.1-cuda11.6-cudnn8-devel
docker pull $FEDML_DOCKER_IMAGE

# if you want to use GPUs in your host OS, please follow this link: https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#docker
sudo apt-get update
sudo apt-get install -y nvidia-docker2
sudo systemctl restart docker
sudo chmod 777 /var/run/docker.sock
```

**(2) Run standard Docker with interactive mode**

***On GPUs:***
```
FEDML_DOCKER_IMAGE=fedml/fedml:latest-torch1.13.1-cuda11.6-cudnn8-devel
LOCAL_WORKSPACE=$PleaseUseYourLocalDirectory
DOCKER_WORKSPACE=/home/fedml/fedml_source

docker run -v $LOCAL_WORKSPACE:$DOCKER_WORKSPACE --shm-size=64g --ulimit nofile=65535 --ulimit memlock=-1 --privileged --gpus all --network=host --env WORKSPACE=$DOCKER_WORKSPACE -ti $FEDML_DOCKER_IMAGE /bin/bash
```

***On CPUs:***
```
FEDML_DOCKER_IMAGE=fedml/fedml:latest-torch1.13.1-cuda11.6-cudnn8-devel
LOCAL_WORKSPACE=$PleaseUseYourLocalDirectory
DOCKER_WORKSPACE=/home/fedml/fedml_source

ddocker run -v $LOCAL_WORKSPACE:$DOCKER_WORKSPACE --shm-size=64g --ulimit nofile=65535 --ulimit memlock=-1 --privileged --network=host --env WORKSPACE=$DOCKER_WORKSPACE -ti $FEDML_DOCKER_IMAGE /bin/bash
```

You should now see a prompt that looks something like,
you may run the 'fedml login $YourUserId' to log into the MLOps platform.
```
root@142ffce4cdf8:/#
root@142ffce4cdf8:/# fedml login 1606
```

And also, you may enter into the $WORKSPACE which is your host directory to run your own examples:
```
root@142ffce4cdf8:/#
root@142ffce4cdf8:/# cd $WORKSPACE
root@142ffce4cdf8:/home/fedml/fedml_source#
```

### FedML Light Docker Image

**(1) Run light Docker with interactive mode**

The light docker is a smaller image about 2.3GB size. So it can pull and run more smoothly.
The light docker just supports cpu arch. So, if you want to use the GPU, you should use the above standard Docker with gpu options.
Each docker image needs more than 5GB memory size to run the fedml learning task.
(This is estimated with the MNist dataset, if you use other dataset, Maybe the memory size is larger or smaller than the size with the MNist dataset)
So, you need to reserve sufficient memory size for your federated learning task.
On MacOS, you should set memory size in the navigation path DockerDesktop -> Preference -> Resource -> Memory.
If you want to run three docker containers simultaneously, you need to set the resource memory to not less than 15GB.

```
FEDML_DOCKER_IMAGE=fedml/fedml:light
LOCAL_WORKSPACE=$PleaseUseYourLocalDirectory
DOCKER_WORKSPACE=/home/fedml/fedml_source

docker run -v $LOCAL_WORKSPACE:$DOCKER_WORKSPACE --shm-size=64g --ulimit nofile=65535 --ulimit memlock=-1 --privileged --network=host --env WORKSPACE=$DOCKER_WORKSPACE -ti $FEDML_DOCKER_IMAGE /bin/bash
```

You should now see a prompt that looks something like,
you may run the 'fedml login $YourUserId' to log into the MLOps platform.
```
root@142ffce4cdf8:/#
root@142ffce4cdf8:/# fedml login 1606
```

And also, you may enter into the $WORKSPACE which is your host directory to run your own examples:
```
root@142ffce4cdf8:/#
root@142ffce4cdf8:/# cd $WORKSPACE
root@142ffce4cdf8:/home/fedml/fedml_source#
```

**(2) Run light Docker with daemon mode and automatically log into the MLOps platform**

You may run the light docker as the daemon mode and automatically log into the MLOps platform as the client.
The commands ars as follows:

```
FEDML_DOCKER_IMAGE=fedml/fedml:light
LOCAL_WORKSPACE=$PleaseUseYourLocalDirectory
DOCKER_WORKSPACE=/home/fedml/fedml_source
YOUR_FEDML_USER_ID=1606

docker run -v $LOCAL_WORKSPACE:$DOCKER_WORKSPACE --shm-size=64g --ulimit nofile=65535 --ulimit memlock=-1 --privileged --network=host --env WORKSPACE=$DOCKER_WORKSPACE -d $FEDML_DOCKER_IMAGE bash -c 'fedml login '$YOUR_FEDML_USER_ID';sleep 100000'
```

You may run the light docker as the daemon mode and automatically log into the MLOps platform as the server with the option '-s'.
The commands ars as follows:

```
FEDML_DOCKER_IMAGE=fedml/fedml:light
LOCAL_WORKSPACE=$PleaseUseYourLocalDirectory
DOCKER_WORKSPACE=/home/fedml/fedml_source
YOUR_FEDML_USER_ID=1606

docker run -v $LOCAL_WORKSPACE:$DOCKER_WORKSPACE --shm-size=64g --ulimit nofile=65535 --ulimit memlock=-1 --privileged --network=host --env WORKSPACE=$DOCKER_WORKSPACE -d $FEDML_DOCKER_IMAGE bash -c 'fedml login -s '$YOUR_FEDML_USER_ID';sleep 100000'
```

After you run the above command, the terminal will show the container id like the following format.
`b0769135f8e65c5b0b7b7cb9666f3f910a4e431c25084ed72ae059ea1a6376af`

If you want to show logs for the fedml light container, you may run the following command with the above container id.
```
docker logs b0769135f8e65c5b0b7b7cb9666f3f910a4e431c25084ed72ae059ea1a6376af
```

If you want to list the fedml light containers, you may run the command.
```
docker ps |grep fedml:light
```

If you want to kill all fedml light containers, the command is as follows.
```
docker stop `docker ps |grep fedml:light |awk -F' ' '{print $1}'`
```

**(4) Run the interpreter in PyCharm or Visual Studio using Docker environment**

- PyCharm

[https://www.jetbrains.com/help/pycharm/using-docker-as-a-remote-interpreter.html#summary](https://www.jetbrains.com/help/pycharm/using-docker-as-a-remote-interpreter.html#summary)

- Visual Studio

[https://code.visualstudio.com/docs/remote/containers](https://www.jetbrains.com/help/pycharm/using-docker-as-a-remote-interpreter.html#summary)

**(4) Other useful commands**
```
# docker rm $(docker ps -aq)
docker container kill $(docker ps -q)
```