
let timer = document.getElementById('time')
let timerId = setInterval(startTimer, 1000);
function startTimer() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
        doSomething();
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

startTimer();
timerCount = 60;

if (if timer === 0) {
    return window.location.assign('score.html')
}

if (classToApply === 'wrong') {
    decreaseTime(wrongGuess);
}

decreaseTime = num => {
    score -= num;
    timeText.innerText = time;
};


function updateTimer() {
    timeText.textContent = time;

    if (time == 0) {
        clearInterval(interval);
        // return window.location.assign('score.html');
    }
    else {
        time--;
    }
}

const interval = setInterval(updateTimer, 1000);

if (classToApply === 'wrong') {
    decreaseTime(wrongAnswer);
}


decreaseTime = num => {
    time -= num;
    timeText.innerText = time;
};