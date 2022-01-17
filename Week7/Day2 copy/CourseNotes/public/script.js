// async function page() {
//   let data = await fetch("http://localhost:4000/api/users");
//   let btn = document.getElementById("btn");
//   btn.addEventListener("click", grab);
//   let parsedData = await data.json();

//   function grab() {
//     for (let i = 0; i < parsedData.length; i++) {
//       let div = document.createElement("div");
//       div.innerText = parsedData[i].name;
//       console.log(parsedData[i]);
//       document.body.append(div);
//     }
//   }
// }
// page();

// part 3 exericse +

function exercise3() {
  let btn = document.getElementById("btn");
  btn.addEventListener("click", click);

  function click() {
    alert("Hello from Javascript!");
  }
}
exercise3();
