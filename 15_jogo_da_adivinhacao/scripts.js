const guessSection = document.querySelector("#guess-section")
const guessInput = document.querySelector("#guess")
const guessButton = document.querySelector("#guess-btn")
const resultParagraph = document.querySelector("#result")
const difficultySelect = document.querySelector("#difficulty")
const difficultySection = document.querySelector("#difficulty-section")
const gameSection = document.querySelector("#game-section")
const triesLeftSpan = document.querySelector("#tries-left")
const resetButton = document.querySelector("#reset-btn");

let maxTries;
let randomNumber;
let triesLeft;

difficultySelect.addEventListener("change", function () {
    const difficulty = parseInt(difficultySelect.value);

    switch (difficulty) {
        case 1:
            maxTries = 15;
            break;
        case 2:
            maxTries = 10;
            break;
        case 3:
            maxTries = 8;
            break;
        default:
            maxTries = 15;
            break;
    }
    triesLeft = maxTries;
    triesLeftSpan.textContent = maxTries

    randomNumber = Math.floor(Math.random() * 1000) + 1;
    difficultySection.style.display = 'none';
    gameSection.style.display = 'block';
    guessSection.style.display = 'flex';


});

function verificaNumero (){
    const guess = parseInt(guessInput.value);
    const range = 15;
    console.log(randomNumber)


    if (isNaN(guess) || guess < 1 || guess > 1000) {
        resultParagraph.textContent = "Por favor, insira um número de 1 a 100."
    } else {
        if (guess > randomNumber) {
            if (guess - randomNumber <= range) {
                resultParagraph.textContent = "Alto mas está perto. Tente novamente";
            } else {
                resultParagraph.textContent = "Muito alto. Tente novamente";
            }
            triesLeft--;
        } else {
            if (randomNumber - guess <= range) {
                resultParagraph.textContent = "Baixo mas está perto. Tente novamente";
            } else {
                resultParagraph.textContent = "Muito baixo. Tente novamente";
            }
            triesLeft--;
        }

        if (triesLeft === 0) {
            resultParagraph.textContent = `Suas tentativas acabaram. O número correto era ${randomNumber}.`;
            resetButton.style.display = "block";
            guessSection.style.display = "none";
        }

        if (guess === randomNumber) {
            resultParagraph.textContent = `Parabéns! Você acertou em ${maxTries - triesLeft} tentativa(s)`;
            resetButton.style.display = "block";
            guessSection.style.display = "none";
        }

        triesLeftSpan.textContent = triesLeft;

        guessInput.value = "";
    }

}



guessButton.addEventListener("click", verificaNumero)
guessInput.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault(); // Evita que o formulário seja submetido, caso esteja dentro de um formulário.
        verificaNumero();
    }
});

function resetGame() {
    difficultySelect.value = "0"
    difficultySection.style.display = 'flex';
    gameSection.style.display = 'none';
    guessSection.style.display = 'none';
    resetButton.style.display = "none";
    resultParagraph.textContent = ""
}

resetButton.addEventListener("click", resetGame)
