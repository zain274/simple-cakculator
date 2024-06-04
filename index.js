#!  /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter First Number",
        type: "number",
        name: "Firstnumber",
    },
    {
        message: "Enter Second Number",
        type: "number",
        name: "Secondnumber"
    },
    {
        message: "Select one of the operators to perfrom operation",
        type: "list",
        name: "operaots",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
if (answer.operaots === "Addition") {
    console.log(`your value is ${answer.Firstnumber + answer.Secondnumber}`);
}
else if (answer.operaots === "Subtraction") {
    console.log(`your value is ${answer.Firstnumber - answer.Secondnumber}`);
}
else if (answer.operaots === "Multiplication") {
    console.log(`your value is ${answer.Firstnumber * answer.Secondnumber}`);
}
else if (answer.operaots === "Division") {
    console.log(`your value is ${answer.Firstnumber / answer.Secondnumber}`);
}
else {
    console.log("please select valid opertors");
}
// console.log(answer);
