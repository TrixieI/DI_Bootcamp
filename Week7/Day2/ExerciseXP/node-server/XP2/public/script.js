async function page() {
  let body = document.body;
  let data = await fetch("http://localhost:3000/");
  let parsedData = await data.json();
  console.log(parsedData);
  let string = JSON.stringify(parsedData);
  body.append(string);
}

page();

// Exercise+ part 3

function exercise3() {
  let btn = document.getElementById("btn");
  btn.addEventListener("click", click);

  function click() {
    alert("Hello from Javascript!");
  }
}
exercise3();
