---
sidebar_position: 4
---

# API Reference

### `fedml.init()`
```py
fedml.init(path: str, output: str=None, alias: str=None) -> None
```
**Usage**


**Arguments**  
- `path (str)`: Prefs file's path.
- `output (str=None)`: Output path (by default same as `path` but appending `_resource` to the filename).
- `alias (str=None)`: An alias to reference it when reading (by default the same as the `path`).

**Returns**  
None. 

Creates a resource module (_Python_ file) with the given prefs file that you can import in a _Python_ module to get those prefs without having the prefs file itself.

:::info
This is explained at [Resources](../resources#how-to-create-a-resource-module) page.
:::

**Examples**  
```py title="prefs.prefs"
#PREFS
lang='en'
theme=>
    background='#199396'
    font='UbuntuMono'
```
```py
import prefs

prefs.bundle("prefs.prefs")
```
```py title="prefs_resource.py"
# PREFS resource module
# Created using PREFS Python library
# https://patitotective.github.io/PREFS
# Do not modify this file
__version__ = '0.3.0'
CONTENT = {'lang': 'en', 'theme': {'background': '#199396', 'font': 'UbuntuMono'}}
ALIAS = 'prefs.prefs'
```
