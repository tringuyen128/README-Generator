const inquirer = require("inquirer");
const fs = require("fs");


// these questions to populate the README.md
function promptUser(){
    return inquirer.prompt([
        {
            name: "projectTitle",
            type: "input",
            message: "What is the project title?",
        },
        {
            name: "description",
            type: "input",
            message: "Write a brief description of your project: "
        },
        {
            name: "installation",
            type: "input",
            message: "Describe the installation process if any: ",
        },
        {
            name: "usage",
            type: "input", 
            message: "What is this project usage for?"
        },
        {
            name: "license",
            type: "list",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            name: "contributing",
            type: "input", 
            message: "Who are the contributors of this projects?"
        },
        {
            name: "tests",
            type: "input", 
            message: "Is there a test included?"
        },
        {
            name: "questions",
            type: "input",
            message: "What do I do if I have an issue? "
        },
        {
            name: "username",
            type: "input",
            message: "Please enter your GitHub username: "
        },
        {
            name: "email",
            type: "input",
            message: "Please enter your email: "
        }
    ]);
} 

// Async function and create a new README inside dist folder
async function init() {
    try {
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
    await writeFileAsync('./dist/README.md', generateContent);
        console.log('✔️  Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();