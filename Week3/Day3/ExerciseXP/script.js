// EXERCISE 1

function myMove() {
  box = document.querySelector("#animate");
  let position = 0;
  let finish;
  clearInterval(finish);
  finish = setInterval(frame, 10);
  function frame() {
    if (position == 350) {
      clearInterval(finish);
    } else {
      position++;
      box.style.left = position + "px";
    }
  }
}

// EXERCISE 2

let fill = document.querySelector(".fill");
let emptyAll = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (let empty of emptyAll) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}
function dragEnter() {
  e.preventDefault();
  this.className += "hovered";
}
function dragLeave() {
  this.className = "empty";
}
function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
