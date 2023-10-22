---
sidebar_position: 4
---

# FEDML Deploy APIs

### `fedml.api.model_create()`
```py
fedml.api.model_create(name: str, config_file_path: str) -> bool
```

### `fedml.api.model_delete()`
```py
fedml.api.model_delete(name: str) -> bool
```

### `fedml.api.model_list()`
```py
fedml.api.model_list(name: str = "*", local: bool = True, api_key: str = None) -> bool
```

### `fedml.api.model_package()`
```py
fedml.api.model_list_remote(name: str) -> bool
```

### `fedml.api.model_push()`
```py
fedml.api.model_push(name: str, model_storage_url: str = None, model_net_url: str = None, api_key: str = None) -> bool
```

### `fedml.api.model_pull()`
```py
fedml.api.model_pull(name: str, api_key: str = None) -> bool
```

### `fedml.api.model_deploy()`
```py
fedml.api.model_deploy(local: bool, name: str, api_key: str = None, master_ids: str = None, worker_ids: str = None) -> bool
```