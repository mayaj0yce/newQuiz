const userInitials = document.getElementById('userInitials');
const saveScoreBtn = document.getElementById('saveButton');

const lastScore = localStorage.getItem('lastScore');
finalScore.innerText = lastScore;

userInitials.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !userInitials.ariaValueMax;
});

saveHighScore = e => {
    e.preventDefault();
};