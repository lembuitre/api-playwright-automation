Prerequisites:
1. Should have git bash in your computer. You can get it here: https://git-scm.com/downloads
2. Setup for at least the SSH in your computer to clone the repository. If not, you can check this out: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
3. Installed Visual Code IDE: https://code.visualstudio.com/
4. Make sure Node.js is installed by using the commands 'node -v' and 'npm -v' in your terminal. If not yet installed, download it in 'https://nodejs.org/en' and run the installer.

Steps to setup the test repository into your computer:
1. Create a folder where you can store the git repository which will be clone at step number 3. 
2. Open the git bash and navigate through the folders until you reach inside the created folder at number 1.
3. Git Clone this repository into your computer by invoking this command: git clone git@github.com:lembuitre/api-playwright-automation.git
4. Open Visual Code IDE 
5. Navigate through File > Open Folder > (go to the cloned repository folder) > Click Select Folder
6. Open the terminal native in the Visual Code IDE which can be found at the upper part of the IDE.
7. Invoke 'npm init -y' command to include package.json
8. Invoke 'npm install -D playwright' command
9. Invoke 'npx playwright install' command
10. Invoke 'npm install -D @playwright/test' command
11. Invoke the command 'npx playwright test' in the terminal to run the test scripts. Or you can do 'npx playwright test --ui' to run the playwright test in UI
    Note: number 11 commands will work if the installions from steps 7 to 10 are properly invoked.
