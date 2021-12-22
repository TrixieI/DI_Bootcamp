let colorArray = [
  "#000000",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#DFF0B3",
  "#L6121A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#48173D",
];
let canvas = document.querySelector("#canvas");
let section = document.querySelector("#pallet");
let btn = document.querySelector(".clear");
let boxLocation = document.getElementsByClassName("box");
let storeColor;

for (let i = 0; i < colorArray.length; i++) {
  let colors = document.createElement("div");
  colors.className = "color ";
  colors.style.backgroundColor = colorArray[i];
  colors.style.border = "1px solid black";
  colors.style.padding = "5px";
  colors.addEventListener("click", pickColor);
  section.appendChild(colors);
}

for (let i = 0; i <= 100 * 24 - 1; i++) {
  let boxes = document.createElement("div");
  boxes.className = "box";
  boxes.style.backgroundColor = "white";
  boxes.addEventListener("mousedown", click);
  boxes.addEventListener("mouseover", paint);
  boxes.addEventListener("mouseup", stop);

  canvas.appendChild(boxes);
}

btn.addEventListener("click", clean);
let isClicked = false;

function click(e) {
  isClicked = true;
  e.target.style.backgroundColor = storeColor;
}

function stop() {
  isClicked = false;
}

function paint(e) {
  if (isClicked === true) {
    e.target.style.backgroundColor = storeColor;
  }
}

function clean() {
  for (let i = 0; i < boxLocation.length; i++) {
    boxLocation[i].style.backgroundColor = "white";
  }
}

function pickColor(e) {
  storeColor = e.target.style.backgroundColor;
}
