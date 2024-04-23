#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let score = 0; // Initialize score 
let ask = await inquirer.prompt([
    {
        name: "ask",
        type: "confirm",
        message: chalk.bold.red("DO YOU WANT TO PLAY THIS ISLAMIC SIMPLE QUIZZ GAME 'y/n'"),
        default: true
    }
]);
if (ask.ask) {
    console.log(chalk.green.underline `WELCOME TO SIMPLE ISLAMIC QUIZZ GAME `);
    const game = await inquirer.prompt([
        {
            name: "game",
            type: "list",
            message: chalk.yellow("how many pillars in islam"),
            choices: [1, 2, 3, 4, 5, 6, 7]
        }
    ]);
    if (game.game === 5) {
        console.log(chalk.green `correct answer`);
        score++; // Increment score for correct answer
    }
    else {
        console.log(chalk.red `Sorry, that's not correct.\n There are 5 pillars in Islam`);
    }
    let quest = await inquirer.prompt([
        {
            name: "quest",
            type: "list",
            message: chalk.yellow("Where did Adam (a.s.) and Hawwa (a.s.) live in the beginning ?"),
            choices: ["A HOUSE", "A JANNAH", "IN WORLD", "IN PLACE"]
        }
    ]);
    if (quest.quest === "A JANNAH") {
        console.log(chalk.green `correct answer`);
        score++; // Increment score for correct answer
    }
    else {
        console.log(chalk.red `Sorry, that's not correct.\nThey live  beginning in the JANNAH`);
    }
    let ques = await inquirer.prompt([
        {
            name: "ques",
            type: "list",
            message: chalk.yellow("What is the first duty of a Muslim?"),
            choices: ["salah", "hajj", "roza", "Shahadah "]
        }
    ]);
    if (ques.ques === "Shahadah ") {
        console.log(chalk.green `correct answer`);
        score++; // Increment score for correct answer
    }
    else {
        console.log(chalk.red `Sorry, that's not correct.\nIn Islam first duty  IS THE SHAHADAH`);
    }
    let mas = await inquirer.prompt([
        {
            name: "mas",
            type: "list",
            message: chalk.yellow("When entering the masjid, which foot should you set in first?"),
            choices: ["RIGHT FOOT", "LEFT FOOT"]
        }
    ]);
    if (mas.mas === "RIGHT FOOT") {
        console.log(chalk.green `CORRECT ANSWER`);
        score++; // Increment score for correct answer
    }
    else {
        console.log(chalk.red `Sorry, that's not correct.\n When you enter the masjid you should set the RIght foot`);
    }
    let ayat = await inquirer.prompt([
        {
            name: "ayat",
            type: "list",
            message: chalk.yellow("We seek Allah's refuge from whispers of the jinn and the mankind is in Surah.."),
            choices: ["Al-Falaq", "Al-'Asr", "AL-JINN", "Al-Nas"]
        }
    ]);
    if (ayat.ayat === "Al-Nas") {
        console.log(chalk.green `CORRECT ANSWER\nSURAH AL-NAS warns us against the secret whispers of evil inside our hearts and warns us also against the evil that may come from other men or invisible spirits`);
        score++; // Increment score for correct answer
    }
    else {
        console.log(chalk.red `Sorry, that's not correct.\n SURAH AL-NAS warns us against the secret whispers of evil`);
    }
    // Display final score
    console.log(chalk.blue.bold(`Your score ${score} out of 5`));
    if (score == 5) {
        console.log(chalk.bold.underline.green `MA SHA ALLAH YOUR KNOWLEDGE IS GOOD`);
    }
    else if (score == 4) {
        console.log(chalk.green `GOOD JOB! Keep it up!`);
    }
    else if (score == 3) {
        console.log(chalk.green `GOOD KEEP IT UP`);
    }
    else if (score == 2) {
        console.log(chalk.red `You can do better. Keep practicing`);
    }
    else if (score == 1) {
        console.log(chalk.bold.underline.red `TOO BAD,You can do better. Keep practicing`);
    }
}
else {
    console.log(chalk.bold.underline.blue `ok good bye Have a nice day`);
}
