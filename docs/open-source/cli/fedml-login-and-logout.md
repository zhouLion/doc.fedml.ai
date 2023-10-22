---
sidebar_position: 2
---
# Platform Login/Logout - fedml login/logout

### `fedml login [OPTIONS] <API_KEY>`

Compiles your site for production.

#### Options {#options-1}

| Name | Default | Description |
| --- | --- | --- |
| `--client` or `-c` | `true` | bind as a client in FEDML Nexus AI Cloud |
| `--server` or `-s` | `false` | bind as a server in FEDML Nexus AI Cloud |
| `--version` or `-v` | `false` | The backend environment of FEDML Nexus AI Cloud. It supports values: `local`, `dev`, `test`, `release`. This is normally used by FEDML team for internal development. |

#### Arguments {#argument-1}
| Name | Default | Description |
| --- | --- | --- |
| `--api_key` or `-c` |  | You can find your API Key at https://nexus.fedml.ai. Click your avatar on top-right area and then click "Profile". |

#### Examples {#example-1}

Login as a client in FEDML Nexus AI Cloud:
```
fedml login -c <API_KEY>
```