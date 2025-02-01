let JDMbuttonclic = document.querySelector(".JDMbuttonclic")
let affichagevariablepierre = document.querySelector(".affichagevariablepierre")
let pierres = 0 

JDMbuttonclic.addEventListener("click", function() {
  pierres += 1
  affichagevariablepierre.textContent = pierres + "💎"
});