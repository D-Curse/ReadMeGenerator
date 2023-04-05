//run 'node index.js' to start


import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import generateMarkdown from "./src/generateMarkdown.js";

const questions = [
    {
        type: "input",
        name: "title",
        message: "Please name your Project.",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe the purpose and functionality of this project.",
    },
    {
        type: "input",
        name: "screenshot",
        message: "Please  provide a relative path to the image you want to use as the screenshot.",
    },
    {
        type: "input",
        name: "link",
        message: "Please provide a URL where a user can access your deployed application",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices : ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
    {
        type: "input",
        name: "require",
        message: "List any project dependencies here",
    },
    {
        type: "input",
        name: "feature",
        message: "List some cool feature about this project here",
    },
    {
        type: "input",
        name: "usage",
        message: "Select the language or technologies associated with this project.",
    },
    {
        type: "input",
        name: "creator",
        message: "Write your GitHub username",
    },
    {
        type: "input",
        name: "email",
        message: "Provide a valid email address",
    },
    {
        type: "input",
        name: "contributors",
        message: "Please list my any Contributors. (Use GitHub username)",
        default: "",
    },
    {
        type: "input",
        name: "test",
        message: "Provide walkthrough of required tests if application.",
    },
];

//writing README.md File
function writeToFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}


console.log("Answer the following questions to generate a README file:\n");
//App initialization
function init(){
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./public/README.md", generateMarkdown({ ...responses }));
    });
}

init();
