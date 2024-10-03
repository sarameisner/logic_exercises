// bc er arrayet for breadcrum
const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

// henter breadcrumb-nav elementet og knappen til
const breadcrumbNav = document.getElementById("breadcrumbNav");
const generateBtn = document.getElementById("generateBtn");

// funktionen der genererer breadcrumb
function generateBreadcrumb() {
  breadcrumbNav.innerHTML = "";

  // vi kigger på hvert element i listen, for hvert element opretter vi en kasse / span
  // vi tilføjer klassen breadcrum for at style den
  bc.forEach((item, index) => {
    const span = document.createElement("span");
    span.classList.add("breadcrumb");

    // gør alle elementer til et links undtagen det sidste
    if (index < bc.length - 1) {
      // opretter selve linket
      const link = document.createElement("a");
      // laver urlen
      link.href = item.link;
      // laver teksten der skal vises i linket
      link.textContent = item.name;
      // tilføjer linket til breadcrum
      span.appendChild(link);

      // tilføjer skråstregen efter hvert link undtagen sidste
      const separator = document.createElement("span");
      // selve skråstregen
      separator.textContent = "/";
      // tilføjer klassen så vi kan style
      separator.classList.add("breadcrumb-separator");
      // tilføjer vores span som er vores link
      breadcrumbNav.appendChild(span);
      // tilføjer skråstregen
      breadcrumbNav.appendChild(separator);
    }
    // hvis det er det sidste element i arrayet skal vi ikke lave et link men bare tilføje navnet som en tekst
    else {
      // skriver navnet
      span.textContent = item.name;
      // tilføjer det til breadcrum
      breadcrumbNav.appendChild(span);
    }
  });
}

// event listener til at hente knappen som udløser breadcrum
generateBtn.addEventListener("click", generateBreadcrumb);
