document.getElementById("theme-select").addEventListener("change", (event) => {
  const selectedTheme = event.target.value; // henter valgt tema
  document.body.setAttribute("data-theme", selectedTheme); // opdaterer data-theme
});
