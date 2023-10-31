---
sidebar_position: 9
---
# Federated Learning - fedml federate

### `fedml federate build [OPTIONS]`

#### Options {#options-1}

| Name                          | Default | Description                                                                               |
|-------------------------------|---------|-------------------------------------------------------------------------------------------|
| `--server` or `-s`            | `false` | Build the server package, default is building client package.                             |
| `--source_folder` or `-sf`    | `false` | Source code folder path.                                                               |
| `--entry_point` or `-ep`      | `false` | Entry point of the source code.                                                        |
| `--entry_args` or `-ea`       | `false` | Entry arguments of the entry point program.                                                |
| `--config_folder` or `-cf`    | `false` | Config folder path.                                                                    |
| `--dest_folder` or `-df`      | `false` | Destination package folder path.                                                       |
| `--ignore` or `-ig`           | `false` | Ignore list for copying files, the format is as follows: *.model,__pycache__,*.data*. |
| `--model_name` or `-m`        | `false` | Model name for training.                                                                  |
| `--model_cache_path` or `-mc` | `false` | Model cache path for training.                                                            |
| `--input_dim` or `-mi`        | `false` | Input dimensions for training.                                                            |
| `--output_dim` or `-mo`       | `false` | Output dimensions for training.                                                           |
| `--dataset_name` or `-dn`     | `false` | Dataset name for training.                                                                |
| `--dataset_type` or `-dt`     | `false` | Dataset type for training.                                                                |
| `--dataset_path` or `-dp`     | `false` | Dataset path for training.                                                                |

At first, you need to define your package properties as follows.
If you want to ignore some folders or files, you may specify the ignore argument
or add them to the .gitignore file in the source code folder.

#### Required arguments:
source code folder, entry file, entry arguments,
config folder, built destination folder

#### Optional arguments:
You may define the model and data arguments using the command arguments as follows:
```
model name, model cache path, model input dimension, model output dimension,
dataset name, dataset type, dataset path.
```

Also, you may define the model and data arguments using the file named fedml_config.yaml as follows:
```
fedml_data_args:
  dataset_name: mnist
  dataset_path: ./dataset
  dataset_type: csv
    
fedml_model_args:
  input_dim: '784'
  model_cache_path: /Users/alexliang/fedml_models
  model_name: lr
  output_dim: '10'
```

The above model and data arguments will be mapped to the equivalent environment variables as follows:
```
dataset_name = $FEDML_DATASET_NAME
dataset_path = $FEDML_DATASET_PATH
dataset_type = $FEDML_DATASET_TYPE
model_name = $FEDML_MODEL_NAME
model_cache_path = $FEDML_MODEL_CACHE_PATH
input_dim = $FEDML_MODEL_INPUT_DIM
output_dim = $FEDML_MODEL_OUTPUT_DIM
```

Your may pass these environment variables as your entry arguments, e.g.,
```
ENTRY_ARGS_MODEL_DATA='-m $FEDML_MODEL_NAME -mc $FEDML_MODEL_CACHE_PATH -mi $FEDML_MODEL_INPUT_DIM -mo $FEDML_MODEL_OUTPUT_DIM -dn $FEDML_DATASET_NAME -dt $FEDML_DATASET_TYPE -dp $FEDML_DATASET_PATH'
```

#### Examples {#example-1}
```
# Define the federated package properties
SOURCE_FOLDER=.
ENTRY_FILE=train.py
ENTRY_ARGS='--epochs 1'
ENTRY_ARGS_MODEL_DATA='-m $FEDML_MODEL_NAME -mc $FEDML_MODEL_CACHE_PATH -mi $FEDML_MODEL_INPUT_DIM -mo $FEDML_MODEL_OUTPUT_DIM -dn $FEDML_DATASET_NAME -dt $FEDML_DATASET_TYPE -dp $FEDML_DATASET_PATH'
CONFIG_FOLDER=config
DEST_FOLDER=./mlops
MODEL_NAME=lr
MODEL_CACHE=~/fedml_models
MODEL_INPUT_DIM=784
MODEL_OUTPUT_DIM=10
DATASET_NAME=mnist
DATASET_TYPE=csv
DATASET_PATH=./dataset

# Build the federated client package with the model and data arguments
fedml federate build -sf $SOURCE_FOLDER -ep $ENTRY_FILE -ea "$ENTRY_ARGS" \
  -cf $CONFIG_FOLDER -df $DEST_FOLDER \
  -m $MODEL_NAME -mc $MODEL_CACHE -mi $MODEL_INPUT_DIM -mo $MODEL_OUTPUT_DIM \
  -dn $DATASET_NAME -dt $DATASET_TYPE -dp $DATASET_PATH

# Build the federated client package without the model and data arguments
# fedml federate build -sf $SOURCE_FOLDER -ep $ENTRY_FILE -ea "$ENTRY_ARGS" \
#  -cf $CONFIG_FOLDER -df $DEST_FOLDER 
 
# Define the federated server package properties
ENTRY_FILE=torch_server.py

# Build the federated server package with the model and data arguments
fedml federate build -s -sf $SOURCE_FOLDER -ep $ENTRY_FILE -ea "$ENTRY_ARGS" \
  -cf $CONFIG_FOLDER -df $DEST_FOLDER \
  -m $MODEL_NAME -mc $MODEL_CACHE -mi $MODEL_INPUT_DIM -mo $MODEL_OUTPUT_DIM \
  -dn $DATASET_NAME -dt $DATASET_TYPE -dp $DATASET_PATH
  
# Build the federated server package without the model and data arguments
# fedml federate build -s -sf $SOURCE_FOLDER -ep $ENTRY_FILE -ea "$ENTRY_ARGS" \
#  -cf $CONFIG_FOLDER -df $DEST_FOLDER
```