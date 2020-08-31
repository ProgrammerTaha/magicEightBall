/*
The user will be able to input a question, 
then our program will output a random fortune.
I will be easy Taha.
*/

//let the user put his/her name
let userName = "";

//decides what to do if the user enters a name or not
userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);

//the question the user wants to ask the Magic Eight Ball
let userQuestion = "";

//logging
console.log(`${userName} asks: ${userQuestion}`);

//generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

//
let eightBall = "";

//create a control flow that takes in the randomNumber
//and then assigns eightBall to a reply that a Magic Eight Ball would return
// just remove the /**/
/*
if (randomNumber === 0) {
  console.log("It is certain");
} else if (randomNumber === 1) {
  console.log("It is decidedly so");
} else if (randomNumber === 2) {
  console.log("Reply hazy try again");
} else if (randomNumber === 3) {
  console.log("Cannot predict now");
} else if (randomNumber === 4) {
  console.log("Do not count on it");
} else if (randomNumber === 5) {
  console.log("My sources say no");
} else if (randomNumber === 6) {
  console.log("Outlook not so good");
} else if (randomNumber === 7) {
  console.log("Signs point to yes");
}
*/
/*
switch (randomNumber) {
  case 0:
    console.log("It is certain");
    break;
  case 1:
    console.log("It is decidedly so");
    break;
  case 2:
    console.log("Reply hazy try again");
    break;
  case 3:
    console.log("Cannot predict now");
    break;
  case 4:
    console.log("Do not count on it");
    break;
  case 5:
    console.log("My sources say no");
    break;
  case 6:
    console.log("Outlook not so good");
    break;
  case 7:
    console.log("Signs point to yes");
    break;
}
*/
