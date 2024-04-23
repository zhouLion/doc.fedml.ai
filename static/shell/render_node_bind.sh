tmp_folder=".render-fedml-bind"

# Creating the tmp folder or removing it if it already exists
if [ -d "$tmp_folder" ]; then
    echo "Removing existing $tmp_folder folder..."
    rm -rf "$tmp_folder"
fi
mkdir "$tmp_folder"

# Moving into the tmp folder
cd "$tmp_folder" || exit

# Downloading and executing installation verification script
sudo wget -q https://doc.fedml.ai/shell/verify_installation.sh && sudo chmod +x verify_installation.sh
echo -e "\e[33m\U0001F50E Verifying the FedML environment installation...\e[0m"
./verify_installation.sh

# Bind the node to the platform
if [ $? -eq 0 ]; then
  echo -e "\033[1;32m✔ FedML environment verification successful.\033[0m"
  echo -e "\e[33m\U1F517 Binding the node to the FedML platform...\e[0m"
  fedml login -p 851497657a944e898d5fd3f373cf0ec0 > /dev/null 2>&1 && sudo wget -q https://doc.fedml.ai/python/render.py && sudo chmod +x render.py
  python3 render.py
else
  echo -e "\e[31m✘ Verification of the FedML environment failed. Please reery the binding process again.\e[0m"
fi

# Returning to the original directory
cd ..

# Removing the tmp folder and its contents
rm -rf "$tmp_folder"