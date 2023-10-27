# MacOS

A step-by-step installation guide of FedML on MacOS.

## Compatibility with HomeBrew-Installed Python On Apple Silicon Mac
If you are using Apple Silicon MAC, we suggest using Conda to install python 3.8+ and related lib on your device.

But if you have used HomeBrew to install python, and having problem with running "pip install fedml" command, in this case you need to ensure:

a. Two environment path on your device need to be specify to use Conda not HomeBrew:

(1)  In ~/.bash_profile and ~/.zprofile, the path to python bin file, need to be Conda python file location.

(2)  In ~/.bash_profile and ~/.zprofile, the path to pip bin file, need to be Conda pip file location.

b. When you encounter with C/C++ compiler issue, try:

(3) conda install …

## Installing FedML from Debugging and Editable Mode
```
cd python
pip install -e ./
```


<!-- On MacOS, the installation commands in conda environment is:
```
conda install mpi4py openmpi
```
About OpenMPI library installation for MPI, the reference is as follows: [https://docs.open-mpi.org/en/v5.0.x/installing-open-mpi/quickstart.html](https://docs.open-mpi.org/en/v5.0.x/installing-open-mpi/quickstart.html,)
For OpenMPI on MacOS, please review the following links:
[https://betterprogramming.pub/integrating-open-mpi-with-clion-on-apple-m1-76b7815c27f2](https://formulae.brew.sh/formula/open-mpi)
[https://formulae.brew.sh/formula/open-mpi](https://formulae.brew.sh/formula/open-mpi)

The above commands work properly in Linux environment.
For Windows/Mac OS (Intel)/Mac OS (M1), you may need to follow TensorFlow/Jax/MXNet official guidance to fix related installation issues. -->