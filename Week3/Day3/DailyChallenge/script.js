let form = document.forms[0];
let inputBox = document.querySelector("#text");
let inputBoxValue = inputBox.value;

inputBox.addEventListener("keydown", key);

function key(event) {
  let charCode = event.keyCode;

  if (
    (charCode > 64 && charCode < 91) || // Allows only a to z characters
    (charCode > 96 && charCode < 123) || // Allows you to press your F1-F12 keys
    charCode == 8 // Allows to remove what you type in
  ) {
  } else {
    alert("Numbers and special characters are NOT allowed!");
    event.preventDefault();
    return false;
  }
}
