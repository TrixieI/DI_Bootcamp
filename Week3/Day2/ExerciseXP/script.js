// EXERCISE 1
let article = document.querySelector("article");
let h1 = article.querySelector("h1");
console.log(h1);
let lastPara = article.lastElementChild;
lastPara.remove();
let h2 = article.querySelector("h2");
let h3 = article.querySelector("h3");
let allPara = article.querySelectorAll("p");
console.log(allPara);

function red() {
  h2.style.backgroundColor = "red";
}

function hide() {
  h3.style.display = "none";
}

function btn() {
  for (let loop of allPara) loop.style.fontWeight = "bold";
}

// EXERCISE 2
let form = document.querySelector("form");
console.log(form);
let allInputId = document.querySelectorAll("#fname, #lname, #submit");
console.log(allInputId);
let fname = document.getElementsByName("fname");
let lname = document.getElementsByName("lname");
console.log(fname, lname);
let ulAnswers = document.querySelector(".usersAnswer");
console.log(ulAnswers);
let submit = document.querySelector("#submit");
let newFname = document.querySelector("#fname");
let newLname = document.querySelector("#lname");

submit.addEventListener("click", click);

function click(event) {
  event.preventDefault();
  let newLi = document.createElement("li");
  let newText = document.createTextNode(newFname.value);
  newLi.append(newText);
  ulAnswers.appendChild(newLi);
  let newLi2 = document.createElement("li");
  let newText2 = document.createTextNode(newLname.value);
  newLi2.append(newText2);
  ulAnswers.appendChild(newLi2);
}

// EXERCISE 3
let allBoldItems;

function getBold_items() {
  allBoldItems = document.querySelectorAll("strong");
  return allBoldItems;
}
getBold_items();

function highlight() {
  for (let loop of allBoldItems) {
    loop.style.color = "blue";
  }
}

function return_normal() {
  for (let loop of allBoldItems) {
    loop.style.color = "black";
  }
}

// EXERCISE 4
const addForm = document.forms["MyForm"];

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  let volume = (4 / 3) * Math.PI * Math.pow(value, 3);
  let result = (addForm.querySelector("#volume").value = volume);
});
