(function get() {
  // Grabs the local storage JSON string and parse it into a javascript object we can use
  let data = JSON.parse(localStorage.getItem("task"));
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    let results = document.getElementById("results");
    let taskname = data[i].taskname;
    let startdate = data[i].startdate;
    let enddate = data[i].end;
    let desc = data[i].description;
    let isCompleted = data[i].isCompleted;
    let x = document.createElement("button");
    let removeAll = document.getElementById("clear");
    let li = document.createElement("li");
    li.innerText = `Task description: 
    ${desc}`;
    // Calls a function on click that clears the local storage
    removeAll.addEventListener("click", clearStorage);
    x.setAttribute("type", "button");
    x.setAttribute("class", "x");
    x.innerText = "X";
    // Calls a function on click that removes the specific task
    x.addEventListener("click", clear);
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox");
    checkbox.addEventListener("click", checked);
    let taskbtn = document.createElement("button");
    // Calls function on click that displays the description of the task
    taskbtn.addEventListener("click", display);
    // Calls function on double click that lets you edit the task
    taskbtn.addEventListener("dblclick", edit);
    taskbtn.setAttribute("type", "button");
    taskbtn.setAttribute("class", "dropbtn");
    // Calculates the days left
    let datecalc = Math.round(
      Math.abs(Date.parse(startdate) - Date.parse(enddate)) /
        1000 /
        60 /
        60 /
        24
    );
    taskbtn.innerText = `${taskname}
  ${startdate} 
  days left: ${datecalc} `;
    // if the calculated date is == 0, the taskbtn box is grey
    if (datecalc == 0) {
      taskbtn.style.backgroundColor = "grey";
    }
    li.style.display = "none";
    taskbtn.append(li);
    taskbtn.append(x);
    taskbtn.append(checkbox);
    results.append(taskbtn);
    console.log(data);
    function clear(e) {
      if (confirm("You're about to delete this task, are you certain?")) {
        taskbtn.remove();
      }
    }
    // Turns the task green if the checkbox is checked, if not, keeps it red or turns it back to red
    function checked() {
      if (checkbox.checked) {
        // SETS TASK COMPLETE TO TRUE ON CHECK
        data[i].isComplete = true;
        taskbtn.style.backgroundColor = "green";
        console.log(data);
      } else {
        taskbtn.style.backgroundColor = "red";
        data[i].isComplete = false;
      }
    }
    function display() {
      li.style.display = "block";
    }
    // Lets us edit the task name and description on double click
    function edit(e) {
      let changeName = prompt("Edit your task name:");
      let changeDesc = prompt("Edit your task description:");
      taskbtn.innerText = `${changeName}
  ${startdate}
  days left: ${datecalc}`;
      taskbtn.append(x);
      taskbtn.append(checkbox);
      li.innerText = `Task description: 
    ${changeDesc}`;
      taskbtn.append(li);
    }
  }
})();
// Clears the entire local storage and removes all tasks
function clearStorage() {
  localStorage.clear();
  let results = document.getElementById("results");
  results.innerHTML = " ";
}
