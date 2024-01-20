const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

// Function to create ISO from directory
function createISO(directoryPath) {
    if (!fs.existsSync(directoryPath)) {
        console.error(`The directory "${directoryPath}" does not exist.`);
        return;
    }

    const baseName = path.basename(directoryPath);
    const outputIsoFile = path.join(__dirname, `${baseName}.iso`);

    // mkisofs command with options to preserve case and set volume name
    const command = `mkisofs -r -V "${baseName}" -o "${outputIsoFile}" "${directoryPath}"`;

    // Increase the buffer size
    const execOptions = {
        maxBuffer: 1024 * 1024 * 1024 // 1 MB
    };

    exec(command, execOptions, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(`ISO created: ${outputIsoFile}`);
    });
}

// Get directory path from command line argument
const directoryPath = process.argv[2];

if (!directoryPath) {
    console.error('Please provide a directory path.');
} else {
    createISO(directoryPath);
}
