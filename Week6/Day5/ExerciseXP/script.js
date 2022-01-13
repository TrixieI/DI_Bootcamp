// Self invoking function to add event listener for the submit button
(function event() {
  let submit = document.getElementById("submit");
  submit.addEventListener("click", task);
})();
let array = [];

function task(e) {
  // Get elements and prevent default
  e.preventDefault();
  let taskname = document.getElementById("taskname");
  let desc = document.getElementById("desc");
  let startdate = document.getElementById("startdate");
  let enddate = document.getElementById("enddate");
  // create empty array and object for tasks

  let task = {};
  // creating key values for tasks
  task["taskname"] = taskname.value;
  task["description"] = desc.value;
  task["startdate"] = startdate.value;
  task["end"] = enddate.value;
  task["isComplete"] = false;
  // pushing the task into an array
  array.push(task);
  console.log(array);
  // set task into local storage and turn it in a JSON string
  localStorage.setItem("task", JSON.stringify(array));
}
