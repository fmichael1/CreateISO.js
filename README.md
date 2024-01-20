# CreateISO.js

## Overview
`createISO.js` is a Node.js script for creating an ISO file from a specified directory. It uses the `mkisofs` command, ensuring that file case sensitivity is preserved and allowing for the customization of the volume name.

## Prerequisites
- Node.js installed on your system.
- `mkisofs` tool must be installed and accessible in your system's PATH.

## Installation
Clone the repository or download the script to your local machine.

## Usage
To use the script, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the directory where `createISO.js` is located.
3. Run the script with the directory path you want to convert into an ISO file as an argument.

   ```bash
   node createISO.js [path_to_directory]
   ```

Replace `[path_to_directory]` with the path to the directory you want to convert.

Example
