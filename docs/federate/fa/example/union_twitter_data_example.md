# FedML Federated Analytics - Example with union analytics + Twitter Data


This example demonstrates how to complete a union analytics task using Twitter Sentiment140 dataset. The source code locates at [https://github.com/FedML-AI/FedML/tree/master/python/examples/federated_analytics/union_twitter_data_example](https://github.com/FedML-AI/FedML/tree/master/python/examples/federated_analytics/union_twitter_data_example). 


> **If you have multiple nodes, you should run the client script on each node**

## APIs

The highly encapsulated server and client API calls are shown as below:

`run_server.sh` is as follows:


```shell
#!/usr/bin/env bash

RUN_ID=$1
python3 server.py --cf fedml_config.yaml --rank 0 --role server --run_id $RUN_ID
```

`server.py`

```python
from fedml.fa import init, FARunner
from fedml.fa.data import fa_load_data


if __name__ == "__main__":
    args = init()
    dataset = fa_load_data(args)
    fa_runner = FARunner(args, dataset)
    fa_runner.run()
```

`run_client.sh`


```shell
#!/usr/bin/env bash
RANK=$1
RUN_ID=$2
python3 client.py --cf fedml_config.yaml --rank $RANK --role client --run_id $RUN_ID
```

`client.py`

```python
from fedml.fa import init, FARunner
from fedml.fa.data import fa_load_data

if __name__ == "__main__":
    args = init()
    dataset = fa_load_data(args)
    fa_runner = FARunner(args, dataset)
    fa_runner.run()
```

At the client side, the client ID (a.k.a rank) starts from 1. Please also modify fedml_config.yaml, changing the `client_num_in_total` the as the number of clients you plan to run.

At the server side, run the following script:
```
bash run_server.sh a
```

For client 1, run the following script:
```
bash run_client.sh 1 a
```
For client 2, run the following script:
```
bash run_client.sh 2 a
```



`fedml_config.yaml` is shown below.

```yaml
common_args:
  training_type: "cross_silo"
  random_seed: 0

data_args:
  dataset: "twitter"
  data_cache_dir: ~/fedml_data

train_args:
  client_num_in_total: 2
  client_num_per_round: 2
  comm_round: 10
  fa_task: "union"

comm_args:
  backend: "MQTT_S3"
```

### Analyzing Results

At the end of the analysis, the server window will display the following log:

```shell
[FedML-Server @device-id-0] [Wed, 01 Nov 2023 07:18:07] [INFO] [__init__.py:19:event] FedMLDebug edge_id = None, event_name = server.wait, START = True
[FedML-Server @device-id-0] [Wed, 01 Nov 2023 07:18:07] [INFO] [fedml_server_manager.py:154:handle_message_receive_model_from_client] =============analyzing is finished. Cleanup...============
[FedML-Server @device-id-0] [Wed, 01 Nov 2023 07:18:07] [INFO] [mqtt_s3_multi_clients_comm_manager.py:260:send_message] mqtt_s3.send_message: msg topic = fedml_a_0_1
[FedML-Server @device-id-0] [Wed, 01 Nov 2023 07:18:07] [INFO] [fedml_server_manager.py:198:send_message_finish] finish from send id 0 to receive id 1.
[FedML-Server @device-id-0] [Wed, 01 Nov 2023 07:18:07] [INFO] [fedml_server_manager.py:200:send_message_finish]  ====================send cleanup message to 0====================
[FedML-Server @device-id-0] [Wed, 01 Nov 2023 07:18:07] [INFO] [mqtt_s3_multi_clients_comm_manager.py:260:send_message] mqtt_s3.send_message: msg topic = fedml_a_0_2
[FedML-Server @device-id-0] [Wed, 01 Nov 2023 07:18:07] [INFO] [fedml_server_manager.py:198:send_message_finish] finish from send id 0 to receive id 2.
[FedML-Server @device-id-0] [Wed, 01 Nov 2023 07:18:07] [INFO] [fedml_server_manager.py:200:send_message_finish]  ====================send cleanup message to 1====================
[FedML-Server @device-id-0] [Wed, 01 Nov 2023 07:18:10] [INFO] [fedml_comm_manager.py:67:finish] __finish
[FedML-Server @device-id-0] [Wed, 01 Nov 2023 07:18:10] [INFO] [mqtt_s3_multi_clients_comm_manager.py:332:stop_receive_message] mqtt_s3.stop_receive_message: stopping...
[FedML-Server @device-id-0] [Wed, 01 Nov 2023 07:18:10] [INFO] [fedml_comm_manager.py:29:run] finished...
```

At the end of the analysis, the client 1 window will display the following log:


```shell
[FedML-Client @device-id-1] [Wed, 01 Nov 2023 07:18:12] [INFO] [fedml_client_master_manager.py:85:handle_message_finish]  ====================cleanup ====================
[FedML-Client @device-id-1] [Wed, 01 Nov 2023 07:18:12] [INFO] [fedml_comm_manager.py:67:finish] __finish
[FedML-Client @device-id-1] [Wed, 01 Nov 2023 07:18:12] [INFO] [mqtt_s3_multi_clients_comm_manager.py:332:stop_receive_message] mqtt_s3.stop_receive_message: stopping...
[FedML-Client @device-id-1] [Wed, 01 Nov 2023 07:18:12] [INFO] [fedml_comm_manager.py:29:run] finished...
```

At the end of the analysis, the client 2 window will display the following log:

```shell
[FedML-Client @device-id-2] [Wed, 01 Nov 2023 07:18:11] [INFO] [fedml_client_master_manager.py:85:handle_message_finish]  ====================cleanup ====================
[FedML-Client @device-id-2] [Wed, 01 Nov 2023 07:18:11] [INFO] [fedml_comm_manager.py:67:finish] __finish
[FedML-Client @device-id-2] [Wed, 01 Nov 2023 07:18:11] [INFO] [mqtt_s3_multi_clients_comm_manager.py:332:stop_receive_message] mqtt_s3.stop_receive_message: stopping...
[FedML-Client @device-id-2] [Wed, 01 Nov 2023 07:18:11] [INFO] [fedml_comm_manager.py:29:run] finished...
```
