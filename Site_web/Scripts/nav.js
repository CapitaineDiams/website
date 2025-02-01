function nav() {
  const nav = document.createElement("nav");
  const body = document.body;
  body.prepend(nav);
  nav.insertAdjacentHTML("beforeend", '<button class="navbutton"><a href="index.html">Accueil</a></button');
  nav.insertAdjacentHTML("beforeend", '<button class="navbutton"><a href="linkindex.html">link Index</a></button>');
}

nav()

