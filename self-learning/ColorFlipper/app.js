function colorflipper() {
  let body = document.body;
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  let btn = document.createElement("button");
  div.setAttribute("class", "container");
  btn.setAttribute("type", "button");
  btn.addEventListener("click", click);
  btn.innerText = "CHANGE COLOR!";
  div.append(btn);
  body.append(div);
  function click() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16); // Thanks google
    h1.innerText = `The color code for this color is: ${randomColor}`;
    div.append(h1);
    body.style.backgroundColor = `#${randomColor}`;
  }
}
colorflipper();
