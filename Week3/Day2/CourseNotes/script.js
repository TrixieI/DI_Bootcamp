function insertRow() {
  let tr = document.getElementById("sampleTable");
  let row = document.createElement("tr");
  let text = document.createTextNode("New Cell");
  row.appendChild(text);
  tr.appendChild(row);

  return row;
}
