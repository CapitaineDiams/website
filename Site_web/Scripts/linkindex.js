listWebPage = [
  "index",
  "page1", 
  "jeuxpref",
  "Minecraft",
  "testwiki",
  "testcommandes",
  "guessthenumber",
  "créetonparagraphe",
  "jeudeclic",
  "jeumoney" 
]
listDesNoms = [
  "Accueil",
  "Page 1",
  "Jeux préférés",
  "Minecraft",
  "Test Wiki",
  "Test de balises",
  "Guess the Number",
  "Crée ton paragraphe",
  "Jeu de clic",
  "Jeu  de Money"
]
listDesDescriptions = [
  "Retourner à la page d'accueil",
  "c'est le premier test de page sur ce site",
  "C'est une liste de mes jeux préférés!",
  "C'est la page principale des articles concernant Minecraft", 
  "C'est un test de recopiage d'une page Wikipedia",
  "Page de Test de: balises html, css et js",
  "Page de test JavaScript, essaye de touver le nombre",
  "Page ou un paragraphe se crée quand tu clique",
  "cliquez pour gagner des points",
  "cliquez, vendez et gagnez" 
]

function createButton(value) {
  const div = document.getElementById("linkindexdiv");
  const link = document.createElement("button");
  div.appendChild(link);
  link.insertAdjacentHTML("afterbegin", 
  ` <p>
      <a :hover class=linkindex${value} href='${listWebPage[value]}.html'>${listDesNoms[value]}</a> 
      : ${listDesDescriptions[value]}</p>`
  );

  const br = document.createElement("br");
  link.after(br);
  
}

for (let i = 0; i < listWebPage.length; i++) {
  createButton(i);
}
