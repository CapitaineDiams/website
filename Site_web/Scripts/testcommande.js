let input = document.querySelector(".inputchange");
let log = document.getElementById("log");

input.addEventListener("change", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}

let inputClique = document.querySelector(".inputclick");
let nbdeClique = 0;
let nbdeCliqueAtteint = document.querySelector(".paragrapheinputclique");

function clickCompteur() {
  nbdeClique += 1;
  nbdeCliqueAtteint.textContent = "vous avez cliqué " + nbdeClique + " fois";
}

inputClique.addEventListener("click", clickCompteur);

let nbdepierre = 0
let nbdefer = 0
const nbdepierreparagraphe = document.querySelector(".nbdepierre");
const pierreButton = document.querySelector(".boutonpierre");
const ferButton = document.querySelector(".boutonFer");
const nbdeferparagraphe = document.querySelector(".nbdefer");

function pierreCompteur() {
  nbdepierre += 1;
  nbdepierreparagraphe.textContent = "Vous avez " + nbdepierre + " pierres⛰️";
}

function ferCompteur() {
  if (nbdepierre >= 10) {
    nbdefer +=1;
    nbdepierre -= 11;
    pierreCompteur();
    nbdeferparagraphe.textContent = "Vous avez " + nbdefer + " fers⛏️";
  }
}

pierreButton.addEventListener("click", pierreCompteur);
ferButton.addEventListener("click", ferCompteur)

let BTP = document.querySelector(".BTP")
let PTP = document.querySelector(".PTP")

function TheoremePy () {
  let l1 = prompt("Veuillez rentrer la longueur 1");
  let l2 = prompt("Veuillez rentrer la longueur 2");
  let answerHyPy = Math.hypot(l1,l2)
  let l1l2 = Math.pow(answerHyPy, 2);
  PTP.textContent = "L'Hypothénuse est égal à la racine carré de " + l1l2 + ". C'est donc égal à " + answerHyPy + ".";
  BTP.setAttribute("style","background-color: #00ffe1");
}

BTP.addEventListener("click", TheoremePy);

