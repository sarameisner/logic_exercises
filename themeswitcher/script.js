document.querySelector("select").addEventListener("change", selectChange);

function selectChange(evt) {
  console.log("change", evt.target.value);

  // man kan også gøre sådan her i stedet for⬇
  //console.log(document.querySelector("select").value);
}
