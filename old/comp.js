choices.forEach(choice => {
choice.addEventListener("click", e => {
if (!acceptingAnswers) return;

acceptingAnswers = false;
const selectedChoice = e.target;
const selectedAnswer = selectedChoice.dataset["number"];

const classToApply =
selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

selectedChoice.parentElement.classList.add(classToApply);

setTimeout(() => {
selectedChoice.parentElement.classList.remove(classToApply);
getNewQuestion();
}, 1000);
});
});

startGame();