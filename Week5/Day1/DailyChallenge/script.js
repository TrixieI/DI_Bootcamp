// gatherData function will find all the input fields and create an empty object
function gatherData() {
  let fname = document.querySelector("#fname");
  let lname = document.querySelector("#lname");
  let submit = document.querySelector("#submit");
  submit.addEventListener("click", send);
}
// the send function will be called when we click on the send button
// it will push our input field values into the previously created object
// we console.log object to make sure everything works and that our new keys and values are there
// we then create a new variable and use the JSON.stringify method on our object
// this turns our object that contains the name and last name into a JSON object
function send(e) {
  let object = {};
  e.preventDefault();
  object.name = fname.value;
  object.lastname = lname.value;
  console.log(object);
  let jsonObject = JSON.stringify(object);
  console.log(jsonObject);
}

gatherData();
