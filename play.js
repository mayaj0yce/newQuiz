const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choiceText'));
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptAnswers = false;
let score = 0;
let time = 120;
let questionList = [];

let questions = [
    {
        question: 'Where is the console?',
        choice1: 'vscode',
        choice2: '.html file',
        choice3: 'r click inspect',
        choice4: 'computer settings',
        answer: 3,
    },
    {
        question: 'A page can be styled with all EXCEPT:',
        choice1: 'html',
        choice2: 'CSS',
        choice3: 'JS',
        choice4: 'env',
        answer: 4,
    },
    {
        question: 'Pick the right format for an "if else" statement',
        choice1: 'if(){}else{}',
        choice2: 'if{}else()',
        choice3: 'if.else.{}',
        choice4: '<if>{}else{}',
        answer: 1,
    },
    {
        question: 'What number is associated with the first object of an array?',
        choice1: '-1',
        choice2: '0',
        choice3: '1',
        choice4: '0.0',
        answer: 2,
    },
    {
        question: 'By using async a function can preform what action',
        choice1: 'stutter ',
        choice2: 'trigger',
        choice3: 'coil',
        choice4: 'wait',
        answer: 4,
    },
];


const correctAnswer = 5;
const maxQuestions = 5;

startGame = () => {
    questionCount = 0;
    score = 0;
    questionList = [...questions];
    nextQuestion();
};

nextQuestion = () => {
    if (questionList.length === 0 || questionCount >= maxQuestions) {
        return window.location.assign('score.html')
    }
    questionCount++;
    const questionIndex = Math.floor(Math.random() * questionList.length);
    currentQuestion = questionList[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    questionList.splice(questionIndex, 1);
    acceptAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptAnswers) return;

        acceptAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "wrong";

        if(classToApply === 'correct') {
           increaseScore(correctAnswer); 
        }
        // if(classToApply === 'wrong') {
        //     decrease time 
        // }

        selectedChoice.parentElement.classList.add(classToApply);


        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            nextQuestion();
        }, 1000);
    });
});

increaseScore = num => {
    score+= num;
    scoreText.innerText = score;
}

startGame();
