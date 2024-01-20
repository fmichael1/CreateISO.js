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

### Example
   ```bash
   node createISO.js /path/to/my/directory
   ```

## How It Works
The `createISO.js` script operates as follows:
1. It first checks if the provided directory exists.
2. If the directory exists, the script uses the `mkisofs` command to create an ISO file. This file will have the same name as the directory being converted.
3. The created ISO file is stored in the same directory as the `createISO.js` script.

## Error Handling
The script is designed to handle errors gracefully:
- **Directory Does Not Exist**: If the specified directory path does not exist, the script will output an error message indicating the issue.
- **mkisofs Command Errors**: If there are any errors during the execution of the `mkisofs` command, the script will display relevant error information, helping in troubleshooting.

## Contributing
Contributions to improve `createISO.js` are always welcome:
- **Forking and Pull Requests**: Feel free to fork this repository and submit pull requests with your enhancements or fixes.
- **Issues and Features**: Open issues for any bugs you encounter or suggest new features that could enhance the functionality of the script.

Your contributions and feedback help make this tool more effective for everyone!
