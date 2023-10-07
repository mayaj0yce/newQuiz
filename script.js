var timeEl = document.querySelector('time');
var start = document.querySelector('start');
var main = document.getElementById('main');
let message = document.querySelector("#questions");
var oneDiv = document.getElementById('questionOne');
var userPoints = 60;

var startButton = document.querySelector(".start-button");

function startQuiz() {
    showQuestions()
    hideButton()
};

function hideButton() {
  var x = document.getElementById("mad");
  //mad is the button var and shall remain as such. vanish on start and shows the other functions 
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

//hides the questions and shows the start button
window.onload = function () {
  document.getElementById('questions').style.display = 'none';
  document.getElementById('mad').style.display = 'block';
  document.getElementById('results').style.display = 'none';
}

//on click the start button will be hidden and the questions will show
function showQuestions() {
   var x = document.getElementById("questions");
   if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function startFunction() {
  message.innerHTML = question1;
}

//Quesrion one
var question1 = 'Where is the console? <button onClick="wrongGuess()">A:vscode<?button><button onClick="wrongGuess()">B: the server <?button><button onClick="clickMe()">C: under "inspect" </button><button onClick="wrongGuess()">D: in the terminal<?button>'

function wrongGuess() {
  console.log('oopsie -5 ')
  // alert(message, 'try again')
  // userScore -5 
}


// Question two
function clickMe() {
  // add point to user score
  message.innerHTML = ['A page can be styled through all of the following EXCEPT: <button onClick="wrongGuess()">A:html<?button><button onClick="wrongGuess()">B: CSS<?button><button onClick="wrongGuess()">C: javascript </button><button onClick="clickMe2()">D: .env <?button>']
}

//Question three
function clickMe2() {
  // add point to user score
  message.innerHTML = [' Pick the right format for an "if else statement" <button onClick="clickMe3()"> A: if () {} else {} <?button><button onClick="wrongGuess()"> B: if {} else ()<?button><button onClick="wrongGuess()"> C: if.else.{} </button><button onClick="wrongGuess()"> D: <if>  </else> <?button>']
}

//Question four
function clickMe3() {
  // add point to user score
  message.innerHTML = [' Which of these represents the first object of an array: <button onClick="wrongGuess()">A: -1<?button><button onClick="clickMe4()">B: 0<?button><button onClick="wrongGuess()"> C: 1 <?button> <button onClick="wrongGuess()">D: 0.0 <?button?>']
}

//Question five
function clickMe4() {
  // add point to user score
  message.innerHTML = ['By using async what can you make a function do: <button onClick="results()"> A: wait <?button> <button onClick="wrongGuess()"> B: stutter step <?button> <button onClick="wrongGuess()"> C: trigger <?button><button onClick="wrongGuess()"> D: coil <?button>']
}

function results() {
  let userScore = 8
  message.innerHTML = ['Your Score:',  userScore];
  showResults()
};



function showResults() {
  var x = document.getElementById("results");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

// if startWQuiz() then show showQuestions(),
// show question one by one
// showOne() { var x = questionOne } 
// rightAnswer() { switch to next page }
// else (or do a new function for wrongAnswer) flash red and sub 1 point from user score
// onLoad userscore = 60. on end user score can be saved with initials to the localStorage

// if question answer === right then move to next question
// else sub 5 sec and alert 'wrong' 

// question must be selected as correct to move onto the next question
// format question field and use button choices as correct / not



function endGame() {
    console.log('done')
    timeEl.textContent = " ";
}

startButton.addEventListener("click", startQuiz);


// C:\Users\mjtha\downloads\sneks\04-Web-APIs\01-Activities\09-Ins_Timers-Intervals\script.js

// var timeLeft = 60;
// var elem = document.getElementById('Timer');
// var timerId = setInterval(startTimer, 1000);

// var timer;
// var timerCount;
// function startQuiz() {
//     startTimer()
//     timerCount = 60;
// };

// function startTimer() {
//     if (timeLeft == 0) {
//         clearTimeout(timerId);
//         doSomething();
//     } else {
//         elem.innerHTML = timeLeft + ' seconds remaining';
//         timeLeft--;
//     }
// }