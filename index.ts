#!usr/bin/env node
import inquirer from "inquirer";
console.log("WELLcome to cli number gussing game")

const randomNumber = Math.floor(Math.random()* 5+1);

const answer = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message:"Enter your guess number(Number limit from 1 to 10)",
    },
]);
if(answer.userGussedNumber === randomNumber){
console.log("Congratulation ! you guess a correct number.");
}
else{
    console.log("sorry, you guess a wrong number");
}













