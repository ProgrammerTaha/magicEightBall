/*
The user will be able to input a question, 
then our program will output a random fortune.
I will be easy Taha.
*/

//let the user put his/her name
let userName = '';

//decides what to do if the user enters a name or not
userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);

//the question the user wants to ask the Magic Eight Ball
let userQuestion = '';

//logging
console.log(`${userName} asks: ${userQuestion}`);

//generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

//
let eightBall = '';

