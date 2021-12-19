//EXERCISE 1

document.getElementById("navBar").setAttribute("id", "socialNetworkNavigation");

let newLi = document.createElement("li");
let textNode = document.createTextNode("Logout");
newLi.append(textNode);
document
  .getElementById("socialNetworkNavigation")
  .children[0].appendChild(newLi);

//EXERCISE 2
let ulList = document.body.children[1];
ulList.children[1].textContent = "Richard";

list = document.getElementsByClassName("list");
console.log(list);

for (let first of list) {
  first.children[0].textContent = "Fima";
}

let ul = document.querySelectorAll("ul");

for (let second of ul) {
  let newLi2 = document.createElement("li");
  let textNode2 = document.createTextNode("Hey students");
  newLi2.append(textNode2);
  second.appendChild(newLi2);
}

let secondUl = document.body.children[2];
let sarah = secondUl.children[1];
sarah.remove();

//EXERCISE 3
let div = document.body.children[0];
div.style.backgroundColor = "lightBlue";
div.style.padding = "50px";

let john = document.querySelector("li");
john.style.display = "none";

let ul = document.body.children[1];

let pete = ul.children[1];
pete.style.border = "5px red solid";

document.body.style.fontSize = "25px";
