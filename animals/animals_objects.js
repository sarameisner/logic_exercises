"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = []; // vores første array med alle dyr
let filteredAnimals = []; // array med de filtrerede dyr

function start() {
  console.log("ready");

  loadJSON();

  // lyt efter ændringer i dropdownen
  document.querySelector("#filter-type").addEventListener("change", selectFilter);
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // når alt dataen er indlæst, kaldes prepareObjects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // split fullname
    const fullName = jsonObject.fullname.split(" ");
    const name = fullName[0]; // navnet
    const desc = fullName[2]; // beskrivelsen
    const type = fullName[fullName.length - 1]; // sidste ord er typen
    const age = jsonObject.age; // alder

    // opretter dyreobjektet og tilføjer det til allAnimals arrayet
    const animal = { name, desc, type, age };

    // tilføjer det nye objekt til allAnimals arrayet
    allAnimals.push(animal);
  });

  // viser listen
  filteredAnimals = allAnimals;
  displayList();
}

// selve filtreringen
function selectFilter(event) {
  const filterType = event.target.value; // henter den valgte filtrering
  filterList(filterType);
}

// filtrer listen baseret på det valgte
function filterList(type) {
  if (type === "all") {
    filteredAnimals = allAnimals; // viser alle dyr hvis filteret er all
  } else {
    // filtrerer dyrene
    filteredAnimals = allAnimals.filter((animal) => animal.type === type);
  }
  displayList(); // opdaterer visningen
}

function displayList() {
  // rydder listen, så vi starter med en tom tabel
  document.querySelector("#list tbody").innerHTML = "";

  // bygger en ny liste og kalder displayAnimal for hvert dyr
  filteredAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // opretter en klon af HTML-skabelonen
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // indsætter dyrets data i klonen
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // tilføjer klonen til listen
  document.querySelector("#list tbody").appendChild(clone);
}
