// funktionen til at udregne rektangelarealet (højde * bredde)
function udregnRektangelAreal(width, height) {
  return width * height;
}

// funktion til at håndtere selve beregningen og vise resultatet
function beregnAreal() {
  // henter værdierne fra inputfelterne
  let width = document.getElementById("width").value;
  let height = document.getElementById("height").value;

  // henter elementet resultat fra html hvor resultatet vises
  let resultatElement = document.getElementById("resultat");

  // tjekker om felterne er udfyldt og konverterer værdierne til tal med parseFloat
  if (width && height) {
    let areal = udregnRektangelAreal(parseFloat(width), parseFloat(height));

    // viser resultatet
    resultatElement.textContent = `Arealet af rektanglet er: ${areal} kvadratmeter`;
  } else {
    // viser fejlmeddelelse og tilføjer klassen 'error'
    resultatElement.textContent = "Indtast både bredde og højde for at beregne arealet.";
  }
}

// event listener, der aktiverer beregningen, når knappen klikkes
document.getElementById("beregnButton").addEventListener("click", beregnAreal);
