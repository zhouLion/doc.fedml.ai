# Installation

## Installing using pip
Please make sure the installed Python version in your system is one of the following: 3.8, 3.9, 3.10.

```
pip install fedml
```

## Installing using conda
In the example below, we use Python version 3.8 but feel free to use another version from the supported versions: 3.9, 3.10.

```
conda create --name fedml-pip python=3.8
conda activate fedml-pip
conda install --name fedml-pip pip
pip install fedml
```

## Installation testing
If the installation is successful, you will not see any issue when importing `fedml`.
```shell
Python 3.9.6 (default, Aug 11 2023, 19:44:49) 
[Clang 15.0.0 (clang-1500.0.40.1)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> import fedml
>>> 
```

## Installing additional ML engines
The default machine learning engine is `PyTorch`. FedML also supports `TensorFlow`, `Jax`, and `MXNet`. Engines can be installed individually,

```
pip install "fedml[tensorflow]"
pip install "fedml[jax]"
pip install "fedml[mxnet]"
```

or altogether.
```
pip install "fedml[tensorflow,jax,mxnet]"
```

## Installing with MPI support
The [MPI](https://mpi4py.readthedocs.io/en/stable/) message exchanging mechanism is used to execute a local distributed simulation.

```
pip install "fedml[MPI]"
```

## Installing from source
First we need to clone the main repository and then install the FedML package using the `setup.py` script.
```
git clone https://github.com/FedML-AI/FedML.git && \
cd ./FedML/python && \
python setup.py install
```

If you want to run examples with TensorFlow, JAX or MXNet, you need to install the respective optional dependencies.
```
git clone https://github.com/FedML-AI/FedML.git && \
cd ./FedML/python && \
python install -e '.[tensorflow]'
python install -e '.[jax]'
python install -e '.[mxnet]'
```

<!-- (Notes: Tensorflow example located in tf_mqtt_s3_fedavg_mnist_lr_example directory, Jax example location in jax_haiku_mqtt_s3_fedavg_mnist_lr_example directory) -->

If you need to install from a specific commit (usually for debug/dev purposes), please follow the commands below.
:::info
Remember to change the COMMIT_ID placeholder to the required id (look at the [GitHub Commits](https://github.com/FedML-AI/FedML/commits/master) page for all ids).
:::

```
git clone https://github.com/FedML-AI/FedML.git && \
cd ./FedML && git checkout COMMIT_ID && \
cd python && \
python setup.py install
```


## Installation troubleshooting
If you meet any issues during installation or you have additional installation requirements, please post the issue at the [GitHub Issue](https://github.com/FedML-AI/FedML/issues) page.


