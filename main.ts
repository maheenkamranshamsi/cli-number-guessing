#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("Welcome to the Number Guessing Game");
const answers = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: "Please enter the number you guess between 1-10:",
  },
]);
if (answers.userGuess == randomNumber) {
  console.log(`Congratulation! you guessed right number`);
} else {
  console.log(`Oopss You guessed the wrong number`);
}
