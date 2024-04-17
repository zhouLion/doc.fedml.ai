#!/bin/bash

# Initialize miniconda shell
source "$HOME/miniconda3/etc/profile.d/conda.sh"

# Check if Miniconda is installed
if ! command -v conda &> /dev/null; then
    echo -e "\e[31m✘ Miniconda is not installed.\e[0m"
    exit 1
else
    echo -e "\e[32m✔ Miniconda is installed.\e[0m"
fi

# Check if fedml is installed in the conda environment
if conda activate fedml && pip show fedml &> /dev/null; then
    echo -e "\e[32m✔ fedml is installed in the fedml conda environment.\e[0m"
else
    echo -e "\e[31m✘ fedml is not installed in the fedml conda environment.\e[0m"
    exit 1
fi

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "\e[31m✘ Docker is not installed.\e[0m"
    exit 1
else
    echo -e "\e[32m✔ Docker is installed.\e[0m"
fi

# Check if Redis is installed
if ! command -v redis-server &> /dev/null; then
    echo -e "\e[31m✘ Redis is not installed.\e[0m"
    exit 1
else
    echo -e "\e[32m✔ Redis is installed.\e[0m"
fi

# Check if NVIDIA Container Toolkit is installed
if ! command -v nvidia-container-cli &> /dev/null; then
    echo -e "\e[31m✘ NVIDIA Container Toolkit is not installed.\e[0m"
    exit 1
else
    echo -e "\e[32m✔ NVIDIA Container Toolkit is installed.\e[0m"
fi

echo -e "\e[32m✔ All components installed successfully.\e[0m"
