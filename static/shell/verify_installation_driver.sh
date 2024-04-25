#!/bin/bash

# Creating the tmp folder or removing it if it already exists
tmp_folder=".render-fedml-bind"

# Creating the tmp folder or removing it if it already exists
if [ -d "$tmp_folder" ]; then
    rm -rf "$tmp_folder"
fi
mkdir "$tmp_folder"

# Moving into the tmp folder
cd "$tmp_folder" || exit

# Downloading and executing installation verification script
echo -e "\e[33m\U0001F50E Verifying the FedML environment installation...\e[0m"
sudo wget -q https://doc.fedml.ai/shell/verify_installation.sh && sudo chmod +x verify_installation.sh
./verify_installation.sh
verification_status=$?

# Returning to the original directory
cd ..

# Removing the tmp folder and its contents
rm -rf "$tmp_folder"

# Bind the node to the platform
if [ "$verification_status" -eq 0 ]; then
  echo -e "\033[1;32m✔ FedML environment verification successful.\033[0m"
else
  echo -e "\e[31m✘ FedML environment installation verification failed. Please retry the binding process again.\e[0m"
  exit 1
fi
