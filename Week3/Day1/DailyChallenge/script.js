let solarSystem = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

let section = document.body.children[0];

for (let i = 0; i < solarSystem.length; i++) {
  let planets = document.createElement("div");
  planets.className = "planet ";
  planets.className += solarSystem[i];
  section.appendChild(planets);
}

section.children[0].style.backgroundColor = "brown";
section.children[1].style.backgroundColor = "yellow";
section.children[2].style.backgroundColor = "green";
section.children[3].style.backgroundColor = "red";
section.children[4].style.backgroundColor = "gray";
section.children[5].style.backgroundColor = "orange";
section.children[6].style.backgroundColor = "cyan";
section.children[7].style.backgroundColor = "blue";
