(async function page() {
  let select = document.createElement("select");
  let body = document.body;
  let data = await fetch("http://localhost:8000/customers");
  if (data.status === 200) {
    let parsedData = await data.json();
    console.log(parsedData);
    function domLoop() {
      for (let i = 0; i < parsedData.length; i++) {
        let value = document.createElement("option");
        value.setAttribute("value", parsedData[i].customer_id);
        value.innerText =
          parsedData[i].first_name + " " + parsedData[i].last_name;
        select.append(value);
        body.append(select);
      }
    }
    domLoop();
  }
  let input = document.getElementById("input");
  let btn = document.getElementById("btn");
  btn.addEventListener("click", grab);
  function grab(e) {
    fetch(`http://localhost:8000/customer/?cid=${input.value}`).then((res) =>
      res.json().then((data) => {
        console.log(data[0]);
      })
    );
  }
})();

// const getCustomers = () => {
//   fetch("http://localhost:8000/customers").then((res) => res.json()).then(data => {
//     displayCustomers(data)
// })
// };

// getCustomers(data);

// const displayCustomers = (array) => {
//   const select = document.getElementById("customer_select");
//   array.forEach((item, i) => {
//     const option = new Option(
//       item.first_name + " " + item.last_name,
//       item.customer_id
//     )
// select.appendChild(option);

//   });
// };
