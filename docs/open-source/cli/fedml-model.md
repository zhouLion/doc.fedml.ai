---
sidebar_position: 8
---
# Model Deployment - fedml model

## FedML Model CLI Overview
```
Usage: fedml model [OPTIONS] COMMAND [ARGS]...

Options:
  -h, --help  Show this message and exit.

Commands:
  create  Create a model card in local environment.
  push    Push a model card (local or S3) to remote.
  deploy  Deploy model to the local | on-premise | GPU Cloud.
  pull    Pull a model card from Nexus AI Platform to local.
  list    List model card(s) at local environment or Nexus AI Platform.
  delete  Delete a local or remote model card.
```

### `fedml model create [OPTIONS]`

Create a model card in local environment.

#### Options {#options-1}

| Name                      | Default | Description                                                  |
|---------------------------|---------|--------------------------------------------------------------|
| `--name` or `-n`          |         | Model Card name.  [required]                                 |
| `--model` or `-m`         | `None`  | Indicate a pre-built model from Hugging Face or GitHub       |
| `--model_config` or `-cf` | `None`  | Yaml file path that will be used to create a new model card. |
| `--version` or `-v`       | `release` | The backend environment of FEDML Nexus AI Cloud.             |


#### Examples {#example-1}

##### Create a model card using a pre-built model.
```
fedml model create -n my_model -m hf:EleutherAI/pythia-70m
```

##### Create a model card using a model config yaml file.
```
fedml model create -n my_model -cf my_model_config.yaml
```

### `fedml model deploy [OPTIONS]`

Deploy model to the Local | On-premise | GPU Cloud.

#### Options {#options-1}

| Name                   | Default | Description                                      |
|------------------------|---------|--------------------------------------------------|
| `--name` or `-n`       |         | Model Card name.  [required]                     |
| `--local` or `-l`      |         | Deploy model locally. [isflag]                   |
| `--master_ids` or `-m` | `None`  | Device Id(s) for on-premise master node(s).      |
| `--worker_ids` or `-w` | `None`  | Device Id(s) for on-premise worker node(s).      |
| `--version` or `-v`       | `release` | The backend environment of FEDML Nexus AI Cloud. |

#### Examples {#example-1}

##### Deploy a model in local environment.
```
fedml model deploy -n my_model --local
```

##### Deploy a model card to GPU Cloud.
```
fedml model deploy -n my_model
```

##### Deploy a model card to on-premise device.
login your device to Nexus AI Platform.
```
fedml login $api_key
```
Check your device id on Nexus AI Platform (In our example is 32314).  
![OnPremDevices.jpg](pic%2FgetDeviceId.jpg)

For single machine deploy, use same device id: 32314 for master and worker.
```
fedml model deploy -n my_model -m 32314 -w 32314
```

### `fedml model push [OPTIONS]`

Push a model card (local or S3) to remote.

#### Options {#options-1}

| Name                          | Default | Description                                 |
|-------------------------------|---------|---------------------------------------------|
| `--name` or `-n`              |         | Model Card name.  [required]                |
| `--model_storage_url` or `-s` | `None`  | A S3 address to the model card zip file. |
| `--version` or `-v`           | `release` | The backend environment of FEDML Nexus AI Cloud.             |

#### Examples {#example-1}
##### Push a local model card to Nexus AI Platform.
```
fedml model push -n my_model
```

### `fedml model pull [OPTIONS]`

Pull a model card from Nexus AI Platform to local.

#### Options {#options-1}

| Name                          | Default | Description                                 |
|-------------------------------|---------|---------------------------------------------|
| `--name` or `-n`              |         | Model Card name.  [required]                |
| `--version` or `-v`           | `release` | The backend environment of FEDML Nexus AI Cloud.             |

#### Examples {#example-1}
##### Pull a local model card from Nexus AI Platform.
```
fedml model pull -n my_model
```

### `fedml model list [OPTIONS]`

List model card(s) at local environment or Nexus AI Platform.

#### Options {#options-1}

| Name                          | Default   | Description                                    |
|-------------------------------|-----------|------------------------------------------------|
| `--name` or `-n`              | `"*"`     | Model Card name(s).                  |
| `--local` or `-l`      |           | List Local Model. [isflag]                     |
| `--version` or `-v`           | `release` | The backend environment of FEDML Nexus AI Cloud. |

#### Examples {#example-1}
##### List all model cards from Nexus AI Platform.
```
fedml model list
```
##### List all local model cards.
```
fedml model list -l
```
##### List two model cards at Nexus AI Platform.
```
fedml model list -n my_model, my_model2
```

### `fedml model delete [OPTIONS]`

Delete a local or remote model card.

#### Options {#options-1}

| Name                          | Default | Description                                      |
|-------------------------------|------|--------------------------------------------------|
| `--name` or `-n`              |      | Model Card name. [required]                      |
| `--local` or `-l`      |      | Delete a Local Model. [isflag]                   |
| `--version` or `-v`           | `release` | The backend environment of FEDML Nexus AI Cloud. |

#### Examples {#example-1}
##### Delete a model card from Nexus AI Platform.
```
fedml model delete -n my_model
```
##### Delete a local model card.
```
fedml model delete -n my_model -l
```