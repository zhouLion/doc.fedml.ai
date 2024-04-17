#!/bin/sh

# Function to detect the default shell
detect_default_shell() {
    # Extract the basename of the default shell from the SHELL environment variable
    default_shell=$(basename "$SHELL")
    
    # Check if the default shell is one of bash or zsh
    if [ "$default_shell" = "bash" ] || [ "$default_shell" = "zsh" ]; then
        echo "Detected shell: $default_shell"
    else
        echo "This script requires your default shell being bash or zsh." >&2
        exit 1
    fi
}

detect_default_shell