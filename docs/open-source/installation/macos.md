# MacOS

A step-by-step installation guide of FedML on MacOS.

:::info
For MacOS systems, we suggest using Conda to install python 3.8+ and related libraries.
:::

## Installing MPI
For OpenMPI on MacOS, please review the following links:
[https://betterprogramming.pub/integrating-open-mpi-with-clion-on-apple-m1-76b7815c27f2](https://formulae.brew.sh/formula/open-mpi)
[https://formulae.brew.sh/formula/open-mpi](https://formulae.brew.sh/formula/open-mpi). You can install MPI using conda by running:

```
conda install mpi4py openmpi
```

## Resolve compatibility issues


- If you have installed Python on an Apple Silicon Mac using Homebrew, and encounter problems when running "pip install fedml", you can fix this by making sure the python and pip bin paths point to Conda not HomeBrew:
    1. In ~/.bash_profile and ~/.zprofile, the path to python bin file, need to be the Conda python file location.
    2. In ~/.bash_profile and ~/.zprofile, the path to pip bin file, need to be the Conda pip file location.

- For proper installation of TensorFlow/JAX/MXNet please follow the official guidelines to fix related installation issues

- If you encounter any C/C++ compiler issue, please try:

    `conda install … `

:::tip
For Installing FedML in Debugging and Editable Mode, please refer to the [Installing from source](./installation.md#installing-from-source) section.
:::