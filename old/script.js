var timeEl = document.querySelector('time');
var start = document.querySelector('start');
var main = document.getElementById('main');
let message = document.querySelector("#questions");
var oneDiv = document.getElementById('questionOne');
var userPoints = 60;

var startButton = document.querySelector(".start-");

function startQuiz() {
    showQuestions()
    hideButton()
};

function hideButton() {
  var x = document.getElementById("mad");
  //mad is the  var and shall remain as such. vanish on start and shows the other functions 
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

//hides the questions and shows the start 
window.onload = function () {
  document.getElementById('questions').style.display = 'none';
  document.getElementById('mad').style.display = 'block';
  document.getElementById('results').style.display = 'none';
}

//on click the start  will be hidden and the questions will show
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
var question1 = 'Where is the console? ="()">A:vscode the server: under "inspect" </>< onClick="wrongGuess()">D: in the terminal<?>'

function wrongGuess() {
  console.log('oopsie -5 ')
  // alert(message, 'try again')
  // userScore -5 
}


// Question two
function clickMe() {
  // add point to user score
  message.innerHTML = ['A page can be styled through all of the following EXCEPT: < onClick="wrongGuess()">A:html<?>< onClick="wrongGuess()">B: CSS<?>< onClick="wrongGuess()">C: javascript </>< onClick="clickMe2()">D: .env <?>']
}

//Question three
function clickMe2() {
  // add point to user score
  message.innerHTML = [' Pick the right format for an "if else statement" < onClick="clickMe3()"> A: if () {} else {} <?>< onClick="wrongGuess()"> B: if {} else ()<?>< onClick="wrongGuess()"> C: if.else.{} </>< onClick="wrongGuess()"> D: <if>  </else> <?>']
}

//Question four
function clickMe3() {
  // add point to user score
  message.innerHTML = [' Which of these represents the first object of an array: < onClick="wrongGuess()">A: -1<?>< onClick="clickMe4()">B: 0<?>< onClick="wrongGuess()"> C: 1 <?> < onClick="wrongGuess()">D: 0.0 <??>']
}

//Question five
function clickMe4() {
  // add point to user score
  message.innerHTML = ['By using async what can you make a function do: < onClick="results()"> A: wait <?> < onClick="wrongGuess()"> B: stutter step <?> < onClick="wrongGuess()"> C: trigger <?>< onClick="wrongGuess()"> D: coil <?>']
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
// format question field and use  choices as correct / not



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