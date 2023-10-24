---
sidebar_position: 5
---
#  Cluster Management - fedml cluster

## FedML Cluster CLI Overview

Manage clusters on FedML® Nexus AI Platform

```
Usage: fedml cluster [OPTIONS] COMMAND [ARGS]...

  Manage clusters on FedML® Nexus AI Platform

Options:
  -h, --help          Show this message and exit.
  -k, --api_key TEXT  user api key.
  -v, --version TEXT  specify version of FedML® Nexus AI Platform. It should
                      be dev, test or release

Commands:
  kill      Kill (tear down) clusters from FedML® Nexus AI Platform
  killall   Kill (tear down) ALL clusters from FedML® Nexus AI Platform
  list      List clusters from FedML® Nexus AI Platform
  start     Start clusters from FedML® Nexus AI Platform
  startall  Start ALL clusters from FedML® Nexus AI Platform
  status    Status of clusters from FedML® Nexus AI Platform
  stop      Stop clusters from FedML® Nexus AI Platform
  stopall   Stop ALL clusters from FedML® Nexus AI Platform
```


### `fedml cluster kill [OPTIONS] [CLUSTER_NAMES]...`

Kill (tear down) clusters from FedML® Nexus AI Platform

#### Options

| Option          | Description                                                                                                                       |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------|
| -h, --help      | Show this message and exit                                                                                                        |
| -k, --api_key   | user api key.                                                                                                                     |
| -v, --version   | version of FedML® Nexus AI Platform. It should be dev, test or release                                                            |


> **_NOTE:_** Note that kill is different from stop. Clusters once killed cannot be restarted.

#### Example

###### Kill selected clusters on the FedML® Nexus AI Platform

```
fedml cluster kill demo_cluster
Clusters have been killed.
```

### `fedml cluster killall [OPTIONS]`

Kill (tear down) ALL clusters from FedML® Nexus AI Platform

#### Options

| Option          | Description                                                                                                                       |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------|
| -h, --help      | Show this message and exit                                                                                                        |
| -k, --api_key   | user api key.                                                                                                                     |
| -v, --version   | version of FedML® Nexus AI Platform. It should be dev, test or release                                                            |


> **_NOTE:_** Note that kill is different from stop. Clusters once killed cannot be restarted.

#### Example

###### Kill ALL clusters on the FedML® Nexus AI Platform

```
fedml cluster killall

Found the following matching clusters.
+-----------------------+---------------------+------------+
|      Cluster Name     |      Cluster ID     |   Status   |
+-----------------------+---------------------+------------+
|        cluster        | 1706329273733877760 |    IDLE    |
|      test_cluster     | 1709098658206715904 |    IDLE    |
|      demo_cluster     | 1716580036024340480 |    IDLE    |
+-----------------------+---------------------+------------+

Are you sure you want to kill these clusters? [y/N]: y
Clusters have been killed.
```

### `fedml cluster list [OPTIONS] [CLUSTER_NAMES]...`

List clusters from FedML® Nexus AI Platform

#### Options

| Option          | Description                                                                                                                       |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------|
| -h, --help      | Show this message and exit                                                                                                        |
| -k, --api_key   | user api key.                                                                                                                     |
| -v, --version   | version of FedML® Nexus AI Platform. It should be dev, test or release                                                            |


#### Example

###### List selected clusters from FedML® Nexus AI Platform

```
fedml cluster list test_cluster demo_cluster


Found the following matching clusters.
+--------------+---------------------+------------+
| Cluster Name |      Cluster ID     |   Status   |
+--------------+---------------------+------------+
| test_cluster | 1709098658206715904 |    IDLE    |
| demo_cluster | 1716580036024340480 | TERMINATED |
+--------------+---------------------+------------+
```

###### List ALL clusters from FedML® Nexus AI Platform

