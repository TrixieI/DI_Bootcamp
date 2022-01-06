(function button() {
  let btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.setAttribute("class", "btn");
  btn.style.position = "fixed";
  btn.style.top = "50%";
  btn.style.left = "46%";
  btn.addEventListener("click", exercise);
  btn.innerText = "Find someone";
  document.body.append(btn);
})();

async function exercise() {
  try {
    let loading = document.getElementById("loading");
    loading.style.display = "block";
    loading.style.position = "fixed";
    loading.style.left = "40%";
    loading.style.top = "13%";
    loading.style.fontSize = "60px";
    loading.innerText = `Loading...`;
    let response = await fetch(
      `https://www.swapi.tech/api/people/${Math.floor(Math.random() * 60)}`
    );
    if (response.status == 200) {
      loading.style.display = "none";
      let jsData = await response.json();
      let cont = document.getElementById("container");
      let name = jsData.result.properties.name;
      let height = jsData.result.properties.height;
      let hairColor = jsData.result.properties.hair_color;
      let gender = jsData.result.properties.gender;
      let birth = jsData.result.properties.birth_year;
      let grab = jsData.result.properties.homeworld;
      let newgrab = await fetch(grab);
      let data = await newgrab.json();
      let world = data.result.properties.name;
      console.log(data);
      cont.style.textAlign = "center";
      cont.style.fontSize = "30px";
      cont.innerText = `${name} \n Height: ${height} \n Hair color: ${hairColor} \n Gender: ${gender} \n Birth year: ${birth} \n Homeworld: ${world}`;
    } else {
      throw new Error(error);
    }
  } catch (error) {
    let cont = document.getElementById("container");
    cont.innerText = "Sorry this person is not available :(";
  }
}
