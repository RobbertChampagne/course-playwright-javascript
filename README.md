# Opleiding Playwright Javascript
 
## Getting started

### Install Node.js:
1. Download Node.js:
    - Go to https://nodejs.org/en
    - Download the LTS version for your operating system (Windows, macOS, or Linux).

2. Install Node.js:
	- Run the downloaded installer and follow the installation instructions.
	- The installer will also install npm (Node Package Manager) automatically.

3. Verify Installation:
	- Open a terminal or command prompt.
	- Check the installed versions of Node.js and npm by running:

---
### Install Git:
1. Download Git:
    - Go to the official Git website: https://git-scm.com/
    - Click on "Download" and select the version for your operating system.

2. Run the Installer:
    - Locate the downloaded `.exe` file and run it.
    - Follow the installation prompts. You can use the default settings for most options.

3. Verify Installation:
    - Open Command Prompt.
    - Type the following command and press Enter:

        ```Bash 
        > git --version
        ```
---
### Start from an existing repository:
- Nodejs & GIT should be installed.
```Bash 
> git clone https://github.com/RobbertChampagne/opleiding-playwright-javascript.git
> npm install @playwright/test
``` 
<br>
To push to a different remote Git repository after pulling from another, you need to change the remote URL. Here are the steps:<br><br>

- Check Current Remote URL:

    ```Bash 
    > git remote -v
    ```

- Change the Remote URL:

    ```Bash 
    > git remote set-url origin <new-remote-url>
    ```

- Push to the New Remote:

    ```Bash 
    > git push origin <branch-name>
    ```
---
### Start a new project:
- Nodejs & GIT should be installed.
- Create new folder ‘playwright-training’
- Run the following command to create a package.json file:
    ```Bash 
    > npm init -y
    ```
- Run the following command to install Playwright (node_modules):
    ```Bash 
    > npm install @playwright/test
    ```
- Run the following command to install Playwright:
    ```Bash 
    > npm create playwright
    ```

# Tools

### Codegen:
```Bash 
> npx playwright codegen
```