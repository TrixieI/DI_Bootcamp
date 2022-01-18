async function grab() {
  let body = document.body;
  let data = await fetch("http://localhost:3000/countries");
  let select = document.createElement("select");
  select.setAttribute("name", "select");
  select.setAttribute("id", "countries");
  if (data.status === 200) {
    let parsedData = await data.json();
    for (let i = 0; i < parsedData.length; i++) {
      let value = document.createElement("option");
      value.setAttribute("value", parsedData[i].country_id);
      value.innerText = parsedData[i].country;
      select.append(value);
      body.append(select);
    }
  } else {
    throw new Error(error);
  }
}

grab();
