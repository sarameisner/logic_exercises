function RandomNumber() {
  // genererer et tilfældigt heltal fra 0 til og med 100 og gemmer det i variablen randomNumber
  let randomNumber = Math.floor(Math.random() * 101);

  console.log(randomNumber);

  // henter mit id fra html og via innerText kan vi ændre teksten .. det bliver lagt til efter h1
  document.getElementById("random-number").innerText = "Tilfældigt tal: " + randomNumber;
}

// gør at html indholdet opdaterer
RandomNumber();
