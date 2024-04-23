#! /usr/bin/env node 

import inquirer from "inquirer";

const Currency: any = {
  USD: 1, // Base currency
  INR: 83.38,
  EUR: 0.94,
  GBP: 0.81,
  JPY: 154.83,
  PKR: 278.55,
};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: ["USD", "INR", "EUR", "GBP", "JPY", "PKR"],
  },
  {
    name: "to",
    message: "Enter From Currency",
    type: "list",
    choices: ["USD", "INR", "EUR", "GBP", "JPY", "PKR"],
  },
  {
    name: "amount",
    message: "Enter Your Amount",
    type: "number",
  },
]);

let fromAmount = Currency[user_answer.from];
let toAmount = Currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);

