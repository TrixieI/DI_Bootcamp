let listTasks = [];
let div = document.querySelector(".listTasks");
let input = document.querySelector(".input");
let inputValue = input.value;
let btn = document.querySelector(".submit");
btn.addEventListener("click", addTask);

function addTask(e) {
  inputValue = input.value;
  if (inputValue == null || inputValue == 0) {
    e.preventDefault();
    alert("Input required!");
  } else {
    e.preventDefault();
    listTasks.push(inputValue);
    let line = document.createElement("input");
    let label = document.createElement("label");
    label.setAttribute("for", "checkbox");
    line.setAttribute("type", "checkbox");
    let text = document.createTextNode(inputValue);
    label.append(text);
    let x = document.createElement("button");
    x.innerHTML = '<i class="fas fa-trash-alt"></i>';
    label.append(x);
    line.append(inputValue);
    div.append(line);
    div.append(label);
  }
}

for (let i = 0; i < listTasks.length; i++) {
  listTasks[i].setAttribute("type", "checkbox");
}
