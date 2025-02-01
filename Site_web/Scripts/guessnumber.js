let randomNumber = (Math.floor(Math.random()* 100) % 99)  + 1;

let guesses = document.querySelector(".guesses");
let lastResult = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");

let guessSubmit = document.querySelector(".guessSubmit");
let guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
guessField.focus();

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function checkGuess() {
  let userGuess = Math.floor(Number.parseFloat(guessField.value));
  if (Number.isNaN(userGuess)) {
    lowOrHi.textContent = "Ce que vous avez saisi n'est pas un nombre"
  }
  if (guessCount === 1) {
    guesses.textContent = "Propositions précédentes&nbsp;: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Bravo, vous avez trouvé le nombre !";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!! PERDU&nbsp;!!!";
    setGameOver();
  } else {
    lastResult.textContent = "Faux&nbsp;!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Le nombre saisi est trop petit !";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Le nombre saisi est trop grand !";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

function resetGame() {
  guessCount = 1;

  let resetParas = document.querySelectorAll(".resultParas p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = (Math.floor(Math.random()* 100) % 99)  + 1;
}

guessSubmit.addEventListener("click", checkGuess);

