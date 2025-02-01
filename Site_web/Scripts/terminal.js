var div = document.getElementById("logs");
var terminal = document.getElementById("terminal");
terminal.focus();
var commandes = [
    "/help : Affiche la liste des commandes disponibles",
    "/clear : Efface l'écran",
    "/about : Affiche des informations sur le site",

];


function addLogs(value) {
    if (value) {
        var log = document.createElement("p");
        log.textContent = value;
        div.appendChild(log);
        log.setAttribute("class", "log");
    }
}

function interpretCommand(command) {
    if (command === "/help") {
        addLogs("Voici la liste des commandes disponibles :");
        for (let i = 0; i < commandes.length; i++) {
            addLogs(commandes[i])};

    } else if (command === "/clear") {
        div.innerHTML = "";

    } else if (command === "/about") {
        addLogs("Ce site est un projet de test pour le cours de développement web");

    } else if (commandes.includes("*") === true) {
        addLogs("Calcul en cours");

    } else {
        addLogs(command);
    }
}

terminal.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    interpretCommand(terminal.value);
    terminal.value = "";
    }
});

