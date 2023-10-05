var timeEl = document.querySelector('time');
var start = document.querySelector('start');
var main = document.getElementById('main');
let message = document.querySelector("#questions");
var oneDiv = document.getElementById('questionOne')


var startButton = document.querySelector(".start-button")

function startQuiz() {
    showQuestions()
}


// window.onload = function () {
 
// }

function hideButton() {
  var x = document.getElementById("mad");
  //mad is the button var and shall remain as such. vanish on start and shows the other functions 
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


window.onload = function () {
  document.getElementById('questions').style.display = 'none';
  document.getElementById('mad').style.display = 'block';
}

function showQuestions() {
   var x = document.getElementById("questions");
   if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function startFunction() {
  message.innerHTML = question1 ;
}

//Quesrion one
var question1 = 'Where is the console? <button>A<?button><button onClick="clickMe()" > here </button>'
//this is the path from one question to the next. if i can get the buttons put in then I can get it sorted

// Question two
function clickMe() {
  // add point to user score
  message.innerHTML = ['this', '<button onClick="clickMe2()">A<?button>']
}

//Question three
function clickMe2() {
  // add point to user score
  message.innerHTML = ['hellooooo', '<button onClick="clickMe3()">A<?button>']
}

//Question four
function clickMe3() {
  // add point to user score
  message.innerHTML = ['this', '<button onClick="clickMe4()"> A <?button> ']
}

//Question five
function clickMe4() {
  // add point to user score
  message.innerHTML = ['this', '<button onClick="results()"> A <?button>']
}

function results() {
  message.innerHTML = 'user results'
};
//this shows 'this' when the here button has been pressed


// function questions() {
// {
//   question: 
//   ["where is the console?"]

//   answers: 
//   a: vsCode
//   b: html document
//   c: inspect 
//   d: settings
//   
//   correctAnswer = c
// },
// }

// if startWQuiz() then show showQuestions(),
// show question one by one
// showOne() { var x = questionOne } 
// rightAnswer() { switch to next page }
// else (or do a new function for wrongAnswer) flash red and sub 1 point from user score
// onLoad userscore = 5. on end user score can be saved with initials to the localStorage

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