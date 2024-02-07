const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to execute shell commands
function execShellCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
        reject(stderr);
      }
      resolve(stdout ? stdout : stderr);
    });
  });
}

// Function to prompt for a password if needed
function promptForPassword() {
  return new Promise((resolve) => {
    rl.question('Do you want to add a password to the .dmg file? (y/n): ', (answer) => {
      if (answer.toLowerCase() === 'y') {
        rl.question('Enter password: ', (password) => {
          resolve(password);
          rl.close();
        });
      } else {
        resolve(null);
        rl.close();
      }
    });
  });
}

// Function to create an encrypted .dmg file
async function createEncryptedDMG(sourceFolderPath, dmgName, destinationFolderPath) {
  try {
    const password = await promptForPassword();
    const dmgPath = path.join(destinationFolderPath, `${dmgName}.dmg`);
    let cmd = `hdiutil create -volname ${dmgName} -srcfolder ${sourceFolderPath} -ov -format UDZO ${dmgPath}`;

    if (password) {
      cmd += ` -encryption AES-256 -stdinpass`;
    }

    if (password) {
      // Execute with password
      const child = exec(cmd, (error) => {
        if (error) {
          console.error(`Error: ${error.message}`);
        }
      });
      child.stdin.write(`${password}\n`);
      child.stdin.end();
    } else {
      // Execute without password
      await execShellCommand(cmd);
    }

    console.log(`.dmg created at: ${dmgPath}`);
  } catch (error) {
    console.error(`Error creating .dmg: ${error}`);
  }
}

// Parse command-line arguments
const args = process.argv.slice(2);
if (args.length < 3) {
  console.log('Usage: node script.js <sourceFolderPath> <dmgName> <destinationFolderPath>');
  process.exit(1);
}

const sourceFolderPath = args[0];
const dmgName = args[1];
const destinationFolderPath = args[2];

createEncryptedDMG(sourceFolderPath, dmgName, destinationFolderPath);
