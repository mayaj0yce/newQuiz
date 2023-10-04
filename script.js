var timeEl = document.querySelector('time');
var start = document.querySelector('start');
var main = document.getElementById('main');

var startButton = document.querySelector(".start-button")

function startQuiz() {
    showQuestions()
}

window.onload = function () {
  document.getElementById('questions').style.display = 'none';
}

function showQuestions() {
   var x = document.getElementById("questions");
   if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}

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