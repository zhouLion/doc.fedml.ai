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

echo -e "\e[33m\U1F517 Linking render token to your node...\e[0m"
sudo wget -q https://doc.fedml.ai/python/render.py && sudo chmod +x render.py
python3 render.py

# Returning to the original directory
cd ..

# Removing the tmp folder and its contents
rm -rf "$tmp_folder"

if [ $? -eq 0 ]; then
  echo -e "\033[1;32m✔ Your token was successfully linked to this node. This concludes the node binding process.\033[0m"
else
  fedml logout && sudo pkill -9 python && sudo rm -rf ~/.fedml && redis-cli flushall
  echo -e "\e[31m✘ Failed to link render token to the node. Please retry the binding process again from the beginning.\e[0m"
fi
