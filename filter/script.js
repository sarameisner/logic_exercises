// array af køretøjerne som har forskellige egenskaber
const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

// her peges på <tbody> i tabellen, så der senere kan vise data her
const tbodyPointer = document.querySelector("tbody");

// funktion der viser køretøjer i tabellen baseret på array (arr)
function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = ""; // det her tømmer tabellen først, så der kan vises nye data

  // gennemgår hvert køretøj i arrayet og tilføjer en række til tabellen
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
      <td>${each.type ? each.type : ""}</td>  <!-- Viser type, eller efterlader tomt hvis undefined -->
      <td>${each.fuel ? each.fuel : ""}</td>  <!-- Viser brændstof, eller tomt hvis undefined -->
      <td>${each.passengers ? each.passengers : ""}</td>  <!-- Viser antal passagerer -->
      <td>${each.stops ? each.stops.join(", ") : ""}</td>  <!-- Viser stop (hvis nogen), ellers tom -->
      <td>${each.ownedBy ? each.ownedBy : ""}</td>  <!-- Viser ejerens navn (hvis nogen) -->
      <td>${each.isElectric ? "Yes" : "No"}</td>  <!-- Viser "Yes" hvis elektrisk, ellers "No" -->
      <td>${each.isTandem ? "Yes" : "No"}</td>  <!-- Viser "Yes" hvis tandem, ellers "No" -->
    </tr>`;
  });
}

// knappen til at vise alle køretøjer
document.getElementById("allBtn").addEventListener("click", () => {
  showTheseVehicles(vehicles); // viser alle køretøjer uden filtrering
});

// knappen til at vise kun el-drevne køretøjer
document.getElementById("electricBtn").addEventListener("click", () => {
  const filtered = vehicles.filter((v) => v.isElectric); // filtrerer efter køretøjer der er el-drevne
  showTheseVehicles(filtered); // viser dem
});

// knappen til at vise køretøjer med mere end 2 sæder
document.getElementById("moreThan2SeatsBtn").addEventListener("click", () => {
  const filtered = vehicles.filter((v) => v.passengers > 2);
  showTheseVehicles(filtered);
});

// knappen til at vise el-drevne køretøjer ejet af Jonas
document.getElementById("electricOwnedByJonasBtn").addEventListener("click", () => {
  const filtered = vehicles.filter((v) => v.isElectric && v.ownedBy === "Jonas"); // el-drevne og ejet af Jonas
  showTheseVehicles(filtered);
});

// rugbrøds-drevne køretøjer med plads til mere end 1 passager
document.getElementById("rugbroedBtn").addEventListener("click", () => {
  const filtered = vehicles.filter((v) => v.fuel === "Rugbrød" && v.passengers > 1); // rugbrøds-drevne og mere end 1 passager
  showTheseVehicles(filtered);
});

// viser alle køretøjer, når siden indlæses første gang
showTheseVehicles(vehicles);
