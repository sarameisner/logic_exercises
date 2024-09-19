document.getElementById("beregnBtn").addEventListener("click", beregn);

// her er beregningen, som løses ved at lægge momsen til beløbet
// hvis ikke der bliver skrevet noget i moms input er standardværdien 2%
function beregnMoms(beloeb, moms = 2) {
  let total = beloeb + beloeb * (moms / 100);
  return total;
}

function beregn() {
  let beloeb = document.getElementById("beloeb").value;
  let moms = document.getElementById("moms").value;

  if (moms === "") {
    moms = 2;
  }
  // parseFloat skrives for at sikre at værdierne kommer ud som tal
  let totalBeloeb = beregnMoms(parseFloat(beloeb), parseFloat(moms));
  document.getElementById("resultat").textContent = `Beløbet med ${moms}% moms lagt til er: ${totalBeloeb} kr.`;
}

// 1. Inputfelterne: Brugeren indtaster et beløb og evt en momssats

// 2. Klik på knappen: Når knappen klikkes, bliver funktionen beregn() kaldt

// 3.	Beregn moms: Funktionen henter værdierne fra inputfelterne, tjekker, om moms er tomt, og kalder       beregnMoms-funktionen

// 4.	Vis resultat: Det beregnede beløb bliver vist på siden ved hjælp af document.getElementById('resultat').textContent, der opdaterer teksten i HTML
