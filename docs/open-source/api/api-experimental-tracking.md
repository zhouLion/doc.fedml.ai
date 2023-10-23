---
sidebar_position: 2
---

# Experimental Tracking APIs

### `fedml.log()`

**Usage**
```py
fedml.log(
    metrics: dict,
    step: int = None,
    customized_step_key: str = None,
    commit: bool = True) -> None
```

**Arguments**
- `metrics (dict)`: A dictionary object for metrics, e.g., {"accuracy": 0.3, "loss": 2.0}.
- `step (int=None)`: Set the index for current metric. If this value is none, then step will be the current global step counter.
- `customized_step_key (str=None)`: Specify the customized step key, which must be one of the keys in the metrics dictionary.
- `commit (bool=True)`: If commit is false, the metrics dictionary will be saved to memory and won't be committed until commit is true.

**Returns**  
None. 

log dictionary of metric data to the FedML® Nexus AI Platform.


**Examples**
```py
    fedml.log({"ACC": 0.1})
    fedml.log({"acc": 0.11})
    fedml.log({"acc": 0.2})
    fedml.log({"acc": 0.3})
    
    fedml.log({"acc": 0.31}, step=1)
    fedml.log({"acc": 0.32, "x_index": 2}, step=2, customized_step_key="x_index")
    fedml.log({"loss": 0.33}, customized_step_key="x_index", commit=False)
    fedml.log({"acc": 0.34}, step=4, customized_step_key="x_index", commit=True)
    
    fedml.log_metric({"acc": 0.8})
```

