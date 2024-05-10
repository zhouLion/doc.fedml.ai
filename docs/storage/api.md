---
sidebar_position: 3
---
# Python APIs

## FedML Storage API Overview

Storage APIs help in managing all the data needs that is typically associated with AI workloads.


#### Example Usage

```python
import fedml
from fedml.api.fedml_response import ResponseCode

API_KEY = "api_key"

DATA_PATH = "path/to/data"
DATA_NAME = "new_name_for_data_directory or file"
STORAGE_SERVICE = "R2"
DATA_DESCRIPTION = "description of data uploaded"
metadata = {'key': 'value'}

response = fedml.api.upload(
    data_path=DATA_PATH,
    api_key=API_KEY,
    service=STORAGE_SERVICE,
    name=DATA_NAME,
    description=DATA_DESCRIPTION,
    metadata=metadata,
    show_progress=True
)

if response.code == ResponseCode.SUCCESS:
  print("Data has been uploaded!")
else:
  print("Issue in uploading the data.")

```

More about the storage APIs can be found [here](../open-source/api/api-storage#storage-apis)