```
fedml cluster list

Found the following matching clusters.
+-----------------------+---------------------+------------+
|      Cluster Name     |      Cluster ID     |   Status   |
+-----------------------+---------------------+------------+
|        cluster        | 1706329273733877760 |    IDLE    |
|      test_cluster     | 1709098658206715904 |    IDLE    |
|      demo_cluster     | 1716580036024340480 | TERMINATED |
+-----------------------+---------------------+------------+
```

### `fedml cluster start [OPTIONS] [CLUSTER_NAMES]...`

Start clusters from FedML® Nexus AI Platform

#### Options

| Option          | Description                                                                                                                       |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------|
| -h, --help      | Show this message and exit                                                                                                        |
| -k, --api_key   | user api key.                                                                                                                     |
| -v, --version   | version of FedML® Nexus AI Platform. It should be dev, test or release                                                            |


#### Example

```
fedml cluster start my_cluster

Cluster my_cluster have been started.
```

### `fedml cluster startall [OPTIONS]`

Start ALL clusters from FedML® Nexus AI Platform

#### Options

| Option          | Description                                                                                                                       |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------|
| -h, --help      | Show this message and exit                                                                                                        |
| -k, --api_key   | user api key.                                                                                                                     |
| -v, --version   | version of FedML® Nexus AI Platform. It should be dev, test or release                                                            |


#### Example

```
fedml cluster startall

Found the following matching clusters.
+----------------------------+---------------------+------------+
|      Cluster Name          |      Cluster ID     |   Status   |
+----------------------------+---------------------+------------+
|      stopped_cluster_1     | 1716572336024340480 |   STOPPED  |
|      stopped_cluster_1     | 1716589476024340480 |   STOPPED  |
+----------------------------+---------------------+------------+
Are you sure you want to start these clusters? [y/N]: y

Clusters have been started.
```


### `fedml cluster status [OPTIONS] CLUSTER_NAME`

Status of clusters from FedML® Nexus AI Platform

#### Options

| Option          | Description                                                                                                                       |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------|
| -h, --help      | Show this message and exit                                                                                                        |
| -k, --api_key   | user api key.                                                                                                                     |
| -v, --version   | version of FedML® Nexus AI Platform. It should be dev, test or release                                                            |


#### Example

```
fedml cluster status demo_cluster

Found the following matching clusters.
+--------------+---------------------+------------+
| Cluster Name |      Cluster ID     |   Status   |
+--------------+---------------------+------------+
| demo_cluster | 1716580036024340480 | TERMINATED |
+--------------+---------------------+------------+
```

### `fedml cluster stop [OPTIONS] [CLUSTER_NAMES]...`

Stop clusters from FedML® Nexus AI Platform

#### Options

| Option          | Description                                                                                                                       |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------|
| -h, --help      | Show this message and exit                                                                                                        |
| -k, --api_key   | user api key.                                                                                                                     |
| -v, --version   | version of FedML® Nexus AI Platform. It should be dev, test or release                                                            |


```
fedml cluster stop test_cluster

Cluster test_cluster have been stopped.
```

### `fedml cluster stopall [OPTIONS]`

Stop ALL clusters from FedML® Nexus AI Platform

#### Options

| Option          | Description                                                                                                                       |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------|
| -h, --help      | Show this message and exit                                                                                                        |
| -k, --api_key   | user api key.                                                                                                                     |
| -v, --version   | version of FedML® Nexus AI Platform. It should be dev, test or release                                                            |


#### Example

```
fedml cluster stopall

Found the following matching clusters.
+-----------------------+---------------------+------------+
|      Cluster Name     |      Cluster ID     |   Status   |
+-----------------------+---------------------+------------+
|       cluster_1       | 1710441695482613760 |    IDLE    |
|       cluster_2       | 1710531574782627840 |    IDLE    |
|       cluster_3       | 1710540968601718784 |    IDLE    |
+-----------------------+---------------------+------------+
Are you sure you want to stop these clusters? [y/N]: y

Clusters have been stopped.
```

