import inquirer from "inquirer";
const answers = await inquirer.prompt([{
        type: "input",
        name: "age",
        message: "what iyour age? "
    }]);
console.log('In Sha Allah in ${60 - answers.age} years you will be 60 years old');
