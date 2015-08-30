// Global variable definitions

var app = {
  computerChoice: null,
  yourEngScore: 0,
  computerEngScore: 0,
  yourBoutScore: 0,
  computerBoutScore: 0,
  userChoice: "",
  outcome: "",
  boutNum: 1,
  userName: null,
  playAgainChoice: ""
};

//function definitions

function getName() {
  app.userName = prompt("Please enter your name..");
  if (app.userName != "") {
    document.getElementById("name").innerHTML = app.userName + "..";
    playMatch();
  } else {
    window.location = "/Users/Nick/Documents/ironyard/day_1-4/alt.html"
  }
}

function initComputerChoice(){
  app.computerChoice = Math.random();
  if (app.computerChoice < 0.34) {
    app.computerChoice = "rock";
  } else if(app.computerChoice <= 0.67) {
    app.computerChoice = "paper";
  } else {
    app.computerChoice = "scissors";
  }
}

function initUserChoice(){
  app.userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();
  while (app.userChoice !== "rock" && app.userChoice !== "paper" && app.userChoice !== "scissors") {
    alert("invalid choice, please enter again");
    app.userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();
  }
}


//                 user   computer
function compare(choice1, choice2){
  if(choice1 === choice2) {
    alert("TIE! Computer chooses " + choice2 + ", please choose again");
    app.outcome = "TIE!" //not working!
    playEngage();
  }
  else if (choice1 === "rock") {
    if (choice2 === "scissors"){
      app.yourEngScore += 1;
      app.outcome = "You Win!"
    } else {
      app.computerEngScore += 1;
      app.outcome = "Computer Wins!"
    }
  }
  else if (choice1 === "paper") {
    if (choice2 === "rock"){
      app.yourEngScore += 1;
      app.outcome = "You Win!"
    } else {
      app.computerEngScore += 1;
      app.outcome = "Computer Wins!"
    }
  }
  else if (choice1 === "scissors") {
    if (choice2 === "rock"){
      app.computerEngScore += 1;
      app.outcome = "Computer Wins!"
    } else {
      app.yourEngScore += 1;
      app.outcome = "You Win!"
    }
  }
}

function playEngage() {
  initComputerChoice();
  initUserChoice();
  compare(app.userChoice, app.computerChoice);
  document.getElementById('your-choice').innerHTML = app.userChoice;
  document.getElementById('comp-choice').innerHTML = app.computerChoice;
  document.getElementById('explanation').innerHTML = app.outcome;
  document.getElementById('your-eng').innerHTML = app.yourEngScore;
  document.getElementById('comp-eng').innerHTML = app.computerEngScore;
}

function playBout() {
  while(app.yourEngScore < 2 && app.computerEngScore < 2) {
    playEngage();
  }
  if(app.yourEngScore === 2){
    app.yourBoutScore += 1;
    document.getElementById("your-bout").innerHTML = app.yourBoutScore;
  } else if(app.computerEngScore === 2){
    app.computerBoutScore += 1;
    document.getElementById("comp-bout").innerHTML = app.computerBoutScore;
  }
  app.yourEngScore = 0;
  app.computerEngScore = 0;
  app.boutNum += 1;
};

function playMatch() {
  while(app.yourBoutScore < 2 && app.computerBoutScore < 2) {
    playBout();
  }
  if(app.yourBoutScore === 2) {
    alert("Congratulations You have won the match!");
    playAgain();
  } else if(app.computerBoutScore === 2){
    alert("The computer has won the match");
    playAgain();
  }
}

function playAgain() {
  app.playAgainChoice = prompt("Would you like to play again? Please type 'yes' or 'no'").toLowerCase();
  while (app.playAgainChoice !== "yes" && app.playAgainChoice !== "no") {
    alert("invalid choice, please enter again");
    app.playAgainChoice = prompt("Would you like to play again? Please type 'yes' or 'no'").toLowerCase();
  }
  if (app.playAgainChoice === "yes") {
    location.reload(true);
  } else {
    window.location = "/Users/Nick/Documents/ironyard/day_1-4/goodbye.html"
  }
}


getName();
