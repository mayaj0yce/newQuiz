const userInitials = document.getElementById("userInitials");
const saveScoreBtn = document.getElementById("saveScore");
const lastScore = localStorage.getItem("lastScore");
const finalScore = document.getElementById("finalScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const maxHighScores = 5;
finalScore.innerText = lastScore;

userInitials.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !userInitials.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: lastScore,
        name: userInitials.value
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score)
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
};
const highScoresContainer = document.getElementById("highScores");
const highScoresList = document.getElementById("highScoresList");

function displayHighScores() {
    highScoresList.innerHTML = ""; // Clear the existing content

    highScores.forEach((score, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${score.name}: ${score.score}`;
        highScoresList.appendChild(listItem);
    });
}

// Call the function to display high scores initially
displayHighScores();