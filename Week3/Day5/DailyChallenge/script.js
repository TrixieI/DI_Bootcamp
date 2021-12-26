let gridSystem = document.createElement("div");
gridSystem.classList.add("letter");
gridSystem.style.display = "grid";
gridSystem.style.gridTemplateColumns = "repeat(7, 1fr)";
gridSystem.style.gridTemplateRows = "repeat(7, 1fr)";
gridSystem.style.width = "200px";
gridSystem.style.height = "400px";
document.body.appendChild(gridSystem);

function Grid() {
  for (i = 1; i < 50; i++) {
    let blankDiv = document.createElement("div"[i]);
    gridSystem.appendChild(blankDiv);
    blankDiv.classList.add("letterspace");
    blankDiv.style.border = "1px solid white";
    blankDiv.style.backgroundColor = "purple";
    blankDiv.style.color = "gold";
    blankDiv.style.fontSize = "40px";
    if (
      i == 3 ||
      i == 4 ||
      i == 5 ||
      i == 9 ||
      i == 13 ||
      i == 16 ||
      i == 20 ||
      i == 23 ||
      i == 30 ||
      i == 37 ||
      i == 44 ||
      i == 27 ||
      i == 34 ||
      i == 41 ||
      i == 48 ||
      i == 24 ||
      i == 25 ||
      i == 26
    ) {
      let star = document.createTextNode("$");
      blankDiv.appendChild(star);
    }
  }
}
Grid();
