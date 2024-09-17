let tilfældigtTal = Math.floor(Math.random() * 101);
// genererer et tilfældigt heltal mellem 0 og 100 og gemmer det i variablen tilfældigtTal

// Math.random() genererer et tal mellem 0 og 1, og ved at gange det med 101 og bruge Math.floor(), afrunder det til et tal mellem 0 og 100

function gætTal() {
  // henter  værdien fra inputfeltet (brugergættet) med document.getElementById("guess").value, og bruger parseInt() for at sikre, at det er et heltal
  let brugerGæt = parseInt(document.getElementById("guess").value);

  // henter feedback-elementet (id “feedback”) fra HTML viser beskeder om, hvorvidt man har gættet rigtigt eller ej
  let feedback = document.getElementById("feedback");

  // tjekker om gættet er højere end det tilfældige tal. hvis det er, opdateres feedback-elementets tekst til at sige “For højt! Prøv igen.”
  if (brugerGæt > tilfældigtTal) {
    feedback.textContent = "For højt! Prøv igen.";
  }

  // tjekker, om gættet er lavere end det tilfældige tal. hvis det er lavere, opdateres feedback til “For lavt! Prøv igen.”
  else if (brugerGæt < tilfældigtTal) {
    feedback.textContent = "For lavt! Prøv igen.";
  }

  // hvis gættet er korrekt visers “Tillykke! Du gættede rigtigt!”.

  // feedback.classList.add("celebration"); tilføjer klassen “celebration” til feedback-elementet, som ændrer farve og skriftstørrelse, baseret på de regler, jeg har defineret i CSS-filen
  else {
    feedback.textContent = "TILLYKKE!! Du gættede rigtigt!";
    feedback.classList.add("celebration");
  }
}
