# Course Playwright Javascript

### Learn Playwright and master web automation!
This repository contains the course materials and exercises for a comprehensive Playwright course.<br>
It covers everything from the basics to advanced techniques, making it ideal for both beginners and experienced testers.<br> 
The full course, including in-depth theory (delivered through PowerPoint presentations), assignments, and Q&A sessions, will take approximately 7 hours to complete.<br>
**Please contact me for more information.**

### Key Topics:
- **Introduction to Playwright**: Understand the core concepts and capabilities of Playwright.
- **Web Element Interaction**: Learn how to locate and interact with web elements.
- **Assertions**: Master the art of verifying expected behavior in your tests.
- **Waiting Mechanisms**: Learn how to handle dynamic web elements and asynchronous operations.
- **Cross-Browser Testing**: Execute tests across different browsers and platforms.
- **Advanced Techniques**: Explore advanced scenarios like multi-tab, multi-origin, and multi-user testing.
- **Playwright Tooling**: Utilize powerful tools like Codegen, UI mode, and Trace Viewer.
- **CI/CD Integration**: Learn how to integrate Playwright into your CI/CD pipeline.

### Who Should Attend:
- Software Testers
- Developers
- DevOps Engineers
- Technical Leads/Managers
- Anyone interested in web testing

### Prerequisites:
- Programming skills: **JavaScript**
- Basic understanding of **GIT** (You should be able to clone this repo)

### This repository provides:
- Practical exercises
- Code examples

>Let's dive into the world of Playwright and build robust, reliable web applications!

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
> git clone https://github.com/RobbertChampagne/course-playwright-javascript.git
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

---
<br>

> **Note**: 
<br>This repository is designed to supplement a structured course.<br> 
For the full learning experience, consider attending the complete course.