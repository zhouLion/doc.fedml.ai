---
sidebar_position: 8
---

# Launch Python APIs

## FedML Launch API Overview

Simple launcher apis for running any AI job across multiple public and/or decentralized GPU clouds, offering lower prices without cloud vendor lock-in, the highest GPU availability, training across distributed low-end GPUs, and user-friendly Ops to save time on environment setup.


#### Example Usage

```python
import fedml
api_key="YOUR_API_KEY"
yaml_file = "/home/fedml/train.yaml"
login_ret = fedml.api.fedml_login(api_key)
if login_ret == 0:
    launch_result = fedml.api.launch_job(yaml_file)
    if launch_result.result_code == 0:
        print("Job launched successfully")
    else:
        print("Failed to launch job")
```

More about the launch API can be found [here](../open-source/api/api-launch)
